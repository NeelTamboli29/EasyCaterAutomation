import {
  selectSvgElement
} from "./chunk-R3XDOAGX.js";
import {
  parse
} from "./chunk-SRZHELAZ.js";
import "./chunk-KLGA67TY.js";
import "./chunk-4NBDFMN4.js";
import "./chunk-XAFMLHTW.js";
import "./chunk-ZVIO4ZBR.js";
import "./chunk-SUEFYUTO.js";
import "./chunk-6X5GDVIY.js";
import "./chunk-QDUHJ4TL.js";
import "./chunk-R4UL3GE2.js";
import "./chunk-WS23J5PW.js";
import "./chunk-TVKFDQN4.js";
import "./chunk-RVBVVOCX.js";
import "./chunk-MRSYKRFX.js";
import "./chunk-QV2GTLXT.js";
import "./chunk-BETBNXFX.js";
import "./chunk-DZFZNLPT.js";
import "./chunk-UUSLGMQO.js";
import {
  configureSvgSize
} from "./chunk-RST6GEPC.js";
import {
  log
} from "./chunk-JQSOVCBC.js";
import {
  __name
} from "./chunk-5ETERJPX.js";
import "./chunk-QFQZKJEX.js";

// ../../node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-RXCK75RN.mjs
var parser = {
  parse: /* @__PURE__ */ __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};
var DEFAULT_INFO_DB = {
  version: "11.17.0" + (true ? "" : "-tiny")
};
var getVersion = /* @__PURE__ */ __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};
var draw = /* @__PURE__ */ __name((text, id, version) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };
var diagram = {
  parser,
  db,
  renderer
};
export {
  diagram
};
//# sourceMappingURL=infoDiagram-RXCK75RN-HL55NRFV.js.map
