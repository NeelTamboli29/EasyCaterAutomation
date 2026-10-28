// Force strict mode and setup for ESM
"use strict";
import{init_esbuild_shims}from"./chunk-VKDAXTCZ.js";import{__name}from"./chunk-KBWJGX7I.js";init_esbuild_shims();var NON_ASCII_RE=/[\u0080-\uffff]/;var TOKEN_ESTIMATE_UNITS_PER_TOKEN=20;function estimateTextTokens(text){if(!text||text.length===0){return 0}if(!NON_ASCII_RE.test(text)){return Math.ceil(text.length/4)}const nonAsciiChars=countNonAsciiChars(text);const asciiChars=text.length-nonAsciiChars;return Math.ceil(asciiChars/4+nonAsciiChars*1.1)}__name(estimateTextTokens,"estimateTextTokens");function estimateTextTokenUnits(text){if(!text||text.length===0){return 0}if(!NON_ASCII_RE.test(text)){return text.length*5}const nonAsciiChars=countNonAsciiChars(text);const asciiChars=text.length-nonAsciiChars;return asciiChars*5+nonAsciiChars*22}__name(estimateTextTokenUnits,"estimateTextTokenUnits");function countNonAsciiChars(text){let count=0;for(let i=0;i<text.length;i++){if(text.charCodeAt(i)>=128){count++}}return count}__name(countNonAsciiChars,"countNonAsciiChars");export{TOKEN_ESTIMATE_UNITS_PER_TOKEN,estimateTextTokens,estimateTextTokenUnits};
/**
 * @license
 * Copyright 2025 Qwen
 * SPDX-License-Identifier: Apache-2.0
 */
