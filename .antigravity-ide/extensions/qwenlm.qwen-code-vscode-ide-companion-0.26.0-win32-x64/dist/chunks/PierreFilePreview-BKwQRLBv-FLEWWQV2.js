import {
  Dm,
  require_jsx_runtime,
  require_react
} from "./chunk-3SWQGGFU.js";
import "./chunk-QF5O5TBP.js";
import "./chunk-3KLZL5V6.js";
import {
  __toESM
} from "./chunk-QFQZKJEX.js";

// ../web-shell/dist/PierreFilePreview-BKwQRLBv.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var Uo = Object.defineProperty;
var zo = Object.getPrototypeOf;
var Bo = Reflect.get;
var Di = (e) => {
  throw TypeError(e);
};
var Go = (e, t, n) => t in e ? Uo(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n;
var p = (e, t, n) => Go(e, typeof t != "symbol" ? t + "" : t, n);
var wn = (e, t, n) => t.has(e) || Di("Cannot " + n);
var j = (e, t, n) => (wn(e, t, "read from private field"), n ? n.call(e) : t.get(e));
var Me = (e, t, n) => t.has(e) ? Di("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
var ne = (e, t, n, i) => (wn(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n);
var Sn = (e, t, n) => (wn(e, t, "access private method"), n);
var Ui = (e, t, n) => Bo(zo(e), n, t);
var Xt = {
  c: () => import("./c-eeMepfLm-OCC7BYTM.js"),
  cpp: () => import("./cpp-C0xArK63-7JAJZMW3.js"),
  csharp: () => import("./csharp-B2h9rwLg-JP7UYRHD.js"),
  css: () => import("./css-D8kMf1Az-AX2L3SYK.js"),
  diff: () => import("./diff-BxzP2J8R-BTHVHMZQ.js"),
  dockerfile: () => import("./dockerfile-CsHqm9tx-VTL76XPY.js"),
  go: () => import("./go-EbF93JXO-GDCMLEEX.js"),
  html: () => import("./html-Wr5yTrgx-JZVYQHX7.js"),
  ini: () => import("./ini-BZIuRIvJ-GW2OKGMV.js"),
  java: () => import("./java-DY6VlHhP-ISCS7AWV.js"),
  javascript: () => import("./javascript-C25yR2R2-JRKMJN5X.js"),
  json: () => import("./json-DxJze_jm-D2UJGG2I.js"),
  jsonc: () => import("./jsonc-CHjZD8gR-ILHUJ6SO.js"),
  jsx: () => import("./jsx-BtKADgXT-5WTQN33F.js"),
  kotlin: () => import("./kotlin-ByBMgTeR-2TGRSKW5.js"),
  lua: () => import("./lua-Bp3IRv7I-HC6MJSE2.js"),
  makefile: () => import("./makefile-CsMclxtr-VJS43Q5B.js"),
  markdown: () => import("./markdown-CrScaQ96-PEAMPQ3Z.js"),
  "objective-cpp": () => import("./objective-cpp-DGt5UKRO-44V7UJP5.js"),
  php: () => import("./php-DBsTw_pP-RQICQIH3.js"),
  python: () => import("./python-BFNSHbwJ-GUZD4AHD.js"),
  ruby: () => import("./ruby-vDzP41xB-4FXOAVWX.js"),
  rust: () => import("./rust-BMMJSOUe-6TIBIXG6.js"),
  shellscript: () => import("./shellscript-InADTalH-52ZBJ6TT.js"),
  sql: () => import("./sql-CZBvVSLl-6W6T4OAA.js"),
  swift: () => import("./swift-DOmCYlRt-INRS4HEV.js"),
  toml: () => import("./toml-DY62mUL_-JAIQATR5.js"),
  tsx: () => import("./tsx-B8rCNbgL-MO6XJUR7.js"),
  typescript: () => import("./typescript-RycA9KXf-PVI3PCKX.js"),
  vue: () => import("./vue-IHw0KG71-5O7LWTSE.js"),
  xml: () => import("./xml-C2J0sS9M-SVNE4P55.js"),
  yaml: () => import("./yaml-DaO7k5B1-3Z6QNKC6.js"),
  zsh: () => import("./shellscript-InADTalH-52ZBJ6TT.js")
};
var jn = {
  "github-light": () => import("./github-light-JYsPkUQd-E7IOHXQP.js"),
  "github-dark": () => import("./github-dark-DenFmJkN-CKZ272CU.js")
};
var is = "diffs-container";
(() => {
  try {
    return true;
  } catch {
    return false;
  }
})();
var rs = "header-prefix";
var ss = "header-filename-suffix";
var os = "header-metadata";
var as = "header-custom";
var me = {
  dark: "pierre-dark",
  light: "pierre-light"
};
var Vo = "data-theme-css";
var qo = "data-unsafe-css";
var Ko = "data-diffs-scrollbar-measure";
var ls = "--diffs-scrollbar-gutter-measured";
var wi = {
  hunkLineCount: 50,
  lineHeight: 20,
  diffHeaderHeight: 44,
  spacing: 8
};
({
  ...wi
});
var Bi = {
  startingLine: 0,
  totalLines: 1 / 0,
  bufferBefore: 0,
  bufferAfter: 0
};
var Xo = {
  startingLine: 0,
  totalLines: 0,
  bufferBefore: 0,
  bufferAfter: 0
};
var gt = /* @__PURE__ */ new Map();
var Cn = /* @__PURE__ */ new Map();
var Yo = /* @__PURE__ */ new Map();
var Vn = /* @__PURE__ */ new Set();
function qn(e) {
  for (const t of Array.isArray(e) ? e : [e])
    if (!(t === "text" || t === "ansi") && !Vn.has(t))
      return false;
  return true;
}
function Gi(e, t) {
  e = Array.isArray(e) ? e : [e];
  for (const n of e) {
    if (Vn.has(n.name)) continue;
    let i = gt.get(n.name);
    i == null && (i = n, gt.set(n.name, i));
    const r = i.data.find((s) => s.name === i.name || s.aliases?.includes(i.name) === true);
    if (r == null) throw new Error(`attachResolvedLanguages: No returned grammar declares "${i.name}" as its name or an alias.`);
    t.loadLanguageSync(i.data);
    try {
      t.getLanguage(i.name);
    } catch {
      throw new Error(`attachResolvedLanguages: "${r.name}" is already loaded without alias "${i.name}". Load the alias first or give the grammar a unique name.`);
    }
    Vn.add(i.name);
  }
}
function cs() {
  return typeof WorkerGlobalScope < "u" && typeof self < "u" && self instanceof WorkerGlobalScope;
}
var T = class extends Error {
  constructor(t) {
    super(t), this.name = "ShikiError";
  }
};
function Qo(e) {
  return Si(e);
}
function Si(e) {
  return Array.isArray(e) ? Zo(e) : e instanceof RegExp ? e : typeof e == "object" ? Jo(e) : e;
}
function Zo(e) {
  let t = [];
  for (let n = 0, i = e.length; n < i; n++)
    t[n] = Si(e[n]);
  return t;
}
function Jo(e) {
  let t = {};
  for (let n in e)
    t[n] = Si(e[n]);
  return t;
}
function us(e, ...t) {
  return t.forEach((n) => {
    for (let i in n)
      e[i] = n[i];
  }), e;
}
function ds(e) {
  const t = ~e.lastIndexOf("/") || ~e.lastIndexOf("\\");
  return t === 0 ? e : ~t === e.length - 1 ? ds(e.substring(0, e.length - 1)) : e.substr(~t + 1);
}
var xn = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g;
var _t = class {
  static hasCaptures(e) {
    return e === null ? false : (xn.lastIndex = 0, xn.test(e));
  }
  static replaceCaptures(e, t, n) {
    return e.replace(xn, (i, r, s, o) => {
      let a = n[parseInt(r || s, 10)];
      if (a) {
        let l = t.substring(a.start, a.end);
        for (; l[0] === "."; )
          l = l.substring(1);
        switch (o) {
          case "downcase":
            return l.toLowerCase();
          case "upcase":
            return l.toUpperCase();
          default:
            return l;
        }
      } else
        return i;
    });
  }
};
function hs(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function fs(e, t) {
  if (e === null && t === null)
    return 0;
  if (!e)
    return -1;
  if (!t)
    return 1;
  let n = e.length, i = t.length;
  if (n === i) {
    for (let r = 0; r < n; r++) {
      let s = hs(e[r], t[r]);
      if (s !== 0)
        return s;
    }
    return 0;
  }
  return n - i;
}
function Wi(e) {
  return !!(/^#[0-9a-f]{6}$/i.test(e) || /^#[0-9a-f]{8}$/i.test(e) || /^#[0-9a-f]{3}$/i.test(e) || /^#[0-9a-f]{4}$/i.test(e));
}
function ps(e) {
  return e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
}
var gs = class {
  constructor(e) {
    p(this, "cache", /* @__PURE__ */ new Map());
    this.fn = e;
  }
  get(e) {
    if (this.cache.has(e))
      return this.cache.get(e);
    const t = this.fn(e);
    return this.cache.set(e, t), t;
  }
};
var Yt = class {
  constructor(e, t, n) {
    p(this, "_cachedMatchRoot", new gs(
      (e2) => this._root.match(e2)
    ));
    this._colorMap = e, this._defaults = t, this._root = n;
  }
  static createFromRawTheme(e, t) {
    return this.createFromParsedTheme(na(e), t);
  }
  static createFromParsedTheme(e, t) {
    return ra(e, t);
  }
  getColorMap() {
    return this._colorMap.getColorMap();
  }
  getDefaults() {
    return this._defaults;
  }
  match(e) {
    if (e === null)
      return this._defaults;
    const t = e.scopeName, i = this._cachedMatchRoot.get(t).find(
      (r) => ea(e.parent, r.parentScopes)
    );
    return i ? new ms(
      i.fontStyle,
      i.foreground,
      i.background
    ) : null;
  }
};
var kn = class Gt {
  constructor(t, n) {
    this.parent = t, this.scopeName = n;
  }
  static push(t, n) {
    for (const i of n)
      t = new Gt(t, i);
    return t;
  }
  static from(...t) {
    let n = null;
    for (let i = 0; i < t.length; i++)
      n = new Gt(n, t[i]);
    return n;
  }
  push(t) {
    return new Gt(this, t);
  }
  getSegments() {
    let t = this;
    const n = [];
    for (; t; )
      n.push(t.scopeName), t = t.parent;
    return n.reverse(), n;
  }
  toString() {
    return this.getSegments().join(" ");
  }
  extends(t) {
    return this === t ? true : this.parent === null ? false : this.parent.extends(t);
  }
  getExtensionIfDefined(t) {
    const n = [];
    let i = this;
    for (; i && i !== t; )
      n.push(i.scopeName), i = i.parent;
    return i === t ? n.reverse() : void 0;
  }
};
function ea(e, t) {
  if (t.length === 0)
    return true;
  for (let n = 0; n < t.length; n++) {
    let i = t[n], r = false;
    if (i === ">") {
      if (n === t.length - 1)
        return false;
      i = t[++n], r = true;
    }
    for (; e && !ta(e.scopeName, i); ) {
      if (r)
        return false;
      e = e.parent;
    }
    if (!e)
      return false;
    e = e.parent;
  }
  return true;
}
function ta(e, t) {
  return t === e || e.startsWith(t) && e[t.length] === ".";
}
var ms = class {
  constructor(e, t, n) {
    this.fontStyle = e, this.foregroundId = t, this.backgroundId = n;
  }
};
function na(e) {
  if (!e)
    return [];
  if (!e.settings || !Array.isArray(e.settings))
    return [];
  let t = e.settings, n = [], i = 0;
  for (let r = 0, s = t.length; r < s; r++) {
    let o = t[r];
    if (!o.settings)
      continue;
    let a;
    if (typeof o.scope == "string") {
      let d = o.scope;
      d = d.replace(/^[,]+/, ""), d = d.replace(/[,]+$/, ""), a = d.split(",");
    } else Array.isArray(o.scope) ? a = o.scope : a = [""];
    let l = -1;
    if (typeof o.settings.fontStyle == "string") {
      l = 0;
      let d = o.settings.fontStyle.split(" ");
      for (let h = 0, f = d.length; h < f; h++)
        switch (d[h]) {
          case "italic":
            l = l | 1;
            break;
          case "bold":
            l = l | 2;
            break;
          case "underline":
            l = l | 4;
            break;
          case "strikethrough":
            l = l | 8;
            break;
        }
    }
    let c = null;
    typeof o.settings.foreground == "string" && Wi(o.settings.foreground) && (c = o.settings.foreground);
    let u = null;
    typeof o.settings.background == "string" && Wi(o.settings.background) && (u = o.settings.background);
    for (let d = 0, h = a.length; d < h; d++) {
      let g = a[d].trim().split(" "), y = g[g.length - 1], v = null;
      g.length > 1 && (v = g.slice(0, g.length - 1), v.reverse()), n[i++] = new ia(
        y,
        v,
        r,
        l,
        c,
        u
      );
    }
  }
  return n;
}
var ia = class {
  constructor(e, t, n, i, r, s) {
    this.scope = e, this.parentScopes = t, this.index = n, this.fontStyle = i, this.foreground = r, this.background = s;
  }
};
var G = /* @__PURE__ */ ((e) => (e[e.NotSet = -1] = "NotSet", e[e.None = 0] = "None", e[e.Italic = 1] = "Italic", e[e.Bold = 2] = "Bold", e[e.Underline = 4] = "Underline", e[e.Strikethrough = 8] = "Strikethrough", e))(G || {});
function ra(e, t) {
  e.sort((l, c) => {
    let u = hs(l.scope, c.scope);
    return u !== 0 || (u = fs(l.parentScopes, c.parentScopes), u !== 0) ? u : l.index - c.index;
  });
  let n = 0, i = "#000000", r = "#ffffff";
  for (; e.length >= 1 && e[0].scope === ""; ) {
    let l = e.shift();
    l.fontStyle !== -1 && (n = l.fontStyle), l.foreground !== null && (i = l.foreground), l.background !== null && (r = l.background);
  }
  let s = new sa(t), o = new ms(n, s.getId(i), s.getId(r)), a = new aa(new Kn(0, null, -1, 0, 0), []);
  for (let l = 0, c = e.length; l < c; l++) {
    let u = e[l];
    a.insert(0, u.scope, u.parentScopes, u.fontStyle, s.getId(u.foreground), s.getId(u.background));
  }
  return new Yt(s, o, a);
}
var sa = class {
  constructor(e) {
    p(this, "_isFrozen");
    p(this, "_lastColorId");
    p(this, "_id2color");
    p(this, "_color2id");
    if (this._lastColorId = 0, this._id2color = [], this._color2id = /* @__PURE__ */ Object.create(null), Array.isArray(e)) {
      this._isFrozen = true;
      for (let t = 0, n = e.length; t < n; t++)
        this._color2id[e[t]] = t, this._id2color[t] = e[t];
    } else
      this._isFrozen = false;
  }
  getId(e) {
    if (e === null)
      return 0;
    e = e.toUpperCase();
    let t = this._color2id[e];
    if (t)
      return t;
    if (this._isFrozen)
      throw new Error(`Missing color in color map - ${e}`);
    return t = ++this._lastColorId, this._color2id[e] = t, this._id2color[t] = e, t;
  }
  getColorMap() {
    return this._id2color.slice(0);
  }
};
var oa = Object.freeze([]);
var Kn = class bs {
  constructor(t, n, i, r, s) {
    p(this, "scopeDepth");
    p(this, "parentScopes");
    p(this, "fontStyle");
    p(this, "foreground");
    p(this, "background");
    this.scopeDepth = t, this.parentScopes = n || oa, this.fontStyle = i, this.foreground = r, this.background = s;
  }
  clone() {
    return new bs(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
  }
  static cloneArr(t) {
    let n = [];
    for (let i = 0, r = t.length; i < r; i++)
      n[i] = t[i].clone();
    return n;
  }
  acceptOverwrite(t, n, i, r) {
    this.scopeDepth > t ? console.log("how did this happen?") : this.scopeDepth = t, n !== -1 && (this.fontStyle = n), i !== 0 && (this.foreground = i), r !== 0 && (this.background = r);
  }
};
var aa = class Xn {
  constructor(t, n = [], i = {}) {
    p(this, "_rulesWithParentScopes");
    this._mainRule = t, this._children = i, this._rulesWithParentScopes = n;
  }
  static _cmpBySpecificity(t, n) {
    if (t.scopeDepth !== n.scopeDepth)
      return n.scopeDepth - t.scopeDepth;
    let i = 0, r = 0;
    for (; t.parentScopes[i] === ">" && i++, n.parentScopes[r] === ">" && r++, !(i >= t.parentScopes.length || r >= n.parentScopes.length); ) {
      const s = n.parentScopes[r].length - t.parentScopes[i].length;
      if (s !== 0)
        return s;
      i++, r++;
    }
    return n.parentScopes.length - t.parentScopes.length;
  }
  match(t) {
    if (t !== "") {
      let i = t.indexOf("."), r, s;
      if (i === -1 ? (r = t, s = "") : (r = t.substring(0, i), s = t.substring(i + 1)), this._children.hasOwnProperty(r))
        return this._children[r].match(s);
    }
    const n = this._rulesWithParentScopes.concat(this._mainRule);
    return n.sort(Xn._cmpBySpecificity), n;
  }
  insert(t, n, i, r, s, o) {
    if (n === "") {
      this._doInsertHere(t, i, r, s, o);
      return;
    }
    let a = n.indexOf("."), l, c;
    a === -1 ? (l = n, c = "") : (l = n.substring(0, a), c = n.substring(a + 1));
    let u;
    this._children.hasOwnProperty(l) ? u = this._children[l] : (u = new Xn(this._mainRule.clone(), Kn.cloneArr(this._rulesWithParentScopes)), this._children[l] = u), u.insert(t + 1, c, i, r, s, o);
  }
  _doInsertHere(t, n, i, r, s) {
    if (n === null) {
      this._mainRule.acceptOverwrite(t, i, r, s);
      return;
    }
    for (let o = 0, a = this._rulesWithParentScopes.length; o < a; o++) {
      let l = this._rulesWithParentScopes[o];
      if (fs(l.parentScopes, n) === 0) {
        l.acceptOverwrite(t, i, r, s);
        return;
      }
    }
    i === -1 && (i = this._mainRule.fontStyle), r === 0 && (r = this._mainRule.foreground), s === 0 && (s = this._mainRule.background), this._rulesWithParentScopes.push(new Kn(t, n, i, r, s));
  }
};
var $e = class Z {
  static toBinaryStr(t) {
    return t.toString(2).padStart(32, "0");
  }
  static print(t) {
    const n = Z.getLanguageId(t), i = Z.getTokenType(t), r = Z.getFontStyle(t), s = Z.getForeground(t), o = Z.getBackground(t);
    console.log({
      languageId: n,
      tokenType: i,
      fontStyle: r,
      foreground: s,
      background: o
    });
  }
  static getLanguageId(t) {
    return (t & 255) >>> 0;
  }
  static getTokenType(t) {
    return (t & 768) >>> 8;
  }
  static containsBalancedBrackets(t) {
    return (t & 1024) !== 0;
  }
  static getFontStyle(t) {
    return (t & 30720) >>> 11;
  }
  static getForeground(t) {
    return (t & 16744448) >>> 15;
  }
  static getBackground(t) {
    return (t & 4278190080) >>> 24;
  }
  /**
   * Updates the fields in `metadata`.
   * A value of `0`, `NotSet` or `null` indicates that the corresponding field should be left as is.
   */
  static set(t, n, i, r, s, o, a) {
    let l = Z.getLanguageId(t), c = Z.getTokenType(t), u = Z.containsBalancedBrackets(t) ? 1 : 0, d = Z.getFontStyle(t), h = Z.getForeground(t), f = Z.getBackground(t);
    return n !== 0 && (l = n), i !== 8 && (c = i), r !== null && (u = r ? 1 : 0), s !== -1 && (d = s), o !== 0 && (h = o), a !== 0 && (f = a), (l << 0 | c << 8 | u << 10 | d << 11 | h << 15 | f << 24) >>> 0;
  }
};
function Qt(e, t) {
  const n = [], i = la(e);
  let r = i.next();
  for (; r !== null; ) {
    let l = 0;
    if (r.length === 2 && r.charAt(1) === ":") {
      switch (r.charAt(0)) {
        case "R":
          l = 1;
          break;
        case "L":
          l = -1;
          break;
        default:
          console.log(`Unknown priority ${r} in scope selector`);
      }
      r = i.next();
    }
    let c = o();
    if (n.push({ matcher: c, priority: l }), r !== ",")
      break;
    r = i.next();
  }
  return n;
  function s() {
    if (r === "-") {
      r = i.next();
      const l = s();
      return (c) => !!l && !l(c);
    }
    if (r === "(") {
      r = i.next();
      const l = a();
      return r === ")" && (r = i.next()), l;
    }
    if (ji(r)) {
      const l = [];
      do
        l.push(r), r = i.next();
      while (ji(r));
      return (c) => t(l, c);
    }
    return null;
  }
  function o() {
    const l = [];
    let c = s();
    for (; c; )
      l.push(c), c = s();
    return (u) => l.every((d) => d(u));
  }
  function a() {
    const l = [];
    let c = o();
    for (; c && (l.push(c), r === "|" || r === ","); ) {
      do
        r = i.next();
      while (r === "|" || r === ",");
      c = o();
    }
    return (u) => l.some((d) => d(u));
  }
}
function ji(e) {
  return !!e && !!e.match(/[\w\.:]+/);
}
function la(e) {
  let t = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g, n = t.exec(e);
  return {
    next: () => {
      if (!n)
        return null;
      const i = n[0];
      return n = t.exec(e), i;
    }
  };
}
function ys(e) {
  typeof e.dispose == "function" && e.dispose();
}
var mt = class {
  constructor(e) {
    this.scopeName = e;
  }
  toKey() {
    return this.scopeName;
  }
};
var ca = class {
  constructor(e, t) {
    this.scopeName = e, this.ruleName = t;
  }
  toKey() {
    return `${this.scopeName}#${this.ruleName}`;
  }
};
var ua = class {
  constructor() {
    p(this, "_references", []);
    p(this, "_seenReferenceKeys", /* @__PURE__ */ new Set());
    p(this, "visitedRule", /* @__PURE__ */ new Set());
  }
  get references() {
    return this._references;
  }
  add(e) {
    const t = e.toKey();
    this._seenReferenceKeys.has(t) || (this._seenReferenceKeys.add(t), this._references.push(e));
  }
};
var da = class {
  constructor(e, t) {
    p(this, "seenFullScopeRequests", /* @__PURE__ */ new Set());
    p(this, "seenPartialScopeRequests", /* @__PURE__ */ new Set());
    p(this, "Q");
    this.repo = e, this.initialScopeName = t, this.seenFullScopeRequests.add(this.initialScopeName), this.Q = [new mt(this.initialScopeName)];
  }
  processQueue() {
    const e = this.Q;
    this.Q = [];
    const t = new ua();
    for (const n of e)
      ha(n, this.initialScopeName, this.repo, t);
    for (const n of t.references)
      if (n instanceof mt) {
        if (this.seenFullScopeRequests.has(n.scopeName))
          continue;
        this.seenFullScopeRequests.add(n.scopeName), this.Q.push(n);
      } else {
        if (this.seenFullScopeRequests.has(n.scopeName) || this.seenPartialScopeRequests.has(n.toKey()))
          continue;
        this.seenPartialScopeRequests.add(n.toKey()), this.Q.push(n);
      }
  }
};
function ha(e, t, n, i) {
  const r = n.lookup(e.scopeName);
  if (!r) {
    if (e.scopeName === t)
      throw new Error(`No grammar provided for <${t}>`);
    return;
  }
  const s = n.lookup(t);
  e instanceof mt ? Wt({ baseGrammar: s, selfGrammar: r }, i) : Yn(
    e.ruleName,
    { baseGrammar: s, selfGrammar: r, repository: r.repository },
    i
  );
  const o = n.injections(e.scopeName);
  if (o)
    for (const a of o)
      i.add(new mt(a));
}
function Yn(e, t, n) {
  if (t.repository && t.repository[e]) {
    const i = t.repository[e];
    Zt([i], t, n);
  }
}
function Wt(e, t) {
  e.selfGrammar.patterns && Array.isArray(e.selfGrammar.patterns) && Zt(
    e.selfGrammar.patterns,
    { ...e, repository: e.selfGrammar.repository },
    t
  ), e.selfGrammar.injections && Zt(
    Object.values(e.selfGrammar.injections),
    { ...e, repository: e.selfGrammar.repository },
    t
  );
}
function Zt(e, t, n) {
  for (const i of e) {
    if (n.visitedRule.has(i))
      continue;
    n.visitedRule.add(i);
    const r = i.repository ? us({}, t.repository, i.repository) : t.repository;
    Array.isArray(i.patterns) && Zt(i.patterns, { ...t, repository: r }, n);
    const s = i.include;
    if (!s)
      continue;
    const o = vs(s);
    switch (o.kind) {
      case 0:
        Wt({ ...t, selfGrammar: t.baseGrammar }, n);
        break;
      case 1:
        Wt(t, n);
        break;
      case 2:
        Yn(o.ruleName, { ...t, repository: r }, n);
        break;
      case 3:
      case 4:
        const a = o.scopeName === t.selfGrammar.scopeName ? t.selfGrammar : o.scopeName === t.baseGrammar.scopeName ? t.baseGrammar : void 0;
        if (a) {
          const l = { baseGrammar: t.baseGrammar, selfGrammar: a, repository: r };
          o.kind === 4 ? Yn(o.ruleName, l, n) : Wt(l, n);
        } else
          o.kind === 4 ? n.add(new ca(o.scopeName, o.ruleName)) : n.add(new mt(o.scopeName));
        break;
    }
  }
}
var fa = class {
  constructor() {
    p(this, "kind", 0);
  }
};
var pa = class {
  constructor() {
    p(this, "kind", 1);
  }
};
var ga = class {
  constructor(e) {
    p(this, "kind", 2);
    this.ruleName = e;
  }
};
var ma = class {
  constructor(e) {
    p(this, "kind", 3);
    this.scopeName = e;
  }
};
var ba = class {
  constructor(e, t) {
    p(this, "kind", 4);
    this.scopeName = e, this.ruleName = t;
  }
};
function vs(e) {
  if (e === "$base")
    return new fa();
  if (e === "$self")
    return new pa();
  const t = e.indexOf("#");
  if (t === -1)
    return new ma(e);
  if (t === 0)
    return new ga(e.substring(1));
  {
    const n = e.substring(0, t), i = e.substring(t + 1);
    return new ba(n, i);
  }
}
var ya = /\\(\d+)/;
var Vi = /\\(\d+)/g;
var va = -1;
var ws = -2;
var Ct = class {
  constructor(e, t, n, i) {
    p(this, "$location");
    p(this, "id");
    p(this, "_nameIsCapturing");
    p(this, "_name");
    p(this, "_contentNameIsCapturing");
    p(this, "_contentName");
    this.$location = e, this.id = t, this._name = n || null, this._nameIsCapturing = _t.hasCaptures(this._name), this._contentName = i || null, this._contentNameIsCapturing = _t.hasCaptures(this._contentName);
  }
  get debugName() {
    const e = this.$location ? `${ds(this.$location.filename)}:${this.$location.line}` : "unknown";
    return `${this.constructor.name}#${this.id} @ ${e}`;
  }
  getName(e, t) {
    return !this._nameIsCapturing || this._name === null || e === null || t === null ? this._name : _t.replaceCaptures(this._name, e, t);
  }
  getContentName(e, t) {
    return !this._contentNameIsCapturing || this._contentName === null ? this._contentName : _t.replaceCaptures(this._contentName, e, t);
  }
};
var wa = class extends Ct {
  constructor(t, n, i, r, s) {
    super(t, n, i, r);
    p(this, "retokenizeCapturedWithRuleId");
    this.retokenizeCapturedWithRuleId = s;
  }
  dispose() {
  }
  collectPatterns(t, n) {
    throw new Error("Not supported!");
  }
  compile(t, n) {
    throw new Error("Not supported!");
  }
  compileAG(t, n, i, r) {
    throw new Error("Not supported!");
  }
};
var Sa = class extends Ct {
  constructor(t, n, i, r, s) {
    super(t, n, i, null);
    p(this, "_match");
    p(this, "captures");
    p(this, "_cachedCompiledPatterns");
    this._match = new bt(r, this.id), this.captures = s, this._cachedCompiledPatterns = null;
  }
  dispose() {
    this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
  }
  get debugMatchRegExp() {
    return `${this._match.source}`;
  }
  collectPatterns(t, n) {
    n.push(this._match);
  }
  compile(t, n) {
    return this._getCachedCompiledPatterns(t).compile(t);
  }
  compileAG(t, n, i, r) {
    return this._getCachedCompiledPatterns(t).compileAG(t, i, r);
  }
  _getCachedCompiledPatterns(t) {
    return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new yt(), this.collectPatterns(t, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
  }
};
var qi = class extends Ct {
  constructor(t, n, i, r, s) {
    super(t, n, i, r);
    p(this, "hasMissingPatterns");
    p(this, "patterns");
    p(this, "_cachedCompiledPatterns");
    this.patterns = s.patterns, this.hasMissingPatterns = s.hasMissingPatterns, this._cachedCompiledPatterns = null;
  }
  dispose() {
    this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
  }
  collectPatterns(t, n) {
    for (const i of this.patterns)
      t.getRule(i).collectPatterns(t, n);
  }
  compile(t, n) {
    return this._getCachedCompiledPatterns(t).compile(t);
  }
  compileAG(t, n, i, r) {
    return this._getCachedCompiledPatterns(t).compileAG(t, i, r);
  }
  _getCachedCompiledPatterns(t) {
    return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new yt(), this.collectPatterns(t, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
  }
};
var Qn = class extends Ct {
  constructor(t, n, i, r, s, o, a, l, c, u) {
    super(t, n, i, r);
    p(this, "_begin");
    p(this, "beginCaptures");
    p(this, "_end");
    p(this, "endHasBackReferences");
    p(this, "endCaptures");
    p(this, "applyEndPatternLast");
    p(this, "hasMissingPatterns");
    p(this, "patterns");
    p(this, "_cachedCompiledPatterns");
    this._begin = new bt(s, this.id), this.beginCaptures = o, this._end = new bt(a || "\uFFFF", -1), this.endHasBackReferences = this._end.hasBackReferences, this.endCaptures = l, this.applyEndPatternLast = c || false, this.patterns = u.patterns, this.hasMissingPatterns = u.hasMissingPatterns, this._cachedCompiledPatterns = null;
  }
  dispose() {
    this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
  }
  get debugBeginRegExp() {
    return `${this._begin.source}`;
  }
  get debugEndRegExp() {
    return `${this._end.source}`;
  }
  getEndWithResolvedBackReferences(t, n) {
    return this._end.resolveBackReferences(t, n);
  }
  collectPatterns(t, n) {
    n.push(this._begin);
  }
  compile(t, n) {
    return this._getCachedCompiledPatterns(t, n).compile(t);
  }
  compileAG(t, n, i, r) {
    return this._getCachedCompiledPatterns(t, n).compileAG(t, i, r);
  }
  _getCachedCompiledPatterns(t, n) {
    if (!this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns = new yt();
      for (const i of this.patterns)
        t.getRule(i).collectPatterns(t, this._cachedCompiledPatterns);
      this.applyEndPatternLast ? this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end) : this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
    }
    return this._end.hasBackReferences && (this.applyEndPatternLast ? this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, n) : this._cachedCompiledPatterns.setSource(0, n)), this._cachedCompiledPatterns;
  }
};
var Jt = class extends Ct {
  constructor(t, n, i, r, s, o, a, l, c) {
    super(t, n, i, r);
    p(this, "_begin");
    p(this, "beginCaptures");
    p(this, "whileCaptures");
    p(this, "_while");
    p(this, "whileHasBackReferences");
    p(this, "hasMissingPatterns");
    p(this, "patterns");
    p(this, "_cachedCompiledPatterns");
    p(this, "_cachedCompiledWhilePatterns");
    this._begin = new bt(s, this.id), this.beginCaptures = o, this.whileCaptures = l, this._while = new bt(a, ws), this.whileHasBackReferences = this._while.hasBackReferences, this.patterns = c.patterns, this.hasMissingPatterns = c.hasMissingPatterns, this._cachedCompiledPatterns = null, this._cachedCompiledWhilePatterns = null;
  }
  dispose() {
    this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null), this._cachedCompiledWhilePatterns && (this._cachedCompiledWhilePatterns.dispose(), this._cachedCompiledWhilePatterns = null);
  }
  get debugBeginRegExp() {
    return `${this._begin.source}`;
  }
  get debugWhileRegExp() {
    return `${this._while.source}`;
  }
  getWhileWithResolvedBackReferences(t, n) {
    return this._while.resolveBackReferences(t, n);
  }
  collectPatterns(t, n) {
    n.push(this._begin);
  }
  compile(t, n) {
    return this._getCachedCompiledPatterns(t).compile(t);
  }
  compileAG(t, n, i, r) {
    return this._getCachedCompiledPatterns(t).compileAG(t, i, r);
  }
  _getCachedCompiledPatterns(t) {
    if (!this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns = new yt();
      for (const n of this.patterns)
        t.getRule(n).collectPatterns(t, this._cachedCompiledPatterns);
    }
    return this._cachedCompiledPatterns;
  }
  compileWhile(t, n) {
    return this._getCachedCompiledWhilePatterns(t, n).compile(t);
  }
  compileWhileAG(t, n, i, r) {
    return this._getCachedCompiledWhilePatterns(t, n).compileAG(t, i, r);
  }
  _getCachedCompiledWhilePatterns(t, n) {
    return this._cachedCompiledWhilePatterns || (this._cachedCompiledWhilePatterns = new yt(), this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while)), this._while.hasBackReferences && this._cachedCompiledWhilePatterns.setSource(0, n || "\uFFFF"), this._cachedCompiledWhilePatterns;
  }
};
var Ss = class z {
  static createCaptureRule(t, n, i, r, s) {
    return t.registerRule((o) => new wa(n, o, i, r, s));
  }
  static getCompiledRuleId(t, n, i) {
    return t.id || n.registerRule((r) => {
      if (t.id = r, t.match)
        return new Sa(
          t.$vscodeTextmateLocation,
          t.id,
          t.name,
          t.match,
          z._compileCaptures(t.captures, n, i)
        );
      if (typeof t.begin > "u") {
        t.repository && (i = us({}, i, t.repository));
        let s = t.patterns;
        return typeof s > "u" && t.include && (s = [{ include: t.include }]), new qi(
          t.$vscodeTextmateLocation,
          t.id,
          t.name,
          t.contentName,
          z._compilePatterns(s, n, i)
        );
      }
      return t.while ? new Jt(
        t.$vscodeTextmateLocation,
        t.id,
        t.name,
        t.contentName,
        t.begin,
        z._compileCaptures(t.beginCaptures || t.captures, n, i),
        t.while,
        z._compileCaptures(t.whileCaptures || t.captures, n, i),
        z._compilePatterns(t.patterns, n, i)
      ) : new Qn(
        t.$vscodeTextmateLocation,
        t.id,
        t.name,
        t.contentName,
        t.begin,
        z._compileCaptures(t.beginCaptures || t.captures, n, i),
        t.end,
        z._compileCaptures(t.endCaptures || t.captures, n, i),
        t.applyEndPatternLast,
        z._compilePatterns(t.patterns, n, i)
      );
    }), t.id;
  }
  static _compileCaptures(t, n, i) {
    let r = [];
    if (t) {
      let s = 0;
      for (const o in t) {
        if (o === "$vscodeTextmateLocation")
          continue;
        const a = parseInt(o, 10);
        a > s && (s = a);
      }
      for (let o = 0; o <= s; o++)
        r[o] = null;
      for (const o in t) {
        if (o === "$vscodeTextmateLocation")
          continue;
        const a = parseInt(o, 10);
        let l = 0;
        t[o].patterns && (l = z.getCompiledRuleId(t[o], n, i)), r[a] = z.createCaptureRule(n, t[o].$vscodeTextmateLocation, t[o].name, t[o].contentName, l);
      }
    }
    return r;
  }
  static _compilePatterns(t, n, i) {
    let r = [];
    if (t)
      for (let s = 0, o = t.length; s < o; s++) {
        const a = t[s];
        let l = -1;
        if (a.include) {
          const c = vs(a.include);
          switch (c.kind) {
            case 0:
            case 1:
              l = z.getCompiledRuleId(i[a.include], n, i);
              break;
            case 2:
              let u = i[c.ruleName];
              u && (l = z.getCompiledRuleId(u, n, i));
              break;
            case 3:
            case 4:
              const d = c.scopeName, h = c.kind === 4 ? c.ruleName : null, f = n.getExternalGrammar(d, i);
              if (f)
                if (h) {
                  let g = f.repository[h];
                  g && (l = z.getCompiledRuleId(g, n, f.repository));
                } else
                  l = z.getCompiledRuleId(f.repository.$self, n, f.repository);
              break;
          }
        } else
          l = z.getCompiledRuleId(a, n, i);
        if (l !== -1) {
          const c = n.getRule(l);
          let u = false;
          if ((c instanceof qi || c instanceof Qn || c instanceof Jt) && c.hasMissingPatterns && c.patterns.length === 0 && (u = true), u)
            continue;
          r.push(l);
        }
      }
    return {
      patterns: r,
      hasMissingPatterns: (t ? t.length : 0) !== r.length
    };
  }
};
var bt = class Cs {
  constructor(t, n) {
    p(this, "source");
    p(this, "ruleId");
    p(this, "hasAnchor");
    p(this, "hasBackReferences");
    p(this, "_anchorCache");
    if (t && typeof t == "string") {
      const i = t.length;
      let r = 0, s = [], o = false;
      for (let a = 0; a < i; a++)
        if (t.charAt(a) === "\\" && a + 1 < i) {
          const c = t.charAt(a + 1);
          c === "z" ? (s.push(t.substring(r, a)), s.push("$(?!\\n)(?<!\\n)"), r = a + 2) : (c === "A" || c === "G") && (o = true), a++;
        }
      this.hasAnchor = o, r === 0 ? this.source = t : (s.push(t.substring(r, i)), this.source = s.join(""));
    } else
      this.hasAnchor = false, this.source = t;
    this.hasAnchor ? this._anchorCache = this._buildAnchorCache() : this._anchorCache = null, this.ruleId = n, typeof this.source == "string" ? this.hasBackReferences = ya.test(this.source) : this.hasBackReferences = false;
  }
  clone() {
    return new Cs(this.source, this.ruleId);
  }
  setSource(t) {
    this.source !== t && (this.source = t, this.hasAnchor && (this._anchorCache = this._buildAnchorCache()));
  }
  resolveBackReferences(t, n) {
    if (typeof this.source != "string")
      throw new Error("This method should only be called if the source is a string");
    let i = n.map((r) => t.substring(r.start, r.end));
    return Vi.lastIndex = 0, this.source.replace(Vi, (r, s) => ps(i[parseInt(s, 10)] || ""));
  }
  _buildAnchorCache() {
    if (typeof this.source != "string")
      throw new Error("This method should only be called if the source is a string");
    let t = [], n = [], i = [], r = [], s, o, a, l;
    for (s = 0, o = this.source.length; s < o; s++)
      a = this.source.charAt(s), t[s] = a, n[s] = a, i[s] = a, r[s] = a, a === "\\" && s + 1 < o && (l = this.source.charAt(s + 1), l === "A" ? (t[s + 1] = "\uFFFF", n[s + 1] = "\uFFFF", i[s + 1] = "A", r[s + 1] = "A") : l === "G" ? (t[s + 1] = "\uFFFF", n[s + 1] = "G", i[s + 1] = "\uFFFF", r[s + 1] = "G") : (t[s + 1] = l, n[s + 1] = l, i[s + 1] = l, r[s + 1] = l), s++);
    return {
      A0_G0: t.join(""),
      A0_G1: n.join(""),
      A1_G0: i.join(""),
      A1_G1: r.join("")
    };
  }
  resolveAnchors(t, n) {
    return !this.hasAnchor || !this._anchorCache || typeof this.source != "string" ? this.source : t ? n ? this._anchorCache.A1_G1 : this._anchorCache.A1_G0 : n ? this._anchorCache.A0_G1 : this._anchorCache.A0_G0;
  }
};
var yt = class {
  constructor() {
    p(this, "_items");
    p(this, "_hasAnchors");
    p(this, "_cached");
    p(this, "_anchorCache");
    this._items = [], this._hasAnchors = false, this._cached = null, this._anchorCache = {
      A0_G0: null,
      A0_G1: null,
      A1_G0: null,
      A1_G1: null
    };
  }
  dispose() {
    this._disposeCaches();
  }
  _disposeCaches() {
    this._cached && (this._cached.dispose(), this._cached = null), this._anchorCache.A0_G0 && (this._anchorCache.A0_G0.dispose(), this._anchorCache.A0_G0 = null), this._anchorCache.A0_G1 && (this._anchorCache.A0_G1.dispose(), this._anchorCache.A0_G1 = null), this._anchorCache.A1_G0 && (this._anchorCache.A1_G0.dispose(), this._anchorCache.A1_G0 = null), this._anchorCache.A1_G1 && (this._anchorCache.A1_G1.dispose(), this._anchorCache.A1_G1 = null);
  }
  push(e) {
    this._items.push(e), this._hasAnchors = this._hasAnchors || e.hasAnchor;
  }
  unshift(e) {
    this._items.unshift(e), this._hasAnchors = this._hasAnchors || e.hasAnchor;
  }
  length() {
    return this._items.length;
  }
  setSource(e, t) {
    this._items[e].source !== t && (this._disposeCaches(), this._items[e].setSource(t));
  }
  compile(e) {
    if (!this._cached) {
      let t = this._items.map((n) => n.source);
      this._cached = new Ki(e, t, this._items.map((n) => n.ruleId));
    }
    return this._cached;
  }
  compileAG(e, t, n) {
    return this._hasAnchors ? t ? n ? (this._anchorCache.A1_G1 || (this._anchorCache.A1_G1 = this._resolveAnchors(e, t, n)), this._anchorCache.A1_G1) : (this._anchorCache.A1_G0 || (this._anchorCache.A1_G0 = this._resolveAnchors(e, t, n)), this._anchorCache.A1_G0) : n ? (this._anchorCache.A0_G1 || (this._anchorCache.A0_G1 = this._resolveAnchors(e, t, n)), this._anchorCache.A0_G1) : (this._anchorCache.A0_G0 || (this._anchorCache.A0_G0 = this._resolveAnchors(e, t, n)), this._anchorCache.A0_G0) : this.compile(e);
  }
  _resolveAnchors(e, t, n) {
    let i = this._items.map((r) => r.resolveAnchors(t, n));
    return new Ki(e, i, this._items.map((r) => r.ruleId));
  }
};
var Ki = class {
  constructor(e, t, n) {
    p(this, "scanner");
    this.regExps = t, this.rules = n, this.scanner = e.createOnigScanner(t);
  }
  dispose() {
    typeof this.scanner.dispose == "function" && this.scanner.dispose();
  }
  toString() {
    const e = [];
    for (let t = 0, n = this.rules.length; t < n; t++)
      e.push("   - " + this.rules[t] + ": " + this.regExps[t]);
    return e.join(`
`);
  }
  findNextMatchSync(e, t, n) {
    const i = this.scanner.findNextMatchSync(e, t, n);
    return i ? {
      ruleId: this.rules[i.index],
      captureIndices: i.captureIndices
    } : null;
  }
};
var En = class {
  constructor(e, t) {
    this.languageId = e, this.tokenType = t;
  }
};
var pe;
var Ca = (pe = class {
  constructor(t, n) {
    p(this, "_defaultAttributes");
    p(this, "_embeddedLanguagesMatcher");
    p(this, "_getBasicScopeAttributes", new gs((t2) => {
      const n2 = this._scopeToLanguage(t2), i = this._toStandardTokenType(t2);
      return new En(n2, i);
    }));
    this._defaultAttributes = new En(
      t,
      8
      /* NotSet */
    ), this._embeddedLanguagesMatcher = new xa(Object.entries(n || {}));
  }
  getDefaultAttributes() {
    return this._defaultAttributes;
  }
  getBasicScopeAttributes(t) {
    return t === null ? pe._NULL_SCOPE_METADATA : this._getBasicScopeAttributes.get(t);
  }
  /**
   * Given a produced TM scope, return the language that token describes or null if unknown.
   * e.g. source.html => html, source.css.embedded.html => css, punctuation.definition.tag.html => null
   */
  _scopeToLanguage(t) {
    return this._embeddedLanguagesMatcher.match(t) || 0;
  }
  _toStandardTokenType(t) {
    const n = t.match(pe.STANDARD_TOKEN_TYPE_REGEXP);
    if (!n)
      return 8;
    switch (n[1]) {
      case "comment":
        return 1;
      case "string":
        return 2;
      case "regex":
        return 3;
      case "meta.embedded":
        return 0;
    }
    throw new Error("Unexpected match for standard token type!");
  }
}, p(pe, "_NULL_SCOPE_METADATA", new En(0, 0)), p(pe, "STANDARD_TOKEN_TYPE_REGEXP", /\b(comment|string|regex|meta\.embedded)\b/), pe);
var xa = class {
  constructor(e) {
    p(this, "values");
    p(this, "scopesRegExp");
    if (e.length === 0)
      this.values = null, this.scopesRegExp = null;
    else {
      this.values = new Map(e);
      const t = e.map(
        ([n, i]) => ps(n)
      );
      t.sort(), t.reverse(), this.scopesRegExp = new RegExp(
        `^((${t.join(")|(")}))($|\\.)`,
        ""
      );
    }
  }
  match(e) {
    if (!this.scopesRegExp)
      return;
    const t = e.match(this.scopesRegExp);
    if (t)
      return this.values.get(t[1]);
  }
};
typeof process < "u" && process.env.VSCODE_TEXTMATE_DEBUG;
var Xi = class {
  constructor(e, t) {
    this.stack = e, this.stoppedEarly = t;
  }
};
function xs(e, t, n, i, r, s, o, a) {
  const l = t.content.length;
  let c = false, u = -1;
  if (o) {
    const f = ka(
      e,
      t,
      n,
      i,
      r,
      s
    );
    r = f.stack, i = f.linePos, n = f.isFirstLine, u = f.anchorPosition;
  }
  const d = Date.now();
  for (; !c; ) {
    if (a !== 0 && Date.now() - d > a)
      return new Xi(r, true);
    h();
  }
  return new Xi(r, false);
  function h() {
    const f = Ea(
      e,
      t,
      n,
      i,
      r,
      u
    );
    if (!f) {
      s.produce(r, l), c = true;
      return;
    }
    const g = f.captureIndices, y = f.matchedRuleId, v = g && g.length > 0 ? g[0].end > i : false;
    if (y === va) {
      const m = r.getRule(e);
      s.produce(r, g[0].start), r = r.withContentNameScopesList(r.nameScopesList), lt(
        e,
        t,
        n,
        r,
        s,
        m.endCaptures,
        g
      ), s.produce(r, g[0].end);
      const b = r;
      if (r = r.parent, u = b.getAnchorPos(), !v && b.getEnterPos() === i) {
        r = b, s.produce(r, l), c = true;
        return;
      }
    } else {
      const m = e.getRule(y);
      s.produce(r, g[0].start);
      const b = r, w = m.getName(t.content, g), C = r.contentNameScopesList.pushAttributed(
        w,
        e
      );
      if (r = r.push(
        y,
        i,
        u,
        g[0].end === l,
        null,
        C,
        C
      ), m instanceof Qn) {
        const E = m;
        lt(
          e,
          t,
          n,
          r,
          s,
          E.beginCaptures,
          g
        ), s.produce(r, g[0].end), u = g[0].end;
        const L = E.getContentName(
          t.content,
          g
        ), R = C.pushAttributed(
          L,
          e
        );
        if (r = r.withContentNameScopesList(R), E.endHasBackReferences && (r = r.withEndRule(
          E.getEndWithResolvedBackReferences(
            t.content,
            g
          )
        )), !v && b.hasSameRuleAs(r)) {
          r = r.pop(), s.produce(r, l), c = true;
          return;
        }
      } else if (m instanceof Jt) {
        const E = m;
        lt(
          e,
          t,
          n,
          r,
          s,
          E.beginCaptures,
          g
        ), s.produce(r, g[0].end), u = g[0].end;
        const L = E.getContentName(
          t.content,
          g
        ), R = C.pushAttributed(
          L,
          e
        );
        if (r = r.withContentNameScopesList(R), E.whileHasBackReferences && (r = r.withEndRule(
          E.getWhileWithResolvedBackReferences(
            t.content,
            g
          )
        )), !v && b.hasSameRuleAs(r)) {
          r = r.pop(), s.produce(r, l), c = true;
          return;
        }
      } else if (lt(
        e,
        t,
        n,
        r,
        s,
        m.captures,
        g
      ), s.produce(r, g[0].end), r = r.pop(), !v) {
        r = r.safePop(), s.produce(r, l), c = true;
        return;
      }
    }
    g[0].end > i && (i = g[0].end, n = false);
  }
}
function ka(e, t, n, i, r, s) {
  let o = r.beginRuleCapturedEOL ? 0 : -1;
  const a = [];
  for (let l = r; l; l = l.pop()) {
    const c = l.getRule(e);
    c instanceof Jt && a.push({
      rule: c,
      stack: l
    });
  }
  for (let l = a.pop(); l; l = a.pop()) {
    const { ruleScanner: c, findOptions: u } = _a(l.rule, e, l.stack.endRule, n, i === o), d = c.findNextMatchSync(t, i, u);
    if (d) {
      if (d.ruleId !== ws) {
        r = l.stack.pop();
        break;
      }
      d.captureIndices && d.captureIndices.length && (s.produce(l.stack, d.captureIndices[0].start), lt(e, t, n, l.stack, s, l.rule.whileCaptures, d.captureIndices), s.produce(l.stack, d.captureIndices[0].end), o = d.captureIndices[0].end, d.captureIndices[0].end > i && (i = d.captureIndices[0].end, n = false));
    } else {
      r = l.stack.pop();
      break;
    }
  }
  return { stack: r, linePos: i, anchorPosition: o, isFirstLine: n };
}
function Ea(e, t, n, i, r, s) {
  const o = Ra(e, t, n, i, r, s), a = e.getInjections();
  if (a.length === 0)
    return o;
  const l = La(a, e, t, n, i, r, s);
  if (!l)
    return o;
  if (!o)
    return l;
  const c = o.captureIndices[0].start, u = l.captureIndices[0].start;
  return u < c || l.priorityMatch && u === c ? l : o;
}
function Ra(e, t, n, i, r, s) {
  const o = r.getRule(e), { ruleScanner: a, findOptions: l } = ks(o, e, r.endRule, n, i === s), c = a.findNextMatchSync(t, i, l);
  return c ? {
    captureIndices: c.captureIndices,
    matchedRuleId: c.ruleId
  } : null;
}
function La(e, t, n, i, r, s, o) {
  let a = Number.MAX_VALUE, l = null, c, u = 0;
  const d = s.contentNameScopesList.getScopeNames();
  for (let h = 0, f = e.length; h < f; h++) {
    const g = e[h];
    if (!g.matcher(d))
      continue;
    const y = t.getRule(g.ruleId), { ruleScanner: v, findOptions: m } = ks(y, t, null, i, r === o), b = v.findNextMatchSync(n, r, m);
    if (!b)
      continue;
    const w = b.captureIndices[0].start;
    if (!(w >= a) && (a = w, l = b.captureIndices, c = b.ruleId, u = g.priority, a === r))
      break;
  }
  return l ? {
    priorityMatch: u === -1,
    captureIndices: l,
    matchedRuleId: c
  } : null;
}
function ks(e, t, n, i, r) {
  return {
    ruleScanner: e.compileAG(t, n, i, r),
    findOptions: 0
    /* None */
  };
}
function _a(e, t, n, i, r) {
  return {
    ruleScanner: e.compileWhileAG(t, n, i, r),
    findOptions: 0
    /* None */
  };
}
function lt(e, t, n, i, r, s, o) {
  if (s.length === 0)
    return;
  const a = t.content, l = Math.min(s.length, o.length), c = [], u = o[0].end;
  for (let d = 0; d < l; d++) {
    const h = s[d];
    if (h === null)
      continue;
    const f = o[d];
    if (f.length === 0)
      continue;
    if (f.start > u)
      break;
    for (; c.length > 0 && c[c.length - 1].endPos <= f.start; )
      r.produceFromScopes(c[c.length - 1].scopes, c[c.length - 1].endPos), c.pop();
    if (c.length > 0 ? r.produceFromScopes(c[c.length - 1].scopes, f.start) : r.produce(i, f.start), h.retokenizeCapturedWithRuleId) {
      const y = h.getName(a, o), v = i.contentNameScopesList.pushAttributed(y, e), m = h.getContentName(a, o), b = v.pushAttributed(m, e), w = i.push(h.retokenizeCapturedWithRuleId, f.start, -1, false, null, v, b), C = e.createOnigString(a.substring(0, f.end));
      xs(
        e,
        C,
        n && f.start === 0,
        f.start,
        w,
        r,
        false,
        /* no time limit */
        0
      ), ys(C);
      continue;
    }
    const g = h.getName(a, o);
    if (g !== null) {
      const v = (c.length > 0 ? c[c.length - 1].scopes : i.contentNameScopesList).pushAttributed(g, e);
      c.push(new Aa(v, f.end));
    }
  }
  for (; c.length > 0; )
    r.produceFromScopes(c[c.length - 1].scopes, c[c.length - 1].endPos), c.pop();
}
var Aa = class {
  constructor(e, t) {
    p(this, "scopes");
    p(this, "endPos");
    this.scopes = e, this.endPos = t;
  }
};
function Ta(e, t, n, i, r, s, o, a) {
  return new Ia(
    e,
    t,
    n,
    i,
    r,
    s,
    o,
    a
  );
}
function Yi(e, t, n, i, r) {
  const s = Qt(t, en), o = Ss.getCompiledRuleId(n, i, r.repository);
  for (const a of s)
    e.push({
      debugSelector: t,
      matcher: a.matcher,
      ruleId: o,
      grammar: r,
      priority: a.priority
    });
}
function en(e, t) {
  if (t.length < e.length)
    return false;
  let n = 0;
  return e.every((i) => {
    for (let r = n; r < t.length; r++)
      if (Ma(t[r], i))
        return n = r + 1, true;
    return false;
  });
}
function Ma(e, t) {
  if (!e)
    return false;
  if (e === t)
    return true;
  const n = t.length;
  return e.length > n && e.substr(0, n) === t && e[n] === ".";
}
var Ia = class {
  constructor(e, t, n, i, r, s, o, a) {
    p(this, "_rootId");
    p(this, "_lastRuleId");
    p(this, "_ruleId2desc");
    p(this, "_includedGrammars");
    p(this, "_grammarRepository");
    p(this, "_grammar");
    p(this, "_injections");
    p(this, "_basicScopeAttributesProvider");
    p(this, "_tokenTypeMatchers");
    if (this._rootScopeName = e, this.balancedBracketSelectors = s, this._onigLib = a, this._basicScopeAttributesProvider = new Ca(
      n,
      i
    ), this._rootId = -1, this._lastRuleId = 0, this._ruleId2desc = [null], this._includedGrammars = {}, this._grammarRepository = o, this._grammar = Qi(t, null), this._injections = null, this._tokenTypeMatchers = [], r)
      for (const l of Object.keys(r)) {
        const c = Qt(l, en);
        for (const u of c)
          this._tokenTypeMatchers.push({
            matcher: u.matcher,
            type: r[l]
          });
      }
  }
  get themeProvider() {
    return this._grammarRepository;
  }
  dispose() {
    for (const e of this._ruleId2desc)
      e && e.dispose();
  }
  createOnigScanner(e) {
    return this._onigLib.createOnigScanner(e);
  }
  createOnigString(e) {
    return this._onigLib.createOnigString(e);
  }
  getMetadataForScope(e) {
    return this._basicScopeAttributesProvider.getBasicScopeAttributes(e);
  }
  _collectInjections() {
    const e = {
      lookup: (r) => r === this._rootScopeName ? this._grammar : this.getExternalGrammar(r),
      injections: (r) => this._grammarRepository.injections(r)
    }, t = [], n = this._rootScopeName, i = e.lookup(n);
    if (i) {
      const r = i.injections;
      if (r)
        for (let o in r)
          Yi(
            t,
            o,
            r[o],
            this,
            i
          );
      const s = this._grammarRepository.injections(n);
      s && s.forEach((o) => {
        const a = this.getExternalGrammar(o);
        if (a) {
          const l = a.injectionSelector;
          l && Yi(
            t,
            l,
            a,
            this,
            a
          );
        }
      });
    }
    return t.sort((r, s) => r.priority - s.priority), t;
  }
  getInjections() {
    return this._injections === null && (this._injections = this._collectInjections()), this._injections;
  }
  registerRule(e) {
    const t = ++this._lastRuleId, n = e(t);
    return this._ruleId2desc[t] = n, n;
  }
  getRule(e) {
    return this._ruleId2desc[e];
  }
  getExternalGrammar(e, t) {
    if (this._includedGrammars[e])
      return this._includedGrammars[e];
    if (this._grammarRepository) {
      const n = this._grammarRepository.lookup(e);
      if (n)
        return this._includedGrammars[e] = Qi(
          n,
          t && t.$base
        ), this._includedGrammars[e];
    }
  }
  tokenizeLine(e, t, n = 0) {
    const i = this._tokenize(e, t, false, n);
    return {
      tokens: i.lineTokens.getResult(i.ruleStack, i.lineLength),
      ruleStack: i.ruleStack,
      stoppedEarly: i.stoppedEarly
    };
  }
  tokenizeLine2(e, t, n = 0) {
    const i = this._tokenize(e, t, true, n);
    return {
      tokens: i.lineTokens.getBinaryResult(i.ruleStack, i.lineLength),
      ruleStack: i.ruleStack,
      stoppedEarly: i.stoppedEarly
    };
  }
  _tokenize(e, t, n, i) {
    this._rootId === -1 && (this._rootId = Ss.getCompiledRuleId(
      this._grammar.repository.$self,
      this,
      this._grammar.repository
    ), this.getInjections());
    let r;
    if (!t || t === Zn.NULL) {
      r = true;
      const c = this._basicScopeAttributesProvider.getDefaultAttributes(), u = this.themeProvider.getDefaults(), d = $e.set(
        0,
        c.languageId,
        c.tokenType,
        null,
        u.fontStyle,
        u.foregroundId,
        u.backgroundId
      ), h = this.getRule(this._rootId).getName(
        null,
        null
      );
      let f;
      h ? f = ft.createRootAndLookUpScopeName(
        h,
        d,
        this
      ) : f = ft.createRoot(
        "unknown",
        d
      ), t = new Zn(
        null,
        this._rootId,
        -1,
        -1,
        false,
        null,
        f,
        f
      );
    } else
      r = false, t.reset();
    e = e + `
`;
    const s = this.createOnigString(e), o = s.content.length, a = new Pa(
      n,
      e,
      this._tokenTypeMatchers,
      this.balancedBracketSelectors
    ), l = xs(
      this,
      s,
      r,
      0,
      t,
      a,
      true,
      i
    );
    return ys(s), {
      lineLength: o,
      lineTokens: a,
      ruleStack: l.stack,
      stoppedEarly: l.stoppedEarly
    };
  }
};
function Qi(e, t) {
  return e = Qo(e), e.repository = e.repository || {}, e.repository.$self = {
    $vscodeTextmateLocation: e.$vscodeTextmateLocation,
    patterns: e.patterns,
    name: e.scopeName
  }, e.repository.$base = t || e.repository.$self, e;
}
var ft = class ae {
  /**
   * Invariant:
   * ```
   * if (parent && !scopePath.extends(parent.scopePath)) {
   * 	throw new Error();
   * }
   * ```
   */
  constructor(t, n, i) {
    this.parent = t, this.scopePath = n, this.tokenAttributes = i;
  }
  static fromExtension(t, n) {
    let i = t, r = t?.scopePath ?? null;
    for (const s of n)
      r = kn.push(r, s.scopeNames), i = new ae(i, r, s.encodedTokenAttributes);
    return i;
  }
  static createRoot(t, n) {
    return new ae(null, new kn(null, t), n);
  }
  static createRootAndLookUpScopeName(t, n, i) {
    const r = i.getMetadataForScope(t), s = new kn(null, t), o = i.themeProvider.themeMatch(s), a = ae.mergeAttributes(
      n,
      r,
      o
    );
    return new ae(null, s, a);
  }
  get scopeName() {
    return this.scopePath.scopeName;
  }
  toString() {
    return this.getScopeNames().join(" ");
  }
  equals(t) {
    return ae.equals(this, t);
  }
  static equals(t, n) {
    do {
      if (t === n || !t && !n)
        return true;
      if (!t || !n || t.scopeName !== n.scopeName || t.tokenAttributes !== n.tokenAttributes)
        return false;
      t = t.parent, n = n.parent;
    } while (true);
  }
  static mergeAttributes(t, n, i) {
    let r = -1, s = 0, o = 0;
    return i !== null && (r = i.fontStyle, s = i.foregroundId, o = i.backgroundId), $e.set(
      t,
      n.languageId,
      n.tokenType,
      null,
      r,
      s,
      o
    );
  }
  pushAttributed(t, n) {
    if (t === null)
      return this;
    if (t.indexOf(" ") === -1)
      return ae._pushAttributed(this, t, n);
    const i = t.split(/ /g);
    let r = this;
    for (const s of i)
      r = ae._pushAttributed(r, s, n);
    return r;
  }
  static _pushAttributed(t, n, i) {
    const r = i.getMetadataForScope(n), s = t.scopePath.push(n), o = i.themeProvider.themeMatch(s), a = ae.mergeAttributes(
      t.tokenAttributes,
      r,
      o
    );
    return new ae(t, s, a);
  }
  getScopeNames() {
    return this.scopePath.getSegments();
  }
  getExtensionIfDefined(t) {
    const n = [];
    let i = this;
    for (; i && i !== t; )
      n.push({
        encodedTokenAttributes: i.tokenAttributes,
        scopeNames: i.scopePath.getExtensionIfDefined(i.parent?.scopePath ?? null)
      }), i = i.parent;
    return i === t ? n.reverse() : void 0;
  }
};
var J;
var Zn = (J = class {
  /**
   * Invariant:
   * ```
   * if (contentNameScopesList !== nameScopesList && contentNameScopesList?.parent !== nameScopesList) {
   * 	throw new Error();
   * }
   * if (this.parent && !nameScopesList.extends(this.parent.contentNameScopesList)) {
   * 	throw new Error();
   * }
   * ```
   */
  constructor(t, n, i, r, s, o, a, l) {
    p(this, "_stackElementBrand");
    p(this, "_enterPos");
    p(this, "_anchorPos");
    p(this, "depth");
    this.parent = t, this.ruleId = n, this.beginRuleCapturedEOL = s, this.endRule = o, this.nameScopesList = a, this.contentNameScopesList = l, this.depth = this.parent ? this.parent.depth + 1 : 1, this._enterPos = i, this._anchorPos = r;
  }
  equals(t) {
    return t === null ? false : J._equals(this, t);
  }
  static _equals(t, n) {
    return t === n ? true : this._structuralEquals(t, n) ? ft.equals(t.contentNameScopesList, n.contentNameScopesList) : false;
  }
  /**
   * A structural equals check. Does not take into account `scopes`.
   */
  static _structuralEquals(t, n) {
    do {
      if (t === n || !t && !n)
        return true;
      if (!t || !n || t.depth !== n.depth || t.ruleId !== n.ruleId || t.endRule !== n.endRule)
        return false;
      t = t.parent, n = n.parent;
    } while (true);
  }
  clone() {
    return this;
  }
  static _reset(t) {
    for (; t; )
      t._enterPos = -1, t._anchorPos = -1, t = t.parent;
  }
  reset() {
    J._reset(this);
  }
  pop() {
    return this.parent;
  }
  safePop() {
    return this.parent ? this.parent : this;
  }
  push(t, n, i, r, s, o, a) {
    return new J(
      this,
      t,
      n,
      i,
      r,
      s,
      o,
      a
    );
  }
  getEnterPos() {
    return this._enterPos;
  }
  getAnchorPos() {
    return this._anchorPos;
  }
  getRule(t) {
    return t.getRule(this.ruleId);
  }
  toString() {
    const t = [];
    return this._writeString(t, 0), "[" + t.join(",") + "]";
  }
  _writeString(t, n) {
    return this.parent && (n = this.parent._writeString(t, n)), t[n++] = `(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`, n;
  }
  withContentNameScopesList(t) {
    return this.contentNameScopesList === t ? this : this.parent.push(
      this.ruleId,
      this._enterPos,
      this._anchorPos,
      this.beginRuleCapturedEOL,
      this.endRule,
      this.nameScopesList,
      t
    );
  }
  withEndRule(t) {
    return this.endRule === t ? this : new J(
      this.parent,
      this.ruleId,
      this._enterPos,
      this._anchorPos,
      this.beginRuleCapturedEOL,
      t,
      this.nameScopesList,
      this.contentNameScopesList
    );
  }
  // Used to warn of endless loops
  hasSameRuleAs(t) {
    let n = this;
    for (; n && n._enterPos === t._enterPos; ) {
      if (n.ruleId === t.ruleId)
        return true;
      n = n.parent;
    }
    return false;
  }
  toStateStackFrame() {
    return {
      ruleId: this.ruleId,
      beginRuleCapturedEOL: this.beginRuleCapturedEOL,
      endRule: this.endRule,
      nameScopesList: this.nameScopesList?.getExtensionIfDefined(this.parent?.nameScopesList ?? null) ?? [],
      contentNameScopesList: this.contentNameScopesList?.getExtensionIfDefined(this.nameScopesList) ?? []
    };
  }
  static pushFrame(t, n) {
    const i = ft.fromExtension(t?.nameScopesList ?? null, n.nameScopesList);
    return new J(
      t,
      n.ruleId,
      n.enterPos ?? -1,
      n.anchorPos ?? -1,
      n.beginRuleCapturedEOL,
      n.endRule,
      i,
      ft.fromExtension(i, n.contentNameScopesList)
    );
  }
}, // TODO remove me
p(J, "NULL", new J(
  null,
  0,
  0,
  0,
  false,
  null,
  null,
  null
)), J);
var Na = class {
  constructor(e, t) {
    p(this, "balancedBracketScopes");
    p(this, "unbalancedBracketScopes");
    p(this, "allowAny", false);
    this.balancedBracketScopes = e.flatMap(
      (n) => n === "*" ? (this.allowAny = true, []) : Qt(n, en).map((i) => i.matcher)
    ), this.unbalancedBracketScopes = t.flatMap(
      (n) => Qt(n, en).map((i) => i.matcher)
    );
  }
  get matchesAlways() {
    return this.allowAny && this.unbalancedBracketScopes.length === 0;
  }
  get matchesNever() {
    return this.balancedBracketScopes.length === 0 && !this.allowAny;
  }
  match(e) {
    for (const t of this.unbalancedBracketScopes)
      if (t(e))
        return false;
    for (const t of this.balancedBracketScopes)
      if (t(e))
        return true;
    return this.allowAny;
  }
};
var Pa = class {
  constructor(e, t, n, i) {
    p(this, "_emitBinaryTokens");
    p(this, "_lineText");
    p(this, "_tokens");
    p(this, "_binaryTokens");
    p(this, "_lastTokenEndIndex");
    p(this, "_tokenTypeOverrides");
    this.balancedBracketSelectors = i, this._emitBinaryTokens = e, this._tokenTypeOverrides = n, this._lineText = null, this._tokens = [], this._binaryTokens = [], this._lastTokenEndIndex = 0;
  }
  produce(e, t) {
    this.produceFromScopes(e.contentNameScopesList, t);
  }
  produceFromScopes(e, t) {
    if (this._lastTokenEndIndex >= t)
      return;
    if (this._emitBinaryTokens) {
      let i = e?.tokenAttributes ?? 0, r = false;
      if (this.balancedBracketSelectors?.matchesAlways && (r = true), this._tokenTypeOverrides.length > 0 || this.balancedBracketSelectors && !this.balancedBracketSelectors.matchesAlways && !this.balancedBracketSelectors.matchesNever) {
        const s = e?.getScopeNames() ?? [];
        for (const o of this._tokenTypeOverrides)
          o.matcher(s) && (i = $e.set(
            i,
            0,
            o.type,
            null,
            -1,
            0,
            0
          ));
        this.balancedBracketSelectors && (r = this.balancedBracketSelectors.match(s));
      }
      if (r && (i = $e.set(
        i,
        0,
        8,
        r,
        -1,
        0,
        0
      )), this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === i) {
        this._lastTokenEndIndex = t;
        return;
      }
      this._binaryTokens.push(this._lastTokenEndIndex), this._binaryTokens.push(i), this._lastTokenEndIndex = t;
      return;
    }
    const n = e?.getScopeNames() ?? [];
    this._tokens.push({
      startIndex: this._lastTokenEndIndex,
      endIndex: t,
      // value: lineText.substring(lastTokenEndIndex, endIndex),
      scopes: n
    }), this._lastTokenEndIndex = t;
  }
  getResult(e, t) {
    return this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === t - 1 && this._tokens.pop(), this._tokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(e, t), this._tokens[this._tokens.length - 1].startIndex = 0), this._tokens;
  }
  getBinaryResult(e, t) {
    this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === t - 1 && (this._binaryTokens.pop(), this._binaryTokens.pop()), this._binaryTokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(e, t), this._binaryTokens[this._binaryTokens.length - 2] = 0);
    const n = new Uint32Array(this._binaryTokens.length);
    for (let i = 0, r = this._binaryTokens.length; i < r; i++)
      n[i] = this._binaryTokens[i];
    return n;
  }
};
var Oa = class {
  constructor(e, t) {
    p(this, "_grammars", /* @__PURE__ */ new Map());
    p(this, "_rawGrammars", /* @__PURE__ */ new Map());
    p(this, "_injectionGrammars", /* @__PURE__ */ new Map());
    p(this, "_theme");
    this._onigLib = t, this._theme = e;
  }
  dispose() {
    for (const e of this._grammars.values())
      e.dispose();
  }
  setTheme(e) {
    this._theme = e;
  }
  getColorMap() {
    return this._theme.getColorMap();
  }
  /**
   * Add `grammar` to registry and return a list of referenced scope names
   */
  addGrammar(e, t) {
    this._rawGrammars.set(e.scopeName, e), t && this._injectionGrammars.set(e.scopeName, t);
  }
  /**
   * Lookup a raw grammar.
   */
  lookup(e) {
    return this._rawGrammars.get(e);
  }
  /**
   * Returns the injections for the given grammar
   */
  injections(e) {
    return this._injectionGrammars.get(e);
  }
  /**
   * Get the default theme settings
   */
  getDefaults() {
    return this._theme.getDefaults();
  }
  /**
   * Match a scope in the theme.
   */
  themeMatch(e) {
    return this._theme.match(e);
  }
  /**
   * Lookup a grammar.
   */
  grammarForScopeName(e, t, n, i, r) {
    if (!this._grammars.has(e)) {
      let s = this._rawGrammars.get(e);
      if (!s)
        return null;
      this._grammars.set(e, Ta(
        e,
        s,
        t,
        n,
        i,
        r,
        this,
        this._onigLib
      ));
    }
    return this._grammars.get(e);
  }
};
var Fa = class {
  constructor(t) {
    p(this, "_options");
    p(this, "_syncRegistry");
    p(this, "_ensureGrammarCache");
    this._options = t, this._syncRegistry = new Oa(
      Yt.createFromRawTheme(t.theme, t.colorMap),
      t.onigLib
    ), this._ensureGrammarCache = /* @__PURE__ */ new Map();
  }
  dispose() {
    this._syncRegistry.dispose();
  }
  /**
   * Change the theme. Once called, no previous `ruleStack` should be used anymore.
   */
  setTheme(t, n) {
    this._syncRegistry.setTheme(Yt.createFromRawTheme(t, n));
  }
  /**
   * Returns a lookup array for color ids.
   */
  getColorMap() {
    return this._syncRegistry.getColorMap();
  }
  /**
   * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
   * Please do not use language id 0.
   */
  loadGrammarWithEmbeddedLanguages(t, n, i) {
    return this.loadGrammarWithConfiguration(t, n, { embeddedLanguages: i });
  }
  /**
   * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
   * Please do not use language id 0.
   */
  loadGrammarWithConfiguration(t, n, i) {
    return this._loadGrammar(
      t,
      n,
      i.embeddedLanguages,
      i.tokenTypes,
      new Na(
        i.balancedBracketSelectors || [],
        i.unbalancedBracketSelectors || []
      )
    );
  }
  /**
   * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
   */
  loadGrammar(t) {
    return this._loadGrammar(t, 0, null, null, null);
  }
  _loadGrammar(t, n, i, r, s) {
    const o = new da(this._syncRegistry, t);
    for (; o.Q.length > 0; )
      o.Q.map((a) => this._loadSingleGrammar(a.scopeName)), o.processQueue();
    return this._grammarForScopeName(
      t,
      n,
      i,
      r,
      s
    );
  }
  _loadSingleGrammar(t) {
    this._ensureGrammarCache.has(t) || (this._doLoadSingleGrammar(t), this._ensureGrammarCache.set(t, true));
  }
  _doLoadSingleGrammar(t) {
    const n = this._options.loadGrammar(t);
    if (n) {
      const i = typeof this._options.getInjections == "function" ? this._options.getInjections(t) : void 0;
      this._syncRegistry.addGrammar(n, i);
    }
  }
  /**
   * Adds a rawGrammar.
   */
  addGrammar(t, n = [], i = 0, r = null) {
    return this._syncRegistry.addGrammar(t, n), this._grammarForScopeName(t.scopeName, i, r);
  }
  /**
   * Get the grammar for `scopeName`. The grammar must first be created via `loadGrammar` or `addGrammar`.
   */
  _grammarForScopeName(t, n = 0, i = null, r = null, s = null) {
    return this._syncRegistry.grammarForScopeName(
      t,
      n,
      i,
      r,
      s
    );
  }
};
var Jn = Zn.NULL;
function tn(e, t) {
  const n = typeof e == "string" ? {} : { ...e.colorReplacements }, i = typeof e == "string" ? e : e.name;
  for (const [r, s] of Object.entries(t?.colorReplacements || {})) typeof s == "string" ? n[r] = s : r === i && Object.assign(n, s);
  return n;
}
function Re(e, t) {
  return e && (t?.[e?.toLowerCase()] || e);
}
function Ha(e) {
  return Array.isArray(e) ? e : [e];
}
async function Es(e) {
  return Promise.resolve(typeof e == "function" ? e() : e).then((t) => t.default || t);
}
function ln(e) {
  return !e || [
    "plaintext",
    "txt",
    "text",
    "plain"
  ].includes(e);
}
function Rs(e) {
  return e === "ansi" || ln(e);
}
function cn(e) {
  return e === "none";
}
function Ls(e) {
  return cn(e);
}
var $a = /(\r?\n)/g;
function un(e, t = false) {
  if (e.length === 0) return [["", 0]];
  const n = e.split($a);
  let i = 0;
  const r = [];
  for (let s = 0; s < n.length; s += 2) {
    const o = t ? n[s] + (n[s + 1] || "") : n[s];
    r.push([o, i]), i += n[s].length, i += n[s + 1]?.length || 0;
  }
  return r;
}
var Zi = {
  light: "#333333",
  dark: "#bbbbbb"
};
var Ji = {
  light: "#fffffe",
  dark: "#1e1e1e"
};
var er = "__shiki_resolved";
function Ci(e) {
  if (e?.[er]) return e;
  const t = { ...e };
  t.tokenColors && !t.settings && (t.settings = t.tokenColors, delete t.tokenColors), t.type ||= "dark", t.colorReplacements = { ...t.colorReplacements }, t.settings ||= [];
  let { bg: n, fg: i } = t;
  if (!n || !i) {
    const a = t.settings ? t.settings.find((l) => !l.name && !l.scope) : void 0;
    a?.settings?.foreground && (i = a.settings.foreground), a?.settings?.background && (n = a.settings.background), !i && t?.colors?.["editor.foreground"] && (i = t.colors["editor.foreground"]), !n && t?.colors?.["editor.background"] && (n = t.colors["editor.background"]), i || (i = t.type === "light" ? Zi.light : Zi.dark), n || (n = t.type === "light" ? Ji.light : Ji.dark), t.fg = i, t.bg = n;
  }
  t.settings[0] && t.settings[0].settings && !t.settings[0].scope || t.settings.unshift({ settings: {
    foreground: t.fg,
    background: t.bg
  } });
  let r = 0;
  const s = /* @__PURE__ */ new Map();
  function o(a) {
    if (s.has(a)) return s.get(a);
    r += 1;
    const l = `#${r.toString(16).padStart(8, "0").toLowerCase()}`;
    return t.colorReplacements?.[`#${l}`] ? o(a) : (s.set(a, l), l);
  }
  t.settings = t.settings.map((a) => {
    const l = a.settings?.foreground && !a.settings.foreground.startsWith("#"), c = a.settings?.background && !a.settings.background.startsWith("#");
    if (!l && !c) return a;
    const u = {
      ...a,
      settings: { ...a.settings }
    };
    if (l) {
      const d = o(a.settings.foreground);
      t.colorReplacements[d] = a.settings.foreground, u.settings.foreground = d;
    }
    if (c) {
      const d = o(a.settings.background);
      t.colorReplacements[d] = a.settings.background, u.settings.background = d;
    }
    return u;
  });
  for (const a of Object.keys(t.colors || {})) if ((a === "editor.foreground" || a === "editor.background" || a.startsWith("terminal.ansi")) && !t.colors[a]?.startsWith("#")) {
    const l = o(t.colors[a]);
    t.colorReplacements[l] = t.colors[a], t.colors[a] = l;
  }
  return Object.defineProperty(t, er, {
    enumerable: false,
    writable: false,
    value: true
  }), t;
}
async function _s(e) {
  return [...new Set((await Promise.all(e.filter((t) => !Rs(t)).map(async (t) => await Es(t).then((n) => Array.isArray(n) ? n : [n])))).flat())];
}
async function As(e) {
  return (await Promise.all(e.map(async (t) => Ls(t) ? null : Ci(await Es(t))))).filter((t) => !!t);
}
function Ts(e, t) {
  if (!t) return e;
  if (t[e]) {
    const n = /* @__PURE__ */ new Set([e]);
    for (; t[e]; ) {
      if (e = t[e], n.has(e)) throw new T(`Circular alias \`${[...n].join(" -> ")} -> ${e}\``);
      n.add(e);
    }
  }
  return e;
}
var Da = class extends Fa {
  constructor(t, n, i, r = {}) {
    super(t);
    p(this, "_resolver");
    p(this, "_themes");
    p(this, "_langs");
    p(this, "_alias");
    p(this, "_resolvedThemes", /* @__PURE__ */ new Map());
    p(this, "_resolvedGrammars", /* @__PURE__ */ new Map());
    p(this, "_langMap", /* @__PURE__ */ new Map());
    p(this, "_langGraph", /* @__PURE__ */ new Map());
    p(this, "_textmateThemeCache", /* @__PURE__ */ new WeakMap());
    p(this, "_loadedThemesCache", null);
    p(this, "_loadedLanguagesCache", null);
    this._resolver = t, this._themes = n, this._langs = i, this._alias = r, this._themes.map((s) => this.loadTheme(s)), this.loadLanguages(this._langs);
  }
  getTheme(t) {
    return typeof t == "string" ? this._resolvedThemes.get(t) : this.loadTheme(t);
  }
  loadTheme(t) {
    const n = Ci(t);
    return n.name && (this._resolvedThemes.set(n.name, n), this._loadedThemesCache = null), n;
  }
  getLoadedThemes() {
    return this._loadedThemesCache || (this._loadedThemesCache = [...this._resolvedThemes.keys()]), this._loadedThemesCache;
  }
  setTheme(t) {
    let n = this._textmateThemeCache.get(t);
    n || (n = Yt.createFromRawTheme(t), this._textmateThemeCache.set(t, n)), this._syncRegistry.setTheme(n);
  }
  getGrammar(t) {
    return t = Ts(t, this._alias), this._resolvedGrammars.get(t);
  }
  loadLanguage(t) {
    if (this.getGrammar(t.name)) return;
    const n = new Set([...this._langMap.values()].filter((s) => s.embeddedLangsLazy?.includes(t.name)));
    this._resolver.addLanguage(t);
    const i = {
      balancedBracketSelectors: t.balancedBracketSelectors || ["*"],
      unbalancedBracketSelectors: t.unbalancedBracketSelectors || []
    };
    this._syncRegistry._rawGrammars.set(t.scopeName, t);
    const r = this.loadGrammarWithConfiguration(t.scopeName, 1, i);
    if (r.name = t.name, this._resolvedGrammars.set(t.name, r), t.aliases && t.aliases.forEach((s) => {
      this._alias[s] = t.name;
    }), this._loadedLanguagesCache = null, n.size) for (const s of n)
      this._syncRegistry?._grammars?.get(s.scopeName)?.dispose(), this._resolvedGrammars.delete(s.name), this._loadedLanguagesCache = null, this._syncRegistry?._injectionGrammars?.delete(s.scopeName), this._syncRegistry?._grammars?.delete(s.scopeName), this.loadLanguage(this._langMap.get(s.name));
  }
  dispose() {
    super.dispose(), this._resolvedThemes.clear(), this._resolvedGrammars.clear(), this._langMap.clear(), this._langGraph.clear(), this._loadedThemesCache = null;
  }
  loadLanguages(t) {
    for (const r of t) this.resolveEmbeddedLanguages(r);
    const n = [...this._langGraph.entries()], i = n.filter(([r, s]) => !s);
    if (i.length) {
      const r = n.filter(([s, o]) => o ? (o.embeddedLanguages || o.embeddedLangs)?.some((a) => i.map(([l]) => l).includes(a)) : false).filter((s) => !i.includes(s));
      throw new T(`Missing languages ${i.map(([s]) => `\`${s}\``).join(", ")}, required by ${r.map(([s]) => `\`${s}\``).join(", ")}`);
    }
    for (const [r, s] of n) this._resolver.addLanguage(s);
    for (const [r, s] of n) this.loadLanguage(s);
  }
  getLoadedLanguages() {
    return this._loadedLanguagesCache || (this._loadedLanguagesCache = [.../* @__PURE__ */ new Set([...this._resolvedGrammars.keys(), ...Object.keys(this._alias)])]), this._loadedLanguagesCache;
  }
  resolveEmbeddedLanguages(t) {
    this._langMap.set(t.name, t), this._langGraph.set(t.name, t);
    const n = t.embeddedLanguages ?? t.embeddedLangs;
    if (n) for (const i of n) this._langGraph.set(i, this._langMap.get(i));
  }
};
var Ua = class {
  constructor(e, t) {
    p(this, "_langs", /* @__PURE__ */ new Map());
    p(this, "_scopeToLang", /* @__PURE__ */ new Map());
    p(this, "_injections", /* @__PURE__ */ new Map());
    p(this, "_onigLib");
    this._onigLib = {
      createOnigScanner: (n) => e.createScanner(n),
      createOnigString: (n) => e.createString(n)
    }, t.forEach((n) => this.addLanguage(n));
  }
  get onigLib() {
    return this._onigLib;
  }
  getLangRegistration(e) {
    return this._langs.get(e);
  }
  loadGrammar(e) {
    return this._scopeToLang.get(e);
  }
  addLanguage(e) {
    this._langs.set(e.name, e), e.aliases && e.aliases.forEach((t) => {
      this._langs.set(t, e);
    }), this._scopeToLang.set(e.scopeName, e), e.injectTo && e.injectTo.forEach((t) => {
      this._injections.get(t) || this._injections.set(t, []), this._injections.get(t).includes(e.scopeName) || this._injections.get(t).push(e.scopeName);
    });
  }
  getInjections(e) {
    const t = e.split(".");
    let n = [];
    for (let i = 1; i <= t.length; i++) {
      const r = t.slice(0, i).join(".");
      n = [...n, ...this._injections.get(r) || []];
    }
    return n;
  }
};
var st = 0;
function za(e) {
  st += 1, e.warnings !== false && st >= 10 && st % 10 === 0 && console.warn(`[Shiki] ${st} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
  let t = false;
  if (!e.engine) throw new T("`engine` option is required for synchronous mode");
  const n = (e.langs || []).flat(1), i = (e.themes || []).flat(1).map(Ci), r = new Da(new Ua(e.engine, n), i, n, e.langAlias);
  let s;
  function o(b) {
    return Ts(b, e.langAlias);
  }
  function a(b) {
    v();
    const w = r.getGrammar(typeof b == "string" ? b : b.name);
    if (!w) throw new T(`Language \`${b}\` not found, you may need to load it first`);
    return w;
  }
  function l(b) {
    if (b === "none") return {
      bg: "",
      fg: "",
      name: "none",
      settings: [],
      type: "dark"
    };
    v();
    const w = r.getTheme(b);
    if (!w) throw new T(`Theme \`${b}\` not found, you may need to load it first`);
    return w;
  }
  function c(b) {
    v();
    const w = l(b);
    return s !== b && (r.setTheme(w), s = b), {
      theme: w,
      colorMap: r.getColorMap()
    };
  }
  function u() {
    return v(), r.getLoadedThemes();
  }
  function d() {
    return v(), r.getLoadedLanguages();
  }
  function h(...b) {
    v(), r.loadLanguages(b.flat(1));
  }
  async function f(...b) {
    return h(await _s(b));
  }
  function g(...b) {
    v();
    for (const w of b.flat(1)) r.loadTheme(w);
  }
  async function y(...b) {
    return v(), g(await As(b));
  }
  function v() {
    if (t) throw new T("Shiki instance has been disposed");
  }
  function m() {
    t || (t = true, r.dispose(), st -= 1);
  }
  return {
    setTheme: c,
    getTheme: l,
    getLanguage: a,
    getLoadedThemes: u,
    getLoadedLanguages: d,
    resolveLangAlias: o,
    loadLanguage: f,
    loadLanguageSync: h,
    loadTheme: y,
    loadThemeSync: g,
    dispose: m,
    [Symbol.dispose]: m
  };
}
async function Ba(e) {
  e.engine || console.warn("`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine.");
  const [t, n, i] = await Promise.all([
    As(e.themes || []),
    _s(e.langs || []),
    e.engine
  ]);
  return za({
    ...e,
    themes: t,
    langs: n,
    engine: i
  });
}
var Ms = /* @__PURE__ */ new WeakMap();
function dn(e, t) {
  Ms.set(e, t);
}
function vt(e) {
  return Ms.get(e);
}
var hn = class Is {
  constructor(...t) {
    p(this, "_stacks", {});
    p(this, "lang");
    if (t.length === 2) {
      const [n, i] = t;
      this.lang = i, this._stacks = n;
    } else {
      const [n, i, r] = t;
      this.lang = i, this._stacks = { [r]: n };
    }
  }
  get themes() {
    return Object.keys(this._stacks);
  }
  get theme() {
    return this.themes[0];
  }
  get _stack() {
    return this._stacks[this.theme];
  }
  /**
  * Static method to create a initial grammar state.
  */
  static initial(t, n) {
    return new Is(Object.fromEntries(Ha(n).map((i) => [i, Jn])), t);
  }
  /**
  * Get the internal stack object.
  * @internal
  */
  getInternalStack(t = this.theme) {
    return this._stacks[t];
  }
  getScopes(t = this.theme) {
    return Ga(this._stacks[t]);
  }
  toJSON() {
    return {
      lang: this.lang,
      theme: this.theme,
      themes: this.themes,
      scopes: this.getScopes()
    };
  }
};
function Ga(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  function i(r) {
    if (n.has(r)) return;
    n.add(r);
    const s = r?.nameScopesList?.scopeName;
    s && t.push(s), r.parent && i(r.parent);
  }
  return i(e), t;
}
function Wa(e, t) {
  if (!(e instanceof hn)) throw new T("Invalid grammar state");
  return e.getInternalStack(t);
}
var ja = /,/;
var Va = / /;
function Ns(e, t, n = {}) {
  const { theme: i = e.getLoadedThemes()[0] } = n;
  if (ln(e.resolveLangAlias(n.lang || "text")) || cn(i)) return un(t).map((a) => [{
    content: a[0],
    offset: a[1]
  }]);
  const { theme: r, colorMap: s } = e.setTheme(i), o = e.getLanguage(n.lang || "text");
  if (n.grammarState) {
    if (n.grammarState.lang !== o.name) throw new T(`Grammar state language "${n.grammarState.lang}" does not match highlight language "${o.name}"`);
    if (!n.grammarState.themes.includes(r.name)) throw new T(`Grammar state themes "${n.grammarState.themes}" do not contain highlight theme "${r.name}"`);
  }
  return Ka(t, o, r, s, n);
}
function qa(...e) {
  if (e.length === 2) return vt(e[1]);
  const [t, n, i = {}] = e, { lang: r = "text", theme: s = t.getLoadedThemes()[0] } = i;
  if (ln(r) || cn(s)) throw new T("Plain language does not have grammar state");
  if (r === "ansi") throw new T("ANSI language does not have grammar state");
  const { theme: o, colorMap: a } = t.setTheme(s), l = t.getLanguage(r);
  return new hn(xi(n, l, o, a, i).stateStack, l.name, o.name);
}
function Ka(e, t, n, i, r) {
  const s = xi(e, t, n, i, r), o = new hn(s.stateStack, t.name, n.name);
  return dn(s.tokens, o), s.tokens;
}
function xi(e, t, n, i, r) {
  const s = tn(n, r), { tokenizeMaxLineLength: o = 0, tokenizeTimeLimit: a = 500, includeExplanation: l = false } = r, c = un(e);
  let u = r.grammarState ? Wa(r.grammarState, n.name) ?? Jn : r.grammarContextCode != null ? xi(r.grammarContextCode, t, n, i, {
    ...r,
    grammarState: void 0,
    grammarContextCode: void 0
  }).stateStack : Jn, d = [];
  const h = [];
  for (let f = 0, g = c.length; f < g; f++) {
    const [y, v] = c[f];
    if (y === "") {
      d = [], h.push([]);
      continue;
    }
    if (o > 0 && y.length >= o) {
      d = [], h.push([{
        content: y,
        offset: v,
        color: "",
        fontStyle: 0
      }]);
      continue;
    }
    let m, b, w;
    l && l !== "tokenType" && (m = t.tokenizeLine(y, u, a), b = m.tokens, w = 0);
    const C = t.tokenizeLine2(y, u, a), E = C.tokens.length / 2;
    for (let L = 0; L < E; L++) {
      const R = C.tokens[2 * L], I = L + 1 < E ? C.tokens[2 * L + 2] : y.length;
      if (R === I) continue;
      const M = C.tokens[2 * L + 1], q = Re(i[$e.getForeground(M)], s), ye = $e.getFontStyle(M), W = {
        content: y.substring(R, I),
        offset: v + R,
        color: q,
        fontStyle: ye
      };
      if (l === "tokenType") W.type = $e.getTokenType(M);
      else if (l) {
        const ve = [];
        if (l !== "scopeName") for (const Y of n.settings) {
          let we;
          switch (typeof Y.scope) {
            case "string":
              we = Y.scope.split(ja).map((Ae) => Ae.trim());
              break;
            case "object":
              we = Y.scope;
              break;
            default:
              continue;
          }
          ve.push({
            settings: Y,
            selectors: we.map((Ae) => Ae.split(Va))
          });
        }
        W.explanation = [];
        let Et = 0;
        for (; R + Et < I; ) {
          const Y = b[w], we = y.substring(Y.startIndex, Y.endIndex);
          Et += we.length, W.explanation.push({
            content: we,
            scopes: l === "scopeName" ? Xa(Y.scopes) : Ya(ve, Y.scopes)
          }), w += 1;
        }
      }
      d.push(W);
    }
    h.push(d), d = [], u = C.ruleStack;
  }
  return {
    tokens: h,
    stateStack: u
  };
}
function Xa(e) {
  return e.map((t) => ({ scopeName: t }));
}
function Ya(e, t) {
  const n = [];
  for (let i = 0, r = t.length; i < r; i++) {
    const s = t[i];
    n[i] = {
      scopeName: s,
      themeMatches: Za(e, s, t.slice(0, i))
    };
  }
  return n;
}
function tr(e, t) {
  return e === t || t.substring(0, e.length) === e && t[e.length] === ".";
}
function Qa(e, t, n) {
  if (!tr(e.at(-1), t)) return false;
  let i = e.length - 2, r = n.length - 1;
  for (; i >= 0 && r >= 0; )
    tr(e[i], n[r]) && (i -= 1), r -= 1;
  return i === -1;
}
function Za(e, t, n) {
  const i = [];
  for (const { selectors: r, settings: s } of e) for (const o of r) if (Qa(o, t, n)) {
    i.push(s);
    break;
  }
  return i;
}
function Ps(e, t, n, i = Ns) {
  const r = Object.entries(n.themes).filter((c) => c[1]).map((c) => ({
    color: c[0],
    theme: c[1]
  })), s = r.map((c) => {
    const u = i(e, t, {
      ...n,
      theme: c.theme
    });
    return {
      tokens: u,
      state: vt(u),
      theme: typeof c.theme == "string" ? c.theme : c.theme.name
    };
  }), o = Ja(...s.map((c) => c.tokens)), a = o[0].map((c, u) => c.map((d, h) => {
    const f = {
      content: d.content,
      variants: {},
      offset: d.offset
    };
    return "includeExplanation" in n && n.includeExplanation && (f.explanation = d.explanation), o.forEach((g, y) => {
      const { content: v, explanation: m, offset: b, ...w } = g[u][h];
      f.variants[r[y].color] = w;
    }), f;
  })), l = s[0].state ? new hn(Object.fromEntries(s.map((c) => [c.theme, c.state?.getInternalStack(c.theme)])), s[0].state.lang) : void 0;
  return l && dn(a, l), a;
}
function Ja(...e) {
  const t = e.map(() => []), n = e.length;
  for (let i = 0; i < e[0].length; i++) {
    const r = e.map((l) => l[i]), s = t.map(() => []);
    t.forEach((l, c) => l.push(s[c]));
    const o = r.map(() => 0), a = r.map((l) => l[0]);
    for (; a.every((l) => l); ) {
      const l = Math.min(...a.map((c) => c.content.length));
      for (let c = 0; c < n; c++) {
        const u = a[c];
        u.content.length === l ? (s[c].push(u), o[c] += 1, a[c] = r[c][o[c]]) : (s[c].push({
          ...u,
          content: u.content.slice(0, l)
        }), a[c] = {
          ...u,
          content: u.content.slice(l),
          offset: u.offset + l
        });
      }
    }
  }
  return t;
}
var el = [
  "area",
  "base",
  "basefont",
  "bgsound",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "image",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];
var xt = class {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(t, n, i) {
    this.normal = n, this.property = t, i && (this.space = i);
  }
};
xt.prototype.normal = {};
xt.prototype.property = {};
xt.prototype.space = void 0;
function Os(e, t) {
  const n = {}, i = {};
  for (const r of e)
    Object.assign(n, r.property), Object.assign(i, r.normal);
  return new xt(n, i, t);
}
function ei(e) {
  return e.toLowerCase();
}
var X = class {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(t, n) {
    this.attribute = n, this.property = t;
  }
};
X.prototype.attribute = "";
X.prototype.booleanish = false;
X.prototype.boolean = false;
X.prototype.commaOrSpaceSeparated = false;
X.prototype.commaSeparated = false;
X.prototype.defined = false;
X.prototype.mustUseProperty = false;
X.prototype.number = false;
X.prototype.overloadedBoolean = false;
X.prototype.property = "";
X.prototype.spaceSeparated = false;
X.prototype.space = void 0;
var tl = 0;
var x = Be();
var P = Be();
var ti = Be();
var S = Be();
var A = Be();
var De = Be();
var Q = Be();
function Be() {
  return 2 ** ++tl;
}
var ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: x,
  booleanish: P,
  commaOrSpaceSeparated: Q,
  commaSeparated: De,
  number: S,
  overloadedBoolean: ti,
  spaceSeparated: A
}, Symbol.toStringTag, { value: "Module" }));
var Rn = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(ni)
);
var ki = class extends X {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(t, n, i, r) {
    let s = -1;
    if (super(t, n), nr(this, "space", r), typeof i == "number")
      for (; ++s < Rn.length; ) {
        const o = Rn[s];
        nr(this, Rn[s], (i & ni[o]) === ni[o]);
      }
  }
};
ki.prototype.defined = true;
function nr(e, t, n) {
  n && (e[t] = n);
}
function et(e) {
  const t = {}, n = {};
  for (const [i, r] of Object.entries(e.properties)) {
    const s = new ki(
      i,
      e.transform(e.attributes || {}, i),
      r,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(i) && (s.mustUseProperty = true), t[i] = s, n[ei(i)] = i, n[ei(s.attribute)] = i;
  }
  return new xt(t, n, e.space);
}
var Fs = et({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: P,
    ariaAutoComplete: null,
    ariaBusy: P,
    ariaChecked: P,
    ariaColCount: S,
    ariaColIndex: S,
    ariaColSpan: S,
    ariaControls: A,
    ariaCurrent: null,
    ariaDescribedBy: A,
    ariaDetails: null,
    ariaDisabled: P,
    ariaDropEffect: A,
    ariaErrorMessage: null,
    ariaExpanded: P,
    ariaFlowTo: A,
    ariaGrabbed: P,
    ariaHasPopup: null,
    ariaHidden: P,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: A,
    ariaLevel: S,
    ariaLive: null,
    ariaModal: P,
    ariaMultiLine: P,
    ariaMultiSelectable: P,
    ariaOrientation: null,
    ariaOwns: A,
    ariaPlaceholder: null,
    ariaPosInSet: S,
    ariaPressed: P,
    ariaReadOnly: P,
    ariaRelevant: null,
    ariaRequired: P,
    ariaRoleDescription: A,
    ariaRowCount: S,
    ariaRowIndex: S,
    ariaRowSpan: S,
    ariaSelected: P,
    ariaSetSize: S,
    ariaSort: null,
    ariaValueMax: S,
    ariaValueMin: S,
    ariaValueNow: S,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function Hs(e, t) {
  return t in e ? e[t] : t;
}
function $s(e, t) {
  return Hs(e, t.toLowerCase());
}
var nl = et({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: De,
    acceptCharset: A,
    accessKey: A,
    action: null,
    allow: null,
    allowFullScreen: x,
    allowPaymentRequest: x,
    allowUserMedia: x,
    alpha: x,
    alt: null,
    as: null,
    async: x,
    autoCapitalize: null,
    autoComplete: A,
    autoFocus: x,
    autoPlay: x,
    blocking: A,
    capture: null,
    charSet: null,
    checked: x,
    cite: null,
    className: A,
    closedBy: null,
    colorSpace: null,
    cols: S,
    colSpan: S,
    command: null,
    commandFor: null,
    content: null,
    contentEditable: P,
    controls: x,
    controlsList: A,
    coords: S | De,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: x,
    defer: x,
    dir: null,
    dirName: null,
    disabled: x,
    download: ti,
    draggable: P,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: x,
    formTarget: null,
    headers: A,
    height: S,
    hidden: ti,
    high: S,
    href: null,
    hrefLang: null,
    htmlFor: A,
    httpEquiv: A,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: x,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: x,
    itemId: null,
    itemProp: A,
    itemRef: A,
    itemScope: x,
    itemType: A,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: x,
    low: S,
    manifest: null,
    max: null,
    maxLength: S,
    media: null,
    method: null,
    min: null,
    minLength: S,
    multiple: x,
    muted: x,
    name: null,
    nonce: null,
    noModule: x,
    noValidate: x,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: x,
    optimum: S,
    pattern: null,
    ping: A,
    placeholder: null,
    playsInline: x,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: x,
    referrerPolicy: null,
    rel: A,
    required: x,
    reversed: x,
    rows: S,
    rowSpan: S,
    sandbox: A,
    scope: null,
    scoped: x,
    seamless: x,
    selected: x,
    shadowRootClonable: x,
    shadowRootCustomElementRegistry: x,
    shadowRootDelegatesFocus: x,
    shadowRootMode: null,
    shadowRootSerializable: x,
    shape: null,
    size: S,
    sizes: null,
    slot: null,
    span: S,
    spellCheck: P,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: S,
    step: null,
    style: null,
    tabIndex: S,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: x,
    useMap: null,
    value: P,
    width: S,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: A,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: S,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: S,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: x,
    // Lists. Use CSS to reduce space between items instead
    declare: x,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: S,
    // `<img>` and `<object>`
    leftMargin: S,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: S,
    // `<body>`
    marginWidth: S,
    // `<body>`
    noResize: x,
    // `<frame>`
    noHref: x,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: x,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: x,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: S,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: P,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: S,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: S,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    credentialless: x,
    disablePictureInPicture: x,
    disableRemotePlayback: x,
    exportParts: De,
    part: A,
    prefix: null,
    property: null,
    results: S,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: $s
});
var il = et({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    maskType: "mask-type",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: Q,
    accentHeight: S,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: S,
    amplitude: S,
    arabicForm: null,
    ascent: S,
    attributeName: null,
    attributeType: null,
    azimuth: S,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: S,
    by: null,
    calcMode: null,
    capHeight: S,
    className: A,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: S,
    diffuseConstant: S,
    direction: null,
    display: null,
    dur: null,
    divisor: S,
    dominantBaseline: null,
    download: x,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: S,
    enableBackground: null,
    end: null,
    event: null,
    exponent: S,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: S,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: De,
    g2: De,
    glyphName: De,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: S,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: S,
    horizOriginX: S,
    horizOriginY: S,
    id: null,
    ideographic: S,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: S,
    k: S,
    k1: S,
    k2: S,
    k3: S,
    k4: S,
    kernelMatrix: Q,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: S,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskType: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: S,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: S,
    overlineThickness: S,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: S,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: A,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: S,
    pointsAtY: S,
    pointsAtZ: S,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Q,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Q,
    rev: Q,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Q,
    requiredFeatures: Q,
    requiredFonts: Q,
    requiredFormats: Q,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: S,
    specularExponent: S,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: S,
    strikethroughThickness: S,
    string: null,
    stroke: null,
    strokeDashArray: Q,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: S,
    strokeOpacity: S,
    strokeWidth: null,
    style: null,
    surfaceScale: S,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Q,
    tabIndex: S,
    tableValues: null,
    target: null,
    targetX: S,
    targetY: S,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Q,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: S,
    underlineThickness: S,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: S,
    values: null,
    vAlphabetic: S,
    vMathematical: S,
    vectorEffect: null,
    vHanging: S,
    vIdeographic: S,
    version: null,
    vertAdvY: S,
    vertOriginX: S,
    vertOriginY: S,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: S,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Hs
});
var Ds = et({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  }
});
var Us = et({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: $s
});
var zs = et({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
});
var rl = /[A-Z]/g;
var ir = /-[a-z]/g;
var sl = /^data[-\w.:]+$/i;
function ol(e, t) {
  const n = ei(t);
  let i = t, r = X;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && sl.test(t)) {
    if (t.charAt(4) === "-") {
      const s = t.slice(5).replace(ir, ll);
      i = "data" + s.charAt(0).toUpperCase() + s.slice(1);
    } else {
      const s = t.slice(4);
      if (!ir.test(s)) {
        let o = s.replace(rl, al);
        o.charAt(0) !== "-" && (o = "-" + o), t = "data" + o;
      }
    }
    r = ki;
  }
  return new r(i, t);
}
function al(e) {
  return "-" + e.toLowerCase();
}
function ll(e) {
  return e.charAt(1).toUpperCase();
}
var cl = Os([Fs, nl, Ds, Us, zs], "html");
var Bs = Os([Fs, il, Ds, Us, zs], "svg");
var rr = {}.hasOwnProperty;
function ul(e, t) {
  const n = t || {};
  function i(r, ...s) {
    let o = i.invalid;
    const a = i.handlers;
    if (r && rr.call(r, e)) {
      const l = String(r[e]);
      o = rr.call(a, l) ? a[l] : i.unknown;
    }
    if (o)
      return o.call(this, r, ...s);
  }
  return i.handlers = n.handlers || {}, i.invalid = n.invalid, i.unknown = n.unknown, i;
}
var dl = /["&'<>`]/g;
var hl = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
var fl = (
  // eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
  /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g
);
var pl = /[|\\{}()[\]^$+*?.]/g;
var sr = /* @__PURE__ */ new WeakMap();
function gl(e, t) {
  if (e = e.replace(
    t.subset ? ml(t.subset) : dl,
    i
  ), t.subset || t.escapeOnly)
    return e;
  return e.replace(hl, n).replace(fl, i);
  function n(r, s, o) {
    return t.format(
      (r.charCodeAt(0) - 55296) * 1024 + r.charCodeAt(1) - 56320 + 65536,
      o.charCodeAt(s + 2),
      t
    );
  }
  function i(r, s, o) {
    return t.format(
      r.charCodeAt(0),
      o.charCodeAt(s + 1),
      t
    );
  }
}
function ml(e) {
  let t = sr.get(e);
  return t || (t = bl(e), sr.set(e, t)), t;
}
function bl(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t.push(e[n].replace(pl, "\\$&"));
  return new RegExp("(?:" + t.join("|") + ")", "g");
}
var yl = /[\dA-Fa-f]/;
function vl(e, t, n) {
  const i = "&#x" + e.toString(16).toUpperCase();
  return n && t && !yl.test(String.fromCharCode(t)) ? i : i + ";";
}
var wl = /\d/;
function Sl(e, t, n) {
  const i = "&#" + String(e);
  return n && t && !wl.test(String.fromCharCode(t)) ? i : i + ";";
}
var Cl = [
  "AElig",
  "AMP",
  "Aacute",
  "Acirc",
  "Agrave",
  "Aring",
  "Atilde",
  "Auml",
  "COPY",
  "Ccedil",
  "ETH",
  "Eacute",
  "Ecirc",
  "Egrave",
  "Euml",
  "GT",
  "Iacute",
  "Icirc",
  "Igrave",
  "Iuml",
  "LT",
  "Ntilde",
  "Oacute",
  "Ocirc",
  "Ograve",
  "Oslash",
  "Otilde",
  "Ouml",
  "QUOT",
  "REG",
  "THORN",
  "Uacute",
  "Ucirc",
  "Ugrave",
  "Uuml",
  "Yacute",
  "aacute",
  "acirc",
  "acute",
  "aelig",
  "agrave",
  "amp",
  "aring",
  "atilde",
  "auml",
  "brvbar",
  "ccedil",
  "cedil",
  "cent",
  "copy",
  "curren",
  "deg",
  "divide",
  "eacute",
  "ecirc",
  "egrave",
  "eth",
  "euml",
  "frac12",
  "frac14",
  "frac34",
  "gt",
  "iacute",
  "icirc",
  "iexcl",
  "igrave",
  "iquest",
  "iuml",
  "laquo",
  "lt",
  "macr",
  "micro",
  "middot",
  "nbsp",
  "not",
  "ntilde",
  "oacute",
  "ocirc",
  "ograve",
  "ordf",
  "ordm",
  "oslash",
  "otilde",
  "ouml",
  "para",
  "plusmn",
  "pound",
  "quot",
  "raquo",
  "reg",
  "sect",
  "shy",
  "sup1",
  "sup2",
  "sup3",
  "szlig",
  "thorn",
  "times",
  "uacute",
  "ucirc",
  "ugrave",
  "uml",
  "uuml",
  "yacute",
  "yen",
  "yuml"
];
var Ln = {
  nbsp: "\xA0",
  iexcl: "\xA1",
  cent: "\xA2",
  pound: "\xA3",
  curren: "\xA4",
  yen: "\xA5",
  brvbar: "\xA6",
  sect: "\xA7",
  uml: "\xA8",
  copy: "\xA9",
  ordf: "\xAA",
  laquo: "\xAB",
  not: "\xAC",
  shy: "\xAD",
  reg: "\xAE",
  macr: "\xAF",
  deg: "\xB0",
  plusmn: "\xB1",
  sup2: "\xB2",
  sup3: "\xB3",
  acute: "\xB4",
  micro: "\xB5",
  para: "\xB6",
  middot: "\xB7",
  cedil: "\xB8",
  sup1: "\xB9",
  ordm: "\xBA",
  raquo: "\xBB",
  frac14: "\xBC",
  frac12: "\xBD",
  frac34: "\xBE",
  iquest: "\xBF",
  Agrave: "\xC0",
  Aacute: "\xC1",
  Acirc: "\xC2",
  Atilde: "\xC3",
  Auml: "\xC4",
  Aring: "\xC5",
  AElig: "\xC6",
  Ccedil: "\xC7",
  Egrave: "\xC8",
  Eacute: "\xC9",
  Ecirc: "\xCA",
  Euml: "\xCB",
  Igrave: "\xCC",
  Iacute: "\xCD",
  Icirc: "\xCE",
  Iuml: "\xCF",
  ETH: "\xD0",
  Ntilde: "\xD1",
  Ograve: "\xD2",
  Oacute: "\xD3",
  Ocirc: "\xD4",
  Otilde: "\xD5",
  Ouml: "\xD6",
  times: "\xD7",
  Oslash: "\xD8",
  Ugrave: "\xD9",
  Uacute: "\xDA",
  Ucirc: "\xDB",
  Uuml: "\xDC",
  Yacute: "\xDD",
  THORN: "\xDE",
  szlig: "\xDF",
  agrave: "\xE0",
  aacute: "\xE1",
  acirc: "\xE2",
  atilde: "\xE3",
  auml: "\xE4",
  aring: "\xE5",
  aelig: "\xE6",
  ccedil: "\xE7",
  egrave: "\xE8",
  eacute: "\xE9",
  ecirc: "\xEA",
  euml: "\xEB",
  igrave: "\xEC",
  iacute: "\xED",
  icirc: "\xEE",
  iuml: "\xEF",
  eth: "\xF0",
  ntilde: "\xF1",
  ograve: "\xF2",
  oacute: "\xF3",
  ocirc: "\xF4",
  otilde: "\xF5",
  ouml: "\xF6",
  divide: "\xF7",
  oslash: "\xF8",
  ugrave: "\xF9",
  uacute: "\xFA",
  ucirc: "\xFB",
  uuml: "\xFC",
  yacute: "\xFD",
  thorn: "\xFE",
  yuml: "\xFF",
  fnof: "\u0192",
  Alpha: "\u0391",
  Beta: "\u0392",
  Gamma: "\u0393",
  Delta: "\u0394",
  Epsilon: "\u0395",
  Zeta: "\u0396",
  Eta: "\u0397",
  Theta: "\u0398",
  Iota: "\u0399",
  Kappa: "\u039A",
  Lambda: "\u039B",
  Mu: "\u039C",
  Nu: "\u039D",
  Xi: "\u039E",
  Omicron: "\u039F",
  Pi: "\u03A0",
  Rho: "\u03A1",
  Sigma: "\u03A3",
  Tau: "\u03A4",
  Upsilon: "\u03A5",
  Phi: "\u03A6",
  Chi: "\u03A7",
  Psi: "\u03A8",
  Omega: "\u03A9",
  alpha: "\u03B1",
  beta: "\u03B2",
  gamma: "\u03B3",
  delta: "\u03B4",
  epsilon: "\u03B5",
  zeta: "\u03B6",
  eta: "\u03B7",
  theta: "\u03B8",
  iota: "\u03B9",
  kappa: "\u03BA",
  lambda: "\u03BB",
  mu: "\u03BC",
  nu: "\u03BD",
  xi: "\u03BE",
  omicron: "\u03BF",
  pi: "\u03C0",
  rho: "\u03C1",
  sigmaf: "\u03C2",
  sigma: "\u03C3",
  tau: "\u03C4",
  upsilon: "\u03C5",
  phi: "\u03C6",
  chi: "\u03C7",
  psi: "\u03C8",
  omega: "\u03C9",
  thetasym: "\u03D1",
  upsih: "\u03D2",
  piv: "\u03D6",
  bull: "\u2022",
  hellip: "\u2026",
  prime: "\u2032",
  Prime: "\u2033",
  oline: "\u203E",
  frasl: "\u2044",
  weierp: "\u2118",
  image: "\u2111",
  real: "\u211C",
  trade: "\u2122",
  alefsym: "\u2135",
  larr: "\u2190",
  uarr: "\u2191",
  rarr: "\u2192",
  darr: "\u2193",
  harr: "\u2194",
  crarr: "\u21B5",
  lArr: "\u21D0",
  uArr: "\u21D1",
  rArr: "\u21D2",
  dArr: "\u21D3",
  hArr: "\u21D4",
  forall: "\u2200",
  part: "\u2202",
  exist: "\u2203",
  empty: "\u2205",
  nabla: "\u2207",
  isin: "\u2208",
  notin: "\u2209",
  ni: "\u220B",
  prod: "\u220F",
  sum: "\u2211",
  minus: "\u2212",
  lowast: "\u2217",
  radic: "\u221A",
  prop: "\u221D",
  infin: "\u221E",
  ang: "\u2220",
  and: "\u2227",
  or: "\u2228",
  cap: "\u2229",
  cup: "\u222A",
  int: "\u222B",
  there4: "\u2234",
  sim: "\u223C",
  cong: "\u2245",
  asymp: "\u2248",
  ne: "\u2260",
  equiv: "\u2261",
  le: "\u2264",
  ge: "\u2265",
  sub: "\u2282",
  sup: "\u2283",
  nsub: "\u2284",
  sube: "\u2286",
  supe: "\u2287",
  oplus: "\u2295",
  otimes: "\u2297",
  perp: "\u22A5",
  sdot: "\u22C5",
  lceil: "\u2308",
  rceil: "\u2309",
  lfloor: "\u230A",
  rfloor: "\u230B",
  lang: "\u2329",
  rang: "\u232A",
  loz: "\u25CA",
  spades: "\u2660",
  clubs: "\u2663",
  hearts: "\u2665",
  diams: "\u2666",
  quot: '"',
  amp: "&",
  lt: "<",
  gt: ">",
  OElig: "\u0152",
  oelig: "\u0153",
  Scaron: "\u0160",
  scaron: "\u0161",
  Yuml: "\u0178",
  circ: "\u02C6",
  tilde: "\u02DC",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "\u200C",
  zwj: "\u200D",
  lrm: "\u200E",
  rlm: "\u200F",
  ndash: "\u2013",
  mdash: "\u2014",
  lsquo: "\u2018",
  rsquo: "\u2019",
  sbquo: "\u201A",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bdquo: "\u201E",
  dagger: "\u2020",
  Dagger: "\u2021",
  permil: "\u2030",
  lsaquo: "\u2039",
  rsaquo: "\u203A",
  euro: "\u20AC"
};
var xl = [
  "cent",
  "copy",
  "divide",
  "gt",
  "lt",
  "not",
  "para",
  "times"
];
var Gs = {}.hasOwnProperty;
var ii = {};
var At;
for (At in Ln)
  Gs.call(Ln, At) && (ii[Ln[At]] = At);
var kl = /[^\dA-Za-z]/;
function El(e, t, n, i) {
  const r = String.fromCharCode(e);
  if (Gs.call(ii, r)) {
    const s = ii[r], o = "&" + s;
    return n && Cl.includes(s) && !xl.includes(s) && (!i || t && t !== 61 && kl.test(String.fromCharCode(t))) ? o : o + ";";
  }
  return "";
}
function Rl(e, t, n) {
  let i = vl(e, t, n.omitOptionalSemicolons), r;
  if ((n.useNamedReferences || n.useShortestReferences) && (r = El(
    e,
    t,
    n.omitOptionalSemicolons,
    n.attribute
  )), (n.useShortestReferences || !r) && n.useShortestReferences) {
    const s = Sl(e, t, n.omitOptionalSemicolons);
    s.length < i.length && (i = s);
  }
  return r && (!n.useShortestReferences || r.length < i.length) ? r : i;
}
function Ye(e, t) {
  return gl(e, Object.assign({ format: Rl }, t));
}
var Ll = /^>|^->|<!--|-->|--!>|<!-$/g;
var _l = [">"];
var Al = ["<", ">"];
function Tl(e, t, n, i) {
  return i.settings.bogusComments ? "<?" + Ye(
    e.value,
    Object.assign({}, i.settings.characterReferences, {
      subset: _l
    })
  ) + ">" : "<!--" + e.value.replace(Ll, r) + "-->";
  function r(s) {
    return Ye(
      s,
      Object.assign({}, i.settings.characterReferences, {
        subset: Al
      })
    );
  }
}
function Ml(e, t, n, i) {
  return "<!" + (i.settings.upperDoctype ? "DOCTYPE" : "doctype") + (i.settings.tightDoctype ? "" : " ") + "html>";
}
function or(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let i = 0, r = n.indexOf(t);
  for (; r !== -1; )
    i++, r = n.indexOf(t, r + t.length);
  return i;
}
function Il(e, t) {
  const n = t || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === false ? "" : " ")
  ).trim();
}
function Nl(e) {
  return e.join(" ").trim();
}
var Pl = /[ \t\n\f\r]/g;
function Ei(e) {
  return typeof e == "object" ? e.type === "text" ? ar(e.value) : false : ar(e);
}
function ar(e) {
  return e.replace(Pl, "") === "";
}
var $ = js(1);
var Ws = js(-1);
var Ol = [];
function js(e) {
  return t;
  function t(n, i, r) {
    const s = n ? n.children : Ol;
    let o = (i || 0) + e, a = s[o];
    if (!r)
      for (; a && Ei(a); )
        o += e, a = s[o];
    return a;
  }
}
var Fl = {}.hasOwnProperty;
function Vs(e) {
  return t;
  function t(n, i, r) {
    return Fl.call(e, n.tagName) && e[n.tagName](n, i, r);
  }
}
var Ri = Vs({
  body: $l,
  caption: _n,
  colgroup: _n,
  dd: Bl,
  dt: zl,
  head: _n,
  html: Hl,
  li: Ul,
  optgroup: Gl,
  option: Wl,
  p: Dl,
  rp: lr,
  rt: lr,
  tbody: Vl,
  td: cr,
  tfoot: ql,
  th: cr,
  thead: jl,
  tr: Kl
});
function _n(e, t, n) {
  const i = $(n, t, true);
  return !i || i.type !== "comment" && !(i.type === "text" && Ei(i.value.charAt(0)));
}
function Hl(e, t, n) {
  const i = $(n, t);
  return !i || i.type !== "comment";
}
function $l(e, t, n) {
  const i = $(n, t);
  return !i || i.type !== "comment";
}
function Dl(e, t, n) {
  const i = $(n, t);
  return i ? i.type === "element" && (i.tagName === "address" || i.tagName === "article" || i.tagName === "aside" || i.tagName === "blockquote" || i.tagName === "details" || i.tagName === "div" || i.tagName === "dl" || i.tagName === "fieldset" || i.tagName === "figcaption" || i.tagName === "figure" || i.tagName === "footer" || i.tagName === "form" || i.tagName === "h1" || i.tagName === "h2" || i.tagName === "h3" || i.tagName === "h4" || i.tagName === "h5" || i.tagName === "h6" || i.tagName === "header" || i.tagName === "hgroup" || i.tagName === "hr" || i.tagName === "main" || i.tagName === "menu" || i.tagName === "nav" || i.tagName === "ol" || i.tagName === "p" || i.tagName === "pre" || i.tagName === "section" || i.tagName === "table" || i.tagName === "ul") : !n || // Confusing parent.
  !(n.type === "element" && (n.tagName === "a" || n.tagName === "audio" || n.tagName === "del" || n.tagName === "ins" || n.tagName === "map" || n.tagName === "noscript" || n.tagName === "video"));
}
function Ul(e, t, n) {
  const i = $(n, t);
  return !i || i.type === "element" && i.tagName === "li";
}
function zl(e, t, n) {
  const i = $(n, t);
  return !!(i && i.type === "element" && (i.tagName === "dt" || i.tagName === "dd"));
}
function Bl(e, t, n) {
  const i = $(n, t);
  return !i || i.type === "element" && (i.tagName === "dt" || i.tagName === "dd");
}
function lr(e, t, n) {
  const i = $(n, t);
  return !i || i.type === "element" && (i.tagName === "rp" || i.tagName === "rt");
}
function Gl(e, t, n) {
  const i = $(n, t);
  return !i || i.type === "element" && i.tagName === "optgroup";
}
function Wl(e, t, n) {
  const i = $(n, t);
  return !i || i.type === "element" && (i.tagName === "option" || i.tagName === "optgroup");
}
function jl(e, t, n) {
  const i = $(n, t);
  return !!(i && i.type === "element" && (i.tagName === "tbody" || i.tagName === "tfoot"));
}
function Vl(e, t, n) {
  const i = $(n, t);
  return !i || i.type === "element" && (i.tagName === "tbody" || i.tagName === "tfoot");
}
function ql(e, t, n) {
  return !$(n, t);
}
function Kl(e, t, n) {
  const i = $(n, t);
  return !i || i.type === "element" && i.tagName === "tr";
}
function cr(e, t, n) {
  const i = $(n, t);
  return !i || i.type === "element" && (i.tagName === "td" || i.tagName === "th");
}
var Xl = Vs({
  body: Zl,
  colgroup: Jl,
  head: Ql,
  html: Yl,
  tbody: ec
});
function Yl(e) {
  const t = $(e, -1);
  return !t || t.type !== "comment";
}
function Ql(e) {
  const t = /* @__PURE__ */ new Set();
  for (const i of e.children)
    if (i.type === "element" && (i.tagName === "base" || i.tagName === "title")) {
      if (t.has(i.tagName)) return false;
      t.add(i.tagName);
    }
  const n = e.children[0];
  return !n || n.type === "element";
}
function Zl(e) {
  const t = $(e, -1, true);
  return !t || t.type !== "comment" && !(t.type === "text" && Ei(t.value.charAt(0))) && !(t.type === "element" && (t.tagName === "meta" || t.tagName === "link" || t.tagName === "script" || t.tagName === "style" || t.tagName === "template"));
}
function Jl(e, t, n) {
  const i = Ws(n, t), r = $(e, -1, true);
  return n && i && i.type === "element" && i.tagName === "colgroup" && Ri(i, n.children.indexOf(i), n) ? false : !!(r && r.type === "element" && r.tagName === "col");
}
function ec(e, t, n) {
  const i = Ws(n, t), r = $(e, -1);
  return n && i && i.type === "element" && (i.tagName === "thead" || i.tagName === "tbody") && Ri(i, n.children.indexOf(i), n) ? false : !!(r && r.type === "element" && r.tagName === "tr");
}
var Tt = {
  // See: <https://html.spec.whatwg.org/#attribute-name-state>.
  name: [
    [`	
\f\r &/=>`.split(""), `	
\f\r "&'/=>\``.split("")],
    [`\0	
\f\r "&'/<=>`.split(""), `\0	
\f\r "&'/<=>\``.split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(unquoted)-state>.
  unquoted: [
    [`	
\f\r &>`.split(""), `\0	
\f\r "&'<=>\``.split("")],
    [`\0	
\f\r "&'<=>\``.split(""), `\0	
\f\r "&'<=>\``.split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(single-quoted)-state>.
  single: [
    ["&'".split(""), "\"&'`".split("")],
    ["\0&'".split(""), "\0\"&'`".split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(double-quoted)-state>.
  double: [
    ['"&'.split(""), "\"&'`".split("")],
    ['\0"&'.split(""), "\0\"&'`".split("")]
  ]
};
function tc(e, t, n, i) {
  const r = i.schema, s = r.space === "svg" ? false : i.settings.omitOptionalTags;
  let o = r.space === "svg" ? i.settings.closeEmptyElements : i.settings.voids.includes(e.tagName.toLowerCase());
  const a = [];
  let l;
  r.space === "html" && e.tagName === "svg" && (i.schema = Bs);
  const c = nc(i, e.properties), u = i.all(
    r.space === "html" && e.tagName === "template" ? e.content : e
  );
  return i.schema = r, u && (o = false), (c || !s || !Xl(e, t, n)) && (a.push("<", e.tagName, c ? " " + c : ""), o && (r.space === "svg" || i.settings.closeSelfClosing) && (l = c.charAt(c.length - 1), (!i.settings.tightSelfClosing || l === "/" || l && l !== '"' && l !== "'") && a.push(" "), a.push("/")), a.push(">")), a.push(u), !o && (!s || !Ri(e, t, n)) && a.push("</" + e.tagName + ">"), a.join("");
}
function nc(e, t) {
  const n = [];
  let i = -1, r;
  if (t) {
    for (r in t)
      if (t[r] !== null && t[r] !== void 0) {
        const s = ic(e, r, t[r]);
        s && n.push(s);
      }
  }
  for (; ++i < n.length; ) {
    const s = e.settings.tightAttributes ? n[i].charAt(n[i].length - 1) : void 0;
    i !== n.length - 1 && s !== '"' && s !== "'" && (n[i] += " ");
  }
  return n.join("");
}
function ic(e, t, n) {
  const i = ol(e.schema, t), r = e.settings.allowParseErrors && e.schema.space === "html" ? 0 : 1, s = e.settings.allowDangerousCharacters ? 0 : 1;
  let o = e.quote, a;
  if (i.overloadedBoolean && (n === i.attribute || n === "") ? n = true : (i.boolean || i.overloadedBoolean) && (typeof n != "string" || n === i.attribute || n === "") && (n = !!n), n == null || n === false || typeof n == "number" && Number.isNaN(n))
    return "";
  const l = Ye(
    i.attribute,
    Object.assign({}, e.settings.characterReferences, {
      // Always encode without parse errors in non-HTML.
      subset: Tt.name[r][s]
    })
  );
  return n === true || (n = Array.isArray(n) ? (i.commaSeparated ? Il : Nl)(n, {
    padLeft: !e.settings.tightCommaSeparatedLists
  }) : String(n), e.settings.collapseEmptyAttributes && !n) ? l : (e.settings.preferUnquoted && (a = Ye(
    n,
    Object.assign({}, e.settings.characterReferences, {
      attribute: true,
      subset: Tt.unquoted[r][s]
    })
  )), a !== n && (e.settings.quoteSmart && or(n, o) > or(n, e.alternative) && (o = e.alternative), a = o + Ye(
    n,
    Object.assign({}, e.settings.characterReferences, {
      // Always encode without parse errors in non-HTML.
      subset: (o === "'" ? Tt.single : Tt.double)[r][s],
      attribute: true
    })
  ) + o), l + (a && "=" + a));
}
var rc = ["<", "&"];
function qs(e, t, n, i) {
  return n && n.type === "element" && (n.tagName === "script" || n.tagName === "style") ? e.value : Ye(
    e.value,
    Object.assign({}, i.settings.characterReferences, {
      subset: rc
    })
  );
}
function sc(e, t, n, i) {
  return i.settings.allowDangerousHtml ? e.value : qs(e, t, n, i);
}
function oc(e, t, n, i) {
  return i.all(e);
}
var ac = ul("type", {
  invalid: lc,
  unknown: cc,
  handlers: { comment: Tl, doctype: Ml, element: tc, raw: sc, root: oc, text: qs }
});
function lc(e) {
  throw new Error("Expected node, not `" + e + "`");
}
function cc(e) {
  const t = (
    /** @type {Nodes} */
    e
  );
  throw new Error("Cannot compile unknown node `" + t.type + "`");
}
var uc = {};
var dc = {};
var hc = [];
function Le(e, t) {
  const n = t || uc, i = n.quote || '"', r = i === '"' ? "'" : '"';
  if (i !== '"' && i !== "'")
    throw new Error("Invalid quote `" + i + "`, expected `'` or `\"`");
  return {
    one: fc,
    all: pc,
    settings: {
      omitOptionalTags: n.omitOptionalTags || false,
      allowParseErrors: n.allowParseErrors || false,
      allowDangerousCharacters: n.allowDangerousCharacters || false,
      quoteSmart: n.quoteSmart || false,
      preferUnquoted: n.preferUnquoted || false,
      tightAttributes: n.tightAttributes || false,
      upperDoctype: n.upperDoctype || false,
      tightDoctype: n.tightDoctype || false,
      bogusComments: n.bogusComments || false,
      tightCommaSeparatedLists: n.tightCommaSeparatedLists || false,
      tightSelfClosing: n.tightSelfClosing || false,
      collapseEmptyAttributes: n.collapseEmptyAttributes || false,
      allowDangerousHtml: n.allowDangerousHtml || false,
      voids: n.voids || el,
      characterReferences: n.characterReferences || dc,
      closeSelfClosing: n.closeSelfClosing || false,
      closeEmptyElements: n.closeEmptyElements || false
    },
    schema: n.space === "svg" ? Bs : cl,
    quote: i,
    alternative: r
  }.one(
    Array.isArray(e) ? { type: "root", children: e } : e,
    void 0,
    void 0
  );
}
function fc(e, t, n) {
  return ac(e, t, n, this);
}
function pc(e) {
  const t = [], n = e && e.children || hc;
  let i = -1;
  for (; ++i < n.length; )
    t[i] = this.one(n[i], i, e);
  return t.join("");
}
var ur = /\s+/g;
function Ks(e, t) {
  if (!t) return e;
  e.properties ||= {}, e.properties.class ||= [], typeof e.properties.class == "string" && (e.properties.class = e.properties.class.split(ur)), Array.isArray(e.properties.class) || (e.properties.class = []);
  const n = Array.isArray(t) ? t : t.split(ur);
  for (const i of n) i && !e.properties.class.includes(i) && e.properties.class.push(i);
  return e;
}
function gc(e) {
  const t = un(e, true).map(([r]) => r);
  function n(r) {
    if (r === e.length) return {
      line: t.length - 1,
      character: t.at(-1).length
    };
    let s = r, o = 0;
    for (const a of t) {
      if (s < a.length) break;
      s -= a.length, o++;
    }
    return {
      line: o,
      character: s
    };
  }
  function i(r, s) {
    let o = 0;
    for (let a = 0; a < r; a++) o += t[a].length;
    return o += s, o;
  }
  return {
    lines: t,
    indexToPos: n,
    posToIndex: i
  };
}
var mc = ["color", "background-color"];
function bc(e, t) {
  let n = 0;
  const i = [];
  for (const r of t)
    r > n && i.push({
      ...e,
      content: e.content.slice(n, r),
      offset: e.offset + n
    }), n = r;
  return n < e.content.length && i.push({
    ...e,
    content: e.content.slice(n),
    offset: e.offset + n
  }), i;
}
function yc(e, t) {
  let n = 0, i = e.length;
  for (; n < i; ) {
    const r = n + (i - n >> 1);
    e[r] <= t ? n = r + 1 : i = r;
  }
  return n;
}
function vc(e, t) {
  const n = [...t instanceof Set ? t : new Set(t)].sort((i, r) => i - r);
  return n.length ? e.map((i) => i.flatMap((r) => {
    const s = r.offset + r.content.length, o = yc(n, r.offset);
    let a = o;
    for (; a < n.length && n[a] < s; ) a++;
    if (o === a) return r;
    const l = n.slice(o, a);
    for (let c = 0; c < l.length; c++) l[c] -= r.offset;
    return bc(r, l);
  })) : e;
}
function wc(e, t, n, i, r = "css-vars") {
  const s = {
    content: e.content,
    explanation: e.explanation,
    offset: e.offset
  }, o = t.map((u) => nn(e.variants[u])), a = new Set(o.flatMap((u) => Object.keys(u))), l = {}, c = (u, d) => {
    const h = d === "color" ? "" : d === "background-color" ? "-bg" : `-${d}`;
    return n + t[u] + (d === "color" ? "" : h);
  };
  return o.forEach((u, d) => {
    for (const h of a) {
      const f = u[h] || "inherit";
      if (d === 0 && i && mc.includes(h))
        if (i === "light-dark()" && o.length > 1) {
          const g = t.findIndex((b) => b === "light"), y = t.findIndex((b) => b === "dark");
          if (g === -1 || y === -1) throw new T('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
          const v = o[g][h] || "inherit", m = o[y][h] || "inherit";
          l[h] = `light-dark(${v}, ${m})`, r === "css-vars" && (l[c(d, h)] = f);
        } else l[h] = f;
      else r === "css-vars" && (l[c(d, h)] = f);
    }
  }), s.htmlStyle = l, s;
}
function nn(e) {
  const t = {};
  if (e.color && (t.color = e.color), e.bgColor && (t["background-color"] = e.bgColor), e.fontStyle) {
    e.fontStyle & G.Italic && (t["font-style"] = "italic"), e.fontStyle & G.Bold && (t["font-weight"] = "bold");
    const n = [];
    e.fontStyle & G.Underline && n.push("underline"), e.fontStyle & G.Strikethrough && n.push("line-through"), n.length && (t["text-decoration"] = n.join(" "));
  }
  return t;
}
function ri(e) {
  return typeof e == "string" ? e : Object.entries(e).map(([t, n]) => `${t}:${n}`).join(";");
}
function Sc() {
  const e = /* @__PURE__ */ new WeakMap();
  function t(n) {
    if (!e.has(n.meta)) {
      let r = function(o) {
        if (typeof o == "number") {
          if (o < 0 || o > n.source.length) throw new T(`Invalid decoration offset: ${o}. Code length: ${n.source.length}`);
          return {
            ...i.indexToPos(o),
            offset: o
          };
        } else {
          const a = i.lines[o.line];
          if (a === void 0) throw new T(`Invalid decoration position ${JSON.stringify(o)}. Lines length: ${i.lines.length}`);
          let l = o.character;
          if (l < 0 && (l = a.length + l), l < 0 || l > a.length) throw new T(`Invalid decoration position ${JSON.stringify(o)}. Line ${o.line} length: ${a.length}`);
          return {
            ...o,
            character: l,
            offset: i.posToIndex(o.line, l)
          };
        }
      };
      const i = gc(n.source), s = (n.options.decorations || []).map((o) => ({
        ...o,
        start: r(o.start),
        end: r(o.end)
      }));
      Cc(s), e.set(n.meta, {
        decorations: s,
        converter: i,
        source: n.source
      });
    }
    return e.get(n.meta);
  }
  return {
    name: "shiki:decorations",
    tokens(n) {
      if (this.options.decorations?.length)
        return vc(n, t(this).decorations.flatMap((i) => [i.start.offset, i.end.offset]));
    },
    code(n) {
      if (!this.options.decorations?.length) return;
      const i = t(this), r = [...n.children].filter((u) => u.type === "element" && u.tagName === "span");
      if (r.length !== i.converter.lines.length) throw new T(`Number of lines in code element (${r.length}) does not match the number of lines in the source (${i.converter.lines.length}). Failed to apply decorations.`);
      function s(u, d, h, f) {
        const g = r[u];
        let y = "", v = -1, m = -1;
        if (d === 0 && (v = 0), h === 0 && (m = 0), h === Number.POSITIVE_INFINITY && (m = g.children.length), v === -1 || m === -1) for (let w = 0; w < g.children.length; w++)
          y += Xs(g.children[w]), v === -1 && y.length === d && (v = w + 1), m === -1 && y.length === h && (m = w + 1);
        if (v === -1) throw new T(`Failed to find start index for decoration ${JSON.stringify(f.start)}`);
        if (m === -1) throw new T(`Failed to find end index for decoration ${JSON.stringify(f.end)}`);
        const b = g.children.slice(v, m);
        if (!f.alwaysWrap && b.length === g.children.length) a(g, f, "line");
        else if (!f.alwaysWrap && b.length === 1 && b[0].type === "element") a(b[0], f, "token");
        else {
          const w = {
            type: "element",
            tagName: "span",
            properties: {},
            children: b
          };
          a(w, f, "wrapper"), g.children.splice(v, b.length, w);
        }
      }
      function o(u, d) {
        r[u] = a(r[u], d, "line");
      }
      function a(u, d, h) {
        const f = d.properties || {}, g = d.transform || ((y) => y);
        return u.tagName = d.tagName || "span", u.properties = {
          ...u.properties,
          ...f,
          class: u.properties.class
        }, d.properties?.class && Ks(u, d.properties.class), u = g(u, h) || u, u;
      }
      const l = [], c = i.decorations.sort((u, d) => d.start.offset - u.start.offset || u.end.offset - d.end.offset);
      for (const u of c) {
        const { start: d, end: h } = u;
        if (d.line === h.line) s(d.line, d.character, h.character, u);
        else if (d.line < h.line) {
          s(d.line, d.character, Number.POSITIVE_INFINITY, u);
          for (let f = d.line + 1; f < h.line; f++) l.unshift(() => o(f, u));
          s(h.line, 0, h.character, u);
        }
      }
      l.forEach((u) => u());
    }
  };
}
function Cc(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    if (n.start.offset > n.end.offset) throw new T(`Invalid decoration range: ${JSON.stringify(n.start)} - ${JSON.stringify(n.end)}`);
    for (let i = t + 1; i < e.length; i++) {
      const r = e[i], s = n.start.offset <= r.start.offset && r.start.offset < n.end.offset, o = n.start.offset < r.end.offset && r.end.offset <= n.end.offset, a = r.start.offset <= n.start.offset && n.start.offset < r.end.offset, l = r.start.offset < n.end.offset && n.end.offset <= r.end.offset;
      if (s || o || a || l) {
        if (s && o || a && l || a && n.start.offset === n.end.offset || o && r.start.offset === r.end.offset) continue;
        throw new T(`Decorations ${JSON.stringify(n.start)} and ${JSON.stringify(r.start)} intersect.`);
      }
    }
  }
}
function Xs(e) {
  return e.type === "text" ? e.value : e.type === "element" ? e.children.map(Xs).join("") : "";
}
var xc = [/* @__PURE__ */ Sc()];
function rn(e) {
  const t = kc(e.transformers || []);
  return [
    ...t.pre,
    ...t.normal,
    ...t.post,
    ...xc
  ];
}
function kc(e) {
  const t = [], n = [], i = [];
  for (const r of e) switch (r.enforce) {
    case "pre":
      t.push(r);
      break;
    case "post":
      n.push(r);
      break;
    default:
      i.push(r);
  }
  return {
    pre: t,
    post: n,
    normal: i
  };
}
var Pe = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "brightBlack",
  "brightRed",
  "brightGreen",
  "brightYellow",
  "brightBlue",
  "brightMagenta",
  "brightCyan",
  "brightWhite"
];
var An = {
  1: "bold",
  2: "dim",
  3: "italic",
  4: "underline",
  7: "reverse",
  8: "hidden",
  9: "strikethrough"
};
function Ec(e, t) {
  const n = e.indexOf("\x1B", t);
  if (n !== -1 && e[n + 1] === "[") {
    const i = e.indexOf("m", n);
    if (i !== -1) return {
      sequence: e.substring(n + 2, i).split(";"),
      startPosition: n,
      position: i + 1
    };
  }
  return { position: e.length };
}
function dr(e) {
  const t = e.shift();
  if (t === "2") {
    const n = e.splice(0, 3).map((i) => Number.parseInt(i));
    return n.length !== 3 || n.some((i) => Number.isNaN(i)) ? void 0 : {
      type: "rgb",
      rgb: n
    };
  } else if (t === "5") {
    const n = e.shift();
    if (n) return {
      type: "table",
      index: Number(n)
    };
  }
}
function Rc(e) {
  const t = [];
  for (; e.length > 0; ) {
    const n = e.shift();
    if (!n) continue;
    const i = Number.parseInt(n);
    if (!Number.isNaN(i))
      if (i === 0) t.push({ type: "resetAll" });
      else if (i <= 9)
        An[i] && t.push({
          type: "setDecoration",
          value: An[i]
        });
      else if (i <= 29) {
        const r = An[i - 20];
        r && (t.push({
          type: "resetDecoration",
          value: r
        }), r === "dim" && t.push({
          type: "resetDecoration",
          value: "bold"
        }));
      } else if (i <= 37) t.push({
        type: "setForegroundColor",
        value: {
          type: "named",
          name: Pe[i - 30]
        }
      });
      else if (i === 38) {
        const r = dr(e);
        r && t.push({
          type: "setForegroundColor",
          value: r
        });
      } else if (i === 39) t.push({ type: "resetForegroundColor" });
      else if (i <= 47) t.push({
        type: "setBackgroundColor",
        value: {
          type: "named",
          name: Pe[i - 40]
        }
      });
      else if (i === 48) {
        const r = dr(e);
        r && t.push({
          type: "setBackgroundColor",
          value: r
        });
      } else i === 49 ? t.push({ type: "resetBackgroundColor" }) : i === 53 ? t.push({
        type: "setDecoration",
        value: "overline"
      }) : i === 55 ? t.push({
        type: "resetDecoration",
        value: "overline"
      }) : i >= 90 && i <= 97 ? t.push({
        type: "setForegroundColor",
        value: {
          type: "named",
          name: Pe[i - 90 + 8]
        }
      }) : i >= 100 && i <= 107 && t.push({
        type: "setBackgroundColor",
        value: {
          type: "named",
          name: Pe[i - 100 + 8]
        }
      });
  }
  return t;
}
function Lc() {
  let e = null, t = null, n = /* @__PURE__ */ new Set();
  return { parse(i) {
    const r = [];
    let s = 0;
    do {
      const o = Ec(i, s), a = o.sequence ? i.substring(s, o.startPosition) : i.substring(s);
      if (a.length > 0 && r.push({
        value: a,
        foreground: e,
        background: t,
        decorations: new Set(n)
      }), o.sequence) {
        const l = Rc(o.sequence);
        for (const c of l) c.type === "resetAll" ? (e = null, t = null, n.clear()) : c.type === "resetForegroundColor" ? e = null : c.type === "resetBackgroundColor" ? t = null : c.type === "resetDecoration" && n.delete(c.value);
        for (const c of l) c.type === "setForegroundColor" ? e = c.value : c.type === "setBackgroundColor" ? t = c.value : c.type === "setDecoration" && n.add(c.value);
      }
      s = o.position;
    } while (s < i.length);
    return r;
  } };
}
var _c = {
  black: "#000000",
  red: "#bb0000",
  green: "#00bb00",
  yellow: "#bbbb00",
  blue: "#0000bb",
  magenta: "#ff00ff",
  cyan: "#00bbbb",
  white: "#eeeeee",
  brightBlack: "#555555",
  brightRed: "#ff5555",
  brightGreen: "#00ff00",
  brightYellow: "#ffff55",
  brightBlue: "#5555ff",
  brightMagenta: "#ff55ff",
  brightCyan: "#55ffff",
  brightWhite: "#ffffff"
};
function Ac(e = _c) {
  function t(a) {
    return e[a];
  }
  function n(a) {
    return `#${a.map((l) => Math.max(0, Math.min(l, 255)).toString(16).padStart(2, "0")).join("")}`;
  }
  let i;
  function r() {
    if (i) return i;
    i = [];
    for (let c = 0; c < Pe.length; c++) i.push(t(Pe[c]));
    let a = [
      0,
      95,
      135,
      175,
      215,
      255
    ];
    for (let c = 0; c < 6; c++) for (let u = 0; u < 6; u++) for (let d = 0; d < 6; d++) i.push(n([
      a[c],
      a[u],
      a[d]
    ]));
    let l = 8;
    for (let c = 0; c < 24; c++, l += 10) i.push(n([
      l,
      l,
      l
    ]));
    return i;
  }
  function s(a) {
    return r()[a];
  }
  function o(a) {
    switch (a.type) {
      case "named":
        return t(a.name);
      case "rgb":
        return n(a.rgb);
      case "table":
        return s(a.index);
    }
  }
  return { value: o };
}
var Tc = /#([0-9a-f]{3,8})/i;
var Mc = /var\((--[\w-]+-ansi-[\w-]+)\)/;
var Ic = {
  black: "#000000",
  red: "#cd3131",
  green: "#0DBC79",
  yellow: "#E5E510",
  blue: "#2472C8",
  magenta: "#BC3FBC",
  cyan: "#11A8CD",
  white: "#E5E5E5",
  brightBlack: "#666666",
  brightRed: "#F14C4C",
  brightGreen: "#23D18B",
  brightYellow: "#F5F543",
  brightBlue: "#3B8EEA",
  brightMagenta: "#D670D6",
  brightCyan: "#29B8DB",
  brightWhite: "#FFFFFF"
};
function Nc(e, t, n) {
  const i = tn(e, n), r = un(t), s = Ac(Object.fromEntries(Pe.map((a) => {
    const l = `terminal.ansi${a[0].toUpperCase()}${a.substring(1)}`;
    return [a, e.colors?.[l] || Ic[a]];
  }))), o = Lc();
  return r.map((a) => o.parse(a[0]).map((l) => {
    let c, u;
    l.decorations.has("reverse") ? (c = l.background ? s.value(l.background) : e.bg, u = l.foreground ? s.value(l.foreground) : e.fg) : (c = l.foreground ? s.value(l.foreground) : e.fg, u = l.background ? s.value(l.background) : void 0), c = Re(c, i), u = Re(u, i), l.decorations.has("dim") && (c = Pc(c));
    let d = G.None;
    return l.decorations.has("bold") && (d |= G.Bold), l.decorations.has("italic") && (d |= G.Italic), l.decorations.has("underline") && (d |= G.Underline), l.decorations.has("strikethrough") && (d |= G.Strikethrough), {
      content: l.value,
      offset: a[1],
      color: c,
      bgColor: u,
      fontStyle: d
    };
  }));
}
function Pc(e) {
  const t = e.match(Tc);
  if (t) {
    const i = t[1];
    if (i.length === 8) {
      const r = Math.round(Number.parseInt(i.slice(6, 8), 16) / 2).toString(16).padStart(2, "0");
      return `#${i.slice(0, 6)}${r}`;
    } else {
      if (i.length === 6) return `#${i}80`;
      if (i.length === 4) {
        const r = i[0], s = i[1], o = i[2], a = i[3];
        return `#${r}${r}${s}${s}${o}${o}${Math.round(Number.parseInt(`${a}${a}`, 16) / 2).toString(16).padStart(2, "0")}`;
      } else if (i.length === 3) {
        const r = i[0], s = i[1], o = i[2];
        return `#${r}${r}${s}${s}${o}${o}80`;
      }
    }
  }
  const n = e.match(Mc);
  return n ? `var(${n[1]}-dim)` : e;
}
function si(e, t, n = {}) {
  const i = e.resolveLangAlias(n.lang || "text"), { theme: r = e.getLoadedThemes()[0] } = n;
  if (!ln(i) && !cn(r) && i === "ansi") {
    const { theme: s } = e.setTheme(r);
    return Nc(s, t, n);
  }
  return Ns(e, t, n);
}
function sn(e, t, n) {
  let i, r, s, o, a, l;
  if ("themes" in n) {
    const { defaultColor: c = "light", cssVariablePrefix: u = "--shiki-", colorsRendering: d = "css-vars" } = n, h = Object.entries(n.themes).filter((m) => m[1]).map((m) => ({
      color: m[0],
      theme: m[1]
    })).sort((m, b) => m.color === c ? -1 : b.color === c ? 1 : 0);
    if (h.length === 0) throw new T("`themes` option must not be empty");
    const f = Ps(e, t, n, si);
    if (l = vt(f), c && c !== "light-dark()" && !h.some((m) => m.color === c)) throw new T(`\`themes\` option must contain the defaultColor key \`${c}\``);
    const g = h.map((m) => e.getTheme(m.theme)), y = h.map((m) => m.color);
    s = f.map((m) => m.map((b) => wc(b, y, u, c, d))), l && dn(s, l);
    const v = h.map((m) => tn(m.theme, n));
    r = hr(h, g, v, u, c, "fg", d), i = hr(h, g, v, u, c, "bg", d), o = `shiki-themes ${g.map((m) => m.name).join(" ")}`, a = c ? void 0 : [r, i].join(";");
  } else if ("theme" in n) {
    const c = tn(n.theme, n);
    s = si(e, t, n);
    const u = e.getTheme(n.theme);
    i = Re(u.bg, c), r = Re(u.fg, c), o = u.name, l = vt(s);
  } else throw new T("Invalid options, either `theme` or `themes` must be provided");
  return {
    tokens: s,
    fg: r,
    bg: i,
    themeName: o,
    rootStyle: a,
    grammarState: l
  };
}
function hr(e, t, n, i, r, s, o) {
  return e.map((a, l) => {
    const c = Re(t[l][s], n[l]) || "inherit", u = `${i + a.color}${s === "bg" ? "-bg" : ""}:${c}`;
    if (l === 0 && r) {
      if (r === "light-dark()" && e.length > 1) {
        const d = e.findIndex((f) => f.color === "light"), h = e.findIndex((f) => f.color === "dark");
        if (d === -1 || h === -1) throw new T('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
        return `light-dark(${Re(t[d][s], n[d]) || "inherit"}, ${Re(t[h][s], n[h]) || "inherit"});${u}`;
      }
      return c;
    }
    return o === "css-vars" ? u : null;
  }).filter((a) => !!a).join(";");
}
var Ys = /^\s+$/;
var Oc = /^(\s*)(.*?)(\s*)$/;
function on(e, t, n, i = {
  meta: {},
  options: n,
  codeToHast: (r, s) => on(e, r, s),
  codeToTokens: (r, s) => sn(e, r, s)
}) {
  let r = t;
  for (const g of rn(n)) r = g.preprocess?.call(i, r, n) || r;
  let { tokens: s, fg: o, bg: a, themeName: l, rootStyle: c, grammarState: u } = sn(e, r, n);
  const { mergeWhitespaces: d = true, mergeSameStyleTokens: h = false } = n;
  d === true ? s = Hc(s) : d === "never" && (s = $c(s)), h && (s = Dc(s));
  const f = {
    ...i,
    get source() {
      return r;
    }
  };
  for (const g of rn(n)) s = g.tokens?.call(f, s) || s;
  return Fc(s, {
    ...n,
    fg: o,
    bg: a,
    themeName: l,
    rootStyle: n.rootStyle === false ? false : n.rootStyle ?? c
  }, f, u);
}
function Fc(e, t, n, i = vt(e)) {
  const r = rn(t), s = [], o = {
    type: "root",
    children: []
  }, { structure: a = "classic", tabindex: l = "0" } = t, c = { class: `shiki ${t.themeName || ""}` };
  t.rootStyle !== false && (t.rootStyle != null ? c.style = t.rootStyle : c.style = `background-color:${t.bg};color:${t.fg}`), l !== false && l != null && (c.tabindex = l.toString());
  for (const [y, v] of Object.entries(t.meta || {})) y.startsWith("_") || (c[y] = v);
  let u = {
    type: "element",
    tagName: "pre",
    properties: c,
    children: [],
    data: t.data
  }, d = {
    type: "element",
    tagName: "code",
    properties: {},
    children: s
  };
  const h = [], f = {
    ...n,
    structure: a,
    addClassToHast: Ks,
    get source() {
      return n.source;
    },
    get tokens() {
      return e;
    },
    get options() {
      return t;
    },
    get root() {
      return o;
    },
    get pre() {
      return u;
    },
    get code() {
      return d;
    },
    get lines() {
      return h;
    }
  };
  if (e.forEach((y, v) => {
    v && (a === "inline" ? o.children.push({
      type: "element",
      tagName: "br",
      properties: {},
      children: []
    }) : a === "classic" && s.push({
      type: "text",
      value: `
`
    }));
    let m = {
      type: "element",
      tagName: "span",
      properties: { class: "line" },
      children: []
    }, b = 0;
    for (const w of y) {
      let C = {
        type: "element",
        tagName: "span",
        properties: { ...w.htmlAttrs },
        children: [{
          type: "text",
          value: w.content
        }]
      };
      const E = ri(w.htmlStyle || nn(w));
      E && (C.properties.style = E);
      for (const L of r) C = L?.span?.call(f, C, v + 1, b, m, w) || C;
      a === "inline" ? o.children.push(C) : a === "classic" && m.children.push(C), b += w.content.length;
    }
    if (a === "classic") {
      for (const w of r) m = w?.line?.call(f, m, v + 1) || m;
      h.push(m), s.push(m);
    } else a === "inline" && h.push(m);
  }), a === "classic") {
    for (const y of r) d = y?.code?.call(f, d) || d;
    u.children.push(d);
    for (const y of r) u = y?.pre?.call(f, u) || u;
    o.children.push(u);
  } else if (a === "inline") {
    const y = [];
    let v = {
      type: "element",
      tagName: "span",
      properties: { class: "line" },
      children: []
    };
    for (const b of o.children) b.type === "element" && b.tagName === "br" ? (y.push(v), v = {
      type: "element",
      tagName: "span",
      properties: { class: "line" },
      children: []
    }) : (b.type === "element" || b.type === "text") && v.children.push(b);
    y.push(v);
    let m = {
      type: "element",
      tagName: "code",
      properties: {},
      children: y
    };
    for (const b of r) m = b?.code?.call(f, m) || m;
    o.children = [];
    for (let b = 0; b < m.children.length; b++) {
      b > 0 && o.children.push({
        type: "element",
        tagName: "br",
        properties: {},
        children: []
      });
      const w = m.children[b];
      w.type === "element" && o.children.push(...w.children);
    }
  }
  let g = o;
  for (const y of r) g = y?.root?.call(f, g) || g;
  return i && dn(g, i), g;
}
function Hc(e) {
  return e.map((t) => {
    const n = [];
    let i = "", r;
    return t.forEach((s, o) => {
      const a = !(s.fontStyle && (s.fontStyle & G.Underline || s.fontStyle & G.Strikethrough));
      a && Ys.test(s.content) && t[o + 1] ? (r === void 0 && (r = s.offset), i += s.content) : i ? (a ? n.push({
        ...s,
        offset: r,
        content: i + s.content
      }) : n.push({
        content: i,
        offset: r
      }, s), r = void 0, i = "") : n.push(s);
    }), n;
  });
}
function $c(e) {
  return e.map((t) => t.flatMap((n) => {
    if (Ys.test(n.content)) return n;
    const i = n.content.match(Oc);
    if (!i) return n;
    const [, r, s, o] = i;
    if (!r && !o) return n;
    const a = [{
      ...n,
      offset: n.offset + r.length,
      content: s
    }];
    return r && a.unshift({
      content: r,
      offset: n.offset
    }), o && a.push({
      content: o,
      offset: n.offset + r.length + s.length
    }), a;
  }));
}
function Dc(e) {
  return e.map((t) => {
    const n = [];
    for (const i of t) {
      if (n.length === 0) {
        n.push({ ...i });
        continue;
      }
      const r = n.at(-1), s = ri(r.htmlStyle || nn(r)), o = ri(i.htmlStyle || nn(i)), a = r.fontStyle && (r.fontStyle & G.Underline || r.fontStyle & G.Strikethrough), l = i.fontStyle && (i.fontStyle & G.Underline || i.fontStyle & G.Strikethrough);
      !a && !l && s === o ? r.content += i.content : n.push({ ...i });
    }
    return n;
  });
}
var Uc = Le;
function zc(e, t, n) {
  const i = {
    meta: {},
    options: n,
    codeToHast: (s, o) => on(e, s, o),
    codeToTokens: (s, o) => sn(e, s, o)
  };
  let r = Uc(on(e, t, n, i));
  for (const s of rn(n)) r = s.postprocess?.call(i, r, n) || r;
  return r;
}
async function Bc(e) {
  const t = await Ba(e);
  return {
    getLastGrammarState: (...n) => qa(t, ...n),
    codeToTokensBase: (n, i) => si(t, n, i),
    codeToTokensWithThemes: (n, i) => Ps(t, n, i),
    codeToTokens: (n, i) => sn(t, n, i),
    codeToHast: (n, i) => on(t, n, i),
    codeToHtml: (n, i) => zc(t, n, i),
    getBundledLanguages: () => ({}),
    getBundledThemes: () => ({}),
    ...t,
    getInternalContext: () => t
  };
}
function Gc(e) {
  const t = e.langs, n = e.themes, i = e.engine;
  async function r(s) {
    function o(d) {
      if (typeof d == "string") {
        if (d = s.langAlias?.[d] || d, Rs(d)) return [];
        const h = t[d];
        if (!h) throw new T(`Language \`${d}\` is not included in this bundle. You may want to load it from external source.`);
        return h;
      }
      return d;
    }
    function a(d) {
      if (Ls(d)) return "none";
      if (typeof d == "string") {
        const h = n[d];
        if (!h) throw new T(`Theme \`${d}\` is not included in this bundle. You may want to load it from external source.`);
        return h;
      }
      return d;
    }
    const l = (s.themes ?? []).map((d) => a(d)), c = (s.langs ?? []).map((d) => o(d)), u = await Bc({
      engine: s.engine ?? i(),
      ...s,
      themes: l,
      langs: c
    });
    return {
      ...u,
      loadLanguage(...d) {
        return u.loadLanguage(...d.map(o));
      },
      loadTheme(...d) {
        return u.loadTheme(...d.map(a));
      },
      getBundledLanguages() {
        return t;
      },
      getBundledThemes() {
        return n;
      }
    };
  }
  return r;
}
var fr = 4294967295;
function Wc(e) {
  return !e.sticky && !e.rawOptions?.strategy;
}
function pr(e, t) {
  return {
    index: e,
    captureIndices: t.map((n) => n == null ? {
      start: fr,
      end: fr,
      length: 0
    } : {
      start: n[0],
      end: n[1],
      length: n[1] - n[0]
    })
  };
}
var jc = class {
  constructor(e, t = {}) {
    p(this, "patterns");
    p(this, "options");
    p(this, "regexps");
    p(this, "lastSearches");
    this.patterns = e, this.options = t;
    const { forgiving: n = false, cache: i, regexConstructor: r } = t;
    if (!r) throw new Error("Option `regexConstructor` is not provided");
    this.regexps = e.map((s) => {
      if (typeof s != "string") return s;
      const o = i?.get(s);
      if (o) {
        if (o instanceof RegExp) return o;
        if (n) return null;
        throw o;
      }
      try {
        const a = r(s);
        return i?.set(s, a), a;
      } catch (a) {
        if (i?.set(s, a), n) return null;
        throw a;
      }
    }), this.lastSearches = this.regexps.map((s) => s && Wc(s) ? {
      strId: 0,
      searchedFrom: 0,
      matchIndex: -1,
      indices: null
    } : null);
  }
  findNextMatchSync(e, t, n) {
    const i = typeof e == "string" ? e : e.content, r = typeof e == "string" ? 0 : e.id || 0;
    let s = -1, o = 0, a = null;
    for (let l = 0; l < this.regexps.length; l++) {
      const c = this.regexps[l];
      if (c)
        try {
          const u = r ? this.lastSearches[l] : null;
          let d, h;
          if (u && u.strId === r && u.searchedFrom <= t && (u.matchIndex === -1 || u.matchIndex >= t))
            d = u.matchIndex, h = u.indices;
          else {
            c.lastIndex = t;
            const f = c.exec(i);
            d = f ? f.index : -1, h = f ? f.indices : null, u && (u.strId = r, u.searchedFrom = t, u.matchIndex = d, u.indices = h);
          }
          if (d === -1) continue;
          if (d === t) return pr(l, h);
          (s === -1 || d < o) && (s = l, o = d, a = h);
        } catch (u) {
          if (this.options.forgiving) continue;
          throw u;
        }
    }
    return s === -1 ? null : pr(s, a);
  }
};
var Vc = 0;
function qc(e) {
  return {
    content: e,
    id: ++Vc
  };
}
function tt(e) {
  if ([...e].length !== 1) throw new Error(`Expected "${e}" to be a single code point`);
  return e.codePointAt(0);
}
function Kc(e, t, n) {
  return e.has(t) || e.set(t, n), e.get(t);
}
var Li = /* @__PURE__ */ new Set(["alnum", "alpha", "ascii", "blank", "cntrl", "digit", "graph", "lower", "print", "punct", "space", "upper", "word", "xdigit"]);
var U = String.raw;
function nt(e, t) {
  if (e == null) throw new Error(t ?? "Value expected");
  return e;
}
var Qs = U`\[\^?`;
var Zs = `c.? | C(?:-.?)?|${U`[pP]\{(?:\^?[-\x20_]*[A-Za-z][-\x20\w]*\})?`}|${U`x[89A-Fa-f]\p{AHex}(?:\\x[89A-Fa-f]\p{AHex})*`}|${U`u(?:\p{AHex}{4})? | x\{[^\}]*\}? | x\p{AHex}{0,2}`}|${U`o\{[^\}]*\}?`}|${U`\d{1,3}`}`;
var _i = /[?*+][?+]?|\{(?:\d+(?:,\d*)?|,\d+)\}\??/;
var Mt = new RegExp(U`
  \\ (?:
    ${Zs}
    | [gk]<[^>]*>?
    | [gk]'[^']*'?
    | .
  )
  | \( (?:
    \? (?:
      [:=!>({]
      | <[=!]
      | <[^>]*>
      | '[^']*'
      | ~\|?
      | #(?:[^)\\]|\\.?)*
      | [^:)]*[:)]
    )?
    | \*[^\)]*\)?
  )?
  | (?:${_i.source})+
  | ${Qs}
  | .
`.replace(/\s+/g, ""), "gsu");
var Tn = new RegExp(U`
  \\ (?:
    ${Zs}
    | .
  )
  | \[:(?:\^?\p{Alpha}+|\^):\]
  | ${Qs}
  | &&
  | .
`.replace(/\s+/g, ""), "gsu");
function Xc(e, t = {}) {
  const n = { flags: "", ...t, rules: { captureGroup: false, singleline: false, ...t.rules } };
  if (typeof e != "string") throw new Error("String expected as pattern");
  const i = pu(n.flags), r = [i.extended], s = { captureGroup: n.rules.captureGroup, getCurrentModX() {
    return r.at(-1);
  }, numOpenGroups: 0, popModX() {
    r.pop();
  }, pushModX(d) {
    r.push(d);
  }, replaceCurrentModX(d) {
    r[r.length - 1] = d;
  }, singleline: n.rules.singleline };
  let o = [], a;
  for (Mt.lastIndex = 0; a = Mt.exec(e); ) {
    const d = Yc(s, e, a[0], Mt.lastIndex);
    d.tokens ? o.push(...d.tokens) : d.token && o.push(d.token), d.lastIndex !== void 0 && (Mt.lastIndex = d.lastIndex);
  }
  const l = [];
  let c = 0;
  o.filter((d) => d.type === "GroupOpen").forEach((d) => {
    d.kind === "capturing" ? d.number = ++c : d.raw === "(" && l.push(d);
  }), c || l.forEach((d, h) => {
    d.kind = "capturing", d.number = h + 1;
  });
  const u = c || l.length;
  return { tokens: o.map((d) => d.type === "EscapedNumber" ? mu(d, u) : d).flat(), flags: i };
}
function Yc(e, t, n, i) {
  const [r, s] = n;
  if (n === "[" || n === "[^") {
    const o = Qc(t, n, i);
    return { tokens: o.tokens, lastIndex: o.lastIndex };
  }
  if (r === "\\") {
    if ("AbBGyYzZ".includes(s)) return { token: gr(n, n) };
    if (/^\\g[<']/.test(n)) {
      if (!/^\\g(?:<[^>]+>|'[^']+')$/.test(n)) throw new Error(`Invalid group name "${n}"`);
      return { token: au(n) };
    }
    if (/^\\k[<']/.test(n)) {
      if (!/^\\k(?:<[^>]+>|'[^']+')$/.test(n)) throw new Error(`Invalid group name "${n}"`);
      return { token: eo(n) };
    }
    if (s === "K") return { token: to("keep", n) };
    if (s === "N" || s === "R") return { token: Oe("newline", n, { negate: s === "N" }) };
    if (s === "O") return { token: Oe("any", n) };
    if (s === "X") return { token: Oe("text_segment", n) };
    const o = Js(n, { inCharClass: false });
    return Array.isArray(o) ? { tokens: o } : { token: o };
  }
  if (r === "(") {
    if (s === "*") return { token: du(n) };
    if (n === "(?{") throw new Error(`Unsupported callout "${n}"`);
    if (n.startsWith("(?#")) {
      if (t[i] !== ")") throw new Error('Unclosed comment group "(?#"');
      return { lastIndex: i + 1 };
    }
    if (/^\(\?[-imx]+[:)]$/.test(n)) return { token: uu(n, e) };
    if (e.pushModX(e.getCurrentModX()), e.numOpenGroups++, n === "(" && !e.captureGroup || n === "(?:") return { token: Ke("group", n) };
    if (n === "(?>") return { token: Ke("atomic", n) };
    if (n === "(?=" || n === "(?!" || n === "(?<=" || n === "(?<!") return { token: Ke(n[2] === "<" ? "lookbehind" : "lookahead", n, { negate: n.endsWith("!") }) };
    if (n === "(" && e.captureGroup || n.startsWith("(?<") && n.endsWith(">") || n.startsWith("(?'") && n.endsWith("'")) return { token: Ke("capturing", n, { ...n !== "(" && { name: n.slice(3, -1) } }) };
    if (n.startsWith("(?~")) {
      if (n === "(?~|") throw new Error(`Unsupported absence function kind "${n}"`);
      return { token: Ke("absence_repeater", n) };
    }
    throw n === "(?(" ? new Error(`Unsupported conditional "${n}"`) : new Error(`Invalid or unsupported group option "${n}"`);
  }
  if (n === ")") {
    if (e.popModX(), e.numOpenGroups--, e.numOpenGroups < 0) throw new Error('Unmatched ")"');
    return { token: ru(n) };
  }
  if (e.getCurrentModX()) {
    if (n === "#") {
      const o = t.indexOf(`
`, i);
      return { lastIndex: o === -1 ? t.length : o };
    }
    if (/^\s$/.test(n)) {
      const o = /\s+/y;
      return o.lastIndex = i, { lastIndex: o.exec(t) ? o.lastIndex : i };
    }
  }
  if (n === ".") return { token: Oe("dot", n) };
  if (n === "^" || n === "$") {
    const o = e.singleline ? { "^": U`\A`, $: U`\Z` }[n] : n;
    return { token: gr(o, n) };
  }
  return n === "|" ? { token: Jc(n) } : _i.test(n) ? { tokens: bu(n) } : { token: ge(tt(n), n) };
}
function Qc(e, t, n) {
  const i = [mr(t[1] === "^", t)];
  let r = 1, s;
  for (Tn.lastIndex = n; s = Tn.exec(e); ) {
    const o = s[0];
    if (o[0] === "[" && o[1] !== ":") r++, i.push(mr(o[1] === "^", o));
    else if (o === "]") {
      if (i.at(-1).type === "CharacterClassOpen") i.push(ge(93, o));
      else if (r--, i.push(eu(o)), !r) break;
    } else {
      const a = Zc(o);
      Array.isArray(a) ? i.push(...a) : i.push(a);
    }
  }
  return { tokens: i, lastIndex: Tn.lastIndex || e.length };
}
function Zc(e) {
  if (e[0] === "\\") return Js(e, { inCharClass: true });
  if (e[0] === "[") {
    const t = /\[:(?<negate>\^?)(?<name>[a-z]+):\]/.exec(e);
    if (!t || !Li.has(t.groups.name)) throw new Error(`Invalid POSIX class "${e}"`);
    return Oe("posix", e, { value: t.groups.name, negate: !!t.groups.negate });
  }
  return e === "-" ? tu(e) : e === "&&" ? nu(e) : ge(tt(e), e);
}
function Js(e, { inCharClass: t }) {
  const n = e[1];
  if (n === "c" || n === "C") return cu(e);
  if ("dDhHsSwW".includes(n)) return hu(e);
  if (e.startsWith(U`\o{`)) throw new Error(`Incomplete, invalid, or unsupported octal code point "${e}"`);
  if (/^\\[pP]\{/.test(e)) {
    if (e.length === 3) throw new Error(`Incomplete or invalid Unicode property "${e}"`);
    return fu(e);
  }
  if (/^\\x[89A-Fa-f]\p{AHex}/u.test(e)) try {
    const i = e.split(/\\x/).slice(1).map((o) => parseInt(o, 16)), r = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }).decode(new Uint8Array(i)), s = new TextEncoder();
    return [...r].map((o) => {
      const a = [...s.encode(o)].map((l) => `\\x${l.toString(16)}`).join("");
      return ge(tt(o), a);
    });
  } catch {
    throw new Error(`Multibyte code "${e}" incomplete or invalid in Oniguruma`);
  }
  if (n === "u" || n === "x") return ge(gu(e), e);
  if (br.has(n)) return ge(br.get(n), e);
  if (/\d/.test(n)) return iu(t, e);
  if (e === "\\") throw new Error(U`Incomplete escape "\"`);
  if (n === "M") throw new Error(`Unsupported meta "${e}"`);
  if ([...e].length === 2) return ge(e.codePointAt(1), e);
  throw new Error(`Unexpected escape "${e}"`);
}
function Jc(e) {
  return { type: "Alternator", raw: e };
}
function gr(e, t) {
  return { type: "Assertion", kind: e, raw: t };
}
function eo(e) {
  return { type: "Backreference", raw: e };
}
function ge(e, t) {
  return { type: "Character", value: e, raw: t };
}
function eu(e) {
  return { type: "CharacterClassClose", raw: e };
}
function tu(e) {
  return { type: "CharacterClassHyphen", raw: e };
}
function nu(e) {
  return { type: "CharacterClassIntersector", raw: e };
}
function mr(e, t) {
  return { type: "CharacterClassOpen", negate: e, raw: t };
}
function Oe(e, t, n = {}) {
  return { type: "CharacterSet", kind: e, ...n, raw: t };
}
function to(e, t, n = {}) {
  return e === "keep" ? { type: "Directive", kind: e, raw: t } : { type: "Directive", kind: e, flags: nt(n.flags), raw: t };
}
function iu(e, t) {
  return { type: "EscapedNumber", inCharClass: e, raw: t };
}
function ru(e) {
  return { type: "GroupClose", raw: e };
}
function Ke(e, t, n = {}) {
  return { type: "GroupOpen", kind: e, ...n, raw: t };
}
function su(e, t, n, i) {
  return { type: "NamedCallout", kind: e, tag: t, arguments: n, raw: i };
}
function ou(e, t, n, i) {
  return { type: "Quantifier", kind: e, min: t, max: n, raw: i };
}
function au(e) {
  return { type: "Subroutine", raw: e };
}
var lu = /* @__PURE__ */ new Set(["COUNT", "CMP", "ERROR", "FAIL", "MAX", "MISMATCH", "SKIP", "TOTAL_COUNT"]);
var br = /* @__PURE__ */ new Map([["a", 7], ["b", 8], ["e", 27], ["f", 12], ["n", 10], ["r", 13], ["t", 9], ["v", 11]]);
function cu(e) {
  const t = e[1] === "c" ? e[2] : e[3];
  if (!t || !/[A-Za-z]/.test(t)) throw new Error(`Unsupported control character "${e}"`);
  return ge(tt(t.toUpperCase()) - 64, e);
}
function uu(e, t) {
  let { on: n, off: i } = /^\(\?(?<on>[imx]*)(?:-(?<off>[-imx]*))?/.exec(e).groups;
  i ??= "";
  const r = (t.getCurrentModX() || n.includes("x")) && !i.includes("x"), s = vr(n), o = vr(i), a = {};
  if (s && (a.enable = s), o && (a.disable = o), e.endsWith(")")) return t.replaceCurrentModX(r), to("flags", e, { flags: a });
  if (e.endsWith(":")) return t.pushModX(r), t.numOpenGroups++, Ke("group", e, { ...(s || o) && { flags: a } });
  throw new Error(`Unexpected flag modifier "${e}"`);
}
function du(e) {
  const t = /\(\*(?<name>[A-Za-z_]\w*)?(?:\[(?<tag>(?:[A-Za-z_]\w*)?)\])?(?:\{(?<args>[^}]*)\})?\)/.exec(e);
  if (!t) throw new Error(`Incomplete or invalid named callout "${e}"`);
  const { name: n, tag: i, args: r } = t.groups;
  if (!n) throw new Error(`Invalid named callout "${e}"`);
  if (i === "") throw new Error(`Named callout tag with empty value not allowed "${e}"`);
  const s = r ? r.split(",").filter((u) => u !== "").map((u) => /^[+-]?\d+$/.test(u) ? +u : u) : [], [o, a, l] = s, c = lu.has(n) ? n.toLowerCase() : "custom";
  switch (c) {
    case "fail":
    case "mismatch":
    case "skip":
      if (s.length > 0) throw new Error(`Named callout arguments not allowed "${s}"`);
      break;
    case "error":
      if (s.length > 1) throw new Error(`Named callout allows only one argument "${s}"`);
      if (typeof o == "string") throw new Error(`Named callout argument must be a number "${o}"`);
      break;
    case "max":
      if (!s.length || s.length > 2) throw new Error(`Named callout must have one or two arguments "${s}"`);
      if (typeof o == "string" && !/^[A-Za-z_]\w*$/.test(o)) throw new Error(`Named callout argument one must be a tag or number "${o}"`);
      if (s.length === 2 && (typeof a == "number" || !/^[<>X]$/.test(a))) throw new Error(`Named callout optional argument two must be '<', '>', or 'X' "${a}"`);
      break;
    case "count":
    case "total_count":
      if (s.length > 1) throw new Error(`Named callout allows only one argument "${s}"`);
      if (s.length === 1 && (typeof o == "number" || !/^[<>X]$/.test(o))) throw new Error(`Named callout optional argument must be '<', '>', or 'X' "${o}"`);
      break;
    case "cmp":
      if (s.length !== 3) throw new Error(`Named callout must have three arguments "${s}"`);
      if (typeof o == "string" && !/^[A-Za-z_]\w*$/.test(o)) throw new Error(`Named callout argument one must be a tag or number "${o}"`);
      if (typeof a == "number" || !/^(?:[<>!=]=|[<>])$/.test(a)) throw new Error(`Named callout argument two must be '==', '!=', '>', '<', '>=', or '<=' "${a}"`);
      if (typeof l == "string" && !/^[A-Za-z_]\w*$/.test(l)) throw new Error(`Named callout argument three must be a tag or number "${l}"`);
      break;
    case "custom":
      throw new Error(`Undefined callout name "${n}"`);
    default:
      throw new Error(`Unexpected named callout kind "${c}"`);
  }
  return su(c, i ?? null, r?.split(",") ?? null, e);
}
function yr(e) {
  let t = null, n, i;
  if (e[0] === "{") {
    const { minStr: r, maxStr: s } = /^\{(?<minStr>\d*)(?:,(?<maxStr>\d*))?/.exec(e).groups, o = 1e5;
    if (+r > o || s && +s > o) throw new Error("Quantifier value unsupported in Oniguruma");
    if (n = +r, i = s === void 0 ? +r : s === "" ? 1 / 0 : +s, n > i && (t = "possessive", [n, i] = [i, n]), e.endsWith("?")) {
      if (t === "possessive") throw new Error('Unsupported possessive interval quantifier chain with "?"');
      t = "lazy";
    } else t || (t = "greedy");
  } else n = e[0] === "+" ? 1 : 0, i = e[0] === "?" ? 1 : 1 / 0, t = e[1] === "+" ? "possessive" : e[1] === "?" ? "lazy" : "greedy";
  return ou(t, n, i, e);
}
function hu(e) {
  const t = e[1].toLowerCase();
  return Oe({ d: "digit", h: "hex", s: "space", w: "word" }[t], e, { negate: e[1] !== t });
}
function fu(e) {
  const { p: t, neg: n, value: i } = /^\\(?<p>[pP])\{(?<neg>\^?)(?<value>[^}]+)/.exec(e).groups;
  return Oe("property", e, { value: i, negate: t === "P" && !n || t === "p" && !!n });
}
function vr(e) {
  const t = {};
  return e.includes("i") && (t.ignoreCase = true), e.includes("m") && (t.dotAll = true), e.includes("x") && (t.extended = true), Object.keys(t).length ? t : null;
}
function pu(e) {
  const t = { ignoreCase: false, dotAll: false, extended: false, digitIsAscii: false, posixIsAscii: false, spaceIsAscii: false, wordIsAscii: false, textSegmentMode: null };
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    if (!"imxDPSWy".includes(i)) throw new Error(`Invalid flag "${i}"`);
    if (i === "y") {
      if (!/^y{[gw]}/.test(e.slice(n))) throw new Error('Invalid or unspecified flag "y" mode');
      t.textSegmentMode = e[n + 2] === "g" ? "grapheme" : "word", n += 3;
      continue;
    }
    t[{ i: "ignoreCase", m: "dotAll", x: "extended", D: "digitIsAscii", P: "posixIsAscii", S: "spaceIsAscii", W: "wordIsAscii" }[i]] = true;
  }
  return t;
}
function gu(e) {
  if (/^(?:\\u(?!\p{AHex}{4})|\\x(?!\p{AHex}{1,2}|\{\p{AHex}{1,8}\}))/u.test(e)) throw new Error(`Incomplete or invalid escape "${e}"`);
  const t = e[2] === "{" ? /^\\x\{\s*(?<hex>\p{AHex}+)/u.exec(e).groups.hex : e.slice(2);
  return parseInt(t, 16);
}
function mu(e, t) {
  const { raw: n, inCharClass: i } = e, r = n.slice(1);
  if (!i && (r !== "0" && r.length === 1 || r[0] !== "0" && +r <= t)) return [eo(n)];
  const s = [], o = r.match(/^[0-7]+|\d/g);
  for (let a = 0; a < o.length; a++) {
    const l = o[a];
    let c;
    if (a === 0 && l !== "8" && l !== "9") {
      if (c = parseInt(l, 8), c > 127) throw new Error(U`Octal encoded byte above 177 unsupported "${n}"`);
    } else c = tt(l);
    s.push(ge(c, (a === 0 ? "\\" : "") + l));
  }
  return s;
}
function bu(e) {
  const t = [], n = new RegExp(_i, "gy");
  let i;
  for (; i = n.exec(e); ) {
    const r = i[0];
    if (r[0] === "{") {
      const s = /^\{(?<min>\d+),(?<max>\d+)\}\??$/.exec(r);
      if (s) {
        const { min: o, max: a } = s.groups;
        if (+o > +a && r.endsWith("?")) {
          n.lastIndex--, t.push(yr(r.slice(0, -1)));
          continue;
        }
      }
    }
    t.push(yr(r));
  }
  return t;
}
function no(e, t) {
  if (!Array.isArray(e.body)) throw new Error("Expected node with body array");
  if (e.body.length !== 1) return false;
  const n = e.body[0];
  return !t || Object.keys(t).every((i) => t[i] === n[i]);
}
function yu(e) {
  return vu.has(e.type);
}
var vu = /* @__PURE__ */ new Set(["AbsenceFunction", "Backreference", "CapturingGroup", "Character", "CharacterClass", "CharacterSet", "Group", "Quantifier", "Subroutine"]);
function io(e, t = {}) {
  const n = { flags: "", normalizeUnknownPropertyNames: false, skipBackrefValidation: false, skipLookbehindValidation: false, skipPropertyNameValidation: false, unicodePropertyMap: null, ...t, rules: { captureGroup: false, singleline: false, ...t.rules } }, i = Xc(e, { flags: n.flags, rules: { captureGroup: n.rules.captureGroup, singleline: n.rules.singleline } }), r = (h, f) => {
    const g = i.tokens[s.nextIndex];
    switch (s.parent = h, s.nextIndex++, g.type) {
      case "Alternator":
        return ze();
      case "Assertion":
        return wu(g);
      case "Backreference":
        return Su(g, s);
      case "Character":
        return fn(g.value, { useLastValid: !!f.isCheckingRangeEnd });
      case "CharacterClassHyphen":
        return Cu(g, s, f);
      case "CharacterClassOpen":
        return xu(g, s, f);
      case "CharacterSet":
        return ku(g, s);
      case "Directive":
        return Tu(g.kind, { flags: g.flags });
      case "GroupOpen":
        return Eu(g, s, f);
      case "NamedCallout":
        return Iu(g.kind, g.tag, g.arguments);
      case "Quantifier":
        return Ru(g, s);
      case "Subroutine":
        return Lu(g, s);
      default:
        throw new Error(`Unexpected token type "${g.type}"`);
    }
  }, s = { capturingGroups: [], hasNumberedRef: false, namedGroupsByName: /* @__PURE__ */ new Map(), nextIndex: 0, normalizeUnknownPropertyNames: n.normalizeUnknownPropertyNames, parent: null, skipBackrefValidation: n.skipBackrefValidation, skipLookbehindValidation: n.skipLookbehindValidation, skipPropertyNameValidation: n.skipPropertyNameValidation, subroutines: [], tokens: i.tokens, unicodePropertyMap: n.unicodePropertyMap, walk: r }, o = Pu(Mu(i.flags));
  let a = o.body[0];
  for (; s.nextIndex < i.tokens.length; ) {
    const h = r(a, {});
    h.type === "Alternative" ? (o.body.push(h), a = h) : a.body.push(h);
  }
  const { capturingGroups: l, hasNumberedRef: c, namedGroupsByName: u, subroutines: d } = s;
  if (c && u.size && !n.rules.captureGroup) throw new Error("Numbered backref/subroutine not allowed when using named capture");
  for (const { ref: h } of d) if (typeof h == "number") {
    if (h > l.length) throw new Error("Subroutine uses a group number that's not defined");
    h && (l[h - 1].isSubroutined = true);
  } else if (u.has(h)) {
    if (u.get(h).length > 1) throw new Error(U`Subroutine uses a duplicate group name "\g<${h}>"`);
    u.get(h)[0].isSubroutined = true;
  } else throw new Error(U`Subroutine uses a group name that's not defined "\g<${h}>"`);
  return o;
}
function wu({ kind: e }) {
  return oi(nt({ "^": "line_start", $: "line_end", "\\A": "string_start", "\\b": "word_boundary", "\\B": "word_boundary", "\\G": "search_start", "\\y": "text_segment_boundary", "\\Y": "text_segment_boundary", "\\z": "string_end", "\\Z": "string_end_newline" }[e], `Unexpected assertion kind "${e}"`), { negate: e === U`\B` || e === U`\Y` });
}
function Su({ raw: e }, t) {
  const n = /^\\k[<']/.test(e), i = n ? e.slice(3, -1) : e.slice(1), r = (s, o = false) => {
    const a = t.capturingGroups.length;
    let l = false;
    if (s > a) if (t.skipBackrefValidation) l = true;
    else throw new Error(`Not enough capturing groups defined to the left "${e}"`);
    return t.hasNumberedRef = true, ai(o ? a + 1 - s : s, { orphan: l });
  };
  if (n) {
    const s = /^(?<sign>-?)0*(?<num>[1-9]\d*)$/.exec(i);
    if (s) return r(+s.groups.num, !!s.groups.sign);
    if (/[-+]/.test(i)) throw new Error(`Invalid backref name "${e}"`);
    if (!t.namedGroupsByName.has(i)) throw new Error(`Group name not defined to the left "${e}"`);
    return ai(i);
  }
  return r(+i);
}
function Cu(e, t, n) {
  const { tokens: i, walk: r } = t, s = t.parent, o = s.body.at(-1), a = i[t.nextIndex];
  if (!n.isCheckingRangeEnd && o && o.type !== "CharacterClass" && o.type !== "CharacterClassRange" && a && a.type !== "CharacterClassOpen" && a.type !== "CharacterClassClose" && a.type !== "CharacterClassIntersector") {
    const l = r(s, { ...n, isCheckingRangeEnd: true });
    if (o.type === "Character" && l.type === "Character") return s.body.pop(), Au(o, l);
    throw new Error("Invalid character class range");
  }
  return fn(tt("-"));
}
function xu({ negate: e }, t, n) {
  const { tokens: i, walk: r } = t, s = [jt()], o = i[t.nextIndex];
  let a = Cr(o);
  for (; a.type !== "CharacterClassClose"; ) {
    if (a.type === "CharacterClassIntersector") s.push(jt()), t.nextIndex++;
    else {
      const c = s.at(-1);
      c.body.push(r(c, n));
    }
    a = Cr(i[t.nextIndex], o);
  }
  const l = jt({ negate: e });
  return s.length === 1 ? l.body = s[0].body : (l.kind = "intersection", l.body = s.map((c) => c.body.length === 1 ? c.body[0] : c)), t.nextIndex++, l;
}
function ku({ kind: e, negate: t, value: n }, i) {
  const { normalizeUnknownPropertyNames: r, skipPropertyNameValidation: s, unicodePropertyMap: o } = i;
  if (e === "property") {
    const a = pn(n);
    if (Li.has(a) && !o?.has(a)) e = "posix", n = a;
    else return Xe(n, { negate: t, normalizeUnknownPropertyNames: r, skipPropertyNameValidation: s, unicodePropertyMap: o });
  }
  return e === "posix" ? Nu(n, { negate: t }) : li(e, { negate: t });
}
function Eu(e, t, n) {
  const { tokens: i, capturingGroups: r, namedGroupsByName: s, skipLookbehindValidation: o, walk: a } = t, l = Ou(e), c = l.type === "AbsenceFunction", u = Sr(l), d = u && l.negate;
  if (l.type === "CapturingGroup" && (r.push(l), l.name && Kc(s, l.name, []).push(l)), c && n.isInAbsenceFunction) throw new Error("Nested absence function not supported by Oniguruma");
  let h = xr(i[t.nextIndex]);
  for (; h.type !== "GroupClose"; ) {
    if (h.type === "Alternator") l.body.push(ze()), t.nextIndex++;
    else {
      const f = l.body.at(-1), g = a(f, { ...n, isInAbsenceFunction: n.isInAbsenceFunction || c, isInLookbehind: n.isInLookbehind || u, isInNegLookbehind: n.isInNegLookbehind || d });
      if (f.body.push(g), (u || n.isInLookbehind) && !o) {
        const y = "Lookbehind includes a pattern not allowed by Oniguruma";
        if (d || n.isInNegLookbehind) {
          if (wr(g) || g.type === "CapturingGroup") throw new Error(y);
        } else if (wr(g) || Sr(g) && g.negate) throw new Error(y);
      }
    }
    h = xr(i[t.nextIndex]);
  }
  return t.nextIndex++, l;
}
function Ru({ kind: e, min: t, max: n }, i) {
  const r = i.parent, s = r.body.at(-1);
  if (!s || !yu(s)) throw new Error("Quantifier requires a repeatable token");
  const o = so(e, t, n, s);
  return r.body.pop(), o;
}
function Lu({ raw: e }, t) {
  const { capturingGroups: n, subroutines: i } = t;
  let r = e.slice(3, -1);
  const s = /^(?<sign>[-+]?)0*(?<num>[1-9]\d*)$/.exec(r);
  if (s) {
    const a = +s.groups.num, l = n.length;
    if (t.hasNumberedRef = true, r = { "": a, "+": l + a, "-": l + 1 - a }[s.groups.sign], r < 1) throw new Error("Invalid subroutine number");
  } else r === "0" && (r = 0);
  const o = oo(r);
  return i.push(o), o;
}
function _u(e, t) {
  return { type: "AbsenceFunction", kind: e, body: kt(t?.body) };
}
function ze(e) {
  return { type: "Alternative", body: ao(e?.body) };
}
function oi(e, t) {
  const n = { type: "Assertion", kind: e };
  return (e === "word_boundary" || e === "text_segment_boundary") && (n.negate = !!t?.negate), n;
}
function ai(e, t) {
  const n = !!t?.orphan;
  return { type: "Backreference", ref: e, ...n && { orphan: n } };
}
function ro(e, t) {
  const n = { name: void 0, isSubroutined: false, ...t };
  if (n.name !== void 0 && !Fu(n.name)) throw new Error(`Group name "${n.name}" invalid in Oniguruma`);
  return { type: "CapturingGroup", number: e, ...n.name && { name: n.name }, ...n.isSubroutined && { isSubroutined: n.isSubroutined }, body: kt(t?.body) };
}
function fn(e, t) {
  const n = { useLastValid: false, ...t };
  if (e > 1114111) {
    const i = e.toString(16);
    if (n.useLastValid) e = 1114111;
    else throw e > 1310719 ? new Error(`Invalid code point out of range "\\x{${i}}"`) : new Error(`Invalid code point out of range in JS "\\x{${i}}"`);
  }
  return { type: "Character", value: e };
}
function jt(e) {
  const t = { kind: "union", negate: false, ...e };
  return { type: "CharacterClass", kind: t.kind, negate: t.negate, body: ao(e?.body) };
}
function Au(e, t) {
  if (t.value < e.value) throw new Error("Character class range out of order");
  return { type: "CharacterClassRange", min: e, max: t };
}
function li(e, t) {
  const n = !!t?.negate, i = { type: "CharacterSet", kind: e };
  return (e === "digit" || e === "hex" || e === "newline" || e === "space" || e === "word") && (i.negate = n), (e === "text_segment" || e === "newline" && !n) && (i.variableLength = true), i;
}
function Tu(e, t = {}) {
  if (e === "keep") return { type: "Directive", kind: e };
  if (e === "flags") return { type: "Directive", kind: e, flags: nt(t.flags) };
  throw new Error(`Unexpected directive kind "${e}"`);
}
function Mu(e) {
  return { type: "Flags", ...e };
}
function re(e) {
  const t = e?.atomic, n = e?.flags;
  if (t && n) throw new Error("Atomic group cannot have flags");
  return { type: "Group", ...t && { atomic: t }, ...n && { flags: n }, body: kt(e?.body) };
}
function Ne(e) {
  const t = { behind: false, negate: false, ...e };
  return { type: "LookaroundAssertion", kind: t.behind ? "lookbehind" : "lookahead", negate: t.negate, body: kt(e?.body) };
}
function Iu(e, t, n) {
  return { type: "NamedCallout", kind: e, tag: t, arguments: n };
}
function Nu(e, t) {
  const n = !!t?.negate;
  if (!Li.has(e)) throw new Error(`Invalid POSIX class "${e}"`);
  return { type: "CharacterSet", kind: "posix", value: e, negate: n };
}
function so(e, t, n, i) {
  if (t > n) throw new Error("Invalid reversed quantifier range");
  return { type: "Quantifier", kind: e, min: t, max: n, body: i };
}
function Pu(e, t) {
  return { type: "Regex", body: kt(t?.body), flags: e };
}
function oo(e) {
  return { type: "Subroutine", ref: e };
}
function Xe(e, t) {
  const n = { negate: false, normalizeUnknownPropertyNames: false, skipPropertyNameValidation: false, unicodePropertyMap: null, ...t };
  let i = n.unicodePropertyMap?.get(pn(e));
  if (!i) {
    if (n.normalizeUnknownPropertyNames) i = Hu(e);
    else if (n.unicodePropertyMap && !n.skipPropertyNameValidation) throw new Error(U`Invalid Unicode property "\p{${e}}"`);
  }
  return { type: "CharacterSet", kind: "property", value: i ?? e, negate: n.negate };
}
function Ou({ flags: e, kind: t, name: n, negate: i, number: r }) {
  switch (t) {
    case "absence_repeater":
      return _u("repeater");
    case "atomic":
      return re({ atomic: true });
    case "capturing":
      return ro(r, { name: n });
    case "group":
      return re({ flags: e });
    case "lookahead":
    case "lookbehind":
      return Ne({ behind: t === "lookbehind", negate: i });
    default:
      throw new Error(`Unexpected group kind "${t}"`);
  }
}
function kt(e) {
  if (e === void 0) e = [ze()];
  else if (!Array.isArray(e) || !e.length || !e.every((t) => t.type === "Alternative")) throw new Error("Invalid body; expected array of one or more Alternative nodes");
  return e;
}
function ao(e) {
  if (e === void 0) e = [];
  else if (!Array.isArray(e) || !e.every((t) => !!t.type)) throw new Error("Invalid body; expected array of nodes");
  return e;
}
function wr(e) {
  return e.type === "LookaroundAssertion" && e.kind === "lookahead";
}
function Sr(e) {
  return e.type === "LookaroundAssertion" && e.kind === "lookbehind";
}
function Fu(e) {
  return /^[\p{Alpha}\p{Pc}][^)]*$/u.test(e);
}
function Hu(e) {
  return e.trim().replace(/[- _]+/g, "_").replace(/[A-Z][a-z]+(?=[A-Z])/g, "$&_").replace(/[A-Za-z]+/g, (t) => t[0].toUpperCase() + t.slice(1).toLowerCase());
}
function pn(e) {
  return e.replace(/[- _]+/g, "").toLowerCase();
}
function Cr(e, t) {
  const n = t;
  return nt(e, `Unclosed character class${n?.type === "Character" && n.value === 93 && n.raw === "]" ? ' (started with "]")' : ""}`);
}
function xr(e) {
  return nt(e, "Unclosed group");
}
function pt(e, t, n = null) {
  function i(s, o) {
    for (let a = 0; a < s.length; a++) {
      const l = r(s[a], o, a, s);
      a = Math.max(-1, a + l);
    }
  }
  function r(s, o = null, a = null, l = null) {
    let c = 0, u = false;
    const d = { node: s, parent: o, key: a, container: l, root: e, remove() {
      It(l).splice(Math.max(0, We(a) + c), 1), c--, u = true;
    }, removeAllNextSiblings() {
      return It(l).splice(We(a) + 1);
    }, removeAllPrevSiblings() {
      const m = We(a) + c;
      return c -= m, It(l).splice(0, Math.max(0, m));
    }, replaceWith(m, b = {}) {
      const w = !!b.traverse;
      l ? l[Math.max(0, We(a) + c)] = m : nt(o, "Can't replace root node")[a] = m, w && r(m, o, a, l), u = true;
    }, replaceWithMultiple(m, b = {}) {
      const w = !!b.traverse;
      if (It(l).splice(Math.max(0, We(a) + c), 1, ...m), c += m.length - 1, w) {
        let C = 0;
        for (let E = 0; E < m.length; E++) C += r(m[E], o, We(a) + E + C, l);
      }
      u = true;
    }, skip() {
      u = true;
    } }, { type: h } = s, f = t["*"], g = t[h], y = typeof f == "function" ? f : f?.enter, v = typeof g == "function" ? g : g?.enter;
    if (y?.(d, n), v?.(d, n), !u) switch (h) {
      case "AbsenceFunction":
      case "Alternative":
      case "CapturingGroup":
      case "CharacterClass":
      case "Group":
      case "LookaroundAssertion":
        i(s.body, s);
        break;
      case "Assertion":
      case "Backreference":
      case "Character":
      case "CharacterSet":
      case "Directive":
      case "Flags":
      case "NamedCallout":
      case "Subroutine":
        break;
      case "CharacterClassRange":
        r(s.min, s, "min"), r(s.max, s, "max");
        break;
      case "Quantifier":
        r(s.body, s, "body");
        break;
      case "Regex":
        i(s.body, s), r(s.flags, s, "flags");
        break;
      default:
        throw new Error(`Unexpected node type "${h}"`);
    }
    return g?.exit?.(d, n), f?.exit?.(d, n), c;
  }
  return r(e), e;
}
function It(e) {
  if (!Array.isArray(e)) throw new Error("Container expected");
  return e;
}
function We(e) {
  if (typeof e != "number") throw new Error("Numeric key expected");
  return e;
}
var $u = String.raw`\(\?(?:[:=!>A-Za-z\-]|<[=!]|\(DEFINE\))`;
function Du(e, t) {
  for (let n = 0; n < e.length; n++)
    e[n] >= t && e[n]++;
}
function Uu(e, t, n, i) {
  return e.slice(0, t) + i + e.slice(t + n.length);
}
var te = Object.freeze({
  DEFAULT: "DEFAULT",
  CHAR_CLASS: "CHAR_CLASS"
});
function Ai(e, t, n, i) {
  const r = new RegExp(String.raw`${t}|(?<$skip>\[\^?|\\?.)`, "gsu"), s = [false];
  let o = 0, a = "";
  for (const l of e.matchAll(r)) {
    const { 0: c, groups: { $skip: u } } = l;
    if (!u && (!i || i === te.DEFAULT == !o)) {
      n instanceof Function ? a += n(l, {
        context: o ? te.CHAR_CLASS : te.DEFAULT,
        negated: s[s.length - 1]
      }) : a += n;
      continue;
    }
    c[0] === "[" ? (o++, s.push(c[1] === "^")) : c === "]" && o && (o--, s.pop()), a += c;
  }
  return a;
}
function lo(e, t, n, i) {
  Ai(e, t, n, i);
}
function zu(e, t, n = 0, i) {
  if (!new RegExp(t, "su").test(e))
    return null;
  const r = new RegExp(`${t}|(?<$skip>\\\\?.)`, "gsu");
  r.lastIndex = n;
  let s = 0, o;
  for (; o = r.exec(e); ) {
    const { 0: a, groups: { $skip: l } } = o;
    if (!l && (!i || i === te.DEFAULT == !s))
      return o;
    a === "[" ? s++ : a === "]" && s && s--, r.lastIndex == o.index && r.lastIndex++;
  }
  return null;
}
function Nt(e, t, n) {
  return !!zu(e, t, 0, n);
}
function Bu(e, t) {
  const n = /\\?./gsu;
  n.lastIndex = t;
  let i = e.length, r = 0, s = 1, o;
  for (; o = n.exec(e); ) {
    const [a] = o;
    if (a === "[")
      r++;
    else if (r)
      a === "]" && r--;
    else if (a === "(")
      s++;
    else if (a === ")" && (s--, !s)) {
      i = o.index;
      break;
    }
  }
  return e.slice(t, i);
}
var kr = new RegExp(String.raw`(?<noncapturingStart>${$u})|(?<capturingStart>\((?:\?<[^>]+>)?)|\\?.`, "gsu");
function Gu(e, t) {
  const n = t?.hiddenCaptures ?? [];
  let i = t?.captureTransfers ?? /* @__PURE__ */ new Map();
  if (!/\(\?>/.test(e))
    return {
      pattern: e,
      captureTransfers: i,
      hiddenCaptures: n
    };
  const r = "(?>", s = "(?:(?=(", o = [0], a = [];
  let l = 0, c = 0, u = NaN, d;
  do {
    d = false;
    let h = 0, f = 0, g = false, y;
    for (kr.lastIndex = Number.isNaN(u) ? 0 : u + s.length; y = kr.exec(e); ) {
      const { 0: v, index: m, groups: { capturingStart: b, noncapturingStart: w } } = y;
      if (v === "[")
        h++;
      else if (h)
        v === "]" && h--;
      else if (v === r && !g)
        u = m, g = true;
      else if (g && w)
        f++;
      else if (b)
        g ? f++ : (l++, o.push(l + c));
      else if (v === ")" && g) {
        if (!f) {
          c++;
          const C = l + c;
          if (e = `${e.slice(0, u)}${s}${e.slice(u + r.length, m)}))<$$${C}>)${e.slice(m + 1)}`, d = true, a.push(C), Du(n, C), i.size) {
            const E = /* @__PURE__ */ new Map();
            i.forEach((L, R) => {
              E.set(
                R >= C ? R + 1 : R,
                L.map((I) => I >= C ? I + 1 : I)
              );
            }), i = E;
          }
          break;
        }
        f--;
      }
    }
  } while (d);
  return n.push(...a), e = Ai(
    e,
    String.raw`\\(?<backrefNum>[1-9]\d*)|<\$\$(?<wrappedBackrefNum>\d+)>`,
    ({ 0: h, groups: { backrefNum: f, wrappedBackrefNum: g } }) => {
      if (f) {
        const y = +f;
        if (y > o.length - 1)
          throw new Error(`Backref "${h}" greater than number of captures`);
        return `\\${o[y]}`;
      }
      return `\\${g}`;
    },
    te.DEFAULT
  ), {
    pattern: e,
    captureTransfers: i,
    hiddenCaptures: n
  };
}
var co = String.raw`(?:[?*+]|\{\d+(?:,\d*)?\})`;
var Mn = new RegExp(String.raw`
\\(?: \d+
  | c[A-Za-z]
  | [gk]<[^>]+>
  | [pPu]\{[^\}]+\}
  | u[A-Fa-f\d]{4}
  | x[A-Fa-f\d]{2}
  )
| \((?: \? (?: [:=!>]
  | <(?:[=!]|[^>]+>)
  | [A-Za-z\-]+:
  | \(DEFINE\)
  ))?
| (?<qBase>${co})(?<qMod>[?+]?)(?<invalidQ>[?*+\{]?)
| \\?.
`.replace(/\s+/g, ""), "gsu");
function Wu(e) {
  if (!new RegExp(`${co}\\+`).test(e))
    return {
      pattern: e
    };
  const t = [];
  let n = null, i = null, r = "", s = 0, o;
  for (Mn.lastIndex = 0; o = Mn.exec(e); ) {
    const { 0: a, index: l, groups: { qBase: c, qMod: u, invalidQ: d } } = o;
    if (a === "[")
      s || (i = l), s++;
    else if (a === "]")
      s ? s-- : i = null;
    else if (!s)
      if (u === "+" && r && !r.startsWith("(")) {
        if (d)
          throw new Error(`Invalid quantifier "${a}"`);
        let h = -1;
        if (/^\{\d+\}$/.test(c))
          e = Uu(e, l + c.length, u, "");
        else {
          if (r === ")" || r === "]") {
            const f = r === ")" ? n : i;
            if (f === null)
              throw new Error(`Invalid unmatched "${r}"`);
            e = `${e.slice(0, f)}(?>${e.slice(f, l)}${c})${e.slice(l + a.length)}`;
          } else
            e = `${e.slice(0, l - r.length)}(?>${r}${c})${e.slice(l + a.length)}`;
          h += 4;
        }
        Mn.lastIndex += h;
      } else a[0] === "(" ? t.push(l) : a === ")" && (n = t.length ? t.pop() : null);
    r = a;
  }
  return {
    pattern: e
  };
}
var ee = String.raw;
var ju = ee`\\g<(?<gRNameOrNum>[^>&]+)&R=(?<gRDepth>[^>]+)>`;
var ci = ee`\(\?R=(?<rDepth>[^\)]+)\)|${ju}`;
var gn = ee`\(\?<(?![=!])(?<captureName>[^>]+)>`;
var uo = ee`${gn}|(?<unnamed>\()(?!\?)`;
var Ie = new RegExp(ee`${gn}|${ci}|\(\?|\\?.`, "gsu");
var In = "Cannot use multiple overlapping recursions";
function Vu(e, t) {
  const { hiddenCaptures: n, mode: i } = {
    hiddenCaptures: [],
    mode: "plugin",
    ...t
  };
  let r = t?.captureTransfers ?? /* @__PURE__ */ new Map();
  if (!new RegExp(ci, "su").test(e))
    return {
      pattern: e,
      captureTransfers: r,
      hiddenCaptures: n
    };
  if (i === "plugin" && Nt(e, ee`\(\?\(DEFINE\)`, te.DEFAULT))
    throw new Error("DEFINE groups cannot be used with recursion");
  const s = [], o = Nt(e, ee`\\[1-9]`, te.DEFAULT), a = /* @__PURE__ */ new Map(), l = [];
  let c = false, u = 0, d = 0, h;
  for (Ie.lastIndex = 0; h = Ie.exec(e); ) {
    const { 0: f, groups: { captureName: g, rDepth: y, gRNameOrNum: v, gRDepth: m } } = h;
    if (f === "[")
      u++;
    else if (u)
      f === "]" && u--;
    else if (y) {
      if (Er(y), c)
        throw new Error(In);
      if (o)
        throw new Error(
          // When used in `external` mode by transpilers other than Regex+, backrefs might have
          // gone through conversion from named to numbered, so avoid a misleading error
          `${i === "external" ? "Backrefs" : "Numbered backrefs"} cannot be used with global recursion`
        );
      const b = e.slice(0, h.index), w = e.slice(Ie.lastIndex);
      if (Nt(w, ci, te.DEFAULT))
        throw new Error(In);
      const C = +y - 1;
      e = Rr(
        b,
        w,
        C,
        false,
        n,
        s,
        d
      ), r = _r(
        r,
        b,
        C,
        s.length,
        0,
        d
      );
      break;
    } else if (v) {
      Er(m);
      let b = false;
      for (const W of l)
        if (W.name === v || W.num === +v) {
          if (b = true, W.hasRecursedWithin)
            throw new Error(In);
          break;
        }
      if (!b)
        throw new Error(ee`Recursive \g cannot be used outside the referenced group "${i === "external" ? v : ee`\g<${v}&R=${m}>`}"`);
      const w = a.get(v), C = Bu(e, w);
      if (o && Nt(C, ee`${gn}|\((?!\?)`, te.DEFAULT))
        throw new Error(
          // When used in `external` mode by transpilers other than Regex+, backrefs might have
          // gone through conversion from named to numbered, so avoid a misleading error
          `${i === "external" ? "Backrefs" : "Numbered backrefs"} cannot be used with recursion of capturing groups`
        );
      const E = e.slice(w, h.index), L = C.slice(E.length + f.length), R = s.length, I = +m - 1, M = Rr(
        E,
        L,
        I,
        true,
        n,
        s,
        d
      );
      r = _r(
        r,
        E,
        I,
        s.length - R,
        R,
        d
      );
      const q = e.slice(0, w), ye = e.slice(w + C.length);
      e = `${q}${M}${ye}`, Ie.lastIndex += M.length - f.length - E.length - L.length, l.forEach((W) => W.hasRecursedWithin = true), c = true;
    } else if (g)
      d++, a.set(String(d), Ie.lastIndex), a.set(g, Ie.lastIndex), l.push({
        num: d,
        name: g
      });
    else if (f[0] === "(") {
      const b = f === "(";
      b && (d++, a.set(String(d), Ie.lastIndex)), l.push(b ? { num: d } : {});
    } else f === ")" && l.pop();
  }
  return n.push(...s), {
    pattern: e,
    captureTransfers: r,
    hiddenCaptures: n
  };
}
function Er(e) {
  const t = `Max depth must be integer between 2 and 100; used ${e}`;
  if (!/^[1-9]\d*$/.test(e))
    throw new Error(t);
  if (e = +e, e < 2 || e > 100)
    throw new Error(t);
}
function Rr(e, t, n, i, r, s, o) {
  const a = /* @__PURE__ */ new Set();
  i && lo(e + t, gn, ({ groups: { captureName: c } }) => {
    a.add(c);
  }, te.DEFAULT);
  const l = [
    n,
    i ? a : null,
    r,
    s,
    o
  ];
  return `${e}${Lr(`(?:${e}`, "forward", ...l)}(?:)${Lr(`${t})`, "backward", ...l)}${t}`;
}
function Lr(e, t, n, i, r, s, o) {
  const l = (u) => t === "forward" ? u + 2 : n - u + 2 - 1;
  let c = "";
  for (let u = 0; u < n; u++) {
    const d = l(u);
    c += Ai(
      e,
      ee`${uo}|\\k<(?<backref>[^>]+)>`,
      ({ 0: h, groups: { captureName: f, unnamed: g, backref: y } }) => {
        if (y && i && !i.has(y))
          return h;
        const v = `_$${d}`;
        if (g || f) {
          const m = o + s.length + 1;
          return s.push(m), qu(r, m), g ? h : `(?<${f}${v}>`;
        }
        return ee`\k<${y}${v}>`;
      },
      te.DEFAULT
    );
  }
  return c;
}
function qu(e, t) {
  for (let n = 0; n < e.length; n++)
    e[n] >= t && e[n]++;
}
function _r(e, t, n, i, r, s) {
  if (e.size && i) {
    let o = 0;
    lo(t, uo, () => o++, te.DEFAULT);
    const a = s - o + r, l = /* @__PURE__ */ new Map();
    return e.forEach((c, u) => {
      const d = (i - o * n) / n, h = o * n, f = u > a + o ? u + i : u, g = [];
      for (const y of c)
        if (y <= a)
          g.push(y);
        else if (y > a + o + d)
          g.push(y + i);
        else if (y <= a + o)
          for (let v = 0; v <= n; v++)
            g.push(y + o * v);
        else
          for (let v = 0; v <= n; v++)
            g.push(y + h + d * v);
      l.set(f, g);
    }), l;
  }
  return e;
}
var F = String.fromCodePoint;
var k = String.raw;
var se = {};
var mn = globalThis.RegExp;
se.flagGroups = (() => {
  try {
    new mn("(?i:)");
  } catch {
    return false;
  }
  return true;
})();
se.unicodeSets = (() => {
  try {
    new mn("[[]]", "v");
  } catch {
    return false;
  }
  return true;
})();
se.bugFlagVLiteralHyphenIsRange = se.unicodeSets ? (() => {
  try {
    new mn(k`[\d\-a]`, "v");
  } catch {
    return true;
  }
  return false;
})() : false;
se.bugNestedClassIgnoresNegation = se.unicodeSets && new mn("[[^a]]", "v").test("a");
function an(e, { enable: t, disable: n }) {
  return {
    dotAll: !n?.dotAll && !!(t?.dotAll || e.dotAll),
    ignoreCase: !n?.ignoreCase && !!(t?.ignoreCase || e.ignoreCase)
  };
}
function wt(e, t, n) {
  return e.has(t) || e.set(t, n), e.get(t);
}
function ui(e, t) {
  return Ar[e] >= Ar[t];
}
function Ku(e, t) {
  if (e == null)
    throw new Error(t ?? "Value expected");
  return e;
}
var Ar = {
  ES2025: 2025,
  ES2024: 2024,
  ES2018: 2018
};
var Xu = (
  /** @type {const} */
  {
    auto: "auto",
    ES2025: "ES2025",
    ES2024: "ES2024",
    ES2018: "ES2018"
  }
);
function ho(e = {}) {
  if ({}.toString.call(e) !== "[object Object]")
    throw new Error("Unexpected options");
  if (e.target !== void 0 && !Xu[e.target])
    throw new Error(`Unexpected target "${e.target}"`);
  const t = {
    // Sets the level of emulation rigor/strictness.
    accuracy: "default",
    // Disables advanced emulation that relies on returning a `RegExp` subclass, resulting in
    // certain patterns not being emulatable.
    avoidSubclass: false,
    // Oniguruma flags; a string with `i`, `m`, `x`, `D`, `S`, `W`, `y{g}` in any order (all
    // optional). Oniguruma's `m` is equivalent to JavaScript's `s` (`dotAll`).
    flags: "",
    // Include JavaScript flag `g` (`global`) in the result.
    global: false,
    // Include JavaScript flag `d` (`hasIndices`) in the result.
    hasIndices: false,
    // Delay regex construction until first use if the transpiled pattern is at least this length.
    lazyCompileLength: 1 / 0,
    // JavaScript version used for generated regexes. Using `auto` detects the best value based on
    // your environment. Later targets allow faster processing, simpler generated source, and
    // support for additional features.
    target: "auto",
    // Disables minifications that simplify the pattern without changing the meaning.
    verbose: false,
    ...e,
    // Advanced options that override standard behavior, error checking, and flags when enabled.
    rules: {
      // Useful with TextMate grammars that merge backreferences across patterns.
      allowOrphanBackrefs: false,
      // Use ASCII `\b` and `\B`, which increases search performance of generated regexes.
      asciiWordBoundaries: false,
      // Allow unnamed captures and numbered calls (backreferences and subroutines) when using
      // named capture. This is Oniguruma option `ONIG_OPTION_CAPTURE_GROUP`; on by default in
      // `vscode-oniguruma`.
      captureGroup: false,
      // Change the recursion depth limit from Oniguruma's `20` to an integer `2`–`20`.
      recursionLimit: 20,
      // `^` as `\A`; `$` as`\Z`. Improves search performance of generated regexes without changing
      // the meaning if searching line by line. This is Oniguruma option `ONIG_OPTION_SINGLELINE`.
      singleline: false,
      ...e.rules
    }
  };
  return t.target === "auto" && (t.target = se.flagGroups ? "ES2025" : se.unicodeSets ? "ES2024" : "ES2018"), t;
}
var Yu = "[	-\r ]";
var Qu = /* @__PURE__ */ new Set([
  F(304),
  // İ
  F(305)
  // ı
]);
var ue = k`[\p{L}\p{M}\p{N}\p{Pc}]`;
function fo(e) {
  if (Qu.has(e))
    return [e];
  const t = /* @__PURE__ */ new Set(), n = e.toLowerCase(), i = n.toUpperCase(), r = ed.get(n), s = Zu.get(n), o = Ju.get(n);
  return [...i].length === 1 && t.add(i), o && t.add(o), r && t.add(r), t.add(n), s && t.add(s), [...t];
}
var Ti = /* @__PURE__ */ new Map(
  `C Other
Cc Control cntrl
Cf Format
Cn Unassigned
Co Private_Use
Cs Surrogate
L Letter
LC Cased_Letter
Ll Lowercase_Letter
Lm Modifier_Letter
Lo Other_Letter
Lt Titlecase_Letter
Lu Uppercase_Letter
M Mark Combining_Mark
Mc Spacing_Mark
Me Enclosing_Mark
Mn Nonspacing_Mark
N Number
Nd Decimal_Number digit
Nl Letter_Number
No Other_Number
P Punctuation punct
Pc Connector_Punctuation
Pd Dash_Punctuation
Pe Close_Punctuation
Pf Final_Punctuation
Pi Initial_Punctuation
Po Other_Punctuation
Ps Open_Punctuation
S Symbol
Sc Currency_Symbol
Sk Modifier_Symbol
Sm Math_Symbol
So Other_Symbol
Z Separator
Zl Line_Separator
Zp Paragraph_Separator
Zs Space_Separator
ASCII
ASCII_Hex_Digit AHex
Alphabetic Alpha
Any
Assigned
Bidi_Control Bidi_C
Bidi_Mirrored Bidi_M
Case_Ignorable CI
Cased
Changes_When_Casefolded CWCF
Changes_When_Casemapped CWCM
Changes_When_Lowercased CWL
Changes_When_NFKC_Casefolded CWKCF
Changes_When_Titlecased CWT
Changes_When_Uppercased CWU
Dash
Default_Ignorable_Code_Point DI
Deprecated Dep
Diacritic Dia
Emoji
Emoji_Component EComp
Emoji_Modifier EMod
Emoji_Modifier_Base EBase
Emoji_Presentation EPres
Extended_Pictographic ExtPict
Extender Ext
Grapheme_Base Gr_Base
Grapheme_Extend Gr_Ext
Hex_Digit Hex
IDS_Binary_Operator IDSB
IDS_Trinary_Operator IDST
ID_Continue IDC
ID_Start IDS
Ideographic Ideo
Join_Control Join_C
Logical_Order_Exception LOE
Lowercase Lower
Math
Noncharacter_Code_Point NChar
Pattern_Syntax Pat_Syn
Pattern_White_Space Pat_WS
Quotation_Mark QMark
Radical
Regional_Indicator RI
Sentence_Terminal STerm
Soft_Dotted SD
Terminal_Punctuation Term
Unified_Ideograph UIdeo
Uppercase Upper
Variation_Selector VS
White_Space space
XID_Continue XIDC
XID_Start XIDS`.split(/\s/).map((e) => [pn(e), e])
);
var Zu = /* @__PURE__ */ new Map([
  ["s", F(383)],
  // s, ſ
  [F(383), "s"]
  // ſ, s
]);
var Ju = /* @__PURE__ */ new Map([
  [F(223), F(7838)],
  // ß, ẞ
  [F(107), F(8490)],
  // k, K (Kelvin)
  [F(229), F(8491)],
  // å, Å (Angstrom)
  [F(969), F(8486)]
  // ω, Ω (Ohm)
]);
var ed = new Map([
  Ce(453),
  Ce(456),
  Ce(459),
  Ce(498),
  ...Nn(8072, 8079),
  ...Nn(8088, 8095),
  ...Nn(8104, 8111),
  Ce(8124),
  Ce(8140),
  Ce(8188)
]);
var td = /* @__PURE__ */ new Map([
  ["alnum", k`[\p{Alpha}\p{Nd}]`],
  ["alpha", k`\p{Alpha}`],
  ["ascii", k`\p{ASCII}`],
  ["blank", k`[\p{Zs}\t]`],
  ["cntrl", k`\p{Cc}`],
  ["digit", k`\p{Nd}`],
  ["graph", k`[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]`],
  ["lower", k`\p{Lower}`],
  ["print", k`[[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]\p{Zs}]`],
  ["punct", k`[\p{P}\p{S}]`],
  // Updated value from Onig 6.9.9; changed from Unicode `\p{punct}`
  ["space", k`\p{space}`],
  ["upper", k`\p{Upper}`],
  ["word", k`[\p{Alpha}\p{M}\p{Nd}\p{Pc}]`],
  ["xdigit", k`\p{AHex}`]
]);
function nd(e, t) {
  const n = [];
  for (let i = e; i <= t; i++)
    n.push(i);
  return n;
}
function Ce(e) {
  const t = F(e);
  return [t.toLowerCase(), t];
}
function Nn(e, t) {
  return nd(e, t).map((n) => Ce(n));
}
var po = /* @__PURE__ */ new Set([
  "Lower",
  "Lowercase",
  "Upper",
  "Uppercase",
  "Ll",
  "Lowercase_Letter",
  "Lt",
  "Titlecase_Letter",
  "Lu",
  "Uppercase_Letter"
  // The `Changes_When_*` properties (and their aliases) could be included, but they're very rare.
  // Some other properties include a handful of chars with specific cases only, but these chars are
  // generally extreme edge cases and using such properties case insensitively generally produces
  // undesired behavior anyway
]);
function id(e, t) {
  const n = {
    // A couple edge cases exist where options `accuracy` and `bestEffortTarget` are used:
    // - `CharacterSet` kind `text_segment` (`\X`): An exact representation would require heavy
    //   Unicode data; a best-effort approximation requires knowing the target.
    // - `CharacterSet` kind `posix` with values `graph` and `print`: Their complex Unicode
    //   representations would be hard to change to ASCII versions after the fact in the generator
    //   based on `target`/`accuracy`, so produce the appropriate structure here.
    accuracy: "default",
    asciiWordBoundaries: false,
    avoidSubclass: false,
    bestEffortTarget: "ES2025",
    ...t
  };
  go(e);
  const i = {
    accuracy: n.accuracy,
    asciiWordBoundaries: n.asciiWordBoundaries,
    avoidSubclass: n.avoidSubclass,
    flagDirectivesByAlt: /* @__PURE__ */ new Map(),
    jsGroupNameMap: /* @__PURE__ */ new Map(),
    minTargetEs2024: ui(n.bestEffortTarget, "ES2024"),
    passedLookbehind: false,
    strategy: null,
    // Subroutines can appear before the groups they ref, so collect reffed nodes for a second pass 
    subroutineRefMap: /* @__PURE__ */ new Map(),
    supportedGNodes: /* @__PURE__ */ new Set(),
    digitIsAscii: e.flags.digitIsAscii,
    spaceIsAscii: e.flags.spaceIsAscii,
    wordIsAscii: e.flags.wordIsAscii
  };
  pt(e, rd, i);
  const r = {
    dotAll: e.flags.dotAll,
    ignoreCase: e.flags.ignoreCase
  }, s = {
    currentFlags: r,
    prevFlags: null,
    globalFlags: r,
    groupOriginByCopy: /* @__PURE__ */ new Map(),
    groupsByName: /* @__PURE__ */ new Map(),
    multiplexCapturesToLeftByRef: /* @__PURE__ */ new Map(),
    openRefs: /* @__PURE__ */ new Map(),
    reffedNodesByReferencer: /* @__PURE__ */ new Map(),
    subroutineRefMap: i.subroutineRefMap
  };
  pt(e, sd, s);
  const o = {
    groupsByName: s.groupsByName,
    highestOrphanBackref: 0,
    numCapturesToLeft: 0,
    reffedNodesByReferencer: s.reffedNodesByReferencer
  };
  return pt(e, od, o), e._originMap = s.groupOriginByCopy, e._strategy = i.strategy, e;
}
var rd = {
  AbsenceFunction({ node: e, parent: t, replaceWith: n }) {
    const { body: i, kind: r } = e;
    if (r === "repeater") {
      const s = re();
      s.body[0].body.push(
        // Insert own alts as `body`
        Ne({ negate: true, body: i }),
        Xe("Any")
      );
      const o = re();
      o.body[0].body.push(
        so("greedy", 0, 1 / 0, s)
      ), n(N(o, t), { traverse: true });
    } else
      throw new Error('Unsupported absence function "(?~|"');
  },
  Alternative: {
    enter({ node: e, parent: t, key: n }, { flagDirectivesByAlt: i }) {
      const r = e.body.filter((s) => s.kind === "flags");
      for (let s = n + 1; s < t.body.length; s++) {
        const o = t.body[s];
        wt(i, o, []).push(...r);
      }
    },
    exit({ node: e }, { flagDirectivesByAlt: t }) {
      if (t.get(e)?.length) {
        const n = bo(t.get(e));
        if (n) {
          const i = re({ flags: n });
          i.body[0].body = e.body, e.body = [N(i, e)];
        }
      }
    }
  },
  Assertion({ node: e, parent: t, key: n, container: i, root: r, remove: s, replaceWith: o }, a) {
    const { kind: l, negate: c } = e, { asciiWordBoundaries: u, avoidSubclass: d, supportedGNodes: h, wordIsAscii: f } = a;
    if (l === "text_segment_boundary")
      throw new Error(`Unsupported text segment boundary "\\${c ? "Y" : "y"}"`);
    if (l === "line_end")
      o(N(Ne({ body: [
        ze({ body: [oi("string_end")] }),
        ze({ body: [fn(10)] })
        // `\n`
      ] }), t));
    else if (l === "line_start")
      o(N(de(k`(?<=\A|\n(?!\z))`, { skipLookbehindValidation: true }), t));
    else if (l === "search_start")
      if (h.has(e))
        r.flags.sticky = true, s();
      else {
        const g = i[n - 1];
        if (g && hd(g))
          o(N(Ne({ negate: true }), t));
        else {
          if (d)
            throw new Error(k`Uses "\G" in a way that requires a subclass`);
          o(xe(oi("string_start"), t)), a.strategy = "clip_search";
        }
      }
    else if (!(l === "string_end" || l === "string_start")) if (l === "string_end_newline")
      o(N(de(k`(?=\n?\z)`), t));
    else if (l === "word_boundary") {
      if (!f && !u) {
        const g = `(?:(?<=${ue})(?!${ue})|(?<!${ue})(?=${ue}))`, y = `(?:(?<=${ue})(?=${ue})|(?<!${ue})(?!${ue}))`;
        o(N(de(c ? y : g), t));
      }
    } else
      throw new Error(`Unexpected assertion kind "${l}"`);
  },
  Backreference({ node: e }, { jsGroupNameMap: t }) {
    let { ref: n } = e;
    typeof n == "string" && !On(n) && (n = Pn(n, t), e.ref = n);
  },
  CapturingGroup({ node: e }, { jsGroupNameMap: t, subroutineRefMap: n }) {
    let { name: i } = e;
    i && !On(i) && (i = Pn(i, t), e.name = i), n.set(e.number, e), i && n.set(i, e);
  },
  CharacterClassRange({ node: e, parent: t, replaceWith: n }) {
    if (t.kind === "intersection") {
      const i = jt({ body: [e] });
      n(N(i, t), { traverse: true });
    }
  },
  CharacterSet({ node: e, parent: t, replaceWith: n }, { accuracy: i, minTargetEs2024: r, digitIsAscii: s, spaceIsAscii: o, wordIsAscii: a }) {
    const { kind: l, negate: c, value: u } = e;
    if (s && (l === "digit" || u === "digit")) {
      n(xe(li("digit", { negate: c }), t));
      return;
    }
    if (o && (l === "space" || u === "space")) {
      n(N(Fn(de(Yu), c), t));
      return;
    }
    if (a && (l === "word" || u === "word")) {
      n(xe(li("word", { negate: c }), t));
      return;
    }
    if (l === "any")
      n(xe(Xe("Any"), t));
    else if (l === "digit")
      n(xe(Xe("Nd", { negate: c }), t));
    else if (l !== "dot") if (l === "text_segment") {
      if (i === "strict")
        throw new Error(k`Use of "\X" requires non-strict accuracy`);
      const d = "\\p{Emoji}(?:\\p{EMod}|\\uFE0F\\u20E3?|[\\x{E0020}-\\x{E007E}]+\\x{E007F})?", h = k`\p{RI}{2}|${d}(?:\u200D${d})*`;
      n(N(de(
        // Close approximation of an extended grapheme cluster; see <unicode.org/reports/tr29/>
        k`(?>\r\n|${r ? k`\p{RGI_Emoji}` : h}|\P{M}\p{M}*)`,
        // Allow JS property `RGI_Emoji` through
        { skipPropertyNameValidation: true }
      ), t));
    } else if (l === "hex")
      n(xe(Xe("AHex", { negate: c }), t));
    else if (l === "newline")
      n(N(de(c ? `[^
]` : `(?>\r
?|[
\v\f\x85\u2028\u2029])`), t));
    else if (l === "posix")
      if (!r && (u === "graph" || u === "print")) {
        if (i === "strict")
          throw new Error(`POSIX class "${u}" requires min target ES2024 or non-strict accuracy`);
        let d = {
          graph: "!-~",
          print: " -~"
        }[u];
        c && (d = `\0-${F(d.codePointAt(0) - 1)}${F(d.codePointAt(2) + 1)}-\u{10FFFF}`), n(N(de(`[${d}]`), t));
      } else
        n(N(Fn(de(td.get(u)), c), t));
    else if (l === "property")
      Ti.has(pn(u)) || (e.key = "sc");
    else if (l === "space")
      n(xe(Xe("space", { negate: c }), t));
    else if (l === "word")
      n(N(Fn(de(ue), c), t));
    else
      throw new Error(`Unexpected character set kind "${l}"`);
  },
  Directive({ node: e, parent: t, root: n, remove: i, replaceWith: r, removeAllPrevSiblings: s, removeAllNextSiblings: o }) {
    const { kind: a, flags: l } = e;
    if (a === "flags")
      if (!l.enable && !l.disable)
        i();
      else {
        const c = re({ flags: l });
        c.body[0].body = o(), r(N(c, t), { traverse: true });
      }
    else if (a === "keep") {
      const c = n.body[0], d = n.body.length === 1 && // Not emulatable if within a `CapturingGroup`
      no(c, { type: "Group" }) && c.body[0].body.length === 1 ? c.body[0] : n;
      if (t.parent !== d || d.body.length > 1)
        throw new Error(k`Uses "\K" in a way that's unsupported`);
      const h = Ne({ behind: true });
      h.body[0].body = s(), r(N(h, t));
    } else
      throw new Error(`Unexpected directive kind "${a}"`);
  },
  Flags({ node: e, parent: t }) {
    if (e.posixIsAscii)
      throw new Error('Unsupported flag "P"');
    if (e.textSegmentMode === "word")
      throw new Error('Unsupported flag "y{w}"');
    [
      "digitIsAscii",
      // Flag D
      "extended",
      // Flag x
      "posixIsAscii",
      // Flag P
      "spaceIsAscii",
      // Flag S
      "wordIsAscii",
      // Flag W
      "textSegmentMode"
      // Flag y{g} or y{w}
    ].forEach((n) => delete e[n]), Object.assign(e, {
      // JS flag g; no Onig equiv
      global: false,
      // JS flag d; no Onig equiv
      hasIndices: false,
      // JS flag m; no Onig equiv but its behavior is always on in Onig. Onig's only line break
      // char is line feed, unlike JS, so this flag isn't used since it would produce inaccurate
      // results (also allows `^` and `$` to be used in the generator for string start and end)
      multiline: false,
      // JS flag y; no Onig equiv, but used for `\G` emulation
      sticky: e.sticky ?? false
      // Note: Regex+ doesn't allow explicitly adding flags it handles implicitly, so leave out
      // properties `unicode` (JS flag u) and `unicodeSets` (JS flag v). Keep the existing values
      // for `ignoreCase` (flag i) and `dotAll` (JS flag s, but Onig flag m)
    }), t.options = {
      disable: {
        // Onig uses different rules for flag x than Regex+, so disable the implicit flag
        x: true,
        // Onig has no flag to control "named capture only" mode but contextually applies its
        // behavior when named capturing is used, so disable Regex+'s implicit flag for it
        n: true
      },
      force: {
        // Always add flag v because we're generating an AST that relies on it (it enables JS
        // support for Onig features nested classes, intersection, Unicode properties, etc.).
        // However, the generator might disable flag v based on its `target` option
        v: true
      }
    };
  },
  Group({ node: e }) {
    if (!e.flags)
      return;
    const { enable: t, disable: n } = e.flags;
    t?.extended && delete t.extended, n?.extended && delete n.extended, t?.dotAll && n?.dotAll && delete t.dotAll, t?.ignoreCase && n?.ignoreCase && delete t.ignoreCase, t && !Object.keys(t).length && delete e.flags.enable, n && !Object.keys(n).length && delete e.flags.disable, !e.flags.enable && !e.flags.disable && delete e.flags;
  },
  LookaroundAssertion({ node: e }, t) {
    const { kind: n } = e;
    n === "lookbehind" && (t.passedLookbehind = true);
  },
  NamedCallout({ node: e, parent: t, replaceWith: n }) {
    const { kind: i } = e;
    if (i === "fail")
      n(N(Ne({ negate: true }), t));
    else
      throw new Error(`Unsupported named callout "(*${i.toUpperCase()}"`);
  },
  Quantifier({ node: e }) {
    if (e.body.type === "Quantifier") {
      const t = re();
      t.body[0].body.push(e.body), e.body = N(t, e);
    }
  },
  Regex: {
    enter({ node: e }, { supportedGNodes: t }) {
      const n = [];
      let i = false, r = false;
      for (const s of e.body)
        if (s.body.length === 1 && s.body[0].kind === "search_start")
          s.body.pop();
        else {
          const o = vo(s.body);
          o ? (i = true, Array.isArray(o) ? n.push(...o) : n.push(o)) : r = true;
        }
      i && !r && n.forEach((s) => t.add(s));
    },
    exit(e, { accuracy: t, passedLookbehind: n, strategy: i }) {
      if (t === "strict" && n && i)
        throw new Error(k`Uses "\G" in a way that requires non-strict accuracy`);
    }
  },
  Subroutine({ node: e }, { jsGroupNameMap: t }) {
    let { ref: n } = e;
    typeof n == "string" && !On(n) && (n = Pn(n, t), e.ref = n);
  }
};
var sd = {
  Backreference({ node: e }, { multiplexCapturesToLeftByRef: t, reffedNodesByReferencer: n }) {
    const { orphan: i, ref: r } = e;
    i || n.set(e, [...t.get(r).map(({ node: s }) => s)]);
  },
  CapturingGroup: {
    enter({
      node: e,
      parent: t,
      replaceWith: n,
      skip: i
    }, {
      groupOriginByCopy: r,
      groupsByName: s,
      multiplexCapturesToLeftByRef: o,
      openRefs: a,
      reffedNodesByReferencer: l
    }) {
      const c = r.get(e);
      if (c && a.has(e.number)) {
        const d = xe(Tr(e.number), t);
        l.set(d, a.get(e.number)), n(d);
        return;
      }
      a.set(e.number, e), o.set(e.number, []), e.name && wt(o, e.name, []);
      const u = o.get(e.name ?? e.number);
      for (let d = 0; d < u.length; d++) {
        const h = u[d];
        if (
          // This group is from subroutine expansion, and there's a multiplex value from either the
          // origin node or a prior subroutine expansion group with the same origin
          c === h.node || c && c === h.origin || // This group is not from subroutine expansion, and it comes after a subroutine expansion
          // group that refers to this group
          e === h.origin
        ) {
          u.splice(d, 1);
          break;
        }
      }
      if (o.get(e.number).push({ node: e, origin: c }), e.name && o.get(e.name).push({ node: e, origin: c }), e.name) {
        const d = wt(s, e.name, /* @__PURE__ */ new Map());
        let h = false;
        if (c)
          h = true;
        else
          for (const f of d.values())
            if (!f.hasDuplicateNameToRemove) {
              h = true;
              break;
            }
        s.get(e.name).set(e, { node: e, hasDuplicateNameToRemove: h });
      }
    },
    exit({ node: e }, { openRefs: t }) {
      t.get(e.number) === e && t.delete(e.number);
    }
  },
  Group: {
    enter({ node: e }, t) {
      t.prevFlags = t.currentFlags, e.flags && (t.currentFlags = an(t.currentFlags, e.flags));
    },
    exit(e, t) {
      t.currentFlags = t.prevFlags;
    }
  },
  Subroutine({ node: e, parent: t, replaceWith: n }, i) {
    const { isRecursive: r, ref: s } = e;
    if (r) {
      let u = t;
      for (; (u = u.parent) && !(u.type === "CapturingGroup" && (u.name === s || u.number === s)); )
        ;
      i.reffedNodesByReferencer.set(e, u);
      return;
    }
    const o = i.subroutineRefMap.get(s), a = s === 0, l = a ? Tr(0) : (
      // The reffed group might itself contain subroutines, which are expanded during sub-traversal
      mo(o, i.groupOriginByCopy, null)
    );
    let c = l;
    if (!a) {
      const u = bo(cd(
        o,
        (h) => h.type === "Group" && !!h.flags
      )), d = u ? an(i.globalFlags, u) : i.globalFlags;
      ad(d, i.currentFlags) || (c = re({
        flags: ud(d)
      }), c.body[0].body.push(l));
    }
    n(N(c, t), { traverse: !a });
  }
};
var od = {
  Backreference({ node: e, parent: t, replaceWith: n }, i) {
    if (e.orphan) {
      i.highestOrphanBackref = Math.max(i.highestOrphanBackref, e.ref);
      return;
    }
    const s = i.reffedNodesByReferencer.get(e).filter((o) => ld(o, e));
    if (!s.length)
      n(N(Ne({ negate: true }), t));
    else if (s.length > 1) {
      const o = re({
        atomic: true,
        body: s.reverse().map((a) => ze({
          body: [ai(a.number)]
        }))
      });
      n(N(o, t));
    } else
      e.ref = s[0].number;
  },
  CapturingGroup({ node: e }, t) {
    e.number = ++t.numCapturesToLeft, e.name && t.groupsByName.get(e.name).get(e).hasDuplicateNameToRemove && delete e.name;
  },
  Regex: {
    exit({ node: e }, t) {
      const n = Math.max(t.highestOrphanBackref - t.numCapturesToLeft, 0);
      for (let i = 0; i < n; i++) {
        const r = ro();
        e.body.at(-1).body.push(r);
      }
    }
  },
  Subroutine({ node: e }, t) {
    !e.isRecursive || e.ref === 0 || (e.ref = t.reffedNodesByReferencer.get(e).number);
  }
};
function go(e) {
  pt(e, {
    "*"({ node: t, parent: n }) {
      t.parent = n;
    }
  });
}
function ad(e, t) {
  return e.dotAll === t.dotAll && e.ignoreCase === t.ignoreCase;
}
function ld(e, t) {
  let n = t;
  do {
    if (n.type === "Regex")
      return false;
    if (n.type === "Alternative")
      continue;
    if (n === e)
      return false;
    const i = yo(n.parent);
    for (const r of i) {
      if (r === n)
        break;
      if (r === e || wo(r, e))
        return true;
    }
  } while (n = n.parent);
  throw new Error("Unexpected path");
}
function mo(e, t, n, i) {
  const r = Array.isArray(e) ? [] : {};
  for (const [s, o] of Object.entries(e))
    s === "parent" ? r.parent = Array.isArray(n) ? i : n : o && typeof o == "object" ? r[s] = mo(o, t, r, n) : (s === "type" && o === "CapturingGroup" && t.set(r, t.get(e) ?? e), r[s] = o);
  return r;
}
function Tr(e) {
  const t = oo(e);
  return t.isRecursive = true, t;
}
function cd(e, t) {
  const n = [];
  for (; e = e.parent; )
    (!t || t(e)) && n.push(e);
  return n;
}
function Pn(e, t) {
  if (t.has(e))
    return t.get(e);
  const n = `$${t.size}_${e.replace(/^[^$_\p{IDS}]|[^$\u200C\u200D\p{IDC}]/ug, "_")}`;
  return t.set(e, n), n;
}
function bo(e) {
  const t = ["dotAll", "ignoreCase"], n = { enable: {}, disable: {} };
  return e.forEach(({ flags: i }) => {
    t.forEach((r) => {
      i.enable?.[r] && (delete n.disable[r], n.enable[r] = true), i.disable?.[r] && (n.disable[r] = true);
    });
  }), Object.keys(n.enable).length || delete n.enable, Object.keys(n.disable).length || delete n.disable, n.enable || n.disable ? n : null;
}
function ud({ dotAll: e, ignoreCase: t }) {
  const n = {};
  return (e || t) && (n.enable = {}, e && (n.enable.dotAll = true), t && (n.enable.ignoreCase = true)), (!e || !t) && (n.disable = {}, !e && (n.disable.dotAll = true), !t && (n.disable.ignoreCase = true)), n;
}
function yo(e) {
  if (!e)
    throw new Error("Node expected");
  const { body: t } = e;
  return Array.isArray(t) ? t : t ? [t] : null;
}
function vo(e) {
  const t = e.find((n) => n.kind === "search_start" || fd(n, { negate: false }) || !dd(n));
  if (!t)
    return null;
  if (t.kind === "search_start")
    return t;
  if (t.type === "LookaroundAssertion")
    return t.body[0].body[0];
  if (t.type === "CapturingGroup" || t.type === "Group") {
    const n = [];
    for (const i of t.body) {
      const r = vo(i.body);
      if (!r)
        return null;
      Array.isArray(r) ? n.push(...r) : n.push(r);
    }
    return n;
  }
  return null;
}
function wo(e, t) {
  const n = yo(e) ?? [];
  for (const i of n)
    if (i === t || wo(i, t))
      return true;
  return false;
}
function dd({ type: e }) {
  return e === "Assertion" || e === "Directive" || e === "LookaroundAssertion";
}
function hd(e) {
  const t = [
    "Character",
    "CharacterClass",
    "CharacterSet"
  ];
  return t.includes(e.type) || e.type === "Quantifier" && e.min && t.includes(e.body.type);
}
function fd(e, t) {
  const n = {
    negate: null,
    ...t
  };
  return e.type === "LookaroundAssertion" && (n.negate === null || e.negate === n.negate) && e.body.length === 1 && no(e.body[0], {
    type: "Assertion",
    kind: "search_start"
  });
}
function On(e) {
  return /^[$_\p{IDS}][$\u200C\u200D\p{IDC}]*$/u.test(e);
}
function de(e, t) {
  const i = io(e, {
    ...t,
    // Providing a custom set of Unicode property names avoids converting some JS Unicode
    // properties (ex: `\p{Alpha}`) to Onig POSIX classes
    unicodePropertyMap: Ti
  }).body;
  return i.length > 1 || i[0].body.length > 1 ? re({ body: i }) : i[0].body[0];
}
function Fn(e, t) {
  return e.negate = t, e;
}
function xe(e, t) {
  return e.parent = t, e;
}
function N(e, t) {
  return go(e), e.parent = t, e;
}
function pd(e, t) {
  const n = ho(t), i = ui(n.target, "ES2024"), r = ui(n.target, "ES2025"), s = n.rules.recursionLimit;
  if (!Number.isInteger(s) || s < 2 || s > 20)
    throw new Error("Invalid recursionLimit; use 2-20");
  let o = null, a = null;
  if (!r) {
    const f = [e.flags.ignoreCase];
    pt(e, gd, {
      getCurrentModI: () => f.at(-1),
      popModI() {
        f.pop();
      },
      pushModI(g) {
        f.push(g);
      },
      setHasCasedChar() {
        f.at(-1) ? o = true : a = true;
      }
    });
  }
  const l = {
    dotAll: e.flags.dotAll,
    // - Turn global flag i on if a case insensitive node was used and no case sensitive nodes were
    //   used (to avoid unnecessary node expansion).
    // - Turn global flag i off if a case sensitive node was used (since case sensitivity can't be
    //   forced without the use of ES2025 flag groups)
    ignoreCase: !!((e.flags.ignoreCase || o) && !a)
  };
  let c = e;
  const u = {
    accuracy: n.accuracy,
    appliedGlobalFlags: l,
    captureMap: /* @__PURE__ */ new Map(),
    currentFlags: {
      dotAll: e.flags.dotAll,
      ignoreCase: e.flags.ignoreCase
    },
    inCharClass: false,
    lastNode: c,
    originMap: e._originMap,
    recursionLimit: s,
    useAppliedIgnoreCase: !!(!r && o && a),
    useFlagMods: r,
    useFlagV: i,
    verbose: n.verbose
  };
  function d(f) {
    return u.lastNode = c, c = f, Ku(md[f.type], `Unexpected node type "${f.type}"`)(f, u, d);
  }
  const h = {
    pattern: e.body.map(d).join("|"),
    // Could reset `lastNode` at this point via `lastNode = ast`, but it isn't needed by flags
    flags: d(e.flags),
    options: { ...e.options }
  };
  return i || (delete h.options.force.v, h.options.disable.v = true, h.options.unicodeSetsPlugin = null), h._captureTransfers = /* @__PURE__ */ new Map(), h._hiddenCaptures = [], u.captureMap.forEach((f, g) => {
    f.hidden && h._hiddenCaptures.push(g), f.transferTo && wt(h._captureTransfers, f.transferTo, []).push(g);
  }), h;
}
var gd = {
  "*": {
    enter({ node: e }, t) {
      if (Ir(e)) {
        const n = t.getCurrentModI();
        t.pushModI(
          e.flags ? an({ ignoreCase: n }, e.flags).ignoreCase : n
        );
      }
    },
    exit({ node: e }, t) {
      Ir(e) && t.popModI();
    }
  },
  Backreference(e, t) {
    t.setHasCasedChar();
  },
  Character({ node: e }, t) {
    Mi(F(e.value)) && t.setHasCasedChar();
  },
  CharacterClassRange({ node: e, skip: t }, n) {
    t(), So(e, { firstOnly: true }).length && n.setHasCasedChar();
  },
  CharacterSet({ node: e }, t) {
    e.kind === "property" && po.has(e.value) && t.setHasCasedChar();
  }
};
var md = {
  /**
  @param {AlternativeNode} node
  */
  Alternative({ body: e }, t, n) {
    return e.map(n).join("");
  },
  /**
  @param {AssertionNode} node
  */
  Assertion({ kind: e, negate: t }) {
    if (e === "string_end")
      return "$";
    if (e === "string_start")
      return "^";
    if (e === "word_boundary")
      return t ? k`\B` : k`\b`;
    throw new Error(`Unexpected assertion kind "${e}"`);
  },
  /**
  @param {BackreferenceNode} node
  */
  Backreference({ ref: e }, t) {
    if (typeof e != "number")
      throw new Error("Unexpected named backref in transformed AST");
    if (!t.useFlagMods && t.accuracy === "strict" && t.currentFlags.ignoreCase && !t.captureMap.get(e).ignoreCase)
      throw new Error("Use of case-insensitive backref to case-sensitive group requires target ES2025 or non-strict accuracy");
    return "\\" + e;
  },
  /**
  @param {CapturingGroupNode} node
  */
  CapturingGroup(e, t, n) {
    const { body: i, name: r, number: s } = e, o = { ignoreCase: t.currentFlags.ignoreCase }, a = t.originMap.get(e);
    return a && (o.hidden = true, s > a.number && (o.transferTo = a.number)), t.captureMap.set(s, o), `(${r ? `?<${r}>` : ""}${i.map(n).join("|")})`;
  },
  /**
  @param {CharacterNode} node
  */
  Character({ value: e }, t) {
    const n = F(e), i = je(e, {
      escDigit: t.lastNode.type === "Backreference",
      inCharClass: t.inCharClass,
      useFlagV: t.useFlagV
    });
    if (i !== n)
      return i;
    if (t.useAppliedIgnoreCase && t.currentFlags.ignoreCase && Mi(n)) {
      const r = fo(n);
      return t.inCharClass ? r.join("") : r.length > 1 ? `[${r.join("")}]` : r[0];
    }
    return n;
  },
  /**
  @param {CharacterClassNode} node
  */
  CharacterClass(e, t, n) {
    const { kind: i, negate: r, parent: s } = e;
    let { body: o } = e;
    if (i === "intersection" && !t.useFlagV)
      throw new Error("Use of character class intersection requires min target ES2024");
    se.bugFlagVLiteralHyphenIsRange && t.useFlagV && o.some(Nr) && (o = [fn(45), ...o.filter((c) => !Nr(c))]);
    const a = () => `[${r ? "^" : ""}${o.map(n).join(i === "intersection" ? "&&" : "")}]`;
    if (!t.inCharClass) {
      if (
        // Already established `kind !== 'intersection'` if `!state.useFlagV`; don't check again
        (!t.useFlagV || se.bugNestedClassIgnoresNegation) && !r
      ) {
        const u = o.filter(
          (d) => d.type === "CharacterClass" && d.kind === "union" && d.negate
        );
        if (u.length) {
          const d = re(), h = d.body[0];
          return d.parent = s, h.parent = d, o = o.filter((f) => !u.includes(f)), e.body = o, o.length ? (e.parent = h, h.body.push(e)) : d.body.pop(), u.forEach((f) => {
            const g = ze({ body: [f] });
            f.parent = g, g.parent = d, d.body.push(g);
          }), n(d);
        }
      }
      t.inCharClass = true;
      const c = a();
      return t.inCharClass = false, c;
    }
    const l = o[0];
    if (
      // Already established that the parent is a char class via `inCharClass`; don't check again
      i === "union" && !r && l && // Allows many nested classes to work with `target` ES2018 which doesn't support nesting
      ((!t.useFlagV || !t.verbose) && s.kind === "union" && !(se.bugFlagVLiteralHyphenIsRange && t.useFlagV) || !t.verbose && s.kind === "intersection" && // JS doesn't allow intersection with union or ranges
      o.length === 1 && l.type !== "CharacterClassRange")
    )
      return o.map(n).join("");
    if (!t.useFlagV && s.type === "CharacterClass")
      throw new Error("Uses nested character class in a way that requires min target ES2024");
    return a();
  },
  /**
  @param {CharacterClassRangeNode} node
  */
  CharacterClassRange(e, t) {
    const n = e.min.value, i = e.max.value, r = {
      escDigit: false,
      inCharClass: true,
      useFlagV: t.useFlagV
    }, s = je(n, r), o = je(i, r), a = /* @__PURE__ */ new Set();
    if (t.useAppliedIgnoreCase && t.currentFlags.ignoreCase) {
      const l = So(e);
      Sd(l).forEach((u) => {
        a.add(
          Array.isArray(u) ? `${je(u[0], r)}-${je(u[1], r)}` : je(u, r)
        );
      });
    }
    return `${s}-${o}${[...a].join("")}`;
  },
  /**
  @param {CharacterSetNode} node
  */
  CharacterSet({ kind: e, negate: t, value: n, key: i }, r) {
    if (e === "dot")
      return r.currentFlags.dotAll ? r.appliedGlobalFlags.dotAll || r.useFlagMods ? "." : "[^]" : (
        // Onig's only line break char is line feed, unlike JS
        k`[^\n]`
      );
    if (e === "digit")
      return t ? k`\D` : k`\d`;
    if (e === "property") {
      if (r.useAppliedIgnoreCase && r.currentFlags.ignoreCase && po.has(n))
        throw new Error(`Unicode property "${n}" can't be case-insensitive when other chars have specific case`);
      return `${t ? k`\P` : k`\p`}{${i ? `${i}=` : ""}${n}}`;
    }
    if (e === "word")
      return t ? k`\W` : k`\w`;
    throw new Error(`Unexpected character set kind "${e}"`);
  },
  /**
  @param {FlagsNode} node
  */
  Flags(e, t) {
    return (
      // The transformer should never turn on the properties for flags d, g, m since Onig doesn't
      // have equivs. Flag m is never used since Onig uses different line break chars than JS
      // (node.hasIndices ? 'd' : '') +
      // (node.global ? 'g' : '') +
      // (node.multiline ? 'm' : '') +
      (t.appliedGlobalFlags.ignoreCase ? "i" : "") + (e.dotAll ? "s" : "") + (e.sticky ? "y" : "")
    );
  },
  /**
  @param {GroupNode} node
  */
  Group({ atomic: e, body: t, flags: n, parent: i }, r, s) {
    const o = r.currentFlags;
    n && (r.currentFlags = an(o, n));
    const a = t.map(s).join("|"), l = !r.verbose && t.length === 1 && // Single alt
    i.type !== "Quantifier" && !e && (!r.useFlagMods || !n) ? a : `(?${Cd(e, n, r.useFlagMods)}${a})`;
    return r.currentFlags = o, l;
  },
  /**
  @param {LookaroundAssertionNode} node
  */
  LookaroundAssertion({ body: e, kind: t, negate: n }, i, r) {
    return `(?${`${t === "lookahead" ? "" : "<"}${n ? "!" : "="}`}${e.map(r).join("|")})`;
  },
  /**
  @param {QuantifierNode} node
  */
  Quantifier(e, t, n) {
    return n(e.body) + xd(e);
  },
  /**
  @param {SubroutineNode & {isRecursive: true}} node
  */
  Subroutine({ isRecursive: e, ref: t }, n) {
    if (!e)
      throw new Error("Unexpected non-recursive subroutine in transformed AST");
    const i = n.recursionLimit;
    return t === 0 ? `(?R=${i})` : k`\g<${t}&R=${i}>`;
  }
};
var bd = /* @__PURE__ */ new Set([
  "$",
  "(",
  ")",
  "*",
  "+",
  ".",
  "?",
  "[",
  "\\",
  "]",
  "^",
  "{",
  "|",
  "}"
]);
var yd = /* @__PURE__ */ new Set([
  "-",
  "\\",
  "]",
  "^",
  // Literal `[` doesn't require escaping with flag u, but this can help work around regex source
  // linters and regex syntax processors that expect unescaped `[` to create a nested class
  "["
]);
var vd = /* @__PURE__ */ new Set([
  "(",
  ")",
  "-",
  "/",
  "[",
  "\\",
  "]",
  "^",
  "{",
  "|",
  "}",
  // Double punctuators; also includes already-listed `-` and `^`
  "!",
  "#",
  "$",
  "%",
  "&",
  "*",
  "+",
  ",",
  ".",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "`",
  "~"
]);
var Mr = /* @__PURE__ */ new Map([
  [9, k`\t`],
  // horizontal tab
  [10, k`\n`],
  // line feed
  [11, k`\v`],
  // vertical tab
  [12, k`\f`],
  // form feed
  [13, k`\r`],
  // carriage return
  [8232, k`\u2028`],
  // line separator
  [8233, k`\u2029`],
  // paragraph separator
  [65279, k`\uFEFF`]
  // ZWNBSP/BOM
]);
var wd = /^\p{Cased}$/u;
function Mi(e) {
  return wd.test(e);
}
function So(e, t) {
  const n = !!t?.firstOnly, i = e.min.value, r = e.max.value, s = [];
  if (i < 65 && (r === 65535 || r >= 131071) || i === 65536 && r >= 131071)
    return s;
  for (let o = i; o <= r; o++) {
    const a = F(o);
    if (!Mi(a))
      continue;
    const l = fo(a).filter((c) => {
      const u = c.codePointAt(0);
      return u < i || u > r;
    });
    if (l.length && (s.push(...l), n))
      break;
  }
  return s;
}
function je(e, { escDigit: t, inCharClass: n, useFlagV: i }) {
  if (Mr.has(e))
    return Mr.get(e);
  if (
    // Control chars, etc.; condition modeled on the Chrome developer console's display for strings
    e < 32 || e > 126 && e < 160 || // Unicode planes 4-16; unassigned, special purpose, and private use area
    e > 262143 || // Avoid corrupting a preceding backref by immediately following it with a literal digit
    t && kd(e)
  )
    return e > 255 ? `\\u{${e.toString(16).toUpperCase()}}` : `\\x${e.toString(16).toUpperCase().padStart(2, "0")}`;
  const r = n ? i ? vd : yd : bd, s = F(e);
  return (r.has(s) ? "\\" : "") + s;
}
function Sd(e) {
  const t = e.map((r) => r.codePointAt(0)).sort((r, s) => r - s), n = [];
  let i = null;
  for (let r = 0; r < t.length; r++)
    t[r + 1] === t[r] + 1 ? i ??= t[r] : i === null ? n.push(t[r]) : (n.push([i, t[r]]), i = null);
  return n;
}
function Cd(e, t, n) {
  if (e)
    return ">";
  let i = "";
  if (t && n) {
    const { enable: r, disable: s } = t;
    i = (r?.ignoreCase ? "i" : "") + (r?.dotAll ? "s" : "") + (s ? "-" : "") + (s?.ignoreCase ? "i" : "") + (s?.dotAll ? "s" : "");
  }
  return `${i}:`;
}
function xd({ kind: e, max: t, min: n }) {
  let i;
  return !n && t === 1 ? i = "?" : !n && t === 1 / 0 ? i = "*" : n === 1 && t === 1 / 0 ? i = "+" : n === t ? i = `{${n}}` : i = `{${n},${t === 1 / 0 ? "" : t}}`, i + {
    greedy: "",
    lazy: "?",
    possessive: "+"
  }[e];
}
function Ir({ type: e }) {
  return e === "CapturingGroup" || e === "Group" || e === "LookaroundAssertion";
}
function kd(e) {
  return e > 47 && e < 58;
}
function Nr({ type: e, value: t }) {
  return e === "Character" && t === 45;
}
var ke;
var fe;
var Fe;
var Ee;
var He;
var St;
var di;
var _e;
var Ed = (_e = class extends RegExp {
  /**
  @overload
  @param {string} pattern
  @param {string} [flags]
  @param {EmulatedRegExpOptions} [options]
  */
  /**
  @overload
  @param {EmulatedRegExp} pattern
  @param {string} [flags]
  */
  constructor(n, i, r) {
    var t = (...ng) => (super(...ng), Me(this, St), /**
    @type {Map<number, {
      hidden?: true;
      transferTo?: number;
    }>}
    */
    Me(this, ke, /* @__PURE__ */ new Map()), /**
    @type {RegExp | EmulatedRegExp | null}
    */
    Me(this, fe, null), /**
    @type {string}
    */
    Me(this, Fe), /**
    @type {Map<number, string>?}
    */
    Me(this, Ee, null), /**
    @type {string?}
    */
    Me(this, He, null), /**
    Can be used to serialize the instance.
    @type {EmulatedRegExpOptions}
    */
    p(this, "rawOptions", {}), this);
    const s = !!r?.lazyCompile;
    if (n instanceof RegExp) {
      if (r)
        throw new Error("Cannot provide options when copying a regexp");
      const o = n;
      t(o, i), ne(this, Fe, o.source), o instanceof _e && (ne(this, ke, j(o, ke)), ne(this, Ee, j(o, Ee)), ne(this, He, j(o, He)), this.rawOptions = o.rawOptions);
    } else {
      const o = {
        hiddenCaptures: [],
        strategy: null,
        transfers: [],
        ...r
      };
      t(s ? "" : n, i), ne(this, Fe, n), ne(this, ke, Ld(o.hiddenCaptures, o.transfers)), ne(this, He, o.strategy), this.rawOptions = r ?? {};
    }
    s || ne(this, fe, this);
  }
  // Override the getter with one that works with lazy-compiled regexes
  get source() {
    return j(this, Fe) || "(?:)";
  }
  /**
  Called internally by all String/RegExp methods that use regexes.
  @override
  @param {string} str
  @returns {RegExpExecArray?}
  */
  exec(n) {
    if (!j(this, fe)) {
      const { lazyCompile: s, ...o } = this.rawOptions;
      ne(this, fe, new _e(j(this, Fe), this.flags, o));
    }
    const i = this.global || this.sticky, r = this.lastIndex;
    if (j(this, He) === "clip_search" && i && r) {
      this.lastIndex = 0;
      const s = Sn(this, St, di).call(this, n.slice(r));
      return s && (Rd(s, r, n, this.hasIndices), this.lastIndex += r), s;
    }
    return Sn(this, St, di).call(this, n);
  }
}, ke = /* @__PURE__ */ new WeakMap(), fe = /* @__PURE__ */ new WeakMap(), Fe = /* @__PURE__ */ new WeakMap(), Ee = /* @__PURE__ */ new WeakMap(), He = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ new WeakSet(), /**
Adds support for hidden and transfer captures.
@param {string} str
@returns
*/
di = function(n) {
  j(this, fe).lastIndex = this.lastIndex;
  const i = Ui(_e.prototype, this, "exec").call(j(this, fe), n);
  if (this.lastIndex = j(this, fe).lastIndex, !i || !j(this, ke).size)
    return i;
  const r = [...i];
  i.length = 1;
  let s;
  this.hasIndices && (s = [...i.indices], i.indices.length = 1);
  const o = [0];
  for (let a = 1; a < r.length; a++) {
    const { hidden: l, transferTo: c } = j(this, ke).get(a) ?? {};
    if (l ? o.push(null) : (o.push(i.length), i.push(r[a]), this.hasIndices && i.indices.push(s[a])), c && r[a] !== void 0) {
      const u = o[c];
      if (!u)
        throw new Error(`Invalid capture transfer to "${u}"`);
      if (i[u] = r[a], this.hasIndices && (i.indices[u] = s[a]), i.groups) {
        j(this, Ee) || ne(this, Ee, _d(this.source));
        const d = j(this, Ee).get(c);
        d && (i.groups[d] = r[a], this.hasIndices && (i.indices.groups[d] = s[a]));
      }
    }
  }
  return i;
}, _e);
function Rd(e, t, n, i) {
  if (e.index += t, e.input = n, i) {
    const r = e.indices;
    for (let o = 0; o < r.length; o++) {
      const a = r[o];
      a && (r[o] = [a[0] + t, a[1] + t]);
    }
    const s = r.groups;
    s && Object.keys(s).forEach((o) => {
      const a = s[o];
      a && (s[o] = [a[0] + t, a[1] + t]);
    });
  }
}
function Ld(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const i of e)
    n.set(i, {
      hidden: true
    });
  for (const [i, r] of t)
    for (const s of r)
      wt(n, s, {}).transferTo = i;
  return n;
}
function _d(e) {
  const t = /(?<capture>\((?:\?<(?![=!])(?<name>[^>]+)>|(?!\?)))|\\?./gsu, n = /* @__PURE__ */ new Map();
  let i = 0, r = 0, s;
  for (; s = t.exec(e); ) {
    const { 0: o, groups: { capture: a, name: l } } = s;
    o === "[" ? i++ : i ? o === "]" && i-- : a && (r++, l && n.set(r, l));
  }
  return n;
}
function Ad(e, t) {
  const n = Td(e, t);
  return n.options ? new Ed(n.pattern, n.flags, n.options) : new RegExp(n.pattern, n.flags);
}
function Td(e, t) {
  const n = ho(t), i = io(e, {
    flags: n.flags,
    normalizeUnknownPropertyNames: true,
    rules: {
      captureGroup: n.rules.captureGroup,
      singleline: n.rules.singleline
    },
    skipBackrefValidation: n.rules.allowOrphanBackrefs,
    unicodePropertyMap: Ti
  }), r = id(i, {
    accuracy: n.accuracy,
    asciiWordBoundaries: n.rules.asciiWordBoundaries,
    avoidSubclass: n.avoidSubclass,
    bestEffortTarget: n.target
  }), s = pd(r, n), o = Vu(s.pattern, {
    captureTransfers: s._captureTransfers,
    hiddenCaptures: s._hiddenCaptures,
    mode: "external"
  }), a = Wu(o.pattern), l = Gu(a.pattern, {
    captureTransfers: o.captureTransfers,
    hiddenCaptures: o.hiddenCaptures
  }), c = {
    pattern: l.pattern,
    flags: `${n.hasIndices ? "d" : ""}${n.global ? "g" : ""}${s.flags}${s.options.disable.v ? "u" : "v"}`
  };
  if (n.avoidSubclass) {
    if (n.lazyCompileLength !== 1 / 0)
      throw new Error("Lazy compilation requires subclass");
  } else {
    const u = l.hiddenCaptures.sort((g, y) => g - y), d = Array.from(l.captureTransfers), h = r._strategy, f = c.pattern.length >= n.lazyCompileLength;
    (u.length || d.length || h || f) && (c.options = {
      ...u.length && { hiddenCaptures: u },
      ...d.length && { transfers: d },
      ...h && { strategy: h },
      ...f && { lazyCompile: f }
    });
  }
  return c;
}
function Md(e, t) {
  return Ad(e, {
    global: true,
    hasIndices: true,
    lazyCompileLength: 3e3,
    rules: {
      allowOrphanBackrefs: true,
      asciiWordBoundaries: true,
      captureGroup: true,
      recursionLimit: 5,
      singleline: true
    },
    ...t
  });
}
function Co(e = {}) {
  const t = {
    target: "auto",
    cache: /* @__PURE__ */ new Map(),
    ...e
  };
  return t.regexConstructor ||= (n) => Md(n, { target: t.target }), {
    createScanner(n) {
      return new jc(n, t);
    },
    createString: qc
  };
}
var Ii = class extends Error {
  constructor(e) {
    super(e), this.name = "ShikiError";
  }
};
function Id() {
  return 2147483648;
}
function Nd() {
  return typeof performance < "u" ? performance.now() : Date.now();
}
var Pd = (e, t) => e + (t - e % t) % t;
async function Od(e) {
  let t, n;
  const i = {};
  function r(f) {
    n = f, i.HEAPU8 = new Uint8Array(f), i.HEAPU32 = new Uint32Array(f);
  }
  function s(f, g, y) {
    i.HEAPU8.copyWithin(f, g, g + y);
  }
  function o(f) {
    try {
      return t.grow(f - n.byteLength + 65535 >>> 16), r(t.buffer), 1;
    } catch {
    }
  }
  function a(f) {
    const g = i.HEAPU8.length;
    f = f >>> 0;
    const y = Id();
    if (f > y)
      return false;
    for (let v = 1; v <= 4; v *= 2) {
      let m = g * (1 + 0.2 / v);
      m = Math.min(m, f + 100663296);
      const b = Math.min(y, Pd(Math.max(f, m), 65536));
      if (o(b))
        return true;
    }
    return false;
  }
  const l = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
  function c(f, g, y = 1024) {
    const v = g + y;
    let m = g;
    for (; f[m] && !(m >= v); ) ++m;
    if (m - g > 16 && f.buffer && l)
      return l.decode(f.subarray(g, m));
    let b = "";
    for (; g < m; ) {
      let w = f[g++];
      if (!(w & 128)) {
        b += String.fromCharCode(w);
        continue;
      }
      const C = f[g++] & 63;
      if ((w & 224) === 192) {
        b += String.fromCharCode((w & 31) << 6 | C);
        continue;
      }
      const E = f[g++] & 63;
      if ((w & 240) === 224 ? w = (w & 15) << 12 | C << 6 | E : w = (w & 7) << 18 | C << 12 | E << 6 | f[g++] & 63, w < 65536)
        b += String.fromCharCode(w);
      else {
        const L = w - 65536;
        b += String.fromCharCode(55296 | L >> 10, 56320 | L & 1023);
      }
    }
    return b;
  }
  function u(f, g) {
    return f ? c(i.HEAPU8, f, g) : "";
  }
  const d = {
    emscripten_get_now: Nd,
    emscripten_memcpy_big: s,
    emscripten_resize_heap: a,
    fd_write: () => 0
  };
  async function h() {
    const g = await e({
      env: d,
      wasi_snapshot_preview1: d
    });
    t = g.memory, r(t.buffer), Object.assign(i, g), i.UTF8ToString = u;
  }
  return await h(), i;
}
var Fd = Object.defineProperty;
var Hd = (e, t, n) => t in e ? Fd(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n;
var H = (e, t, n) => Hd(e, typeof t != "symbol" ? t + "" : t, n);
var D = null;
function $d(e) {
  throw new Ii(e.UTF8ToString(e.getLastOnigError()));
}
var bn = class _bn {
  constructor(t) {
    H(this, "utf16Length"), H(this, "utf8Length"), H(this, "utf16Value"), H(this, "utf8Value"), H(this, "utf16OffsetToUtf8"), H(this, "utf8OffsetToUtf16");
    const n = t.length, i = _bn._utf8ByteLength(t), r = i !== n, s = r ? new Uint32Array(n + 1) : null;
    r && (s[n] = i);
    const o = r ? new Uint32Array(i + 1) : null;
    r && (o[i] = n);
    const a = new Uint8Array(i);
    let l = 0;
    for (let c = 0; c < n; c++) {
      const u = t.charCodeAt(c);
      let d = u, h = false;
      if (u >= 55296 && u <= 56319 && c + 1 < n) {
        const f = t.charCodeAt(c + 1);
        f >= 56320 && f <= 57343 && (d = (u - 55296 << 10) + 65536 | f - 56320, h = true);
      }
      r && (s[c] = l, h && (s[c + 1] = l), d <= 127 ? o[l + 0] = c : d <= 2047 ? (o[l + 0] = c, o[l + 1] = c) : d <= 65535 ? (o[l + 0] = c, o[l + 1] = c, o[l + 2] = c) : (o[l + 0] = c, o[l + 1] = c, o[l + 2] = c, o[l + 3] = c)), d <= 127 ? a[l++] = d : d <= 2047 ? (a[l++] = 192 | (d & 1984) >>> 6, a[l++] = 128 | (d & 63) >>> 0) : d <= 65535 ? (a[l++] = 224 | (d & 61440) >>> 12, a[l++] = 128 | (d & 4032) >>> 6, a[l++] = 128 | (d & 63) >>> 0) : (a[l++] = 240 | (d & 1835008) >>> 18, a[l++] = 128 | (d & 258048) >>> 12, a[l++] = 128 | (d & 4032) >>> 6, a[l++] = 128 | (d & 63) >>> 0), h && c++;
    }
    this.utf16Length = n, this.utf8Length = i, this.utf16Value = t, this.utf8Value = a, this.utf16OffsetToUtf8 = s, this.utf8OffsetToUtf16 = o;
  }
  static _utf8ByteLength(t) {
    let n = 0;
    for (let i = 0, r = t.length; i < r; i++) {
      const s = t.charCodeAt(i);
      let o = s, a = false;
      if (s >= 55296 && s <= 56319 && i + 1 < r) {
        const l = t.charCodeAt(i + 1);
        l >= 56320 && l <= 57343 && (o = (s - 55296 << 10) + 65536 | l - 56320, a = true);
      }
      o <= 127 ? n += 1 : o <= 2047 ? n += 2 : o <= 65535 ? n += 3 : n += 4, a && i++;
    }
    return n;
  }
  createString(t) {
    const n = t.omalloc(this.utf8Length);
    return t.HEAPU8.set(this.utf8Value, n), n;
  }
};
var yn = class le {
  constructor(t) {
    if (H(this, "id", ++le.LAST_ID), H(this, "_onigBinding"), H(this, "content"), H(this, "utf16Length"), H(this, "utf8Length"), H(this, "utf16OffsetToUtf8"), H(this, "utf8OffsetToUtf16"), H(this, "ptr"), !D)
      throw new Ii("Must invoke loadWasm first.");
    this._onigBinding = D, this.content = t;
    const n = new bn(t);
    this.utf16Length = n.utf16Length, this.utf8Length = n.utf8Length, this.utf16OffsetToUtf8 = n.utf16OffsetToUtf8, this.utf8OffsetToUtf16 = n.utf8OffsetToUtf16, this.utf8Length < 1e4 && !le._sharedPtrInUse ? (le._sharedPtr || (le._sharedPtr = D.omalloc(1e4)), le._sharedPtrInUse = true, D.HEAPU8.set(n.utf8Value, le._sharedPtr), this.ptr = le._sharedPtr) : this.ptr = n.createString(D);
  }
  convertUtf8OffsetToUtf16(t) {
    return this.utf8OffsetToUtf16 ? t < 0 ? 0 : t > this.utf8Length ? this.utf16Length : this.utf8OffsetToUtf16[t] : t;
  }
  convertUtf16OffsetToUtf8(t) {
    return this.utf16OffsetToUtf8 ? t < 0 ? 0 : t > this.utf16Length ? this.utf8Length : this.utf16OffsetToUtf8[t] : t;
  }
  dispose() {
    this.ptr === le._sharedPtr ? le._sharedPtrInUse = false : this._onigBinding.ofree(this.ptr);
  }
};
H(yn, "LAST_ID", 0);
H(yn, "_sharedPtr", 0);
H(yn, "_sharedPtrInUse", false);
var xo = yn;
var Dd = class {
  constructor(t) {
    if (H(this, "_onigBinding"), H(this, "_ptr"), !D)
      throw new Ii("Must invoke loadWasm first.");
    const n = [], i = [];
    for (let a = 0, l = t.length; a < l; a++) {
      const c = new bn(t[a]);
      n[a] = c.createString(D), i[a] = c.utf8Length;
    }
    const r = D.omalloc(4 * t.length);
    D.HEAPU32.set(n, r / 4);
    const s = D.omalloc(4 * t.length);
    D.HEAPU32.set(i, s / 4);
    const o = D.createOnigScanner(r, s, t.length);
    for (let a = 0, l = t.length; a < l; a++)
      D.ofree(n[a]);
    D.ofree(s), D.ofree(r), o === 0 && $d(D), this._onigBinding = D, this._ptr = o;
  }
  dispose() {
    this._onigBinding.freeOnigScanner(this._ptr);
  }
  findNextMatchSync(t, n, i) {
    let r = 0;
    if (typeof i == "number" && (r = i), typeof t == "string") {
      t = new xo(t);
      const s = this._findNextMatchSync(t, n, false, r);
      return t.dispose(), s;
    }
    return this._findNextMatchSync(t, n, false, r);
  }
  _findNextMatchSync(t, n, i, r) {
    const s = this._onigBinding, o = s.findNextOnigScannerMatch(this._ptr, t.id, t.ptr, t.utf8Length, t.convertUtf16OffsetToUtf8(n), r);
    if (o === 0)
      return null;
    const a = s.HEAPU32;
    let l = o / 4;
    const c = a[l++], u = a[l++], d = [];
    for (let h = 0; h < u; h++) {
      const f = t.convertUtf8OffsetToUtf16(a[l++]), g = t.convertUtf8OffsetToUtf16(a[l++]);
      d[h] = {
        start: f,
        end: g,
        length: g - f
      };
    }
    return {
      index: c,
      captureIndices: d
    };
  }
};
function Ud(e) {
  return typeof e.instantiator == "function";
}
function zd(e) {
  return typeof e.default == "function";
}
function Bd(e) {
  return typeof e.data < "u";
}
function Gd(e) {
  return typeof Response < "u" && e instanceof Response;
}
function Wd(e) {
  return typeof ArrayBuffer < "u" && (e instanceof ArrayBuffer || ArrayBuffer.isView(e)) || typeof Buffer < "u" && Buffer.isBuffer?.(e) || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer || typeof Uint32Array < "u" && e instanceof Uint32Array;
}
var Pt;
function jd(e) {
  if (Pt)
    return Pt;
  async function t() {
    D = await Od(async (n) => {
      let i = e;
      return i = await i, typeof i == "function" && (i = await i(n)), typeof i == "function" && (i = await i(n)), Ud(i) ? i = await i.instantiator(n) : zd(i) ? i = await i.default(n) : (Bd(i) && (i = i.data), Gd(i) ? typeof WebAssembly.instantiateStreaming == "function" ? i = await Vd(i)(n) : i = await qd(i)(n) : Wd(i) ? i = await Hn(i)(n) : i instanceof WebAssembly.Module ? i = await Hn(i)(n) : "default" in i && i.default instanceof WebAssembly.Module && (i = await Hn(i.default)(n))), "instance" in i && (i = i.instance), "exports" in i && (i = i.exports), i;
    });
  }
  return Pt = t(), Pt;
}
function Hn(e) {
  return (t) => WebAssembly.instantiate(e, t);
}
function Vd(e) {
  return (t) => WebAssembly.instantiateStreaming(e, t);
}
function qd(e) {
  return async (t) => {
    const n = await e.arrayBuffer();
    return WebAssembly.instantiate(n, t);
  };
}
async function Kd(e) {
  return e && await jd(e), {
    createScanner(t) {
      return new Dd(t.map((n) => typeof n == "string" ? n : n.source));
    },
    createString(t) {
      return new xo(t);
    }
  };
}
var Xd = Gc({
  langs: Xt,
  themes: jn,
  engine: Co
});
async function Yd(e) {
  if (cs()) throw new Error(`resolveLanguage("${e}") cannot be called from a worker context. Languages must be pre-resolved on the main thread and passed to the worker via the resolvedLanguages parameter.`);
  const t = Cn.get(e);
  if (t != null) return t;
  try {
    let n = Yo.get(e);
    if (n == null && Object.prototype.hasOwnProperty.call(Xt, e) && (n = Xt[e]), n == null) throw new Error(`resolveLanguage: "${e}" not found in bundled or custom languages`);
    const i = n().then(({ default: r }) => {
      const s = {
        name: e,
        data: r
      };
      return gt.has(e) || gt.set(e, s), s;
    });
    return Cn.set(e, i), await i;
  } finally {
    Cn.delete(e);
  }
}
function Qd(e) {
  return gt.get(e) ?? Yd(e);
}
function vn(e = me) {
  const t = [];
  return typeof e == "string" ? t.push(e) : (t.push(e.dark), t.push(e.light)), t;
}
var hi = /* @__PURE__ */ new Set();
function ct(e) {
  for (const t of vn(e)) if (!hi.has(t)) return false;
  return true;
}
function Zd(e) {
  return e !== null && typeof e == "object" && "default" in e ? e.default : e;
}
var Jd = class extends Error {
  constructor(e) {
    super(`Theme "${e}" is already registered`), this.name = "DuplicateThemeError";
  }
};
var eh = class extends Error {
  constructor(e) {
    super(`No loader registered for theme "${e}"`), this.name = "UnregisteredThemeError";
  }
};
var th = class extends Error {
  constructor(e) {
    super(`Theme "${e}" has not been resolved`), this.name = "UnresolvedThemeError";
  }
};
function nh() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  let i = 0;
  function r(m, b) {
    if (e.has(m)) throw new Jd(m);
    e.set(m, b);
  }
  function s(m, b) {
    return e.has(m) ? false : (e.set(m, b), true);
  }
  function o(m) {
    return e.has(m);
  }
  function a(m) {
    const b = t.get(m);
    if (b !== void 0) return Promise.resolve(b);
    const w = n.get(m);
    if (w !== void 0) return w;
    const C = e.get(m);
    if (C === void 0) return Promise.reject(new eh(m));
    const E = i, L = C().then((R) => {
      const I = Zd(R);
      return E === i && t.set(m, I), n.get(m) === L && n.delete(m), I;
    }).catch((R) => {
      throw n.get(m) === L && n.delete(m), R;
    });
    return n.set(m, L), L;
  }
  function l(m) {
    return Promise.all(m.map((b) => a(b)));
  }
  function c(m, b) {
    t.set(m, b);
  }
  function u(m) {
    for (const [b, w] of m) c(b, w);
  }
  function d(m) {
    return t.get(m);
  }
  function h(m) {
    const b = [];
    for (const w of m) {
      const C = t.get(w);
      if (C === void 0) throw new th(w);
      b.push(C);
    }
    return b;
  }
  function f(m) {
    return t.has(m);
  }
  function g(m) {
    for (const b of m) if (!t.has(b)) return false;
    return true;
  }
  function y(m) {
    const b = t.get(m);
    return b !== void 0 ? b : a(m);
  }
  function v() {
    i++, t.clear(), n.clear();
  }
  return {
    clearResolvedThemes: v,
    getResolvedOrResolveTheme: y,
    getResolvedTheme: d,
    getResolvedThemes: h,
    hasRegisteredTheme: o,
    hasResolvedTheme: f,
    hasResolvedThemes: g,
    registerTheme: r,
    registerThemeIfAbsent: s,
    resolveTheme: a,
    resolveThemes: l,
    seedResolvedTheme: c,
    seedResolvedThemes: u
  };
}
var be = nh();
function Pr(e, t) {
  e = Array.isArray(e) ? e : [e];
  for (let n of e) {
    let i;
    if (typeof n == "string") {
      if (i = be.getResolvedTheme(n), i == null) throw new Error(`loadResolvedThemes: ${n} is not resolved, you must resolve it before calling loadResolvedThemes`);
    } else
      i = n, n = n.name, be.getResolvedTheme(n) == null && be.seedResolvedTheme(n, i);
    hi.has(n) || (hi.add(n), t.loadThemeSync(i));
  }
}
var ih = { getThemes: () => [] };
var rh = {
  getTheme(e) {
    if (!Object.hasOwn(jn, e)) return;
    const t = jn[e];
    return { name: e, load: t };
  }
};
function sh(e) {
  if (cs()) throw new Error(`Theme "${e}" cannot be resolved from a worker context. Themes must be pre-resolved on the main thread and passed to the worker via the resolvedLanguages parameter.`);
  if (be.hasRegisteredTheme(e)) return;
  const t = rh.getTheme(e);
  if (t != null) {
    be.registerThemeIfAbsent(t.name, t.load);
    return;
  }
  throw new Error(`No valid theme loader registered for "${e}"`);
}
function oh(e, t) {
  if (t.name !== e) throw new Error(`resolvedTheme: themeName: ${e} does not match theme.name: ${t.name}`);
}
async function ah(e) {
  sh(e);
  const t = await be.resolveTheme(e);
  return oh(e, t), t;
}
function lh(e) {
  return be.getResolvedTheme(e) ?? ah(e);
}
var ce;
async function ko({ themes: e, langs: t, preferredHighlighter: n = "shiki-js" }) {
  ce ??= Xd({
    themes: [],
    langs: ["text"],
    engine: n === "shiki-wasm" ? Kd(import("./wasm-DQxwEHae-36SGDCN4.js")) : Co()
  });
  const i = ch(ce) ? await ce : ce;
  ce = i;
  const r = [];
  for (const o of Array.from(new Set(t))) {
    if (o === "text" || o === "ansi") continue;
    const a = Qd(o);
    "then" in a ? r.push(a) : Gi(a, i);
  }
  const s = [];
  for (const o of e) {
    const a = lh(o);
    "then" in a ? s.push(a) : Pr(a, ce);
  }
  return (r.length > 0 || s.length > 0) && await Promise.all([Promise.all(r).then((o) => {
    Gi(o, i);
  }), Promise.all(s).then((o) => {
    Pr(o, i);
  })]), i;
}
function fi(e) {
  if (!(ce == null || "then" in ce) && !(e != null && (!ct(e.theme) || !qn(e.lang))))
    return ce;
}
function ch(e = ce) {
  return e != null && "then" in e;
}
for (const e of ih.getThemes()) be.registerThemeIfAbsent(e.name, e.load);
var Qe = /* @__PURE__ */ new Set();
var Ze = null;
function K(e) {
  Qe.add(e), Ze ??= requestAnimationFrame(Eo);
}
function pi(e) {
  Qe.delete(e) && Qe.size === 0 && Ze != null && (cancelAnimationFrame(Ze), Ze = null);
}
function Eo(e) {
  const t = new Set(Qe);
  Qe.clear();
  for (const n of t) try {
    n(e);
  } catch (i) {
    console.error(i);
  }
  Qe.size > 0 ? Ze = requestAnimationFrame(Eo) : Ze = null;
}
function gi(e, t, n) {
  if (e === t || e == null || t == null) return e === t;
  const i = new Set(n), r = Object.keys(e), s = new Set(Object.keys(t));
  for (const o of r)
    if (s.delete(o), !i.has(o) && (!(o in t) || e[o] !== t[o]))
      return false;
  for (const o of Array.from(s)) if (!i.has(o)) return false;
  return true;
}
function Ni(e, t) {
  return e == null || t == null || typeof e == "string" || typeof t == "string" ? e === t : e.dark === t.dark && e.light === t.light;
}
function uh(e, t) {
  const n = e?.theme ?? me, i = t?.theme ?? me, r = Or(e), s = Or(t);
  return Ni(n, i) && gi(e, t, ["theme", "parseDiffOptions"]) && gi(r, s);
}
function Or(e) {
  if (e != null && "parseDiffOptions" in e) return e.parseDiffOptions;
}
function mi(e, t) {
  return e?.start === t?.start && e?.end === t?.end && e?.side === t?.side && e?.endSide === t?.endSide;
}
function Fr({ scrollTop: e, scrollHeight: t, height: n, fitPerfectly: i = false, fitPerfectlyOverscroll: r = 0, overscrollSize: s }) {
  const o = n + s * 2, a = i ? n + r * 2 : o;
  if (t = Math.max(t, a), o >= t || i) {
    const u = Math.max(e - r, 0), d = Math.min(e + a, t);
    return {
      top: u,
      bottom: Math.max(d, u)
    };
  }
  let l = e + n / 2 - o / 2, c = l + o;
  return l < 0 && (l = 0), c > t && (c = t), l = Math.floor(Math.max(l, 0)), {
    top: l,
    bottom: Math.ceil(Math.max(Math.min(c, t), l))
  };
}
function Je(e) {
  return {
    type: "text",
    value: e
  };
}
function _({ tagName: e, children: t = [], properties: n = {} }) {
  return {
    type: "element",
    tagName: e,
    properties: n,
    children: t
  };
}
function bi({ name: e, width: t = 16, height: n = 16, properties: i }) {
  return _({
    tagName: "svg",
    properties: {
      width: t,
      height: n,
      viewBox: "0 0 16 16",
      ...i
    },
    children: [_({
      tagName: "use",
      properties: { href: `#${e.replace(/^#/, "")}` }
    })]
  });
}
function dh(e) {
  let t = e.children[0];
  for (; t != null; ) {
    if (t.type === "element" && t.tagName === "code") return t;
    "children" in t ? t = t.children[0] : t = null;
  }
}
function Hr(e) {
  return _({
    tagName: "div",
    properties: { "data-gutter": "" },
    children: e
  });
}
function hh(e, t, n, i = {}) {
  return _({
    tagName: "div",
    properties: {
      "data-line-type": e,
      "data-column-number": t,
      "data-line-index": n,
      ...i
    },
    children: t != null ? [_({
      tagName: "span",
      properties: { "data-line-number-content": "" },
      children: [Je(`${t}`)]
    })] : void 0
  });
}
function $r(e, t, n) {
  return _({
    tagName: "div",
    properties: {
      "data-gutter-buffer": t,
      "data-buffer-size": n,
      "data-line-type": void 0,
      style: `grid-row: span ${n};`
    }
  });
}
function fh() {
  return _({
    tagName: "button",
    properties: {
      "data-utility-button": "",
      type: "button"
    },
    children: [bi({
      name: "diffs-icon-plus",
      properties: { "data-icon": "" }
    })]
  });
}
function ph(e, t) {
  return e.lineNumber === t.lineNumber && e.side === t.side;
}
function Ot(e) {
  for (const t of e)
    if (t instanceof HTMLElement && (t.hasAttribute("data-utility-button") || t.hasAttribute("data-gutter-utility-slot") || t.getAttribute("slot") === "gutter-utility-slot" || t.getAttribute("name") === "gutter-utility-slot"))
      return true;
  return false;
}
var gh = class {
  constructor(e, t) {
    p(this, "mode");
    p(this, "options");
    p(this, "hoveredLine");
    p(this, "hoveredToken");
    p(this, "pre");
    p(this, "gutterUtilityLine");
    p(this, "gutterUtilityContainer");
    p(this, "gutterUtilityButton");
    p(this, "gutterUtilitySlot");
    p(this, "interactiveLinesAttr", false);
    p(this, "interactiveLineNumbersAttr", false);
    p(this, "hasPointerListeners", false);
    p(this, "hasDocumentPointerListeners", false);
    p(this, "selectedRange", null);
    p(this, "selectedRangeHighlightSide");
    p(this, "selectedRangeLineNumberOnly", false);
    p(this, "editorActiveLine", null);
    p(this, "editorActiveLineSide");
    p(this, "editorLineNumberOnly", false);
    p(this, "proposedSelectedRange");
    p(this, "renderedSelectedLinesState");
    p(this, "renderedEditorActiveLineState");
    p(this, "selectionAnchor");
    p(this, "pointerSession", { mode: "idle" });
    p(this, "getHoveredLine", () => {
      const e2 = this.gutterUtilityLine ?? this.hoveredLine;
      if (e2 != null) {
        if (this.mode === "diff" && e2.type === "diff-line") return {
          lineNumber: e2.lineNumber,
          side: e2.annotationSide
        };
        if (this.mode === "file" && e2.type === "line") return { lineNumber: e2.lineNumber };
      }
    });
    p(this, "handlePointerClick", (e2) => {
      const { onHunkExpand: t2, onLineClick: n, onLineNumberClick: i, onTokenClick: r, onMergeConflictActionClick: s } = this.options;
      t2 == null && n == null && i == null && s == null && r == null || this.options.onGutterUtilityClick != null && Ot(e2.composedPath()) || (he(this.options.__debugPointerEvents, "click", "FileDiff.DEBUG.handlePointerClick:", e2), this.handlePointerEvent({
        eventType: "click",
        event: e2
      }));
    });
    p(this, "handlePointerMove", (e2) => {
      if (e2.pointerType !== "mouse") return;
      const { lineHoverHighlight: t2 = "disabled", onLineEnter: n, onLineLeave: i, onTokenEnter: r, onTokenLeave: s, enableGutterUtility: o = false } = this.options;
      t2 === "disabled" && !o && n == null && i == null && r == null && s == null || (he(this.options.__debugPointerEvents, "move", "FileDiff.DEBUG.handlePointerMove:", e2), this.handlePointerEvent({
        eventType: "move",
        event: e2
      }));
    });
    p(this, "handlePointerLeave", (e2) => {
      const { __debugPointerEvents: t2 } = this.options;
      if (he(t2, "move", "FileDiff.DEBUG.handlePointerLeave: no event"), this.hoveredLine == null && this.hoveredToken == null) {
        he(t2, "move", "FileDiff.DEBUG.handlePointerLeave: returned early, no hovered line or token");
        return;
      }
      this.hoveredToken != null && (this.options.onTokenLeave?.(this.hoveredToken, e2), this.clearHoveredToken()), this.hoveredLine != null && (this.options.onLineLeave?.({
        ...this.hoveredLine,
        event: e2
      }), this.clearHoveredLine()), this.placeUtility();
    });
    p(this, "handlePointerDown", (e2) => {
      if (e2.pointerType === "mouse" && e2.button !== 0 || this.pre == null || this.pointerSession.mode !== "idle") return;
      const t2 = e2.composedPath();
      Ot(t2) && this.options.onGutterUtilityClick != null ? this.startGutterSelectionFromPointerDown(e2) : (e2.pointerType !== "mouse" && this.revealUtilityFromGutterPath(t2), this.startLineSelectionFromPointerDown(e2));
    });
    p(this, "handleDocumentPointerMove", (e2) => {
      switch (this.pointerSession.mode) {
        case "idle":
          return;
        case "gutterSelecting": {
          if (e2.pointerId !== this.pointerSession.pointerId) return;
          e2.preventDefault();
          const t2 = this.resolveSelectionPoint(e2, { source: "coordinates-first" });
          if (t2 == null) return;
          this.pointerSession.current = t2, this.updateSelection(t2.lineNumber, t2.side);
          return;
        }
        case "selecting": {
          if (e2.pointerId !== this.pointerSession.pointerId) return;
          e2.preventDefault();
          const t2 = this.resolveSelectionInfo(e2, {
            source: "coordinates-first",
            requireNumberColumn: false
          });
          if (t2 == null || this.selectionAnchor == null) return;
          this.updateSelection(t2.lineNumber, t2.eventSide);
          return;
        }
        case "pendingSingleLineUnselect": {
          if (e2.pointerId !== this.pointerSession.pointerId) return;
          e2.preventDefault();
          const t2 = this.resolveSelectionInfo(e2, {
            source: "coordinates-first",
            requireNumberColumn: false
          });
          if (t2 == null || this.selectionAnchor == null) return;
          const n = {
            lineNumber: t2.lineNumber,
            side: t2.eventSide
          };
          if (ph(this.pointerSession.pending, n)) return;
          this.updateSelection(t2.lineNumber, t2.eventSide, false), this.notifySelectionStart(this.getCurrentSelectionRange()), this.notifySelectionChangeDelta(), this.pointerSession = {
            mode: "selecting",
            pointerId: e2.pointerId
          };
          return;
        }
      }
    });
    p(this, "handleDocumentPointerUp", (e2) => {
      const { onGutterUtilityClick: t2 } = this.options;
      switch (this.pointerSession.mode) {
        case "idle":
          return;
        case "gutterSelecting": {
          const { pointerSession: n } = this;
          if (e2.pointerId !== n.pointerId) return;
          e2.preventDefault();
          const i = this.resolveSelectionPoint(e2, { source: "coordinates-first" });
          i != null && (n.current = i, this.updateSelection(i.lineNumber, i.side));
          const r = this.buildSelectedLineRange(n.anchor, n.current);
          t2?.({ ...r }), this.selectionAnchor = void 0, this.notifySelectionEnd(r), this.notifySelectionCommitted(r), this.clearProposedSelection(), this.clearPointerSession(), this.detachDocumentPointerListeners();
          return;
        }
        case "pendingSingleLineUnselect":
          if (e2.pointerId !== this.pointerSession.pointerId) return;
          e2.preventDefault(), this.updateSelection(null, void 0, false), this.selectionAnchor = void 0, this.clearPendingSingleLineState(), this.detachDocumentPointerListeners(), this.notifySelectionEnd(this.getCurrentSelectionRange()), this.notifySelectionCommitted(this.getCurrentSelectionRange()), this.clearProposedSelection();
          return;
        case "selecting":
          if (e2.pointerId !== this.pointerSession.pointerId) return;
          e2.preventDefault(), this.selectionAnchor = void 0, this.detachDocumentPointerListeners(), this.clearPointerSession(), this.notifySelectionEnd(this.getCurrentSelectionRange()), this.notifySelectionCommitted(this.getCurrentSelectionRange()), this.clearProposedSelection();
      }
    });
    p(this, "handleDocumentPointerCancel", (e2) => {
      switch (this.pointerSession.mode) {
        case "idle":
          return;
        case "gutterSelecting":
        case "selecting":
        case "pendingSingleLineUnselect":
          if ("pointerId" in this.pointerSession && e2.pointerId !== this.pointerSession.pointerId)
            return;
          this.selectionAnchor = void 0, this.clearProposedSelection(), this.clearPendingSingleLineState(), this.clearPointerSession(), this.detachDocumentPointerListeners();
      }
    });
    p(this, "renderSelection", () => {
      pi(this.renderSelection);
      const e2 = this.getSelectionRenderState();
      if (this.pre == null) return;
      const { editorActiveLine: t2, selectedLines: n } = e2, i = !Br(this.renderedSelectedLinesState, n), r = !Br(this.renderedEditorActiveLineState, t2);
      if (!i && !r) return;
      i && (this.renderedSelectedLinesState = void 0), r && (this.renderedEditorActiveLineState = void 0);
      const s = this.pre.getAttribute("data-diff-type") === "split", o = i ? this.resolveLineRenderRange(n, s, "selected-lines") : void 0, a = r ? this.resolveLineRenderRange(t2, s, "editor-active-line") : void 0, l = this.getLineRenderColumns(i ? n : void 0, o, r ? t2 : void 0, a), c = n.range == null || l.some((y) => y.renderSelectedLines), u = t2.range == null || l.some((y) => y.renderEditorActiveLine);
      if (i) for (const y of this.pre.querySelectorAll("[data-selected-line]")) y.removeAttribute("data-selected-line");
      if (r) for (const y of this.pre.querySelectorAll("[data-editor-active-line]")) y.removeAttribute("data-editor-active-line");
      const d = o == null ? void 0 : Math.min(o.start, o.end), h = o == null ? void 0 : Math.max(o.start, o.end), f = d === h, g = a?.start;
      for (const y of l) {
        const { content: v, gutter: m, renderEditorActiveLine: b, renderSelectedLines: w } = y, C = Math.max(w ? h ?? -1 / 0 : -1 / 0, b ? g ?? -1 / 0 : -1 / 0), E = v.children.length;
        for (let L = 0; L < E; L++) {
          const R = v.children[L], I = m.children[L];
          if (!(R instanceof HTMLElement) || !(I instanceof HTMLElement)) continue;
          const M = this.parseLineIndex(R, s);
          if ((M ?? 0) > C) break;
          if (M != null) {
            if (w && d != null && h != null && M >= d && M <= h) {
              let q = f ? "single" : M === d ? "first" : M === h ? "last" : "";
              I.setAttribute("data-selected-line", q), n.lineNumberOnly || (R.setAttribute("data-selected-line", q), I.nextSibling instanceof HTMLElement && R.nextSibling instanceof HTMLElement && (R.nextSibling.hasAttribute("data-line-annotation") || R.nextSibling.hasAttribute("data-merge-conflict-actions")) && (f ? (q = "last", R.setAttribute("data-selected-line", "first")) : M === d ? q = "" : M === h && R.setAttribute("data-selected-line", ""), R.nextSibling.setAttribute("data-selected-line", q), I.nextSibling.setAttribute("data-selected-line", q)));
            }
            b && M === g && (I.setAttribute("data-editor-active-line", ""), t2.lineNumberOnly || R.setAttribute("data-editor-active-line", ""));
          }
        }
      }
      i && c && (this.renderedSelectedLinesState = n), r && u && (this.renderedEditorActiveLineState = t2);
    });
    this.mode = e, this.options = t;
  }
  setOptions(e) {
    this.options = e;
  }
  cleanUp() {
    this.pre?.removeEventListener("click", this.handlePointerClick), this.pre?.removeEventListener("pointerdown", this.handlePointerDown), this.pre?.removeEventListener("pointermove", this.handlePointerMove), this.pre?.removeEventListener("pointerleave", this.handlePointerLeave), this.pre?.removeAttribute("data-interactive-lines"), this.pre?.removeAttribute("data-interactive-line-numbers"), this.pre = void 0, this.gutterUtilityContainer?.remove(), this.gutterUtilityLine = void 0, this.gutterUtilityContainer = void 0, this.gutterUtilityButton = void 0, this.gutterUtilitySlot = void 0, this.clearHoveredLine(), this.clearHoveredToken(), this.detachDocumentPointerListeners(), this.clearPointerSession(), pi(this.renderSelection), this.interactiveLinesAttr = false, this.interactiveLineNumbersAttr = false, this.hasPointerListeners = false, this.setSelectionDirty();
  }
  setup(e) {
    this.setSelectionDirty();
    const { usesCustomGutterUtility: t = false, enableGutterUtility: n = false } = this.options;
    this.pre !== e && (this.cleanUp(), this.pre = e), n ? this.ensureGutterUtilityNode(t) : this.gutterUtilityContainer != null && (this.gutterUtilityContainer.remove(), this.gutterUtilityLine = void 0, this.gutterUtilityContainer = void 0, this.gutterUtilityButton = void 0, this.gutterUtilitySlot = void 0, this.pointerSession.mode === "gutterSelecting" && (this.clearPointerSession(), this.detachDocumentPointerListeners())), this.syncPointerListeners(e), this.updateInteractiveLineAttributes(), this.renderSelection(), this.placeUtility();
  }
  setSelectionDirty() {
    this.renderedSelectedLinesState = void 0, this.renderedEditorActiveLineState = void 0;
  }
  isSelectionDirty() {
    return this.renderedSelectedLinesState === void 0 || this.renderedEditorActiveLineState === void 0;
  }
  setSelection(e, t) {
    const n = !(e === this.selectedRange || mi(e ?? void 0, this.selectedRange ?? void 0)), i = t?.lineNumberOnly ?? false, r = t?.activeLineSide !== this.selectedRangeHighlightSide || i !== this.selectedRangeLineNumberOnly;
    !this.isSelectionDirty() && !n && !r || (this.proposedSelectedRange = void 0, this.selectedRange = e, this.selectedRangeHighlightSide = t?.activeLineSide, this.selectedRangeLineNumberOnly = i, this.renderSelection(), this.placeUtility(), n && t?.notify !== false && this.notifySelectionCommitted(e));
  }
  setEditorActiveLine(e, { lineNumberOnly: t = false, side: n } = {}) {
    const i = e !== this.editorActiveLine, r = n !== this.editorActiveLineSide || t !== this.editorLineNumberOnly;
    !this.isSelectionDirty() && !i && !r || (this.editorActiveLine = e, this.editorActiveLineSide = n, this.editorLineNumberOnly = t, this.renderSelection());
  }
  getSelection() {
    return this.selectedRange;
  }
  handlePointerEvent({ eventType: e, event: t }) {
    const { __debugPointerEvents: n } = this.options, i = t.composedPath();
    he(n, e, "FileDiff.DEBUG.handlePointerEvent:", {
      eventType: e,
      composedPath: i
    });
    const r = this.resolvePointerTarget(i);
    he(n, e, "FileDiff.DEBUG.handlePointerEvent: resolvePointerTarget result:", r);
    const { onLineClick: s, onLineNumberClick: o, onLineEnter: a, onLineLeave: l, onTokenClick: c, onTokenEnter: u, onTokenLeave: d, onHunkExpand: h, onMergeConflictActionClick: f } = this.options;
    switch (e) {
      case "move": {
        const g = $n(r) && this.hoveredLine?.lineElement === r.lineElement;
        Vt(r) && this.hoveredToken?.tokenElement === r.tokenElement || (this.hoveredToken != null && (d?.(this.hoveredToken, t), this.clearHoveredToken()), Vt(r) && (this.setHoveredToken(this.toTokenEventBaseProps(r)), u?.(this.hoveredToken, t))), g || (this.hoveredLine != null && (l?.({
          ...this.hoveredLine,
          event: t
        }), this.clearHoveredLine()), $n(r) ? (this.setHoveredLine(this.toEventBaseProps(r)), this.placeUtility(), a?.({
          ...this.hoveredLine,
          event: t
        })) : this.placeUtility());
        break;
      }
      case "click": {
        if (r == null) break;
        if (yh(r) && f != null) {
          f(r);
          break;
        }
        if (bh(r) && h != null) {
          h(r.hunkIndex, r.all || t.shiftKey ? "both" : r.direction, r.all || t.shiftKey ? Number.POSITIVE_INFINITY : void 0);
          break;
        }
        if (!$n(r)) break;
        Vt(r) && c != null && c(this.toTokenEventBaseProps(r), t);
        const g = this.toEventBaseProps(r);
        o != null && r.numberColumn ? o({
          ...g,
          event: t
        }) : s?.({
          ...g,
          event: t
        });
        break;
      }
    }
  }
  syncPointerListeners(e) {
    const { __debugPointerEvents: t, lineHoverHighlight: n = "disabled", onLineClick: i, onLineNumberClick: r, onLineEnter: s, onLineLeave: o, onTokenClick: a, onTokenEnter: l, onTokenLeave: c, onHunkExpand: u, onMergeConflictActionClick: d, enableGutterUtility: h = false, enableLineSelection: f = false, onGutterUtilityClick: g } = this.options, y = g != null, v = n !== "disabled" || i != null || r != null || s != null || o != null || a != null || l != null || c != null || u != null || d != null || h || f || y;
    v && !this.hasPointerListeners ? (e.addEventListener("click", this.handlePointerClick), e.addEventListener("pointerdown", this.handlePointerDown), e.addEventListener("pointermove", this.handlePointerMove), e.addEventListener("pointerleave", this.handlePointerLeave), this.hasPointerListeners = true, he(t, "click", "FileDiff.DEBUG.attachEventListeners: Attaching click events for:", (() => {
      const w = [];
      return (t === "both" || t === "click") && (i != null && w.push("onLineClick"), r != null && w.push("onLineNumberClick"), u != null && w.push("expandable hunk separators"), d != null && w.push("merge conflict actions")), w;
    })()), he(t, "move", "FileDiff.DEBUG.attachEventListeners: Attaching pointer move event"), he(t, "move", "FileDiff.DEBUG.attachEventListeners: Attaching pointer leave event")) : !v && this.hasPointerListeners && (e.removeEventListener("click", this.handlePointerClick), e.removeEventListener("pointerdown", this.handlePointerDown), e.removeEventListener("pointermove", this.handlePointerMove), e.removeEventListener("pointerleave", this.handlePointerLeave), this.hasPointerListeners = false);
    const m = this.pointerSession.mode === "selecting" || this.pointerSession.mode === "pendingSingleLineUnselect", b = this.pointerSession.mode === "gutterSelecting";
    (!f && m || !y && b) && (this.clearPointerSession(), this.detachDocumentPointerListeners(), this.selectionAnchor = void 0, this.clearPendingSingleLineState());
  }
  updateInteractiveLineAttributes() {
    if (this.pre == null) return;
    const { onLineClick: e, onLineNumberClick: t, enableLineSelection: n = false } = this.options, i = e != null, r = t != null || n;
    i && !this.interactiveLinesAttr ? (this.pre.setAttribute("data-interactive-lines", ""), this.interactiveLinesAttr = true) : !i && this.interactiveLinesAttr && (this.pre.removeAttribute("data-interactive-lines"), this.interactiveLinesAttr = false), r && !this.interactiveLineNumbersAttr ? (this.pre.setAttribute("data-interactive-line-numbers", ""), this.interactiveLineNumbersAttr = true) : !r && this.interactiveLineNumbersAttr && (this.pre.removeAttribute("data-interactive-line-numbers"), this.interactiveLineNumbersAttr = false);
  }
  startLineSelectionFromPointerDown(e) {
    const { enableLineSelection: t = false } = this.options;
    if (!t) return;
    const n = this.resolveSelectionInfo(e, {
      source: "event-path",
      requireNumberColumn: true
    });
    if (n == null) return;
    const { pre: i } = this;
    if (i == null) return;
    const { lineNumber: r, eventSide: s, lineIndex: o } = n;
    if (e.shiftKey && this.selectedRange != null) {
      const a = this.getIndexesFromSelection(this.selectedRange, i.getAttribute("data-diff-type") === "split");
      if (a == null) return;
      const l = a.start <= a.end ? o >= a.start : o <= a.end;
      this.selectionAnchor = {
        lineNumber: l ? this.selectedRange.start : this.selectedRange.end,
        side: l ? this.selectedRange.side : this.selectedRange.endSide ?? this.selectedRange.side
      }, this.updateSelection(r, s, false), this.notifySelectionStart(this.getCurrentSelectionRange()), this.pointerSession = {
        mode: "selecting",
        pointerId: e.pointerId
      }, this.attachDocumentPointerListeners();
      return;
    }
    if (this.selectedRange?.start === r && this.selectedRange?.end === r) {
      const a = {
        lineNumber: r,
        side: s
      };
      this.selectionAnchor = a, this.pointerSession = {
        mode: "pendingSingleLineUnselect",
        pointerId: e.pointerId,
        anchor: a,
        pending: a
      }, this.attachDocumentPointerListeners();
      return;
    }
    this.options.controlledSelection === true ? this.proposedSelectedRange = null : this.selectedRange = null, this.placeUtility(), this.selectionAnchor = {
      lineNumber: r,
      side: s
    }, this.updateSelection(r, s, false), this.notifySelectionStart(this.getCurrentSelectionRange()), this.pointerSession = {
      mode: "selecting",
      pointerId: e.pointerId
    }, this.attachDocumentPointerListeners();
  }
  startGutterSelectionFromPointerDown(e) {
    const { onGutterUtilityClick: t } = this.options;
    if (t == null) return;
    const n = this.currentSelectionEnds(), i = n?.bottom ?? this.resolveSelectionPoint(e, {
      source: "event-path",
      excludeUtility: false
    }), r = n?.top ?? i;
    i == null || r == null || (e.preventDefault(), e.stopPropagation(), this.pointerSession = {
      mode: "gutterSelecting",
      pointerId: e.pointerId,
      anchor: r,
      current: i
    }, this.selectionAnchor = {
      lineNumber: r.lineNumber,
      side: r.side
    }, this.updateSelection(i.lineNumber, i.side, false), this.notifySelectionStart(this.getCurrentSelectionRange()), this.attachDocumentPointerListeners());
  }
  clearHoveredLine() {
    this.hoveredLine != null && (this.hoveredLine.lineElement.removeAttribute("data-hovered"), this.hoveredLine.numberElement.removeAttribute("data-hovered"), this.hoveredLine = void 0);
  }
  setHoveredLine(e) {
    const { lineHoverHighlight: t = "disabled" } = this.options;
    this.hoveredLine != null && this.clearHoveredLine(), this.hoveredLine = e, t !== "disabled" && ((t === "both" || t === "line") && this.hoveredLine.lineElement.setAttribute("data-hovered", ""), (t === "both" || t === "number") && this.hoveredLine.numberElement.setAttribute("data-hovered", ""));
  }
  clearHoveredToken() {
    this.hoveredToken != null && (this.hoveredToken = void 0);
  }
  setHoveredToken(e) {
    this.hoveredToken != null && this.clearHoveredToken(), this.hoveredToken = e;
  }
  ensureGutterUtilityNode(e) {
    if (this.gutterUtilityContainer == null && (this.gutterUtilityContainer = document.createElement("div"), this.gutterUtilityContainer.setAttribute("data-gutter-utility-slot", "")), e)
      this.gutterUtilityButton != null && (this.gutterUtilityButton.remove(), this.gutterUtilityButton = void 0), this.gutterUtilitySlot == null && (this.gutterUtilitySlot = document.createElement("slot"), this.gutterUtilitySlot.name = "gutter-utility-slot"), this.gutterUtilitySlot.parentNode !== this.gutterUtilityContainer && this.gutterUtilityContainer.replaceChildren(this.gutterUtilitySlot);
    else {
      if (this.gutterUtilitySlot?.remove(), this.gutterUtilitySlot = void 0, this.gutterUtilityButton == null) {
        const t = document.createElement("div");
        t.innerHTML = Le(fh());
        const n = t.firstElementChild;
        if (!(n instanceof HTMLButtonElement)) throw new Error("InteractionManager.ensureGutterUtilityNode: Node element should be a button");
        n.remove(), this.gutterUtilityButton = n;
      }
      this.gutterUtilityButton.parentNode !== this.gutterUtilityContainer && this.gutterUtilityContainer.replaceChildren(this.gutterUtilityButton);
    }
  }
  revealUtilityFromGutterPath(e) {
    if (this.placeUtilityFromSelection()) return;
    const t = this.resolvePointerTarget(e);
    ut(t) && t.numberColumn && this.showUtilityOnLine(this.toEventBaseProps(t));
  }
  placeUtility() {
    if (!this.placeUtilityFromSelection()) {
      if (this.hoveredLine != null) {
        this.showUtilityOnLine(this.hoveredLine);
        return;
      }
      this.hideUtility();
    }
  }
  placeUtilityFromSelection() {
    const e = this.currentSelectionEnds();
    if (e == null) return false;
    const t = this.targetForSelectionPoint(e.bottom);
    return t == null ? this.hideUtility() : this.showUtilityOnLine(this.toEventBaseProps(t)), true;
  }
  showUtilityOnLine(e) {
    this.gutterUtilityContainer != null && (this.gutterUtilityLine = e, e.numberElement.appendChild(this.gutterUtilityContainer));
  }
  hideUtility() {
    this.gutterUtilityContainer?.remove(), this.gutterUtilityLine = void 0;
  }
  currentSelectionEnds() {
    const e = this.getCurrentSelectionRange();
    return e == null ? void 0 : this.selectionEnds(e);
  }
  selectionEnds(e) {
    const t = {
      lineNumber: e.start,
      side: e.side
    }, n = {
      lineNumber: e.end,
      side: e.endSide ?? e.side
    }, i = this.selectionPointRowIndex(t), r = this.selectionPointRowIndex(n);
    if (!(i == null || r == null))
      return i > r ? {
        top: n,
        bottom: t
      } : {
        top: t,
        bottom: n
      };
  }
  selectionPointRowIndex(e) {
    const t = this.getLineIndex(e.lineNumber, e.side);
    if (t != null)
      return this.isSplitDiff() ? t[1] : t[0];
  }
  targetForSelectionPoint(e) {
    if (this.pre == null) return;
    const t = this.getLineIndex(e.lineNumber, e.side);
    if (t == null) return;
    const n = this.mode === "diff" ? `${t[0]},${t[1]}` : `${t[0]}`, i = this.pre.querySelectorAll(`[data-column-number="${e.lineNumber}"][data-line-index="${n}"]`);
    for (const r of i) {
      if (!(r instanceof HTMLElement)) continue;
      const s = this.resolvePointerTarget(ot(r));
      if (ut(s) && !(this.mode === "diff" && e.side != null && s.side !== e.side))
        return s;
    }
  }
  attachDocumentPointerListeners() {
    this.hasDocumentPointerListeners || (document.addEventListener("pointermove", this.handleDocumentPointerMove), document.addEventListener("pointerup", this.handleDocumentPointerUp), document.addEventListener("pointercancel", this.handleDocumentPointerCancel), this.hasDocumentPointerListeners = true);
  }
  detachDocumentPointerListeners() {
    this.hasDocumentPointerListeners && (document.removeEventListener("pointermove", this.handleDocumentPointerMove), document.removeEventListener("pointerup", this.handleDocumentPointerUp), document.removeEventListener("pointercancel", this.handleDocumentPointerCancel), this.hasDocumentPointerListeners = false);
  }
  clearPointerSession() {
    this.pointerSession = { mode: "idle" };
  }
  clearPendingSingleLineState() {
    this.pointerSession.mode === "pendingSingleLineUnselect" && (this.pointerSession = { mode: "idle" });
  }
  selectionInfoFromPath(e, t) {
    const n = this.resolvePointerTarget(e);
    if (ut(n) && !(t && !n.numberColumn) && n.splitLineIndex != null)
      return {
        lineIndex: n.splitLineIndex,
        lineNumber: n.lineNumber,
        eventSide: this.mode === "diff" ? n.side : void 0
      };
  }
  resolveSelectionInfo(e, t) {
    const n = this.resolveSelectionPath(e, t);
    return n != null ? this.selectionInfoFromPath(n, t.requireNumberColumn) : void 0;
  }
  selectionPointFromPath(e) {
    const t = this.resolvePointerTarget(e);
    if (ut(t))
      return {
        lineNumber: t.lineNumber,
        side: this.mode === "diff" ? t.side : void 0
      };
  }
  resolveSelectionPoint(e, t) {
    const n = this.resolveSelectionPath(e, t);
    return n != null ? this.selectionPointFromPath(n) : void 0;
  }
  resolveSelectionPath(e, t) {
    const n = t.excludeUtility !== false;
    switch (t.source) {
      case "event-path":
        return this.pathFromEventPath(e.composedPath(), n);
      case "coordinates-first": {
        const i = this.pathFromCoordinates(e, n);
        return i !== void 0 ? i ?? void 0 : this.pathFromEventPath(e.composedPath(), n);
      }
    }
  }
  pathFromCoordinates(e, t) {
    const n = this.hitTest(e);
    if (n !== void 0)
      return n === null ? null : this.pathFromElement(n, t) ?? null;
  }
  pathFromEventPath(e, t) {
    if (!(t && Ot(e))) {
      for (const n of e) if (n instanceof Element) return this.pathFromElement(n, t);
    }
  }
  pathFromElement(e, t) {
    const n = ot(e);
    if (t && Ot(n)) return;
    const i = wh(e);
    return i != null ? ot(i) : this.pathFromAnnotationSlot(e);
  }
  pathFromAnnotationSlot(e) {
    const t = Sh(e)?.previousElementSibling;
    if (t instanceof HTMLElement && (t.hasAttribute("data-line") || t.hasAttribute("data-column-number"))) return ot(t);
    const n = xh(Ch(e));
    if (n == null) return;
    const i = this.targetForSelectionPoint(n);
    return i != null ? ot(i.lineElement) : void 0;
  }
  hitTest(e) {
    if (!Number.isFinite(e.clientX) || !Number.isFinite(e.clientY)) return;
    const t = this.pre?.getRootNode(), n = zr(t) ? t : zr(document) ? document : void 0;
    if (n != null)
      return n.elementFromPoint(e.clientX, e.clientY);
  }
  getLineIndex(e, t) {
    const { getLineIndex: n } = this.options;
    return n != null ? n(e, t) : [e - 1, e - 1];
  }
  getCurrentSelectionRange() {
    return this.proposedSelectedRange !== void 0 ? this.proposedSelectedRange : this.selectedRange;
  }
  clearProposedSelection() {
    this.proposedSelectedRange = void 0;
  }
  updateSelection(e, t, n = true) {
    const i = this.getCurrentSelectionRange();
    let r;
    if (e == null) r = null;
    else {
      const s = this.selectionAnchor?.side ?? t, o = this.selectionAnchor?.lineNumber ?? e;
      r = this.buildSelectionRange(o, e, s, t);
    }
    mi(i ?? void 0, r ?? void 0) || (this.selectedRangeHighlightSide = void 0, this.selectedRangeLineNumberOnly = false, this.options.controlledSelection === true ? this.proposedSelectedRange = r : (this.selectedRange = r, K(this.renderSelection)), this.placeUtility(), n && this.notifySelectionChangeDelta());
  }
  getIndexesFromSelection(e, t) {
    if (this.pre == null) return;
    const n = this.getLineIndex(e.start, e.side), i = this.getLineIndex(e.end, e.endSide ?? e.side);
    return n != null && i != null ? {
      start: t ? n[1] : n[0],
      end: t ? i[1] : i[0]
    } : void 0;
  }
  getSelectionRenderState() {
    return {
      selectedLines: {
        range: this.selectedRange,
        highlightSide: this.selectedRangeHighlightSide,
        lineNumberOnly: this.selectedRangeLineNumberOnly
      },
      editorActiveLine: {
        range: this.editorActiveLine == null ? null : {
          start: this.editorActiveLine,
          end: this.editorActiveLine,
          side: this.editorActiveLineSide
        },
        highlightSide: this.editorActiveLineSide,
        lineNumberOnly: this.editorLineNumberOnly
      }
    };
  }
  resolveLineRenderRange(e, t, n) {
    if (e.range == null) return;
    const i = this.getIndexesFromSelection(e.range, t);
    if (i == null)
      throw console.error({
        rowRange: i,
        range: e.range
      }), new Error(`InteractionManager.renderSelection: No valid ${n} rowRange`);
    return i;
  }
  getLineRenderColumns(e, t, n, i) {
    if (this.pre == null || t == null && i == null) return [];
    const { children: r } = this.pre;
    if (r.length > 2)
      throw console.error(r), new Error("InteractionManager.renderSelection: Somehow there are more than 2 code elements...");
    const s = [];
    for (const o of r) {
      const a = o.hasAttribute("data-deletions") ? "deletions" : o.hasAttribute("data-additions") ? "additions" : void 0, l = e != null && t != null && (e.highlightSide == null || a == null || e.highlightSide === a), c = n != null && i != null && (n.highlightSide == null || a == null || n.highlightSide === a);
      if (!l && !c) continue;
      const [u, d] = o.children;
      if (!(u instanceof HTMLElement) || !(d instanceof HTMLElement)) throw new Error("InteractionManager.renderSelection: missing gutter or content element");
      if (d.children.length !== u.children.length) throw new Error("InteractionManager.renderSelection: gutter and content children dont match, something is wrong");
      s.push({
        content: d,
        gutter: u,
        renderEditorActiveLine: c,
        renderSelectedLines: l
      });
    }
    return s;
  }
  notifySelectionCommitted(e) {
    this.options.onLineSelected?.(e);
  }
  notifySelectionChangeDelta() {
    this.options.onLineSelectionChange?.(this.getCurrentSelectionRange() ?? null);
  }
  notifySelectionStart(e) {
    this.options.onLineSelectionStart?.(e);
  }
  notifySelectionEnd(e) {
    this.options.onLineSelectionEnd?.(e);
  }
  toEventBaseProps(e) {
    return this.mode === "file" ? {
      type: "line",
      lineElement: e.lineElement,
      lineNumber: e.lineNumber,
      numberColumn: e.numberColumn,
      numberElement: e.numberElement
    } : {
      type: "diff-line",
      annotationSide: e.side,
      lineType: e.lineType,
      lineElement: e.lineElement,
      numberElement: e.numberElement,
      lineNumber: e.lineNumber,
      numberColumn: e.numberColumn
    };
  }
  toTokenEventBaseProps({ lineCharEnd: e, lineCharStart: t, lineNumber: n, side: i, tokenElement: r, tokenText: s }) {
    return this.mode === "file" ? {
      type: "token",
      lineCharEnd: e,
      lineCharStart: t,
      lineNumber: n,
      tokenElement: r,
      tokenText: s
    } : {
      type: "token",
      lineCharEnd: e,
      lineCharStart: t,
      lineNumber: n,
      side: i,
      tokenElement: r,
      tokenText: s
    };
  }
  buildSelectedLineRange(e, t) {
    return this.buildSelectionRange(e.lineNumber, t.lineNumber, e.side, t.side);
  }
  buildSelectionRange(e, t, n, i) {
    return {
      start: e,
      end: t,
      ...n != null ? { side: n } : {},
      ...n !== i && i != null ? { endSide: i } : {}
    };
  }
  resolvePointerTarget(e) {
    let t = false, n, i, r, s, o, a, l, c, u, d;
    for (const f of e) {
      if (!(f instanceof HTMLElement)) continue;
      if (d == null && f.hasAttribute("data-merge-conflict-action")) {
        const m = f.getAttribute("data-merge-conflict-action") ?? void 0, b = f.getAttribute("data-merge-conflict-conflict-index") ?? void 0, w = b != null ? Number.parseInt(b, 10) : NaN;
        vh(m) && Number.isFinite(w) && (d = {
          kind: "merge-conflict-action",
          resolution: m,
          conflictIndex: w
        });
      }
      if (a == null && f.hasAttribute("data-char")) {
        a = f;
        const m = f.getAttribute("data-char");
        if (m != null) {
          const b = Number.parseInt(m, 10);
          if (!Number.isNaN(b)) {
            const w = f.textContent ?? "", C = b + w.length;
            (w.trim() !== "" || this.options.enableTokenInteractionsOnWhitespace === true) && (l = {
              tokenElement: a,
              lineCharStart: b,
              lineCharEnd: C,
              tokenText: w
            });
            continue;
          }
        }
      }
      const g = o == null ? f.getAttribute("data-column-number") ?? void 0 : void 0;
      if (g != null) {
        o = f, u = Number.parseInt(g, 10), t = true, n = Wr(f), s = f.getAttribute("data-line-index") ?? void 0;
        continue;
      }
      const y = r == null ? f.getAttribute("data-line") ?? void 0 : void 0;
      if (y != null) {
        r = f, u = Number.parseInt(y, 10), n = Wr(f), s = f.getAttribute("data-line-index") ?? void 0;
        continue;
      }
      if (c == null && (f.hasAttribute("data-expand-button") || f.hasAttribute("data-unmodified-lines"))) {
        c = {
          hunkIndex: void 0,
          direction: f.hasAttribute("data-expand-up") ? "up" : f.hasAttribute("data-expand-down") ? "down" : "both",
          all: f.hasAttribute("data-expand-all-button")
        };
        continue;
      }
      const v = c != null ? f.getAttribute("data-expand-index") ?? void 0 : void 0;
      if (c != null && v != null) {
        const m = Number.parseInt(v, 10);
        Number.isNaN(m) || (c.hunkIndex = m);
        continue;
      }
      if (i == null && f.hasAttribute("data-code")) {
        i = f;
        break;
      }
    }
    if (d != null) return d;
    if (c?.hunkIndex != null) return {
      type: "line-info",
      hunkIndex: c.hunkIndex,
      direction: c.direction,
      all: c.all
    };
    if (r ??= s != null ? Ur(i, `[data-line][data-line-index="${s}"]`) : void 0, o ??= s != null ? Ur(i, `[data-column-number][data-line-index="${s}"]`) : void 0, i == null || r == null || o == null || n == null || u == null || Number.isNaN(u)) return;
    const h = this.parseLineIndex(r, this.isSplitDiff());
    return l != null ? this.mode === "file" ? {
      kind: "token",
      lineType: n,
      lineElement: r,
      lineNumber: u,
      numberColumn: t,
      numberElement: o,
      side: void 0,
      splitLineIndex: h,
      ...l
    } : {
      kind: "token",
      lineType: n,
      lineElement: r,
      lineNumber: u,
      numberColumn: t,
      numberElement: o,
      side: Gr(n, i),
      splitLineIndex: h,
      ...l
    } : this.mode === "file" ? {
      kind: "line",
      lineType: n,
      lineElement: r,
      lineNumber: u,
      numberColumn: t,
      numberElement: o,
      side: void 0,
      splitLineIndex: h
    } : {
      kind: "line",
      lineType: n,
      lineElement: r,
      lineNumber: u,
      numberColumn: t,
      numberElement: o,
      side: Gr(n, i),
      splitLineIndex: h
    };
  }
  isSplitDiff() {
    return this.pre?.getAttribute("data-diff-type") === "split";
  }
  parseLineIndex(e, t) {
    const n = (e.getAttribute("data-line-index") ?? "").split(",").map((i) => Number.parseInt(i, 10)).filter((i) => !Number.isNaN(i));
    if (t && n.length === 2) return n[1];
    if (!t) return n[0];
  }
};
function Dr({ enableTokenInteractionsOnWhitespace: e, enableGutterUtility: t, lineHoverHighlight: n, onGutterUtilityClick: i, onLineClick: r, onLineEnter: s, onLineLeave: o, onLineNumberClick: a, onTokenClick: l, onTokenEnter: c, onTokenLeave: u, renderGutterUtility: d, __debugPointerEvents: h, enableLineSelection: f, controlledSelection: g, onLineSelected: y, onLineSelectionStart: v, onLineSelectionChange: m, onLineSelectionEnd: b }, w, C, E) {
  return {
    enableTokenInteractionsOnWhitespace: e,
    enableGutterUtility: mh({
      enableGutterUtility: t,
      renderGutterUtility: d,
      onGutterUtilityClick: i
    }),
    usesCustomGutterUtility: d != null,
    lineHoverHighlight: n,
    onGutterUtilityClick: i,
    onHunkExpand: w,
    onMergeConflictActionClick: E,
    onLineClick: r,
    onLineEnter: s,
    onLineLeave: o,
    onLineNumberClick: a,
    onTokenClick: l,
    onTokenEnter: c,
    onTokenLeave: u,
    __debugPointerEvents: h,
    enableLineSelection: f,
    controlledSelection: g,
    onLineSelected: y,
    onLineSelectionStart: v,
    onLineSelectionChange: m,
    onLineSelectionEnd: b,
    getLineIndex: C
  };
}
function mh({ enableGutterUtility: e, renderGutterUtility: t, onGutterUtilityClick: n }) {
  if (n != null && t != null) throw new Error("Cannot use both 'onGutterUtilityClick' and 'renderGutterUtility'. Use only one gutter utility API.");
  return e ?? false;
}
function ut(e) {
  return e != null && "kind" in e && e.kind === "line";
}
function Vt(e) {
  return e != null && "kind" in e && e.kind === "token";
}
function $n(e) {
  return ut(e) || Vt(e);
}
function bh(e) {
  return "type" in e && e.type === "line-info";
}
function yh(e) {
  return "kind" in e && e.kind === "merge-conflict-action";
}
function vh(e) {
  return e === "current" || e === "incoming" || e === "both";
}
function Ur(e, t) {
  const n = e?.querySelector(t);
  return n instanceof HTMLElement ? n : void 0;
}
function ot(e) {
  const t = [];
  let n = e;
  for (; n != null; )
    t.push(n), n = n.parentNode;
  return t;
}
function wh(e) {
  const t = e.closest("[data-line], [data-column-number]");
  if (t instanceof HTMLElement) return t;
  const n = e.closest('[data-line-annotation], [data-gutter-buffer="annotation"]');
  if (!(n instanceof HTMLElement)) return;
  const i = n.previousElementSibling;
  return i instanceof HTMLElement && (i.hasAttribute("data-line") || i.hasAttribute("data-column-number")) ? i : void 0;
}
function Sh(e) {
  const t = e.closest('[slot^="annotation-"]'), n = (t instanceof HTMLElement && t.assignedSlot != null ? t.assignedSlot : e.tagName === "SLOT" ? e : void 0)?.closest("[data-line-annotation]");
  return n instanceof HTMLElement ? n : void 0;
}
function Ch(e) {
  const t = e.closest('[slot^="annotation-"]');
  if (t instanceof HTMLElement) return t.getAttribute("slot") ?? void 0;
  if (e instanceof HTMLElement) {
    const n = e.getAttribute("name") ?? void 0;
    return n != null && n.startsWith("annotation-") ? n : void 0;
  }
}
function xh(e) {
  if (e == null) return;
  const t = /^annotation-(?:(additions|deletions)-)?(\d+)$/.exec(e);
  if (t == null) return;
  const n = Number.parseInt(t[2], 10);
  if (!(!Number.isFinite(n) || n <= 0))
    return {
      lineNumber: n,
      side: t[1]
    };
}
function zr(e) {
  return e != null && typeof e.elementFromPoint == "function";
}
function kh(e, t) {
  return e === t || mi(e ?? void 0, t ?? void 0);
}
function Br(e, t) {
  return e?.highlightSide === t.highlightSide && e?.lineNumberOnly === t.lineNumberOnly && kh(e?.range ?? null, t.range);
}
function Gr(e, t) {
  switch (e) {
    case "change-deletion":
      return "deletions";
    case "change-addition":
      return "additions";
    default:
      return t.hasAttribute("data-deletions") ? "deletions" : "additions";
  }
}
function Wr(e) {
  const t = e.getAttribute("data-line-type");
  if (t != null)
    switch (t) {
      case "change-deletion":
      case "change-addition":
      case "context":
      case "context-expanded":
        return t;
      default:
        return;
    }
}
function he(e = "none", t, ...n) {
  switch (e) {
    case "none":
      return;
    case "both":
      break;
    case "click":
      if (t !== "click") return;
      break;
    case "move":
      if (t !== "move") return;
  }
  console.log(...n);
}
var V;
var Eh = (V = class {
  constructor() {
    p(this, "observedNodes", /* @__PURE__ */ new Map());
    p(this, "applyColumnUpdates", (t) => {
      for (const [n, i] of t) {
        const r = i.codeInlineSize != null ? Rh(i.codeInlineSize) : n.codeWidth, s = i.numberInlineSize != null ? Lh(i.numberInlineSize) : n.numberWidth, o = r !== n.codeWidth, a = s !== n.numberWidth;
        !o && !a || (n.codeWidth = r, n.numberWidth = s, n.applyColumnVariables && Ro(n, {
          codeWidthChanged: o,
          numberWidthChanged: a
        }));
      }
    });
  }
  static getResizeObserver() {
    const t = V.resizeObserver ?? new ResizeObserver(V.handleSharedResizeEntries);
    return V.resizeObserver = t, t;
  }
  static handleSharedResizeEntries(t) {
    const n = /* @__PURE__ */ new Map();
    for (const i of t) {
      const r = V.managersByElement.get(i.target);
      if (r == null) continue;
      const s = n.get(r);
      s == null ? n.set(r, [i]) : s.push(i);
    }
    for (const [i, r] of n) i.handleResizeEntries(r);
  }
  setup(t, { disableAnnotations: n, columnVariables: i = "apply" }) {
    const r = /* @__PURE__ */ new Set(), s = i === "apply";
    let o = 0;
    const a = new Map(this.observedNodes);
    this.observedNodes.clear();
    for (const l of t.children) {
      if (o === 2) break;
      const c = (() => {
        if (l instanceof HTMLElement && l.tagName === "CODE") return l;
      })();
      if (c == null) continue;
      o++;
      let u = a.get(c);
      if (u != null && u.type !== "code") throw new Error("ResizeManager.setup: somehow a code node is being used for an annotation, should be impossible");
      let d = c.firstElementChild;
      d instanceof HTMLElement || (d = null), u != null ? (this.observedNodes.set(c, u), a.delete(c), u.numberElement !== d ? (u.numberElement != null && (this.unobserve(u.numberElement), a.delete(u.numberElement)), d != null && (this.observe(d), a.delete(d), this.observedNodes.set(d, u)), u.numberElement = d, u.numberWidth = 0) : u.numberElement != null ? (a.delete(u.numberElement), this.observedNodes.set(u.numberElement, u)) : u.numberWidth = 0, _h(u, s)) : (u = {
        type: "code",
        codeElement: c,
        numberElement: d,
        codeWidth: "auto",
        numberWidth: 0,
        applyColumnVariables: s
      }, this.observedNodes.set(c, u), this.observe(c), d != null && (this.observedNodes.set(d, u), this.observe(d)));
    }
    if (o > 1 && !n) {
      const l = t.querySelectorAll('[data-line-annotation*=","]'), c = /* @__PURE__ */ new Map();
      for (const u of l) {
        if (!(u instanceof HTMLElement)) continue;
        const d = u.getAttribute("data-line-annotation") ?? "";
        if (!/^-?\d+,-?\d+$/.test(d)) {
          console.error("DiffFileRenderer.setupResizeObserver: Invalid element or annotation", {
            lineAnnotation: d,
            element: u
          });
          continue;
        }
        let h = c.get(d);
        h == null && (h = [], c.set(d, h)), h.push(u);
      }
      for (const [u, d] of c) {
        if (d.length !== 2) {
          console.error("DiffFileRenderer.setupResizeObserver: Bad Pair", u, d);
          continue;
        }
        const [h, f] = d, g = h.firstElementChild, y = f.firstElementChild;
        if (!(h instanceof HTMLElement) || !(f instanceof HTMLElement) || !(g instanceof HTMLElement) || !(y instanceof HTMLElement)) continue;
        let v = a.get(g);
        if (v != null) {
          this.observedNodes.set(g, v), this.observedNodes.set(y, v), a.delete(g), a.delete(y);
          continue;
        }
        const m = g.getBoundingClientRect().height, b = y.getBoundingClientRect().height;
        v = {
          type: "annotations",
          column1: {
            container: h,
            child: g,
            childHeight: m
          },
          column2: {
            container: f,
            child: y,
            childHeight: b
          },
          currentHeight: "auto"
        }, r.add({
          child1: g,
          child2: y,
          item: v,
          newHeight: Math.max(m, b)
        });
      }
      for (const u of r)
        this.applyNewHeight(u.item, u.newHeight), this.observedNodes.set(u.child1, u.item), this.observedNodes.set(u.child2, u.item), this.observe(u.child1), this.observe(u.child2);
      r.clear();
    }
    for (const [l, c] of a)
      this.unobserve(l), c.type === "code" ? Ah(c) : Th(c);
    a.clear();
  }
  cleanUp() {
    for (const t of this.observedNodes.keys()) this.unobserve(t);
    this.observedNodes.clear();
  }
  observe(t) {
    const { managersByElement: n } = V, i = n.get(t);
    if (i !== this) {
      if (i != null && i !== this) throw new Error("ResizeManager.observe: element is already owned by another ResizeManager");
      n.set(t, this), V.getResizeObserver().observe(t);
    }
  }
  unobserve(t) {
    const { managersByElement: n, resizeObserver: i } = V, r = n.get(t);
    if (r != null) {
      if (r !== this) throw new Error("ResizeManager.unobserve: element is owned by another ResizeManager");
      n.delete(t), i?.unobserve(t), i != null && n.size === 0 && (i.disconnect(), V.resizeObserver = void 0);
    }
  }
  handleResizeEntries(t) {
    const n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
    for (const r of t) {
      const { target: s, borderBoxSize: o, contentBoxSize: a } = r;
      if (!(s instanceof HTMLElement)) {
        console.error("ResizeManager.handleResizeEntries: Invalid element for ResizeObserver", r);
        continue;
      }
      const l = this.observedNodes.get(s);
      if (l == null) {
        console.error("ResizeManager.handleResizeEntries: Not a valid observed node", r);
        continue;
      }
      if (l.type === "annotations") {
        const c = (() => {
          if (s === l.column1.child) return l.column1;
          if (s === l.column2.child) return l.column2;
        })();
        if (c == null) {
          console.error("ResizeManager.handleResizeEntries: Couldn't find a column for", {
            item: l,
            target: s
          });
          continue;
        }
        c.childHeight = o[0].blockSize, i.add(l);
      } else if (l.type === "code") {
        const c = n.get(l) ?? {}, u = a[0].inlineSize;
        s === l.codeElement ? c.codeInlineSize = u : s === l.numberElement && (c.numberInlineSize = u), n.set(l, c);
      }
    }
    this.applyAnnotationUpdates(i), i.clear(), this.applyColumnUpdates(n), n.clear();
  }
  applyAnnotationUpdates(t) {
    for (const n of t) this.applyNewHeight(n, Math.max(n.column1.childHeight, n.column2.childHeight));
  }
  applyNewHeight(t, n) {
    n !== t.currentHeight && (t.currentHeight = Math.max(n, 0), t.column1.container.style.setProperty("--diffs-annotation-min-height", `${t.currentHeight}px`), t.column2.container.style.setProperty("--diffs-annotation-min-height", `${t.currentHeight}px`));
  }
}, p(V, "resizeObserver"), p(V, "managersByElement", /* @__PURE__ */ new Map()), V);
function Rh(e) {
  const t = Math.max(Math.floor(e), 0);
  return t === 0 ? "auto" : t;
}
function Lh(e) {
  return Math.max(Math.ceil(e), 0);
}
function _h(e, t) {
  e.applyColumnVariables !== t && (e.applyColumnVariables = t, t ? Ro(e, {
    codeWidthChanged: true,
    numberWidthChanged: true
  }) : Lo(e));
}
function Ro(e, { codeWidthChanged: t, numberWidthChanged: n }) {
  const { codeElement: i, codeWidth: r, numberWidth: s } = e;
  if (t && i.style.setProperty("--diffs-column-width", `${typeof r == "number" ? `${r}px` : "auto"}`), n && i.style.setProperty("--diffs-column-number-width", `${s === 0 ? "auto" : `${s}px`}`), t || n && r !== "auto") {
    const o = typeof r == "number" ? Math.max(r - s, 0) : 0;
    i.style.setProperty("--diffs-column-content-width", `${o > 0 ? `${o}px` : "auto"}`);
  }
}
function Lo(e) {
  e.codeElement.style.removeProperty("--diffs-column-content-width"), e.codeElement.style.removeProperty("--diffs-column-number-width"), e.codeElement.style.removeProperty("--diffs-column-width");
}
function Ah(e) {
  e.codeElement.isConnected && Lo(e);
}
function Th(e) {
  e.column1.container.isConnected && e.column1.container.style.removeProperty("--diffs-annotation-min-height"), e.column2.container.isConnected && e.column2.container.style.removeProperty("--diffs-annotation-min-height");
}
function Mh(e) {
  return be.hasResolvedThemes(e);
}
function Se(e, t) {
  return Ni(e.theme, t.theme) && e.useTokenTransformer === t.useTokenTransformer && e.tokenizeMaxLineLength === t.tokenizeMaxLineLength;
}
function _o(e, t) {
  return e == null || t == null ? e === t : e.startingLine === t.startingLine && e.totalLines === t.totalLines && e.bufferBefore === t.bufferBefore && e.bufferAfter === t.bufferAfter;
}
function jr(e) {
  return _({
    tagName: "div",
    children: [_({
      tagName: "div",
      children: e.annotations?.map((t) => _({
        tagName: "slot",
        properties: { name: t }
      })),
      properties: { "data-annotation-content": "" }
    })],
    properties: { "data-line-annotation": `${e.hunkIndex},${e.lineIndex}` }
  });
}
function Ih(e) {
  switch (e) {
    case "file":
      return "diffs-icon-file-code";
    case "change":
      return "diffs-icon-symbol-modified";
    case "new":
      return "diffs-icon-symbol-added";
    case "deleted":
      return "diffs-icon-symbol-deleted";
    case "rename-pure":
    case "rename-changed":
      return "diffs-icon-symbol-moved";
  }
}
function Nh({ fileOrDiff: e, mode: t, stickyHeader: n }) {
  const i = "type" in e ? e : void 0, r = {
    "data-diffs-header": t,
    "data-change-type": i?.type,
    "data-sticky": n ? "" : void 0
  };
  return _({
    tagName: "div",
    children: [t === "custom" ? _({
      tagName: "slot",
      properties: { name: as }
    }) : Ph({
      name: e.name,
      prevName: "prevName" in e ? e.prevName : void 0,
      iconType: i?.type ?? "file"
    }), ...t === "custom" ? [] : [Oh(i)]],
    properties: r
  });
}
function Ph({ name: e, prevName: t, iconType: n }) {
  const i = [_({
    tagName: "slot",
    properties: { name: rs }
  }), bi({
    name: Ih(n),
    properties: { "data-change-icon": n }
  })];
  return t != null && (i.push(_({
    tagName: "div",
    children: [_({
      tagName: "bdi",
      children: [Je(t)]
    })],
    properties: { "data-prev-name": "" }
  })), i.push(bi({
    name: "diffs-icon-arrow-right-short",
    properties: { "data-rename-icon": "" }
  }))), i.push(_({
    tagName: "div",
    children: [_({
      tagName: "bdi",
      children: [Je(e)]
    })],
    properties: { "data-title": "" }
  })), i.push(_({
    tagName: "slot",
    properties: { name: ss }
  })), _({
    tagName: "div",
    children: i,
    properties: { "data-header-content": "" }
  });
}
function Oh(e) {
  const t = [];
  if (e != null) {
    let n = 0, i = 0;
    for (const r of e.hunks)
      n += r.additionLines, i += r.deletionLines;
    (i > 0 || n === 0) && t.push(_({
      tagName: "span",
      children: [Je(`-${i}`)],
      properties: { "data-deletions-count": "" }
    })), (n > 0 || i === 0) && t.push(_({
      tagName: "span",
      children: [Je(`+${n}`)],
      properties: { "data-additions-count": "" }
    }));
  }
  return t.push(_({
    tagName: "slot",
    properties: { name: os }
  })), _({
    tagName: "div",
    children: t,
    properties: { "data-metadata": "" }
  });
}
function Fh(e) {
  return _({
    tagName: "pre",
    properties: Hh(e)
  });
}
function Hh({ diffIndicators: e, disableBackground: t, disableLineNumbers: n, overflow: i, split: r, totalLines: s, type: o, customProperties: a }) {
  return {
    ...a,
    "data-diff": o === "diff" ? "" : void 0,
    "data-file": o === "file" ? "" : void 0,
    "data-diff-type": o === "diff" ? r ? "split" : "single" : void 0,
    "data-overflow": i,
    "data-disable-line-numbers": n ? "" : void 0,
    "data-background": t ? void 0 : "",
    "data-indicators": e === "bars" || e === "classic" ? e : void 0,
    style: `--diffs-min-number-column-width-default:${`${s}`.length}ch;`
  };
}
var Ve = /* @__PURE__ */ new Map();
var qe = {
  "1c": "1c",
  abap: "abap",
  as: "actionscript-3",
  ada: "ada",
  adb: "ada",
  ads: "ada",
  adoc: "asciidoc",
  asciidoc: "asciidoc",
  "component.html": "angular-html",
  "component.ts": "angular-ts",
  conf: "nginx",
  htaccess: "apache",
  cls: "tex",
  trigger: "apex",
  apl: "apl",
  applescript: "applescript",
  scpt: "applescript",
  ara: "ara",
  asm: "asm",
  s: "riscv",
  astro: "astro",
  awk: "awk",
  bal: "ballerina",
  sh: "zsh",
  bash: "zsh",
  bat: "cmd",
  cmd: "cmd",
  be: "berry",
  beancount: "beancount",
  bib: "bibtex",
  bicep: "bicep",
  "blade.php": "blade",
  bsl: "bsl",
  c: "c",
  h: "objective-cpp",
  cs: "csharp",
  cpp: "cpp",
  hpp: "cpp",
  cc: "cpp",
  cxx: "cpp",
  hh: "cpp",
  cdc: "cdc",
  cairo: "cairo",
  clar: "clarity",
  clj: "clojure",
  cljs: "clojure",
  cljc: "clojure",
  soy: "soy",
  cmake: "cmake",
  "CMakeLists.txt": "cmake",
  cob: "cobol",
  cbl: "cobol",
  cobol: "cobol",
  CODEOWNERS: "codeowners",
  ql: "ql",
  coffee: "coffeescript",
  lisp: "lisp",
  cl: "lisp",
  lsp: "lisp",
  log: "log",
  v: "verilog",
  cql: "cql",
  cr: "crystal",
  css: "css",
  csv: "csv",
  cue: "cue",
  cypher: "cypher",
  cyp: "cypher",
  d: "d",
  dart: "dart",
  dax: "dax",
  desktop: "desktop",
  diff: "diff",
  patch: "diff",
  Dockerfile: "dockerfile",
  dockerfile: "dockerfile",
  env: "dotenv",
  dm: "dream-maker",
  edge: "edge",
  el: "emacs-lisp",
  ex: "elixir",
  exs: "elixir",
  elm: "elm",
  erb: "erb",
  erl: "erlang",
  hrl: "erlang",
  f: "fortran-fixed-form",
  for: "fortran-fixed-form",
  fs: "fsharp",
  fsi: "fsharp",
  fsx: "fsharp",
  f03: "f03",
  f08: "f08",
  f18: "f18",
  f77: "f77",
  f90: "fortran-free-form",
  f95: "fortran-free-form",
  fnl: "fennel",
  fish: "fish",
  ftl: "ftl",
  tres: "gdresource",
  res: "gdresource",
  gd: "gdscript",
  gdshader: "gdshader",
  gs: "genie",
  feature: "gherkin",
  COMMIT_EDITMSG: "git-commit",
  "git-rebase-todo": "git-rebase",
  gjs: "glimmer-js",
  gleam: "gleam",
  gts: "glimmer-ts",
  glsl: "glsl",
  vert: "glsl",
  frag: "glsl",
  shader: "shaderlab",
  gp: "gnuplot",
  plt: "gnuplot",
  gnuplot: "gnuplot",
  go: "go",
  graphql: "graphql",
  gql: "graphql",
  groovy: "groovy",
  gvy: "groovy",
  hack: "hack",
  haml: "haml",
  hbs: "handlebars",
  handlebars: "handlebars",
  hs: "haskell",
  lhs: "haskell",
  hx: "haxe",
  hcl: "hcl",
  hjson: "hjson",
  hlsl: "hlsl",
  fx: "hlsl",
  html: "html",
  htm: "html",
  http: "http",
  rest: "http",
  hxml: "hxml",
  hy: "hy",
  imba: "imba",
  ini: "ini",
  cfg: "ini",
  jade: "pug",
  pug: "pug",
  java: "java",
  js: "javascript",
  mjs: "javascript",
  cjs: "javascript",
  jinja: "jinja",
  jinja2: "jinja",
  j2: "jinja",
  jison: "jison",
  jl: "julia",
  json: "json",
  json5: "json5",
  jsonc: "jsonc",
  jsonl: "jsonl",
  jsonnet: "jsonnet",
  libsonnet: "jsonnet",
  jssm: "jssm",
  jsx: "jsx",
  kt: "kotlin",
  kts: "kts",
  kql: "kusto",
  tex: "tex",
  ltx: "tex",
  lean: "lean4",
  less: "less",
  liquid: "liquid",
  lit: "lit",
  ll: "llvm",
  logo: "logo",
  lua: "lua",
  luau: "luau",
  Makefile: "makefile",
  mk: "makefile",
  makefile: "makefile",
  md: "markdown",
  markdown: "markdown",
  marko: "marko",
  m: "wolfram",
  mat: "matlab",
  mdc: "mdc",
  mdx: "mdx",
  wiki: "wikitext",
  mediawiki: "wikitext",
  mmd: "mermaid",
  mermaid: "mermaid",
  mips: "mipsasm",
  mojo: "mojo",
  "\u{1F525}": "mojo",
  move: "move",
  nar: "narrat",
  nf: "nextflow",
  nim: "nim",
  nims: "nim",
  nimble: "nim",
  nix: "nix",
  nu: "nushell",
  mm: "objective-cpp",
  ml: "ocaml",
  mli: "ocaml",
  mll: "ocaml",
  mly: "ocaml",
  odin: "odin",
  pas: "pascal",
  p: "pascal",
  pl: "prolog",
  pm: "perl",
  t: "perl",
  raku: "raku",
  p6: "raku",
  pl6: "raku",
  php: "php",
  phtml: "php",
  pls: "plsql",
  sql: "sql",
  po: "po",
  polar: "polar",
  pcss: "postcss",
  pot: "pot",
  potx: "potx",
  pq: "powerquery",
  pqm: "powerquery",
  ps1: "powershell",
  psm1: "powershell",
  psd1: "powershell",
  prisma: "prisma",
  pro: "prolog",
  P: "prolog",
  properties: "properties",
  proto: "protobuf",
  pp: "puppet",
  purs: "purescript",
  py: "python",
  pyw: "python",
  pyi: "python",
  BUCK: "python",
  BUILD: "python",
  PACKAGE: "python",
  WORKSPACE: "python",
  Tiltfile: "python",
  bazel: "python",
  bxl: "python",
  bzl: "python",
  bzlmod: "python",
  star: "python",
  sky: "python",
  qml: "qml",
  qmldir: "qmldir",
  qss: "qss",
  r: "r",
  R: "r",
  rkt: "racket",
  rktl: "racket",
  razor: "razor",
  cshtml: "razor",
  rb: "ruby",
  rbw: "ruby",
  reg: "reg",
  regex: "regexp",
  rel: "rel",
  rs: "rust",
  rst: "rst",
  rake: "ruby",
  gemspec: "ruby",
  jbuilder: "ruby",
  builder: "ruby",
  rabl: "ruby",
  arb: "ruby",
  ru: "ruby",
  podspec: "ruby",
  Gemfile: "ruby",
  Rakefile: "ruby",
  Guardfile: "ruby",
  Capfile: "ruby",
  Berksfile: "ruby",
  Brewfile: "ruby",
  Vagrantfile: "ruby",
  Thorfile: "ruby",
  Appraisals: "ruby",
  Dangerfile: "ruby",
  sas: "sas",
  sass: "sass",
  scala: "scala",
  sc: "scala",
  scm: "scheme",
  ss: "scheme",
  sld: "scheme",
  scss: "scss",
  sdbl: "sdbl",
  shadergraph: "shader",
  st: "smalltalk",
  sol: "solidity",
  sparql: "sparql",
  rq: "sparql",
  spl: "splunk",
  config: "ssh-config",
  do: "stata",
  ado: "stata",
  dta: "stata",
  styl: "stylus",
  stylus: "stylus",
  svelte: "svelte",
  swift: "swift",
  sv: "system-verilog",
  svh: "system-verilog",
  service: "systemd",
  socket: "systemd",
  device: "systemd",
  timer: "systemd",
  talon: "talonscript",
  tasl: "tasl",
  tcl: "tcl",
  templ: "templ",
  tf: "tf",
  tfvars: "tfvars",
  toml: "toml",
  ts: "typescript",
  mts: "typescript",
  cts: "typescript",
  tsp: "typespec",
  tsv: "tsv",
  tsx: "tsx",
  ttl: "turtle",
  twig: "twig",
  typ: "typst",
  vv: "v",
  vala: "vala",
  vapi: "vala",
  vb: "vb",
  vbs: "vb",
  bas: "vb",
  vh: "verilog",
  vhd: "vhdl",
  vhdl: "vhdl",
  vim: "vimscript",
  vue: "vue",
  "vine.ts": "vue-vine",
  vy: "vyper",
  wasm: "wasm",
  wat: "wasm",
  wy: "\u6587\u8A00",
  wgsl: "wgsl",
  wit: "wit",
  wl: "wolfram",
  nb: "wolfram",
  xml: "xml",
  xsl: "xsl",
  xslt: "xsl",
  yaml: "yaml",
  yml: "yml",
  zs: "zenscript",
  zig: "zig",
  zsh: "zsh",
  sty: "tex"
};
function Ue(e) {
  const t = Vr(e);
  if (t != null) return t;
  const n = e.split(/[/\\]/).pop() ?? e;
  return n === e ? "text" : Vr(n) ?? "text";
}
function Vr(e) {
  if (Ve.has(e)) return Ve.get(e) ?? "text";
  if (Object.hasOwn(qe, e)) return qe[e] ?? null;
  const t = e.match(/\.([^/\\]+\.[^/\\]+)$/);
  if (t != null) {
    if (Ve.has(t[1])) return Ve.get(t[1]) ?? "text";
    if (Object.hasOwn(qe, t[1])) return qe[t[1]] ?? "text";
  }
  const n = e.match(/\.([^.]+)$/)?.[1] ?? "";
  return Ve.has(n) ? Ve.get(n) ?? "text" : Object.hasOwn(qe, n) ? qe[n] ?? "text" : null;
}
function $h(e, { theme: t, preferredHighlighter: n = "shiki-js" }) {
  return {
    langs: Array.isArray(e) ? e : [e ?? "text"],
    themes: vn(t),
    preferredHighlighter: n
  };
}
function dt(e) {
  return `annotation-${"side" in e ? `${e.side}-` : ""}${e.lineNumber}`;
}
function Dh(e) {
  return e.startingLine === 0 && e.totalLines === 1 / 0 && e.bufferBefore === 0 && e.bufferAfter === 0;
}
function Uh(e, t, n) {
  const i = typeof n.lineInfo == "function" ? n.lineInfo(t) : n.lineInfo[t - 1];
  if (i == null) {
    const r = `processLine: line ${t}, contains no state.lineInfo`;
    throw console.error(r, {
      node: e,
      line: t,
      state: n
    }), new Error(r);
  }
  return e.tagName = "div", e.properties["data-line"] = i.lineNumber, e.properties["data-alt-line"] = i.altLineNumber, e.properties["data-line-type"] = i.type, e.properties["data-line-index"] = i.lineIndex, e.children.length === 0 && e.children.push(Je(`
`)), e;
}
var Ft = Symbol("no-token");
var Dn = Symbol("multiple-tokens");
function Ao(e) {
  const t = zh(e);
  if (t != null) return t;
  let n = Ft;
  const i = [];
  let r = [], s;
  const o = () => {
    if (r.length === 0 || s == null) {
      r = [], s = void 0;
      return;
    }
    if (r.length === 1) {
      const l = r[0];
      if (l?.type === "element") {
        Bh(l, s);
        for (const c of l.children) qt(c);
      } else qt(l);
      i.push(l), r = [], s = void 0;
      return;
    }
    for (const l of r) qt(l);
    i.push(_({
      tagName: "span",
      properties: { "data-char": s },
      children: r
    })), r = [], s = void 0;
  }, a = (l) => {
    if (l !== Ft) {
      if (l === Dn) {
        n = Dn;
        return;
      }
      if (n === Ft) {
        n = l;
        return;
      }
      n !== l && (n = Dn);
    }
  };
  for (const l of e.children) {
    const c = l.type === "element" ? Ao(l) : Ft;
    if (a(c), typeof c != "number") {
      o(), i.push(l);
      continue;
    }
    s != null && s !== c && o(), s ??= c, r.push(l);
  }
  return o(), e.children = i, n;
}
function zh(e) {
  const t = e.properties["data-char"];
  if (typeof t == "number") return t;
}
function qt(e) {
  if (e.type === "element") {
    e.properties["data-char"] = void 0;
    for (const t of e.children) qt(t);
  }
}
function Bh(e, t) {
  e.properties["data-char"] = t;
}
function Gh(e = {}) {
  const { classPrefix: t = "__shiki_", classSuffix: n = "", classReplacer: i = (a) => a } = e, r = /* @__PURE__ */ new Map();
  function s(a) {
    return Object.entries(a).map(([l, c]) => `${l}:${c}`).join(";");
  }
  function o(a) {
    const l = typeof a == "string" ? a : s(a);
    let c = t + Wh(l) + n;
    return c = i(c), r.has(c) || r.set(c, typeof a == "string" ? a : { ...a }), c;
  }
  return {
    name: "@shikijs/transformers:style-to-class",
    pre(a) {
      if (!a.properties.style) return;
      const l = o(a.properties.style);
      delete a.properties.style, this.addClassToHast(a, l);
    },
    tokens(a) {
      for (const l of a) for (const c of l) {
        if (!c.htmlStyle) continue;
        const u = o(c.htmlStyle);
        c.htmlStyle = {}, c.htmlAttrs ||= {}, c.htmlAttrs.class ? c.htmlAttrs.class += ` ${u}` : c.htmlAttrs.class = u;
      }
    },
    getClassRegistry() {
      return r;
    },
    getCSS() {
      let a = "";
      for (const [l, c] of r.entries()) a += `.${l}{${typeof c == "string" ? c : s(c)}}`;
      return a;
    },
    clearRegistry() {
      r.clear();
    }
  };
}
function Wh(e, t = 0) {
  let n = 3735928559 ^ t, i = 1103547991 ^ t;
  for (let r = 0, s; r < e.length; r++)
    s = e.charCodeAt(r), n = Math.imul(n ^ s, 2654435761), i = Math.imul(i ^ s, 1597334677);
  return n = Math.imul(n ^ n >>> 16, 2246822507), n ^= Math.imul(i ^ i >>> 13, 3266489909), i = Math.imul(i ^ i >>> 16, 2246822507), i ^= Math.imul(n ^ n >>> 13, 3266489909), (4294967296 * (2097151 & i) + (n >>> 0)).toString(36).slice(0, 6);
}
function jh(e = false, t = false) {
  const n = { lineInfo: [] }, i = [{
    line(r) {
      return delete r.properties.class, r;
    },
    pre(r) {
      const s = dh(r), o = [];
      if (s != null) {
        let a = 1;
        for (const l of s.children)
          l.type === "element" && (e && Ao(l), o.push(Uh(l, a, n)), a++);
        s.children = o;
      }
      return r;
    },
    ...e ? {
      tokens(r) {
        for (const s of r) {
          let o = 0;
          for (const a of s) {
            const l = a;
            l.__lineChar ??= o, o += a.content.length;
          }
        }
      },
      preprocess(r, s) {
        s.mergeWhitespaces = "never";
      },
      span(r, s, o, a, l) {
        if (l?.offset != null && l.content != null) {
          const c = l.__lineChar;
          return c != null && (r.properties["data-char"] = c), r;
        }
        return r;
      }
    } : null
  }];
  return t && i.push(Vh, qr), e && i.push({ line: (r) => (r.type === "element" && r.children.length === 0 && r.children.push({
    type: "element",
    tagName: "br",
    properties: {},
    children: []
  }), r) }), {
    state: n,
    transformers: i,
    toClass: qr
  };
}
var qr = Gh({ classPrefix: "hl-" });
var Vh = {
  name: "token-style-normalizer",
  tokens(e) {
    for (const t of e) for (const n of t) {
      if (n.htmlStyle != null) continue;
      const i = {};
      n.color != null && (i.color = n.color), n.bgColor != null && (i["background-color"] = n.bgColor), n.fontStyle != null && n.fontStyle !== 0 && (n.fontStyle & 1 && (i["font-style"] = "italic"), n.fontStyle & 2 && (i["font-weight"] = "bold"), n.fontStyle & 4 && (i["text-decoration"] = "underline")), Object.keys(i).length > 0 && (n.htmlStyle = i);
    }
  }
};
function ie(e) {
  return `--${e === "token" ? "diffs-token" : "diffs"}-`;
}
var qh = /^#(?:[0-9a-f]{3}0|[0-9a-f]{6}00)$/i;
var Kh = /^0(?:\.0+)?%?$/;
function Xh(e) {
  const t = e.indexOf("(");
  if (t <= 0 || !e.endsWith(")")) return;
  const n = e.slice(0, t).trim();
  if (!/^(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color)$/i.test(n)) return;
  const i = e.slice(t + 1, -1).trim();
  if (i.length === 0) return;
  const r = i.lastIndexOf("/");
  if (r !== -1) return i.slice(r + 1).trim();
  if (/^(?:rgba|hsla)$/i.test(n)) {
    const s = i.split(",");
    if (s.length === 4) return s[3]?.trim();
  }
}
function Yh(e) {
  const t = /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})\b/i.exec(e.trim());
  if (t == null) return null;
  const n = t[1];
  let i, r = 1;
  return n.length === 3 ? i = n.split("").map((s) => s + s).join("") : n.length === 6 ? i = n : (i = n.slice(0, 6), r = parseInt(n.slice(6, 8), 16) / 255), [
    parseInt(i.slice(0, 2), 16),
    parseInt(i.slice(2, 4), 16),
    parseInt(i.slice(4, 6), 16),
    r
  ];
}
function Un(e) {
  if (e == null) return null;
  const t = Yh(e);
  if (t == null) return null;
  const n = t[0] / 255, i = t[1] / 255, r = t[2] / 255, s = (o) => o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4;
  return 0.2126 * s(n) + 0.7152 * s(i) + 0.0722 * s(r);
}
function Kr(e) {
  if (e == null) return false;
  const t = e.trim().toLowerCase();
  if (t === "transparent" || qh.test(t)) return true;
  const n = Xh(t);
  return n != null && Kh.test(n);
}
function Qh(e, t, n) {
  if (t == null || n == null) return false;
  const i = Un(e), r = Un(t), s = Un(n);
  return i == null || r == null || s == null ? false : Math.abs(i - s) < Math.abs(i - r);
}
var Xr = /* @__PURE__ */ new WeakMap();
function zn(e) {
  const t = Xr.get(e);
  if (t != null) return t;
  const n = e.colors ?? {}, i = { ...n }, r = n["editor.background"] ?? e.bg, s = n["editor.foreground"] ?? e.fg, o = n["sideBar.background"] ?? r, a = n["sideBar.foreground"] ?? s;
  oe(i, "editor.background", r), oe(i, "editor.foreground", s), oe(i, "sideBar.background", o), oe(i, "sideBar.foreground", a), oe(i, "input.background", n["input.background"] ?? o), oe(i, "sideBarSectionHeader.foreground", n["sideBarSectionHeader.foreground"] ?? a), oe(i, "list.activeSelectionForeground", n["list.activeSelectionForeground"] ?? a), oe(i, "gitDecoration.addedResourceForeground", Bn(n["gitDecoration.addedResourceForeground"], n["terminal.ansiGreen"], n["editorGutter.addedBackground"])), oe(i, "gitDecoration.modifiedResourceForeground", Bn(n["gitDecoration.modifiedResourceForeground"], n["terminal.ansiBlue"], n["editorGutter.modifiedBackground"])), oe(i, "gitDecoration.deletedResourceForeground", Bn(n["gitDecoration.deletedResourceForeground"], n["terminal.ansiRed"], n["editorGutter.deletedBackground"]));
  const l = (Kr(n["list.focusOutline"]) ? void 0 : n["list.focusOutline"]) ?? (Kr(n.focusBorder) ? void 0 : n.focusBorder);
  l != null ? i["list.focusOutline"] = l : delete i["list.focusOutline"];
  const c = n["list.hoverBackground"];
  c != null && (Zh(c, o) || Qh(c, o, a)) && delete i["list.hoverBackground"];
  const u = Object.freeze({
    ...e,
    colors: Object.freeze(i)
  });
  return Xr.set(e, u), u;
}
function oe(e, t, n) {
  n != null && n !== "" && (e[t] = n);
}
function Bn(...e) {
  for (const t of e) if (t != null && t !== "") return t;
}
function Zh(e, t) {
  return t != null && e.toLowerCase() === t.toLowerCase();
}
function Jh({ theme: e = me, highlighter: t, prefix: n }) {
  let i = "";
  if (typeof e == "string") {
    const r = t.getTheme(e), s = zn(r);
    i += `color:${s.fg};`, i += `background-color:${s.bg};`, i += `${ie("global")}fg:${s.fg};`, i += `${ie("global")}bg:${s.bg};`, i += Gn(r, n);
  } else {
    let r = t.getTheme(e.dark), s = zn(r);
    i += `${ie("global")}dark:${s.fg};`, i += `${ie("global")}dark-bg:${s.bg};`, i += Gn(r, "dark"), r = t.getTheme(e.light), s = zn(r), i += `${ie("global")}light:${s.fg};`, i += `${ie("global")}light-bg:${s.bg};`, i += Gn(r, "light");
  }
  return i;
}
function Gn(e, t) {
  t = t != null ? `${t}-` : "";
  let n = "";
  const i = e.colors?.["gitDecoration.addedResourceForeground"] ?? e.colors?.["terminal.ansiGreen"];
  i != null && (n += `${ie("global")}${t}addition-color:${i};`);
  const r = e.colors?.["gitDecoration.deletedResourceForeground"] ?? e.colors?.["terminal.ansiRed"];
  r != null && (n += `${ie("global")}${t}deletion-color:${r};`);
  const s = e.colors?.["gitDecoration.modifiedResourceForeground"] ?? e.colors?.["terminal.ansiBlue"];
  return s != null && (n += `${ie("global")}${t}modified-color:${s};`), n;
}
function ef(e) {
  let t = e.children[0];
  for (; t != null; ) {
    if (t.type === "element" && t.tagName === "code") return t.children;
    "children" in t ? t = t.children[0] : t = null;
  }
  throw console.error(e), new Error("getLineNodes: Unable to find children");
}
var Yr = 10;
var Qr = 13;
var tf = 4;
var nf = 40;
function rf(e) {
  const t = [0];
  let n = e.indexOf("\r"), i = e.indexOf(`
`), r = 0, s = 0;
  for (; n !== -1 || i !== -1; ) {
    let o;
    if (n !== -1 && (i === -1 || n < i) ? i === n + 1 ? (o = i + 1, n = e.indexOf("\r", o), i = e.indexOf(`
`, o)) : (o = n + 1, n = e.indexOf("\r", o)) : (o = i + 1, i = e.indexOf(`
`, o)), t.push(o), ++s === tf) {
      if (o - r <= nf) {
        for (let a = o; a < e.length; a++) {
          const l = e.charCodeAt(a);
          (l === Yr || l === Qr) && (l === Qr && a + 1 < e.length && e.charCodeAt(a + 1) === Yr && a++, t.push(a + 1));
        }
        return t;
      }
      r = o, s = 0;
    }
  }
  return t;
}
function ht(e) {
  const t = rf(e);
  return Array.from({ length: t.length }, (n, i) => {
    const r = t[i], s = t[i + 1] ?? e.length;
    return e.slice(r, s);
  });
}
function sf(e, t) {
  for (const n of t) e.push(n);
}
var of = { forcePlainText: false };
function af(e, t, { theme: n, tokenizeMaxLineLength: i, useTokenTransformer: r }, { forcePlainText: s, startingLine: o, totalLines: a, lines: l } = of) {
  s ? (o ??= 0, a ??= 1 / 0) : (o = 0, a = 1 / 0);
  const c = o > 0 || a < 1 / 0, { state: u, transformers: d } = jh(r), h = s ? "text" : e.lang ?? Ue(e.name), f = typeof n == "string" ? t.getTheme(n).type : void 0, g = Jh({
    theme: n,
    highlighter: t
  });
  u.lineInfo = (b) => ({
    type: "context",
    lineIndex: b - 1 + o,
    lineNumber: b + o
  });
  const y = typeof n == "string" ? {
    lang: h,
    theme: n,
    transformers: d,
    defaultColor: false,
    cssVariablePrefix: ie("token"),
    tokenizeMaxLineLength: i,
    tokenizeTimeLimit: 0
  } : {
    lang: h,
    themes: n,
    transformers: d,
    defaultColor: false,
    cssVariablePrefix: ie("token"),
    tokenizeMaxLineLength: i,
    tokenizeTimeLimit: 0
  }, v = ef(t.codeToHast(lf(c ? cf(l ?? ht(e.contents), o, a) : e.contents), y)), m = c ? new Array(o) : v;
  return c && sf(m, v), {
    code: m,
    themeStyles: g,
    baseThemeType: f
  };
}
function lf(e) {
  return e.replace(/\r(?!\n)/g, `
`);
}
function cf(e, t, n) {
  if (e.length === 0) return "";
  const i = Math.min(t + n, e.length);
  return e.slice(t, i).join("");
}
function O(e, t) {
  return e?.cacheKey != null || t?.cacheKey != null ? e?.cacheKey === t?.cacheKey : e?.contents === t?.contents && e?.name === t?.name && e?.lang === t?.lang;
}
var uf = "-1,-1";
function df(e) {
  return e?.some((t) => t.lineNumber === 0) ?? false;
}
function hf(e) {
  const t = e[0];
  return t != null && t.length > 0 ? t : void 0;
}
function To(e) {
  return e.startingLine === 0 && e.totalLines > 0;
}
function ff(e, t) {
  return e.endsWith(`\r
`) ? t + `\r
` : e.endsWith("\r") ? t + "\r" : e.endsWith(`
`) ? t + `
` : t;
}
function pf(e, t) {
  return _({
    tagName: "div",
    children: e,
    properties: {
      "data-content": "",
      style: `grid-row: span ${t}`
    }
  });
}
function Kt(e) {
  return (e.lang ?? Ue(e.name)) === "text";
}
function Ht(e, t) {
  return t.cacheKey == null ? e.file === t && e.sourceContents === t.contents : e.cacheKey === t.cacheKey;
}
var gf = -1;
var mf = class {
  constructor(e = { theme: me }, t = dt, n, i) {
    p(this, "options");
    p(this, "annotationSlotName");
    p(this, "onRenderUpdate");
    p(this, "workerManager");
    p(this, "__id", `file-renderer:${++gf}`);
    p(this, "highlighter");
    p(this, "file");
    p(this, "renderCache");
    p(this, "pendingHighlightResult");
    p(this, "computedLang", "text");
    p(this, "lineAnnotations", {});
    p(this, "lineCache");
    p(this, "pendingStructuralRows");
    p(this, "textDocumentCache", /* @__PURE__ */ new WeakMap());
    p(this, "editSessionActive", false);
    this.options = e, this.annotationSlotName = t, this.onRenderUpdate = n, this.workerManager = i, i?.isWorkingPool() !== true && (this.highlighter = ct(e.theme ?? me) ? fi() : void 0);
  }
  get fileCache() {
    return this.renderCache?.file;
  }
  setOptions(e) {
    this.options = e;
  }
  mergeOptions(e) {
    this.options = {
      ...this.options,
      ...e
    };
  }
  setLineAnnotations(e) {
    this.lineAnnotations = {};
    for (const t of e) {
      const n = this.lineAnnotations[t.lineNumber] ?? [];
      this.lineAnnotations[t.lineNumber] = n, n.push(t);
    }
  }
  cleanUp() {
    this.endEditSession(), this.recycle(), this.workerManager = void 0, this.onRenderUpdate = void 0;
  }
  /**
  * Enter edit-session mode: rendering happens locally with the token
  * transformer forced on, and worker-pool requests/results are suspended
  * for this renderer. Called on initial editor association and whenever its
  * rendering resumes after recycle.
  */
  beginEditSession(e, t) {
    const { editSessionActive: n, renderCache: i } = this;
    if (this.editSessionActive = true, n || (this.pendingHighlightResult = void 0), this.file = e, i == null || n && i.file === e) return;
    if (n) {
      this.clearRenderCache(), this.lineCache = void 0, this.textDocumentCache = /* @__PURE__ */ new WeakMap();
      return;
    }
    const { options: r } = this.getRenderOptions(e), s = i.file === e, o = t != null && O(i.file, t), { result: a } = i;
    if (!i.highlighted || a == null || !Se(i.options, r) || !s && !o) {
      this.clearRenderCache(), this.lineCache = void 0, this.textDocumentCache = /* @__PURE__ */ new WeakMap();
      return;
    }
    if (s) return;
    this.renderCache = {
      ...i,
      file: e,
      result: {
        ...a,
        code: [...a.code]
      }
    };
    const { lineCache: l } = this;
    l != null && t != null && Ht(l, t) ? this.lineCache = {
      cacheKey: void 0,
      file: e,
      sourceContents: e.contents,
      lines: l.lines
    } : this.lineCache = void 0;
  }
  /**
  * Leave edit-session mode. Rendering returns to the pool when one works.
  * When `settledFile` has the content the cache already shows, the cache
  * adopts it as its identity so the next render treats it as current
  * instead of a new file.
  */
  endEditSession(e) {
    if (this.editSessionActive = false, this.pendingHighlightResult = void 0, this.file == null) {
      this.clearRenderCache(), this.lineCache = void 0, this.textDocumentCache = /* @__PURE__ */ new WeakMap();
      return;
    }
    const { renderCache: t } = this;
    e == null || t == null || t.file === e || !O(t.file, e) || (t.file = e);
  }
  /**
  * Ensures that the DOM is compatible with editor render updates
  */
  editorRenderReady() {
    return this.renderCache?.options.useTokenTransformer === true && this.renderCache.highlighted && this.renderCache.result != null;
  }
  recycle() {
    this.editSessionActive ? (this.renderCache != null && (this.renderCache.renderRange = void 0), this.pendingHighlightResult = void 0, this.pendingStructuralRows = void 0) : (this.clearRenderCache(), this.lineCache = void 0, this.textDocumentCache = /* @__PURE__ */ new WeakMap()), this.highlighter = void 0, this.workerManager?.cleanUpTasks(this), this.file = void 0;
  }
  clearRenderCache() {
    this.pendingStructuralRows = void 0, this.renderCache = void 0, this.pendingHighlightResult = void 0;
  }
  hydrate(e) {
    this.file = e;
    const { options: t } = this.getRenderOptions(e), n = $t(this.getOrCreateLineCache(e).length, this.getTokenizeMaxLength());
    let i = this.workerManager?.getFileResultCache(e);
    i != null && !Se(t, i.options) && (i = void 0), this.renderCache ??= {
      file: e,
      hydrated: true,
      options: t,
      highlighted: !n && !Kt(e),
      result: n ? void 0 : i?.result,
      renderRange: void 0
    }, !this.editSessionActive && this.workerManager?.isWorkingPool() === true ? this.renderCache.result == null && !n && this.workerManager.highlightFileAST(this, e) : this.highlighter == null && (this.computedLang = e.lang ?? Ue(e.name), this.initializeHighlighter());
  }
  getLocalHighlightTheme() {
    return this.workerManager?.getFileRenderOptions().theme ?? this.options.theme ?? me;
  }
  getEffectiveCodeOptions() {
    const e = this.workerManager?.isWorkingPool() === true ? this.workerManager.getFileRenderOptions() : void 0;
    return {
      theme: this.getLocalHighlightTheme(),
      tokenizeMaxLineLength: e?.tokenizeMaxLineLength ?? this.options.tokenizeMaxLineLength
    };
  }
  getRenderOptions(e) {
    const t = (() => {
      if (this.workerManager?.isWorkingPool() === true) {
        const r = this.workerManager.getFileRenderOptions();
        return this.editSessionActive && r.useTokenTransformer !== true ? {
          ...r,
          useTokenTransformer: true
        } : r;
      }
      const { tokenizeMaxLineLength: i = 1e3 } = this.options;
      return {
        theme: this.getLocalHighlightTheme(),
        useTokenTransformer: this.editSessionActive || this.options.useTokenTransformer === true,
        tokenizeMaxLineLength: i
      };
    })(), { renderCache: n } = this;
    return n?.result == null ? {
      options: t,
      forceHighlight: true
    } : !O(e, n.file) || !Se(t, n.options) ? {
      options: t,
      forceHighlight: true
    } : {
      options: t,
      forceHighlight: false
    };
  }
  /**
  * Returns the file that the next synchronous render can commit without
  * changing the current render cache. Virtualized layouts use this to stay
  * aligned with the DOM while a replacement highlight is still pending.
  */
  getFileForNextRender(e) {
    const { options: t } = this.getRenderOptions(e);
    if (this.getReadyRenderResult(e, t) != null) return e;
    const { renderCache: n } = this;
    if (n == null) return e;
    if (O(n.file, e)) return n.file;
    const i = ht(e.contents), r = e.contents.length === 0 || Kt(e) || $t(i.length, this.getTokenizeMaxLength());
    return this.canRenderFile(e, t, r) ? e : n.file;
  }
  canRenderFile(e, t, n) {
    const { renderCache: i } = this;
    return i == null || O(i.file, e) ? true : n ? i.result == null && i.hydrated !== true || this.workerManager?.isWorkingPool() === true || this.highlighter != null && ct(t.theme) : i.result == null && i.hydrated !== true ? true : !this.editSessionActive && this.workerManager?.isWorkingPool() === true ? !i.highlighted : this.highlighter != null && ct(t.theme);
  }
  getOrCreateLineCache(e) {
    let { lineCache: t } = this;
    return (t == null || !Ht(t, e)) && (t = {
      cacheKey: e.cacheKey,
      file: e,
      sourceContents: e.contents,
      lines: ht(e.contents)
    }), this.lineCache = t, t.lines;
  }
  getLineCount(e) {
    const t = this.getOrCreateLineCache(e);
    return this.textDocumentCache.get(e)?.lineCount ?? t.length;
  }
  updateRenderCache(e, t, n = false) {
    this.pendingStructuralRows = void 0;
    const { renderCache: i } = this;
    if (i == null) return;
    const { file: r, result: s } = i;
    if (s == null) return;
    const o = n ? /* @__PURE__ */ new Map() : void 0;
    this.pendingStructuralRows = o;
    const a = this.lineCache != null && Ht(this.lineCache, r) ? this.lineCache : void 0;
    for (const [l, c] of e) {
      if (o == null && a != null && l < a.lines.length) {
        const d = c.map((h) => h[2]).join("");
        a.lines[l] = ff(a.lines[l] ?? "", d);
      }
      const u = {
        type: "element",
        tagName: "div",
        properties: {
          "data-line": l + 1,
          "data-line-type": "context",
          "data-line-index": l
        },
        children: c.map(([d, h, f]) => d === 0 && h === "" ? f === "" ? {
          type: "element",
          tagName: "br",
          properties: {},
          children: []
        } : {
          type: "text",
          value: f
        } : {
          type: "element",
          tagName: "span",
          properties: {
            "data-char": d,
            style: `color:${h};`
          },
          children: [{
            type: "text",
            value: f
          }]
        })
      };
      o != null ? o.set(l, u) : s.code[l] = u;
    }
    s.baseThemeType = t, i.isDirty = true, o == null && a != null && (r.contents = a.lines.join(""), a.sourceContents = r.contents);
  }
  applyDocumentChange(e) {
    const { pendingStructuralRows: t, renderCache: n } = this;
    this.pendingStructuralRows = void 0;
    const i = this.file ?? n?.file;
    if (i == null) return;
    const r = n?.result, s = this.lineCache != null && Ht(this.lineCache, i) ? this.lineCache.lines : ht(i.contents), o = ht(e.getText());
    if (r != null && s.length !== o.length) {
      const l = Math.min(s.length, o.length);
      let c = 0;
      for (; c < l && s[c] === o[c]; ) c++;
      let u = 0;
      for (; u < l - c && s[s.length - 1 - u] === o[o.length - 1 - u]; ) u++;
      const d = r.code;
      r.code = new Array(o.length);
      for (let h = 0; h < c; h++) r.code[h] = d[h];
      for (let h = 0; h < u; h++) r.code[o.length - 1 - h] = d[s.length - 1 - h];
      if (t !== void 0)
        for (const [h, f] of t) h < o.length && (r.code[h] = f);
      for (let h = c; h < o.length - u; h++) r.code[h] ??= {
        type: "element",
        tagName: "div",
        properties: {
          "data-line": h + 1,
          "data-line-type": "context",
          "data-line-index": h
        },
        children: [{
          type: "element",
          tagName: "span",
          properties: { "data-char": 0 },
          children: [{
            type: "text",
            value: e.getLineText(h)
          }]
        }]
      };
      for (let h = 0; h < r.code.length; h++) {
        const f = r.code[h];
        f?.type === "element" && (f.properties["data-line"] = h + 1, f.properties["data-line-index"] = h);
      }
      n != null && (n.isDirty = true);
    }
    const a = e.getText();
    this.lineCache = {
      cacheKey: i.cacheKey,
      file: i,
      sourceContents: a,
      lines: o
    }, this.textDocumentCache.set(i, e), i.contents = a;
  }
  renderFile(e = this.file, t = Bi) {
    if (this.file = e, e == null) {
      this.pendingHighlightResult = void 0;
      return;
    }
    let { options: n, forceHighlight: i } = this.getRenderOptions(e);
    const r = this.getReadyRenderResult(e, n);
    this.pendingHighlightResult = void 0, r != null && (this.renderCache = {
      ...r,
      file: e,
      renderRange: void 0
    }, i = false), this.renderCache ??= {
      file: e,
      highlighted: false,
      options: n,
      result: void 0,
      renderRange: void 0
    };
    const s = this.getOrCreateLineCache(e), o = e.contents.length > 0, a = !o || Kt(e) || $t(s.length, this.getTokenizeMaxLength()), l = this.canRenderFile(e, n, a), c = !O(e, this.renderCache.file), u = !_o(this.renderCache.renderRange, t);
    if (!this.editSessionActive && this.workerManager?.isWorkingPool() === true) {
      const d = this.renderCache.result == null && this.renderCache.highlighted && !a && !c && Dh(t);
      l && !d && (a || this.renderCache.result == null || !this.renderCache.highlighted && (c || u)) && (this.renderCache.file = e, this.renderCache.options = n, this.renderCache.highlighted = false, (this.renderCache.result == null || c || u || i) && (this.renderCache.result = this.workerManager.getPlainFileAST(e, t.startingLine, t.totalLines, s)), this.renderCache.renderRange = t), !a && o && (!this.renderCache.highlighted || i) && this.workerManager.highlightFileAST(this, e);
    } else {
      this.computedLang = e.lang ?? Ue(e.name), this.highlighter ??= fi();
      const d = this.highlighter != null && ct(n.theme), h = this.highlighter != null && qn(this.computedLang), f = !a && h;
      if (l && this.highlighter != null && d && (i || a || !this.renderCache.highlighted && f || this.renderCache.result == null)) {
        const { result: g, options: y } = this.renderFileWithHighlighter(e, this.highlighter, a || !h);
        this.renderCache = {
          file: e,
          options: y,
          highlighted: f,
          result: g,
          renderRange: void 0
        };
      }
      (!d || !a && !h) && this.asyncHighlight(e).then(({ result: g, options: y }) => {
        this.applyHighlightResult(e, g, y, !a);
      });
    }
    return this.renderCache.result != null ? this.processFileResult(this.renderCache.file, t, this.renderCache.result) : void 0;
  }
  async asyncRender(e, t = Bi) {
    this.file = e;
    const { result: n } = await this.asyncHighlight(e);
    return this.processFileResult(e, t, n);
  }
  async asyncHighlight(e) {
    const t = $t(this.getOrCreateLineCache(e).length, this.getTokenizeMaxLength());
    this.computedLang = t ? "text" : e.lang ?? Ue(e.name);
    const n = this.highlighter != null && Mh(vn(this.getLocalHighlightTheme())), i = t || this.highlighter != null && qn(this.computedLang);
    return (this.highlighter == null || !n || !i) && (this.highlighter = await this.initializeHighlighter()), this.renderFileWithHighlighter(e, this.highlighter, t);
  }
  renderFileWithHighlighter(e, t, n = false) {
    const { options: i } = this.getRenderOptions(e);
    return {
      result: af(e, t, i, { forcePlainText: n }),
      options: i
    };
  }
  processFileResult(e, t, { code: n, themeStyles: i, baseThemeType: r }) {
    const s = this.getLineCount(e), { disableFileHeader: o = false } = this.options, a = [], l = Hr(), c = Math.min(t.startingLine + t.totalLines, s);
    let u = 0;
    const d = To(t) ? hf(this.lineAnnotations) : void 0;
    d != null && (l.children.push($r("context", "annotation", 1)), a.push(jr({
      hunkIndex: -1,
      lineIndex: -1,
      annotations: d.map((h) => this.annotationSlotName(h))
    })), u++);
    for (let h = t.startingLine; h < c; h++) {
      const f = h + 1, g = n[h];
      if (g == null) {
        const v = "FileRenderer.processFileResult: Line doesnt exist";
        throw console.error(v, {
          name: e.name,
          lineIndex: h,
          lineNumber: f
        }), new Error(v);
      }
      l.children.push(hh("context", f, `${h}`)), a.push(g), u++;
      const y = this.lineAnnotations[f];
      y != null && (l.children.push($r("context", "annotation", 1)), a.push(jr({
        hunkIndex: 0,
        lineIndex: f,
        annotations: y.map((v) => this.annotationSlotName(v))
      })), u++);
    }
    return l.properties.style = `grid-row: span ${u}`, {
      file: e,
      gutterAST: l.children ?? [],
      contentAST: a,
      preAST: this.createPreElement(s),
      headerAST: o ? void 0 : this.renderHeader(e),
      totalLines: s,
      rowCount: u,
      themeStyles: i,
      baseThemeType: r,
      bufferBefore: t.bufferBefore,
      bufferAfter: t.bufferAfter,
      css: ""
    };
  }
  renderHeader(e) {
    const { headerRenderMode: t = "default", stickyHeader: n = false } = this.options;
    return Nh({
      fileOrDiff: e,
      mode: t,
      stickyHeader: n
    });
  }
  renderFullHTML(e) {
    return Le(this.renderFullAST(e));
  }
  renderFullAST(e, t = []) {
    return t.push(_({
      tagName: "code",
      children: this.renderCodeAST(e),
      properties: { "data-code": "" }
    })), {
      ...e.preAST,
      children: t
    };
  }
  renderCodeAST(e) {
    const t = Hr();
    return t.children = e.gutterAST, t.properties.style = `grid-row: span ${e.rowCount}`, [t, pf(e.contentAST, e.rowCount)];
  }
  renderPartialHTML(e, t = false) {
    return Le(t ? _({
      tagName: "code",
      children: e,
      properties: { "data-code": "" }
    }) : e);
  }
  async initializeHighlighter() {
    return this.highlighter = await ko($h(this.computedLang, {
      theme: this.getLocalHighlightTheme(),
      preferredHighlighter: this.workerManager?.getPreferredHighlighter() ?? this.options.preferredHighlighter
    })), this.highlighter;
  }
  onHighlightSuccess(e, t, n, i = true) {
    this.editSessionActive || this.applyHighlightResult(e, t, n, i);
  }
  applyHighlightResult(e, t, n, i = true) {
    const { file: r, renderCache: s } = this;
    r == null || s == null || !O(e, r) || !Se(n, this.getRenderOptions(r).options) || (s.result == null || !s.highlighted || !Se(s.options, n) || !O(s.file, r)) && (this.pendingHighlightResult = {
      file: r,
      options: n,
      highlighted: i,
      result: t
    }, this.onRenderUpdate?.());
  }
  getMatchingWorkerResultCache(e, t) {
    if (this.editSessionActive) return;
    const n = this.workerManager?.getFileResultCache(e);
    if (!(n == null || !Se(t, n.options)))
      return n;
  }
  getReadyRenderResult(e, t) {
    const { pendingHighlightResult: n } = this;
    if (n != null && O(n.file, e) && Se(n.options, t)) return n;
    const i = this.getMatchingWorkerResultCache(e, t);
    if (!(i == null || this.hasHighlightedRenderCache(e, t)))
      return {
        file: e,
        highlighted: true,
        ...i
      };
  }
  hasHighlightedRenderCache(e, t) {
    const { renderCache: n } = this;
    return n?.result != null && n.highlighted && O(e, n.file) && Se(t, n.options);
  }
  onHighlightError(e) {
    console.error(e);
  }
  getTokenizeMaxLength() {
    return this.options.tokenizeMaxLength ?? 1e5;
  }
  createPreElement(e) {
    const { disableLineNumbers: t = false, overflow: n = "scroll" } = this.options;
    return Fh({
      type: "file",
      diffIndicators: "none",
      disableBackground: true,
      disableLineNumbers: t,
      overflow: n,
      split: false,
      totalLines: e
    });
  }
};
function $t(e, t) {
  return e > t;
}
var bf = `<svg data-icon-sprite aria-hidden="true" width="0" height="0">
  <symbol id="diffs-icon-arrow-right-short" viewBox="0 0 16 16">
    <path d="M8.47 4.22a.75.75 0 0 0 0 1.06l1.97 1.97H3.75a.75.75 0 0 0 0 1.5h6.69l-1.97 1.97a.75.75 0 1 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06L9.53 4.22a.75.75 0 0 0-1.06 0"/>
  </symbol>
  <symbol id="diffs-icon-brand-github" viewBox="0 0 16 16">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.01 8.01 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27s-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8"/>
  </symbol>
  <symbol id="diffs-icon-chevron" viewBox="0 0 16 16">
    <path d="M1.47 4.47a.75.75 0 0 1 1.06 0L8 9.94l5.47-5.47a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1 0-1.06"/>
  </symbol>
  <symbol id="diffs-icon-chevrons-narrow" viewBox="0 0 10 16">
    <path d="M4.47 2.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1-1.06 1.06L5 3.81 2.28 6.53a.75.75 0 0 1-1.06-1.06zM1.22 9.47a.75.75 0 0 1 1.06 0L5 12.19l2.72-2.72a.75.75 0 0 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 0 1 0-1.06"/>
  </symbol>
  <symbol id="diffs-icon-diff-split" viewBox="0 0 16 16">
    <path d="M14 0H8.5v16H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1.5 6.5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0"/><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5.5V0zm.5 7.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1" opacity=".3"/>
  </symbol>
  <symbol id="diffs-icon-diff-unified" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5h16zm-8-4a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1A.5.5 0 0 0 8 10" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14 0a2 2 0 0 1 2 2v5.5H0V2a2 2 0 0 1 2-2zM6.5 3.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" clip-rule="evenodd" opacity=".4"/>
  </symbol>
  <symbol id="diffs-icon-expand" viewBox="0 0 16 16">
    <path d="M3.47 5.47a.75.75 0 0 1 1.06 0L8 8.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06"/>
  </symbol>
  <symbol id="diffs-icon-expand-all" viewBox="0 0 16 16">
    <path d="M11.47 9.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L8 12.94zM7.526 1.418a.75.75 0 0 1 1.004.052l4 4a.75.75 0 1 1-1.06 1.06L8 3.06 4.53 6.53a.75.75 0 1 1-1.06-1.06l4-4z"/>
  </symbol>
  <symbol id="diffs-icon-eye-slash" viewBox="0 0 16 16">
    <path d="m13.47 1.47-12 12 1.06 1.06 12-12zM8 14c-.92 0-1.802-.208-2.624-.547l1.173-1.174c.476.142.963.221 1.451.221 1.66 0 3.307-.949 4.626-2.196a10.4 10.4 0 0 0 1.494-1.751A5 5 0 0 0 14.443 8a5 5 0 0 0-.323-.553 10 10 0 0 0-1.238-1.5l1.061-1.062C15.222 6.173 16 7.511 16 8c0 1.05-3.582 6-8 6"/><path d="M8 11q-.084 0-.167-.005l3.162-3.162q.006.083.005.167a3 3 0 0 1-3 3M5.005 8.167l3.162-3.162a3 3 0 0 0-3.162 3.162"/><path d="M8 3.5c.485 0 .97.081 1.445.227l1.168-1.169C9.794 2.212 8.915 2 8 2 3.582 2 0 6.8 0 8c0 .555.766 1.88 2.027 3.144l1.06-1.06a9.5 9.5 0 0 1-1.203-1.461 4.3 4.3 0 0 1-.345-.617L1.536 8l.003-.006c.064-.149.176-.359.345-.617a9.8 9.8 0 0 1 1.482-1.73C4.675 4.427 6.326 3.5 8 3.5"/>
  </symbol>
  <symbol id="diffs-icon-file-code" viewBox="0 0 16 16">
    <path d="M10.75 0c.199 0 .39.08.53.22l3.5 3.5c.14.14.22.331.22.53v9A2.75 2.75 0 0 1 12.25 16h-8.5A2.75 2.75 0 0 1 1 13.25V2.75A2.75 2.75 0 0 1 3.75 0zm-7 1.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25V5h-1.25A2.25 2.25 0 0 1 10 2.75V1.5z"/><path d="M7.248 6.19a.75.75 0 0 1 .063 1.058L5.753 9l1.558 1.752a.75.75 0 0 1-1.122.996l-2-2.25a.75.75 0 0 1 0-.996l2-2.25a.75.75 0 0 1 1.06-.063M8.69 7.248a.75.75 0 1 1 1.12-.996l2 2.25a.75.75 0 0 1 0 .996l-2 2.25a.75.75 0 1 1-1.12-.996L10.245 9z"/>
  </symbol>
  <symbol id="diffs-icon-plus" viewBox="0 0 16 16">
    <path d="M8 3a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 0 1.5h-3.5v3.5a.75.75 0 0 1-1.5 0v-3.5h-3.5a.75.75 0 0 1 0-1.5h3.5v-3.5A.75.75 0 0 1 8 3"/>
  </symbol>
  <symbol id="diffs-icon-symbol-added" viewBox="0 0 16 16">
    <path d="M8 4a.75.75 0 0 1 .75.75v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5A.75.75 0 0 1 8 4"/><path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/>
  </symbol>
  <symbol id="diffs-icon-symbol-added-duo" viewBox="0 0 16 16">
    <path d="M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8" opacity=".2"/><path d="M8 4a.75.75 0 0 1 .75.75v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5A.75.75 0 0 1 8 4"/>
  </symbol>
  <symbol id="diffs-icon-symbol-added-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8m0 4a.75.75 0 0 0-.75.75v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5A.75.75 0 0 0 8 4" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-deleted" viewBox="0 0 16 16">
    <path d="M4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8"/><path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/>
  </symbol>
  <symbol id="diffs-icon-symbol-deleted-duo" viewBox="0 0 16 16">
    <path d="M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8" opacity=".2"/><path d="M4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8"/>
  </symbol>
  <symbol id="diffs-icon-symbol-deleted-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8M4.75 7.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-diffstat" viewBox="0 0 16 16">
    <path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/><path d="M8.75 4.296a.75.75 0 0 0-1.5 0V6.25h-2a.75.75 0 0 0 0 1.5h2v1.5h1.5v-1.5h2a.75.75 0 0 0 0-1.5h-2zM5.25 10a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-diffstat-duo" viewBox="0 0 16 16">
    <path d="M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8" opacity=".2"/><path d="M8.75 4.296a.75.75 0 0 0-1.5 0V6.25h-2a.75.75 0 0 0 0 1.5h2v1.5h1.5v-1.5h2a.75.75 0 0 0 0-1.5h-2zM5.25 10a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-diffstat-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8M5.25 10a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM8 3.546a.75.75 0 0 0-.75.75V6.25h-2a.75.75 0 0 0 0 1.5h2v1.5h1.5v-1.5h2a.75.75 0 0 0 0-1.5h-2V4.296a.75.75 0 0 0-.75-.75" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-extracted" viewBox="0 0 16 16">
    <path d="M8.25 4.25a.75.75 0 0 1 0 1.5H6.81l3.302 3.302a1.5 1.5 0 1 1-1.06 1.06L5.75 6.811V8.25a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 5 4.25z"/><path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8m0 1.5c-1.613 0-2.807.089-3.704.288-.88.196-1.382.477-1.706.802-.325.324-.606.826-.802 1.706C1.588 5.193 1.5 6.387 1.5 8s.089 2.807.288 3.704c.196.88.477 1.382.802 1.706.324.325.826.606 1.706.802.897.2 2.091.288 3.704.288s2.807-.089 3.704-.288c.88-.196 1.382-.477 1.706-.802.325-.324.606-.826.802-1.706.2-.897.288-2.091.288-3.704s-.089-2.807-.288-3.704c-.196-.88-.477-1.382-.802-1.706-.324-.325-.826-.606-1.706-.802C10.807 1.588 9.613 1.5 8 1.5" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-extracted-duo" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8" clip-rule="evenodd" opacity=".2"/><path d="M8.25 4.25a.75.75 0 0 1 0 1.5H6.81l3.302 3.302a1.5 1.5 0 1 1-1.06 1.06L5.75 6.811V8.25a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 5 4.25z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-extracted-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8M5 4.25a.75.75 0 0 0-.75.75v3.25a.75.75 0 0 0 1.5 0V6.81l3.302 3.302a1.5 1.5 0 1 0 1.06-1.06L6.811 5.75H8.25a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-ignored" viewBox="0 0 16 16">
    <path d="M1.5 8c0 1.613.088 2.806.288 3.704.196.88.478 1.381.802 1.706s.826.607 1.706.802c.898.2 2.091.288 3.704.288s2.806-.088 3.704-.288c.88-.195 1.381-.478 1.706-.802s.607-.826.802-1.706c.2-.898.288-2.091.288-3.704s-.088-2.806-.288-3.704c-.195-.88-.478-1.381-.802-1.706s-.826-.606-1.706-.802C10.806 1.588 9.613 1.5 8 1.5s-2.806.088-3.704.288c-.88.196-1.381.478-1.706.802s-.606.826-.802 1.706C1.588 5.194 1.5 6.387 1.5 8M0 8c0-6.588 1.412-8 8-8s8 1.412 8 8-1.412 8-8 8-8-1.412-8-8m11.53-2.47a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-ignored-duo" viewBox="0 0 16 16">
    <path d="M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8" opacity=".2"/><path d="M11.53 4.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0"/>
  </symbol>
  <symbol id="diffs-icon-symbol-ignored-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8m3.53 4.47a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 1 0 1.06 1.06l6-6a.75.75 0 0 0 0-1.06" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-inlined" viewBox="0 0 16 16">
    <path d="M7.75 11.75a.75.75 0 0 1 0-1.5h1.44L5.887 6.948a1.5 1.5 0 1 1 1.06-1.06l3.302 3.301V7.75a.75.75 0 0 1 1.5 0V11a.75.75 0 0 1-.75.75z"/><path fill-rule="evenodd" d="M8 16c-6.588 0-8-1.412-8-8s1.412-8 8-8 8 1.412 8 8-1.412 8-8 8m0-1.5c1.613 0 2.807-.089 3.704-.288.88-.196 1.382-.477 1.706-.802.325-.324.606-.826.802-1.706.2-.897.288-2.091.288-3.704s-.089-2.807-.288-3.704c-.196-.88-.477-1.382-.802-1.706-.324-.325-.826-.606-1.706-.802C10.807 1.588 9.613 1.5 8 1.5s-2.807.089-3.704.288c-.88.196-1.382.477-1.706.802-.325.324-.606.826-.802 1.706C1.588 5.193 1.5 6.387 1.5 8s.089 2.807.288 3.704c.196.88.477 1.382.802 1.706.324.325.826.606 1.706.802.897.2 2.091.288 3.704.288" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-inlined-duo" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 16c-6.588 0-8-1.412-8-8s1.412-8 8-8 8 1.412 8 8-1.412 8-8 8" clip-rule="evenodd" opacity=".2"/><path d="M7.75 11.75a.75.75 0 0 1 0-1.5h1.44L5.887 6.948a1.5 1.5 0 1 1 1.06-1.06l3.302 3.301V7.75a.75.75 0 0 1 1.5 0V11a.75.75 0 0 1-.75.75z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-inlined-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8M5.5 4a1.5 1.5 0 1 0 .388 2.948l3.301 3.302H7.75a.75.75 0 0 0 0 1.5H11a.75.75 0 0 0 .75-.75V7.75a.75.75 0 0 0-1.5 0v1.44L6.948 5.887A1.5 1.5 0 0 0 5.5 4" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-modified" viewBox="0 0 16 16">
    <path d="M1.5 8c0 1.613.088 2.806.288 3.704.196.88.478 1.381.802 1.706s.826.607 1.706.802c.898.2 2.091.288 3.704.288s2.806-.088 3.704-.288c.88-.195 1.381-.478 1.706-.802s.607-.826.802-1.706c.2-.898.288-2.091.288-3.704s-.088-2.806-.288-3.704c-.195-.88-.478-1.381-.802-1.706s-.826-.606-1.706-.802C10.806 1.588 9.613 1.5 8 1.5s-2.806.088-3.704.288c-.88.196-1.381.478-1.706.802s-.606.826-.802 1.706C1.588 5.194 1.5 6.387 1.5 8M0 8c0-6.588 1.412-8 8-8s8 1.412 8 8-1.412 8-8 8-8-1.412-8-8m8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
  </symbol>
  <symbol id="diffs-icon-symbol-modified-duo" viewBox="0 0 16 16">
    <path d="M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8" opacity=".2"/><path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  </symbol>
  <symbol id="diffs-icon-symbol-modified-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8m0 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-moved" viewBox="0 0 16 16">
    <path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/><path d="M8.495 4.695a.75.75 0 0 0-.05 1.06L10.486 8l-2.041 2.246a.75.75 0 0 0 1.11 1.008l2.5-2.75a.75.75 0 0 0 0-1.008l-2.5-2.75a.75.75 0 0 0-1.06-.051m-4 0a.75.75 0 0 0-.05 1.06l2.044 2.248-1.796 1.995a.75.75 0 0 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.002-1.007l-2.5-2.75a.75.75 0 0 0-1.06-.05"/>
  </symbol>
  <symbol id="diffs-icon-symbol-moved-duo" viewBox="0 0 16 16">
    <path d="M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8" opacity=".2"/><path d="M8.496 4.695a.75.75 0 0 0-.051 1.06L10.486 8l-2.041 2.246a.75.75 0 0 0 1.11 1.008l2.5-2.75a.75.75 0 0 0 0-1.008l-2.5-2.75a.75.75 0 0 0-1.06-.051m-4 0a.75.75 0 0 0-.051 1.06L6.49 8.003 4.693 9.998a.75.75 0 0 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.002-1.007l-2.5-2.75a.75.75 0 0 0-1.06-.05"/>
  </symbol>
  <symbol id="diffs-icon-symbol-moved-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8m1.555 4.745a.75.75 0 0 0-1.11 1.01L10.486 8l-2.04 2.245a.75.75 0 0 0 1.109 1.01l2.5-2.75a.75.75 0 0 0 0-1.01zm-4 0a.75.75 0 0 0-1.11 1.01l2.043 2.248-1.796 1.995a.75.75 0 0 0 1.116 1.004l2.25-2.5a.75.75 0 0 0-.003-1.007z" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-ref" viewBox="0 0 16 16">
    <path d="M1.5 8c0 1.613.088 2.806.288 3.704.196.88.478 1.381.802 1.706.286.286.71.54 1.41.73V1.86c-.7.19-1.124.444-1.41.73-.324.325-.606.826-.802 1.706C1.588 5.194 1.5 6.387 1.5 8m4 6.397c.697.07 1.522.103 2.5.103 1.613 0 2.806-.088 3.704-.288.88-.195 1.381-.478 1.706-.802s.607-.826.802-1.706c.2-.898.288-2.091.288-3.704s-.088-2.806-.288-3.704c-.195-.88-.478-1.381-.802-1.706s-.826-.606-1.706-.802C10.806 1.588 9.613 1.5 8 1.5c-.978 0-1.803.033-2.5.103zM0 8c0-6.588 1.412-8 8-8s8 1.412 8 8-1.412 8-8 8-8-1.412-8-8m7-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/>
  </symbol>
</svg>`;
function yf(e, t) {
  return e.lineNumber === t.lineNumber && e.metadata === t.metadata;
}
function vf(e, t) {
  return e == null || t == null ? e === t : wf(e.customProperties, t.customProperties) && e.type === t.type && e.diffIndicators === t.diffIndicators && e.disableBackground === t.disableBackground && e.disableLineNumbers === t.disableLineNumbers && e.overflow === t.overflow && e.split === t.split && e.totalLines === t.totalLines;
}
var Zr = {};
function wf(e = Zr, t = Zr) {
  if (e === t) return true;
  const n = Object.keys(e), i = Object.keys(t);
  if (n.length !== i.length) return false;
  for (const r of n) if (e[r] !== t[r]) return false;
  return true;
}
function Sf(e) {
  const t = document.createElement("div");
  return t.dataset.annotationSlot = "", t.slot = e, t.style.whiteSpace = "normal", t;
}
function Cf() {
  const e = document.createElement("div");
  return e.slot = "gutter-utility-slot", e.style.position = "absolute", e.style.top = "0", e.style.bottom = "0", e.style.textAlign = "center", e.style.whiteSpace = "normal", e.style.touchAction = "none", e;
}
function xf() {
  const e = document.createElement("style");
  return e.setAttribute(qo, ""), e;
}
var kf = `@layer base,theme,rendered,unsafe;@layer base{:host{--diffs-font-fallback:"SF Mono", Monaco, Consolas, "Ubuntu Mono", "Liberation Mono", "Courier New", monospace;--diffs-header-font-fallback:system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif;--diffs-mixer:light-dark(#000,#fff);--diffs-gap-fallback:8px;--diffs-scrollbar-gutter-fallback:6px;--diffs-scrollbar-gutter:var(--diffs-scrollbar-gutter-override,var(--diffs-scrollbar-gutter-measured,var(--diffs-scrollbar-gutter-fallback)));--diffs-added-light:#0dbe4e;--diffs-added-dark:#5ecc71;--diffs-modified-light:#009fff;--diffs-modified-dark:#69b1ff;--diffs-deleted-light:#ff2e3f;--diffs-deleted-dark:#ff6762;--diffs-warning-light:#d5a910;--diffs-warning-dark:#ffd452;color-scheme:light dark;font-family:var(--diffs-header-font-family,var(--diffs-header-font-fallback));font-size:var(--diffs-font-size,13px);line-height:var(--diffs-line-height,20px);font-feature-settings:var(--diffs-font-features);--diffs-bg:light-dark(var(--diffs-light-bg,#fff),var(--diffs-dark-bg,#000));--diffs-bg-buffer:var(--diffs-bg-buffer-override,light-dark(color-mix(in lab, var(--diffs-bg) 92%, var(--diffs-mixer)),color-mix(in lab, var(--diffs-bg) 92%, var(--diffs-mixer))));--diffs-bg-context:var(--diffs-bg-context-override,light-dark(color-mix(in lab, var(--diffs-bg) 98.5%, var(--diffs-mixer)),color-mix(in lab, var(--diffs-bg) 92.5%, var(--diffs-mixer))));--diffs-bg-context-gutter:var(--diffs-bg-context-gutter-override,light-dark(color-mix(in lab, var(--diffs-bg-context) 90%, var(--diffs-bg)),color-mix(in lab, var(--diffs-bg-context) 45%, var(--diffs-bg))));--diffs-bg-separator:var(--diffs-bg-separator-override,light-dark(color-mix(in lab, var(--diffs-bg) 96%, var(--diffs-mixer)),color-mix(in lab, var(--diffs-bg) 85%, var(--diffs-mixer))));--diffs-fg:light-dark(var(--diffs-light,#000),var(--diffs-dark,#fff));--diffs-fg-number:var(--diffs-fg-number-override,light-dark(color-mix(in lab, var(--diffs-fg) 65%, var(--diffs-bg)),color-mix(in lab, var(--diffs-fg) 65%, var(--diffs-bg))));--diffs-fg-conflict-marker:var(--diffs-fg-conflict-marker-override,var(--diffs-fg-number));--diffs-deletion-base:var(--diffs-deletion-color-override,light-dark(var(--diffs-light-deletion-color,var(--diffs-deletion-color,var(--diffs-deleted-light))),var(--diffs-dark-deletion-color,var(--diffs-deletion-color,var(--diffs-deleted-dark)))));--diffs-addition-base:var(--diffs-addition-color-override,light-dark(var(--diffs-light-addition-color,var(--diffs-addition-color,var(--diffs-added-light))),var(--diffs-dark-addition-color,var(--diffs-addition-color,var(--diffs-added-dark)))));--diffs-modified-base:var(--diffs-modified-color-override,light-dark(var(--diffs-light-modified-color,var(--diffs-modified-color,var(--diffs-modified-light))),var(--diffs-dark-modified-color,var(--diffs-modified-color,var(--diffs-modified-dark)))));--diffs-bg-deletion:var(--diffs-bg-deletion-override,light-dark(color-mix(in lab, var(--diffs-bg) 88%, var(--diffs-deletion-base)),color-mix(in lab, var(--diffs-bg) 80%, var(--diffs-deletion-base))));--diffs-bg-deletion-emphasis:var(--diffs-bg-deletion-emphasis-override,light-dark(rgb(from var(--diffs-deletion-base) r g b / .15),rgb(from var(--diffs-deletion-base) r g b / .2)));--diffs-bg-addition:var(--diffs-bg-addition-override,light-dark(color-mix(in lab, var(--diffs-bg) 88%, var(--diffs-addition-base)),color-mix(in lab, var(--diffs-bg) 80%, var(--diffs-addition-base))));--diffs-bg-addition-emphasis:var(--diffs-bg-addition-emphasis-override,light-dark(rgb(from var(--diffs-addition-base) r g b / .15),rgb(from var(--diffs-addition-base) r g b / .2)));--diffs-selection-base:var(--diffs-modified-base);--diffs-selection-number-fg:light-dark(color-mix(in lab, var(--diffs-selection-base) 65%, var(--diffs-mixer)),color-mix(in lab, var(--diffs-selection-base) 75%, var(--diffs-mixer)));background-color:var(--diffs-bg);color:var(--diffs-fg);display:block}pre,code,[data-error-wrapper]{isolation:isolate;font-family:var(--diffs-font-family,var(--diffs-font-fallback));outline:none;margin:0;padding:0;display:block}pre,code{background-color:var(--diffs-bg)}code{contain:content}input,button{font-family:inherit;font-size:inherit;line-height:inherit}*,:before,:after{box-sizing:border-box}[data-icon-sprite]{display:none}[data-diffs-header],[data-separator]{font-family:var(--diffs-header-font-family,var(--diffs-header-font-fallback))}[data-diffs-header][data-sticky]{z-index:1;background-color:var(--diffs-bg);position:sticky;top:0}[data-file-info]{color:var(--fg);background-color:color-mix(in lab, var(--bg) 98%, var(--fg));border-block:1px solid color-mix(in lab, var(--bg) 95%, var(--fg));padding:10px;font-weight:700}[data-diff],[data-file]{--diffs-grid-number-column-width:minmax(min-content, max-content);--diffs-code-grid:var(--diffs-grid-number-column-width) 1fr;&[data-dehydrated]{--diffs-code-grid:var(--diffs-grid-number-column-width) minmax(0, 1fr)}&:hover [data-code]::-webkit-scrollbar-thumb{background-color:var(--diffs-bg-context)}}@supports (-webkit-touch-callout:none){:host{--diffs-scrollbar-gutter-fallback:0px}}[data-line] span,[data-edit-prediction-suffix] span{color:light-dark(var(--diffs-token-light,var(--diffs-light)),var(--diffs-token-dark,var(--diffs-dark)));background-color:light-dark(var(--diffs-token-light-bg,inherit),var(--diffs-token-dark-bg,inherit));font-weight:light-dark(var(--diffs-token-light-font-weight,inherit),var(--diffs-token-dark-font-weight,inherit));font-style:light-dark(var(--diffs-token-light-font-style,inherit),var(--diffs-token-dark-font-style,inherit));text-decoration:light-dark(var(--diffs-token-light-text-decoration,inherit),var(--diffs-token-dark-text-decoration,inherit))}[data-line],[data-gutter-buffer],[data-column-number],[data-line-annotation],[data-no-newline],[data-merge-conflict],[data-merge-conflict-actions],[data-editor-overlay]{--diffs-computed-decoration-bg:var(--diffs-bg);--diffs-computed-diff-line-bg:var(--diffs-computed-decoration-bg);--diffs-computed-selected-line-bg:var(--diffs-computed-diff-line-bg);--diffs-computed-editor-active-line-bg:var(--diffs-computed-selected-line-bg);--diffs-computed-hovered-line-bg:var(--diffs-computed-editor-active-line-bg);--diffs-hover-mix-target:var(--diffs-bg-hover-override,var(--diffs-mixer));--diffs-line-bg:var(--diffs-computed-hovered-line-bg);color:var(--diffs-fg);background-color:var(--diffs-line-bg,var(--diffs-bg))}[data-line],[data-no-newline]{&[data-decoration-bg]{--mix-deco-light:92%;--mix-deco-dark:85%;&[data-decoration-bg-depth="2"]{--mix-deco-light:88%;--mix-deco-dark:80%}&[data-decoration-bg-depth="3"]{--mix-deco-light:85%;--mix-deco-dark:78%}--diffs-hover-mix-target:var(--diffs-decoration-bg);--diffs-computed-decoration-bg:light-dark(color-mix(in lab, var(--diffs-bg) var(--mix-deco-light), var(--diffs-decoration-bg)),color-mix(in lab, var(--diffs-bg) var(--mix-deco-dark), var(--diffs-decoration-bg)))}}[data-line-annotation],[data-gutter-buffer=annotation]{--diffs-annotation-bg:var(--diffs-bg-context);--diffs-computed-decoration-bg:var(--diffs-annotation-bg);--diffs-hover-mix-target:var(--diffs-computed-editor-active-line-bg)}[data-merge-conflict-actions],[data-gutter-buffer=merge-conflict-action],[data-gutter-buffer=merge-conflict-marker-base],[data-gutter-buffer=merge-conflict-marker-separator],[data-merge-conflict=marker-base],[data-merge-conflict=marker-separator]{--diffs-computed-decoration-bg:var(--diffs-bg-context);--diffs-hover-mix-target:var(--diffs-computed-editor-active-line-bg)}[data-gutter-buffer=merge-conflict-marker-start],[data-merge-conflict=marker-start]{--diffs-computed-decoration-bg:light-dark(color-mix(in lab, var(--diffs-bg) 78%, var(--conflict-bg-current-header-override,var(--diffs-addition-base))),color-mix(in lab, var(--diffs-bg) 68%, var(--conflict-bg-current-header-override,var(--diffs-addition-base))));--diffs-hover-mix-target:var(--diffs-computed-editor-active-line-bg)}[data-gutter-buffer=merge-conflict-marker-end],[data-merge-conflict=marker-end]{--diffs-computed-decoration-bg:light-dark(color-mix(in lab, var(--diffs-bg) 78%, var(--conflict-bg-incoming-header-override,var(--diffs-modified-base))),color-mix(in lab, var(--diffs-bg) 68%, var(--conflict-bg-incoming-header-override,var(--diffs-modified-base))));--diffs-hover-mix-target:var(--diffs-computed-editor-active-line-bg)}[data-has-merge-conflict] [data-line-annotation],[data-has-merge-conflict] [data-gutter-buffer=annotation]{--diffs-computed-decoration-bg:var(--diffs-bg);--diffs-hover-mix-target:var(--diffs-computed-editor-active-line-bg)}:where([data-background]){& [data-gutter-buffer],& [data-column-number]{--mix-light:91%;--mix-dark:85%}& [data-line],& [data-no-newline]{--mix-light:88%;--mix-dark:80%}& [data-gutter-buffer],& [data-column-number],& [data-line],& [data-no-newline]{--diffs-diff-line-mix-target:var(--diffs-bg);&[data-line-type=change-deletion]{--diffs-diff-line-mix-target:var(--diffs-bg-deletion-override,var(--diffs-deletion-base));--diffs-hover-mix-target:var(--diffs-diff-line-mix-target);&:where([data-gutter-buffer],[data-column-number]){color:var(--diffs-fg-number-deletion-override,var(--diffs-deletion-base));--diffs-diff-line-mix-target:var(--diffs-bg-deletion-number-override,var(--diffs-deletion-base))}--diffs-computed-diff-line-bg:light-dark(color-mix(in lab, var(--diffs-computed-decoration-bg) var(--mix-light), var(--diffs-diff-line-mix-target)),color-mix(in lab, var(--diffs-computed-decoration-bg) var(--mix-dark), var(--diffs-diff-line-mix-target)))}&[data-line-type=change-addition]{--diffs-diff-line-mix-target:var(--diffs-bg-addition-override,var(--diffs-addition-base));--diffs-hover-mix-target:var(--diffs-diff-line-mix-target);&:where([data-gutter-buffer],[data-column-number]){color:var(--diffs-fg-number-addition-override,var(--diffs-addition-base));--diffs-diff-line-mix-target:var(--diffs-bg-addition-number-override,var(--diffs-addition-base))}--diffs-computed-diff-line-bg:light-dark(color-mix(in lab, var(--diffs-computed-decoration-bg) var(--mix-light), var(--diffs-diff-line-mix-target)),color-mix(in lab, var(--diffs-computed-decoration-bg) var(--mix-dark), var(--diffs-diff-line-mix-target)))}&[data-merge-conflict=current]{--diffs-diff-line-mix-target:var(--conflict-bg-current-override,var(--diffs-addition-base));--diffs-hover-mix-target:var(--diffs-diff-line-mix-target);&:where([data-gutter-buffer],[data-column-number]){color:var(--diffs-fg-number-addition-override,var(--diffs-addition-base));--diffs-diff-line-mix-target:var(--conflict-bg-current-number-override,var(--diffs-addition-base))}--diffs-computed-diff-line-bg:light-dark(color-mix(in lab, var(--diffs-computed-decoration-bg) var(--mix-light), var(--diffs-diff-line-mix-target)),color-mix(in lab, var(--diffs-computed-decoration-bg) var(--mix-dark), var(--diffs-diff-line-mix-target)))}&[data-merge-conflict=incoming]{--diffs-diff-line-mix-target:var(--conflict-bg-incoming-override,var(--diffs-modified-base));--diffs-hover-mix-target:var(--diffs-diff-line-mix-target);&:where([data-gutter-buffer],[data-column-number]){color:var(--diffs-modified-base);--diffs-diff-line-mix-target:var(--conflict-bg-incoming-number-override,var(--diffs-modified-base))}--diffs-computed-diff-line-bg:light-dark(color-mix(in lab, var(--diffs-computed-decoration-bg) var(--mix-light), var(--diffs-diff-line-mix-target)),color-mix(in lab, var(--diffs-computed-decoration-bg) var(--mix-dark), var(--diffs-diff-line-mix-target)))}}}[data-gutter-buffer],[data-column-number],[data-line],[data-line-annotation],[data-merge-conflict],[data-merge-conflict-actions],[data-no-newline],[data-editor-overlay]{--diffs-selection-mix-target:var(--diffs-bg-selection-override,var(--diffs-selection-base));--diffs-selection-emphasis-mix-target:var(--diffs-selection-mix-target);&:where([data-editor-overlay]),&:where([data-line],[data-line-annotation],[data-merge-conflict],[data-merge-conflict-actions],[data-no-newline])[data-selected-line]{--mix-selection-light:82%;--mix-selection-dark:75%;--diffs-hover-mix-target:var(--diffs-selection-mix-target)}&:where([data-gutter-buffer][data-selected-line],[data-column-number]:is([data-selected-line],[data-editor-active-line])){--mix-selection-light:75%;--mix-selection-dark:60%;--diffs-selection-mix-target:var(--diffs-bg-selection-number-override,var(--diffs-selection-base));--diffs-hover-mix-target:var(--diffs-selection-mix-target)}&:where([data-line][data-selected-line]):is([data-line-type=change-addition],[data-line-type=change-deletion]){--diffs-selection-emphasis-mix-target:light-dark(color-mix(in lab, var(--diffs-diff-line-mix-target,var(--diffs-selection-mix-target)) var(--mix-selection-light), var(--diffs-selection-mix-target)),var(--diffs-selection-mix-target))}&:where([data-editor-overlay]),&[data-selected-line]{--diffs-computed-selected-line-bg:light-dark(color-mix(in lab, var(--diffs-computed-diff-line-bg) var(--mix-selection-light), var(--diffs-selection-mix-target)),color-mix(in lab, var(--diffs-computed-diff-line-bg) var(--mix-selection-dark), var(--diffs-selection-mix-target)))}}[data-line][data-editor-active-line],[data-column-number][data-editor-active-line]{--diffs-computed-editor-active-line-bg:color-mix(in lab, var(--diffs-computed-selected-line-bg) var(--diffs-editor-active-line-source-mix,100%), var(--diffs-selection-emphasis-mix-target))}@media (pointer:fine){[data-line][data-hovered],[data-gutter-buffer][data-hovered],[data-column-number][data-hovered],[data-line-annotation][data-hovered],[data-no-newline][data-hovered],[data-merge-conflict][data-hovered],[data-merge-conflict-actions][data-hovered],[data-editor-overlay][data-hovered]{--diffs-computed-hovered-line-bg:light-dark(color-mix(in lab, var(--diffs-computed-editor-active-line-bg) 97%, var(--diffs-hover-mix-target)),color-mix(in lab, var(--diffs-computed-editor-active-line-bg) 91%, var(--diffs-hover-mix-target)))}}[data-gutter-buffer][data-selected-line],[data-column-number]:is([data-selected-line],[data-editor-active-line]){color:var(--diffs-selection-number-fg)}[data-no-newline]{user-select:none;& span{opacity:.6}}[data-diff-type=split][data-overflow=scroll]{grid-template-columns:1fr 1fr;display:grid;& [data-additions]{border-left:1px solid var(--diffs-bg)}& [data-deletions]{border-right:1px solid var(--diffs-bg)}}[data-code]{grid-auto-flow:dense;grid-template-columns:var(--diffs-code-grid);overflow:var(--diffs-overflow-override,scroll) clip;overscroll-behavior-x:none;tab-size:var(--diffs-tab-size,2);padding-top:var(--diffs-gap-block,var(--diffs-gap-fallback));padding-bottom:max(0px, calc(var(--diffs-gap-block,var(--diffs-gap-fallback)) - var(--diffs-scrollbar-gutter)));scrollbar-gutter:stable;align-self:flex-start;display:grid}[data-diffs-scrollbar-measure]{opacity:0;pointer-events:none;scrollbar-gutter:auto;grid-template-columns:none;width:100px;height:100px;padding:0;position:absolute;top:-200px;left:-200px}[data-container-size]{container-type:inline-size}[data-code]::-webkit-scrollbar{width:0;height:var(--diffs-scrollbar-gutter)}[data-code]::-webkit-scrollbar-track{background:0 0}[data-code]::-webkit-scrollbar-thumb{background-color:#0000;background-clip:content-box;border:1px solid #0000;border-radius:3px}[data-code]::-webkit-scrollbar-corner{background-color:#0000}@supports ((-moz-appearance:none)){[data-code]{scrollbar-width:thin;scrollbar-color:var(--diffs-bg-context) transparent;padding-bottom:var(--diffs-gap-block,var(--diffs-gap-fallback))}}[data-diffs-header]~[data-diff],[data-diffs-header]~[data-file]{& [data-code],&[data-overflow=wrap],&[data-dehydrated][data-diff-type=split][data-overflow=scroll]{padding-top:0}}[data-gutter]{grid-template-rows:subgrid;grid-template-columns:subgrid;z-index:3;background-color:var(--diffs-bg);grid-column:1;display:grid;position:relative;& [data-gutter-buffer],& [data-column-number]{border-right:var(--diffs-gap-style,2px solid var(--diffs-bg))}}[data-content]{grid-template-rows:subgrid;grid-template-columns:subgrid;background-color:var(--diffs-bg);grid-column:2;min-width:0;display:grid}[data-diff-type=split][data-overflow=wrap],[data-dehydrated][data-diff-type=split][data-overflow=scroll]{grid-auto-flow:dense;grid-template-columns:repeat(2, var(--diffs-code-grid));padding-block:var(--diffs-gap-block,var(--diffs-gap-fallback));display:grid;& [data-code]{display:contents}& [data-deletions]{& [data-gutter]{grid-column:1}& [data-content]{border-right:1px solid var(--diffs-bg);grid-column:2}}& [data-additions]{& [data-gutter]{border-left:1px solid var(--diffs-bg);grid-column:3}& [data-content]{grid-column:4}}}[data-dehydrated][data-diff-type=split][data-overflow=scroll] [data-content]{overflow:clip}[data-overflow=scroll] [data-gutter]{position:sticky;left:0}[data-interactive-lines] [data-line]{cursor:pointer}[data-interactive-line-numbers] [data-column-number]{cursor:pointer;touch-action:none}[data-content-buffer],[data-gutter-buffer]{user-select:none;min-height:1lh;position:relative}[data-gutter-buffer]{padding-left:2ch;padding-right:1ch;&:before{content:"";min-width:var(--diffs-min-number-column-width,var(--diffs-min-number-column-width-default,3ch));display:block}}[data-gutter-buffer=annotation]{--diffs-annotation-bg:var(--diffs-bg-context-gutter);min-height:0}[data-gutter-buffer=buffer]{--diffs-line-bg:var(--diffs-bg-context-gutter)}[data-content-buffer]{background-position:5px 0;background-size:8px 8px;background-origin:border-box;background-image:repeating-linear-gradient(-45deg, transparent, transparent calc(3px * 1.414), var(--diffs-bg-buffer) calc(3px * 1.414), var(--diffs-bg-buffer) calc(4px * 1.414));grid-column:1}[data-separator]{box-sizing:content-box;background-color:var(--diffs-bg)}[data-separator=simple]{min-height:4px}[data-separator=line-info],[data-separator=line-info-basic],[data-separator=metadata],[data-separator=simple]{background-color:var(--diffs-bg-separator)}[data-separator=line-info],[data-separator=line-info-basic],[data-separator=metadata]{height:32px;position:relative}[data-separator-wrapper]{user-select:none;fill:currentColor;background-color:var(--diffs-bg);align-items:center;height:100%;display:flex;position:absolute;inset-inline:0}[data-content] [data-separator-wrapper]{display:none}[data-separator=metadata] [data-separator-wrapper]{background-color:var(--diffs-bg-separator);height:100%;color:var(--diffs-fg-number);white-space:nowrap;text-overflow:ellipsis;min-width:min-content;padding-inline:1ch;inset-inline:100% auto;overflow:hidden}[data-separator=line-info]{margin-block:var(--diffs-gap-block,var(--diffs-gap-fallback));& [data-separator-wrapper]{min-width:16px}}[data-separator=line-info-basic],[data-separator=metadata]{margin-block:0}[data-separator=line-info][data-separator-first]{margin-top:0}[data-separator=line-info][data-separator-last]{margin-bottom:0}[data-expand-index] [data-separator-wrapper]{grid-template-columns:32px auto;display:grid}[data-expand-index] [data-separator-wrapper][data-separator-multi-button]{grid-template-columns:32px 32px auto}[data-expand-button],[data-separator-content]{background-color:var(--diffs-bg-separator);flex:none;align-items:center;display:flex}[data-expand-index] [data-separator-content]:hover{cursor:pointer;text-decoration:underline}[data-expand-button]{cursor:pointer;min-width:32px;color:var(--diffs-fg-number);border-right:2px solid var(--diffs-bg);flex-shrink:0;justify-content:center;align-self:stretch;&:hover{color:var(--diffs-fg)}&[data-expand-all-button]{display:none}}[data-expand-down] [data-icon]{transform:scaleY(-1)}[data-separator-content]{height:100%;color:var(--diffs-fg-number);flex:auto;justify-content:flex-start;padding:0 1ch;overflow:hidden}[data-separator=line-info],[data-separator=line-info-basic]{& [data-separator-content]{user-select:none;height:100%;overflow:clip}}[data-unmodified-lines]{text-overflow:ellipsis;white-space:nowrap;flex:0 auto;min-width:0;display:block;overflow:hidden}@supports (width:1cqi){[data-unified]{& [data-separator=line-info] [data-separator-wrapper]{padding-inline:var(--diffs-gap-inline,var(--diffs-gap-fallback));width:100cqi;& [data-separator-content]{border-radius:6px}}& [data-separator=line-info][data-expand-index] [data-separator-wrapper] [data-separator-content]{border-top-left-radius:unset;border-bottom-left-radius:unset}}[data-gutter]{& [data-separator=line-info] [data-separator-wrapper]{padding-left:var(--diffs-gap-inline,var(--diffs-gap-fallback))}& [data-separator=line-info] [data-separator-content]{border-top-left-radius:6px;border-bottom-left-radius:6px}& [data-separator=line-info][data-expand-index] [data-separator-content]{border-top-left-radius:unset;border-bottom-left-radius:unset}}[data-additions]{& [data-content] [data-separator=line-info]{background-color:var(--diffs-bg);& [data-separator-wrapper]{display:none}}& [data-gutter] [data-separator=line-info] [data-separator-wrapper]{background-color:var(--diffs-bg-separator);border-top-right-radius:6px;border-bottom-right-radius:6px;height:100%;display:block;& [data-separator-content],& [data-expand-button]{display:none}}}[data-overflow=scroll] [data-additions] [data-gutter] [data-separator=line-info] [data-separator-wrapper]{width:calc(100cqi - var(--diffs-gap-inline,var(--diffs-gap-fallback)))}[data-overflow=wrap] [data-additions] [data-content] [data-separator=line-info] [data-separator-wrapper]{background-color:var(--diffs-bg-separator);height:100%;margin-right:var(--diffs-gap-inline,var(--diffs-gap-fallback));border-top-right-radius:6px;border-bottom-right-radius:6px;display:block;& [data-separator-content],& [data-expand-button]{display:none}}[data-separator=line-info] [data-separator-wrapper]{& [data-expand-both],& [data-expand-down],& [data-expand-up]{border-top-left-radius:6px;border-bottom-left-radius:6px}}@media (pointer:fine){[data-separator=line-info] [data-separator-wrapper]{&[data-separator-multi-button]{& [data-expand-up]{border-top-left-radius:6px;border-bottom-left-radius:unset}& [data-expand-down]{border-bottom-left-radius:6px;border-top-left-radius:unset}}}}}@media (pointer:coarse){[data-separator=line-info-basic] [data-separator-wrapper][data-separator-multi-button]{grid-template-columns:34px 34px auto;& [data-separator-content]{grid-column:unset;grid-row:unset}}@supports (width:1cqi){[data-separator=line-info] [data-separator-wrapper]{& [data-expand-both],& [data-expand-down],& [data-expand-up]{border-top-left-radius:6px;border-bottom-left-radius:6px}&[data-separator-multi-button]{& [data-expand-up]{border-top-left-radius:6px;border-bottom-left-radius:6px}& [data-expand-down]{border-bottom-left-radius:unset;border-top-left-radius:unset}}}}}@media (pointer:fine){[data-separator-wrapper][data-separator-multi-button]{grid-template-rows:50% 50%;display:grid;& [data-separator-content]{grid-area:1/2/-1;min-width:min-content}& [data-expand-button]{grid-column:1}}[data-separator=line-info] [data-separator-wrapper],[data-separator=line-info] [data-separator-wrapper][data-separator-multi-button]{grid-template-columns:34px auto}[data-separator=line-info-basic][data-expand-index] [data-separator-wrapper]{grid-template-columns:100% auto}[data-separator=line-info],[data-separator=line-info-basic]{& [data-separator-multi-button]{& [data-expand-up]{border-bottom:1px solid var(--diffs-bg);border-right:2px solid var(--diffs-bg)}& [data-expand-down]{border-top:1px solid var(--diffs-bg);border-right:2px solid var(--diffs-bg)}}}}[data-additions] [data-gutter] [data-separator-wrapper],[data-additions] [data-separator=line-info-basic] [data-separator-wrapper],[data-content] [data-separator-wrapper]{display:none}[data-line-annotation]{min-height:var(--diffs-annotation-min-height,0);z-index:2}[data-merge-conflict-actions]{z-index:2}[data-separator=custom]{grid-template-columns:subgrid;display:grid}[data-line],[data-column-number],[data-no-newline]{padding-inline:1ch;position:relative}[data-indicators=classic] [data-line]{padding-inline-start:2ch}[data-indicators=classic]{& [data-line-type=change-addition],& [data-line-type=change-deletion]{&[data-no-newline],&[data-line]{&:before{user-select:none;width:1ch;height:1lh;display:inline-block;position:absolute;top:0;left:0}}}& [data-line-type=change-addition]{&[data-line],&[data-no-newline]{&:before{content:"+";color:var(--diffs-addition-base)}}}& [data-line-type=change-deletion]{&[data-line],&[data-no-newline]{&:before{content:"-";color:var(--diffs-deletion-base)}}}}[data-indicators=bars]{& [data-line-type=change-deletion],& [data-line-type=change-addition]{&[data-column-number]{&:before{content:"";user-select:none;contain:strict;width:4px;height:100%;display:block;position:absolute;top:0;left:0}}}& [data-line-type=change-deletion]{&[data-column-number]{&:before{background-image:linear-gradient(0deg, var(--diffs-bg-deletion) 50%, var(--diffs-deletion-base) 50%);background-repeat:repeat;background-size:2px 2px;background-size:calc(1lh / round(1lh / 2px)) calc(1lh / round(1lh / 2px))}}}& [data-line-type=change-addition]{&[data-column-number]{&:before{background-color:var(--diffs-addition-base)}}}}[data-overflow=wrap]{& [data-line]{white-space:pre-wrap;word-break:break-word}& [data-annotation-content]{word-break:break-word}}[data-overflow=scroll] [data-line]{white-space:pre;min-height:1lh}[data-column-number]{box-sizing:content-box;text-align:right;user-select:none;color:var(--diffs-fg-number);padding-left:2ch}[data-line-number-content]{min-width:var(--diffs-min-number-column-width,var(--diffs-min-number-column-width-default,3ch));z-index:1;display:inline-block;position:relative}[data-disable-line-numbers]{& [data-gutter-buffer],& [data-column-number]{min-width:4px;padding:0;&:before{min-width:0}}& [data-line-number-content]{display:none}& [data-gutter-utility-slot]{right:unset;justify-content:flex-start;left:0}&[data-indicators=bars] [data-gutter-utility-slot]{left:6px}}[data-file][data-disable-line-numbers]{& [data-gutter-buffer],& [data-column-number]{border-right:0;min-width:0}}[data-diff-span]{box-decoration-break:clone;border-radius:3px}[data-line-type=change-addition] [data-diff-span]{background-color:var(--diffs-bg-addition-emphasis)}[data-line-type=change-deletion] [data-diff-span]{background-color:var(--diffs-bg-deletion-emphasis)}[data-merge-conflict=marker-start],[data-merge-conflict=marker-base],[data-merge-conflict=marker-separator],[data-merge-conflict=marker-end]{color:var(--diffs-fg);padding-left:1ch}[data-merge-conflict=marker-start],[data-merge-conflict=marker-end]{align-items:center;display:flex;&:after{color:var(--diffs-fg-conflict-marker);font-size:.75rem;font-style:normal;line-height:1.25rem;font-family:var(--diffs-header-font-family,var(--diffs-header-font-fallback));padding-left:1ch}}[data-merge-conflict=marker-start]:after{content:"(Current Change)"}[data-merge-conflict=marker-end]:after{content:"(Incoming Change)"}[data-merge-conflict-actions-content]{min-height:1.75rem;font-family:var(--diffs-header-font-family,var(--diffs-header-font-fallback));color:var(--diffs-fg);align-items:center;gap:.25rem;padding-inline:.5rem;font-size:.75rem;line-height:1.2;display:flex}[data-merge-conflict-action]{appearance:none;color:var(--diffs-fg-number);font:inherit;cursor:pointer;background:0 0;border:0;padding:0;font-style:normal}[data-merge-conflict-action]:hover{color:var(--diffs-fg)}[data-merge-conflict-action=current]:hover{color:var(--diffs-addition-base)}[data-merge-conflict-action=incoming]:hover{color:var(--diffs-modified-base)}[data-merge-conflict-action-separator]{color:var(--diffs-fg-number);opacity:.6;user-select:none}[data-diffs-header=default]{background-color:var(--diffs-bg);justify-content:space-between;align-items:center;gap:var(--diffs-gap-inline,var(--diffs-gap-fallback));min-height:calc(1lh + (var(--diffs-gap-block,var(--diffs-gap-fallback)) * 3));z-index:2;flex-direction:row;padding-inline:16px;display:flex;position:relative;top:0}[data-header-content]{align-items:center;gap:var(--diffs-gap-inline,var(--diffs-gap-fallback));white-space:nowrap;flex-direction:row;min-width:0;display:flex}[data-header-content] [data-prev-name],[data-header-content] [data-title]{text-overflow:ellipsis;white-space:nowrap;direction:rtl;min-width:0;overflow:hidden}[data-prev-name]{opacity:.7}[data-rename-icon]{fill:currentColor;flex-grow:0;flex-shrink:0}[data-diffs-header=default] [data-metadata]{white-space:nowrap;align-items:center;gap:1ch;display:flex}[data-diffs-header=default] [data-additions-count]{font-family:var(--diffs-font-family,var(--diffs-font-fallback));color:var(--diffs-addition-base)}[data-diffs-header=default] [data-deletions-count]{font-family:var(--diffs-font-family,var(--diffs-font-fallback));color:var(--diffs-deletion-base)}[data-change-icon]{fill:currentColor;flex-shrink:0}[data-change-icon=change],[data-change-icon=rename-pure],[data-change-icon=rename-changed]{color:var(--diffs-modified-base)}[data-change-icon=new]{color:var(--diffs-addition-base)}[data-change-icon=deleted]{color:var(--diffs-deletion-base)}[data-change-icon=file]{opacity:.6}[data-annotation-content]{z-index:2;isolation:isolate;white-space:normal;align-self:flex-start;min-width:0;display:flow-root;position:relative}[data-overflow=scroll] [data-annotation-content],[data-overflow=scroll] [data-merge-conflict-actions-content]{width:var(--diffs-column-content-width,auto);left:var(--diffs-column-number-width,0);position:sticky}[data-annotation-slot]{text-wrap-mode:wrap;word-break:normal;white-space-collapse:collapse}[data-gutter-utility-slot]{touch-action:none;justify-content:flex-end;display:flex;position:absolute;top:0;bottom:0;right:0}[data-utility-button]{appearance:none;cursor:pointer;width:1lh;height:1lh;font-size:var(--diffs-font-size,13px);line-height:var(--diffs-line-height,20px);background-color:var(--diffs-modified-base);color:var(--diffs-bg);fill:currentColor;z-index:4;touch-action:none;border:none;border-radius:4px;justify-content:center;align-items:center;margin-right:calc(-1lh + 1ch);padding:0;display:flex;position:relative;&:before{content:"";display:block;position:absolute;inset:0 0 0 -4px}}[data-decoration-bar-stack]{pointer-events:none;isolation:isolate;z-index:1;background-color:var(--diffs-decoration-bar-color,transparent);box-sizing:content-box;border-left:2px solid var(--diffs-bg);border-right:2px solid var(--diffs-bg);width:6px;position:absolute;top:0;bottom:0;right:-2px;[data-decoration-bar-depth="1"] &{background-color:color-mix(in lab, var(--diffs-bg) 20%, var(--diffs-decoration-bar-color,transparent))}[data-decoration-bar-depth="2"] &{background-color:color-mix(in lab, var(--diffs-bg) 45%, var(--diffs-decoration-bar-color,transparent))}[data-decoration-bar-depth="3"] &{background-color:color-mix(in lab, var(--diffs-bg) 65%, var(--diffs-decoration-bar-color,transparent))}[data-decoration-bar-start] &{border-top-left-radius:5px;border-top-right-radius:5px}[data-decoration-bar-end] &{z-index:3;border-bottom-right-radius:5px;border-bottom-left-radius:5px}}[data-placeholder]{contain:strict}[data-error-wrapper]{padding:var(--diffs-gap-block,var(--diffs-gap-fallback)) var(--diffs-gap-inline,var(--diffs-gap-fallback));scrollbar-width:none;max-height:400px;overflow:auto;& [data-error-message]{color:var(--diffs-deletion-base);font-size:18px;font-weight:700}& [data-error-stack]{color:var(--diffs-fg-number)}}}@layer theme,rendered,unsafe;
`;
var Dt;
function yi(e) {
  if (Dt != null) return Dt;
  const t = e.host;
  if (typeof HTMLElement < "u" && t instanceof HTMLElement && !t.isConnected) return;
  const n = document.createElement("div");
  n.setAttribute("data-code", ""), n.setAttribute(Ko, "true");
  const i = document.createElement("div");
  return i.style.position = "relative", i.style.width = "200%", i.style.height = "200%", n.appendChild(i), e.appendChild(n), Dt = Math.max(n.offsetHeight - n.clientHeight, 0), n.remove(), Dt;
}
function Mo(e) {
  const t = e == null ? "var(--diffs-scrollbar-gutter-fallback)" : `${e}px`;
  return `${ls}: ${t};`;
}
var Io = "@layer base, theme, rendered, unsafe;";
var Ef = new RegExp(`${Af(ls)}\\s*:\\s*[^;]+;`);
function Rf(e) {
  return `${Io}
@layer unsafe {
  ${e}
}`;
}
function Lf(e, t = "system", n) {
  const i = t === "system" ? "" : `
  color-scheme: ${t};`, r = Mo(n);
  return `${Io}
@layer rendered {
  :host {${i}
  ${r}
  ${e}
  }
}`;
}
function _f(e, t) {
  const n = Mo(t);
  return e.replace(Ef, n);
}
function Af(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
var Tf = /* @__PURE__ */ new WeakMap();
function Pi(e) {
  const t = Tf.get(e);
  return t ?? e;
}
function Mf({ code: e, pre: t, columnType: n, rowSpan: i, containerSize: r = false } = {}) {
  return e == null && (e = document.createElement("code"), e.setAttribute("data-code", ""), n != null && e.setAttribute(`data-${n}`, ""), t?.appendChild(e)), i != null ? e.style.setProperty("grid-row", `span ${i}`) : e.style.removeProperty("grid-row"), r ? e.setAttribute("data-container-size", "") : e.removeAttribute("data-container-size"), e;
}
function If(e, t) {
  if (t == null) return;
  const n = e.shadowRoot ?? e.attachShadow({ mode: "open" });
  n.innerHTML === "" && (n.innerHTML = t);
}
function Nf(e, { type: t, diffIndicators: n, disableBackground: i, disableLineNumbers: r, overflow: s, split: o, totalLines: a, customProperties: l }) {
  if (l != null) for (const c in l) {
    const u = l[c];
    u != null && e.setAttribute(c, `${u}`);
  }
  switch (t === "diff" ? (e.setAttribute("data-diff", ""), e.removeAttribute("data-file")) : (e.setAttribute("data-file", ""), e.removeAttribute("data-diff")), n) {
    case "bars":
    case "classic":
      e.setAttribute("data-indicators", n);
      break;
    case "none":
      e.removeAttribute("data-indicators");
  }
  return r ? e.setAttribute("data-disable-line-numbers", "") : e.removeAttribute("data-disable-line-numbers"), i ? e.removeAttribute("data-background") : e.setAttribute("data-background", ""), t === "diff" ? e.setAttribute("data-diff-type", o ? "split" : "single") : e.removeAttribute("data-diff-type"), e.setAttribute("data-overflow", s), e.style.setProperty("--diffs-min-number-column-width-default", `${`${a}`.length}ch`), e;
}
function Jr(e) {
  if (typeof HTMLStyleElement < "u" && e instanceof HTMLStyleElement) return true;
  const t = e.tagName ?? e.nodeName;
  return typeof t == "string" && t.toLowerCase() === "style";
}
var Pf;
function Of() {
  return Pf ??= "safari" in window && "pushNotification" in window.safari || /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function es(e, t, n) {
  const i = /* @__PURE__ */ new Map();
  for (const r of e) {
    const s = Pi(r);
    i.set(s, n?.slotNames.get(s) ?? t(r));
  }
  return {
    provided: e,
    current: e,
    slotNames: i
  };
}
function Ff(e, t, n) {
  for (const i of t) {
    const r = Pi(i);
    e.slotNames.has(r) || e.slotNames.set(r, n(i));
  }
  e.provided = t, e.current = t;
}
function Hf(e, t, n) {
  if (e == null) return n(t);
  const i = Pi(t);
  let r = e.slotNames.get(i);
  return r == null && (r = n(t), e.slotNames.set(i, r)), r;
}
function $f(e) {
  return e?.useTokenTransformer === true || e?.onTokenClick != null || e?.onTokenEnter != null || e?.onTokenLeave != null;
}
function ts(e) {
  return {
    theme: e?.theme,
    disableLineNumbers: e?.disableLineNumbers,
    overflow: e?.overflow,
    themeType: e?.themeType,
    collapsed: e?.collapsed,
    disableFileHeader: e?.disableFileHeader,
    disableVirtualizationBuffers: e?.disableVirtualizationBuffers,
    stickyHeader: e?.stickyHeader,
    preferredHighlighter: e?.preferredHighlighter,
    useCSSClasses: e?.useCSSClasses,
    useTokenTransformer: $f(e),
    tokenizeMaxLineLength: e?.tokenizeMaxLineLength,
    tokenizeMaxLength: e?.tokenizeMaxLength,
    unsafeCSS: e?.unsafeCSS,
    headerRenderMode: e?.renderCustomHeader != null ? "custom" : "default"
  };
}
function Df(e, t) {
  const n = e?.offsetHeight ?? 0;
  if (e == null || n === 0) {
    t();
    return;
  }
  e.style.minHeight = `${n}px`;
  try {
    t(), e.offsetHeight;
  } finally {
    e.style.minHeight = "";
  }
}
function Uf({ shadowRoot: e, currentNode: t, themeCSS: n }) {
  if (n.trim() === "") {
    t?.remove();
    return;
  }
  return t ??= zf(), t.textContent = n, t.parentNode !== e && e.appendChild(t), t;
}
function zf() {
  const e = document.createElement("style");
  return e.setAttribute(Vo, ""), e;
}
var Bf = class extends Error {
  constructor() {
    super("WorkerPoolManager: operation canceled because the pool terminated"), this.name = "WorkerPoolTerminatedError";
  }
};
var Gf = class extends Error {
  constructor() {
    super("WorkerPoolManager: operation canceled before the task completed"), this.name = "WorkerPoolTaskCanceledError";
  }
};
var Wf = class extends Error {
  constructor(e, t) {
    super(e, t), this.name = "WorkerPoolWorkerError";
  }
};
var jf = /* @__PURE__ */ new WeakSet();
function Vf(e) {
  return e instanceof Bf || e instanceof Gf;
}
function qf(e) {
  return Vf(e) || e instanceof Wf && jf.has(e);
}
if (typeof HTMLElement < "u" && customElements.get("diffs-container") == null) {
  let e;
  class t extends HTMLElement {
    constructor() {
      if (super(), this.shadowRoot != null) return;
      const i = this.attachShadow({ mode: "open" });
      e == null && (e = new CSSStyleSheet(), e.replaceSync(kf)), i.adoptedStyleSheets = [e];
    }
    connectedCallback() {
      const i = this.shadowRoot ?? this.attachShadow({ mode: "open" });
      yi(i);
    }
  }
  customElements.define(is, t);
}
var Kf = [""];
function Xf(e) {
  const t = { ...e };
  return delete t.cacheKey, t;
}
var Yf = -1;
var Wn;
var Qf = (Wn = class {
  constructor(e = { theme: me }, t, n = false) {
    p(this, "options");
    p(this, "workerManager");
    p(this, "isContainerManaged");
    p(this, "__id", `file:${++Yf}`);
    p(this, "type", "file");
    p(this, "fileContainer");
    p(this, "spriteSVG");
    p(this, "pre");
    p(this, "code");
    p(this, "bufferBefore");
    p(this, "bufferAfter");
    p(this, "themeCSSStyle");
    p(this, "appliedThemeCSS");
    p(this, "hasAdoptedThemeCSS", false);
    p(this, "unsafeCSSStyle");
    p(this, "appliedUnsafeCSS");
    p(this, "gutterUtilityContent");
    p(this, "errorWrapper");
    p(this, "placeHolder");
    p(this, "lastRenderedHeaderHTML");
    p(this, "cachedHeaderHTML");
    p(this, "appliedPreAttributes");
    p(this, "lastRowCount");
    p(this, "mounted", false);
    p(this, "headerElement");
    p(this, "headerCustom");
    p(this, "headerPrefix");
    p(this, "headerFilenameSuffix");
    p(this, "headerMetadata");
    p(this, "fileRenderer");
    p(this, "resizeManager");
    p(this, "interactionManager");
    p(this, "annotationCache", /* @__PURE__ */ new Map());
    p(this, "lineAnnotations", []);
    p(this, "managersDirty", false);
    p(this, "file");
    p(this, "editSession");
    p(this, "renderedFile");
    p(this, "renderRange");
    p(this, "enabled", true);
    p(this, "editor");
    p(this, "getAnnotationSlotName", (e2) => Hf(this.editSession?.annotations, e2, dt));
    p(this, "handleHighlightRender", () => {
      this.rerender();
    });
    p(this, "getHoveredLine", () => this.interactionManager.getHoveredLine());
    this.options = e, this.workerManager = t, this.isContainerManaged = n, this.fileRenderer = new mf(e, this.getAnnotationSlotName, this.handleHighlightRender, this.workerManager), this.resizeManager = new Eh(), this.interactionManager = new gh("file", Dr(e)), this.workerManager?.subscribeToThemeChanges(this);
  }
  rerender() {
    !this.enabled || this.file == null || this.render({
      file: this.file,
      forceRender: true,
      renderRange: this.renderRange
    });
  }
  getTheme() {
    return this.workerManager?.getFileRenderOptions().theme ?? this.options.theme ?? me;
  }
  getLatestFile(e = this.file) {
    return this.editSession?.file ?? e;
  }
  getRenderedFile() {
    return this.renderedFile;
  }
  getLatestAnnotations() {
    return this.editSession?.annotations?.current ?? this.lineAnnotations;
  }
  isNewAnnotations(e) {
    const t = this.editSession?.annotations;
    return e === this.lineAnnotations ? false : t == null || e !== t.provided && e !== t.current;
  }
  updateExternalFile(e, t) {
    if (O(this.file, e)) return false;
    const n = this.editSession != null;
    return this.file = e, n || this.editor != null ? this.installEditSession(e, n ? void 0 : this.editor?.__getDocumentContents(e), true) : this.editSession = void 0, this.editSession?.annotations != null && t != null && (this.lineAnnotations = t, this.editSession.annotations = es(t, dt, this.editSession.annotations)), true;
  }
  installEditSession(e, t, n = false) {
    const i = t == null || t.name === e.name && t.lang === e.lang && t.contents === e.contents, r = Xf(t ?? e);
    this.editSession = {
      file: r,
      externalReplacement: n && i,
      annotations: this.editSession?.annotations ?? es(this.lineAnnotations, dt)
    }, this.fileRenderer.beginEditSession(r, i ? e : void 0);
  }
  onThemeChange() {
    this.fileRenderer.clearRenderCache(), this.rerender();
  }
  setOptions(e) {
    e != null && (this.options = e, this.cachedHeaderHTML = void 0, this.syncInteractionOptions());
  }
  syncInteractionOptions() {
    this.interactionManager.setOptions(Dr(this.options));
  }
  mergeOptions(e) {
    this.options = {
      ...this.options,
      ...e
    };
  }
  setThemeType(e) {
    (this.options.themeType ?? "system") !== e && (this.mergeOptions({ themeType: e }), this.applyCachedThemeState(e));
  }
  applyCachedThemeState(e) {
    if (typeof this.options.theme == "string" || this.fileContainer == null || this.appliedThemeCSS == null) return false;
    const t = this.appliedThemeCSS.baseThemeType ?? e;
    return this.appliedThemeCSS.themeType === t ? false : (this.applyThemeState(this.fileContainer, this.appliedThemeCSS.themeStyles, e, this.appliedThemeCSS.baseThemeType), true);
  }
  hasThemeChanged() {
    return this.appliedThemeCSS != null && !Ni(this.appliedThemeCSS.theme, this.getTheme());
  }
  setLineAnnotations(e) {
    const t = this.editSession?.annotations;
    if (t == null) {
      this.lineAnnotations = e;
      return;
    }
    this.isNewAnnotations(e) && (this.lineAnnotations = e, Ff(t, e, dt));
  }
  syncEditSessionAnnotationsFromEditor(e) {
    const t = this.editSession?.annotations;
    return t == null || e === t.current ? false : (t.current = e, this.fileRenderer.setLineAnnotations(e), this.renderAnnotations(), true);
  }
  setSelectedLines(e, t) {
    this.interactionManager.setSelection(e, t);
  }
  setEditorActiveLine(e, t) {
    this.interactionManager.setEditorActiveLine(e, {
      lineNumberOnly: t?.lineNumberOnly,
      side: t?.side ?? "additions"
    });
  }
  getCodeScrollLeft() {
    return this.code?.scrollLeft ?? 0;
  }
  setCodeScrollLeft(e) {
    this.code != null && (this.code.scrollLeft = e);
  }
  __getEffectiveCodeOptions() {
    return {
      ...this.options,
      ...this.fileRenderer.getEffectiveCodeOptions()
    };
  }
  flushManagers() {
    if (!this.managersDirty || this.pre == null) {
      this.managersDirty = false;
      return;
    }
    const { overflow: e = "scroll" } = this.options;
    this.interactionManager.setup(this.pre), this.resizeManager.setup(this.pre, {
      disableAnnotations: e === "wrap",
      columnVariables: this.shouldApplyColumnVariables(e) ? "apply" : "measure"
    }), this.managersDirty = false;
  }
  shouldApplyColumnVariables(e) {
    return e === "scroll" && this.getLatestAnnotations().length > 0;
  }
  cleanUp(e = false) {
    const t = this.editor;
    this.emitPostRender(true), t?.cleanUp(e ? "recycle" : "discard"), e || (this.editor = void 0), this.resizeManager.cleanUp(), this.interactionManager.cleanUp(), this.managersDirty = false, this.workerManager?.unsubscribeToThemeChanges(this), this.renderRange = void 0, this.isContainerManaged || this.fileContainer?.remove(), this.fileContainer = void 0, this.mounted = false, e || (this.lineAnnotations = []), this.clearAuxiliaryNodes(), this.pre = void 0, this.code = void 0, this.bufferBefore?.remove(), this.bufferBefore = void 0, this.bufferAfter?.remove(), this.bufferAfter = void 0, this.appliedPreAttributes = void 0, this.lastRowCount = void 0, this.headerElement = void 0, this.headerPrefix = void 0, this.headerFilenameSuffix = void 0, this.headerMetadata = void 0, this.headerCustom = void 0, this.lastRenderedHeaderHTML = void 0, e || (this.cachedHeaderHTML = void 0), this.errorWrapper?.remove(), this.errorWrapper = void 0, this.spriteSVG = void 0, this.themeCSSStyle = void 0, this.appliedThemeCSS = void 0, this.hasAdoptedThemeCSS = false, this.unsafeCSSStyle = void 0, this.appliedUnsafeCSS = void 0, this.placeHolder?.remove(), this.placeHolder = void 0, e ? this.fileRenderer.recycle() : (this.fileRenderer.cleanUp(), this.workerManager = void 0, this.file = void 0, this.editSession = void 0, this.renderedFile = void 0), this.enabled = false;
  }
  virtualizedSetup() {
    this.enabled = true, this.workerManager?.subscribeToThemeChanges(this);
  }
  hydrate(e) {
    const { fileContainer: t, prerenderedHTML: n, preventEmit: i = false, file: r, lineAnnotations: s } = e;
    if (!this.enabled) throw new Error("File.hydrate: attempting to call hydrate after cleaned up");
    if (this.fileContainer != null) throw new Error("File.hydrate: hydrate can only be called before the instance has rendered or hydrated");
    this.hydrateElements(t, n);
    const o = this.editor != null;
    o || Zf(this.pre, r, this.options.collapsed) || Jf(this.headerElement, r, this.options.disableFileHeader) ? this.render({
      ...e,
      forceRender: o || e.forceRender,
      preventEmit: true
    }) : this.hydrationSetup({
      file: r,
      lineAnnotations: s
    }), i || this.emitPostRender();
  }
  hydrateElements(e, t) {
    this.fileContainer !== e && this.emitPostRender(true), If(e, t);
    for (const n of Array.from(e.shadowRoot?.children ?? [])) {
      if (n instanceof SVGElement) {
        this.spriteSVG = n;
        continue;
      }
      if (n instanceof HTMLElement) {
        if (n instanceof HTMLPreElement) {
          this.pre = n, this.appliedPreAttributes = void 0;
          continue;
        }
        if (n instanceof HTMLStyleElement && n.hasAttribute("data-theme-css")) {
          this.themeCSSStyle = n;
          continue;
        }
        if (n instanceof HTMLStyleElement && n.hasAttribute("data-unsafe-css")) {
          this.unsafeCSSStyle = n, this.appliedUnsafeCSS = n.textContent;
          continue;
        }
        if ("diffsHeader" in n.dataset) {
          this.headerElement = n, this.lastRenderedHeaderHTML = void 0;
          continue;
        }
      }
    }
    this.pre != null && (this.syncCodeNodeFromPre(this.pre), this.pre.removeAttribute("data-dehydrated")), this.fileContainer = e, this.hydrateMeasuredScrollbar();
  }
  hydrationSetup({ file: e, lineAnnotations: t }) {
    this.lineAnnotations = t ?? this.lineAnnotations, this.file = e, this.fileRenderer.setOptions(ts(this.options)), this.syncInteractionOptions(), this.pre != null && (this.fileRenderer.hydrate(e), this.renderedFile = e, this.renderAnnotations(), this.renderGutterUtility(), this.injectUnsafeCSS(), this.managersDirty = true, this.flushManagers());
  }
  getOrCreateLineCache(e = this.getLatestFile()) {
    return e != null ? this.fileRenderer.getOrCreateLineCache(e) : Kf;
  }
  updateBuffers(e) {
    this.pre != null && this.applyBuffers(this.pre, e);
  }
  syncRenderViewToEditor() {
    const { editor: e, fileContainer: t, renderRange: n } = this, i = this.getLatestAnnotations(), r = this.getLatestFile();
    if (e == null || t == null || r == null) return;
    const s = (c) => {
      !this.enabled || this.editor !== e || this.fileContainer !== t || this.getLatestFile() !== r || e.__syncRenderView({
        highlighter: c,
        fileContainer: t,
        file: r,
        lineAnnotations: i,
        renderRange: n,
        externalDocument: this.editSession?.externalReplacement === true
      });
    }, o = this.getTheme(), a = r.lang ?? Ue(r.name), l = fi({
      theme: o,
      lang: a
    });
    l != null ? s(l) : ko({
      themes: vn(o),
      langs: Array.from(/* @__PURE__ */ new Set(["text", a])),
      preferredHighlighter: this.workerManager?.getPreferredHighlighter() ?? this.options.preferredHighlighter
    }).then(s);
  }
  /** @internal The editor applied or edited past the pending external replacement. */
  __acknowledgeDocumentUpdate() {
    this.editSession != null && (this.editSession.externalReplacement = false);
  }
  /** @internal Settle annotations */
  __acceptEditorChange(e) {
    const { lineAnnotations: t } = e;
    t != null && this.syncEditSessionAnnotationsFromEditor(t);
  }
  emitEditChange(e) {
    const { onEditChange: t } = this.options;
    t?.(e);
  }
  /** @internal Plain files have no component-owned diff session state. */
  __captureDocumentSessionState() {
  }
  /** @internal Associate this component with its editor for a render lifecycle. */
  __attachEditor(e) {
    if (this.editor != null) throw new Error("File.__attachEditor: an editor is already attached");
    this.editor = e;
    const t = () => {
      this.editor = void 0, this.fileRenderer.endEditSession();
    };
    try {
      return this.resumeEditorRendering(e), t;
    } catch (n) {
      throw t(), n;
    }
  }
  /** @internal Resume rendering for the editor already associated with this component. */
  __resumeEditor(e) {
    if (this.editor !== e) throw new Error("File.__resumeEditor: editor association changed");
    this.resumeEditorRendering(e);
  }
  resumeEditorRendering(e) {
    this.editSession != null ? this.fileRenderer.beginEditSession(this.editSession.file) : this.file != null && this.installEditSession(this.file, e.__getDocumentContents(this.file));
    const t = this.editSession?.file;
    this.fileRenderer.editorRenderReady() ? (this.fileRenderer.fileCache === t && (this.renderedFile = t), this.syncRenderViewToEditor()) : this.rerender();
  }
  /**
  * @internal
  *
  * Ends the edit session and settles which file this component renders.
  * Requires the editor to be detached first. Does nothing when no session
  * exists, so callers can invoke it again safely after it has settled.
  *
  * `onEditComplete` receives the completed file, current external file, and
  * both annotation collections even when the final text is unchanged. In
  * `install` mode, accepting installs the completed file and its annotations;
  * rejecting or having no handler restores the external values. `discard`
  * mode always restores the external values. An accepted file cannot reuse
  * the replaced file's `cacheKey`.
  */
  __completeEditSession(e, t) {
    this.settleEditSession(t === "install", e);
  }
  settleEditSession(e, t) {
    const { editSession: n, file: i, lineAnnotations: r } = this;
    if (n == null || i == null) return;
    const { file: s, annotations: o } = n;
    if (this.editor != null) throw new Error("File.__completeEditSession: detach the editor before completing the session");
    const a = o?.current;
    let l, c = false, u;
    if (t == null) throw new Error("File.__completeEditSession: editor is required for completion");
    const d = { ...s }, h = {
      file: d,
      editor: t,
      originalFile: i,
      lineAnnotations: a,
      originalLineAnnotations: r
    };
    Object.freeze(h);
    try {
      if (t.__emitEditComplete(h), this.options.onEditComplete?.(h) === "accept") {
        if (d.cacheKey != null && d.cacheKey === i.cacheKey) throw new Error("File.__completeEditSession: an accepted file must not reuse the replaced file cacheKey");
        l = d;
      }
    } catch (y) {
      c = true, u = y;
    }
    e && l != null && (this.file = l, a != null && (this.lineAnnotations = a)), this.editSession = void 0;
    const { renderedFile: f, file: g } = this;
    if (this.fileRenderer.endEditSession(g), f != null && g != null && f !== g && O(f, g) && (this.renderedFile = g), e && this.fileContainer != null && this.rerender(), c) throw u;
  }
  applyDocumentChange(e, t) {
    const n = this.editSession?.file;
    if (n == null) throw new Error("File.applyDocumentChange: requires an active edit session");
    this.fileRenderer.beginEditSession(n), this.fileRenderer.applyDocumentChange(e), t != null && this.syncEditSessionAnnotationsFromEditor(t);
  }
  /** Update the session source without editor DOM, then rehighlight on return. */
  applySuspendedDocumentChange(e, t) {
    this.editSession != null && (this.applyDocumentChange(e, t), this.fileRenderer.clearRenderCache());
  }
  updateRenderCache(e, t, n) {
    const i = this.editSession?.file;
    if (i == null) throw new Error("File.updateRenderCache: requires an active edit session");
    this.fileRenderer.beginEditSession(i), this.fileRenderer.updateRenderCache(e, t, n?.lineCountChangeInFlight);
  }
  render({ file: e, fileContainer: t, forceRender: n = false, preventEmit: i = false, containerWrapper: r, deferManagers: s = false, lineAnnotations: o, renderRange: a }) {
    if (!this.enabled) throw new Error("File.render: attempting to call render after cleaned up");
    this.editor?.__postponeBgTokenizeToNextFrame();
    const { collapsed: l = false, themeType: c = "system" } = this.options, u = l ? void 0 : a, d = this.renderRange, h = this.hasThemeChanged(), f = o != null && (o.length > 0 || this.getLatestAnnotations().length > 0) ? this.isNewAnnotations(o) : false, g = !O(this.file, e);
    g && this.updateExternalFile(e, o);
    const y = this.getLatestFile(e) ?? e;
    if (!l && !n && _o(u, this.renderRange) && !g && !f && !h) {
      const b = this.applyCachedThemeState(c);
      return b && this.finalizeRender(), b;
    }
    this.renderRange = u, g && (this.cachedHeaderHTML = void 0), this.fileRenderer.setOptions(ts(this.options)), this.syncInteractionOptions(), o != null && this.setLineAnnotations(o), this.fileRenderer.setLineAnnotations(this.getLatestAnnotations());
    const { disableErrorHandling: v = false, disableFileHeader: m = false } = this.options;
    if (m && (this.headerElement != null && (this.headerElement.remove(), this.headerElement = void 0, this.lastRenderedHeaderHTML = void 0), this.clearHeaderSlots()), t = this.getOrCreateFileContainerNode(t, r), this.applyCachedThemeState(c), l) {
      this.removeRenderedCode(), this.clearAuxiliaryNodes();
      try {
        const b = this.fileRenderer.renderFile(y, Xo);
        b != null && this.applyThemeState(t, b.themeStyles, c, b.baseThemeType), b?.headerAST != null && this.applyHeaderToDOM(b.headerAST, t, b.file), this.renderedFile = b?.file ?? y, this.injectUnsafeCSS();
      } catch (b) {
        if (v) throw b;
        console.error(b), b instanceof Error && this.applyErrorToDOM(b, t);
      }
      return this.finalizeRender(), i || this.emitPostRender(), true;
    }
    try {
      const b = this.getOrCreatePreNode(t);
      if (!this.canPartiallyRender(n, f, g || h || !O(this.renderedFile, y)) || !this.applyPartialRender(y, d, u)) {
        const w = this.fileRenderer.renderFile(y, u);
        if (w == null)
          return this.workerManager?.isInitialized() === false && this.workerManager.isWorkingPool() && this.workerManager.initialize().catch(() => {
          }).then(() => this.rerender()), false;
        this.applyThemeState(t, w.themeStyles, c, w.baseThemeType), w.headerAST != null && this.applyHeaderToDOM(w.headerAST, t, w.file), this.applyFullRender(w, b), this.renderedFile = w.file;
      }
      this.applyBuffers(b, u), this.injectUnsafeCSS(), this.renderAnnotations(), this.renderGutterUtility(), this.managersDirty = true, s || this.flushManagers(), this.finalizeRender(), this.editor != null && this.syncRenderViewToEditor();
    } catch (b) {
      if (v) throw b;
      console.error(b), b instanceof Error && this.applyErrorToDOM(b, t);
    }
    return i || this.emitPostRender(), true;
  }
  finalizeRender() {
  }
  emitPostRender(e = false) {
    const { fileContainer: t, options: { onPostRender: n } } = this;
    if (e) {
      if (!this.mounted || (this.mounted = false, t == null)) return;
      n?.(t, this, "unmount");
      return;
    }
    if (t == null) return;
    const i = this.mounted ? "update" : "mount";
    this.mounted = true, n?.(t, this, i);
  }
  removeRenderedCode() {
    this.resizeManager.cleanUp(), this.interactionManager.cleanUp(), this.bufferBefore?.remove(), this.bufferBefore = void 0, this.bufferAfter?.remove(), this.bufferAfter = void 0, this.code?.remove(), this.code = void 0, this.pre?.remove(), this.pre = void 0, this.appliedPreAttributes = void 0, this.lastRowCount = void 0;
  }
  clearAuxiliaryNodes() {
    for (const { element: e } of this.annotationCache.values()) e.remove();
    this.annotationCache.clear(), this.gutterUtilityContent?.remove(), this.gutterUtilityContent = void 0;
  }
  canPartiallyRender(e, t, n) {
    return !(e || t || n);
  }
  renderPlaceholder(e) {
    if (this.fileContainer == null) return false;
    if (this.emitPostRender(true), this.cleanChildNodes(), this.placeHolder == null) {
      const t = this.fileContainer.shadowRoot ?? this.fileContainer.attachShadow({ mode: "open" });
      this.placeHolder = document.createElement("div"), this.placeHolder.dataset.placeholder = "", t.appendChild(this.placeHolder);
    }
    return this.setPlaceholderHeight(e);
  }
  setPlaceholderHeight(e) {
    return this.placeHolder == null ? false : (this.placeHolder.style.setProperty("height", `${e}px`), true);
  }
  async primeHighlightCache(e = this.file) {
    const { workerManager: t } = this;
    if (e == null || t == null || !t.isWorkingPool() || e.cacheKey == null || Kt(e)) return;
    const n = this.options.tokenizeMaxLength ?? 1e5;
    this.fileRenderer.getOrCreateLineCache(e).length > n || await t.primeFileHighlightCache(e).catch((i) => {
      qf(i) || console.error(i);
    });
  }
  cleanChildNodes() {
    this.resizeManager.cleanUp(), this.interactionManager.cleanUp(), this.clearAuxiliaryNodes(), this.bufferAfter?.remove(), this.bufferBefore?.remove(), this.code?.remove(), this.errorWrapper?.remove(), this.headerElement?.remove(), this.headerPrefix?.remove(), this.headerFilenameSuffix?.remove(), this.headerMetadata?.remove(), this.headerCustom?.remove(), this.pre?.remove(), this.spriteSVG?.remove(), this.themeCSSStyle?.remove(), this.unsafeCSSStyle?.remove(), this.bufferAfter = void 0, this.bufferBefore = void 0, this.code = void 0, this.errorWrapper = void 0, this.headerElement = void 0, this.headerPrefix = void 0, this.headerFilenameSuffix = void 0, this.headerMetadata = void 0, this.headerCustom = void 0, this.pre = void 0, this.spriteSVG = void 0, this.themeCSSStyle = void 0, this.appliedThemeCSS = void 0, this.hasAdoptedThemeCSS = false, this.unsafeCSSStyle = void 0, this.appliedUnsafeCSS = void 0, this.lastRenderedHeaderHTML = void 0, this.lastRowCount = void 0, this.mounted = false;
  }
  renderAnnotations() {
    if (this.isContainerManaged || this.fileContainer == null) {
      for (const { element: i } of this.annotationCache.values()) i.remove();
      this.annotationCache.clear();
      return;
    }
    const e = new Map(this.annotationCache), { renderAnnotation: t } = this.options, n = this.getLatestAnnotations();
    if (t != null && n.length > 0) for (const [i, r] of n.entries()) {
      const s = this.getAnnotationSlotName(r), o = `${i}-${s}`;
      let a = this.annotationCache.get(o);
      if (a == null || !yf(r, a.annotation)) {
        a?.element.remove();
        const l = t(r);
        if (l == null) continue;
        a = {
          element: Sf(s),
          annotation: r
        }, a.element.appendChild(l), this.fileContainer.appendChild(a.element), this.annotationCache.set(o, a);
      }
      e.delete(o);
    }
    for (const [i, { element: r }] of e.entries())
      this.annotationCache.delete(i), r.remove();
  }
  renderGutterUtility() {
    const { renderGutterUtility: e } = this.options;
    if (this.fileContainer == null || e == null) {
      this.gutterUtilityContent?.remove(), this.gutterUtilityContent = void 0;
      return;
    }
    const t = e(this.interactionManager.getHoveredLine);
    if (t != null && this.gutterUtilityContent != null) return;
    if (t == null) {
      this.gutterUtilityContent?.remove(), this.gutterUtilityContent = void 0;
      return;
    }
    const n = Cf();
    n.appendChild(t), this.fileContainer.appendChild(n), this.gutterUtilityContent = n;
  }
  injectUnsafeCSS() {
    const { unsafeCSS: e } = this.options, t = this.fileContainer?.shadowRoot;
    if (t != null) {
      if (e == null || e === "") {
        this.unsafeCSSStyle != null && (this.unsafeCSSStyle.remove(), this.unsafeCSSStyle = void 0), this.appliedUnsafeCSS = void 0;
        return;
      }
      this.unsafeCSSStyle?.parentNode === t && this.appliedUnsafeCSS === e || (this.unsafeCSSStyle ??= xf(), this.unsafeCSSStyle.parentNode !== t && t.appendChild(this.unsafeCSSStyle), this.unsafeCSSStyle.textContent = Rf(e), this.appliedUnsafeCSS = e);
    }
  }
  applyThemeState(e, t, n, i) {
    const r = e.shadowRoot ?? e.attachShadow({ mode: "open" }), s = i ?? n, o = this.getTheme(), a = typeof o == "string" ? o : { ...o }, l = yi(r);
    if (this.themeCSSStyle?.parentNode === r && this.appliedThemeCSS?.themeStyles === t && this.appliedThemeCSS.themeType === s && this.appliedThemeCSS.scrollbarGutter === l) {
      this.appliedThemeCSS.theme = a;
      return;
    }
    if (this.hasAdoptedThemeCSS && this.themeCSSStyle?.parentNode === r) {
      this.hasAdoptedThemeCSS = false, this.appliedThemeCSS = {
        theme: a,
        themeStyles: t,
        themeType: s,
        baseThemeType: i,
        scrollbarGutter: l
      };
      return;
    }
    this.themeCSSStyle = Uf({
      shadowRoot: r,
      currentNode: this.themeCSSStyle,
      themeCSS: Lf(t, s, l)
    }), this.appliedThemeCSS = this.themeCSSStyle != null ? {
      theme: a,
      themeStyles: t,
      themeType: s,
      baseThemeType: i,
      scrollbarGutter: l
    } : void 0;
  }
  hydrateMeasuredScrollbar() {
    const e = this.fileContainer?.shadowRoot;
    e == null || this.themeCSSStyle == null || (this.themeCSSStyle.textContent = _f(this.themeCSSStyle.textContent ?? "", yi(e)));
  }
  shouldGuardRebuildScroll() {
    return this.editor != null && Of();
  }
  applyFullRender(e, t) {
    this.cleanupErrorWrapper(), this.applyPreNodeAttributes(t, e);
    const n = this.code = Mf({ code: this.code }), i = this.fileRenderer.renderCodeAST(e);
    this.editor?.__captureFocusForDOMReplacement();
    const r = () => {
      if (n.childElementCount >= 2) for (let s = 0; s < 2; s++) {
        const o = n.children[s], a = i[s];
        o.innerHTML = Le(a.children), o.style.cssText = a.properties.style;
      }
      else n.innerHTML = Le(i);
      t.contains(n) || t.replaceChildren(n);
    };
    this.shouldGuardRebuildScroll() ? Df(t, r) : r(), this.lastRowCount = e.rowCount;
  }
  applyPartialRender(e, t, n) {
    if (t == null || n == null) return false;
    const { code: i } = this, r = i != null ? this.getColumns(i) : void 0;
    if (i == null || r == null) return false;
    const s = t.startingLine, o = n.startingLine, a = t.totalLines === 1 / 0 ? Number.POSITIVE_INFINITY : s + t.totalLines, l = n.totalLines === 1 / 0 ? Number.POSITIVE_INFINITY : o + n.totalLines, c = Math.max(s, o), u = Math.min(a, l);
    if (u <= c) return false;
    if (!this.trimDOMToOverlap(r.gutter, c, u) || !this.trimDOMToOverlap(r.content, c, u)) throw new Error("File.applyPartialRender: failed to trim to overlap");
    let { length: d } = r.content.children;
    const h = (v, m) => {
      if (!(m <= 0))
        return this.fileRenderer.renderFile(e, {
          startingLine: v,
          totalLines: m,
          bufferBefore: 0,
          bufferAfter: 0
        });
    }, f = o < c ? h(o, c - o) : void 0;
    if (f === void 0 && o < c) return false;
    const g = l === Number.POSITIVE_INFINITY ? Number.POSITIVE_INFINITY : Math.max(0, l - u), y = l > u ? h(u, g) : void 0;
    return y === void 0 && l > u ? false : (this.cleanupErrorWrapper(), f != null && (r.gutter.insertAdjacentHTML("afterbegin", this.fileRenderer.renderPartialHTML(f.gutterAST)), r.content.insertAdjacentHTML("afterbegin", this.fileRenderer.renderPartialHTML(f.contentAST)), d += f.rowCount), y != null && (r.gutter.insertAdjacentHTML("beforeend", this.fileRenderer.renderPartialHTML(y.gutterAST)), r.content.insertAdjacentHTML("beforeend", this.fileRenderer.renderPartialHTML(y.contentAST)), d += y.rowCount), this.lastRowCount !== d && (r.gutter.style.setProperty("grid-row", `span ${d}`), r.content.style.setProperty("grid-row", `span ${d}`), this.lastRowCount = d), true);
  }
  getColumns(e) {
    const t = e.children[0], n = e.children[1];
    if (!(!(t instanceof HTMLElement) || !(n instanceof HTMLElement) || t.dataset.gutter == null || n.dataset.content == null))
      return {
        gutter: t,
        content: n
      };
  }
  trimDOMToOverlap(e, t, n) {
    const i = this.getDOMBoundaryIndices(e, [t, n]), r = i.get(t) ?? e.children.length, s = i.get(n) ?? e.children.length;
    if (r > s) return false;
    for (let o = e.children.length - 1; o >= s; o -= 1) e.children[o]?.remove();
    for (let o = r - 1; o >= 0; o -= 1) e.children[o]?.remove();
    return true;
  }
  getDOMBoundaryIndices(e, t) {
    const n = [...new Set(t)].sort((a, l) => a - l), i = /* @__PURE__ */ new Map();
    if (n.length === 0) return i;
    let r = 0, s = n[r];
    const { children: o } = e;
    s === 0 && (i.set(0, 0), r += 1, s = n[r]);
    for (let a = 0; a < o.length; a += 1) {
      const l = o[a];
      if (!(l instanceof HTMLElement)) continue;
      const c = this.getLineIndexFromDOMNode(l);
      if (c != null) {
        for (; s != null && c >= s; )
          i.set(s, a), r += 1, s = n[r];
        if (r >= n.length) break;
      }
    }
    for (const a of n) i.has(a) || i.set(a, o.length);
    return i;
  }
  getLineIndexFromDOMNode(e) {
    const t = e.dataset.lineIndex;
    if (t == null) return;
    const n = Number(t);
    return Number.isNaN(n) ? void 0 : n;
  }
  applyBuffers(e, t) {
    if (t == null || this.shouldDisableVirtualizationBuffers()) {
      this.bufferBefore != null && (this.bufferBefore.remove(), this.bufferBefore = void 0), this.bufferAfter != null && (this.bufferAfter.remove(), this.bufferAfter = void 0);
      return;
    }
    t.bufferBefore > 0 ? (this.bufferBefore == null && (this.bufferBefore = document.createElement("div"), this.bufferBefore.dataset.virtualizerBuffer = "before", e.before(this.bufferBefore)), this.bufferBefore.style.setProperty("height", `${t.bufferBefore}px`), this.bufferBefore.style.setProperty("contain", "strict")) : this.bufferBefore != null && (this.bufferBefore.remove(), this.bufferBefore = void 0), t.bufferAfter > 0 ? (this.bufferAfter == null && (this.bufferAfter = document.createElement("div"), this.bufferAfter.dataset.virtualizerBuffer = "after", e.after(this.bufferAfter)), this.bufferAfter.style.setProperty("height", `${t.bufferAfter}px`), this.bufferAfter.style.setProperty("contain", "strict")) : this.bufferAfter != null && (this.bufferAfter.remove(), this.bufferAfter = void 0);
  }
  shouldDisableVirtualizationBuffers() {
    return this.options.disableVirtualizationBuffers ?? false;
  }
  applyHeaderToDOM(e, t, n) {
    this.cleanupErrorWrapper(), this.placeHolder?.remove(), this.placeHolder = void 0;
    const i = this.cachedHeaderHTML ?? Le(e);
    if (this.cachedHeaderHTML = i, i !== this.lastRenderedHeaderHTML) {
      const l = document.createElement("div");
      l.innerHTML = i;
      const c = l.firstElementChild;
      if (!(c instanceof HTMLElement)) return;
      this.headerElement != null ? t.shadowRoot?.replaceChild(c, this.headerElement) : t.shadowRoot?.prepend(c), this.headerElement = c, this.lastRenderedHeaderHTML = i;
    }
    if (this.isContainerManaged) return;
    const { renderHeaderPrefix: r, renderHeaderFilenameSuffix: s, renderCustomHeader: o, renderHeaderMetadata: a } = this.options;
    if (o != null) {
      const l = o(n) ?? void 0;
      this.headerCustom = this.upsertHeaderSlotElement(t, this.headerCustom, as, l), this.headerPrefix?.remove(), this.headerFilenameSuffix?.remove(), this.headerMetadata?.remove(), this.headerPrefix = void 0, this.headerFilenameSuffix = void 0, this.headerMetadata = void 0;
    } else {
      const l = r?.(n) ?? void 0, c = s?.(n) ?? void 0, u = a?.(n) ?? void 0;
      this.headerPrefix = this.upsertHeaderSlotElement(t, this.headerPrefix, rs, l), this.headerFilenameSuffix = this.upsertHeaderSlotElement(t, this.headerFilenameSuffix, ss, c), this.headerMetadata = this.upsertHeaderSlotElement(t, this.headerMetadata, os, u), this.headerCustom?.remove(), this.headerCustom = void 0;
    }
  }
  clearHeaderSlots() {
    this.headerPrefix?.remove(), this.headerFilenameSuffix?.remove(), this.headerMetadata?.remove(), this.headerCustom?.remove(), this.headerPrefix = void 0, this.headerFilenameSuffix = void 0, this.headerMetadata = void 0, this.headerCustom = void 0;
  }
  upsertHeaderSlotElement(e, t, n, i) {
    if (i == null) {
      t?.remove();
      return;
    }
    const r = t ?? this.createHeaderSlotElement(n);
    return t == null && e.appendChild(r), this.replaceHeaderSlotContent(r, i), r;
  }
  replaceHeaderSlotContent(e, t) {
    e.replaceChildren(), t instanceof Element ? e.appendChild(t) : e.innerText = `${t}`;
  }
  createHeaderSlotElement(e) {
    const t = document.createElement("div");
    return t.slot = e, t;
  }
  getOrCreateFileContainerNode(e, t) {
    const { fileContainer: n } = this, i = e ?? n ?? document.createElement("diffs-container"), r = n !== i;
    return n != null && r && this.editor?.__captureFocusForDOMReplacement(), r && this.emitPostRender(true), this.fileContainer = i, n != null && r && (this.lastRenderedHeaderHTML = void 0, this.headerElement = void 0), t != null && this.fileContainer.parentNode !== t && t.appendChild(this.fileContainer), r && this.adoptReusableShellElements(this.fileContainer), this.ensureSpriteSVG(this.fileContainer), this.fileContainer;
  }
  adoptReusableShellElements(e) {
    const { shadowRoot: t } = e;
    if (t != null)
      for (const n of t.children) n instanceof SVGElement ? this.spriteSVG ??= n : Jr(n) && n.hasAttribute("data-theme-css") ? (this.themeCSSStyle ??= n, this.hasAdoptedThemeCSS = true) : Jr(n) && n.hasAttribute("data-unsafe-css") && (this.unsafeCSSStyle ??= n, this.appliedUnsafeCSS ??= this.options.unsafeCSS ?? void 0);
  }
  ensureSpriteSVG(e) {
    const t = e.shadowRoot ?? e.attachShadow({ mode: "open" });
    if (this.spriteSVG == null) {
      const n = document.createElement("div");
      n.innerHTML = bf;
      const i = n.firstChild;
      i instanceof SVGElement && (this.spriteSVG = i);
    }
    this.spriteSVG != null && this.spriteSVG.parentNode !== t && t.appendChild(this.spriteSVG);
  }
  getOrCreatePreNode(e) {
    const t = e.shadowRoot ?? e.attachShadow({ mode: "open" });
    return this.pre == null ? (this.pre = document.createElement("pre"), this.appliedPreAttributes = void 0, this.code = void 0, t.appendChild(this.pre)) : this.pre.parentNode !== t && (this.editor?.__captureFocusForDOMReplacement(), e.shadowRoot?.appendChild(this.pre), this.appliedPreAttributes = void 0), this.placeHolder?.remove(), this.placeHolder = void 0, this.pre;
  }
  syncCodeNodeFromPre(e) {
    this.code = void 0;
    for (const t of Array.from(e.children))
      if (t instanceof HTMLElement && t.hasAttribute("data-code")) {
        this.code = t;
        return;
      }
  }
  applyPreNodeAttributes(e, { totalLines: t }) {
    const { overflow: n = "scroll", disableLineNumbers: i = false } = this.options, r = {
      type: "file",
      split: false,
      overflow: n,
      disableLineNumbers: i,
      diffIndicators: "none",
      disableBackground: true,
      totalLines: t
    };
    vf(r, this.appliedPreAttributes) || (Nf(e, r), this.appliedPreAttributes = r);
  }
  applyErrorToDOM(e, t) {
    this.cleanupErrorWrapper(), this.pre?.remove(), this.pre = void 0, this.appliedPreAttributes = void 0;
    const n = t.shadowRoot ?? t.attachShadow({ mode: "open" });
    this.errorWrapper ??= document.createElement("div"), this.errorWrapper.dataset.errorWrapper = "", this.errorWrapper.textContent = "", n.appendChild(this.errorWrapper);
    const i = document.createElement("div");
    i.dataset.errorMessage = "", i.innerText = e.message, this.errorWrapper.appendChild(i);
    const r = document.createElement("pre");
    r.dataset.errorStack = "", r.innerText = e.stack ?? "No Error Stack", this.errorWrapper.appendChild(r);
  }
  cleanupErrorWrapper() {
    this.errorWrapper?.remove(), this.errorWrapper = void 0;
  }
}, p(Wn, "LoadedCustomComponent", true), Wn);
function Zf(e, t, n = false) {
  return !n && e == null && t != null;
}
function Jf(e, t, n = false) {
  return e == null && t != null && !n;
}
function ep(e) {
  return {
    ...wi,
    ...e
  };
}
function Ut(e, t) {
  return vi(e, t) + tp(e, t);
}
function vi(e, t) {
  return t ? 0 : e.diffHeaderHeight;
}
function tp(e, t) {
  return e.paddingTop ?? (t ? e.spacing : 0);
}
function ns(e) {
  return e.paddingBottom ?? e.spacing;
}
var np = 5e3;
var zt = /* @__PURE__ */ new Map();
var ip = -1;
function rp(e, t) {
  return (e.overflow ?? "scroll") !== (t.overflow ?? "scroll") || (e.collapsed ?? false) !== (t.collapsed ?? false) || (e.disableLineNumbers ?? false) !== (t.disableLineNumbers ?? false) || (e.disableFileHeader ?? false) !== (t.disableFileHeader ?? false) || e.unsafeCSS !== t.unsafeCSS;
}
var sp = class extends Qf {
  constructor(t, n, i = wi, r, s = false) {
    super(t, r, s);
    p(this, "virtualizer");
    p(this, "metrics");
    p(this, "__id", `virtualized-file:${++ip}`);
    p(this, "renderType", "virtualized");
    p(this, "top");
    p(this, "height", 0);
    p(this, "cache", {
      heights: /* @__PURE__ */ new Map(),
      checkpoints: [],
      fileAnnotationHeight: 0,
      ghostTextRows: zt
    });
    p(this, "pendingRender");
    p(this, "isVisible", false);
    p(this, "isSetup", false);
    p(this, "layoutDirty", true);
    p(this, "forceRenderOverride");
    p(this, "currentCollapsed");
    p(this, "onRender", (t2) => this.fileContainer == null || this.file == null ? false : (t2 && (this.top = this.getVirtualizedTop()), this.render({ file: this.file })));
    this.virtualizer = n, this.metrics = i;
  }
  setMetrics(t, n = false) {
    const i = ep(t);
    !n && gi(this.metrics, i) || (this.metrics = i, this.resetLayoutCache());
  }
  setLineAnnotations(t) {
    this.syncLineAnnotations(t) && (this.forceRenderOverride = true);
  }
  syncLineAnnotations(t) {
    return t == null || !this.isNewAnnotations(t) || t.length === 0 && this.getLatestAnnotations().length === 0 ? false : (super.setLineAnnotations(t), true);
  }
  syncEditSessionAnnotationsFromEditor(t) {
    return super.syncEditSessionAnnotationsFromEditor(t) ? (this.forceRenderOverride = true, true) : false;
  }
  hasLineAnnotations() {
    return this.getLatestAnnotations().some((t) => t.lineNumber > 0);
  }
  hasUniformLineHeights() {
    const { overflow: t = "scroll" } = this.options;
    return t === "scroll" && !this.hasLineAnnotations() && this.cache.heights.size === 0;
  }
  getLineHeight(t, n = false) {
    const i = this.cache.heights.get(t);
    if (i != null) return i;
    const r = n ? 2 : 1;
    return this.metrics.lineHeight * r;
  }
  setOptions(t) {
    if (this.isAdvancedMode()) throw new Error("VirtualizedFile.setOptions cannot be used inside CodeView. Update CodeView options instead.");
    if (t == null) return;
    const { options: n } = this, i = !uh(n, t), r = rp(n, t);
    super.setOptions(t), r && this.resetLayoutCache(true), i && (this.forceRenderOverride = true), i && this.virtualizer.instanceChanged(this, r);
  }
  setThemeType(t) {
    if (this.isAdvancedMode()) throw new Error("VirtualizedFile.setThemeType cannot be used inside CodeView. Update CodeView options instead.");
    super.setThemeType(t);
  }
  resetLayoutCache(t = false, n = true) {
    this.layoutDirty = true, this.cache.fileAnnotationHeight = 0, this.cache.heights.size > 0 && this.cache.heights.clear(), this.cache.checkpoints.length > 0 && (this.cache.checkpoints.length = 0), this.cache.ghostTextRows = zt, this.renderRange != null && n && (this.renderRange = void 0), t && this.isSimpleMode() && this.computeApproximateSize();
  }
  applyGhostTextRows(t) {
    const { heights: n, ghostTextRows: i } = this.cache;
    if (i === t) return false;
    const { lineHeight: r } = this.metrics;
    let s = false;
    for (const o of /* @__PURE__ */ new Set([...i.keys(), ...t.keys()])) {
      const a = i.get(o) ?? 0, l = t.get(o) ?? 0;
      if (l === a) continue;
      const c = (n.get(o) ?? r) - a * r + l * r;
      c === r ? n.delete(o) : n.set(o, c), s = true;
    }
    return this.cache.ghostTextRows = t, s;
  }
  reconcileHeights() {
    let t = false;
    if (this.fileContainer == null || this.getLayoutFile() == null)
      return this.height !== 0 && (t = true), this.height = 0, t;
    const { overflow: n = "scroll" } = this.options;
    this.top = this.getVirtualizedTop();
    const i = this.editor?.__getGhostTextRows() ?? zt;
    t = this.applyGhostTextRows(i);
    const r = n !== "scroll" || this.getLatestAnnotations().length > 0 || this.isResizeDebuggingEnabled();
    if (this.placeHolder != null || !r && this.cache.heights.size === 0 && this.cache.fileAnnotationHeight === 0)
      return t && (this.computeApproximateSize(true), this.setPlaceholderHeight(this.height)), t;
    const { lineHeight: s } = this.metrics;
    if (this.code == null) return t;
    const o = this.code.children[1];
    if (!(o instanceof HTMLElement)) return t;
    if (this.renderRange != null && To(this.renderRange)) {
      const a = op(o) ?? 0;
      a !== this.cache.fileAnnotationHeight && (this.cache.fileAnnotationHeight = a, t = true);
    }
    for (const a of o.children) {
      if (!(a instanceof HTMLElement)) continue;
      const l = a.dataset.lineIndex;
      if (l == null) continue;
      const c = Number(l), u = (i.get(c) ?? 0) * s, d = this.cache.heights.get(c);
      if (!r && (d == null || d === s + u)) continue;
      let h = a.getBoundingClientRect().height + u, f = false;
      a.nextElementSibling instanceof HTMLElement && ("lineAnnotation" in a.nextElementSibling.dataset || "noNewline" in a.nextElementSibling.dataset) && ("noNewline" in a.nextElementSibling.dataset && (f = true), h += a.nextElementSibling.getBoundingClientRect().height);
      const g = this.getLineHeight(c, f);
      h !== g && (t = true, h === this.metrics.lineHeight * (f ? 2 : 1) ? this.cache.heights.delete(c) : this.cache.heights.set(c, h));
    }
    return (t || this.isResizeDebuggingEnabled()) && this.computeApproximateSize(true), t;
  }
  updateCodeViewLayout(t, n, i, r) {
    const s = !O(this.file, t);
    s && this.updateExternalFile(t, r);
    const { pendingRenderFile: o, layoutFileChanged: a, renderedFileChanged: l, annotationsChanged: c } = this.updatePendingRender(t, r);
    let u = i?.resetFileLayoutCache === true || a;
    i?.metrics != null && (this.metrics = i.metrics, u = true);
    const { collapsed: d = false } = this.options;
    return this.currentCollapsed !== d && (this.currentCollapsed = d, u = true), u && this.resetLayoutCache(), s && (this.layoutDirty = true), !this.forceRenderOverride && (s || l || c) && (this.forceRenderOverride = true), this.top = n, this.computeApproximateSize(false, o), this.height;
  }
  getLayoutFile() {
    return this.pendingRender?.file ?? this.getRenderedFile();
  }
  getLinePosition(t) {
    const n = this.getLayoutFile();
    if (n == null || t < 1) return;
    const { disableFileHeader: i = false, collapsed: r = false } = this.options, s = this.fileRenderer.getLineCount(n) - 1;
    if (r) return {
      top: vi(this.metrics, i),
      height: 0
    };
    let o = Ut(this.metrics, i);
    if (s < 0) return {
      top: o,
      height: 0
    };
    const a = Math.min(Math.max(t - 1, 0), s), { lineHeight: l } = this.metrics;
    if (o += this.cache.fileAnnotationHeight, this.hasUniformLineHeights()) return {
      top: o + a * l,
      height: l
    };
    const c = this.getLayoutCheckpointBeforeLineIndex(a);
    o = c?.top ?? o;
    for (let u = c?.lineIndex ?? 0; u < a; u++) o += this.getLineHeight(u, false);
    return {
      top: o,
      height: this.getLineHeight(a, false)
    };
  }
  getEditorViewport() {
    return this.virtualizer.type === "simple" ? this.virtualizer.getRoot() : this.virtualizer.getContainerElement();
  }
  getNumericScrollAnchor(t) {
    const n = this.getLayoutFile();
    if (n == null || this.renderRange == null) return;
    const { disableFileHeader: i = false, collapsed: r = false } = this.options;
    if (r || this.renderRange.totalLines <= 0) return;
    const s = this.fileRenderer.getLineCount(n) - 1;
    if (s < 0) return;
    const o = Ut(this.metrics, i), a = Math.min(this.renderRange.startingLine, s), l = Math.min(a + this.renderRange.totalLines - 1, s);
    if (l < a) return;
    const { fileAnnotationHeight: c } = this.cache;
    if (this.hasUniformLineHeights()) {
      const { lineHeight: d } = this.metrics, h = o + (a === 0 ? c : this.renderRange.bufferBefore), f = a + Math.max(Math.ceil((t - h) / d), 0);
      return f > l ? void 0 : {
        lineNumber: f + 1,
        top: o + c + f * d
      };
    }
    let u = o + (a === 0 ? c : this.renderRange.bufferBefore);
    for (let d = a; d <= l; d++) {
      if (u >= t) return {
        lineNumber: d + 1,
        top: u
      };
      u += this.getLineHeight(d);
    }
  }
  getVirtualizedHeight() {
    return this.height;
  }
  getAdvancedStickySpecs(t) {
    const n = this.getLayoutFile();
    if (this.top == null || n == null) return;
    if (this.options.collapsed === true) return {
      topOffset: this.top,
      height: this.height
    };
    const i = t != null ? this.computeRenderRangeFromWindow(n, this.top, t) : this.renderRange;
    if (i == null) return;
    const { bufferBefore: r, bufferAfter: s, totalLines: o } = i;
    let a = 0;
    if (o === 0) {
      const l = t ?? this.virtualizer.getWindowSpecs();
      this.top < l.top && (a = s);
    }
    return {
      topOffset: this.top + r + a,
      height: this.height - (r + s)
    };
  }
  cleanUp(t = false) {
    const n = this.cache.ghostTextRows.size > 0;
    n && (this.layoutDirty = true);
    const i = t && this.isAdvancedMode() && this.fileContainer != null && (n || !O(this.getRenderedFile(), this.getLatestFile()));
    this.fileContainer != null && this.isSimpleMode() && this.getSimpleVirtualizer()?.disconnect(this.fileContainer), t || this.resetLayoutCache(), this.pendingRender = void 0, this.isSetup = false, super.cleanUp(t), i && this.virtualizer.instanceChanged(this, true);
  }
  computeApproximateSize(t = false, n = this.getLayoutFile()) {
    const i = this.isResizeDebuggingEnabled();
    if (!t && !this.layoutDirty && !i) return;
    const r = this.height === 0;
    if (this.height = 0, this.cache.checkpoints = [], n == null) {
      this.layoutDirty = false;
      return;
    }
    this.applyGhostTextRows(this.editor?.__getGhostTextRows() ?? zt);
    const { disableFileHeader: s = false, collapsed: o = false } = this.options, { lineHeight: a } = this.metrics, l = this.fileRenderer.getLineCount(n);
    if (o) {
      this.height += vi(this.metrics, s), this.layoutDirty = false;
      return;
    }
    const c = Ut(this.metrics, s), u = ns(this.metrics);
    if (this.height += c, this.height += this.cache.fileAnnotationHeight, this.hasUniformLineHeights()) this.height += l * a;
    else for (let d = 0; d < l; d++)
      this.addLayoutCheckpoint(d, this.height), this.height += this.getLineHeight(d, false);
    if (l > 0 && (this.height += u), this.fileContainer != null && i && !r) {
      const d = this.fileContainer.getBoundingClientRect();
      d.height !== this.height ? console.log("VirtualizedFile.computeApproximateSize: computed height doesnt match", {
        name: n.name,
        elementHeight: d.height,
        computedHeight: this.height
      }) : console.log("VirtualizedFile.computeApproximateSize: computed height IS CORRECT");
    }
    this.layoutDirty = false;
  }
  setVisibility(t) {
    this.isAdvancedMode() || this.fileContainer == null || (this.renderRange = void 0, t && !this.isVisible ? (this.top = this.getVirtualizedTop(), this.isVisible = true) : !t && this.isVisible && (this.isVisible = false, this.rerender()));
  }
  rerender() {
    if (!this.enabled || this.file == null) return;
    const t = this.getLatestFile(), n = t == null ? void 0 : this.fileRenderer.getFileForNextRender(t);
    this.isSimpleMode() && (this.pendingRender = void 0), this.forceRenderOverride = true, this.virtualizer.instanceChanged(this, !O(this.getRenderedFile(), n));
  }
  syncGhostTextRows() {
    const t = this.getAdvancedVirtualizer();
    t != null ? (t.capturePendingLayoutAnchor(), this.layoutDirty = true, t.instanceChanged(this, true)) : this.getSimpleVirtualizer()?.requestHeightReconcile(this);
  }
  applyDocumentChange(t, n, i = false) {
    const { renderRange: r } = this;
    this.getAdvancedVirtualizer()?.capturePendingLayoutAnchor(), super.applyDocumentChange(t, n), this.getSimpleVirtualizer()?.markDOMDirty(), this.resetLayoutCache(this.isSimpleMode(), false);
    const s = this.getRenderedFile();
    if (!this.isSimpleMode()) this.computeApproximateSize(true);
    else if (i && r != null && s != null) {
      const o = this.virtualizer.getWindowSpecs(), a = this.computeRenderRangeFromWindow(s, this.top ?? 0, o);
      a.bufferAfter !== r.bufferAfter && this.updateBuffers(a);
    }
    this.forceRenderOverride = true, this.virtualizer.instanceChanged(this, true);
  }
  render({ fileContainer: t, file: n, forceRender: i = false, lineAnnotations: r, ...s }) {
    const o = !O(this.file, n);
    o && (this.updateExternalFile(n, r), this.cachedHeaderHTML = void 0);
    const { pendingRenderFile: a, layoutFileChanged: l, renderedFileChanged: c, annotationsChanged: u } = this.pendingRender != null && this.pendingRender.latestFile === (this.getLatestFile(n) ?? n) ? {
      pendingRenderFile: this.pendingRender.file,
      layoutFileChanged: false,
      renderedFileChanged: false,
      annotationsChanged: this.syncLineAnnotations(r)
    } : this.updatePendingRender(n, r), { forceRenderOverride: d, isSetup: h } = this;
    if (this.forceRenderOverride = void 0, l && this.resetLayoutCache(), t = this.getOrCreateFileContainerNode(t), h)
      this.top ??= this.getVirtualizedTop(), this.layoutDirty && this.isSimpleMode() && (this.getSimpleVirtualizer()?.markDOMDirty(), this.computeApproximateSize(false, a));
    else {
      this.computeApproximateSize(false, a);
      const v = this.getSimpleVirtualizer();
      if (this.top ??= this.getVirtualizedTop(), this.isAdvancedMode()) this.isVisible = true;
      else {
        if (v == null) throw new Error("VirtualizedFile.render: simple virtualizer is not available");
        v.connect(t, this), this.isVisible = v.isInstanceVisible(this.top ?? 0, this.height);
      }
      this.isSetup = true;
    }
    if (!this.isVisible && this.isSimpleMode() && (!o || !h)) return this.renderPlaceholder(this.height);
    const f = this.virtualizer.getWindowSpecs(), g = this.top ?? 0, y = this.computeRenderRangeFromWindow(a, g, f);
    return super.render({
      file: n,
      fileContainer: t,
      renderRange: y,
      lineAnnotations: r,
      forceRender: (d ?? i) || u || c || o,
      ...s
    });
  }
  finalizeRender() {
    if (this.getRenderedFile() !== this.pendingRender?.file) throw new Error("VirtualizedFile.render: rendered a different file than its prepared layout");
    this.pendingRender = void 0, this.isSimpleMode() && this.getSimpleVirtualizer()?.requestHeightReconcile(this);
  }
  updatePendingRender(t, n) {
    const i = this.getLatestFile(t) ?? t, r = this.getRenderedFile(), s = this.pendingRender?.file ?? r, o = this.fileRenderer.getFileForNextRender(i);
    return this.pendingRender = {
      latestFile: i,
      file: o
    }, {
      pendingRenderFile: o,
      annotationsChanged: this.syncLineAnnotations(n),
      layoutFileChanged: !O(s, o),
      renderedFileChanged: !O(r, o)
    };
  }
  syncVirtualizedTop() {
    this.top = this.getVirtualizedTop();
  }
  shouldDisableVirtualizationBuffers() {
    return this.isAdvancedMode() || super.shouldDisableVirtualizationBuffers();
  }
  shouldGuardRebuildScroll() {
    return false;
  }
  isSimpleMode() {
    return this.virtualizer.type === "simple";
  }
  isAdvancedMode() {
    return this.virtualizer.type === "advanced";
  }
  addLayoutCheckpoint(t, n) {
    t % np === 0 && this.cache.checkpoints.push({
      lineIndex: t,
      top: n
    });
  }
  getLayoutCheckpointBeforeLineIndex(t) {
    if (t <= 0 || this.cache.checkpoints.length === 0) return;
    let n = 0, i = this.cache.checkpoints.length - 1, r;
    for (; n <= i; ) {
      const s = n + i >> 1, o = this.cache.checkpoints[s];
      if (o == null) throw new Error("VirtualizedFile: invalid checkpoint index");
      o.lineIndex <= t ? (r = o, n = s + 1) : i = s - 1;
    }
    return r;
  }
  getLayoutCheckpointBeforeTop(t, n) {
    let i = 0, r = this.cache.checkpoints.length - 1, s = -1;
    for (; i <= r; ) {
      const o = i + r >> 1, a = this.cache.checkpoints[o];
      if (a == null) throw new Error("VirtualizedFile: invalid checkpoint index");
      a.top <= t ? (s = o, i = o + 1) : r = o - 1;
    }
    if (n == null) return s >= 0 ? this.cache.checkpoints[s] : void 0;
    for (let o = s; o >= 0; o--) {
      const a = this.cache.checkpoints[o];
      if (a == null) throw new Error("VirtualizedFile: invalid checkpoint index");
      if (a.lineIndex % n === 0) return a;
    }
  }
  getVirtualizedTop() {
    return this.virtualizer.type === "advanced" ? this.virtualizer.getLocalTopForInstance(this) : this.fileContainer != null ? this.virtualizer.getOffsetInScrollContainer(this.fileContainer) : 0;
  }
  getSimpleVirtualizer() {
    return this.virtualizer.type === "simple" ? this.virtualizer : void 0;
  }
  getAdvancedVirtualizer() {
    return this.virtualizer.type === "advanced" ? this.virtualizer : void 0;
  }
  isResizeDebuggingEnabled() {
    return this.getSimpleVirtualizer()?.config.resizeDebugging ?? false;
  }
  computeRenderRangeFromWindow(t, n, { top: i, bottom: r }) {
    const { disableFileHeader: s = false } = this.options, { hunkLineCount: o, lineHeight: a } = this.metrics, l = this.fileRenderer.getLineCount(t), c = this.height, u = Ut(this.metrics, s), d = l > 0 ? ns(this.metrics) : 0, { fileAnnotationHeight: h } = this.cache, f = u + h, g = Math.max(0, c - u - h - d), y = df(this.getLatestAnnotations()), v = n + u, m = h > 0 && y && v < r && v + h > i;
    if (n < i - c || n > r) return {
      startingLine: 0,
      totalLines: 0,
      bufferBefore: 0,
      bufferAfter: c - u - d
    };
    if (l <= o) return {
      startingLine: 0,
      totalLines: o,
      bufferBefore: 0,
      bufferAfter: 0
    };
    const b = Math.ceil(Math.max(r - i, 0) / a), w = Math.ceil(b / o) * o + o, C = w / o, E = (i + r) / 2;
    if (this.hasUniformLineHeights()) {
      const Ge = n + f, Rt = Ge + g;
      if (!m && !(Ge < r && Rt > i)) return {
        startingLine: 0,
        totalLines: 0,
        bufferBefore: 0,
        bufferAfter: c - u - d
      };
      const it = Math.floor(m && E < n + f ? 0 : (E - (n + f)) / a), Te = Math.floor(it / o) - Math.floor(C / 2), Ho = Math.ceil(l / o), rt = Math.max(0, Math.min(Te, Ho)) * o, $i = Te < 0 ? w + Te * o : w, $o = rt === 0 ? 0 : h + rt * a, Do = Math.min($i, l - rt);
      return {
        startingLine: rt,
        totalLines: $i,
        bufferBefore: $o,
        bufferAfter: Math.max(0, (l - rt - Do) * a)
      };
    }
    const L = C, R = [], I = this.getLayoutCheckpointBeforeTop(Math.max(0, i - n - w * a * 2), o);
    let M = n + (I?.top ?? f), q = I?.lineIndex ?? 0, ye, W, ve;
    const Et = I?.lineIndex ?? 0;
    for (let Ge = Et; Ge < l; Ge++) {
      const Rt = q % o === 0, it = Math.floor(q / o);
      if (Rt && (R[it] = M - (n + f), ve != null)) {
        if (ve <= 0) break;
        ve--;
      }
      const Te = this.getLineHeight(Ge, false);
      M > i - Te && M < r && (ye ??= it), M + Te > E && (W ??= it), ve == null && M >= r && Rt && (ve = L), q++, M += Te;
    }
    if (ye == null)
      if (m)
        ye = 0, W = 0;
      else return {
        startingLine: 0,
        totalLines: 0,
        bufferBefore: 0,
        bufferAfter: c - u - d
      };
    W ??= ye;
    const Y = Math.round(W - C / 2), we = Math.max(0, Math.ceil(l / o) - C), Ae = Math.max(0, Math.min(Y, we)), Oi = Ae * o, Fi = Y < 0 ? w + Y * o : w, Po = R[Ae] ?? 0, Oo = Oi === 0 ? 0 : h + Po, Hi = Ae + Fi / o, Fo = Hi < R.length ? g - R[Hi] : g - (M - n - f);
    return {
      startingLine: Oi,
      totalLines: Fi,
      bufferBefore: Oo,
      bufferAfter: Math.max(0, Fo)
    };
  }
};
function op(e) {
  let t;
  for (const n of e.children)
    n instanceof HTMLElement && n.dataset.lineAnnotation === uf && (t = Math.max(t ?? 0, n.getBoundingClientRect().height));
  return t;
}
function ap(e, t) {
  return e == null || t == null ? e === t : e.top === t.top && e.bottom === t.bottom;
}
var No = 1e3;
var lp = No * 4;
var cp = [
  0,
  1e-6,
  0.99999,
  1
];
var up = {
  overscrollSize: No,
  intersectionObserverMargin: lp,
  resizeDebugging: false
};
var Bt = 0;
var dp = -1;
var B;
var hp = (B = class {
  constructor(t) {
    p(this, "__id", `virtualizer-${++dp}`);
    p(this, "config");
    p(this, "type", "simple");
    p(this, "intersectionObserver");
    p(this, "scrollTop", 0);
    p(this, "height", 0);
    p(this, "scrollHeight", 0);
    p(this, "windowSpecs", {
      top: 0,
      bottom: 0
    });
    p(this, "root");
    p(this, "contentContainer");
    p(this, "resizeObserver");
    p(this, "observers", /* @__PURE__ */ new Map());
    p(this, "visibleInstances", /* @__PURE__ */ new Map());
    p(this, "visibleInstancesDirty", false);
    p(this, "instancesChanged", /* @__PURE__ */ new Set());
    p(this, "reconcileQueue", /* @__PURE__ */ new Set());
    p(this, "scrollDirty", true);
    p(this, "heightDirty", true);
    p(this, "scrollHeightDirty", true);
    p(this, "renderedObservers", 0);
    p(this, "connectQueue", /* @__PURE__ */ new Map());
    p(this, "handleContainerResize", (t2) => {
      if (this.root == null) return;
      let n = false;
      for (const i of t2) {
        const r = i.borderBoxSize[0].blockSize;
        this.root instanceof Document ? r !== this.scrollHeight && (this.scrollHeightDirty = true, n = true, this.config.resizeDebugging && (console.log("Virtualizer: content size change", this.__id, {
          sizeChange: r - Bt,
          newSize: r
        }), Bt = r)) : i.target === this.root ? r !== this.height && (this.heightDirty = true, n = true) : i.target === this.contentContainer && (this.scrollHeightDirty = true, n = true, this.config.resizeDebugging && (console.log("Virtualizer: scroller size change", this.__id, {
          sizeChange: r - Bt,
          newSize: r
        }), Bt = r));
      }
      n && K(this.computeRenderRangeAndEmit);
    });
    p(this, "handleWindowResize", () => {
      B.__STOP || window.innerHeight === this.height || (this.heightDirty = true, K(this.computeRenderRangeAndEmit));
    });
    p(this, "handleWindowScroll", () => {
      B.__STOP || this.root == null || !(this.root instanceof Document) || (this.scrollDirty = true, K(this.computeRenderRangeAndEmit));
    });
    p(this, "handleElementScroll", () => {
      B.__STOP || this.root == null || this.root instanceof Document || (this.scrollDirty = true, K(this.computeRenderRangeAndEmit));
    });
    p(this, "computeRenderRangeAndEmit", () => {
      if (B.__STOP) return;
      const t2 = this.heightDirty || this.scrollHeightDirty;
      let n = this.instancesChanged.size > 0;
      if (this.instancesChanged.size === 0) {
        const s = Fr({
          scrollTop: this.getScrollTop(),
          height: this.getHeight(),
          scrollHeight: this.getScrollHeight(),
          overscrollSize: this.config.overscrollSize
        });
        if (!t2 && ap(this.windowSpecs, s) && this.renderedObservers === this.observers.size && !this.visibleInstancesDirty && this.reconcileQueue.size === 0) return;
        this.windowSpecs = s;
      }
      this.visibleInstancesDirty = false, this.renderedObservers = this.observers.size;
      const i = this.getScrollAnchor(this.height), r = /* @__PURE__ */ new Set();
      for (const s of t2 ? this.observers.values() : this.visibleInstances.values()) s.onRender(t2) && r.add(s);
      for (const s of this.instancesChanged)
        r.has(s) || s.onRender(t2) && r.add(s);
      this.scrollFix(i);
      for (const s of r)
        this.reconcileQueue.delete(s), s.reconcileHeights();
      for (const s of this.reconcileQueue) s.reconcileHeights() && (n = true);
      this.reconcileQueue.clear(), n ||= this.instancesChanged.size > 0, n && this.markDOMDirty(), (n || t2) && K(this.computeRenderRangeAndEmit), r.clear(), this.instancesChanged.clear();
    });
    p(this, "handleIntersectionChange", (t2) => {
      this.scrollDirty = true;
      for (const { target: n, isIntersecting: i } of t2) {
        if (!(n instanceof HTMLElement)) throw new Error("Virtualizer.handleIntersectionChange: target not an HTMLElement");
        const r = this.observers.get(n);
        r != null && (i && !this.visibleInstances.has(n) ? (r.setVisibility(true), this.visibleInstances.set(n, r), this.visibleInstancesDirty = true) : !i && this.visibleInstances.has(n) && (r.setVisibility(false), this.visibleInstances.delete(n), this.visibleInstancesDirty = true));
      }
      this.visibleInstancesDirty && K(this.computeRenderRangeAndEmit);
    });
    this.config = {
      ...up,
      ...t
    };
  }
  setup(t, n) {
    if (this.root == null) {
      this.root = t, this.resizeObserver = new ResizeObserver(this.handleContainerResize), this.intersectionObserver = new IntersectionObserver(this.handleIntersectionChange, {
        root: this.root,
        threshold: cp,
        rootMargin: `${this.config.intersectionObserverMargin}px 0px ${this.config.intersectionObserverMargin}px 0px`
      }), t instanceof Document ? this.setupWindow() : this.setupElement(n), window.__INSTANCE = this, window.__TOGGLE = () => {
        B.__STOP ? (B.__STOP = false, (this.getScrollContainerElement() ?? window).scrollTo({ top: B.__lastScrollPosition }), K(this.computeRenderRangeAndEmit)) : (B.__lastScrollPosition = this.getScrollTop(), B.__STOP = true);
      };
      for (const [i, r] of this.connectQueue.entries()) this.connect(i, r);
      this.connectQueue.clear(), this.markDOMDirty(), K(this.computeRenderRangeAndEmit);
    }
  }
  instanceChanged(t, n) {
    this.instancesChanged.add(t), n && this.markDOMDirty(), K(this.computeRenderRangeAndEmit);
  }
  requestHeightReconcile(t) {
    this.reconcileQueue.add(t), K(this.computeRenderRangeAndEmit);
  }
  getWindowSpecs() {
    return this.windowSpecs.top === 0 && this.windowSpecs.bottom === 0 && (this.windowSpecs = Fr({
      scrollTop: this.getScrollTop(),
      height: this.getHeight(),
      scrollHeight: this.getScrollHeight(),
      overscrollSize: this.config.overscrollSize
    })), this.windowSpecs;
  }
  getRoot() {
    return this.root;
  }
  isInstanceVisible(t, n) {
    const i = this.getScrollTop(), r = this.getHeight(), s = this.config.intersectionObserverMargin, o = i - s, a = i + r + s;
    return !(t < o - n || t > a);
  }
  setupWindow() {
    if (this.root == null || !(this.root instanceof Document)) throw new Error("Virtualizer.setupWindow: Invalid setup method");
    window.addEventListener("scroll", this.handleWindowScroll, { passive: true }), window.addEventListener("resize", this.handleWindowResize, { passive: true }), this.resizeObserver?.observe(this.root.documentElement);
  }
  setupElement(t) {
    if (this.root == null || this.root instanceof Document) throw new Error("Virtualizer.setupElement: Invalid setup method");
    this.root.addEventListener("scroll", this.handleElementScroll, { passive: true }), this.resizeObserver?.observe(this.root), t ??= this.root.firstElementChild ?? void 0, t instanceof HTMLElement && (this.contentContainer = t, this.resizeObserver?.observe(t));
  }
  cleanUp() {
    pi(this.computeRenderRangeAndEmit), this.resizeObserver?.disconnect(), this.resizeObserver = void 0, this.intersectionObserver?.disconnect(), this.intersectionObserver = void 0, this.root?.removeEventListener("scroll", this.handleElementScroll), window.removeEventListener("scroll", this.handleWindowScroll), window.removeEventListener("resize", this.handleWindowResize), this.root = void 0, this.contentContainer = void 0, this.observers.clear(), this.visibleInstances.clear(), this.instancesChanged.clear(), this.reconcileQueue.clear(), this.connectQueue.clear(), this.visibleInstancesDirty = false, this.windowSpecs = {
      top: 0,
      bottom: 0
    }, this.scrollTop = 0, this.height = 0, this.scrollHeight = 0, this.scrollDirty = true, this.heightDirty = true, this.scrollHeightDirty = true;
  }
  getOffsetInScrollContainer(t) {
    return this.getScrollTop() + at(t, this.getScrollContainerElement());
  }
  connect(t, n) {
    if (this.observers.has(t)) throw new Error("Virtualizer.connect: instance is already connected...");
    return this.intersectionObserver == null ? this.connectQueue.set(t, n) : (this.intersectionObserver.observe(t), this.observers.set(t, n), this.instancesChanged.add(n), this.markDOMDirty(), K(this.computeRenderRangeAndEmit)), () => this.disconnect(t);
  }
  disconnect(t) {
    const n = this.observers.get(t);
    this.connectQueue.delete(t), n != null && (this.intersectionObserver?.unobserve(t), this.observers.delete(t), this.instancesChanged.delete(n), this.reconcileQueue.delete(n), this.visibleInstances.delete(t) && (this.visibleInstancesDirty = true), this.markDOMDirty(), K(this.computeRenderRangeAndEmit));
  }
  scrollFix(t) {
    if (t == null) return;
    const n = this.getScrollContainerElement(), { lineIndex: i, lineOffset: r, fileElement: s, fileOffset: o, fileTypeOffset: a } = t;
    if (i != null && r != null) {
      const c = s.shadowRoot?.querySelector(`[data-line][data-line-index="${i}"]`);
      if (c instanceof HTMLElement) {
        const u = at(c, n);
        if (u !== r) {
          const d = u - r;
          this.applyScrollFix(d);
        }
        return;
      }
    }
    const l = at(s, n);
    if (a === "top")
      l !== o && this.applyScrollFix(l - o);
    else {
      const c = l + s.getBoundingClientRect().height;
      c !== o && this.applyScrollFix(c - o);
    }
  }
  applyScrollFix(t) {
    this.root == null || this.root instanceof Document ? window.scrollTo({
      top: window.scrollY + t,
      behavior: "instant"
    }) : this.root.scrollTo({
      top: this.root.scrollTop + t,
      behavior: "instant"
    }), this.markDOMDirty();
  }
  getScrollAnchor(t) {
    const n = this.getScrollContainerElement();
    let i;
    for (const [r] of this.visibleInstances.entries()) {
      const s = at(r, n), o = s + r.offsetHeight;
      let a, l;
      o <= 0 ? (a = o, l = "bottom") : (a = s, l = "top");
      let c, u;
      if (o > 0 && s < t) for (const h of r.shadowRoot?.querySelectorAll("[data-line][data-line-index]") ?? []) {
        if (!(h instanceof HTMLElement)) continue;
        const f = h.dataset.lineIndex;
        if (f == null) continue;
        const g = at(h, n);
        if (!(g < 0)) {
          c = f, u = g;
          break;
        }
      }
      if (i?.lineOffset != null && u == null) continue;
      let d = false;
      (i == null || u != null && (i.lineOffset == null || u < i.lineOffset) || u == null && i.lineOffset == null && (a >= 0 && (i.fileOffset < 0 || a < i.fileOffset) || a < 0 && i.fileOffset < 0 && a > i.fileOffset)) && (d = true), d && (i = {
        fileElement: r,
        fileTypeOffset: l,
        fileOffset: a,
        lineIndex: c,
        lineOffset: u
      });
    }
    return i;
  }
  /** Return the logical vertical position for the scroll container */
  getScrollTop() {
    if (!this.scrollDirty) return this.scrollTop;
    this.scrollDirty = false;
    let t = this.root == null ? 0 : this.root instanceof Document ? window.scrollY : this.root.scrollTop;
    return t = this.clampScrollTop(t), this.scrollTop = t, t;
  }
  /** Scroll to a logical vertical position and queue the normal render pass. */
  scrollTo({ top: t, behavior: n = "auto" }) {
    const { root: i } = this;
    if (i == null) return;
    const r = this.clampScrollTop(t);
    i instanceof Document ? window.scrollTo({
      top: r,
      behavior: n
    }) : i.scrollTo({
      top: r,
      behavior: n
    }), this.scrollDirty = true, K(this.computeRenderRangeAndEmit);
  }
  clampScrollTop(t) {
    return Math.max(0, Math.min(t, this.getScrollHeight() - this.getHeight()));
  }
  getScrollHeight() {
    return this.scrollHeightDirty ? (this.scrollHeightDirty = false, this.scrollHeight = this.root == null ? 0 : this.root instanceof Document ? this.root.documentElement.scrollHeight : this.root.scrollHeight, this.scrollHeight) : this.scrollHeight;
  }
  getHeight() {
    return this.heightDirty ? (this.heightDirty = false, this.height = this.root == null ? 0 : this.root instanceof Document ? globalThis.innerHeight : this.root.getBoundingClientRect().height, this.height) : this.height;
  }
  markDOMDirty() {
    this.scrollDirty = true, this.scrollHeightDirty = true, this.heightDirty = true;
  }
  getScrollContainerElement() {
    return this.root == null || this.root instanceof Document ? void 0 : this.root;
  }
}, p(B, "__STOP", false), p(B, "__lastScrollPosition", 0), B);
function at(e, t) {
  const n = e.getBoundingClientRect(), i = t?.getBoundingClientRect().top ?? 0;
  return n.top - i;
}
function fp(e) {
  const t = Ue(
    e.replace(/\.([^./\\]+)$/, (i) => i.toLowerCase())
  ), n = t === "yml" ? "yaml" : t === "kts" ? "kotlin" : t;
  return Object.hasOwn(Xt, n) ? n : "text";
}
function wp({
  path: e,
  content: t
}) {
  const n = Dm(), i = (0, import_react.useRef)(n);
  i.current = n;
  const r = (0, import_react.useRef)(n), s = (0, import_react.useRef)(null), o = (0, import_react.useRef)(void 0);
  return (0, import_react.useEffect)(() => {
    const a = s.current;
    if (!a) return;
    const l = document.createElement("div"), c = document.createElement(is);
    c.style.display = "block", c.style.minHeight = "1px", l.appendChild(c), a.replaceChildren(l);
    const u = new hp();
    let d;
    const h = () => {
      o.current = void 0, d?.cleanUp(), u.cleanUp(), a.replaceChildren();
    };
    try {
      u.setup(a, l), d = new sp(
        {
          theme: { light: "github-light", dark: "github-dark" },
          themeType: i.current,
          disableErrorHandling: true,
          preferredHighlighter: "shiki-js",
          overflow: "wrap",
          disableFileHeader: true,
          enableLineSelection: true,
          tokenizeMaxLength: 1e4
        },
        u
      ), o.current = d, r.current = i.current, d.render({
        file: {
          name: e,
          contents: t,
          lang: t.length > 1024 * 1024 ? "text" : fp(e)
        },
        fileContainer: c
      });
    } catch (f) {
      throw h(), f;
    }
    return h;
  }, [e, t]), (0, import_react.useEffect)(() => {
    r.current !== n && (o.current?.setThemeType(n), r.current = n);
  }, [n, e, t]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      ref: s,
      className: "h-full overflow-auto",
      "data-testid": "pierre-file-preview"
    }
  );
}
export {
  wp as default,
  fp as getPreviewLanguage
};
//# sourceMappingURL=PierreFilePreview-BKwQRLBv-FLEWWQV2.js.map
