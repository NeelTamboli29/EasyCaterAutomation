# v4.40.0 (Stable), v4.39.1–v4.39.2 (Pre-Release) — Agentforce Vibes

## Added

- **Figma Remote MCP Support:** Figma Remote MCP is now supported in Vibes. Add Figma to your `.mcp.json` and sign in directly from VS Code on desktop, with no additional configuration required. Sign-in is not yet supported in Agentforce Vibes IDE.
- **Angular App Now Live:** Angular support is now live in Vibes. You can create Angular projects directly from the welcome page.


## Fixed

- **Orchestrate uses the model you selected (Experimental):** Plan authoring and the build tasks that follow use the model chosen in the chat composer, and a reopened draft restores that selection.
- **Orchestrate shows when a plan wasn't created (Experimental):** When a planning request ends without a plan, the chat now shows that it failed and offers to try again, instead of the progress view stopping with no result.

# v4.39.0 (Stable), v4.38.1 (Pre-Release) — Agentforce Vibes

## Added

- **Premium models stay within your usage limit:** On an unmetered org, Sonnet 4.6 no longer switches to Flex credits when you reach its premium usage limit. A notice above the chat input shows when premium usage resets and links to Learn about licenses, the model is greyed out in the model picker, and chat moves to another available model such as GPT-5 for the session. After the reset, a notice offers to switch back to the premium model.

## Fixed

- **Plan Mode moves on from blocked changes:** In Plan Mode, when a file write or other change is blocked, the agent stops retrying it and continues with read-only tools instead.
- **Planning progress shows in one place:** While the agent prepares a plan, progress appears in a single progress view instead of also showing a model-switch message above the chat input.
- **Accurate line counts on agent edits:** The added and removed line counts shown for agent edits are now exact for large files, new files, and lines that begin with `--` or `++`.

# v4.38.0 (Stable), v4.37.1–v4.37.2 (Pre-Release) — Agentforce Vibes

## Added

- **Image limit checked when you attach:** Dropping or pasting more images than a chat allows now adds only the images that fit and shows a notice with how many were added and how many weren't, instead of letting you find out when you send. A chat can include up to 10 images.

## Fixed

- **Long conversations use the full context window on Claude models:** Long conversations no longer stop early with "Prompt is too long." Some Claude models were held to a smaller conversation limit than they support. They now use their full capacity, so you can keep working with large files, long chats and big codebases without being cut off early.

# v4.37.0 (Stable), v4.36.3–v4.36.4 (Pre-Release) — Agentforce Vibes

## Added

- **Orchestrate protects your uncommitted work (Experimental):** When a plan starts or accepted task work is applied, your uncommitted workspace changes are safely preserved. Approving, accepting, reloading, or retrying work no longer accidentally overwrites changes you haven't committed.

## Fixed

- **Improved token utilization:** Chat now uses fewer tokens by limiting the skills included in the system prompt for the Mastra harness. For the Claude harness, skills are discovered on demand using the search skill, reducing unnecessary context and helping you get more out of your token budget.
- **Rate limit notices match the model you're using:** When a model reaches its request limit and the request retries, the limit notice and reset time now reflect the model that was actually used, instead of showing information for a different model.
- **Update notices appear sooner:** When a newer recommended version is available, the Update available notice now appears during your current session instead of sometimes waiting until the next day.
- **Plans show only the final draft (Experimental):** Plan authoring now stays in a single progress view until the final plan is ready. Once saved, the plan is shown together with its approval, making the experience cleaner and easier to follow without displaying intermediate drafts.

# v4.36.2 — Agentforce Vibes

## Fixed

- **Commands run on every model:** Asking the agent to run a command now completes when a model such as GPT is selected. Those commands already completed on Claude.
- **Shared rules open from Org Policies:** In Org Policies, selecting any copy of a shared rule opens that file. A rule that is still in your rules folder no longer shows a notice that the file is missing.
- **A stopped reply no longer blocks the next message:** Stopping a reply marks that turn cancelled, and the next message you send still receives a reply.

# v4.36.0 (Stable), v4.35.1–v4.35.2 (Pre-Release) — Agentforce Vibes

## Added

- **Clearer update guidance:** When a newer version is recommended, a dismissible Update available notice offers Update Now and chat continues. When this install is below the required version, chat stays on an Update required screen until you update.

## Fixed

- **Developer Edition daily limit explains when chat pauses:** On a Developer Edition org, reaching the daily Agentic Chat request limit shows a notice that names the limit and when you can use chat again, including when no exact reset time is available. The notice clears when the next day starts, and its Autocomplete link opens.
- **Improved security and stability:** Additional project file changes now ask for approval before they are kept.

## Changed

- **Recent Chats keeps the conversation in place:** Opening Recent Chats leaves a reply in progress, an unsent draft, and your place in the chat as they were. Closing history returns you to that same conversation. Search matches chat titles and previews.

# v4.35.0 (Stable), v4.34.0 (Pre-Release) — Agentforce Vibes

## Added

- **Governed commands are blocked before they run:** When your org's governance policy blocks a command, Agentforce Vibes declines it before it runs and names that policy, instead of asking you to approve it.
- **Code Analyzer can repair governed edits:** For orgs whose governance policy checks Code Analyzer, agent file changes are checked before they are kept. The same turn can repair violations. If they remain, or the check can't finish, the files are restored to how they were.

## Fixed

- **File edits work on Developer Edition orgs without governance:** Creating or changing a file in chat no longer fails on a Developer Edition org that does not have governance enabled. An org whose policy requires Code Analyzer still checks those edits before they are kept.
- **Chat continues when a long conversation can't be condensed:** If automatic condensing fails, you can keep chatting. A notice offers Summarize & start new chat, which opens a new chat with a summary of this one, instead of stopping the turn with an error.
- **Chat tabs stay open across models:** Opening another chat on a different model no longer closes the chats you already have open.
- **Reopening a workspace restores only your open chats:** Past chats no longer all come back as tabs, including chats from other workspaces. Open them from Recent Chats when you want them.
- **Plan file badges open the file (Experimental):** On an accepted plan, a file that exists in the workspace now opens when you select its badge. Files that aren't written yet stay inactive.
- **Task links in chat open beside the conversation (Experimental):** Selecting a task in chat opens that task in the editor Plan tab and leaves the chat in the sidebar.
- **Orchestrate (Experimental) stops retrying a check it can't run:** A task no longer retries a blocked check until it fails. Resolve in chat queues a follow-up instead of repeating the same step.
- **Orchestrate (Experimental) keeps status on the task:** Conflict details and recovery appear on the task they belong to, instead of repeating as extra notices across the workspace. A task you stop stays with the running work so you can open it and run it again, and other tasks continue.

## Changed

- **Org Policies show what each policy does:** In the Toolkit, each active org policy now opens as a card with Rules, How it's enforced, and What it governs.
- **Salesforce Headless 360 starts off:** Its Toolkit row shows a Beta badge and starts turned off. Turn it on when you want its tools. After you choose, that choice is kept.
- **Clearer Orchestrate (Experimental) plan, task, and question views:** The plan overview, task detail, and clarifying questions each appear once, instead of repeating status, files, and questions in a second layout.
- **Clearer Deployment empty states (Experimental):** Before anything is deployed, and when a deployment is ready, the Deployment tab uses the same empty-state layout as the rest of the panel, without a second heading or an extra org label.

# v4.33.0 (Stable), v4.32.0 (Pre-Release) — Agentforce Vibes

## Added

- **Salesforce Headless 360 MCP server:** Salesforce Headless 360 is now a built-in, Salesforce-hosted MCP server, pointed at the right endpoint for your org automatically. It ships as a Beta server — its Toolkit row carries a "Beta" badge and is off by default, so you opt in with the toggle. Once you enable it and your org activates the Headless 360 beta, its tools join your Toolkit; until the org activates it, the server shows a "Setup Required" row with a link to the activation guide.

## Fixed

- **Government Cloud orgs can start chats on every tier:** Government Cloud orgs with the higher-rate-limit permission previously saw an empty model picker and couldn't start a chat. They now get the Government-approved model catalog on every tier.
- **Content MCP servers honor the org you point them at:** A read-only content MCP server aliased to a specific org now reads from that org, instead of always falling back to your current org.

# v4.31.0 (Stable), v4.30.0 (Pre-Release) — Agentforce Vibes

## Fixed

- **No Code Analyzer status in orgs without a policy:** Code Analyzer status no longer appears in orgs that have no applicable governance policy, so a status for a feature that doesn't apply to your org no longer shows up in chat.

## Changed

- **Clearer setup for platform-hosted MCP servers:** A platform-hosted MCP server your admin hasn't enabled yet now shows a calm "Setup Required" notice instead of an error, on both the server row and the Toolkit tab.

# v4.29.0 — Agentforce Vibes

## Added

- **Build Every Day for Free with Agentforce Vibes:** Agentforce Vibes is available at no additional cost to use every day in Developer Edition orgs. No trial period, no expiration. Your free allocation resets daily so you can build, experiment, and iterate without a spending commitment.
- **Renamed files appear in Diff Review:** When the agent renames a file, the change now shows up in the Diff Review panel — and in preview — so you can inspect and revert it like any other edit.
- **Shell and terminal writes are tracked in Diff Review too:** A file the agent creates, renames, or deletes through a shell command (such as `mv`, `cp`, `rm`, or an output redirect) now shows up in Diff Review and preview, instead of changing your workspace outside the review surface.
- **Code Analyzer findings now appear in chat:** For orgs with AI governance policies enabled, each governed turn's changes are also checked against your org's Code Analyzer rules, with findings shown grouped by severity without delaying your reply.

## Fixed

- **Fixed a telemetry regression that caused missing telemetry in version 4.23.0**
- **Resolved the ENAMETOOLONG issue on Windows when using Claude models.**
- **Security — safer handling of malformed shell commands:** A command with an unterminated quote is now blocked outright instead of being partially parsed and trusted, and command safety checks on Windows now use the correct shell grammar instead of screening `cmd.exe` commands as if they were POSIX.
- **Editing a rule no longer wrongly says it's unavailable:** On macOS, clicking Edit on a rule could falsely report it as "no longer available" and refresh the list instead of opening the file.
- **Approval notices name the mode you're actually in:** A guard-forced approval notice previously said "Bypass" even when you were in Safe Defaults mode. It now matches your actual session mode.
- **Clearer status while a reply starts streaming:** Chat now shows a brief "Thinking" status during the pause before the first token arrives, instead of no indicator at all.

## Changed

- **Model picker reflects your org's AI model governance policy:** For orgs with model governance configured, models your policy blocks are hidden, and a policy-preferred model is surfaced at the top of the picker.

# v4.27.0 (Stable), v4.26.0 (Pre-Release) — Agentforce Vibes

## Added

- **Sign in to third-party remote MCP servers:** You can now connect remote MCP servers that require an interactive sign-in. When a server needs authorization, Agentforce Vibes walks you through signing in instead of failing with an error you can't recover from.
- **Screen reader support in the app shell:** Setup, terms, and org-access takeovers, along with org-switch progress, are now announced to screen readers.

## Fixed

- **Live MCP server status in the Toolkit:** The Toolkit now updates a server's status and tool count the moment discovery finishes or you toggle a server, instead of showing a stale count until you reload the window.
- **Automatic recovery when your org connection drops:** When your org briefly becomes unreachable, chat now shows a recovery state and resumes on its own once the connection returns, instead of leaving the session stuck.
- **Turning off an MCP server stops it immediately:** Toggling a local MCP server off — or deleting it — now shuts down its process right away, instead of leaving it running until the next window reload. A tool call in flight ends as a recoverable error rather than hanging.
- **A crash in one tab no longer blanks the panel:** If one tab hits a rendering error, it's now contained to that tab so the rest of the panel stays usable.
- **Security — file-write approvals now follow symbolic links:** A command that writes to a protected file through a symbolic link now prompts for approval like a direct write, instead of bypassing the check.

## CSV Usage Data Accuracy Issue in Agentforce Vibes 4.0.0 Through 4.24.0

CSV usage data downloaded from Setup is not accurate for activity recorded in Agentforce Vibes 4.0.0 through 4.24.0.

**Impact:** Usage totals in the CSV file may not reflect actual consumption for the affected version range.

**Resolution:** Upgrade to Agentforce Vibes 4.25.0 or later and allow one full month of usage before relying on the CSV data. For exact usage at any time, the Flex Credit dashboard is the source of truth for Agentforce Vibes consumption.

# v4.25.1 — Agentforce Vibes

## Fixed

- **More accurate Government Cloud detection:** Orgs on standard pods with government-like names are no longer misidentified as Government Cloud orgs.

# v4.25.0 (Stable), v4.24.0 (Pre-Release) — Agentforce Vibes

## Fixed

- **Long-running agent turns no longer time out early:** A single turn — including long tool, skill, or MCP calls, or a pause while you approve a tool — can now run for up to an hour before timing out, instead of being cut off after a few minutes.
- **Security — MCP servers defined in a project now ask before running:** A stdio MCP server declared in a workspace's `.mcp.json` no longer starts on its own when you open the folder. It appears as a locked "needs trust" row showing the exact command it would run, and starts only after you choose **Trust & run**; servers you add through the Toolkit yourself are trusted automatically.
- **More consistent usage reporting:** Fixed a telemetry issue that caused inconsistent usage reporting in the Agentforce Vibes usage CSV.

## Changed

- **Diagnostics are captured by default:** Debug logging (`afv.log` / `trace.md`) is now on by default, so a bug report includes diagnostics without a repro round-trip; turn it off with `advanced.debugLogging: false`. Settings → Logging adds a **Minimum level** filter and a **Collapse repeated events** toggle for the live Output view, and turning logging off and back on now keeps your previous settings.

# v4.23.0 (Stable), v4.22.0 (Pre-Release) — Agentforce Vibes

## Fixed

- **Long conversations no longer summarize too early:** A turn that took several steps could compact the conversation well before the context window was full, dropping earlier context sooner than expected. Context use is now measured from the turn's final request, so the conversation is summarized only when it's genuinely near the limit.
- Made some security hardening improvements.

## Changed

- **GPT-5 is no longer offered on the Flex Credits tier:** The model picker no longer lists GPT-5 for orgs on the Flex Credits tier. The other models — including GPT-5.4, Claude Sonnet 4.6, and Claude Opus — remain available, and GPT-5 is unchanged on the Unmetered tier.

# v4.21.0 (Stable), v4.20.0 (Pre-Release) — Agentforce Vibes

## Added

- **Geo-aware model routing:** The model picker now lists only the models served in your org's region when the Geo-aware routing setting is turned on in the org. The setting is available in Summer '26, August monthly release.
- **AI governance policies from DevOps Center (Dev Preview):** Agentforce Vibes now enforces AI governance policies from DevOps Center, automatically applying your org's admin-defined policies to every agent session.

## Fixed

- **Security — shell writes to protected files now prompt for approval:** A shell command that writes to a protected file — including through output redirection or a variable that resolves to one — now asks for approval in every mode, instead of running without confirmation.
- **Clearer setup guidance when Agentforce Vibes isn't enabled:** When the extension isn't enabled in your org, the setup screen now explains how to turn it on, instead of leaving the model picker stuck on "No models available" until you reload.
- **Windows: MCP servers and skill installs now find Node:** On Windows, stdio MCP servers and skill installs no longer fail with "'npm' is not recognized" when Node was installed after VS Code started or lives in a version-manager or global location.
- **Windows: setup no longer falsely reports a missing Salesforce CLI:** The Getting Setup for Success checklist no longer blocks setup with a "Requires the Salesforce CLI" message when the CLI is installed and working.

## Changed

- **Folder mentions inline up to 50 files:** Mentioning a folder in chat now inlines the contents of at most 50 files; the full file tree is still listed. This keeps a large folder from overwhelming a single turn.

# v4.19.0 (Stable), v4.18.0 (Pre-Release) — Agentforce Vibes

## Added

- **Agent Visualizer and Flow Visualizer:** Agent Visualizer and Flow Visualizer are now available in Agentforce Vibes, allowing you to view Agent and Flow metadata directly within the IDE. These visualizers are available if you have the **Metadata Visualizer** extension installed as part of the **Salesforce Expanded Extension Pack**.

## Fixed

- **No more stuck "Checking" at startup:** If entitlement verification stalls or fails while the extension is starting, the setup panel now resolves to a "Can't verify / Try again" card within 30 seconds instead of showing a spinner indefinitely.
- **Correct endpoint after switching orgs:** Switching between orgs in different environments (for example, a sandbox and a production org) no longer strands the session on the previous org's endpoint, which could cause a request to fail.

# v4.17.0 (Stable), v4.16.0 (Pre-Release) — Agentforce Vibes

## Added

- **New Claude Opus models on the flex tier:** Claude Opus 4.8 and Claude Opus 4.7 are now available in the model picker for orgs on the flex tier.
- **Entitlement indicator in the composer:** The composer's model picker now shows a small icon for your billing entitlement, and the tier name — such as Flex Credits or Unmetered — appears in the model picker menu.

## Fixed

- **No setup screen flash at startup on desktop:** VS Code desktop no longer briefly shows the "Enable Agentforce" terms screen while the extension starts up. That screen applies only to Code Builder, and desktop users now go straight to chat.

# v4.15.0 (Stable), v4.14.0 (Pre-Release) — Agentforce Vibes

## Added

- **Slash commands in the composer:** Type `/` in the chat composer to open a menu of your commands and skills. Selecting one drops a `/name` chip into your message that expands into its saved prompt when you send, so you can reuse a prompt without pasting it each time.
- **Manage commands from the Toolkit:** A new Commands section in the Toolkit panel lets you add, edit, and toggle your own reusable `.md` commands alongside skills and rules.
- **Metadata Grounding server (pre-GA):** You can now enable an out-of-the-box Salesforce Metadata Grounding MCP server that grounds the agent's answers in your org's metadata. It's off by default — turn it on from the Experimental settings panel. Your admin must first provision the Salesforce Catalog in the org and enable the server in Setup; until both are done, the Toolkit shows a setup-needed row explaining the remaining steps.

## Changed

- **Restrict AFV output to Salesforce development:** Agentforce Vibes now keeps its output scoped to Salesforce development.
- **Updated default model on the flex tier:** Conversations on the flex tier now default to Claude Sonnet 4.6 in the model picker. No action is needed — new chats use it automatically.

## Fixed

- **Preview chip is resilient to other extensions' manifests:** The preview feature no longer fails its command scan when another installed extension ships a malformed manifest, so the preview chip keeps appearing as expected.

# v4.13.0 (Stable), v4.12.0–v4.12.1 (Pre-Release) — Agentforce Vibes

## Fixed

- **Typed prompts are preserved when switching models:** Changing the model in the composer's picker no longer discards a message you've started. Your unsent text now stays in place instead of being cleared.
- **Switch orgs without reloading VS Code:** Changing the default org from the VS Code status bar is now reflected in chat and DX-backed tools on your next interaction, without requiring a window reload.
- **Improved access status handling during service interruptions:** When an entitled org temporarily cannot verify access, the access panel now shows a "Can't verify / Try again" state and automatically recovers when the service is available, instead of incorrectly showing an unlicensed state.
- **Clearer connectivity errors:** Network drops and corporate proxy or TLS-inspection issues during chat now display a connectivity error with recommended next steps, such as retrying, checking your VPN or proxy settings, or running Copy Diagnostics.
- **Faster access status updates in the sidebar:** The sidebar now displays your org access status as soon as it is available, instead of remaining on "Checking your org…" during slow startup or when reopening the sidebar.
- **Multi-file skills now work across all models:** Skills with companion files (such as `references/` or `assets/`) now load completely across supported models, including Claude models.
- **Improved table download menu display:** The CSV and Markdown download menu for chat tables now renders correctly in both light and dark themes.
- **File downloads now work in Code Builder:** Downloading CSV or Markdown files from chat tables and code blocks now opens a Save dialog and saves the file correctly in Code Builder and other browser-based environments. Desktop VS Code behavior is unchanged.

# v4.11.0 (Stable), v4.10.0 (Pre-Release) — Agentforce Vibes

## Added

- **Chat works behind a corporate HTTP proxy:** When VS Code's `http.proxy` (and optional `http.noProxy`) is configured, the agent's model requests and the extension's own network traffic now route through it, so chat works on networks that require a proxy instead of failing to connect. A standard (non-intercepting) proxy works across all models; proxies that intercept TLS aren't fully covered yet for some models.

## Fixed

- **No false "can't verify access" flash on launch:** On a cold start, the access panel no longer briefly shows "We couldn't check your access" before your real status loads. It now shows a "Checking your org…" state until the check resolves, and a genuine access problem still surfaces afterward.

# v4.9.0 (Stable), v4.8.0 (Pre-Release) — Agentforce Vibes

## Changed

- We made some changes under the hood.

# v4.7.0 (Stable), v4.6.0–v4.6.1 (Pre-Release) — Agentforce Vibes

## Added

- **`.mcp.json` survives a single bad entry:** A malformed MCP server entry no longer rejects your entire `.mcp.json` — the valid servers still load, and any skipped entries are listed in a dedicated banner with each server's id, line, and reason so you can fix a typo instead of silently losing the server.
- **One-click cleanup of leftover built-in MCP servers:** When the Toolkit detects leftover built-in MCP server entries from an earlier version, it offers a "Remove leftover built-in MCP servers?" banner; choosing "Clean up" first backs the whole file up to `.mcp.json.bkp` and then removes only those entries (rename the backup to restore).

## Fixed

- **MCP server status stays consistent on orgs without platform MCP access:** A Salesforce platform MCP server on an org that isn't entitled for it now shows a neutral "setup needed" row instead of a misleading red error, and it reads the same way regardless of which model you're using. Other remote MCP servers that genuinely can't connect still surface as a normal connection error.

# v4.5.0 (Stable), v4.4.0 (Pre-Release) — Agentforce Vibes

## Added

- **Text file and PDF attachments:** Attach non-image files — PDFs, DOCX, source files like `.cls`, or logs — to a chat turn by adding an attachments, drag-and-drop, or `@`-mention. The agent reads their contents (PDFs are extracted as text), and attachments survive window reloads and follow-up turns, so "summarize the PDF I sent" still works after a session resume.

## Fixed

- **Chat transcript no longer freezes on the first prompt:** On a fresh workspace (or after webview state was cleared), submitting your first message could leave the transcript stuck on the thinking placeholder even though the agent ran and changed files. The transcript now streams live and completes, including across a mid-conversation webview remount.
- **Risky commands prompt instead of being silently blocked:** Commands with dangerous shapes (command substitution, `eval` / `bash -c`, piping into an interpreter, or unparsable input) now surface a Run/Cancel approval in every mode — including Bypass — instead of being silently denied. Plan Mode's read-only guarantee is unchanged: mutating tools stay blocked there.
- **Salesforce DX MCP server loads reliably on a slow first install:** The out-of-the-box Salesforce DX (stdio) MCP server now gets a 10-minute discovery window, so a cold or slow first install finishes in one attempt instead of timing out and looping. A transient npm-registry blip, a leftover install lock, or an active npm cooldown no longer strands its tools.
- **Preview chip hidden when the preview host is missing:** The chat preview chip for `.tsx` and LWC files no longer appears — and fails with "command not found" — when the Salesforce Live Preview host extension isn't installed. Installing it mid-chat starts surfacing the chip again on the next file write.
- **"Connected Org" setup check is more reliable:** The welcome page's Connected Org check now reads org connectivity in-process instead of spawning an `sf org display` subprocess that could hang on low-resource Windows hosts. Authorizing an org updates the row automatically without a manual Recheck.
- **Settings and non-Salesforce providers stay available in non-entitled orgs:** When an org lacks Agentforce Vibes access, you can still open Settings and use non-Salesforce providers instead of hitting a dead-end takeover. Salesforce-provider chat sends remain blocked with the existing admin-contact guidance.

# v4.3.0 (Stable), v4.2.0 (Pre-Release) — Agentforce Vibes

## Added

- **Plan Mode can ground its plans:** Plan Mode now loads skills and runs read-only tools (SOQL `SELECT`, metadata describe, and similar lookups) while planning, so skill discovery and read-only org/workspace reads no longer hit a "Blocked in Plan Mode" notice. Writes, deploys/DML, non-read shell commands, and subagent spawns stay blocked, so the read-only guarantee still holds.

## Fixed

- **Per-tab model selection:** Switching the model in one chat tab no longer resets the model in your other tabs. Each tab remembers its own model, and new tabs still inherit your default.
- **Billing after org switch:** Switching orgs mid-chat now bills the newly selected org for subsequent requests, instead of occasionally charging the previous org because of a stale token.
- **Policy-declined tool calls:** A tool call blocked by safety policy now shows a clear inline notice explaining the block (for example, a command-substitution or `eval` pattern) instead of the agent silently returning control. Plan Mode and guard declines show their own reason, and the duplicate generic "User declined the tool call" row is suppressed so a single truthful row appears.
- **Org connection on window reload:** Reloading the window with a still-configured org no longer bounces you back to the setup landing or makes the org look unset. A genuine logout still routes there after a brief settle window.
- **"Connected Org" setup check:** The Connected Org step on the Getting Setup for Success welcome page now stays in its checking state until the org actually connects (or is confirmed to have none), settling to Ready on its own instead of needing repeated Rechecks.

## Changed

- **Fewer false approval prompts for dotfiles:** Writes under benign dot-directories (such as `.vibes-env/` or `.cache/`) no longer prompt for approval in Bypass mode — only config-bearing dotfiles, matched by basename (`.env`, `.gitignore`, `.npmrc`), still do. Credential directories (`.ssh`, `.aws`, `.kube`, `.gnupg`, `.docker`, `.azure`, `.config/gcloud`) still prompt at any depth, and `.vscode/`, `*.code-workspace`, `.github/workflows/`, manifests, `AGENTS.md`, and `.git/` are unchanged.

# v4.1.0 (Stable), v4.0.5 (Pre-Release) — Agentforce Vibes

## 🎉 Agentforce Vibes 2.0 is generally available

After a successful journey through pre-release, **Agentforce Vibes 2.0** graduates to general availability. This is the first stable release of the redesigned agentic development environment built on Salesforce's Coding Agent Platform, powered by Claude and the Mastra agent orchestration engines.

Everything we introduced in pre-release is now stable, with the safety, MCP, and chat experience improvements from `4.0.1`–`4.0.4` included by default.

Highlights include:

- 💬 A redesigned chat experience with multi-tab conversations, conversation history, reasoning visibility, tool execution details, automatic context management, and **PNG/JPEG image attachments** (paste, drag-and-drop, or attach button) on a per-conversation budget.
- 🧠 Plan Mode for breaking down complex work into structured plans and manageable tasks.
- 🛠️ Tool execution with approvals, native VS Code diff-based review, and **"Run safe defaults"** as the out-of-the-box session mode — auto-approving in-workspace edits while requiring approval for out-of-workspace paths, protected files, and `.git/` writes. Bypass mode surfaces an explanatory inline alert when prompting for protected-file or `.git/` writes.
- 🔌 Expanded MCP support, including platform-hosted MCP servers, improved configuration, more reliable connections, and **per-tool permission controls** with auto-approval for trusted read-only OOTB Salesforce MCP tools (Salesforce DX, API Context, Metadata Experts).
- 📚 Built-in support for **Skills and Rules** to guide agent behavior and package reusable expertise, with skill-first discovery for UI bundle and media prompts.
- 👀 Live previews for Lightning Web Components and metadata visualizations, plus React UI bundle previews (require the Salesforce Live Preview extension and Multi-Framework enabled in your org).
- 🤖 Access to the latest Claude and GPT models through a unified model picker, with correct billing-tier resolution across org and model switches.

Thanks to everyone who tried the pre-release and sent feedback — keep it coming.

# v4.0.4 — Agentforce Vibes (Pre-Release)

## Added

- **Image attachments in chat:** Attach PNG and JPEG images to a chat turn via paste, drag-and-drop, or the attach button. Thumbnails render on your message and survive reload, so a follow-up like "describe this" still works after restarting. WebP and GIF are not supported and surface a clear "PNG/JPEG only" toast. A per-conversation budget (10 images / 15 MB) is enforced across all turns; tripping the cap surfaces a toast naming which limit fired.

## Fixed

- **Billing tier after org or model switch:** Switching orgs (e.g. A → B → A) or selecting a premium model like Claude Sonnet 4.6 in an unmetered org now correctly updates the billing tier on subsequent chat turns instead of continuing to bill against the previously cached tier.
- **Skill-first discovery for UI bundle and media prompts:** Prompts like "create a React web app to show Account data" or "get a CMS banner image" now load the matching skill (`building-ui-bundle-app`, `searching-media`) before acting, instead of skipping straight to MCP tools. Routine single-tool operations (a one-off SOQL query, a single deploy) still call the MCP tool directly.
- **Clearer tool-approval errors:** Starting a new turn, resuming, or switching model while a tool approval was outstanding previously surfaced a cryptic `Error (UNKNOWN): ClaudeApprovalCoordinator …`. The superseded turn now ends cancelled with no error toast, and a genuine approval timeout shows a clear `Error (AGENT_TIMEOUT): Tool approval timed out …` message.

## Changed

- **Protected-file approval notice:** When Bypass mode prompts for a write to a protected file (`.afvrules`, `package.json`, `AGENTS.md`, dotfiles) or `.git/`, the explanatory notice now renders as an info inline alert with full wrapping text, instead of a one-line execution-step detail that truncated the explanation.
- **Settings polish:** The "Default session mode" dropdown in Settings → Permissions & Safety adopts updated dropdown sizing and alignment so the Ask every time / Run safe defaults / Bypass descriptions read cleanly. The "Manage tool permissions" link now lives inside the mode-gated Safety guardrails area.

# v4.0.3 — Agentforce Vibes (Pre-Release)

## Added

- MCP per-tool permission controls — Configure auto-approve overrides for individual MCP tools via Toolkit drill-down. Trusted read-only OOTB Salesforce MCP tools (Salesforce DX, API Context, Metadata Experts) are auto-approved in Run safe defaults. Each tool's effective state is visible in the Toolkit.
- Bypass mode transparency — Added explanatory messaging when Bypass mode prompts for protected-file or .git/ writes.

## Fixes

- Stream error handling — Mid-turn upstream HTTP errors (LLMG 5xx, gateway failures) now preserve their typed error code, preventing silent webview freezes.
- Telemetry — orgEdition is now consistently included in telemetry events; v3 telemetry event shape aligned to parity.

# v4.0.2 — Agentforce Vibes (Pre-Release)

## Added

- **Permissions & Safety:** Fresh installs now default to "Run safe defaults" mode, auto-approving in-workspace file edits while requiring approval for out-of-workspace paths, protected files, and `.git/` writes. The Settings panel now exposes the command allowlist editor and the "Auto-approve Salesforce MCP write tools" toggle.

- **Session mode descriptions:** The "Default session mode" dropdown in Settings now displays a description for each option, clarifying the autonomy/safety tradeoff inline.

## Fixed

- **Protected file writes:** Writes to protected files (`.afvrules`, `package.json`, `AGENTS.md`, dotfiles) now present a Run/Cancel approval prompt in all permission modes instead of silently failing.

- **AccessGate flash:** Resolved a transient "contact your admin" takeover appearing for entitled and Developer Edition orgs on extension load or model switch.

# v4.0.1 — Agentforce Vibes (Pre-Release)

## Fixed

- Included models no longer billed as premium on unmetered orgs

- Custom request headers no longer dropped in ADX requests

# v4.0.0 — Agentforce Vibes (Pre-Release)

## 🚀 Announcing the Agentforce Vibes 2.0 Pre-Release

We're excited to introduce the first public pre-release of **Agentforce Vibes 2.0**, a major evolution of the Agentforce Vibes experience. This release delivers a dramatically more capable agentic development environment with advanced planning workflows, improved tool orchestration, deeper MCP integration, and a redesigned chat experience. Agentforce Vibes 2.0 is built on Salesforce's Coding Agent Platform, powered by the robust Claude and Mastra agent orchestration engines.

With Agentforce Vibes 2.0, you can do more than generate code. Agents can reason through complex tasks, create implementation plans, ask clarifying questions, manage context intelligently, and take multi-step actions while keeping you in control through approvals, permissions, and native VS Code diff reviews.

Highlights include:

- 💬 A redesigned chat experience with multi-tab conversations, conversation history, reasoning visibility, tool execution details, and automatic context management.
- 🧠 **Plan Mode** for breaking down complex work into structured plans and manageable tasks.
- 🛠️ Improved tool execution with approvals, security controls, and native VS Code diff-based review.
- 🔌 Expanded MCP support, including platform-hosted MCP servers, improved configuration, and more reliable connections.
- 📚 Built-in support for Skills and Rules to help guide agent behavior and package reusable expertise.
- 👀 Live previews for Lightning Web Components and metadata visualizations, plus React UI bundle previews (require the Salesforce Live Preview extension and Multi-Framework enabled in your org).
- 🤖 Access to the latest Claude and GPT models through a unified model picker.

Agentforce Vibes 2.0 represents a significant step forward in agentic development and lays the foundation for powerful new capabilities coming in future releases.

As this is a pre-release, we're eager to hear your feedback. Try out Agentforce Vibes 2.0 and let us know what you think!

---

# Earlier releases — Agentforce Vibes (v3.x)

_The v3.x changelog (Agentforce Vibes 1.0 / Einstein for Developers line), preserved here for continuity. v3 used an inverted weekly cadence (odd minors = pre-release, even = stable), distinct from v4 above._

# We’re Now Doing Pre Releases!

Do you like living on the edge and trying new features and bug fixes before our customers do? You know you do. You can help us by testing pre-release versions of Agentforce Vibes before they ship. It’s easy to do, doesn't cost a dime and you’ll help make Agentforce Vibes better for the entire developer community.

## Why use the pre-release?

You’ll get early access to new capabilities, improvements, and fixes. Plus, your feedback helps us catch issues and help us ship higher-quality releases.

## Versioning Scheme

**Pre Release**: Odd-numbered weekly releases (for example, v1.11)

**Stable Release**: Even-numbered weekly releases (for example, v1.10)

Features first appear in the Pre Release and roll into the Stable Release the following week.

# 3.40.0 (Stable), 3.39.0 (Pre-release)

## Added

- Added automatic update of Salesforce skills to their latest version on extension startup.

# 3.37.0 (Pre-release)

## Added

- Added support for Claude Opus 4.5 in Flex Mode and Sonnet 4.6 in Flex and Unmetered Modes. We also updated the premium model sign-in experience in the Model Picker.

# 3.36.0 (Stable), 3.35.0 (Pre-release)

## Added

- We now collect telemetry on Monetization including monthly paid users and flex credits users.

# 3.34.0 (Stable), 3.33.0 (Pre-release)

## Fixed

- Fixed language definitions for Apex, which are now correctly handled by the Apex extension.

- Improved performance by preventing the extension from unnecessarily opening all workspace files during activity tracking.

## Cline fork updates

- chore: mulesoft add images and model indicator ([#462](https://github.com/forcedotcom/cline-fork/pull/462))

# 3.32.0 (Stable), 3.31.0 (Pre-release)

## Added

- Added grace period notice for users with existing free Agentforce Vibes Agentic Chat usage (grace period ends 5/31).
- Added documentation link to React tile on welcome page for enabling React Beta org preference.
- Added telemetry tracking to monitor React/web app opt-in adoption rates.

## Fixed

- Fixed MCP server status widget to show accurate active/total server counts
- Fixed restoring of edited Salesforce skill files on restart
- Fixed platform-hosted MCP server URLs to use environment-specific subdomains for testing
- Fixed Scratch Orgs to prevent fallback to Flex Credits when Premium model limit is reached when using unmetered Agentforce Vibes

# 3.30.1 (Stable)

## Fixed

- The Pro model in Agentforce Vibes now uses Claude-4.5-Sonnet for chat and interactive experiences. Once you hit your monthly Pro usage limit, it automatically switches to the Core model (GPT-5 mini) for the rest of the billing cycle. See the [documentation](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/einstein-overview.html) for more details on usage limits.

# 3.30.0 (Stable), 3.29.0 (Pre-release)

## Added

- Hosted MCP servers are now enabled by default in the Agentforce Vibes IDE.
- Data masking limit is now 115k.
- We added a Working/Thinking indicator during agent processing. This provides visual confirmation that the agent is processing a request.

## Fixed

- We enhanced the Welcome Page with a new serializer and background placement. The page now stays open after a prompt is sent, allowing for a more seamless onboarding flow.
- We made improvements to the Salesforce hosted MCP server UX with a lock icon, contextual links, and a retry button.

# 3.28.0 (Stable), 3.27.0 (Pre-release)

## Added

- We added a VS Code setting "Enable Auto Update Skills" to update Salesforce skills to their latest version on extension startup.
- We also introduced a new command, "Agentforce: Refresh Salesforce Skills", to update Salesforce skills to their latest version.

## Fixed

- Resolved an API error where Claude models were returning “Invalid API response” for certain requests.

# 3.26.0 (Stable), 3.25.0 (Pre-release)

## Added

- We introduced a new welcome page in Agentforce Vibes, laying the foundation for upcoming interactive experiences to help you get started with building apps and agents.
- Agentforce Vibes now supports Salesforce-hosted MCP servers, making it easier to extend your workflows with additional tools and capabilities.
- Prompts are now enhanced with Salesforce Skills, which activate automatically based on context. You can view and manage available Skills in the Skills panel.

## Fixed

- We fixed an issue where long-running terminal commands could cause tasks to hang.
- We fixed an issue where parallel tool calls could fail or return invalid API responses for Claude models.

# 3.24.0 (Stable), 3.23.0 (Pre-release)

## Added

- We have updated our Core models for Inline Autocomplete and Agentic Chat. Please upgrade to the latest version of Agentforce Vibes as soon as possible to ensure all features remain fully functional. See [model usage and choice limits](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/einstein-overview.html#model-usage-and-choice-limits) for updated rate limits and details.

# 3.22.0 (Stable), 3.21.0 (Pre-release)

## Fixed

- We fixed a bug where API errors did not include error details

# 3.20.1 (Hot fix)

## Fixed

- Fixed our fallback request mechanism

# 3.20.0 (Stable), 3.19.0 (Pre-release)

## Added

- Abilities are now generally available and enabled by default. Abilities automatically selects the relevant MCP tools for a task, improving accuracy while reducing unnecessary context and token usage.

# 3.18.0 (Stable), 3.17.0 (Pre-release)

## Added

- We added support for skills, re-usable custom instruction sets that extend the capabilities of Agentforce Vibes. Skills are enabled by default. We'd love for you to try them out and give us your feedback!

## Fixed

- We fixed an incorrect message for off-topic errors.
- We fixed a bug causing premature auto-compacting of tasks.
- We fixed a bug that paused a chat after creating a plan in Act mode.
- We fixed SObject reference resolution in chat messages.

# 3.15.0 (Pre-release)

## Added

- We added a new rules file for coding an agent's Agent Script file.

# 3.14.0 (Stable), 3.13.0 (Pre-release)

## Added

- Multimodal support is now live - We added support for including files and images as context in tasks for richer, more accurate responses.
- You can now use [AGENTS.md](https://agents.md/) in rules to clarify agent behavior and expectations.
- We have simplified the task header and auto approve panel
- We made some changes under the hood.

# 3.12.1 (Stable)

## Fixed

- We fixed telemetry to report correct generated lines of code.

# 3.12.0 (Stable), 3.11.0 (Pre-release)

## Added

- We added Markdown support to the Focus Chain UI.
- We improved the user-facing message shown when hitting the context window limit with PII enabled in the org.
- We made security enhancements.

## Fixed

- We disabled the noisy toast notification shown on every reload for DX MCP server enablement.

# 3.9.0 (Pre-release)

## Added

- We added support for manual compaction, giving users greater control over their context and token usage. See [doc for more details](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/manual-compact.html).
- We updated the task header and focus chain UI design.
- We renamed the MCP tab from Installed to Configure.

# 3.8.0 (Stable), 3.7.0 (Pre-release)

## Added

- We made some security enhancements.

# 3.6.0 (Stable), 3.5.0 (Pre-release)

## Added

- LWC and Apex rules are now turned on by default
- Added automatic approval for read-only MCP tools for Salesforce DX MCP server, eliminating unnecessary approval prompts while maintaining user approval for write operations.
- Several improvements including security fixes to the Safe commands feature.

## Fixed

- Export task history has been fixed on Agentforce Vibes IDE

# 3.3.1

## Fixed

- We fixed some security issues.

# 3.3.0

## Added

- We introduced `/deep-planning`, a four-step planning flow that scans your codebase, clarifies requirements, generates an implementation plan, and launches a new task pre-loaded with all necessary context.
- We introduced `Focus Chain`, which maintains a live todo list and tracks progress throughout long tasks. This helps Agentforce manage context across resets and remain focused on multi-step workflows.
- We updated the auto-approve toggle behavior so it no longer triggers MCP server reconnections. This eliminates related race conditions and unnecessary UI re-renders, improving responsiveness and reducing delay.
- We made some updates to the MCP server Enable/Disable UX.

# 3.2.0

## Added

- We added support for user-defined safe terminal commands. Safe commands run automatically, with approval prompts for potentially unsafe cases.
- We added a safeguard for sensitive files: all write operations now require Human-in-the-Loop (HITL) review before acceptance, regardless of auto-approval settings.

## Fixed

- We fixed an issue where fallback requests were not routed through the topic classifier check on the server side.
- We fixed a bug where default rules were not restored on extension reinstall. As a result of this, we also removed the Agentforce: Reset A4D Default Rules command.
- We improved MCP server handling—only servers with modified configurations are reconnected. Servers with unchanged configs stay connected without interruption.
- We removed the History panel to simplify the interface.

# 3.1.0

## Added

- We’re catching good vibes—we’ve rebranded! Agentforce for Developers has leveled up into Agentforce Vibes, because building with agents should feel good. Dev Agent has also been renamed to Agentforce.
- The UX now clearly shows when you’ve switched from the Pro model tier to the Core model, and when your token limits will reset.

## Fixed

- Agentforce now shows the correct error message if you’re not signed into a Salesforce org.

# 3.0.1

- 🚀 Dev Agent GA

  We’re excited to announce the General Availability of Dev Agent, a dramatic step forward from Dev Assistant into agentic chat powered by MCP servers and tools. With Dev Agent, you can go beyond simple prompts and suggestions—Dev Agent can plan, reason, and take multi-step actions to help you build, troubleshoot, and optimize with more autonomy than ever before.
  This release represents a major evolution in the developer experience and sets the stage for even more powerful workflows.
  :point_right: Learn more in the Dev Agent Overview

# 2.102.0

## Added

- Dev Agent (Developer Preview)

  🚀🚀 We’re excited to announce Developer Preview of Dev Agent, a major evolution of Dev Assistant! Dev Agent brings agentic capabilities powered by MCP servers and tools, enabling the assistant to take multistep actions and help automate your development workflows like never before. Check out our [docs](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/devagent-overview.html) here. We can’t wait for you to try it and share feedback!

- The Inline Autocomplete feature now runs on the SFR Model, delivering faster, higher-quality code suggestions and more relevant completions.

# 2.12.0

## Added

- The default model for Dev Assistant is now GPT-4o mini
- We made some changes under the hood.

# 2.11.0

## Added

- 🚀🚀 We’re excited to announce multi-model support across select features.
  - Some features now leverage premium third-party models hosted securely on platforms like AWS Bedrock, giving users access to high-performance, premium AI capabilities.
  - Premium models are available up to a specified token or request limit. After that, the system automatically falls back to Salesforce models to ensure uninterrupted performance.

# 2.10.1

## Added

- We improved the user experience for references. We did this by introducing dynamic file icons, enhanced file reference display, and refined styling.
- The Apex Test Case Generation form now resets each time you upload a new Apex file. This makes the form more consistent.
- We made some changes under the hood.

# 2.10.0

## Added

- Custom rules are now incorporated into prompts for both `/document` and `/test` commands.

## Fixed

- Resolved an issue in Apex test case generation where classes located in subdirectories under classes/ were not being detected.
- Optimize LWC: Added a notification for cases where no optimizations are available ensuring only files with actual changes are displayed.
- Test case generation UI: Improved the Picker component’s styling and functionality.

# 2.9.0

## Added

- 🚀🚀 Exciting news for our Developers! We’ve released yet another new feature - User-specified context in Dev Assistant. This feature allows you to add specific Apex or Lightning Web Component (LWC) files, Apex methods, selected code, and local metadata to your chat sessions. Use this feature to get more precise and contextually relevant responses from Dev Assistant. We hope you :heart: this update to the Dev Assistant you’ve grown to know and love.

- AI custom rules now support <code>.trigger</code> files. You can now include **Applies to: <code>\*\*/\*.trigger</code>** in your custom rules markdown files.
- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 2.8.0

## Added

- We now collect telemetry on AI custom rules that are incorrectly excluded from requests. This data helps us improve the product.
- We made some changes under the hood.

# 2.7.0

## Added

🚀🚀 Exciting news for our Developers! We’re thrilled to announce the release of a powerful set of new features in Agentforce for Developers. Check out our docs to learn more about these features.

- The new AI Custom Rules feature allows users to define rules that shape how AI-generated code should be structured and behave, giving you greater control over how the LLM writes code.
- The Optimize LWC feature (currently in Developer Preview) introduces a new Mobile Offline agent. This agent analyzes and updates LWC code to ensure it aligns with mobile optimization guidelines.

# 2.6.0

## Added

- We added a user-friendly error message notification in the Apex Test Case Generation form for when test generations fail.

## Fixed

- We resolved an issue where optimizing certain LWC components caused an error.

# 2.5.0

## Added

- We made some changes under the hood.

## Fixed

- We resolved an issue where generating Jest tests or optimizing certain LWC components caused an error.

# 2.4.0

## Added

- We made some changes under the hood.

## Fixed

- We added RAG-based context for SOQL prompts to improve accuracy. Previously, prompts with SOQL didn’t include context, leading to inconsistent response generation in complex use cases.

# 2.3.0

## Added

- Form selections for the test case generation agent are now preserved when you switch between Apex and LWC tests. This means you won't have to reselect components each time, making your testing process more efficient and seamless.
- We made some changes under the hood.

## Fixed

- We fixed an issue that caused improper caching of the vector database after RAG indexing was completed.

# 2.2.0

## Added

- With its elevated presence in the Salesforce Extension Pack, Agentforce for Developers is now a core part of the Salesforce developer experience. This change improves discoverability, making it easier for developers to find and install Agentforce for Developers as part of their workflow.
- The Code Analyzer VS Code (Beta) extension now seamlessly integrates with Agentforce for Developers by offering suggested code quick fixes for a set of PMD violations. To view the list of PMD rules that can currently be fixed this way, run this command from the terminal:

```
sf code-analyzer rules --rule-selector Recommended:pmd:Security:Apex --rule-selector Recommended:pmd:ErrorProne:Apex
```

For more information, see [Fix Your Code Using Agentforce for Developers](https://developer.salesforce.com/docs/platform/salesforce-code-analyzer/guide/analyze-vscode.html#fix-your-code-using-agentforce-for-developers).

- We increased the input token limit for Dev Assistant and Apex test case generation from 7K to 10K. The increased input token limit will help add more context to requests, and generate better quality responses.

## Fixed

- The latest Salesforce patch release fixed an issue with Multi-Factor Authentication (MFA) that sometimes caused access issues for Agentforce for Developers in a Salesforce org.

# 2.1.1

## Added

- We made some changes under the hood.

# 2.1.0

## Added

- The diff view now clears after you accept or discard a generation. When you accept a generation, your updated file automatically replaces the diff view in the editor, making for a more seamless user experience.
- The `Agentforce: Generate Code` command now redirects you to the Dev Assistant so that you can easily take advantage of all the extras that Dev Assistant has to offer. See Chat with Dev Assistant to learn more.
- We made some changes under the hood.

# 2.0.1

🚀🚀 Exciting news for our Developers! We’re thrilled to announce the release of a powerful set of new features in Agentforce for Developers. We’ve upped our game and made it easier than ever to build and optimize Lightning web components. This release introduces a brand new **Agents panel** in the Activity bar that houses these new features:

- **Apex and LWC Test Case Generation**: Automatically generate Jest tests for your LWC components using our new AI agent. The clean, easy to use UI experience that includes a new diff view, is also available for Apex test case generation.
- **Optimize your LWC Components (Dev Preview)**: Boost your components' **accessibility** with AI recommendations aligned with select **WCAG Level accessibility standards**. The agent can also assist in resolving **To-Do comments** directly from your component code. This feature is currently in **developer preview** and very easy to turn on. We're eager to hear your feedback to help us improve!

Give these new features a try and let us know what you think!

# 1.13.0

### Features

- We made some changes under the hood.

# 1.12.0

### Features

- We updated the chat streaming process to handle larger chunks returned by XGen-Code, our custom LLM. Previously, data was processed one character at a time, causing choppy chat output due to updates being sent only every 20 chunks. Now, the webview is updated on every chunk for a more responsive experience.
- We made some changes under the hood.

# 1.11.0

### Features

- We made some changes under the hood.

# 1.10.0

## Fixed

- We've fixed an issue that was causing incorrect generations in the /document command.

## Added

- We made some changes under the hood.

# 1.9.0

## Added

- We revamped our icons—check out the sleek new look in the Dev Assistant and status bar! Spot the upgrade?
- We made some changes under the hood.

# 1.8.0

## Added

- We've made improvements to the system prompts for LWC files. This means you'll get better chat responses when you're working with an LWC file open
- We removed a setting that allowed users to choose between long and short autocompletions. Now you'll always have the best autocompletion experience, based on your context.

# 1.7.1

## Fixed

- We fixed a bug where recent user message history was not being sent to the LLM.
- We made some changes under the hood.

# 1.7.0

## Added

- We made some changes under the hood.

# 1.6.0

## Added

- We made some changes under the hood.

## Fixed

- We made improvements to our inline auto complete feature. Now you’ll get more stable suggestions as you type.
- We made some changes under the hood.

# 1.5.0

## Added

- We made some changes under the hood.

# 1.4.1

## Fixed

- We made some changes under the hood.

# 1.4.0

## Added

- We made some changes under the hood.

## Fixed

- We made improvements to our inline auto complete feature. Now you’ll get more helpful and stable suggestions as you type.
- We made some changes under the hood.

# 1.3.0

## Added

- Now you can enable or disable retrieval augmented generation (RAG) in settings. With RAG on, the responses you receive from Dev Assistant will be more relevant.
- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 1.2.0

## Added

- A Salesforce admin can now disable Agentforce for Developers in a Salesforce org. If Agentforce for Developers is disabled in your default org, it’ll now also be disabled in the extension.

## Fixed

- We made some changes under the hood.

# 1.1.0

## Added

- Check out the new icon state in the status bar to see when inline autocompletions are paused. We pause autocompletions when we detect idle time in the editor. Paused autocompletions are easy to restart.

# 1.0.1

## Added

- Say hello to Agentforce for Developers. This extension's brand has a new identity! We've revamped the commands, views, and icons to match the exciting new branding.
- To ensure that our RAG model has all the context it needs about your workspace, we now remind you to run SFDX:Refresh SObject Definitions.

## Fixed

- We made some changes under the hood.

# 0.61.0

🚀🚀 We’re thrilled to announce the general availability of Einstein for Developers, our generative AI tool, powered by our custom Salesforce LLMs, CodeGen2.5 and xGen-Code.🚀🚀

Use Einstein for Developers, your helpful coding assistant in Visual Studio Code and Code Builder as you work on Apex and Lightning Web Component (LWC) files in your Salesforce DX project. Here’s an overview of features.

**Einstein Dev Assistant**: Code with ease with the help of your Dev Assistant right beside you. Get started with code generation and Salesforce development by asking Einstein for help. With easy-to-use slash commands, you can also focus on specific tasks like understanding new code and improving your code documentation.

**Command Palette**: Use the **Einstein: Generate Code** command in the VS Code Command Palette to enter a question about what you want to build. Einstein responds with Apex code suggestions right in your editor.

**Inline Auto Completions**: As you type, Einstein for Developers can suggest code completions, without any interruptions to your workflow. Easily pick the suggestion that works for you. Use this feature in Apex and LWC (JavaScript, CSS, and HTML) files.

**Test Case Generation for Apex**: Use Einstein for Developers to easily create unit test cases for your Apex methods. Quickly get to required Apex test coverage and get your code ready for deployment.

## Key Product Links

- [Documentation](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/einstein-overview.html)
- [FAQ](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/einstein-faq.html)
- [GitHub](https://github.com/forcedotcom/Einstein-GPT-for-Developers/issues) repo for logging issues.
- [Terms of Use](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/einstein-termsofuse.html)

We look forward to seeing how Einstein for Developers will power your Salesforce Development. Thank you for being a part of our journey!

# 0.60.0

Meet Einstein Dev Assistant, the latest addition to Einstein for Developers 🤖 🎉. This chat experience lets you ask Einstein questions about your local files and explain your existing code. With the ability to iterate over your responses, Einstein Dev Assistant will make you more productive than ever.

# 0.59.0

## Fixed

- We made some changes under the hood.

# 0.58.0

## Fixed

- We made some changes under the hood.

# 0.57.0

### Features

- No need to guess if the magic ✨ is happening. We've added a handy setting that’ll show you when an autocomplete is in progress.

## Fixed

- We made some changes under the hood.

# 0.56.0

## Added

- Our inline autocompletion feature just got a whole lot better. Now, you can easily find previous generations by simply placing your cursor back in the same location. We’ll show you up to 5 previous generations, making it easy to find the perfect completion.

## Fixed

- We made some changes under the hood.

# 0.55.0

## Added

- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 0.54.0

## Added

- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 0.53.0

## Added

- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 0.52.0

## Added

- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 0.51.0

## Added

- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 0.50.0

## Added

- The Einstein for Developers extension is now bundled! This should result in a significantly faster startup time. 🚀
- We updated the Einstein for Developers sidebar introduction text to direct users to our Apex Unit Test Case Generation feature.

## Fixed

- We added a missing description to an icon.

# 0.49.0

## Added

🚀 We’re thrilled to announce that Einstein for Developers (Beta) is now a part of the [Salesforce Expanded Pack](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode-expanded)! 🚀
Here’s what you can expect with this change:

- Access to powerful generative AI tooling that is grounded in your org’s data, and is backed by the promise of Salesforce’s Trust Layer. See [Additional Terms of Use](https://developer.salesforce.com/tools/vscode/en/einstein/einstein-termsofuse) for information.
- Seamless updating of extension versions. Weekly extension releases include new features and enhancements that we continue to make to Einstein for Developers!
- Einstein for Developers is enabled by default in our VS Code desktop application. Enable it in Code Builder in minutes.

We’re excited that we’ve made it easier for you to give Einstein for Developers a spin, and we hope you’ll give it a try. We’d love your [feedback](https://developer.salesforce.com/tools/vscode/en/einstein/einstein-feedback) ! 📝

### Fixed

- We fixed an issue where the History tab in the output panel stole focus when the extension was first initialized

# 0.48.0

## Added

- We made some changes under the hood.

# 0.47.0

## Added

- We added a new setting that allows users to select the length of inline autocompletions.
- We made some changes under the hood.

## Fixed

- We fixed an issue with file creation during Test Case Generation so that all Salesforce CLI extension versions are now supported. ([#72](https://github.com/forcedotcom/Einstein-GPT-for-Developers/issues/72))

# 0.46.0

## Added

- We made some changes under the hood.

# 0.45.1

## Fixed

- We fixed an issue with the change log not rendering correctly.

# 0.45.0

## Added

- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 0.44.0

## Fixed

- We fixed an issue where launching VS Code and opening a non `sfdx` project created a `.sfdx` sub-folder in the project.

# 0.43.2

## Fixed

- We fixed a bug that caused some Einstein for Developers features to be hidden when used with the most recent version of the Core CLI extension (v60.7.0).

# 0.43.1

## Added

- We made some changes under the hood.

# 0.43.0

## Added

- We improved the Einstein for Developers sidebar experience by adding a more detailed and helpful greeting. This includes links to a walkthrough and product documentation.

## Fixed

- We fixed an issue with the Einstein for Developers icon, where the extension's enabled state was not accurately reflected when users manually triggered completions.
- We made some changes under the hood.

# 0.42.0

## Features

- We updated some setting names in an effort to make their purpose clearer to understand. Values for these settings have reverted to default as a result of this update. Go to **Settings** and search for "Einstein for Developers" and make any settings updates you need.

## Fixed

- We made some changes under the hood.

# 0.41.0

## Added

- The Inline autocomplete feature now includes support for HTML files for LWC.

# 0.40.0 Major Release Update!

This release of Einstein for Developers (Beta) includes some spiffy new items that power up our custom generative AI tool. :tada: :tada: Use these features to make your productivity take a major leap forward. The extension is now enabled by default across all Salesforce orgs.

- **Inline Autocomplete for Apex and LWC**: Get multiple inline suggestions, as you code. Easily pick the one that works for you. This new feature is available in Apex and LWC (Javascript and CSS) files.
- **Test Case Generation for Apex**: Use Einstein for Developers to quickly generate unit tests for your Apex methods.
- **Update to Data Usage Policy**: Einstein for Developers no longer uses customer data to train our LLM, CodeGen.

Some other changes we’ve made to help you with your tasks include:

- An update to status icon that now suggests actions when you click on it, and also keeps you even more informed about the state of affairs.
- A brand new **Einstein for Developers Walkthrough** so that you can learn about these new features!

We hope you have fun with the features! :tada:

# 0.39.0

## Added

- We made some changes so that clicking the Einstein icon in the status bar now opens the command palette from where you can choose helpful Einstein for Developers commands.
- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 0.38.0

## Fixed

- We made some changes under the hood.

# 0.37.0

## Fixed

- Fixed an issue that sometimes prevented the Einstein for Developers extension from activating in Code Builder. ([#370](https://github.com/forcedotcom/Einstein-GPT-for-Developers/issues/370))
- We made some changes under the hood.

## Added

- Pressing enter in the side bar now triggers the ask button automatically. ([#358](https://github.com/forcedotcom/Einstein-GPT-for-Developers/issues/358)), closes [#278](https://github.com/forcedotcom/Einstein-GPT-for-Developers/issues/278)

# 0.36.0

## Fixed

- We made some changes under the hood.

# 0.35.0

## Added

- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 0.34.0

## Fixed

- We made some changes under the hood.

# 0.33.0

## Added

- We made some changes under the hood.

## Fixed

- We fixed a bug so that you can now copy prompts and generated responses from the History and Feedback panel. Thank you [abrantes23](https://github.com/abrantes23) for bringing the [issue](https://github.com/forcedotcom/Einstein-GPT-for-Developers/issues/10) to our attention. We hope we made your job just a little easier.

# 0.32.0

## Added

- We added some spiffy syntax highlighting to responses so that the generated code block looks exactly like it would in your code editor.

## Fixed

- We made token usage optimal by estimating in advance how many tokens a prompt would use, while also increasing the token budget. Response truncation incidents are now greatly reduced as a result of these updates. And you’re no longer wasting those precious tokens. Win-win much?
- We fixed an issue with single line generations not wrapping around columns. Responses are now formatted correctly in the History & Feedback tab.
- We fixed some issues so that both engineered prompts and Apex code responses are better formatted.

# 0.31.0

## Added

- We updated the minimum required version of the @salesforce/core library to 59.9.0
- We made some changes under the hood.

## Fixed

- We made some changes under the hood.
- We fixed an issue with incorrect handling of the user prompt so that it is now correctly added at the end of the printed engineered prompt in logs.

# 0.30.0

## Added

- We made some changes under the hood.

## Fixed

- We made some changes under the hood.
- We fixed an issue with incorrect handling of the situation when the Einstein for Developers is disabled in an org while it’s active.

# 0.29.0

## Added

- We made some changes under the hood.

# 0.28.0

## Added

- Einstein icon now has an updated look.
- You can now specify any apex files in your workspace in your prompts with the suffix .cls. Our engineered prompts can now extract the outlines of these files and use the information as context to provide better grounding.
- We made some changes under the hood.

## Fixed

- We made some changes under the hood.

# 0.27.1

## Added

- We made some changes under the hood.

# 0.26.3

## Added

- Einstein for Developers can now correctly parse custom metadata when it is a part of a prompt and uses the `__mdt` suffix. The metadata added to a prompt in this way is automatically included into the context to ground generations. Make sure to run `SFDX:Refresh SObject Definitions` to pull custom metadata from your org into the project. Then build prompts using the custom metadata and associated suffix. Enjoy building those cool prompts!
- We made some changes under the hood.

# 0.24.2

## Added

- You can now reference multiple custom objects in your prompt, making code generations more aware of your project's metadata. Run SFDX:Refresh SObjects Definitions to gather org metadata into your project. Then build your prompt using as many custom objects in the metadata as you want. Enjoy building those awesome prompts!
- You can now use the Esc key to clear code suggestions.

# 0.23.1

### Fixed

- We updated these keyboard shortcuts--
  - Use `ctrl+enter` / `cmd+enter` to accept a code suggestion that is generated in your Apex file when you run the `Einstein: Generate Code` command from that file.
  - Use `ctrl+shift+r` / `cmd+shift+r` to open the `Einstein: Generate Code` command in the command palette. You must have an Apex file in focus to use this shortcut.

- We increased the character limit for the text you can enter in the Einstein sidebar. Now you don’t have to worry about running out of words when you’re crafting your prompts. We know you have a lot of questions. Ask away!

# 0.22.1

## Fixed

- We made an update so that a text response is not rendered as code.
- We made some changes under the hood.

## Added

- We've added org context information to items the prompt history panel. Now the panel only displays prompt history information for the default org.

# 0.21.1

## Fixed

- We now let you know when your prompt is too long for us to handle!
- We also let you know when your CLI version needs updating.
- We fixed an issue where the feedback in the panel would get out of sync with feedback in the history. Thank you [Jeff Kranz](https://github.com/jkranz-rk) for reporting the [issue](https://github.com/forcedotcom/Einstein-GPT-for-Developers/issues/16).
- We made some changes under the hood.

## Added

- We made an update to telemetry reporting.

# 0.19.0 Open Beta Release

We released a brand new Einstein for Developers (Beta) extension. This extension used with the Salesforce Extension Pack, powers up your Salesforce development environment with custom generative AI. Use the extension to generate boilerplate Apex code from natural language instructions in a sidebar, so you can work with your editor and the tool side by side, without any interruptions to your workflow.

# 0.1.0 - 0.18.0

These releases were limited to the Einstein for Developers closed pilot.
