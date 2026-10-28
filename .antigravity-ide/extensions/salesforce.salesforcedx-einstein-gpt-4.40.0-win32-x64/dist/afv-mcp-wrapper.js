/*
Copyright (c) 2026, salesforce.com, inc.
All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
For full license text, see LICENSE.txt file in the repo root or http://www.apache.org/licenses/LICENSE-2.0
*/
// biome-ignore-all lint/suspicious/noConsole: this file is the standalone wrapper script that runs out-of-process via `node afv-mcp-wrapper.js`. Its stderr IS the contract with the spawning extension host — `console.error` is the only logging channel for fatal-init errors that surface before the per-package log file is initialized. The wrapper is the sole file in this layer with a `noConsole` exemption — see `runtime/spec.md` § Gotchas.
// biome-ignore-all lint/nursery/noFloatingPromises: `main()` is the script entry point — there is no caller to `await` it, and wrapping in `.catch(…)` would just duplicate the in-main try/catch.
// biome-ignore-all lint/style/useNamingConvention: `npm_config_*` keys are dictated by npm (env-var contract — npm reads these as `npm config get <name>` settings; renaming them breaks the wrapper). `NODE_CMD.NPM`/`NODE_CMD.NPX` are enum-like constants — uppercase reads like an enum at every call site (`getNodeCommandArgs(NODE_CMD.NPM, …)`).
// biome-ignore-all lint/performance/useTopLevelRegex: the two regexes in `packageId` sanitization are called once per wrapper instance (per spawn), not in a hot loop — hoisting them buys microseconds at the cost of readability.
/**
 * AFV MCP runner — installs and executes MCP servers distributed as npm
 * packages.
 *
 * This wrapper script is materialized to disk by `wrapper.ts` so ADX
 * (the Agent Developer Experience SDK) can spawn it as a stable on-disk
 * entry point. It addresses common npm installation issues by:
 *
 * 1. Using isolated per-package workspaces (`cwd: cacheDir` on spawn) to
 *    keep `node_modules` trees from colliding across MCP packages; the
 *    npm tarball cache (`npm_config_cache`) stays at npm's default
 *    `~/.npm` so tarball downloads are shared across packages.
 * 2. Implementing retry logic for network issues
 * 3. Pre-verifying server installation before starting
 * 4. Providing clean cache cleanup on failures
 * 5. Creating detailed debug logs that survive cache cleanup operations
 * 6. PID tracking for cleanup by the extension host
 *
 * Logging: stdout is reserved for the MCP protocol — never written to here;
 * stderr carries only fatal-init errors; routine output goes to the
 * per-package log file at `baseCacheDir/{packageId}.log` (npm debug logs land
 * in the same directory).
 *
 * Spawn contract: `npmBin`/`npxBin` are invoked directly; `nodeBin` is loaded
 * from `nodePath.json` for the log header only. PID tracking writes per-
 * extension-host `<extHostPid>.json` mapping `packageName → [wrapperPid,
 * childPid]` — `wrapper.ts` `cleanupStalePidFiles` is the read side.
 *
 * Built-in-only constraint: this script runs via `node` with no dependency-
 * loading step, so it can use ONLY Node.js built-ins (no execa, no zod, etc.).
 *
 * Usage: `node afv-mcp-wrapper.js <package[@version]> [args...]`
 *
 * @typedef {object} NodePathResult
 * @property {string} nodeBin   Path to (or name of) the node binary
 * @property {string} npxBin    Path to (or name of) the npx binary
 * @property {string} npmBin    Path to (or name of) the npm binary
 * @property {string} nodeVersion  Node version reported by `node --version`
 * @property {"system_node"|"none"} source  Always "system_node" in v4
 */

const { spawn } = require("node:child_process")
const fs = require("node:fs").promises
const fsSync = require("node:fs")
const path = require("node:path")
const { parseArgs } = require("node:util")

// npx args used for every install/verify/run. `--yes` non-interactively
// accepts prompts (no human at the wrapper); `--prefer-offline` falls back
// to installed packages before hitting the network. The deferred `--offline`
// upgrade (post install+verify) is tracked as a TODO until we have signal
// that the registry-hit on every run is meaningful overhead.
const NPX_ARGS = ["--yes", "--prefer-offline"]

// Environment variables for npm/npx commands. User MCP-config env-field
// values take precedence over these (precedence chain enforced at the
// spawn site). Notes:
//   - `npm_config_loglevel: "error"` keeps the wrapper-process stderr free
//     of normal npm progress chatter; all logs land in the npm logs dir.
//   - `npm_config_fetch_retries: "5"` handles transient network issues on
//     first-run install (the heaviest network hit MCP makes).
//   - logs_dir and cache are set dynamically in initialize().
const NPM_ENV_VARS = {
	NODE_ENV: "production",
	npm_config_loglevel: "error",
	npm_config_fund: "false",
	npm_config_audit: "false",
	npm_config_progress: "false",
	npm_config_update_notifier: "false",
	npm_config_fetch_retries: "5",
	npm_config_registry: "https://registry.npmjs.org/",
	// Refuse to run any preinstall/postinstall script the tarball ships —
	// the in-band defense documented in `runtime/spec.md` § *Threat model*.
	npm_config_ignore_scripts: "true",
}

// Cooldown handling — MUST stay in sync with
// `packages/core/src/runtime/npm-cooldown.ts` (parity test:
// `__tests__/cooldown-parity.test.ts`). A `before` / `min-release-age`
// cooldown ETARGETs a freshly-published `@salesforce/mcp`; we respect it by
// default and bypass only after a cooldown-ETARGET, on the next retry.
const NPM_COOLDOWN_ETARGET_PATTERN = /\betarget\b/i
const NPM_COOLDOWN_SIGNATURE_PATTERN = /with a date before|min[-_\s]?release[-_\s]?age/i
const NPM_COOLDOWN_BYPASS_ENV = { npm_config_min_release_age: "0" }

function isNpmCooldownError(message) {
	return NPM_COOLDOWN_ETARGET_PATTERN.test(message) && NPM_COOLDOWN_SIGNATURE_PATTERN.test(message)
}

// Margin below the discovery deadline so the wrapper logs its `Install outcome:`
// line and exits before ADX escalates SIGKILL — see runtime/spec.md > Wrapper run sequence & discovery budget.
const DISCOVERY_SAFETY_MARGIN_MS = 2_000

// Fallback only when nodePath.json carries no `discoveryTimeoutMs` (older extension); the current one always stamps the real value via `MCP_DISCOVERY_TIMEOUT_MS`.
const DEFAULT_DISCOVERY_TIMEOUT_MS = 600_000

// Whole-run budget (resolve + install + verify) derived from the discovery deadline so one spawn finishes a cold install in ADX's window — see runtime/spec.md > Wrapper run sequence & discovery budget.
const computeRunBudgetMs = (discoveryTimeoutMs) =>
	Math.max(0, (discoveryTimeoutMs || DEFAULT_DISCOVERY_TIMEOUT_MS) - DISCOVERY_SAFETY_MARGIN_MS)

// Budget for methods exercised outside `run()` (standalone / defensive); `initialize()` derives the real per-instance budget from the stamped value.
const DEFAULT_RUN_BUDGET_MS = computeRunBudgetMs(DEFAULT_DISCOVERY_TIMEOUT_MS)

// Bound on the `npm view` probe (also clamped to the run budget) so a hung registry can't ride to the deadline before the offline fallback — see runtime/spec.md > Wrapper run sequence & discovery budget.
const RESOLVE_TIMEOUT_MS = 10_000

// Slice of the shared attempt budget left for the next spawn; clamps at 0 so an
// exhausted budget times the spawn out at once rather than passing a negative
// delay to setTimeout.
const remainingBudgetMs = (deadlineMs) => Math.max(0, deadlineMs - Date.now())
// Marker embedded in the timeout rejection so the retry loop can label the
// terminal outcome `timeout` vs `failed`.
const INSTALL_TIMEOUT_MARKER = "Install timed out"
// Single grep-able terminus per install — `Install outcome: success|failed|timeout`.
const INSTALL_OUTCOME_PREFIX = "Install outcome:"
// Completion sentinel written (the resolved version) only after install AND
// verify both succeed, under the install lock. The warm-cache fast path keys
// off THIS, not a bare `node_modules/<pkg>/package.json` — so an install
// killed mid-flight (the lock-starvation scenario) never warm-path-skips into
// a half-populated `node_modules`; it re-installs instead.
const INSTALL_MARKER_FILE = ".afv-install-complete"

// Cap on the running server's stderr retained for the failure log. The DX
// server's stderr is streamed through (not buffered) during a healthy run; only
// this bounded tail is held so a non-zero exit persists the real reason without
// letting a long-lived, chatty server grow the buffer unbounded. Matches the
// Copy Diagnostics wrapper-log tail budget (`WRAPPER_LOG_TAIL_BYTES`).
const SERVER_STDERR_TAIL_LIMIT = 8000

// Tail of npm's own debug log appended to the per-package log on a terminal
// install failure — npm writes registry/network/auth detail there that never
// reaches our stderr. Bounded like the server stderr tail.
const NPM_DEBUG_LOG_TAIL_LIMIT = 8000

const NODE_CMD = {
	NPM: "npm",
	NPX: "npx",
}

const BASE_CACHE_DIR_NAME = "afv-npm-cache"
const NPM_LOGS_DIR_NAME = "npm_logs"
// npm/npx cache (tarballs + npx's `_npx` resolution cache) pinned under the
// per-package cacheDir so `cleanupCache()` can wipe a corrupt resolution cache
// too — see runtime/spec.md > Cache self-heal (W-22959625).
const NPM_CACHE_DIR_NAME = ".npm-cache"
const NODE_PATH_FILE = "nodePath.json"
const PID_DIR_NAME = "afv_mcp_pids"
// Sibling directory of `afv-mcp-wrapper.js` for per-packageId install
// locks (see `acquireLock` below). Lives outside `afv-npm-cache/`
// because the cache dir is itself the resource we're guarding — locking
// inside it loses the lock when retry-on-failure runs `cleanupCache`.
const LOCKS_DIR_NAME = ".locks"
// File written inside a PID-aware lock sentinel holding the holder's pid, so a
// contender can steal a sentinel whose owner is provably dead (the SIGKILL'd-
// holder leak) instead of waiting out the mtime `staleMs`. Only the
// install-lock callsite opts in — see `acquireLock` `opts.ownerPidAware`.
const OWNER_PID_FILE = "owner.pid"

// `shell: true` is only needed on Windows where `.cmd`/`.bat` need cmd.exe.
// Ref: https://nodejs.org/docs/latest-v22.x/api/child_process.html#spawning-bat-and-cmd-files-on-windows
const IS_WINDOWS = process.platform === "win32"

/**
 * Promise-based wrapper around `child_process.spawn` with optional output
 * capture. Capture listeners are skipped for a fully-inherited `stdio:
 * 'inherit'` spawn (the child shares the parent's fds, so there is no pipe
 * to read from). A mixed `stdio: ['inherit', 'inherit', 'pipe']` — what
 * `startServer` uses so stdout stays on the MCP protocol while stderr is
 * readable — still exposes `childProcess.stderr` for the caller to drain.
 *
 * @param {string} command - Command to execute
 * @param {string[]} args - Arguments for the command
 * @param {object} options - Spawn options
 * @param {boolean} [options.captureOutput] - Capture and return stdout as string
 * @param {boolean} [options.returnProcess] - Return `{ childProcess, processCompletionPromise }` instead of awaiting
 * @param {number} [options.timeoutMs] - Kill the child + reject with {@link INSTALL_TIMEOUT_MARKER} after this many ms (ignored when `returnProcess`).
 * @returns {Promise<string|void>|{childProcess: object, processCompletionPromise: Promise}}
 */
async function spawnProcess(command, args = [], options = {}) {
	const { captureOutput = false, returnProcess = false, timeoutMs, ...spawnOptions } = options

	const childProcess = spawn(command, args, {
		...spawnOptions,
		shell: IS_WINDOWS,
		// Precedence: spawnOptions.env (user MCP settings) > NPM_ENV_VARS (wrapper defaults) > process.env (system)
		env: { ...process.env, ...NPM_ENV_VARS, ...spawnOptions.env },
	})

	let stdout = ""
	let stderr = ""

	if (captureOutput && spawnOptions.stdio !== "inherit") {
		childProcess.stdout?.on("data", (data) => {
			stdout += data.toString()
		})
		childProcess.stderr?.on("data", (data) => {
			stderr += `ERROR: ${data.toString()}`
		})
	}

	// PID-based killing (via `wrapper.ts`) handles user-driven stop/restart;
	// this Promise handles natural process completion.
	const processCompletionPromise = new Promise((resolve, reject) => {
		childProcess.on("close", (code, signal) => {
			if (code === 0) {
				resolve(captureOutput ? stdout.trim() : undefined)
			} else {
				const errorMsg = signal
					? `Process killed with signal ${signal}`
					: `Process exited with code ${code}${stderr ? `\nStderr: ${stderr}` : ""}`
				reject(new Error(errorMsg))
			}
		})
		childProcess.on("error", (error) => reject(error))
	})

	if (returnProcess) {
		return { childProcess, processCompletionPromise }
	}
	if (timeoutMs === undefined) {
		return await processCompletionPromise
	}

	// Wall-clock guard for awaited spawns (install). On expiry: SIGTERM the
	// child and reject with the timeout marker. Swallow the eventual
	// completion rejection so the kill doesn't surface as an unhandled
	// rejection once the loser settles.
	processCompletionPromise.catch(() => {
		// no-op: the timeout branch already rejected; swallow the loser.
	})
	let timer
	const timeoutPromise = new Promise((_resolve, reject) => {
		timer = setTimeout(() => {
			try {
				childProcess.kill("SIGTERM")
			} catch {
				// Best-effort kill — the reject below is the load-bearing signal.
			}
			reject(new Error(`${INSTALL_TIMEOUT_MARKER} after ${timeoutMs}ms`))
		}, timeoutMs)
	})
	try {
		return await Promise.race([processCompletionPromise, timeoutPromise])
	} finally {
		clearTimeout(timer)
	}
}

// Lock dirs this process currently holds. Released synchronously on
// SIGTERM/SIGINT/SIGHUP/exit so an ADX-killed wrapper doesn't leave a
// sentinel behind — the async `finally` in `acquireLock` never runs on
// signal termination (Node tears down the event loop), which is what
// starves the next spawn into a "never loads, just fails" loop. POSIX-
// effective; Windows SIGTERM may not fire the handler, so the warm-cache
// fast path in `ensureInstalled` is the primary guard there.
const heldLocks = new Set()
let lockSignalCleanupRegistered = false

/**
 * Remove a lock sentinel directory. Recursive because a PID-aware sentinel
 * holds an `owner.pid` file — a bare `rmdirSync` would ENOTEMPTY and leak the
 * lock. Best-effort: a missing dir or a concurrent steal is fine.
 *
 * @param {string} lockDir
 */
function removeLockDir(lockDir) {
	try {
		fsSync.rmSync(lockDir, { recursive: true, force: true })
	} catch {
		// Already gone, or another contender removed it first.
	}
}

function releaseHeldLocks() {
	for (const dir of heldLocks) {
		removeLockDir(dir)
	}
	heldLocks.clear()
}

/**
 * Liveness probe for a lock's recorded owner pid — `kill(pid, 0)` sends no
 * signal but throws `ESRCH` when the pid is gone. `EPERM` means the process
 * exists under another user (treat as alive); any other error stays
 * conservative (alive) so we never steal a lock from a live holder.
 *
 * @param {number} pid
 * @returns {boolean}
 */
function isProcessAlive(pid) {
	try {
		process.kill(pid, 0)
		return true
	} catch (err) {
		// Only a definitively-absent process (ESRCH) is dead/stealable; EPERM
		// (alive under another user) and any other error stay conservative
		// (alive) so we never steal a lock from a live holder.
		return err.code !== "ESRCH"
	}
}

/**
 * Read a lock sentinel's recorded owner pid, or `null` when the file is
 * missing/empty/non-numeric — the mkdir→write race window where the pid
 * isn't there yet, which must fall back to the mtime path, not a steal.
 *
 * @param {string} ownerPidPath
 * @returns {number | null}
 */
function readOwnerPid(ownerPidPath) {
	try {
		const pid = Number.parseInt(fsSync.readFileSync(ownerPidPath, "utf-8").trim(), 10)
		return Number.isInteger(pid) && pid > 0 ? pid : null
	} catch {
		return null
	}
}

/**
 * Stamp the current pid into a lock sentinel so a contender can later prove the
 * holder is dead. Best-effort: a write failure just forfeits the fast
 * steal — the mtime threshold still bounds a leaked lock.
 *
 * @param {string} ownerPidPath
 */
function writeOwnerPid(ownerPidPath) {
	try {
		fsSync.writeFileSync(ownerPidPath, String(process.pid))
	} catch {
		// Ignore — falls back to the mtime steal path.
	}
}

/**
 * Decide whether a contender may reclaim an existing lock sentinel, removing it
 * when so. Steals when the recorded owner pid is provably dead (immediate)
 * or the sentinel mtime exceeds `staleMs`. Returns false when a live holder
 * still owns it, or when the sentinel vanished mid-check, so the caller backs
 * off and re-attempts via the normal delay loop.
 *
 * @param {string} lockDir
 * @param {string} ownerPidPath
 * @param {boolean} ownerPidAware
 * @param {number} staleMs
 * @returns {boolean} true when the sentinel was reclaimed (caller should retry at once).
 */
function tryReclaimLock(lockDir, ownerPidPath, ownerPidAware, staleMs) {
	if (ownerPidAware) {
		const ownerPid = readOwnerPid(ownerPidPath)
		if (ownerPid !== null && ownerPid !== process.pid && !isProcessAlive(ownerPid)) {
			removeLockDir(lockDir)
			return true
		}
	}
	try {
		const stat = fsSync.statSync(lockDir)
		if (Date.now() - stat.mtimeMs > staleMs) {
			removeLockDir(lockDir)
			return true
		}
	} catch {
		// Lock vanished between EEXIST and stat — back off and re-attempt mkdir.
	}
	return false
}

/**
 * Register the synchronous lock-release on process teardown. Idempotent
 * (once per process).
 *
 * Each signal handler releases the held locks and then re-raises the signal's
 * DEFAULT action (terminate) rather than `process.exit()`. This is load-
 * bearing: `process.exit()` would fire the `exit` event, which runs
 * `registerPidExitHook`'s cleanup and deletes this server's PID entry — but a
 * SIGTERM during normal server runtime leaves the spawned MCP child alive, and
 * the extension host needs that entry to reap the orphan. Re-raising preserves
 * the pre-existing "no `exit` event on signal kill" behavior while still
 * releasing the install lock.
 */
function registerLockSignalCleanup() {
	if (lockSignalCleanupRegistered) {
		return
	}
	lockSignalCleanupRegistered = true
	process.on("exit", releaseHeldLocks)
	for (const signal of ["SIGTERM", "SIGINT", "SIGHUP"]) {
		process.on(signal, () => {
			releaseHeldLocks()
			process.removeAllListeners(signal)
			process.kill(process.pid, signal)
		})
	}
}

/**
 * `mkdirSync(EEXIST)`-as-CAS lock at `<targetPath>.lock` (sentinel-dir
 * shape matches `proper-lockfile` so this coordinates with
 * `wrapper.ts:removePackageEntry`'s `lockfile.lock` on the shared PID file).
 *
 * `opts.staleMs` doubles as the steal threshold *and* the retry-loop
 * bound: the loop keeps polling until the holder releases (sentinel
 * vanishes), the sentinel's mtime exceeds `staleMs` (steal branch
 * fires), or a safety-cap deadline of `staleMs + maxDelayMs * 2`
 * elapses (prevents indefinite spin if a wedged process keeps touching
 * the sentinel). Defaults to 10 s to match `proper-lockfile`; bump
 * per-callsite when the body is slow-but-live (see `ensureInstalled`'s
 * `staleMs = runBudgetMs` so a cold install + retries can't be stolen mid-flight).
 *
 * Replaces an earlier fixed 12-attempt counter (~4 s total wait) that
 * couldn't outlast a slow-but-live holder — leaving the steal branch
 * unreachable on the multi-window MCP-install path, where Window B
 * would `throw "gave up acquiring"` before Window A finished installing
 * (let alone before the sentinel became steal-eligible).
 *
 * @param {string} targetPath - file the lock guards
 * @param {() => Promise<T>} body - guarded R-M-W
 * @param {object} [opts]
 * @param {number} [opts.staleMs=10000] - steal the lock if its sentinel mtime is older than this; also drives the retry-loop deadline.
 * @param {boolean} [opts.ownerPidAware=false] - write the holder pid into the sentinel and steal immediately when a contender finds the owner provably dead (the SIGKILL'd-holder leak). Opt-in so the PID-file-lock callsite keeps its bare-dir `proper-lockfile` interop with `wrapper.ts`.
 * @template T
 * @returns {Promise<T>}
 */
async function acquireLock(targetPath, body, opts = {}) {
	const { staleMs = 10_000, ownerPidAware = false } = opts
	const lockDir = `${targetPath}.lock`
	const ownerPidPath = path.join(lockDir, OWNER_PID_FILE)
	const minDelayMs = 50
	const maxDelayMs = 500
	const startedAtMs = Date.now()
	// Safety cap: `staleMs` is when the *steal* branch becomes eligible,
	// so the loop must run at least that long for the contender to take
	// over from a crashed holder. The `+ maxDelayMs * 2` tail absorbs
	// the worst-case sleep that elapses between the final EEXIST and the
	// deadline check, keeping the throw deterministic.
	const deadlineMs = startedAtMs + staleMs + maxDelayMs * 2

	let attempt = 0
	let lastErr
	while (true) {
		try {
			fsSync.mkdirSync(lockDir)
			// Track for synchronous release on signal termination, since the
			// `finally` below won't run if the process is killed mid-body.
			heldLocks.add(lockDir)
			registerLockSignalCleanup()
			// Stamp the holder pid so a contender can prove this lock is
			// dead-owned and steal it instead of waiting out `staleMs`.
			if (ownerPidAware) {
				writeOwnerPid(ownerPidPath)
			}
			try {
				return await body()
			} finally {
				heldLocks.delete(lockDir)
				// A hung body() on Windows can leave the dir momentarily; the
				// next stale/pid steal handles it.
				removeLockDir(lockDir)
			}
		} catch (err) {
			lastErr = err
			if (err.code !== "EEXIST") {
				throw err
			}
			// A dead-owned or stale sentinel is reclaimed in-place; retry
			// the mkdir at once. Otherwise back off — a live holder still owns it.
			if (tryReclaimLock(lockDir, ownerPidPath, ownerPidAware, staleMs)) {
				continue
			}
			if (Date.now() >= deadlineMs) {
				break
			}
			const delay = Math.min(maxDelayMs, minDelayMs * 1.5 ** attempt)
			attempt++
			await new Promise((resolve) => setTimeout(resolve, delay))
		}
	}
	const elapsedMs = Date.now() - startedAtMs
	throw new Error(
		`acquireLock: gave up acquiring ${lockDir} after ${elapsedMs}ms (staleMs=${staleMs}): ${lastErr?.message ?? "unknown"}`,
	)
}

/**
 * Parse + structural-validate a PID-file's raw contents into a
 * `{ packageName: pidArray }` map. Returns `null` on any failure
 * (malformed JSON or non-object shape).
 *
 * Hand-rolled rather than Zod-shaped because this wrapper runs *before*
 * `npm install` and can only use Node built-ins (see `runtime/spec.md`
 * § *Built-in only*). The TS extension host validates the same file
 * against `pidFileDataSchema` in `wrapper.ts` and additionally enforces
 * the inner `array of nonneg int` shape that this guard does not —
 * cross-tier asymmetry is intentional.
 *
 * @param {string} raw
 * @returns {Record<string, unknown> | null}
 */
function parsePidFileContents(raw) {
	try {
		const p = JSON.parse(raw)
		return p !== null && typeof p === "object" && !Array.isArray(p) ? p : null
	} catch {
		return null
	}
}

/**
 * MCP Server NPM Wrapper.
 *
 * Handles the complete lifecycle of installing, verifying, and running MCP
 * servers distributed as npm packages. Uses isolated cache directories and
 * retry logic to handle common npm installation issues.
 */
class McpServerNpmWrapper {
	/**
	 * @param {object} config - Configuration object with package details
	 * @param {string} config.package - The npm package name
	 * @param {string} config.version - The package version
	 * @param {string[]} config.args - Arguments to pass to the MCP server
	 */
	constructor(config) {
		if (!config.package || !config.version || !Array.isArray(config.args)) {
			throw new Error("Missing required configuration: package, version, args")
		}

		this.config = config
		this.baseCacheDir = path.join(__dirname, BASE_CACHE_DIR_NAME)
		// npm rotates the logs internally (`npm config get logs-max`); we
		// just point npm at a dir under the per-package cache root.
		this.npmLogsDir = path.join(this.baseCacheDir, NPM_LOGS_DIR_NAME)

		this.maxRetries = 3

		this.packageName = config.package
		this.packageVersion = config.version
		this.packageNameVersion = `${this.packageName}@${this.packageVersion}`
		// Sanitize for filesystem use: strip leading `@`, replace `@` + `/` with `-`.
		this.packageId = this.packageName.replace(/^@/, "").replace(/[@/]/g, "-")
		this.cacheDir = path.join(this.baseCacheDir, this.packageId)
		// Under cacheDir so a cleanupCache() wipe also clears npx's `_npx`
		// resolution cache — the corruption a manual `rm -rf ~/.npm/_npx` fixed.
		this.ownedNpmCacheDir = path.join(this.cacheDir, NPM_CACHE_DIR_NAME)
		// Set when ensureInstalled takes the warm-cache path; a later start failure
		// then marks the unverified cache suspect so startServer self-heals it.
		this.warmCacheHit = false
		// Absolute timestamp the whole-run discovery budget expires at; set in
		// `run()` (= spawn + runBudgetMs) so resolve + install + verify share one
		// ceiling under the SDK discovery deadline. Undefined outside `run()`.
		this.runDeadlineMs = undefined
		// Whole-run budget in ms, derived in `initialize()` from the
		// `discoveryTimeoutMs` stamped in nodePath.json (the same value AFV forwards
		// to the SDK). Holds the default until initialize() reads the file.
		this.runBudgetMs = DEFAULT_RUN_BUDGET_MS
		// Set from `nodePath.json` (`npmCooldownActive`) — true when the host's
		// npm has a `before` / `min-release-age` cooldown configured. Gates the
		// config-signal cooldown bypass so a bare ETARGET only bypasses
		// when a cooldown is actually in force, not on a genuine missing version.
		this.cooldownActive = false
		// Flipped once an install bypasses the cooldown so verify/start in the
		// same run carry the bypass env too.
		this.cooldownBypassActive = false

		this.logFile = null
	}

	/**
	 * Append to the per-package log file in the runtime root.
	 *
	 * NOTE: do NOT use `console.log` here — it corrupts the MCP protocol
	 * communication once the server is running. Only `console.error` is
	 * safe (goes to stderr) and only for genuine failure conditions.
	 *
	 * @param {string} message
	 * @param {"INFO"|"ERROR"|"DEBUG"} [level]
	 */
	async log(message, level = "INFO") {
		if (!this.logFile) {
			return
		}
		const timestamp = new Date().toLocaleString("en-US")
		const logEntry = `[${timestamp}] [${level}] ${message}\n`
		try {
			await fs.appendFile(this.logFile, logEntry)
		} catch (error) {
			// Fall back to stderr — losing a log line is preferable to
			// crashing the wrapper over a transient FS error.
			console.error(`[AFV][MCP] Failed to write to log file: ${error.message}`)
		}
	}

	/**
	 * Log and rethrow — consolidates a common pattern at error sites.
	 * @param {string} message
	 * @param {"INFO"|"ERROR"|"DEBUG"} [level]
	 * @throws {Error} Always throws with the supplied message
	 */
	async logAndThrow(message, level = "ERROR") {
		await this.log(message, level)
		throw new Error(message)
	}

	/**
	 * Initialize the log file in the runtime root (survives per-package
	 * cache cleanups). Overwrites any existing log file.
	 *
	 * @param {string} packageId
	 */
	async initializeLogFile(packageId) {
		if (!packageId) {
			throw new Error("Package ID is required to initialize log file")
		}

		// Place log file in the runtime root, alongside the wrapper script,
		// so it survives `cleanupCache()`.
		this.logFile = path.join(this.baseCacheDir, `${packageId}.log`)

		try {
			await fs.mkdir(this.baseCacheDir, { recursive: true })
			const startMessage = `=== AFV MCP NPM Wrapper ===\n
Package: ${this.packageNameVersion}
Node Bin: ${this.config.nodeBin}
NPX Bin: ${this.config.npxBin}
NPM Bin: ${this.config.npmBin}
Node Version: ${this.config.nodeVersion}
Cache Dir: ${this.cacheDir}
NPM Logs Dir: ${this.npmLogsDir}
Server Args: ${JSON.stringify(this.config.args)}\n\n`
			await fs.writeFile(this.logFile, startMessage)
		} catch (error) {
			console.error(`[AFV][MCP] Failed to initialize log file: ${error.message}`)
		}
	}

	/**
	 * Initialize the wrapper configuration and load the Node.js paths from
	 * the companion `nodePath.json`. Sets up env vars and initializes
	 * logging.
	 */
	async initialize() {
		try {
			const nodePaths = await this.loadNodePaths()

			this.config.nodeBin = nodePaths.nodeBin
			this.config.npxBin = nodePaths.npxBin
			this.config.npmBin = nodePaths.npmBin
			this.config.nodeVersion = nodePaths.nodeVersion
			// Config-signal cooldown gate: the extension stamps this when the host's
			// npm has a `before`/`min-release-age` cooldown configured.
			this.cooldownActive = nodePaths.npmCooldownActive === true
			// Run budget mirrors the SDK discovery deadline (`discoveryTimeoutMs`,
			// the same `MCP_DISCOVERY_TIMEOUT_MS` AFV forwards to the SDK) so the
			// wrapper window matches what ADX grants instead of a hardcoded ~60s.
			this.runBudgetMs = computeRunBudgetMs(nodePaths.discoveryTimeoutMs)

			NPM_ENV_VARS.npm_config_logs_dir = this.npmLogsDir
			// `npm_config_cache` is pinned under `cacheDir` (not npm's default
			// `~/.npm`) so `cleanupCache()` wipes npx's `_npx` resolution cache
			// alongside `node_modules` — a corrupt `_npx` is the wedge the manual
			// `rm -rf ~/.npm/_npx` cleared, and the global cache can't be reset
			// safely. Tradeoff: tarballs are re-downloaded per cacheDir instead of
			// shared across MCP packages; see runtime/spec.md > Cache self-heal.
			NPM_ENV_VARS.npm_config_cache = this.ownedNpmCacheDir

			await this.initializeLogFile(this.packageId)
			await this.log(
				`Wrapper initialized for package: ${this.packageNameVersion} using Node.js ${this.config.nodeVersion}`,
				"DEBUG",
			)
		} catch (error) {
			await this.logAndThrow(`Failed to initialize wrapper: ${error.message}`)
		}
	}

	/**
	 * Load Node paths from `nodePath.json`. The JSON file contains a
	 * `NodePathResult` with fields: `nodeBin`, `npxBin`, `npmBin`,
	 * `nodeVersion`, `source`, plus the extension-stamped `npmCooldownActive`
	 * and `discoveryTimeoutMs` (the SDK discovery deadline the run budget mirrors).
	 */
	async loadNodePaths() {
		const nodePathFile = path.join(__dirname, NODE_PATH_FILE)
		const data = await fs.readFile(nodePathFile, "utf-8")
		const paths = JSON.parse(data)

		if (!paths.nodeBin || !paths.npxBin || !paths.npmBin) {
			await this.logAndThrow(`Missing required node binaries in ${NODE_PATH_FILE}`)
		}
		return paths
	}

	/**
	 * Get command + args for executing npm or npx. v4 only supports system
	 * Node — `npmBin`/`npxBin` always name real executables, so spawn them
	 * directly without any `node /path/to/npm-cli.js` redirection.
	 *
	 * @param {"npm"|"npx"} nodeCmd
	 * @param {string[]} nodeCmdArgs
	 * @returns {{command: string, args: string[]}}
	 */
	async getNodeCommandArgs(nodeCmd, nodeCmdArgs) {
		const command = nodeCmd === NODE_CMD.NPM ? this.config.npmBin : this.config.npxBin
		const args = nodeCmdArgs
		await this.log(`Running command: "${command} ${args.join(" ")}"`, "DEBUG")
		return { command, args }
	}

	/**
	 * Main entry: install, verify, and start the MCP server. All thrown
	 * errors land in `main()`'s catch via `logAndThrow` so the stderr +
	 * exit-code envelope is consistent.
	 */
	async run() {
		try {
			// ADX's discovery-deadline clock starts when it calls connect()
			// (≈ this process spawn), so anchor the budget at spawn. initialize()
			// reads the stamped `discoveryTimeoutMs` into this.runBudgetMs first;
			// it's sub-second, so the deadline still tracks the spawn instant.
			const runStartMs = Date.now()
			await this.initialize()
			this.runDeadlineMs = runStartMs + this.runBudgetMs
			await this.resolvePackage()
			await this.ensureInstalled()
			await this.startServer()
		} catch (error) {
			await this.logAndThrow(`Fatal error: ${error.message}. Details: ${this.logFile}`)
		}
	}

	/**
	 * Check that the package exists in the npm registry.
	 * @throws {Error} If the package does not exist.
	 */
	async resolvePackage() {
		await this.log(`Checking if package ${this.packageNameVersion} exists in npm`)
		const { command, args } = await this.getNodeCommandArgs(NODE_CMD.NPM, ["view", this.packageNameVersion, "version"])

		// Bound the probe to its own slice of the shared discovery budget so a
		// hung registry can't ride to the discovery deadline before the offline
		// fallback.
		const resolveTimeoutMs = this.runDeadlineMs
			? Math.min(RESOLVE_TIMEOUT_MS, remainingBudgetMs(this.runDeadlineMs))
			: RESOLVE_TIMEOUT_MS
		try {
			const resolvedVersion = await spawnProcess(command, args, { captureOutput: true, timeoutMs: resolveTimeoutMs })
			this.packageVersion = resolvedVersion
			this.packageNameVersion = `${this.packageName}@${this.packageVersion}`
			await this.log(`Package ${this.packageName} resolved to version ${this.packageVersion}`, "DEBUG")
		} catch (error) {
			// Offline-marker fallback: a transient `npm view` blip (or its budget
			// timeout) must not kill a server that already installed on a prior
			// spawn. Fall back to
			// the completion marker so the warm path starts offline; only throw
			// when there's no prior install to fall back to (a true cold start).
			const marked = await this.readInstallMarker()
			if (marked) {
				this.packageVersion = marked
				this.packageNameVersion = `${this.packageName}@${this.packageVersion}`
				await this.log(
					`npm view failed (${error.message}); using last-installed version ${marked} from marker (offline fallback)`,
					"WARN",
				)
				return
			}
			await this.logAndThrow(`Package ${this.packageNameVersion} does not exist in npm: ${error.message}`)
		}
	}

	/**
	 * Install and verify the MCP server package with retry + cache reset.
	 *
	 * Implements retry logic with up to 3 attempts to handle transient
	 * network issues, DNS resolution problems, and npm registry timeouts.
	 * Each retry cleans up the per-package cache for a fresh attempt.
	 *
	 * Wrapped in a per-`packageId` lock at
	 * `<__dirname>/.locks/<packageId>.lock` so two concurrent wrappers
	 * for the same package (e.g. `@salesforce/mcp@1` + `@salesforce/mcp@2`
	 * both targeting `cacheDir = afv-npm-cache/salesforce-mcp/`) serialize
	 * their install + verify rather than clobbering each other's
	 * `node_modules` mid-flight.
	 *
	 * @throws {Error} If all retry attempts fail.
	 */
	async ensureInstalled() {
		// Warm-cache fast path: if the marker matches the resolved version, skip
		// the lock + install + verify entirely and go straight to start. This is
		// the convergence fix for lock starvation — once any spawn has installed
		// the package, subsequent spawns (the activation discovery burst) never
		// contend for the lock, so a leaked sentinel can't starve them out of
		// their discovery budget. `resolvePackage` re-resolves `latest` each
		// launch, so a new upstream release misses the marker and re-installs.
		await this.logCacheState()
		if (await this.isInstalledAtResolvedVersion()) {
			this.warmCacheHit = true
			await this.log(`Warm cache: ${this.packageNameVersion} already installed — skipping install/verify`)
			await this.log(`${INSTALL_OUTCOME_PREFIX} success (warm cache)`)
			return
		}

		await this.log(`Starting installation process with max retries: ${this.maxRetries}`)

		const locksDir = path.join(__dirname, LOCKS_DIR_NAME)
		await fs.mkdir(locksDir, { recursive: true })
		const packageLockTarget = path.join(locksDir, this.packageId)

		// staleMs tracks the run budget: with no keepalive yet, a live holder can
		// legitimately hold the lock for its whole discovery window, so only a
		// leaked sentinel out-ages it (see the options below).
		await acquireLock(
			packageLockTarget,
			async () => {
				// Flipped once a cooldown-ETARGET is seen so the *next* attempt
				// neutralizes the `before` / `min-release-age` window. Respect the
				// cooldown until a first-party install is actually blocked.
				let bypassCooldown = false
				for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
					try {
						await this.log(`Attempt ${attempt}/${this.maxRetries}: Installing and verifying package`)

						// All attempts share the one run deadline (set in `run()`), so
						// install + verify draw from the whole remaining run budget and a
						// cold install can use the full window ADX grants. A fast-failing
						// attempt (ETARGET / DNS) leaves wall-clock for the next; only a
						// genuine hang rides to the deadline.
						const attemptDeadlineMs = this.runDeadlineMs ?? Date.now() + this.runBudgetMs
						await this.installServer(bypassCooldown, attemptDeadlineMs)
						// Carry the attempt's bypass into verify: an `npx` metadata
						// fetch hits the same cooldown an install just cleared.
						await this.verifyServer(attemptDeadlineMs, "--version", bypassCooldown)
						// Marker last — only a fully install+verify'd cache is warm.
						await this.writeInstallMarker()

						await this.log(`Installation and verification successful on attempt ${attempt}`)
						await this.log(`${INSTALL_OUTCOME_PREFIX} success (attempt ${attempt}/${this.maxRetries})`)
						return
					} catch (installError) {
						await this.log(`Attempt ${attempt} failed: ${installError.message}`, "ERROR")

						if (!bypassCooldown && this.shouldBypassCooldown(installError.message)) {
							bypassCooldown = true
							this.cooldownBypassActive = true
							await this.log("npm cooldown (min-release-age/before) blocked install; retrying without the cooldown", "WARN")
						}

						if (attempt < this.maxRetries) {
							await this.log(`Cleaning up cache and retrying ..`)
							await this.cleanupCache()
							await this.delay(1000)
						} else {
							const outcome = installError.message.includes(INSTALL_TIMEOUT_MARKER) ? "timeout" : "failed"
							await this.log(`${INSTALL_OUTCOME_PREFIX} ${outcome} after ${attempt} attempt(s): ${installError.message}`, "ERROR")
							// npm's own debug log carries the registry/network/auth detail our envelope lacks.
							await this.logNpmDebugLogTail()
							await this.logAndThrow(`All retry attempts exhausted: ${installError.message}`)
						}
					}
				}
			},
			// PID-aware: a SIGKILL'd holder leaks this sentinel; the dead-owner
			// steal reclaims it immediately. staleMs = the whole run budget so a
			// live, still-installing holder is never mtime-stolen out from under
			// itself now that the budget can span minutes, not ~60s.
			{ staleMs: this.runBudgetMs, ownerPidAware: true },
		)
	}

	/**
	 * Decide whether an install ETARGET should trigger the cooldown bypass.
	 * Fires on the date-window signature phrase (any host), OR on a bare
	 * ETARGET when the host has a cooldown configured (`npmCooldownActive` in
	 * nodePath.json) — npm's block wording doesn't always carry the phrase, and
	 * broadening the bare regex would weaken the supply-chain cooldown for a
	 * genuine missing version, so the config signal gates the looser match.
	 * See runtime/spec.md > npm cooldown bypass.
	 *
	 * @param {string} message
	 * @returns {boolean}
	 */
	shouldBypassCooldown(message) {
		return isNpmCooldownError(message) || (this.cooldownActive && NPM_COOLDOWN_ETARGET_PATTERN.test(message))
	}

	/**
	 * Install the MCP server package using `npm install` against a
	 * generated `package.json`. Pinning the exact version in the
	 * `dependencies` block produces deterministic installs and matches
	 * standard project workflows.
	 *
	 * @param {boolean} [bypassCooldown] - Neutralize a `before` / `min-release-age` cooldown for this install (set after a cooldown-ETARGET).
	 * @param {number} [deadlineMs] - Absolute timestamp the shared install+verify budget expires at; the install spawn times out on whatever slice remains.
	 * @throws {Error} If `npm install` fails.
	 */
	async installServer(bypassCooldown = false, deadlineMs = Date.now() + DEFAULT_RUN_BUDGET_MS) {
		await this.log("Starting package installation")

		await fs.mkdir(this.cacheDir, { recursive: true })
		await this.log(`Cache directory created: ${this.cacheDir}`)

		const packageJson = {
			name: "afv-mcp-wrapper",
			version: "1.0.0",
			description: "AFV MCP server wrapper cache",
			private: true,
			dependencies: { [this.packageName]: this.packageVersion },
		}
		const packageJsonPath = path.join(this.cacheDir, "package.json")
		await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2))
		await this.log(`Package.json created at: ${packageJsonPath}`, "DEBUG")

		const { command, args } = await this.getNodeCommandArgs(NODE_CMD.NPM, ["install"])

		if (bypassCooldown) {
			await this.log("Bypassing npm cooldown (min-release-age/before) for this install", "WARN")
		}

		const installStart = Date.now()
		// `captureOutput` so a failed install's npm stderr (e.g. ETARGET from a
		// cooldown / date-pinned registry) rides the rejection into the per-package
		// log via `logAndThrow` — otherwise the only signal is the bare exit code.
		await spawnProcess(command, args, {
			cwd: this.cacheDir,
			captureOutput: true,
			timeoutMs: remainingBudgetMs(deadlineMs),
			...(bypassCooldown ? { env: NPM_COOLDOWN_BYPASS_ENV } : {}),
		})

		const installDuration = Date.now() - installStart
		await this.log(`Package installation completed in ${this.formatDuration(installDuration)}`)

		try {
			const installedVersion = await this.getInstalledVersion()
			await this.log(`Installed version of ${this.packageName}: ${installedVersion}`)
		} catch (error) {
			await this.log(`Warning: Could not retrieve installed version: ${error.message}`, "DEBUG")
		}
	}

	/**
	 * Warm-cache check: did a recent run fully install+verify the version
	 * `resolvePackage` just resolved? Reads the completion marker (no `npm`, no
	 * lock, no network) so the common already-installed start is sub-second.
	 * `latest` stays current because the marker holds the concrete resolved
	 * version, so a new upstream release misses it and re-installs. Best-effort:
	 * any read failure returns false and falls through to the install path.
	 */
	async isInstalledAtResolvedVersion() {
		const marked = await this.readInstallMarker()
		return marked !== null && marked === this.packageVersion
	}

	/**
	 * Read the completion marker's recorded version (no `npm`, no lock, no
	 * network), or `null` when absent/empty/unreadable. Backs both the
	 * warm-cache check ({@link isInstalledAtResolvedVersion}) and the
	 * resolve offline-marker fallback ({@link resolvePackage}).
	 */
	async readInstallMarker() {
		try {
			const marked = (await fs.readFile(path.join(this.cacheDir, INSTALL_MARKER_FILE), "utf-8")).trim()
			return marked || null
		} catch {
			return null
		}
	}

	/**
	 * Write the completion marker (the resolved version) under the install lock,
	 * after install+verify both succeed. Read back by
	 * {@link isInstalledAtResolvedVersion}. Best-effort: a write failure just
	 * forfeits the next run's warm-cache shortcut, never fails the install.
	 */
	async writeInstallMarker() {
		try {
			await fs.writeFile(path.join(this.cacheDir, INSTALL_MARKER_FILE), this.packageVersion)
		} catch (error) {
			await this.log(`Warning: could not write install marker: ${error.message}`, "DEBUG")
		}
	}

	/**
	 * Get the exact installed version of the package via `npm list`. May
	 * differ from the requested version due to semver resolution.
	 */
	async getInstalledVersion() {
		const { command, args } = await this.getNodeCommandArgs(NODE_CMD.NPM, ["list", this.packageName, "--json", "--depth=0"])
		const output = await spawnProcess(command, args, { cwd: this.cacheDir, captureOutput: true })

		let npmListResult = {}
		try {
			npmListResult = JSON.parse(output)
		} catch (parseError) {
			await this.logAndThrow(`Could not parse version from npm list output: ${parseError.message}`)
		}
		const packageInfo = npmListResult?.dependencies?.[this.packageName]
		const packageVersion = packageInfo?.version
		if (!packageInfo || !packageVersion) {
			await this.logAndThrow(`[McpServerNpmWrapper.getInstalledVersion] Package ${this.packageName} not found in npm list output`)
		}
		return packageVersion
	}

	/**
	 * Verify the installed server with a `--version` invocation. Catches
	 * post-install issues before we attempt to start the real MCP server.
	 *
	 * @param {number} [deadlineMs] - Absolute timestamp the shared install+verify budget expires at; verify times out on whatever slice install left.
	 * @param {string} [verifyCommand] - Subcommand used to probe the installed package.
	 * @param {boolean} [bypassCooldown] - Neutralize a `before` / `min-release-age` cooldown for this `npx` probe (carries the attempt's install bypass).
	 */
	async verifyServer(deadlineMs = Date.now() + DEFAULT_RUN_BUDGET_MS, verifyCommand = "--version", bypassCooldown = false) {
		await this.log("Starting package verification")
		const { command, args } = await this.getNodeCommandArgs(NODE_CMD.NPX, [...NPX_ARGS, this.packageNameVersion, verifyCommand])
		const verifyStart = Date.now()
		try {
			// `captureOutput` so a failed verify's stderr rides the rejection
			// into the per-package log via `logAndThrow` (mirrors `installServer`).
			// `timeoutMs` is the remaining slice of the shared attempt budget so a
			// wedged `npx` (no built-in timeout) surfaces as a logged timeout
			// without the install+verify pair stacking past ADX's discovery kill.
			await spawnProcess(command, args, {
				cwd: this.cacheDir,
				captureOutput: true,
				timeoutMs: remainingBudgetMs(deadlineMs),
				...(bypassCooldown ? { env: NPM_COOLDOWN_BYPASS_ENV } : {}),
			})
			const verifyDuration = Date.now() - verifyStart
			await this.log(`Package verification successful in ${this.formatDuration(verifyDuration)}`)
			return true
		} catch (error) {
			const verifyDuration = Date.now() - verifyStart
			await this.logAndThrow(`Package verification failed after ${this.formatDuration(verifyDuration)}: ${error.message}`)
		}
	}

	/**
	 * Log a one-line cache snapshot at install time so a Copy Diagnostics
	 * export shows whether a launch reused a possibly-stale cache — the first
	 * question when a server wedges. See runtime/spec.md > Cache self-heal.
	 */
	async logCacheState() {
		let marker = "none"
		try {
			marker = (await fs.readFile(path.join(this.cacheDir, INSTALL_MARKER_FILE), "utf-8")).trim() || "empty"
		} catch {
			// No marker — cold cache; "none" stands.
		}
		const nodeModules = fsSync.existsSync(path.join(this.cacheDir, "node_modules"))
		const npmCache = fsSync.existsSync(this.ownedNpmCacheDir)
		await this.log(
			`Cache state: marker=${marker} resolved=${this.packageVersion} nodeModules=${nodeModules} npmCache=${npmCache} dir=${this.cacheDir}`,
		)
	}

	/**
	 * On a terminal install failure, append a bounded tail of npm's own debug
	 * log (newest under `npmLogsDir`) to the per-package log — npm writes
	 * registry/network/auth detail there that never reaches our stderr.
	 * Best-effort: a read failure is itself logged and swallowed.
	 */
	async logNpmDebugLogTail() {
		try {
			// Newest by name — npm prefixes debug logs with a sortable timestamp.
			const newest = (await fs.readdir(this.npmLogsDir))
				.filter((n) => n.endsWith(".log"))
				.sort()
				.at(-1)
			if (!newest) {
				await this.log("No npm debug log found to attach", "DEBUG")
				return
			}
			const newestPath = path.join(this.npmLogsDir, newest)
			const tail = (await fs.readFile(newestPath, "utf-8")).slice(-NPM_DEBUG_LOG_TAIL_LIMIT).trim()
			await this.log(`npm debug log (${newestPath}):\n${tail}`, "ERROR")
		} catch (error) {
			await this.log(`Could not read npm debug log: ${error.message}`, "DEBUG")
		}
	}

	/**
	 * Start the MCP server with transparent stdio forwarding.
	 *
	 * CRITICAL: stdin/stdout stay inherited so the wrapper is transparent to
	 * the MCP protocol — the wrapper's stdin/stdout are directly connected to
	 * the MCP server's stdin/stdout. Only stderr is piped (not protocol
	 * traffic) so it can be both passed through to our own stderr AND retained
	 * as a bounded tail that is persisted to the per-package log on a non-zero
	 * exit — otherwise a startup crash surfaces as a bare "Process exited with
	 * code 1" with the real reason lost (see runtime/spec.md > Server stderr
	 * capture, W-22959625). This method blocks until the server exits, which for an MCP
	 * server is "until the extension host kills it during teardown".
	 */
	async startServer() {
		await this.log("Starting MCP server")
		// Bounded tail of the server's own stderr, persisted to the per-package
		// log only if the server exits non-zero (declared out here so the catch
		// can read it). The healthy path streams stderr through untouched.
		let serverStderrTail = ""
		// Elapsed + byte count separate a silent discovery-timeout SIGKILL (at the deadline, 0 bytes) from a fast crash; see runtime/spec.md > Server stderr capture.
		let serverStderrBytes = 0
		const startedAt = Date.now()
		try {
			await this.log(`Starting server with args: ${JSON.stringify(this.config.args)}`, "DEBUG")
			const { command, args } = await this.getNodeCommandArgs(NODE_CMD.NPX, [
				...NPX_ARGS,
				this.packageNameVersion,
				...this.config.args,
			])
			const { childProcess, processCompletionPromise } = await spawnProcess(command, args, {
				cwd: this.cacheDir,
				// stdin/stdout inherited for the MCP protocol; stderr piped so it
				// can be retained for diagnostics (stderr is not protocol traffic).
				stdio: ["inherit", "inherit", "pipe"],
				returnProcess: true,
				// `npx` re-resolves the package on start; `--prefer-offline` serves it
				// from the already-installed copy, so a registry ETARGET only surfaces
				// when this run actually proved a cooldown block. Gate on
				// `cooldownBypassActive` alone — a merely-configured cooldown must not
				// leak `min-release-age=0` into the long-lived server's env for any
				// npm/npx it spawns at runtime.
				...(this.cooldownBypassActive ? { env: NPM_COOLDOWN_BYPASS_ENV } : {}),
			})

			childProcess.stderr?.on("data", (data) => {
				// Pass through to our own stderr to preserve the prior
				// `inherit` behavior for any extension-host-side consumer.
				process.stderr.write(data)
				serverStderrBytes += data.length
				serverStderrTail += data.toString()
				// Trim only past 2x the cap so a chatty server pays O(chunk) per event, not an O(cap) recopy each time; the catch slices the exact tail.
				if (serverStderrTail.length > SERVER_STDERR_TAIL_LIMIT * 2) {
					serverStderrTail = serverStderrTail.slice(-SERVER_STDERR_TAIL_LIMIT)
				}
			})

			// Pre-attach a swallow handler so the SIGKILL-then-rethrow path
			// below doesn't leave `processCompletionPromise` floating: if
			// `writePidsToFile` throws, we kill the child and rethrow
			// before reaching `await processCompletionPromise`, and the
			// kill-induced rejection would otherwise race `process.exit(1)`
			// with an `UnhandledPromiseRejection`. The kill is intentional
			// — the rejection carries no actionable signal.
			processCompletionPromise.catch(() => {
				// no-op: rejection handled by the SIGKILL-then-rethrow path above.
			})

			// Dual-PID tracking: wrapper + immediate child. Gives cleanup
			// a fallback root if one process races with the other at
			// IDE-quit teardown. If PID-write fails, kill the spawned
			// child first so the wrapper doesn't leave a dangling tree
			// the extension host can't track.
			try {
				await this.writePidsToFile(childProcess.pid)
			} catch (err) {
				try {
					childProcess.kill("SIGKILL")
				} catch (killErr) {
					await this.log(`Failed to kill child after PID-write failure: ${killErr.message}`, "ERROR")
				}
				throw err
			}
			await processCompletionPromise

			await this.log("MCP server process stopped")
		} catch (error) {
			// Persist the server's stderr tail before throwing so a Copy
			// Diagnostics export shows the real startup failure, not just the
			// "Process exited with code N" envelope `spawnProcess` builds.
			const tail = serverStderrTail.slice(-SERVER_STDERR_TAIL_LIMIT).trim()
			if (tail) {
				await this.log(`MCP server stderr:\n${tail}`, "ERROR")
			}
			// A warm-cache start that fails means the unverified cache is suspect
			// (the wedge a manual cache wipe fixed); reset it so the next launch
			// reinstalls clean instead of re-failing. See runtime/spec.md > Cache self-heal.
			if (this.warmCacheHit) {
				await this.log("Warm-cache start failed — wiping the package cache so the next launch reinstalls", "WARN")
				await this.cleanupCache()
			}
			await this.logAndThrow(
				`Error while starting MCP server ${this.packageNameVersion} after ${this.formatDuration(Date.now() - startedAt)} (stderr ${serverStderrBytes} bytes): ${error.message}`,
			)
		}
	}

	/**
	 * Write wrapper + immediate-child PIDs to `afv_mcp_pids/<ppid>.json`.
	 * One file per extension host — eliminates multi-window collisions.
	 * The R-M-W is wrapped in `acquireLock` so concurrent wrapper-script
	 * spawns for different MCP packages (or a coincident `wrapper.ts:
	 * removePackageEntry` from `cleanupServerInstances`) can't interleave
	 * the read and write halves and lose entries.
	 *
	 * @param {number} [childPid] - Immediate child PID (may be undefined if spawn raced)
	 */
	async writePidsToFile(childPid) {
		try {
			const pidDir = path.join(__dirname, PID_DIR_NAME)
			await fs.mkdir(pidDir, { recursive: true })
			const pidFilePath = path.join(pidDir, `${process.ppid}.json`)

			await acquireLock(pidFilePath, async () => {
				// Distinguish "file doesn't exist" (first invocation, expected)
				// from "file exists but is malformed" (truncated write or
				// corruption). Overwriting on parse failure would lose every
				// other server's PID entry — multi-server cascade. Start with
				// an empty object only on ENOENT; surface parse failures so
				// the next read-modify-write happens on a clean file once a
				// human truncates or deletes it.
				let allPids = {}
				try {
					const existing = await fs.readFile(pidFilePath, "utf-8")
					const parsed = parsePidFileContents(existing)
					if (parsed) {
						allPids = parsed
					} else {
						await this.log(`PID file ${pidFilePath} malformed — proceeding with empty map (corruption recovery)`, "ERROR")
					}
				} catch (readError) {
					if (readError && readError.code !== "ENOENT") {
						throw readError
					}
					// ENOENT — first wrapper invocation for this extension host.
				}

				if (childPid) {
					allPids[this.packageName] = [process.pid, childPid]
				} else {
					allPids[this.packageName] = [process.pid]
					await this.log(`WARNING: Child PID missing for ${this.packageName}; tracking only wrapper PID ${process.pid}`, "ERROR")
				}

				await fs.writeFile(pidFilePath, JSON.stringify(allPids, null, 2))
				await this.log(`Wrote PIDs to ${pidFilePath}: ${JSON.stringify(allPids[this.packageName])}`, "DEBUG")
			})

			// Register a sync exit handler so a wrapper crash (or unhandled
			// exit) leaves the PID file clean — the extension host's
			// `cleanupStalePidFiles` only fires when the host PID itself
			// dies, so without this hook a wrapper-only crash would leak
			// our entry forever.
			this.registerPidExitHook(pidFilePath)
		} catch (error) {
			// Re-throw after logging so the wrapper's top-level catch surfaces
			// it as FATAL ERROR to stderr. A silent PID-write failure defeats
			// the PID-tracking contract — the extension host would miss this
			// server on `cleanupStalePidFiles` (activation) and
			// `killAllInstancesSync` (deactivate), leaving a zombie that
			// survives extension teardown.
			await this.log(`Failed to write PIDs: ${error.message}`, "ERROR")
			throw error
		}
	}

	/**
	 * Sync exit hook — removes this wrapper's entry on crash. Lock-free
	 * intentionally: Node's `exit` event doesn't await async work; stale
	 * entries survive one cycle before `cleanupStalePidFiles` reaps them.
	 * Do NOT refactor to acquire the lock — silently breaks the sync exit contract.
	 *
	 * @param {string} pidFilePath
	 */
	registerPidExitHook(pidFilePath) {
		if (this.pidExitHookRegistered) {
			return
		}
		this.pidExitHookRegistered = true
		const packageName = this.packageName
		process.on("exit", () => {
			try {
				const raw = fsSync.readFileSync(pidFilePath, "utf-8")
				const parsed = parsePidFileContents(raw)
				if (!parsed) {
					return
				}
				if (!(packageName in parsed)) {
					return
				}
				delete parsed[packageName]
				if (Object.keys(parsed).length === 0) {
					fsSync.unlinkSync(pidFilePath)
				} else {
					fsSync.writeFileSync(pidFilePath, JSON.stringify(parsed, null, 2))
				}
			} catch {
				// Best-effort — exit handlers can't surface anything useful.
			}
		})
	}

	/**
	 * Remove the per-package cache directory. Preserves the log file
	 * (lives in the runtime root, one level up). Failures are logged
	 * but not raised — cleanup is best-effort.
	 */
	async cleanupCache() {
		await this.log(`Cleaning up package cache directory: ${this.cacheDir}`)
		try {
			await fs.rm(this.cacheDir, { recursive: true, force: true })
			await this.log("Package cache cleanup completed successfully")
		} catch (error) {
			await this.log(`Failed to cleanup package cache: ${error.message}`, "ERROR")
		}
	}

	/**
	 * Format milliseconds into a human-readable duration string
	 * (e.g. `"2m 30s 500ms"`, `"45s 200ms"`, `"500ms"`).
	 * @param {number} ms
	 */
	formatDuration(ms) {
		if (ms < 1000) {
			return `${ms}ms`
		}
		const minutes = Math.floor(ms / 60000)
		const seconds = Math.floor((ms % 60000) / 1000)
		const remainingMs = ms % 1000

		const result = []
		if (minutes > 0) result.push(`${minutes}m`)
		if (seconds > 0) result.push(`${seconds}s`)
		if (remainingMs > 0 && result.length < 2) result.push(`${remainingMs}ms`)
		return result.join(" ") || "0ms"
	}

	/** Utility delay used between install/verify retries. */
	delay(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms))
	}
}

/**
 * Parse command-line arguments: `<package[@version]> [args...]`.
 * Defaults to `latest` if no `@version` is supplied. Scoped packages
 * (`@salesforce/mcp`) are handled correctly via `lastIndexOf("@")`.
 */
function parseCommandLineArgs() {
	const { positionals } = parseArgs({
		allowPositionals: true,
		// `strict: false` lets unknown options pass through to the MCP server.
		strict: false,
	})

	const helpMessage = `Usage: node afv-mcp-wrapper.js <package[@version]> [args...]
Examples:
  node afv-mcp-wrapper.js @salesforce/mcp@1.0.0 --orgs ALLOW_ALL_ORGS --toolsets all  `
	if (positionals.length < 1) {
		throw new Error(`Package name required as first argument\n${helpMessage}`)
	}

	const packageRef = positionals[0]
	// parseArgs filters out the script name, so positionals[0] is the package; everything after argv[2] is server args.
	const serverArgs = process.argv.slice(3)

	const lastAtIndex = packageRef.lastIndexOf("@")
	let packageName
	let version

	if (lastAtIndex === -1) {
		// No @ — entire spec is the package name; default to latest.
		packageName = packageRef
		version = "latest"
	} else if (lastAtIndex === 0) {
		// `@scope/name` without explicit version — scoped package; default to latest.
		packageName = packageRef
		version = "latest"
	} else {
		const parsedPackageName = packageRef.substring(0, lastAtIndex)
		const parsedVersion = packageRef.substring(lastAtIndex + 1)

		if (parsedVersion) {
			packageName = parsedPackageName
			version = parsedVersion
		} else {
			// `package@` with empty version — default to latest.
			packageName = parsedPackageName
			version = "latest"
		}
	}

	if (!packageName || !version) {
		throw new Error(`Invalid package format: ${packageRef}. Expected format: package[@version]\n${helpMessage}`)
	}

	return { package: packageName, version, args: serverArgs }
}

async function main() {
	try {
		const { package: packageName, version, args } = parseCommandLineArgs()
		const wrapper = new McpServerNpmWrapper({ package: packageName, version, args })
		await wrapper.run()
	} catch (error) {
		// Centralized error handling. All errors funnel here for a single
		// exit-point and consistent stderr envelope.
		console.error(`[AFV][MCP] FATAL ERROR: MCP wrapper failed: ${error.message}`)
		if (error.stack) {
			console.error(`Stack trace: ${error.stack}`)
		}
		process.exit(1)
	}
}

main()
