import {
  $k,
  Bh,
  Bz,
  CircleCheck,
  Copy,
  Ellipsis,
  Fh,
  If,
  Kb,
  LoaderCircle,
  Oh,
  Or,
  Pe,
  Plus,
  Pr,
  Qc,
  RZ,
  Server,
  Users,
  Xc,
  au,
  c2,
  cL,
  cc,
  cs,
  dL,
  dX,
  dc,
  dg,
  jl,
  md,
  mu,
  ps,
  qd,
  rYe,
  rc,
  require_jsx_runtime,
  require_react,
  uc,
  vd,
  wd,
  xf,
  zd,
  zh
} from "./chunk-3SWQGGFU.js";
import "./chunk-QF5O5TBP.js";
import "./chunk-3KLZL5V6.js";
import {
  __toESM
} from "./chunk-QFQZKJEX.js";

// ../web-shell/dist/agents-route-Pu5E-8GT.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var lt = /^[A-Za-z0-9_-]{1,256}$/;
function rt(r) {
  let s;
  try {
    s = new URL(r.trim());
  } catch {
    return;
  }
  const m = s.pathname.lastIndexOf("/join/"), [g, ...u] = m >= 0 ? s.pathname.slice(m + 6).split("/") : [];
  if (s.protocol !== "http:" && s.protocol !== "https:" || s.username || s.password || s.search || s.hash || !g || u.some(Boolean) || !lt.test(g))
    return;
  const f = s.pathname.slice(0, m).replace(/\/+$/, "");
  return { serverUrl: `${s.origin}${f}`, workspaceId: g };
}
function ot(r, s, m) {
  return `QWEN_AGENT_HOST_ENROLLMENT_TOKEN=${ce("<token>")} qwen agents join ${ce(r.trim())}${m ? " --allow-http" : ""}`;
}
function st(r, s, m, g) {
  if (!r.some((u) => u.id === m))
    return r.find(
      (u) => u.kind === "external" && u.status === "online" && (g ? u.id === g : !s.has(u.id))
    );
}
function Ce(r) {
  return new Set(
    r.filter((s) => s.status === "online").map((s) => s.id)
  );
}
var Be = /* @__PURE__ */ new Set(["localhost", "127.0.0.1", "[::1]", "::1"]);
function ce(r) {
  return `'${r.replaceAll("'", `'"'"'`)}'`;
}
function Oe(r) {
  const s = new URL(r);
  if (!["http:", "https:"].includes(s.protocol) || s.username || s.password || s.search || s.hash)
    throw new Error("Invalid coordinator address.");
  return s;
}
function it(r, s) {
  const m = Oe(r), u = `${`${m.origin}${m.pathname.replace(/\/+$/, "")}`}/join/${encodeURIComponent(s.workspaceId)}`, f = m.protocol === "http:" && !Be.has(m.hostname), x = `QWEN_AGENT_HOST_ENROLLMENT_TOKEN=${ce(s.token)}`, v = `serve --no-web --port 0 --join ${ce(u)}${f ? " --agent-host-allow-http" : ""}`;
  return {
    qwen: `${x} qwen ${v}`,
    npx: `${x} npx -y @qwen-code/qwen-code@latest ${v}`,
    insecure: f
  };
}
function ue({ text: r }) {
  const { t: s } = dg(), [m, g] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2 rounded-md border border-border bg-muted/40 py-1.5 pr-1.5 pl-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { className: "min-w-0 flex-1 truncate font-mono text-xs", children: r }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      Pe,
      {
        size: "sm",
        variant: "outline",
        onClick: () => {
          Qc(r).then(
            () => g(true),
            (u) => Oh(u)
          );
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { "aria-hidden": "true" }),
          s(m ? "collab.runtime.copied" : "collab.runtime.copy")
        ]
      }
    )
  ] });
}
function ct({
  open: r,
  onOpenChange: s,
  serverUrl: m,
  runtimes: g,
  onCreateJoinToken: u,
  onConnectExisting: f,
  onJoinCoordinator: x,
  onCreateAgentOn: v,
  replacementTarget: b
}) {
  const { t: a } = dg(), [N, $] = (0, import_react.useState)(
    "command"
  ), [S, A] = (0, import_react.useState)(""), [h, k] = (0, import_react.useState)(""), [D, R] = (0, import_react.useState)(false), [c, I] = (0, import_react.useState)(), C = (0, import_react.useMemo)(() => rt(S), [S]), l = x ? ["command", "existing", "join"] : ["command", "existing"], [L, K] = (0, import_react.useState)(m), [y, V] = (0, import_react.useState)(), [T, W] = (0, import_react.useState)(), [Q, z] = (0, import_react.useState)(), [U, H] = (0, import_react.useState)(false), [Z, Y] = (0, import_react.useState)(() => Date.now()), M = b?.id, t = (0, import_react.useMemo)(() => {
    if (T)
      return M ? st(
        g,
        T.known,
        M,
        y?.replacementHostId
      ) : g.find(
        (d) => d.kind === "external" && d.status === "online" && !T.known.has(d.id)
      );
  }, [M, g, T, y?.replacementHostId]), q = r && T !== void 0 && !t;
  (0, import_react.useEffect)(() => {
    if (!q) return;
    const d = setInterval(() => Y(Date.now()), 1e3);
    return () => clearInterval(d);
  }, [q]);
  const E = (0, import_react.useMemo)(() => {
    if (y)
      try {
        return it(L, y);
      } catch {
        return;
      }
  }, [L, y]), P = async () => {
    H(true), z(void 0);
    try {
      if (!_e(L)) throw new Error(a("collab.runtime.badAddress"));
      V(await u(M)), W({
        at: Date.now(),
        known: M ? new Set(g.map((d) => d.id)) : Ce(g)
      });
    } catch (d) {
      z(d instanceof Error ? d.message : String(d));
    } finally {
      H(false);
    }
  }, B = async (d) => {
    if (d.preventDefault(), !f) return;
    const j = new FormData(d.currentTarget);
    H(true), z(void 0);
    const i = Ce(g);
    try {
      await f({
        remoteUrl: String(j.get("remoteUrl")),
        remoteToken: String(j.get("remoteToken")),
        remoteCwd: String(j.get("remoteCwd")),
        serverUrl: L,
        allowHttp: j.get("allowHttp") === "on"
      }) && W({ at: Date.now(), known: i });
    } finally {
      H(false);
    }
  }, O = async (d) => {
    if (d.preventDefault(), !!x) {
      if (!C) {
        z(a("collab.runtime.joinBadLink"));
        return;
      }
      H(true), z(void 0);
      try {
        await x({
          serverUrl: C.serverUrl,
          workspaceId: C.workspaceId,
          enrollmentToken: h.trim(),
          allowHttp: D
        }) && (I(C.serverUrl), k(""));
      } catch (j) {
        z(j instanceof Error ? j.message : String(j));
      } finally {
        H(false);
      }
    }
  }, J = y ? Math.max(0, Math.ceil((y.expiresAt - Z) / 6e4)) : 0, X = y && J > 0 ? y : void 0, G = (d) => {
    !d && t && (V(void 0), W(void 0)), !d && c && (I(void 0), A("")), s(d);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(cc, { open: r, onOpenChange: G, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dc, { className: "grid-cols-[minmax(0,1fr)] sm:max-w-xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Xc, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(uc, { children: b ? a("collab.runtime.replaceTitle", {
        name: b.label
      }) : a("collab.runtime.addTitle") }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(md, { children: b ? a("collab.runtime.replaceDescription", {
        name: b.label
      }) : a("collab.runtime.addDescription") })
    ] }),
    b ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "rounded-md border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-muted-foreground", children: a("collab.runtime.replaceEffects") }) : null,
    !t && b && y?.replacementHostId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { role: "status", className: "text-sm text-muted-foreground", children: a("collab.runtime.replaceRecovery", {
      name: b.label,
      id: b.id
    }) }) : null,
    c ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        role: "status",
        className: "flex items-center gap-3 rounded-md border border-[var(--status-done-fg)]/30 bg-[var(--status-done-bg)] p-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            CircleCheck,
            {
              "aria-hidden": "true",
              className: "size-5 shrink-0 text-[var(--status-done-fg)]"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "min-w-0 font-medium break-all", children: a("collab.runtime.joinConnected", { server: c }) })
        ]
      }
    ) : t ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex flex-col gap-3", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3 rounded-md border border-[var(--status-done-fg)]/30 bg-[var(--status-done-bg)] p-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        CircleCheck,
        {
          "aria-hidden": "true",
          className: "size-5 shrink-0 text-[var(--status-done-fg)]"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "min-w-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "font-medium", children: b ? a("collab.runtime.replaced", {
          oldName: b.label,
          name: t.label
        }) : a("collab.runtime.connected", {
          name: t.label
        }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs text-muted-foreground", children: a("collab.runtime.offers", {
          programs: c2(t).map(dX).join(", ")
        }) }),
        b ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs text-muted-foreground", children: a("collab.runtime.replaceCompleted") }) : null
      ] })
    ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      b ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          role: "tablist",
          className: "flex gap-4 border-b border-border text-sm",
          children: l.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": N === d,
              onClick: () => $(d),
              className: `-mb-px border-b-2 pb-2 ${N === d ? "border-foreground font-medium" : "border-transparent text-muted-foreground"}`,
              children: a(d === "command" ? "collab.runtime.methodCommand" : d === "existing" ? "collab.runtime.methodExisting" : "collab.runtime.methodJoin")
            },
            d
          ))
        }
      ),
      N === "join" && !b ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "flex flex-col gap-1.5 text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-medium", children: a("collab.runtime.address") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          Or,
          {
            value: L,
            onChange: (d) => K(d.target.value),
            disabled: y !== void 0
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xs text-muted-foreground", children: Be.has(_e(L)) ? a("collab.runtime.loopbackHint") : a("collab.runtime.addressHint") })
      ] }),
      b || N === "command" ? X && E ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col gap-3 text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "font-medium", children: a("collab.runtime.runThis") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ue, { text: E.qwen }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs text-muted-foreground", children: a("collab.runtime.noQwen") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ue, { text: E.npx }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "text-xs text-muted-foreground", children: [
          a("collab.runtime.expires", { minutes: J }),
          E.insecure && ` ${a("collab.runtime.httpHint")}`
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3 rounded-md border border-dashed border-border p-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            LoaderCircle,
            {
              "aria-hidden": "true",
              className: "size-4 shrink-0 animate-spin text-muted-foreground motion-reduce:animate-none"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "font-medium", children: a("collab.runtime.waiting") }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs text-muted-foreground", children: a("collab.runtime.waitingFor", {
              seconds: Math.max(
                0,
                Math.floor((Z - (T?.at ?? Z)) / 1e3)
              )
            }) })
          ] })
        ] })
      ] }) : null : N === "join" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "form",
        {
          id: "join-coordinator",
          className: "flex flex-col gap-3 text-sm",
          onSubmit: (d) => void O(d),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs text-muted-foreground", children: a("collab.runtime.joinDescription") }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "flex flex-col gap-1.5", children: [
              a("collab.runtime.joinLink"),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                Or,
                {
                  name: "joinLink",
                  required: true,
                  value: S,
                  onChange: (d) => A(d.target.value),
                  placeholder: "https://coordinator:4170/join/<workspace>",
                  "aria-invalid": S.trim() !== "" && !C ? true : void 0
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "flex flex-col gap-1.5", children: [
              a("collab.runtime.joinToken"),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                Or,
                {
                  name: "enrollmentToken",
                  type: "password",
                  autoComplete: "off",
                  required: true,
                  value: h,
                  onChange: (d) => k(d.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "input",
                {
                  type: "checkbox",
                  name: "allowHttp",
                  checked: D,
                  onChange: (d) => R(d.target.checked)
                }
              ),
              a("collab.runtime.allowHttp")
            ] }),
            C ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col gap-1.5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs text-muted-foreground", children: a("collab.runtime.joinCli") }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                ue,
                {
                  text: ot(S, "", D)
                }
              )
            ] }) : null
          ]
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "form",
        {
          id: "connect-existing-runtime",
          className: "flex flex-col gap-3 text-sm",
          onSubmit: (d) => void B(d),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "flex flex-col gap-1.5", children: [
              a("collab.runtime.remoteUrl"),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                Or,
                {
                  name: "remoteUrl",
                  type: "url",
                  required: true,
                  placeholder: "http://192.168.1.20:4170"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "flex flex-col gap-1.5", children: [
              a("collab.runtime.remoteToken"),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                Or,
                {
                  name: "remoteToken",
                  type: "password",
                  autoComplete: "off",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "flex flex-col gap-1.5", children: [
              a("collab.runtime.remoteCwd"),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                Or,
                {
                  name: "remoteCwd",
                  required: true,
                  placeholder: "/home/me/project"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "checkbox", name: "allowHttp" }),
              a("collab.runtime.allowHttp")
            ] })
          ]
        }
      )
    ] }),
    Q && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { role: "alert", className: "text-sm text-destructive", children: Q }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(mu, { children: c ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pe, { variant: "outline", onClick: () => G(false), children: a("collab.runtime.done") }) : t ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pe, { variant: "outline", onClick: () => G(false), children: a("collab.runtime.done") }),
      v && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Pe,
        {
          onClick: () => {
            G(false), v(t.id);
          },
          children: a("collab.runtime.createAgentOn", { name: t.label })
        }
      )
    ] }) : b || N === "command" ? X ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pe, { variant: "outline", onClick: () => s(false), children: a("collab.runtime.closeKeepLink") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pe, { disabled: U, onClick: () => void P(), children: a(
      b && y ? "collab.runtime.refreshReplacement" : "collab.runtime.generate"
    ) }) : N === "join" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Pe,
      {
        type: "submit",
        form: "join-coordinator",
        disabled: U || !C || !h.trim(),
        children: a("collab.runtime.connect")
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Pe,
      {
        type: "submit",
        form: "connect-existing-runtime",
        disabled: U || !f,
        children: a("collab.runtime.connect")
      }
    ) })
  ] }) });
}
function _e(r) {
  try {
    return Oe(r).hostname;
  } catch {
    return "";
  }
}
var dt = /* @__PURE__ */ new Set(["localhost", "127.0.0.1", "[::1]"]);
function mt(r) {
  try {
    return dt.has(new URL(r).hostname);
  } catch {
    return false;
  }
}
function ut(r) {
  const s = JSON.stringify({
    jsonrpc: "2.0",
    id: 1,
    method: "SendMessage",
    params: {
      message: {
        role: "ROLE_USER",
        messageId: "hello-1",
        parts: [{ text: "Hello! What can you help with?" }]
      }
    }
  });
  return [
    `curl -s ${r.endpoint}`,
    "-H 'A2A-Version: 1.0'",
    `-H 'Authorization: Bearer ${r.secret}'`,
    `-H 'x-qwen-workspace-id: ${r.workspaceId}'`,
    `-H 'x-qwen-caller-id: ${r.callerId}'`,
    `-H 'x-qwen-agent-id: ${r.agentId}'`,
    "-H 'content-type: application/json'",
    `-d '${s}'`
  ].join(" ");
}
function he({ label: r, text: s }) {
  const { t: m } = dg(), [g, u] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col gap-1.5 text-sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-medium", children: r }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2 rounded-md border border-border bg-muted/40 py-1.5 pr-1.5 pl-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { className: "min-w-0 flex-1 truncate font-mono text-xs", children: s }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        Pe,
        {
          size: "sm",
          variant: "outline",
          onClick: () => void Qc(s).then(
            () => u(true),
            (f) => Oh(f)
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { "aria-hidden": "true" }),
            m(g ? "collab.share.copied" : "collab.share.copy")
          ]
        }
      )
    ] })
  ] });
}
function ht({
  agentName: r,
  open: s,
  onOpenChange: m,
  onCreate: g,
  onList: u,
  onRevoke: f
}) {
  const { t: x } = dg(), [v, b] = (0, import_react.useState)(), [a, N] = (0, import_react.useState)([]), [$, S] = (0, import_react.useState)(), [A, h] = (0, import_react.useState)(false), k = (0, import_react.useRef)(u);
  k.current = u, (0, import_react.useEffect)(() => {
    s && (b(void 0), S(void 0), k.current().then(N, () => N([])));
  }, [s]);
  const D = async (R) => {
    h(true), S(void 0);
    try {
      await R(), N(await k.current());
    } catch (c) {
      S(c instanceof Error ? c.message : String(c));
    } finally {
      h(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(cc, { open: s, onOpenChange: m, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(dc, { className: "grid-cols-[minmax(0,1fr)] sm:max-w-xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Xc, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(uc, { children: x("collab.share.title", { name: r }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(md, { children: x("collab.share.description") })
    ] }),
    v && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        he,
        {
          label: x("collab.share.endpoint"),
          text: v.endpoint
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(he, { label: x("collab.share.token"), text: v.secret }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(he, { label: x("collab.share.try"), text: ut(v) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs text-muted-foreground", children: v.expiresAt ? x("collab.share.onceUntil", {
        date: new Date(v.expiresAt).toLocaleDateString()
      }) : x("collab.share.once") }),
      mt(v.endpoint) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { role: "alert", className: "text-xs text-destructive", children: x("collab.share.loopback") })
    ] }),
    a.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col gap-1 text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xs text-muted-foreground", children: x("collab.share.active", { count: a.length }) }),
      a.map((R) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          className: "flex items-center gap-2 rounded-md px-2 py-1 hover:bg-muted",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "min-w-0 flex-1 truncate", children: [
              R.callerId,
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-2 text-xs text-muted-foreground", children: R.expiresAt ? x("collab.share.until", {
                date: new Date(R.expiresAt).toLocaleDateString()
              }) : "" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              Pe,
              {
                size: "sm",
                variant: "ghost",
                disabled: A,
                onClick: () => void D(() => f(R.callerId)),
                children: x("collab.share.revoke")
              }
            )
          ]
        },
        R.callerId
      ))
    ] }),
    $ && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { role: "alert", className: "text-sm text-destructive", children: $ }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(mu, { children: v ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pe, { onClick: () => m(false), children: x("collab.share.done") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Pe,
      {
        disabled: A,
        onClick: () => void D(async () => b(await g())),
        children: x("collab.share.create")
      }
    ) })
  ] }) });
}
var bt = "_formActions_1dh4x_4";
var ft = "_field_1dh4x_11";
var pt = "_roster_1dh4x_33";
var gt = "_agentCard_1dh4x_39";
var xt = "_agentRow_1dh4x_44";
var vt = "_agentRowDisabled_1dh4x_51";
var Nt = "_agentMain_1dh4x_55";
var wt = "_agentTitleLine_1dh4x_63";
var kt = "_statusBadge_1dh4x_70";
var Ct = "_agentActions_1dh4x_84";
var _t = "_agentConfig_1dh4x_93";
var St = "_configLabel_1dh4x_101";
var Rt = "_configNote_1dh4x_108";
var qt = "_runtimeCard_1dh4x_116";
var It = "_runtimeHeader_1dh4x_127";
var At = "_runtimeTitle_1dh4x_131";
var Lt = "_runtimeStatus_1dh4x_137";
var yt = "_runtimeFacts_1dh4x_147";
var Ht = "_fieldHint_1dh4x_182";
var $t = "_squadTile_1dh4x_188";
var Dt = "_squadRoster_1dh4x_208";
var Tt = "_squadRosterRow_1dh4x_223";
var Mt = "_squadRosterWho_1dh4x_231";
var jt = "_squadRosterName_1dh4x_267";
var Et = "_squadRosterRole_1dh4x_275";
var zt = "_squadMemberPicker_1dh4x_282";
var Ut = "_squadMemberLegend_1dh4x_292";
var Pt = "_squadMemberRow_1dh4x_301";
var Ft = "_squadMemberName_1dh4x_309";
var o = {
  formActions: bt,
  field: ft,
  roster: pt,
  agentCard: gt,
  agentRow: xt,
  agentRowDisabled: vt,
  agentMain: Nt,
  agentTitleLine: wt,
  statusBadge: kt,
  agentActions: Ct,
  agentConfig: _t,
  configLabel: St,
  configNote: Rt,
  runtimeCard: qt,
  runtimeHeader: It,
  runtimeTitle: At,
  runtimeStatus: Lt,
  runtimeFacts: yt,
  fieldHint: Ht,
  squadTile: $t,
  squadRoster: Dt,
  squadRosterRow: Tt,
  squadRosterWho: Mt,
  squadRosterName: jt,
  squadRosterRole: Et,
  squadMemberPicker: zt,
  squadMemberLegend: Ut,
  squadMemberRow: Pt,
  squadMemberName: Ft
};
function Wt(r) {
  return r.filter((s) => !s.retiredAt);
}
function Se({
  squad: r,
  agents: s,
  pending: m,
  onSubmit: g,
  onCancel: u
}) {
  const { t: f } = dg(), x = Wt(s), v = (0, import_react.useId)(), [b, a] = (0, import_react.useState)(r?.name ?? ""), [N, $] = (0, import_react.useState)(
    r && !r.leaderIssue ? r.leaderAgentId : ""
  ), [S, A] = (0, import_react.useState)(
    () => new Map(
      (r?.members ?? []).map((c) => [
        c.agentId,
        c.role ?? ""
      ])
    )
  ), h = x.filter(
    (c) => c.id !== N
  ), k = (c) => {
    c.preventDefault();
    const I = new FormData(c.currentTarget), C = (l) => {
      const L = String(I.get(l) ?? "").trim();
      return L === "" ? null : L;
    };
    g({
      name: b.trim(),
      description: C("description"),
      instructions: C("instructions"),
      leaderAgentId: N,
      // A squad saved before leaders were kept out of the member list may
      // still name its leader there.
      members: [...S].filter(([l]) => l !== N).map(([l, L]) => ({
        agentId: l,
        ...L.trim() ? { role: L.trim() } : {}
      }))
    });
  }, D = `${v}-name-hint`, R = b.trim();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "form",
    {
      className: o.agentConfig,
      onSubmit: k,
      "data-testid": "squad-form",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: o.configLabel, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { htmlFor: `${v}-name`, children: f("collab.squad.name") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "input",
            {
              id: `${v}-name`,
              className: o.field,
              name: "name",
              required: true,
              maxLength: 48,
              "aria-describedby": D,
              value: b,
              onChange: (c) => a(c.target.value)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { id: D, className: o.fieldHint, children: R ? f("collab.squad.calledAs", { name: R }) : f("collab.squad.nameHint") })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: o.configLabel, children: [
          f("collab.squad.leader"),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "select",
            {
              className: o.field,
              required: true,
              value: N,
              onChange: (c) => {
                const I = c.target.value;
                if ($(I), S.has(I)) {
                  const C = new Map(S);
                  C.delete(I), A(C);
                }
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "", disabled: true, children: f("collab.squad.leaderPick") }),
                x.filter((c) => c.enabled).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: c.id, children: c.name }, c.id))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { className: o.squadMemberPicker, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", { className: o.squadMemberLegend, children: f("collab.squad.members") }),
          h.map((c) => {
            const I = S.has(c.id);
            return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: o.squadMemberRow, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "input",
                {
                  id: `${v}-member-${c.id}`,
                  type: "checkbox",
                  checked: I,
                  onChange: (C) => {
                    const l = new Map(S);
                    C.target.checked ? l.set(c.id, "") : l.delete(c.id), A(l);
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)($k, { name: c.name, color: c.color }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "label",
                {
                  htmlFor: `${v}-member-${c.id}`,
                  className: o.squadMemberName,
                  children: c.name
                }
              ),
              I ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "input",
                {
                  className: o.field,
                  "aria-label": `${c.name} ${f("collab.squad.role")}`,
                  placeholder: f("collab.squad.role"),
                  maxLength: 200,
                  value: S.get(c.id) ?? "",
                  onChange: (C) => {
                    const l = new Map(S);
                    l.set(c.id, C.target.value), A(l);
                  }
                }
              ) : null
            ] }, c.id);
          })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: o.configLabel, children: [
          f("collab.squad.instructions"),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "textarea",
            {
              className: o.field,
              name: "instructions",
              rows: 3,
              defaultValue: r?.instructions ?? ""
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: o.configLabel, children: [
          f("collab.squad.description"),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "input",
            {
              className: o.field,
              name: "description",
              defaultValue: r?.description ?? ""
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: o.formActions, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pe, { type: "button", variant: "ghost", size: "sm", onClick: u, children: f("collab.form.cancel") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Pe,
            {
              type: "submit",
              size: "sm",
              disabled: m || N === "",
              children: f("collab.squad.save")
            }
          )
        ] })
      ]
    }
  );
}
function Je() {
  const { t: r } = dg();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fh, { className: "border", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(xf, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(zh, { variant: "icon", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(If, { children: r("collab.squad.empty") })
  ] }) });
}
function Re({
  name: r,
  color: s,
  role: m,
  leader: g
}) {
  const { t: u } = dg(), f = g ? u("collab.squad.leads") : m;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "li",
    {
      className: o.squadRosterRow,
      "data-squad-role": g ? "leader" : "member",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: o.squadRosterWho, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)($k, { name: r, color: s }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: o.squadRosterName, children: r })
        ] }),
        f ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: o.squadRosterRole, children: f }) : null
      ]
    }
  );
}
function Bt({
  squads: r,
  agents: s,
  pending: m,
  creating: g,
  onCreatingChange: u,
  onCreate: f,
  onUpdate: x,
  onRetire: v,
  onMention: b
}) {
  const { t: a } = dg(), [N, $] = (0, import_react.useState)(), S = r.filter((h) => !h.retiredAt), A = (h) => s.find((k) => k.id === h)?.color;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: o.roster, "data-testid": "squads-section", children: [
    g ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(jl, { size: "sm", className: o.agentCard, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Se,
      {
        agents: s,
        pending: m,
        onCancel: () => u(false),
        onSubmit: async (h) => {
          await f(h) && u(false);
        }
      }
    ) }) : null,
    S.length === 0 && !g ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Je, {}) : null,
    S.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      jl,
      {
        size: "sm",
        className: h.leaderIssue ? `${o.agentCard} ${o.agentRowDisabled}` : o.agentCard,
        "data-testid": "squad-card",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: o.agentRow, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: o.squadTile, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {}) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: o.agentMain, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: o.agentTitleLine, children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(zd, { className: "min-w-0 truncate", children: h.name }),
                h.leaderIssue ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  ps,
                  {
                    variant: "secondary",
                    className: o.statusBadge,
                    "data-status": "error",
                    children: h.leaderIssue === "disabled" ? a("collab.squad.leaderPaused") : a("collab.squad.needsLeader")
                  }
                ) : null
              ] }),
              h.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bh, { className: "truncate text-xs", children: h.description }) : null,
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { className: o.squadRoster, children: [
                h.leaderName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  Re,
                  {
                    name: h.leaderName,
                    color: A(h.leaderAgentId),
                    leader: true
                  }
                ) : null,
                h.members.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  Re,
                  {
                    name: k.name,
                    color: A(k.agentId),
                    role: k.role
                  },
                  k.agentId
                ))
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: o.agentActions, children: [
              b ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                Pe,
                {
                  variant: "outline",
                  size: "sm",
                  disabled: !!h.leaderIssue || m,
                  onClick: () => b(h.name),
                  children: a("collab.agent.mentionIt")
                }
              ) : null,
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(qd, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vd, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  Pe,
                  {
                    variant: "ghost",
                    size: "icon-sm",
                    "aria-label": a("collab.agent.more", { name: h.name }),
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { "aria-hidden": "true" })
                  }
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(wd, { align: "end", className: "min-w-40", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    Pr,
                    {
                      disabled: m,
                      onSelect: () => $(h.id),
                      children: a("collab.squad.edit")
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(au, {}),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    Pr,
                    {
                      variant: "destructive",
                      disabled: m,
                      onSelect: () => {
                        window.confirm(
                          a("collab.squad.retireConfirm", {
                            name: h.name
                          })
                        ) && v(h.id);
                      },
                      children: a("collab.squad.retire")
                    }
                  )
                ] })
              ] })
            ] })
          ] }),
          N === h.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Se,
            {
              squad: h,
              agents: s,
              pending: m,
              onCancel: () => $(void 0),
              onSubmit: async (k) => {
                await x(h.id, k) && $(void 0);
              }
            }
          ) : null
        ]
      },
      h.id
    ))
  ] });
}
var Ot = /* @__PURE__ */ new Set([
  "online",
  "idle",
  "working",
  "offline",
  "error"
]);
function Jt({
  agents: r,
  runtimes: s,
  view: m,
  onViewChange: g,
  onMentionAgent: u,
  onDeleteAgent: f,
  onSetAgentEnabled: x,
  onUpdateAgent: v,
  onOpenAgentBuilder: b,
  onOpenDefinitions: a,
  onCreateJoinToken: N,
  onRemoveRuntime: $,
  onConnectRemoteHost: S,
  onJoinCoordinator: A,
  hostServerUrl: h,
  shares: k,
  squads: D,
  pending: R
}) {
  const c = s ?? [], [I, C] = (0, import_react.useState)(), { t: l } = dg(), [L, K] = (0, import_react.useState)(false), [y, V] = (0, import_react.useState)(), [T, W] = (0, import_react.useState)(), [Q, z] = (0, import_react.useState)(false), U = (t) => Ot.has(t) ? l(`collab.agentStatus.${t}`) : t, H = (t) => !t || t.kind === "local" ? l("collab.agent.thisComputer") : t.label, Z = (t) => `${dX(t.execution?.provider)} \xB7 ${H(t.runtime)}`, Y = (t) => (q) => {
    if (q.preventDefault(), !v) return;
    const E = new FormData(q.currentTarget), P = (i) => {
      const w = String(E.get(i) ?? "").trim();
      return w === "" ? null : w;
    }, B = String(E.get("maxConcurrentRuns") ?? "").trim(), O = E.getAll("executionHostId").map((i) => String(i)), J = r.find((i) => i.id === t), X = J?.execution?.mode === "managed-host" ? J.execution.hostIds : [], G = O.length !== X.length || O.some((i) => !X.includes(i)), d = J?.execution?.provider, j = c.find(
      (i) => i.kind === "local"
    );
    v(t, {
      description: P("description"),
      model: P("model"),
      agentType: P("agentType"),
      instructions: P("instructions"),
      maxConcurrentRuns: B === "" ? null : Number(B),
      ...G ? {
        execution: O.length > 0 ? {
          mode: "managed-host",
          hostIds: O,
          ...d ? { provider: d } : {}
        } : {
          mode: "local",
          ...d && j && c2(j).includes(d) ? { provider: d } : {}
        }
      } : {}
    }), C(void 0);
  }, M = (t) => {
    g(t), C(void 0), z(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex w-full flex-col gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "min-w-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "text-xl font-semibold text-balance", children: l("agents.title") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-1 text-sm text-muted-foreground", children: l(`collab.tabs.${m}Hint`) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex shrink-0 gap-2", children: [
        m === "agents" && a ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pe, { variant: "outline", onClick: a, children: l("collab.agent.roles") }) : null,
        m === "agents" && b ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pe, { onClick: () => b(), children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { "data-icon": "inline-start" }),
          l("collab.agent.new")
        ] }) : null,
        m === "squads" && D ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pe, { disabled: R, onClick: () => z(true), children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { "data-icon": "inline-start" }),
          l("collab.squad.new")
        ] }) : null,
        m === "runtime" && N ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          Pe,
          {
            variant: "outline",
            disabled: R,
            onClick: () => {
              V(void 0), K(true);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { "data-icon": "inline-start" }),
              l("collab.runtime.addTitle")
            ]
          }
        ) : null
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      cL,
      {
        type: "single",
        value: m,
        onValueChange: (t) => {
          t && M(t);
        },
        variant: "outline",
        size: "sm",
        "aria-label": l("agents.title"),
        children: ["agents", "squads", "runtime"].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dL, { value: t, children: l(`collab.tabs.${t}`) }, t))
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "contents", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { className: o.roster, hidden: m !== "agents", children: r.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fh, { className: "border", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(xf, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(zh, { variant: "icon", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(If, { children: l("collab.agent.empty") })
      ] }) }) : r.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        jl,
        {
          size: "sm",
          className: t.enabled && !t.retiredAt ? o.agentCard : `${o.agentCard} ${o.agentRowDisabled}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: o.agentRow, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                $k,
                {
                  name: t.name,
                  color: t.color,
                  size: "md"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: o.agentMain, children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: o.agentTitleLine, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(zd, { className: "min-w-0 truncate", children: t.name }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    ps,
                    {
                      variant: "secondary",
                      className: o.statusBadge,
                      "data-status": t.retiredAt || !t.enabled ? "off" : t.status,
                      children: t.retiredAt ? l("collab.agentStatus.retired") : t.enabled ? U(t.status) : l("collab.agentStatus.paused")
                    }
                  ),
                  t.waiting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ps, { variant: "outline", className: "text-[10px]", children: l("collab.agent.waiting", { count: t.waiting }) }) : null
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bh, { className: "truncate text-xs", children: t.description || "\u2014" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "truncate text-xs text-muted-foreground", children: Z(t) })
              ] }),
              t.retiredAt ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: o.agentActions, children: [
                u ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  Pe,
                  {
                    variant: "outline",
                    size: "sm",
                    disabled: !t.enabled || R,
                    onClick: () => u(t.name),
                    children: l("collab.agent.mentionIt")
                  }
                ) : null,
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(qd, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(vd, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    Pe,
                    {
                      variant: "ghost",
                      size: "icon-sm",
                      "aria-label": l("collab.agent.more", {
                        name: t.name
                      }),
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { "aria-hidden": "true" })
                    }
                  ) }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(wd, { align: "end", className: "min-w-40", children: [
                    v ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      Pr,
                      {
                        onSelect: () => C({
                          id: t.id,
                          hostIds: t.execution?.mode === "managed-host" ? [...t.execution.hostIds] : []
                        }),
                        children: l("collab.agent.configure")
                      }
                    ) : null,
                    k ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      Pr,
                      {
                        onSelect: () => W({ id: t.id, name: t.name }),
                        children: l("collab.agent.share")
                      }
                    ) : null,
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      Pr,
                      {
                        disabled: R,
                        onSelect: () => x(t.id, !t.enabled),
                        children: t.enabled ? l("collab.agent.pause") : l("collab.agent.resume")
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(au, {}),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      Pr,
                      {
                        variant: "destructive",
                        disabled: t.status === "working" || t.waiting > 0,
                        onSelect: () => {
                          window.confirm(
                            l("collab.agent.retireConfirm", {
                              name: t.name
                            })
                          ) && f(t.id);
                        },
                        children: l("collab.agent.retire")
                      }
                    )
                  ] })
                ] })
              ] })
            ] }),
            I?.id === t.id && v ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "form",
              {
                className: o.agentConfig,
                onSubmit: Y(t.id),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: o.configLabel, children: [
                    l("collab.config.description"),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "input",
                      {
                        className: o.field,
                        name: "description",
                        defaultValue: t.description ?? "",
                        placeholder: l("collab.config.descriptionHint")
                      }
                    )
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: o.configLabel, children: [
                    l("collab.config.instructions"),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "textarea",
                      {
                        className: o.field,
                        name: "instructions",
                        rows: 4,
                        defaultValue: t.instructions ?? "",
                        placeholder: l("collab.config.instructionsHint")
                      }
                    )
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: o.configLabel, children: [
                    l("collab.config.agentType"),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "input",
                      {
                        className: o.field,
                        name: "agentType",
                        disabled: I.hostIds.length > 0,
                        defaultValue: t.agentType ?? "",
                        placeholder: l("collab.config.workspaceDefault")
                      }
                    )
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: o.configLabel, children: [
                    l("collab.config.model"),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "input",
                      {
                        className: o.field,
                        name: "model",
                        disabled: I.hostIds.length > 0,
                        defaultValue: t.model ?? "",
                        placeholder: l("collab.config.workspaceDefault")
                      }
                    )
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: o.configLabel, children: [
                    l("collab.config.maxRuns"),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "input",
                      {
                        className: o.field,
                        name: "maxConcurrentRuns",
                        type: "number",
                        min: 1,
                        max: 8,
                        defaultValue: t.maxConcurrentRuns ?? 1
                      }
                    )
                  ] }),
                  c.some(
                    (q) => q.kind === "external"
                  ) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { className: o.configLabel, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", { children: l("collab.config.runtimes") }),
                    c.filter((q) => q.kind === "external").map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "input",
                        {
                          name: "executionHostId",
                          type: "checkbox",
                          value: q.id,
                          checked: I.hostIds.includes(q.id),
                          disabled: !I.hostIds.includes(q.id) && !c2(q).includes(
                            t.execution?.provider ?? "qwen"
                          ),
                          onChange: (E) => {
                            const P = E.target.checked ? [...I.hostIds, q.id] : I.hostIds.filter(
                              (B) => B !== q.id
                            );
                            C({ id: t.id, hostIds: P });
                          }
                        }
                      ),
                      " ",
                      H(q),
                      " \xB7",
                      " ",
                      c2(q).map(dX).join(", "),
                      " ",
                      "\xB7 ",
                      U(q.status)
                    ] }, q.id)),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: o.configNote, children: l(
                      I.hostIds.length > 0 ? "collab.agent.hostPersona" : "collab.config.runtimesHint"
                    ) })
                  ] }) : null,
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: o.configNote, children: l("collab.config.note") }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: o.formActions, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      Pe,
                      {
                        type: "button",
                        variant: "ghost",
                        size: "sm",
                        onClick: () => C(void 0),
                        children: l("collab.form.cancel")
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pe, { type: "submit", size: "sm", disabled: R, children: l("collab.config.save") })
                  ] })
                ]
              }
            ) : null
          ]
        },
        t.id
      )) }),
      m === "squads" ? D ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        Bt,
        {
          ...D,
          agents: r,
          pending: R,
          creating: Q,
          onCreatingChange: z,
          ...u ? { onMention: u } : {}
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Je, {}) : null,
      m === "runtime" && c.length > 0 ? c.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: o.runtimeCard, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: o.runtimeHeader, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: o.runtimeTitle, children: H(t) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: o.configNote, children: t.kind === "local" ? l("collab.runtime.localNote") : l("collab.runtime.remoteNote") })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "strong",
            {
              className: o.runtimeStatus,
              "data-runtime-status": t.status,
              children: U(t.status)
            }
          ),
          t.kind === "external" && ($ || N) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            N ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              Pe,
              {
                size: "sm",
                variant: "outline",
                disabled: R,
                onClick: () => {
                  V(t), K(true);
                },
                children: l("collab.runtime.replace")
              }
            ) : null,
            $ ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              Pe,
              {
                size: "sm",
                variant: "ghost",
                disabled: R,
                onClick: () => {
                  window.confirm(
                    l("collab.runtime.removeConfirm", {
                      name: t.label
                    })
                  ) && $(t.id);
                },
                children: l("collab.runtime.remove")
              }
            ) : null
          ] }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { className: o.runtimeFacts, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: l("collab.runtime.programs") }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: c2(t).map(dX).join(", ") })
          ] }),
          t.workspaceCwd ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: l("collab.runtime.folder") }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: t.workspaceCwd }) })
          ] }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: l("collab.runtime.agents") }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: t.agentCount ?? 0 })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: l("collab.runtime.running") }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: t.runningTaskCount ?? 0 })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: l("collab.runtime.queued") }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: t.queuedTaskCount ?? 0 })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", { className: "mt-4 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { className: "cursor-pointer", children: l("collab.runtime.technical") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: l("collab.runtime.id", { id: t.id }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: l("collab.runtime.sessions", {
            count: t.sessionCount ?? 0
          }) }),
          t.lastSeenAt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: l("collab.runtime.lastSeen", {
            time: new Date(
              t.lastSeenAt
            ).toLocaleTimeString()
          }) })
        ] })
      ] }, t.id)) : m === "runtime" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fh, { className: "border", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(xf, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(zh, { variant: "icon", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(If, { children: l("collab.runtime.empty") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kb, { children: l("collab.runtime.emptyHint") })
      ] }) }) : null
    ] }),
    N && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ct,
      {
        open: L,
        onOpenChange: (t) => {
          K(t), t || V(void 0);
        },
        serverUrl: h ?? "",
        runtimes: c,
        onCreateJoinToken: N,
        replacementTarget: y,
        ...S ? { onConnectExisting: S } : {},
        ...A ? { onJoinCoordinator: A } : {},
        ...b ? {
          onCreateAgentOn: (t) => {
            K(false), b(t);
          }
        } : {}
      },
      y?.id ?? "add-host"
    ),
    k && T && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ht,
      {
        agentName: T.name,
        open: true,
        onOpenChange: (t) => {
          t || W(void 0);
        },
        onCreate: () => k.create(T.id),
        onList: () => k.list(T.id),
        onRevoke: (t) => k.revoke(T.id, t)
      }
    )
  ] });
}
var Gt = 2e3;
function en({
  initialView: r,
  workspaceCwd: s,
  onOpenDefinitions: m,
  onMentionAgent: g
}) {
  const u = cs(), f = rc(), x = (0, import_react.useMemo)(
    () => (u.capabilities?.workspaces ?? []).filter(
      (i) => RZ(
        u.capabilities,
        i.cwd
      )
    ),
    [u.capabilities]
  ), v = s ?? f.workspaceCwd ?? x.find((i) => i.primary)?.cwd ?? x[0]?.cwd, b = RZ(
    u.capabilities,
    v
  ) ? v : s ? void 0 : x.find((i) => i.primary)?.cwd ?? x[0]?.cwd, a = (0, import_react.useMemo)(
    () => b ? rYe(u.baseUrl, u.token, b) : void 0,
    [u.baseUrl, u.token, b]
  ), { t: N } = dg(), [$, S] = (0, import_react.useState)([]), [A, h] = (0, import_react.useState)([]), [k, D] = (0, import_react.useState)(), [R, c] = (0, import_react.useState)(
    r === void 0 || r === "new-agent" ? "agents" : r
  ), [I, C] = (0, import_react.useState)(false), [l, L] = (0, import_react.useState)(r === "new-agent" ? {} : void 0), [K, y] = (0, import_react.useState)(), [V, T] = (0, import_react.useState)(), W = V ?? K, Q = (0, import_react.useRef)(a);
  Q.current = a;
  const z = (0, import_react.useRef)(0), U = (0, import_react.useRef)(0);
  (0, import_react.useEffect)(() => {
    r && r !== "new-agent" && c(r);
  }, [r]);
  const H = (0, import_react.useCallback)(async () => {
    if (!a) return;
    const i = ++z.current;
    try {
      const [w, de] = await Promise.all([
        a.listAgents(),
        // An older daemon has no squad routes: the Squads view shows empty.
        // A failed poll is not "no squads": keep the list (and an open form)
        // already on screen until a poll succeeds.
        a.listSquads ? a.listSquads().then(
          (Ge) => ({ list: Ge }),
          () => ({ failed: true })
        ) : Promise.resolve(void 0)
      ]);
      if (Q.current !== a || i < U.current)
        return;
      U.current = i, S(w.agents), h(w.runtimes ?? (w.runtime ? [w.runtime] : [])), de ? "list" in de && D(de.list?.squads) : D(void 0), y(void 0);
    } catch (w) {
      if (Q.current !== a || i < U.current)
        return;
      U.current = i, y(w instanceof Error ? w.message : String(w));
    }
  }, [a]), Z = (0, import_react.useRef)(H);
  Z.current = H, (0, import_react.useEffect)(() => {
    H();
  }, [H]), (0, import_react.useEffect)(() => {
    if (!a) return;
    const i = setInterval(() => void Z.current(), Gt);
    return () => clearInterval(i);
  }, [a]);
  const Y = (0, import_react.useCallback)(
    (i) => {
      const w = i !== null && typeof i == "object" ? i.dispatchError : void 0;
      typeof w == "string" && T(
        N("collab.error.dispatchAfterSave", { error: w })
      );
    },
    [N]
  ), M = (0, import_react.useCallback)(
    async (i) => {
      C(true), T(void 0);
      try {
        const w = await i();
        await H(), Y(w);
      } catch (w) {
        return T(w instanceof Error ? w.message : String(w)), false;
      } finally {
        C(false);
      }
      return true;
    },
    [H, Y]
  );
  if (!a)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { role: "alert", children: N("collab.noWorkspace") });
  const t = A.find(
    (i) => i.kind === "local"
  )?.programs;
  if (l)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Bz,
      {
        initialScope: "workspace",
        workspaceCwd: b,
        executionHosts: A.filter((i) => i.kind === "external"),
        ...t ? { localPrograms: t } : {},
        ...l.hostId ? { initialHostId: l.hostId } : {},
        onCancel: () => L(void 0),
        onCreated: () => L(void 0),
        onSaveWorkspaceAgent: async (i) => {
          const w = await a.createAgent(i);
          await H(), Y(w);
        }
      }
    );
  const {
    createShare: q,
    listShares: E,
    revokeShare: P,
    removeHost: B,
    connectRemoteHost: O,
    joinCoordinator: J,
    createSquad: X,
    updateSquad: G,
    retireSquad: d
  } = a, j = q && E && P ? {
    create: q,
    list: async (i) => (await E(i)).shares,
    revoke: P
  } : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    W ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { role: "alert", className: "mb-3 text-sm text-destructive", children: W }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Jt,
      {
        agents: $,
        view: R,
        onViewChange: c,
        runtimes: A,
        onConnectRemoteHost: O ? (i) => M(() => O(i)) : void 0,
        onJoinCoordinator: J ? async (i) => (await J(i), true) : void 0,
        onMentionAgent: g,
        pending: I,
        onDeleteAgent: (i) => void M(() => a.deleteAgent(i)),
        onSetAgentEnabled: (i, w) => void M(() => a.setAgentEnabled(i, w)),
        onUpdateAgent: (i, w) => void M(() => a.updateAgent(i, w)),
        onOpenAgentBuilder: (i) => L({ hostId: i }),
        ...a.createJoinToken ? { onCreateJoinToken: a.createJoinToken } : {},
        ...B ? {
          onRemoveRuntime: (i) => void M(() => B(i))
        } : {},
        ...j ? { shares: j } : {},
        ...k && X && G && d ? {
          squads: {
            squads: k,
            onCreate: (i) => M(() => X(i)),
            onUpdate: (i, w) => M(() => G(i, w)),
            onRetire: (i) => void M(() => d(i))
          }
        } : {},
        ...m ? { onOpenDefinitions: m } : {},
        hostServerUrl: u.baseUrl
      }
    )
  ] });
}
export {
  en as AgentsRoute
};
//# sourceMappingURL=agents-route-Pu5E-8GT-JCCUCGE2.js.map
