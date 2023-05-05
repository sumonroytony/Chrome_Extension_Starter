/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/assets/tailwind.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/assets/tailwind.css ***!
  \*********************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  -webkit-font-feature-settings: normal;\n          font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.flex {\n  display: flex;\n}\n.h-\\[400px\\] {\n  height: 400px;\n}\n.w-\\[340px\\] {\n  width: 340px;\n}\n.transform {\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.flex-col {\n  flex-direction: column;\n}\n.justify-center {\n  justify-content: center;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.border {\n  border-width: 1px;\n}\n.bg-indigo-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(238 242 255 / var(--tw-bg-opacity));\n}\n.bg-slate-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 250 252 / var(--tw-bg-opacity));\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.text-indigo-600 {\n  --tw-text-opacity: 1;\n  color: rgb(79 70 229 / var(--tw-text-opacity));\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline {\n  outline-style: solid;\n}\n.filter {\n  -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-transform, -webkit-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.hover\\:bg-indigo-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(224 231 255 / var(--tw-bg-opacity));\n}\n", "",{"version":3,"sources":["webpack://./src/assets/tailwind.css","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/tailwind.css":
/*!*********************************!*\
  !*** ./src/assets/tailwind.css ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_tailwind_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./tailwind.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/assets/tailwind.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_tailwind_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_tailwind_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_tailwind_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_tailwind_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/tailwind.css */ "./src/assets/tailwind.css");
/* harmony import */ var _helpers_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/const */ "./src/helpers/const.ts");
/* harmony import */ var _helpers_connectMetamask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/connectMetamask */ "./src/helpers/connectMetamask.ts");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/providers/lib.esm/web3-provider.js");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.mjs");
/* harmony import */ var web3_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3-token */ "./node_modules/web3-token/dist/web3-token.umd.min.js");
/* harmony import */ var web3_token__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3_token__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _client_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/token */ "./src/client/token.ts");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client */ "./src/client/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



// import { ethers } from 'ethers';







function App() {
    var _this = this;
    var _a = react__WEBPACK_IMPORTED_MODULE_1___default().useState(''), account = _a[0], setAccount = _a[1];
    var _b = react__WEBPACK_IMPORTED_MODULE_1___default().useState(''), token = _b[0], setToken = _b[1];
    var _c = react__WEBPACK_IMPORTED_MODULE_1___default().useState({}), user = _c[0], setUser = _c[1];
    var _d = react__WEBPACK_IMPORTED_MODULE_1___default().useState(''), twitterId = _d[0], setTwitterId = _d[1];
    // chrome.runtime.onConnect.addListener((port) => {
    //   port.onMessage.addListener((message) => {
    //     if (message.type === 'sendMoney') {
    //       handleConnectToMetamask();
    //     }
    //   });
    // });
    var handleConnectToMetamask = function () {
        var _provider = (0,_helpers_connectMetamask__WEBPACK_IMPORTED_MODULE_4__.connectMetaMask)();
        var chainId = Number(_provider.chainId);
        if (chainId !== _helpers_const__WEBPACK_IMPORTED_MODULE_3__.AvaxTestNetChainId) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].error('Please connect to Avalanche Fuji Testnet');
            return;
        }
        // console.log(window.ethereum);
        var provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.Web3Provider(_provider);
        provider.send('eth_requestAccounts', []).then(function (accounts) { return __awaiter(_this, void 0, void 0, function () {
            var signer_1, token_1, user_1, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        signer_1 = provider.getSigner();
                        return [4 /*yield*/, web3_token__WEBPACK_IMPORTED_MODULE_6___default().sign(function (msg) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, signer_1.signMessage(msg)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); }, '1d')];
                    case 1:
                        token_1 = _a.sent();
                        setToken(token_1);
                        (0,_client_token__WEBPACK_IMPORTED_MODULE_7__.setAuthToken)(token_1);
                        return [4 /*yield*/, _client__WEBPACK_IMPORTED_MODULE_8__["default"].users.register()];
                    case 2:
                        user_1 = _a.sent();
                        setUser(user_1);
                        setAccount(accounts[0]);
                        setTwitterId(user_1.socials.twitter);
                        console.log(user_1);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].error('Please connect to Avalanche Fuji Testnet');
                        setAccount('');
                        setToken('');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    var handleTwitterConnect = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: 'flex flex-col justify-center h-[400px] w-[340px] bg-slate-50' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ type: 'button', className: 'rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100', onClick: handleConnectToMetamask }, { children: account ? 'Connected' : 'Connect to Metamask' })), account && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ type: 'button', className: 'rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100', onClick: handleTwitterConnect }, { children: twitterId ? 'Connected to ' + twitterId : 'Connect to Twitter' }))), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.Toaster, {})] })));
}
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./src/client/endpoints.ts":
/*!*********************************!*\
  !*** ./src/client/endpoints.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_ENDPOINTS": function() { return /* binding */ API_ENDPOINTS; }
/* harmony export */ });
var API_ENDPOINTS = {
    PRODUCTS_ALL: '/getputonsale',
    PRODUCTS: '/getPutonsalePerPage',
    PRODUCTS_DETAIL: '/getPutonlistAndAuctionlist',
    PRODUCTS_POPULAR: '/popular-products',
    PRODUCTS_FREE_DOWNLOAD: '/free-downloads/digital-file',
    PRODUCTS_REVIEWS: '/reviews',
    PRODUCTS_ADD_REVIEWS: '/addReview',
    PRODUCTS_MESSAGES: '/messages',
    PRODUCTS_ADD_MESSAGES: 'addMessage',
    PRODUCTS_REVIEWS_ABUSE_REPORT: '/abusive_reports',
    PRODUCTS_QUESTIONS: '/questions',
    PRODUCTS_ADD_QUESTIONS: '/add_questions',
    PRODUCTS_UPDATE: '/updateputonsale',
    PRODUCTS_FEEDBACK: '/feedbacks',
    LOG_ADD: '/addLog',
    CATEGORIES: '/categories',
    TAGS: '/tags',
    TYPES: '/types',
    SHOPS: '/shops',
    TOP_SHOPS: '/top-shops',
    ORDERS: '/orders',
    ORDERS_CHECKOUT_VERIFY: 'orders/checkout/verify',
    ORDERS_DOWNLOADS: '/downloads',
    GENERATE_DOWNLOADABLE_PRODUCT_LINK: '/downloads/digital-file',
    USERS: '/users',
    USERS_ME: '/userInfo',
    USERS_LOGIN: '/userInfo',
    USERS_REGISTER: '/register',
    USERS_FORGOT_PASSWORD: '/forget-password',
    USERS_VERIFY_FORGOT_PASSWORD_TOKEN: '/verify-forget-password-token',
    USERS_RESET_PASSWORD: '/reset-password',
    USERS_CHANGE_PASSWORD: '/change-password',
    USERS_LOGOUT: '/logout',
    USERS_WISHLIST: '/my-wishlists',
    WISHLIST: '/wishlists',
    USERS_WISHLIST_TOGGLE: '/wishlists/toggle',
    MY_REPORTS: '/my-reports',
    MY_QUESTIONS: '/my-questions',
    SETTINGS: '/settings',
    SETTINGS_CONTACT_US: '/contact-us',
    UPLOADS: '/attachments',
    FOLLOW_SHOP: 'follow-shop',
    FOLLOWED_SHOPS: 'followed-shops',
    FOLLOWED_SHOPS_PRODUCTS: 'followed-shops-popular-products',
    DISPUTES: '/disputes',
    ADD_DISPUTE: '/addDispute',
    UPDATE_DISPUTE: '/updateDispute',
    UPDATE_MILESTONE: '/updateMilestone',
    GET_SAMPLE_IMAGES: '/sample-images',
    SET_SAMPLE_IMAGES: '/set-sample-images',
};


/***/ }),

/***/ "./src/client/http-client.ts":
/*!***********************************!*\
  !*** ./src/client/http-client.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpClient": function() { return /* binding */ HttpClient; },
/* harmony export */   "useHTTPReq": function() { return /* binding */ useHTTPReq; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token */ "./src/client/token.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/const */ "./src/helpers/const.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




// TODO: Due to windows timeout was set to 15000
var Axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: _helpers_const__WEBPACK_IMPORTED_MODULE_3__.RestEndpoint,
    // timeout: 150000000,
    headers: {
        'Content-Type': 'application/json',
    },
});
axios__WEBPACK_IMPORTED_MODULE_0___default().interceptors.request.use(function (config) {
    var _a;
    // stuff
    if (!((_a = config.url) === null || _a === void 0 ? void 0 : _a.includes('nftstorage.link'))) {
        var token = (0,_token__WEBPACK_IMPORTED_MODULE_1__.getAuthToken)();
        config.headers = __assign(__assign({}, config.headers), { Authorization: "Bearer ".concat(token ? token : '') });
    }
    return config;
});
// Change request data/error here
Axios.interceptors.request.use(function (config) {
    var _a;
    if (!((_a = config.url) === null || _a === void 0 ? void 0 : _a.includes('nftstorage.link'))) {
        var token = (0,_token__WEBPACK_IMPORTED_MODULE_1__.getAuthToken)();
        config.headers = __assign(__assign({}, config.headers), { Authorization: "Bearer ".concat(token ? token : '') });
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
Axios.interceptors.response.use(function (response) { return response; }, function (error) {
    if ((error.response && error.response.status === 401) ||
        (error.response && error.response.status === 403) ||
        (error.response &&
            error.response.data.message === 'PIXER_ERROR.NOT_AUTHORIZED')) {
        (0,_token__WEBPACK_IMPORTED_MODULE_1__.removeAuthToken)();
    }
    return Promise.reject(error);
});
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.get = function (url, params) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Axios.get(url, { params: params })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    HttpClient.post = function (url, data, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Axios.post(url, data, options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    HttpClient.put = function (url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Axios.put(url, data)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    HttpClient.delete = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Axios.delete(url)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    HttpClient.formatSearchParams = function (params) {
        return Object.entries(params)
            .filter(function (_a) {
            var value = _a[1];
            return Boolean(value);
        })
            .map(function (_a) {
            var k = _a[0], v = _a[1];
            return ['type', 'categories', 'tags', 'author', 'manufacturer'].includes(k)
                ? "".concat(k, ".slug:").concat(v)
                : "".concat(k, ":").concat(v);
        })
            .join(';');
    };
    return HttpClient;
}());

function useHTTPReq() {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = _a[0], setIsLoading = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), error = _b[0], setError = _b[1];
    var sendRequest = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (reqConfig, executeFn) {
        return __awaiter(this, void 0, void 0, function () {
            var response, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setIsLoading(true);
                        setError(null);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_0___default()({
                                url: reqConfig.url,
                                method: reqConfig.method ? reqConfig.method : 'GET',
                                data: reqConfig.data ? reqConfig.data : {},
                            })];
                    case 2:
                        response = _a.sent();
                        executeFn(response.data);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        if (err_1.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                            // http.ClientRequest in node.js
                            setError(err_1.message || 'Request failed!');
                        }
                        else {
                            // Something happened in setting up the request that triggered an Error
                            setError(err_1.message || 'Something went wrong!');
                        }
                        return [3 /*break*/, 4];
                    case 4:
                        setIsLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    }, []);
    return {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest,
    };
}


/***/ }),

/***/ "./src/client/index.ts":
/*!*****************************!*\
  !*** ./src/client/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endpoints */ "./src/client/endpoints.ts");
/* harmony import */ var _http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-client */ "./src/client/http-client.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


var Client = /** @class */ (function () {
    function Client() {
        this.products = {
            all: function (_a) {
                if (_a === void 0) { _a = {}; }
                var 
                // categories,
                // tags,
                // name,
                // shop_id,
                // price,
                page = _a.page, query = __rest(_a, ["page"]);
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.PRODUCTS, __assign({ page: page }, query));
            },
            popular: function (params) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.PRODUCTS_POPULAR, __assign({ with: 'shop', withCount: 'orders' }, params));
            },
            get: function (_a) {
                var slug = _a.slug, language = _a.language;
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get("".concat(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.PRODUCTS, "/").concat(slug), {
                    language: language,
                    with: 'shop;tags;type',
                    withCount: 'orders',
                });
            },
            getPutonlistAndAuctionlist: function (_a) {
                var collectionId = _a.collectionId, tokenId = _a.tokenId, maker = _a.maker, key = _a.key, chainId = _a.chainId;
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get("".concat(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.PRODUCTS_DETAIL), {
                    collectionId: collectionId,
                    tokenId: tokenId,
                    maker: maker,
                    key: key,
                    chainId: chainId,
                });
            },
            download: function (input) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.PRODUCTS_FREE_DOWNLOAD, input);
            },
        };
        this.categories = {
            all: function (query) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.CATEGORIES, __assign({}, query));
            },
        };
        this.tags = {
            all: function (query) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.TAGS, query);
            },
            get: function (_a) {
                var slug = _a.slug, language = _a.language;
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get("".concat(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.TAGS, "/").concat(slug), { language: language });
            },
        };
        this.types = {
            all: function (query) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.TYPES, __assign({}, query));
            },
        };
        this.shops = {
            all: function (query) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.SHOPS, query);
            },
            top: function (_a) {
                if (_a === void 0) { _a = {}; }
                var name = _a.name, query = __rest(_a, ["name"]);
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.TOP_SHOPS, __assign(__assign({ searchJoin: 'and' }, query), { search: _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.formatSearchParams({
                        name: name,
                        is_active: 1,
                    }) }));
            },
            get: function (slug) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get("".concat(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.SHOPS, "/").concat(slug));
            },
        };
        this.orders = {
            all: function (query) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.ORDERS, query);
            },
            get: function (tracking_number) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get("".concat(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.ORDERS, "/").concat(tracking_number));
            },
            downloadable: function (query) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.ORDERS_DOWNLOADS, query);
            },
            generateDownloadLink: function (digital_file_id) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.GENERATE_DOWNLOADABLE_PRODUCT_LINK, {
                    digital_file_id: digital_file_id,
                });
            },
            verify: function (data) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.ORDERS_CHECKOUT_VERIFY, data);
            },
            create: function (data) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.ORDERS, data);
            },
        };
        this.users = {
            me: function () { return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.USERS_LOGIN); },
            update: function (user) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.put("".concat(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.USERS_REGISTER), user);
            },
            login: function () { return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.USERS_LOGIN); },
            register: function (input) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.USERS_REGISTER, input);
            },
            // forgotPassword: (input: ForgetPasswordInput) =>
            //   HttpClient.post<PasswordChangeResponse>(
            //     API_ENDPOINTS.USERS_FORGOT_PASSWORD,
            //     input
            //   ),
            // verifyForgotPasswordToken: (input: VerifyForgetPasswordTokenInput) =>
            //   HttpClient.post<PasswordChangeResponse>(
            //     API_ENDPOINTS.USERS_VERIFY_FORGOT_PASSWORD_TOKEN,
            //     input
            //   ),
            // resetPassword: (input: ResetPasswordInput) =>
            //   HttpClient.post<PasswordChangeResponse>(
            //     API_ENDPOINTS.USERS_RESET_PASSWORD,
            //     input
            //   ),
            // changePassword: (input: ChangePasswordInput) =>
            //   HttpClient.post<PasswordChangeResponse>(
            //     API_ENDPOINTS.USERS_CHANGE_PASSWORD,
            //     input
            //   ),
            logout: function () { return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.USERS_LOGOUT, {}); },
        };
        this.questions = {
            all: function (_a) {
                var question = _a.question, params = __rest(_a, ["question"]);
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.PRODUCTS_QUESTIONS, __assign(__assign({ searchJoin: 'and' }, params), { search: _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.formatSearchParams({
                        question: question,
                    }) }));
            },
            create: function (input) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.PRODUCTS_ADD_QUESTIONS, input);
            },
        };
        this.feedback = {
            create: function (input) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.PRODUCTS_FEEDBACK, input);
            },
        };
        this.abuse = {
            create: function (input) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.PRODUCTS_REVIEWS_ABUSE_REPORT, input);
            },
        };
        this.reviews = {
            all: function (_a) {
                var rating = _a.rating, params = __rest(_a, ["rating"]);
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.PRODUCTS_REVIEWS, __assign(__assign({ searchJoin: 'and', with: 'user' }, params), { search: _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.formatSearchParams({
                        rating: rating,
                    }) }));
            },
            get: function (_a) {
                var id = _a.id;
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get("".concat(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.PRODUCTS_REVIEWS, "/").concat(id));
            },
            create: function (input) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.PRODUCTS_ADD_REVIEWS, input);
            },
            update: function (input) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.put("".concat(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.PRODUCTS_REVIEWS, "/").concat(input.id), input);
            },
        };
        this.messages = {
            all: function (_a) {
                var params = __rest(_a, []);
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.PRODUCTS_MESSAGES, __assign({}, params));
            },
            get: function (_a) {
                var id = _a.id;
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get("".concat(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.PRODUCTS_REVIEWS, "/").concat(id));
            },
            create: function (input) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.PRODUCTS_ADD_MESSAGES, input);
            },
        };
        this.wishlist = {
            all: function (params) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.USERS_WISHLIST, __assign({ with: 'shop', orderBy: 'created_at', sortedBy: 'desc' }, params));
            },
            toggle: function (input) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.USERS_WISHLIST_TOGGLE, input);
            },
            remove: function (id) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient["delete"]("".concat(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.WISHLIST, "/").concat(id));
            },
            checkIsInWishlist: function (_a) {
                var product_id = _a.product_id;
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get("".concat(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.WISHLIST, "/in_wishlist/").concat(product_id));
            },
        };
        this.myQuestions = {
            all: function (params) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.MY_QUESTIONS, __assign({ with: 'user', orderBy: 'created_at', sortedBy: 'desc' }, params));
            },
        };
        this.myReports = {
            all: function (params) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.MY_REPORTS, __assign({ with: 'user', orderBy: 'created_at', sortedBy: 'desc' }, params));
            },
        };
        this.disputes = {
            all: function (params) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.DISPUTES, __assign({ with: 'user', orderBy: 'created_at', sortedBy: 'desc' }, params));
            },
            create: function (input) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.ADD_DISPUTE, input);
            },
            update: function (input) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.put(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.UPDATE_DISPUTE, input);
            },
        };
        this.milestone = {
            update: function (input) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.put(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.UPDATE_MILESTONE, input);
            },
        };
        this.follow = {
            shops: function (query) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.FOLLOWED_SHOPS, query);
            },
            isShopFollowed: function (input) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.FOLLOW_SHOP, input);
            },
            toggle: function (input) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.FOLLOW_SHOP, input);
            },
            followedShopProducts: function (params) {
                console.log(params);
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.FOLLOWED_SHOPS_PRODUCTS, __assign({}, params));
            },
        };
        this.settings = {
            all: function (params) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.SETTINGS, __assign({}, params));
            },
            contactUs: function (input) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.SETTINGS_CONTACT_US, input);
            },
            upload: function (input) {
                var formData = new FormData();
                input.forEach(function (attachment) {
                    formData.append('attachment[]', attachment);
                });
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.UPLOADS, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            },
        };
        this.sampleImages = {
            get: function (params) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.GET_SAMPLE_IMAGES, __assign({}, params));
            },
            set: function (input) {
                return _http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.SET_SAMPLE_IMAGES, input);
            },
        };
    }
    return Client;
}());
/* harmony default export */ __webpack_exports__["default"] = (new Client());


/***/ }),

/***/ "./src/client/token.ts":
/*!*****************************!*\
  !*** ./src/client/token.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAuthToken": function() { return /* binding */ getAuthToken; },
/* harmony export */   "removeAuthToken": function() { return /* binding */ removeAuthToken; },
/* harmony export */   "setAuthToken": function() { return /* binding */ setAuthToken; }
/* harmony export */ });
var authToken;
function setAuthToken(token) {
    authToken = token;
}
function getAuthToken() {
    return authToken;
}
function removeAuthToken() {
    authToken = undefined;
}


/***/ }),

/***/ "./src/helpers/connectMetamask.ts":
/*!****************************************!*\
  !*** ./src/helpers/connectMetamask.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connectMetaMask": function() { return /* binding */ connectMetaMask; }
/* harmony export */ });
var createProvider = __webpack_require__(/*! ./createProvider */ "./src/helpers/createProvider.ts");
var provider = createProvider();
function connectMetaMask() {
    if (provider)
        return provider;
}


/***/ }),

/***/ "./src/helpers/const.ts":
/*!******************************!*\
  !*** ./src/helpers/const.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvaxMainNet": function() { return /* binding */ AvaxMainNet; },
/* harmony export */   "AvaxTestNet": function() { return /* binding */ AvaxTestNet; },
/* harmony export */   "AvaxTestNetChainId": function() { return /* binding */ AvaxTestNetChainId; },
/* harmony export */   "RestEndpoint": function() { return /* binding */ RestEndpoint; },
/* harmony export */   "SendMoneySvg": function() { return /* binding */ SendMoneySvg; }
/* harmony export */ });
var AvaxTestNet = 'https://api.avax-test.network/ext/bc/C/rpc';
var AvaxMainNet = 'https://api.avax.network/ext/bc/C/rpc';
var AvaxTestNetChainId = 43113;
var RestEndpoint = 'http://localhost:5000';
var SendMoneySvg = '<svg width="18.75" height="18.75" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 488.783"><path fill="#2D2222" fill-rule="nonzero" d="M120.009 270.449l12.051-.014c63.731-.22 80.084-.266 144.202 39.975h52.865l.607.039c8.199.557 15.303 3.465 20.534 7.766 4.12 3.387 7.117 7.671 8.624 12.395 1.539 4.826 1.532 10.064-.369 15.239-2.039 5.543-6.262 11-13.1 15.713-10.245 7.505-22.03 11.037-34.651 12.374-12.143 1.283-25.049.51-38.085-.653-4.146-.202-6.802 1.433-7.954 3.646a6.495 6.495 0 00-.727 2.847 6.68 6.68 0 00.606 2.937c1.092 2.365 3.823 4.231 8.313 4.249l.329.014c3.377.248 7.065-.118 10.654-.465 2.851-.28 5.663-.557 8.494-.56 15.522-.011 29.622-1.483 41.658-5.965 11.593-4.316 21.385-11.501 28.832-23.02l7.983-18.636a4.658 4.658 0 012.235-2.362l80.598-39.96.61-.248c13.809-4.557 26.473-3.164 36.382 1.893 6.5 3.313 11.824 8.221 15.519 14.076 3.709 5.866 5.784 12.71 5.78 19.86-.003 10.114-4.146 20.806-13.653 30.197l-.536.454c-29.243 21.285-58.94 40.726-89.052 58.412-30.024 17.64-60.374 33.481-91.007 47.61-45.933 27.828-91.851 26.888-137.744.007l-59.998-30.928a16.679 16.679 0 01-4.904 11.795l-.529.479c-2.982 2.741-6.951 4.426-11.292 4.426H16.725c-4.585 0-8.76-1.88-11.792-4.905A16.588 16.588 0 010 437.32V268.736c0-4.582 1.883-8.763 4.922-11.802a16.577 16.577 0 0111.803-4.919h86.559a16.68 16.68 0 0111.817 4.905l.475.525c2.752 2.989 4.433 6.961 4.433 11.291v1.713z"/><path fill="#F6CD45" d="M317.148 0c75.35 0 136.432 61.083 136.432 136.432 0 75.35-61.082 136.432-136.432 136.432s-136.432-61.082-136.432-136.432C180.716 61.083 241.798 0 317.148 0z"/><path fill="#D19632" d="M317.148 23.867c62.168 0 112.565 50.398 112.565 112.565 0 62.168-50.397 112.565-112.565 112.565S204.583 198.6 204.583 136.432c0-62.167 50.397-112.565 112.565-112.565z"/><path fill="#DBA47B" fill-rule="nonzero" d="M121.148 279.819v147.578l63.369 32.68c42.858 25.183 85.713 26.094 128.531.092l.568-.312a1027.425 1027.425 0 0090.411-47.27c29.629-17.405 58.983-36.619 88.02-57.738 7.377-7.401 10.604-15.608 10.604-23.26 0-5.338-1.56-10.462-4.348-14.874-2.794-4.429-6.862-8.163-11.852-10.706-7.773-3.965-17.827-5.033-28.966-1.429l-78.68 39.009-7.444 17.374-.365.678c-8.682 13.607-20.115 22.058-33.673 27.104-13.224 4.926-28.381 6.54-44.921 6.554-2.27 0-4.909.262-7.579.525-4.057.393-8.206.801-12.264.486-8.525-.146-13.99-4.348-16.451-9.675a15.946 15.946 0 01-1.45-7.06 15.946 15.946 0 011.79-6.973c2.71-5.195 8.345-9.078 16.679-8.667l.184.018c12.579 1.127 25.006 1.886 36.51.67 11.075-1.171 21.331-4.213 30.084-10.625l.128-.088c5.167-3.54 8.284-7.448 9.695-11.289 1.156-3.149 1.174-6.312.256-9.188-.951-2.983-2.919-5.749-5.653-7.997-3.781-3.107-9.033-5.221-15.204-5.643h-54.188a4.792 4.792 0 01-2.493-.734c-62.813-39.542-78.421-39.485-140.386-39.276l-10.912.036z"/><path fill="#43494C" d="M16.725 259.147h86.559c5.277 0 9.593 4.316 9.593 9.589V437.32c0 5.277-4.316 9.589-9.593 9.589H16.725c-5.277 0-9.593-4.312-9.593-9.589V268.736c0-5.273 4.316-9.589 9.593-9.589z"/><path fill="#34393E" d="M112.877 333.785v103.534c0 5.278-4.316 9.594-9.594 9.594H16.726c-5.277 0-9.594-4.316-9.594-9.594v-21.535l105.745-81.999z"/><path fill="#A87927" d="M313.04 152.609c0 4.27-.976 8.211-2.945 11.76-1.96 3.545-4.889 6.402-8.731 8.523-3.841 2.117-8.643 3.185-14.357 3.185-2.756 0-5.282-.156-7.546-.448a36.551 36.551 0 01-6.522-1.464c-2.081-.669-4.234-1.585-6.455-2.737v-17.751c3.425 1.977 6.915 3.526 10.484 4.598 3.553 1.076 6.798 1.617 9.691 1.617 1.705 0 3.125-.252 4.206-.725 1.088-.476 1.908-1.148 2.441-1.96.54-.829.808-1.793.808-2.877 0-1.188-.308-2.249-.944-3.149-.625-.893-1.789-1.897-3.39-2.945-1.6-1.053-3.901-2.361-6.802-3.926a68.163 68.163 0 01-6.63-4.081c-1.965-1.364-3.658-2.905-5.042-4.598-1.384-1.7-2.485-3.693-3.237-5.942-.748-2.244-1.136-4.921-1.136-7.986 0-4.598 1.016-8.519 3.045-11.728 2.028-3.218 4.941-5.69 8.675-7.387 7.11-3.233 17.038-3.185 24.504-1.084a54.96 54.96 0 019.883 3.841l-5.406 15.373c-2.86-1.548-5.598-2.721-8.214-3.529-2.617-.808-5.062-1.204-7.319-1.204-1.48 0-2.693.208-3.633.636-.924.416-1.645 1.008-2.085 1.704-.456.717-.688 1.533-.688 2.466 0 1.204.352 2.28 1.016 3.2.669.921 1.877 1.949 3.597 2.998 1.729 1.052 4.198 2.476 7.387 4.165 3.289 1.736 6.082 3.561 8.351 5.494 2.256 1.928 4.021 4.189 5.202 6.75 1.18 2.557 1.792 5.63 1.792 9.211zm26.261 21.432l-.876-.053a86.362 86.362 0 01-6.01-.58 128.785 128.785 0 01-5.666-.88 72.8 72.8 0 01-5.274-1.157v-14.94c2.197.196 4.578.356 7.127.484 2.548.132 5.141.228 7.758.292 2.617.06 5.05.096 7.311.096.152-.004.316.004.468.004a24.84 24.84 0 004.865-.488 6.487 6.487 0 003.19-1.573 3.912 3.912 0 001.068-2.685c0-.072 0-.144-.004-.212v-1.136c.004-.076.004-.156.004-.232 0-1.177-.56-2.277-1.509-2.965a5.944 5.944 0 00-3.393-1.065H343.083c-7.499 0-13.185-1.648-17.058-4.946-3.87-3.301-5.798-8.822-5.786-16.573v-3.197c0-7.107 2.128-12.42 6.394-15.945 3.169-2.633 7.39-4.278 12.668-4.942v-7.607h10.468v7.399c1.316.068 2.632.176 3.829.308 2.637.288 5.202.648 7.555 1.06 2.357.412 4.485.88 6.354 1.309v14.937a264.466 264.466 0 00-10.031-.633c-3.722-.167-7.099-.248-10.136-.235h-.292c-1.525 0-3.045.131-4.546.388a5.98 5.98 0 00-3.293 1.544 4.602 4.602 0 00-1.176 3.069c0 .108.004.216.016.32v.976c-.008.105-.016.209-.016.313 0 1.292.56 2.516 1.536 3.365a7.515 7.515 0 004.182 1.276c.192 0 .384-.012.572-.024h6.394c.26-.004.532-.012.793-.012 3.657 0 7.262.884 10.499 2.577a16.838 16.838 0 016.782 7.031 21.558 21.558 0 012.277 9.631v3.593c0 6.138-1.068 10.824-3.201 14.061a15.696 15.696 0 01-9.111 6.534 45.363 45.363 0 01-9.015 1.525v8.318h-10.44v-8.33z"/><path fill="#FCD553" d="M309.782 149.359c0 4.27-.976 8.211-2.945 11.76-1.961 3.545-4.889 6.402-8.731 8.523-3.841 2.117-8.643 3.185-14.357 3.185-2.757 0-5.281-.156-7.546-.448a36.496 36.496 0 01-6.523-1.465c-2.08-.668-4.233-1.584-6.454-2.737v-17.75c3.426 1.977 6.915 3.526 10.484 4.598 3.553 1.076 6.798 1.616 9.691 1.616 1.705 0 3.125-.252 4.205-.724 1.089-.476 1.909-1.148 2.441-1.96.541-.829.809-1.793.809-2.877 0-1.189-.308-2.249-.945-3.149-.624-.893-1.788-1.897-3.389-2.945-1.6-1.053-3.901-2.361-6.802-3.926a68.163 68.163 0 01-6.63-4.081c-1.965-1.365-3.657-2.905-5.042-4.598-1.384-1.7-2.485-3.693-3.237-5.942-.748-2.245-1.137-4.921-1.137-7.987 0-4.597 1.017-8.518 3.046-11.727 2.028-3.218 4.941-5.69 8.674-7.387 3.742-1.701 8.215-2.549 13.397-2.549 3.941 0 7.655.492 11.108 1.465a54.96 54.96 0 019.883 3.841l-5.406 15.373c-2.861-1.548-5.598-2.721-8.215-3.529-2.617-.808-5.061-1.204-7.318-1.204-1.48 0-2.693.208-3.633.636-.925.416-1.645 1.008-2.085 1.704-.456.717-.688 1.533-.688 2.465 0 1.205.352 2.281 1.016 3.201.668.921 1.877 1.949 3.597 2.998 1.729 1.052 4.198 2.476 7.387 4.165 3.289 1.736 6.082 3.561 8.351 5.494 2.257 1.928 4.021 4.189 5.202 6.75 1.18 2.557 1.792 5.63 1.792 9.211zm26.269 21.432l-.876-.053a86.362 86.362 0 01-6.01-.58 128.552 128.552 0 01-5.666-.88 72.8 72.8 0 01-5.274-1.157V153.18c2.197.197 4.578.357 7.126.485 2.549.132 5.142.228 7.759.292 2.617.06 5.05.096 7.311.096.152-.004.316.004.468.004a24.84 24.84 0 004.865-.488 6.487 6.487 0 003.19-1.573 3.912 3.912 0 001.068-2.685c0-.072 0-.144-.004-.212v-1.137c.004-.076.004-.155.004-.232 0-1.176-.56-2.276-1.509-2.964a5.944 5.944 0 00-3.393-1.065h-5.278c-7.498 0-13.184-1.648-17.058-4.946-3.869-3.301-5.797-8.823-5.785-16.573v-3.197c0-7.107 2.128-12.42 6.394-15.946 3.169-2.633 7.39-4.277 12.668-4.941v-7.607h10.468v7.398a67.95 67.95 0 013.829.309c2.637.288 5.202.648 7.555 1.06 2.356.412 4.485.88 6.354 1.309v14.937a264.395 264.395 0 00-10.032-.633c-3.721-.168-7.098-.248-10.135-.236h-.292c-1.525 0-3.045.132-4.546.388a5.989 5.989 0 00-3.293 1.545 4.602 4.602 0 00-1.176 3.069c0 .108.004.216.016.32v.976a4.1 4.1 0 00-.016.313c0 1.292.56 2.516 1.536 3.365a7.515 7.515 0 004.181 1.276c.192 0 .385-.012.573-.024h6.394c.26-.004.532-.012.792-.012 3.658 0 7.262.884 10.5 2.577a16.841 16.841 0 016.782 7.03 21.56 21.56 0 012.277 9.632v3.593c0 6.138-1.069 10.824-3.201 14.06a15.693 15.693 0 01-9.111 6.535 45.289 45.289 0 01-9.015 1.524v8.319h-10.44v-8.33z"/></svg>';


/***/ }),

/***/ "./src/helpers/createProvider.ts":
/*!***************************************!*\
  !*** ./src/helpers/createProvider.ts ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var MetaMaskInpageProvider = (__webpack_require__(/*! @metamask/inpage-provider */ "./node_modules/@metamask/inpage-provider/dist/index.js").MetaMaskInpageProvider);
var PortStream = __webpack_require__(/*! extension-port-stream */ "./node_modules/extension-port-stream/dist/index.js");
var detect = (__webpack_require__(/*! detect-browser */ "./node_modules/detect-browser/index.js").detect);
var browser = detect();
var config = __webpack_require__(/*! ./config.json */ "./src/helpers/config.json");
module.exports = function createMetaMaskProvider() {
    var provider;
    try {
        var currentMetaMaskId = getMetaMaskId();
        var metamaskPort = chrome.runtime.connect(currentMetaMaskId);
        var pluginStream = new PortStream(metamaskPort);
        provider = new MetaMaskInpageProvider(pluginStream);
    }
    catch (e) {
        console.dir("Metamask connect error ", e);
        throw e;
    }
    return provider;
};
function getMetaMaskId() {
    switch (browser && browser.name) {
        case 'chrome':
            return config.CHROME_ID;
        case 'firefox':
            return config.FIREFOX_ID;
        default:
            return config.CHROME_ID;
    }
}


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.tsx");




var root = document.createElement('div');
root.className = 'container';
document.body.appendChild(root);
var rootDiv = react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(root);
rootDiv.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}) }));


/***/ }),

/***/ "?020a":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?1f78":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?8131":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?0ec7":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?c6c8":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?7874":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?ed1b":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?d17e":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "./src/helpers/config.json":
/*!*********************************!*\
  !*** ./src/helpers/config.json ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"CHROME_ID":"nkbihfbeogaeaoehlefnkodbefgpgknn","FIREFOX_ID":"webextension@metamask.io"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkthriftynft_extension"] = self["webpackChunkthriftynft_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_ethersproject_providers_lib_esm_web3-provider_js-node_modules_metamask_i-cd8430"], function() { return __webpack_require__("./src/index.tsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFB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TCxnREFBZ0Q7VUFDbE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi8uL3NyYy9hc3NldHMvdGFpbHdpbmQuY3NzIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uLy4vc3JjL2Fzc2V0cy90YWlsd2luZC5jc3M/NzU1YSIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uLy4vc3JjL2NsaWVudC9lbmRwb2ludHMudHMiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vLi9zcmMvY2xpZW50L2h0dHAtY2xpZW50LnRzIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uLy4vc3JjL2NsaWVudC9pbmRleC50cyIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi8uL3NyYy9jbGllbnQvdG9rZW4udHMiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vLi9zcmMvaGVscGVycy9jb25uZWN0TWV0YW1hc2sudHMiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vLi9zcmMvaGVscGVycy9jb25zdC50cyIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi8uL3NyYy9oZWxwZXJzL2NyZWF0ZVByb3ZpZGVyLnRzIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi9pZ25vcmVkfEM6XFxVc2Vyc1xcc3Vtb25cXE9uZURyaXZlXFxEZXNrdG9wXFx3b3Jrc3BhY2VcXHRocmlmdHluZnRfZXh0ZW5zaW9uXFxub2RlX21vZHVsZXNcXEBtZXRhbWFza1xcb2JqZWN0LW11bHRpcGxleFxcbm9kZV9tb2R1bGVzXFxyZWFkYWJsZS1zdHJlYW1cXGxpYlxcaW50ZXJuYWxcXHN0cmVhbXN8dXRpbCIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi9pZ25vcmVkfEM6XFxVc2Vyc1xcc3Vtb25cXE9uZURyaXZlXFxEZXNrdG9wXFx3b3Jrc3BhY2VcXHRocmlmdHluZnRfZXh0ZW5zaW9uXFxub2RlX21vZHVsZXNcXEBtZXRhbWFza1xcb2JqZWN0LW11bHRpcGxleFxcbm9kZV9tb2R1bGVzXFxyZWFkYWJsZS1zdHJlYW1cXGxpYnx1dGlsIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL2lnbm9yZWR8QzpcXFVzZXJzXFxzdW1vblxcT25lRHJpdmVcXERlc2t0b3BcXHdvcmtzcGFjZVxcdGhyaWZ0eW5mdF9leHRlbnNpb25cXG5vZGVfbW9kdWxlc1xcYm4uanNcXGxpYnxidWZmZXIiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vaWdub3JlZHxDOlxcVXNlcnNcXHN1bW9uXFxPbmVEcml2ZVxcRGVza3RvcFxcd29ya3NwYWNlXFx0aHJpZnR5bmZ0X2V4dGVuc2lvblxcbm9kZV9tb2R1bGVzXFxqc29uLXJwYy1taWRkbGV3YXJlLXN0cmVhbVxcbm9kZV9tb2R1bGVzXFxyZWFkYWJsZS1zdHJlYW1cXGxpYlxcaW50ZXJuYWxcXHN0cmVhbXN8dXRpbCIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi9pZ25vcmVkfEM6XFxVc2Vyc1xcc3Vtb25cXE9uZURyaXZlXFxEZXNrdG9wXFx3b3Jrc3BhY2VcXHRocmlmdHluZnRfZXh0ZW5zaW9uXFxub2RlX21vZHVsZXNcXGpzb24tcnBjLW1pZGRsZXdhcmUtc3RyZWFtXFxub2RlX21vZHVsZXNcXHJlYWRhYmxlLXN0cmVhbVxcbGlifHV0aWwiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vaWdub3JlZHxDOlxcVXNlcnNcXHN1bW9uXFxPbmVEcml2ZVxcRGVza3RvcFxcd29ya3NwYWNlXFx0aHJpZnR5bmZ0X2V4dGVuc2lvblxcbm9kZV9tb2R1bGVzXFxwdW1wfGZzIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL2lnbm9yZWR8QzpcXFVzZXJzXFxzdW1vblxcT25lRHJpdmVcXERlc2t0b3BcXHdvcmtzcGFjZVxcdGhyaWZ0eW5mdF9leHRlbnNpb25cXG5vZGVfbW9kdWxlc1xccmVhZGFibGUtc3RyZWFtXFxsaWJcXGludGVybmFsXFxzdHJlYW1zfHV0aWwiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vaWdub3JlZHxDOlxcVXNlcnNcXHN1bW9uXFxPbmVEcml2ZVxcRGVza3RvcFxcd29ya3NwYWNlXFx0aHJpZnR5bmZ0X2V4dGVuc2lvblxcbm9kZV9tb2R1bGVzXFxyZWFkYWJsZS1zdHJlYW1cXGxpYnx1dGlsIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9hbWQgb3B0aW9ucyIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiEgdGFpbHdpbmRjc3MgdjMuMy4yIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbVxcbiovLypcXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAvKiAyICovXFxufVxcblxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgLS10dy1jb250ZW50OiAnJztcXG59XFxuXFxuLypcXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxcbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXFxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXFxuNi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovIC8qIDMgKi9cXG4gIHRhYi1zaXplOiA0OyAvKiAzICovXFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiOyAvKiA0ICovXFxuICAtd2Via2l0LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsO1xcbiAgICAgICAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogNSAqL1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogNiAqL1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4qL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHIge1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cXG4qL1xcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXFxuKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYG1vbm9gIGZvbnQgZmFtaWx5IGJ5IGRlZmF1bHQuXFxuMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qXFxuUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxcbiovXFxuXFxudGFibGUge1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxcbiovXFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cXG4qL1xcbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qXFxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbjIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4qL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XFxuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxuXFxuOjotd2Via2l0LWJhY2tkcm9wIHtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcbiAgLS10dy1yb3RhdGU6IDA7XFxuICAtLXR3LXNrZXcteDogMDtcXG4gIC0tdHctc2tldy15OiAwO1xcbiAgLS10dy1zY2FsZS14OiAxO1xcbiAgLS10dy1zY2FsZS15OiAxO1xcbiAgLS10dy1wYW4teDogIDtcXG4gIC0tdHctcGFuLXk6ICA7XFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcXG4gIC0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcXG4gIC0tdHctb3JkaW5hbDogIDtcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcblxcbjo6YmFja2Ryb3Age1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XFxuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA2NDBweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAyNHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMjgwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDE1MzZweDtcXG4gIH1cXG59XFxuLnN0YXRpYyB7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbn1cXG4uZml4ZWQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG4uYWJzb2x1dGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaC1cXFxcWzQwMHB4XFxcXF0ge1xcbiAgaGVpZ2h0OiA0MDBweDtcXG59XFxuLnctXFxcXFszNDBweFxcXFxdIHtcXG4gIHdpZHRoOiAzNDBweDtcXG59XFxuLnRyYW5zZm9ybSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcXG59XFxuLmZsZXgtY29sIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnJvdW5kZWQtbWQge1xcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XFxufVxcbi5ib3JkZXIge1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxufVxcbi5iZy1pbmRpZ28tNTAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCAyNDIgMjU1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctc2xhdGUtNTAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCAyNTAgMjUyIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4ucHgtMyB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG4ucHktMiB7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuLnRleHQtc20ge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4uZm9udC1zZW1pYm9sZCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4udGV4dC1pbmRpZ28tNjAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYig3OSA3MCAyMjkgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnNoYWRvdy1zbSB7XFxuICAtLXR3LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiKDAgMCAwIC8gMC4wNSk7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDFweCAycHggMCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuLm91dGxpbmUge1xcbiAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxufVxcbi5maWx0ZXIge1xcbiAgLXdlYmtpdC1maWx0ZXI6IHZhcigtLXR3LWJsdXIpIHZhcigtLXR3LWJyaWdodG5lc3MpIHZhcigtLXR3LWNvbnRyYXN0KSB2YXIoLS10dy1ncmF5c2NhbGUpIHZhcigtLXR3LWh1ZS1yb3RhdGUpIHZhcigtLXR3LWludmVydCkgdmFyKC0tdHctc2F0dXJhdGUpIHZhcigtLXR3LXNlcGlhKSB2YXIoLS10dy1kcm9wLXNoYWRvdyk7XFxuICAgICAgICAgIGZpbHRlcjogdmFyKC0tdHctYmx1cikgdmFyKC0tdHctYnJpZ2h0bmVzcykgdmFyKC0tdHctY29udHJhc3QpIHZhcigtLXR3LWdyYXlzY2FsZSkgdmFyKC0tdHctaHVlLXJvdGF0ZSkgdmFyKC0tdHctaW52ZXJ0KSB2YXIoLS10dy1zYXR1cmF0ZSkgdmFyKC0tdHctc2VwaWEpIHZhcigtLXR3LWRyb3Atc2hhZG93KTtcXG59XFxuLnRyYW5zaXRpb24ge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIC13ZWJraXQtdHJhbnNmb3JtLCAtd2Via2l0LWZpbHRlciwgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCB0ZXh0LWRlY29yYXRpb24tY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtLCBmaWx0ZXIsIGJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyLCAtd2Via2l0LXRyYW5zZm9ybSwgLXdlYmtpdC1maWx0ZXIsIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXG59XFxuLmVhc2UtaW4tb3V0IHtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbn1cXG4uaG92ZXJcXFxcOmJnLWluZGlnby0xMDA6aG92ZXIge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCAyMzEgMjU1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3RhaWx3aW5kLmNzc1wiLFwiPG5vIHNvdXJjZT5cIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQWMsQ0FBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLHNCQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsbUJBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Ozs7OztDQUFjOztBQUFkO0VBQUEsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjLEVBQWQsTUFBYztFQUFkLFdBQWMsRUFBZCxNQUFjO0VBQWQsNE5BQWMsRUFBZCxNQUFjO0VBQWQscUNBQWM7VUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx5Q0FBYztVQUFkLGlDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG1CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsK0dBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxjQUFjO0VBQWQsY0FBYztFQUFkLGtCQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDtF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Y29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblwiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL3RhaWx3aW5kLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi90YWlsd2luZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9hc3NldHMvdGFpbHdpbmQuY3NzJztcclxuLy8gaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcclxuaW1wb3J0IHsgQXZheFRlc3ROZXRDaGFpbklkIH0gZnJvbSAnLi9oZWxwZXJzL2NvbnN0JztcclxuaW1wb3J0IHsgY29ubmVjdE1ldGFNYXNrIH0gZnJvbSAnLi9oZWxwZXJzL2Nvbm5lY3RNZXRhbWFzayc7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XHJcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSAncmVhY3QtaG90LXRvYXN0JztcclxuaW1wb3J0IFdlYjNUb2tlbiBmcm9tICd3ZWIzLXRva2VuJztcclxuaW1wb3J0IHsgc2V0QXV0aFRva2VuIH0gZnJvbSAnLi9jbGllbnQvdG9rZW4nO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJy4vY2xpZW50JztcclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBfYSA9IFJlYWN0LnVzZVN0YXRlKCcnKSwgYWNjb3VudCA9IF9hWzBdLCBzZXRBY2NvdW50ID0gX2FbMV07XHJcbiAgICB2YXIgX2IgPSBSZWFjdC51c2VTdGF0ZSgnJyksIHRva2VuID0gX2JbMF0sIHNldFRva2VuID0gX2JbMV07XHJcbiAgICB2YXIgX2MgPSBSZWFjdC51c2VTdGF0ZSh7fSksIHVzZXIgPSBfY1swXSwgc2V0VXNlciA9IF9jWzFdO1xyXG4gICAgdmFyIF9kID0gUmVhY3QudXNlU3RhdGUoJycpLCB0d2l0dGVySWQgPSBfZFswXSwgc2V0VHdpdHRlcklkID0gX2RbMV07XHJcbiAgICAvLyBjaHJvbWUucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoKHBvcnQpID0+IHtcclxuICAgIC8vICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UpID0+IHtcclxuICAgIC8vICAgICBpZiAobWVzc2FnZS50eXBlID09PSAnc2VuZE1vbmV5Jykge1xyXG4gICAgLy8gICAgICAgaGFuZGxlQ29ubmVjdFRvTWV0YW1hc2soKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gfSk7XHJcbiAgICB2YXIgaGFuZGxlQ29ubmVjdFRvTWV0YW1hc2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9wcm92aWRlciA9IGNvbm5lY3RNZXRhTWFzaygpO1xyXG4gICAgICAgIHZhciBjaGFpbklkID0gTnVtYmVyKF9wcm92aWRlci5jaGFpbklkKTtcclxuICAgICAgICBpZiAoY2hhaW5JZCAhPT0gQXZheFRlc3ROZXRDaGFpbklkKSB7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKCdQbGVhc2UgY29ubmVjdCB0byBBdmFsYW5jaGUgRnVqaSBUZXN0bmV0Jyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cod2luZG93LmV0aGVyZXVtKTtcclxuICAgICAgICB2YXIgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoX3Byb3ZpZGVyKTtcclxuICAgICAgICBwcm92aWRlci5zZW5kKCdldGhfcmVxdWVzdEFjY291bnRzJywgW10pLnRoZW4oZnVuY3Rpb24gKGFjY291bnRzKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzaWduZXJfMSwgdG9rZW5fMSwgdXNlcl8xLCBlcnJvcl8xO1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduZXJfMSA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBXZWIzVG9rZW4uc2lnbihmdW5jdGlvbiAobXNnKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgc2lnbmVyXzEuc2lnbk1lc3NhZ2UobXNnKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7IH0pOyB9LCAnMWQnKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbl8xID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2tlbih0b2tlbl8xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXV0aFRva2VuKHRva2VuXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBjbGllbnQudXNlcnMucmVnaXN0ZXIoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXIodXNlcl8xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWNjb3VudChhY2NvdW50c1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFR3aXR0ZXJJZCh1c2VyXzEuc29jaWFscy50d2l0dGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlcl8xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcignUGxlYXNlIGNvbm5lY3QgdG8gQXZhbGFuY2hlIEZ1amkgVGVzdG5ldCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBY2NvdW50KCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG9rZW4oJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH0pO1xyXG4gICAgfTtcclxuICAgIHZhciBoYW5kbGVUd2l0dGVyQ29ubmVjdCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgIH0pOyB9KTsgfTtcclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6ICdmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGgtWzQwMHB4XSB3LVszNDBweF0gYmctc2xhdGUtNTAnIH0sIHsgY2hpbGRyZW46IFtfanN4KFwiYnV0dG9uXCIsIF9fYXNzaWduKHsgdHlwZTogJ2J1dHRvbicsIGNsYXNzTmFtZTogJ3JvdW5kZWQtbWQgYmctaW5kaWdvLTUwIHB4LTMgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1pbmRpZ28tNjAwIHNoYWRvdy1zbSBob3ZlcjpiZy1pbmRpZ28tMTAwJywgb25DbGljazogaGFuZGxlQ29ubmVjdFRvTWV0YW1hc2sgfSwgeyBjaGlsZHJlbjogYWNjb3VudCA/ICdDb25uZWN0ZWQnIDogJ0Nvbm5lY3QgdG8gTWV0YW1hc2snIH0pKSwgYWNjb3VudCAmJiAoX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IHR5cGU6ICdidXR0b24nLCBjbGFzc05hbWU6ICdyb3VuZGVkLW1kIGJnLWluZGlnby01MCBweC0zIHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtaW5kaWdvLTYwMCBzaGFkb3ctc20gaG92ZXI6YmctaW5kaWdvLTEwMCcsIG9uQ2xpY2s6IGhhbmRsZVR3aXR0ZXJDb25uZWN0IH0sIHsgY2hpbGRyZW46IHR3aXR0ZXJJZCA/ICdDb25uZWN0ZWQgdG8gJyArIHR3aXR0ZXJJZCA6ICdDb25uZWN0IHRvIFR3aXR0ZXInIH0pKSksIF9qc3goVG9hc3Rlciwge30pXSB9KSkpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiZXhwb3J0IHZhciBBUElfRU5EUE9JTlRTID0ge1xyXG4gICAgUFJPRFVDVFNfQUxMOiAnL2dldHB1dG9uc2FsZScsXHJcbiAgICBQUk9EVUNUUzogJy9nZXRQdXRvbnNhbGVQZXJQYWdlJyxcclxuICAgIFBST0RVQ1RTX0RFVEFJTDogJy9nZXRQdXRvbmxpc3RBbmRBdWN0aW9ubGlzdCcsXHJcbiAgICBQUk9EVUNUU19QT1BVTEFSOiAnL3BvcHVsYXItcHJvZHVjdHMnLFxyXG4gICAgUFJPRFVDVFNfRlJFRV9ET1dOTE9BRDogJy9mcmVlLWRvd25sb2Fkcy9kaWdpdGFsLWZpbGUnLFxyXG4gICAgUFJPRFVDVFNfUkVWSUVXUzogJy9yZXZpZXdzJyxcclxuICAgIFBST0RVQ1RTX0FERF9SRVZJRVdTOiAnL2FkZFJldmlldycsXHJcbiAgICBQUk9EVUNUU19NRVNTQUdFUzogJy9tZXNzYWdlcycsXHJcbiAgICBQUk9EVUNUU19BRERfTUVTU0FHRVM6ICdhZGRNZXNzYWdlJyxcclxuICAgIFBST0RVQ1RTX1JFVklFV1NfQUJVU0VfUkVQT1JUOiAnL2FidXNpdmVfcmVwb3J0cycsXHJcbiAgICBQUk9EVUNUU19RVUVTVElPTlM6ICcvcXVlc3Rpb25zJyxcclxuICAgIFBST0RVQ1RTX0FERF9RVUVTVElPTlM6ICcvYWRkX3F1ZXN0aW9ucycsXHJcbiAgICBQUk9EVUNUU19VUERBVEU6ICcvdXBkYXRlcHV0b25zYWxlJyxcclxuICAgIFBST0RVQ1RTX0ZFRURCQUNLOiAnL2ZlZWRiYWNrcycsXHJcbiAgICBMT0dfQUREOiAnL2FkZExvZycsXHJcbiAgICBDQVRFR09SSUVTOiAnL2NhdGVnb3JpZXMnLFxyXG4gICAgVEFHUzogJy90YWdzJyxcclxuICAgIFRZUEVTOiAnL3R5cGVzJyxcclxuICAgIFNIT1BTOiAnL3Nob3BzJyxcclxuICAgIFRPUF9TSE9QUzogJy90b3Atc2hvcHMnLFxyXG4gICAgT1JERVJTOiAnL29yZGVycycsXHJcbiAgICBPUkRFUlNfQ0hFQ0tPVVRfVkVSSUZZOiAnb3JkZXJzL2NoZWNrb3V0L3ZlcmlmeScsXHJcbiAgICBPUkRFUlNfRE9XTkxPQURTOiAnL2Rvd25sb2FkcycsXHJcbiAgICBHRU5FUkFURV9ET1dOTE9BREFCTEVfUFJPRFVDVF9MSU5LOiAnL2Rvd25sb2Fkcy9kaWdpdGFsLWZpbGUnLFxyXG4gICAgVVNFUlM6ICcvdXNlcnMnLFxyXG4gICAgVVNFUlNfTUU6ICcvdXNlckluZm8nLFxyXG4gICAgVVNFUlNfTE9HSU46ICcvdXNlckluZm8nLFxyXG4gICAgVVNFUlNfUkVHSVNURVI6ICcvcmVnaXN0ZXInLFxyXG4gICAgVVNFUlNfRk9SR09UX1BBU1NXT1JEOiAnL2ZvcmdldC1wYXNzd29yZCcsXHJcbiAgICBVU0VSU19WRVJJRllfRk9SR09UX1BBU1NXT1JEX1RPS0VOOiAnL3ZlcmlmeS1mb3JnZXQtcGFzc3dvcmQtdG9rZW4nLFxyXG4gICAgVVNFUlNfUkVTRVRfUEFTU1dPUkQ6ICcvcmVzZXQtcGFzc3dvcmQnLFxyXG4gICAgVVNFUlNfQ0hBTkdFX1BBU1NXT1JEOiAnL2NoYW5nZS1wYXNzd29yZCcsXHJcbiAgICBVU0VSU19MT0dPVVQ6ICcvbG9nb3V0JyxcclxuICAgIFVTRVJTX1dJU0hMSVNUOiAnL215LXdpc2hsaXN0cycsXHJcbiAgICBXSVNITElTVDogJy93aXNobGlzdHMnLFxyXG4gICAgVVNFUlNfV0lTSExJU1RfVE9HR0xFOiAnL3dpc2hsaXN0cy90b2dnbGUnLFxyXG4gICAgTVlfUkVQT1JUUzogJy9teS1yZXBvcnRzJyxcclxuICAgIE1ZX1FVRVNUSU9OUzogJy9teS1xdWVzdGlvbnMnLFxyXG4gICAgU0VUVElOR1M6ICcvc2V0dGluZ3MnLFxyXG4gICAgU0VUVElOR1NfQ09OVEFDVF9VUzogJy9jb250YWN0LXVzJyxcclxuICAgIFVQTE9BRFM6ICcvYXR0YWNobWVudHMnLFxyXG4gICAgRk9MTE9XX1NIT1A6ICdmb2xsb3ctc2hvcCcsXHJcbiAgICBGT0xMT1dFRF9TSE9QUzogJ2ZvbGxvd2VkLXNob3BzJyxcclxuICAgIEZPTExPV0VEX1NIT1BTX1BST0RVQ1RTOiAnZm9sbG93ZWQtc2hvcHMtcG9wdWxhci1wcm9kdWN0cycsXHJcbiAgICBESVNQVVRFUzogJy9kaXNwdXRlcycsXHJcbiAgICBBRERfRElTUFVURTogJy9hZGREaXNwdXRlJyxcclxuICAgIFVQREFURV9ESVNQVVRFOiAnL3VwZGF0ZURpc3B1dGUnLFxyXG4gICAgVVBEQVRFX01JTEVTVE9ORTogJy91cGRhdGVNaWxlc3RvbmUnLFxyXG4gICAgR0VUX1NBTVBMRV9JTUFHRVM6ICcvc2FtcGxlLWltYWdlcycsXHJcbiAgICBTRVRfU0FNUExFX0lNQUdFUzogJy9zZXQtc2FtcGxlLWltYWdlcycsXHJcbn07XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgZ2V0QXV0aFRva2VuLCByZW1vdmVBdXRoVG9rZW4gfSBmcm9tICcuL3Rva2VuJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZXN0RW5kcG9pbnQgfSBmcm9tICcuLi9oZWxwZXJzL2NvbnN0JztcclxuLy8gVE9ETzogRHVlIHRvIHdpbmRvd3MgdGltZW91dCB3YXMgc2V0IHRvIDE1MDAwXHJcbnZhciBBeGlvcyA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBSZXN0RW5kcG9pbnQsXHJcbiAgICAvLyB0aW1lb3V0OiAxNTAwMDAwMDAsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbn0pO1xyXG5heGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgLy8gc3R1ZmZcclxuICAgIGlmICghKChfYSA9IGNvbmZpZy51cmwpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pbmNsdWRlcygnbmZ0c3RvcmFnZS5saW5rJykpKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gZ2V0QXV0aFRva2VuKCk7XHJcbiAgICAgICAgY29uZmlnLmhlYWRlcnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY29uZmlnLmhlYWRlcnMpLCB7IEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiLmNvbmNhdCh0b2tlbiA/IHRva2VuIDogJycpIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxufSk7XHJcbi8vIENoYW5nZSByZXF1ZXN0IGRhdGEvZXJyb3IgaGVyZVxyXG5BeGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgaWYgKCEoKF9hID0gY29uZmlnLnVybCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluY2x1ZGVzKCduZnRzdG9yYWdlLmxpbmsnKSkpIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSBnZXRBdXRoVG9rZW4oKTtcclxuICAgICAgICBjb25maWcuaGVhZGVycyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjb25maWcuaGVhZGVycyksIHsgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIuY29uY2F0KHRva2VuID8gdG9rZW4gOiAnJykgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG59LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbn0pO1xyXG5BeGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2U7IH0sIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgaWYgKChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkgfHxcclxuICAgICAgICAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDMpIHx8XHJcbiAgICAgICAgKGVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSA9PT0gJ1BJWEVSX0VSUk9SLk5PVF9BVVRIT1JJWkVEJykpIHtcclxuICAgICAgICByZW1vdmVBdXRoVG9rZW4oKTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbn0pO1xyXG52YXIgSHR0cENsaWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEh0dHBDbGllbnQoKSB7XHJcbiAgICB9XHJcbiAgICBIdHRwQ2xpZW50LmdldCA9IGZ1bmN0aW9uICh1cmwsIHBhcmFtcykge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBBeGlvcy5nZXQodXJsLCB7IHBhcmFtczogcGFyYW1zIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2UuZGF0YV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEh0dHBDbGllbnQucG9zdCA9IGZ1bmN0aW9uICh1cmwsIGRhdGEsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgQXhpb3MucG9zdCh1cmwsIGRhdGEsIG9wdGlvbnMpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2UuZGF0YV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEh0dHBDbGllbnQucHV0ID0gZnVuY3Rpb24gKHVybCwgZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBBeGlvcy5wdXQodXJsLCBkYXRhKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdHRwQ2xpZW50LmRlbGV0ZSA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgQXhpb3MuZGVsZXRlKHVybCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZS5kYXRhXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgSHR0cENsaWVudC5mb3JtYXRTZWFyY2hQYXJhbXMgPSBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHBhcmFtcylcclxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gX2FbMV07XHJcbiAgICAgICAgICAgIHJldHVybiBCb29sZWFuKHZhbHVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICB2YXIgayA9IF9hWzBdLCB2ID0gX2FbMV07XHJcbiAgICAgICAgICAgIHJldHVybiBbJ3R5cGUnLCAnY2F0ZWdvcmllcycsICd0YWdzJywgJ2F1dGhvcicsICdtYW51ZmFjdHVyZXInXS5pbmNsdWRlcyhrKVxyXG4gICAgICAgICAgICAgICAgPyBcIlwiLmNvbmNhdChrLCBcIi5zbHVnOlwiKS5jb25jYXQodilcclxuICAgICAgICAgICAgICAgIDogXCJcIi5jb25jYXQoaywgXCI6XCIpLmNvbmNhdCh2KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuam9pbignOycpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBIdHRwQ2xpZW50O1xyXG59KCkpO1xyXG5leHBvcnQgeyBIdHRwQ2xpZW50IH07XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VIVFRQUmVxKCkge1xyXG4gICAgdmFyIF9hID0gdXNlU3RhdGUoZmFsc2UpLCBpc0xvYWRpbmcgPSBfYVswXSwgc2V0SXNMb2FkaW5nID0gX2FbMV07XHJcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShudWxsKSwgZXJyb3IgPSBfYlswXSwgc2V0RXJyb3IgPSBfYlsxXTtcclxuICAgIHZhciBzZW5kUmVxdWVzdCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChyZXFDb25maWcsIGV4ZWN1dGVGbikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBlcnJfMTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcmVxQ29uZmlnLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHJlcUNvbmZpZy5tZXRob2QgPyByZXFDb25maWcubWV0aG9kIDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVxQ29uZmlnLmRhdGEgPyByZXFDb25maWcuZGF0YSA6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWN1dGVGbihyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycl8xLnJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25zZSB3YXMgcmVjZWl2ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBlcnJvci5yZXF1ZXN0YCBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2Ugb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHAuQ2xpZW50UmVxdWVzdCBpbiBub2RlLmpzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJfMS5tZXNzYWdlIHx8ICdSZXF1ZXN0IGZhaWxlZCEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJfMS5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd2VudCB3cm9uZyEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzTG9hZGluZzogaXNMb2FkaW5nLFxyXG4gICAgICAgIGVycm9yOiBlcnJvcixcclxuICAgICAgICBzZW5kUmVxdWVzdDogc2VuZFJlcXVlc3QsXHJcbiAgICB9O1xyXG59XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn07XHJcbmltcG9ydCB7IEFQSV9FTkRQT0lOVFMgfSBmcm9tICcuL2VuZHBvaW50cyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICcuL2h0dHAtY2xpZW50JztcclxudmFyIENsaWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENsaWVudCgpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0ge1xyXG4gICAgICAgICAgICBhbGw6IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9hID09PSB2b2lkIDApIHsgX2EgPSB7fTsgfVxyXG4gICAgICAgICAgICAgICAgdmFyIFxyXG4gICAgICAgICAgICAgICAgLy8gY2F0ZWdvcmllcyxcclxuICAgICAgICAgICAgICAgIC8vIHRhZ3MsXHJcbiAgICAgICAgICAgICAgICAvLyBuYW1lLFxyXG4gICAgICAgICAgICAgICAgLy8gc2hvcF9pZCxcclxuICAgICAgICAgICAgICAgIC8vIHByaWNlLFxyXG4gICAgICAgICAgICAgICAgcGFnZSA9IF9hLnBhZ2UsIHF1ZXJ5ID0gX19yZXN0KF9hLCBbXCJwYWdlXCJdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LmdldChBUElfRU5EUE9JTlRTLlBST0RVQ1RTLCBfX2Fzc2lnbih7IHBhZ2U6IHBhZ2UgfSwgcXVlcnkpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9wdWxhcjogZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KEFQSV9FTkRQT0lOVFMuUFJPRFVDVFNfUE9QVUxBUiwgX19hc3NpZ24oeyB3aXRoOiAnc2hvcCcsIHdpdGhDb3VudDogJ29yZGVycycgfSwgcGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2x1ZyA9IF9hLnNsdWcsIGxhbmd1YWdlID0gX2EubGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5nZXQoXCJcIi5jb25jYXQoQVBJX0VORFBPSU5UUy5QUk9EVUNUUywgXCIvXCIpLmNvbmNhdChzbHVnKSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZSxcclxuICAgICAgICAgICAgICAgICAgICB3aXRoOiAnc2hvcDt0YWdzO3R5cGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhDb3VudDogJ29yZGVycycsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0UHV0b25saXN0QW5kQXVjdGlvbmxpc3Q6IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb25JZCA9IF9hLmNvbGxlY3Rpb25JZCwgdG9rZW5JZCA9IF9hLnRva2VuSWQsIG1ha2VyID0gX2EubWFrZXIsIGtleSA9IF9hLmtleSwgY2hhaW5JZCA9IF9hLmNoYWluSWQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5nZXQoXCJcIi5jb25jYXQoQVBJX0VORFBPSU5UUy5QUk9EVUNUU19ERVRBSUwpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbklkOiBjb2xsZWN0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5JZDogdG9rZW5JZCxcclxuICAgICAgICAgICAgICAgICAgICBtYWtlcjogbWFrZXIsXHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhaW5JZDogY2hhaW5JZCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb3dubG9hZDogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5wb3N0KEFQSV9FTkRQT0lOVFMuUFJPRFVDVFNfRlJFRV9ET1dOTE9BRCwgaW5wdXQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0ge1xyXG4gICAgICAgICAgICBhbGw6IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KEFQSV9FTkRQT0lOVFMuQ0FURUdPUklFUywgX19hc3NpZ24oe30sIHF1ZXJ5KSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRhZ3MgPSB7XHJcbiAgICAgICAgICAgIGFsbDogZnVuY3Rpb24gKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5nZXQoQVBJX0VORFBPSU5UUy5UQUdTLCBxdWVyeSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2x1ZyA9IF9hLnNsdWcsIGxhbmd1YWdlID0gX2EubGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5nZXQoXCJcIi5jb25jYXQoQVBJX0VORFBPSU5UUy5UQUdTLCBcIi9cIikuY29uY2F0KHNsdWcpLCB7IGxhbmd1YWdlOiBsYW5ndWFnZSB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudHlwZXMgPSB7XHJcbiAgICAgICAgICAgIGFsbDogZnVuY3Rpb24gKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5nZXQoQVBJX0VORFBPSU5UUy5UWVBFUywgX19hc3NpZ24oe30sIHF1ZXJ5KSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNob3BzID0ge1xyXG4gICAgICAgICAgICBhbGw6IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KEFQSV9FTkRQT0lOVFMuU0hPUFMsIHF1ZXJ5KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9wOiBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfYSA9PT0gdm9pZCAwKSB7IF9hID0ge307IH1cclxuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gX2EubmFtZSwgcXVlcnkgPSBfX3Jlc3QoX2EsIFtcIm5hbWVcIl0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KEFQSV9FTkRQT0lOVFMuVE9QX1NIT1BTLCBfX2Fzc2lnbihfX2Fzc2lnbih7IHNlYXJjaEpvaW46ICdhbmQnIH0sIHF1ZXJ5KSwgeyBzZWFyY2g6IEh0dHBDbGllbnQuZm9ybWF0U2VhcmNoUGFyYW1zKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNfYWN0aXZlOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pIH0pKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoc2x1Zykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KFwiXCIuY29uY2F0KEFQSV9FTkRQT0lOVFMuU0hPUFMsIFwiL1wiKS5jb25jYXQoc2x1ZykpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vcmRlcnMgPSB7XHJcbiAgICAgICAgICAgIGFsbDogZnVuY3Rpb24gKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5nZXQoQVBJX0VORFBPSU5UUy5PUkRFUlMsIHF1ZXJ5KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAodHJhY2tpbmdfbnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5nZXQoXCJcIi5jb25jYXQoQVBJX0VORFBPSU5UUy5PUkRFUlMsIFwiL1wiKS5jb25jYXQodHJhY2tpbmdfbnVtYmVyKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvd25sb2FkYWJsZTogZnVuY3Rpb24gKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5nZXQoQVBJX0VORFBPSU5UUy5PUkRFUlNfRE9XTkxPQURTLCBxdWVyeSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdlbmVyYXRlRG93bmxvYWRMaW5rOiBmdW5jdGlvbiAoZGlnaXRhbF9maWxlX2lkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5wb3N0KEFQSV9FTkRQT0lOVFMuR0VORVJBVEVfRE9XTkxPQURBQkxFX1BST0RVQ1RfTElOSywge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpZ2l0YWxfZmlsZV9pZDogZGlnaXRhbF9maWxlX2lkLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZlcmlmeTogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LnBvc3QoQVBJX0VORFBPSU5UUy5PUkRFUlNfQ0hFQ0tPVVRfVkVSSUZZLCBkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQucG9zdChBUElfRU5EUE9JTlRTLk9SREVSUywgZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnVzZXJzID0ge1xyXG4gICAgICAgICAgICBtZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gSHR0cENsaWVudC5nZXQoQVBJX0VORFBPSU5UUy5VU0VSU19MT0dJTik7IH0sXHJcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LnB1dChcIlwiLmNvbmNhdChBUElfRU5EUE9JTlRTLlVTRVJTX1JFR0lTVEVSKSwgdXNlcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvZ2luOiBmdW5jdGlvbiAoKSB7IHJldHVybiBIdHRwQ2xpZW50LmdldChBUElfRU5EUE9JTlRTLlVTRVJTX0xPR0lOKTsgfSxcclxuICAgICAgICAgICAgcmVnaXN0ZXI6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQucG9zdChBUElfRU5EUE9JTlRTLlVTRVJTX1JFR0lTVEVSLCBpbnB1dCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIGZvcmdvdFBhc3N3b3JkOiAoaW5wdXQ6IEZvcmdldFBhc3N3b3JkSW5wdXQpID0+XHJcbiAgICAgICAgICAgIC8vICAgSHR0cENsaWVudC5wb3N0PFBhc3N3b3JkQ2hhbmdlUmVzcG9uc2U+KFxyXG4gICAgICAgICAgICAvLyAgICAgQVBJX0VORFBPSU5UUy5VU0VSU19GT1JHT1RfUEFTU1dPUkQsXHJcbiAgICAgICAgICAgIC8vICAgICBpbnB1dFxyXG4gICAgICAgICAgICAvLyAgICksXHJcbiAgICAgICAgICAgIC8vIHZlcmlmeUZvcmdvdFBhc3N3b3JkVG9rZW46IChpbnB1dDogVmVyaWZ5Rm9yZ2V0UGFzc3dvcmRUb2tlbklucHV0KSA9PlxyXG4gICAgICAgICAgICAvLyAgIEh0dHBDbGllbnQucG9zdDxQYXNzd29yZENoYW5nZVJlc3BvbnNlPihcclxuICAgICAgICAgICAgLy8gICAgIEFQSV9FTkRQT0lOVFMuVVNFUlNfVkVSSUZZX0ZPUkdPVF9QQVNTV09SRF9UT0tFTixcclxuICAgICAgICAgICAgLy8gICAgIGlucHV0XHJcbiAgICAgICAgICAgIC8vICAgKSxcclxuICAgICAgICAgICAgLy8gcmVzZXRQYXNzd29yZDogKGlucHV0OiBSZXNldFBhc3N3b3JkSW5wdXQpID0+XHJcbiAgICAgICAgICAgIC8vICAgSHR0cENsaWVudC5wb3N0PFBhc3N3b3JkQ2hhbmdlUmVzcG9uc2U+KFxyXG4gICAgICAgICAgICAvLyAgICAgQVBJX0VORFBPSU5UUy5VU0VSU19SRVNFVF9QQVNTV09SRCxcclxuICAgICAgICAgICAgLy8gICAgIGlucHV0XHJcbiAgICAgICAgICAgIC8vICAgKSxcclxuICAgICAgICAgICAgLy8gY2hhbmdlUGFzc3dvcmQ6IChpbnB1dDogQ2hhbmdlUGFzc3dvcmRJbnB1dCkgPT5cclxuICAgICAgICAgICAgLy8gICBIdHRwQ2xpZW50LnBvc3Q8UGFzc3dvcmRDaGFuZ2VSZXNwb25zZT4oXHJcbiAgICAgICAgICAgIC8vICAgICBBUElfRU5EUE9JTlRTLlVTRVJTX0NIQU5HRV9QQVNTV09SRCxcclxuICAgICAgICAgICAgLy8gICAgIGlucHV0XHJcbiAgICAgICAgICAgIC8vICAgKSxcclxuICAgICAgICAgICAgbG9nb3V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBIdHRwQ2xpZW50LnBvc3QoQVBJX0VORFBPSU5UUy5VU0VSU19MT0dPVVQsIHt9KTsgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25zID0ge1xyXG4gICAgICAgICAgICBhbGw6IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHF1ZXN0aW9uID0gX2EucXVlc3Rpb24sIHBhcmFtcyA9IF9fcmVzdChfYSwgW1wicXVlc3Rpb25cIl0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KEFQSV9FTkRQT0lOVFMuUFJPRFVDVFNfUVVFU1RJT05TLCBfX2Fzc2lnbihfX2Fzc2lnbih7IHNlYXJjaEpvaW46ICdhbmQnIH0sIHBhcmFtcyksIHsgc2VhcmNoOiBIdHRwQ2xpZW50LmZvcm1hdFNlYXJjaFBhcmFtcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBxdWVzdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB9KSB9KSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5wb3N0KEFQSV9FTkRQT0lOVFMuUFJPRFVDVFNfQUREX1FVRVNUSU9OUywgaW5wdXQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5mZWVkYmFjayA9IHtcclxuICAgICAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LnBvc3QoQVBJX0VORFBPSU5UUy5QUk9EVUNUU19GRUVEQkFDSywgaW5wdXQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hYnVzZSA9IHtcclxuICAgICAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LnBvc3QoQVBJX0VORFBPSU5UUy5QUk9EVUNUU19SRVZJRVdTX0FCVVNFX1JFUE9SVCwgaW5wdXQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZXZpZXdzID0ge1xyXG4gICAgICAgICAgICBhbGw6IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJhdGluZyA9IF9hLnJhdGluZywgcGFyYW1zID0gX19yZXN0KF9hLCBbXCJyYXRpbmdcIl0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KEFQSV9FTkRQT0lOVFMuUFJPRFVDVFNfUkVWSUVXUywgX19hc3NpZ24oX19hc3NpZ24oeyBzZWFyY2hKb2luOiAnYW5kJywgd2l0aDogJ3VzZXInIH0sIHBhcmFtcyksIHsgc2VhcmNoOiBIdHRwQ2xpZW50LmZvcm1hdFNlYXJjaFBhcmFtcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZzogcmF0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pIH0pKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpZCA9IF9hLmlkO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KFwiXCIuY29uY2F0KEFQSV9FTkRQT0lOVFMuUFJPRFVDVFNfUkVWSUVXUywgXCIvXCIpLmNvbmNhdChpZCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQucG9zdChBUElfRU5EUE9JTlRTLlBST0RVQ1RTX0FERF9SRVZJRVdTLCBpbnB1dCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5wdXQoXCJcIi5jb25jYXQoQVBJX0VORFBPSU5UUy5QUk9EVUNUU19SRVZJRVdTLCBcIi9cIikuY29uY2F0KGlucHV0LmlkKSwgaW5wdXQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IHtcclxuICAgICAgICAgICAgYWxsOiBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSBfX3Jlc3QoX2EsIFtdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LmdldChBUElfRU5EUE9JTlRTLlBST0RVQ1RTX01FU1NBR0VTLCBfX2Fzc2lnbih7fSwgcGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBfYS5pZDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LmdldChcIlwiLmNvbmNhdChBUElfRU5EUE9JTlRTLlBST0RVQ1RTX1JFVklFV1MsIFwiL1wiKS5jb25jYXQoaWQpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LnBvc3QoQVBJX0VORFBPSU5UUy5QUk9EVUNUU19BRERfTUVTU0FHRVMsIGlucHV0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud2lzaGxpc3QgPSB7XHJcbiAgICAgICAgICAgIGFsbDogZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KEFQSV9FTkRQT0lOVFMuVVNFUlNfV0lTSExJU1QsIF9fYXNzaWduKHsgd2l0aDogJ3Nob3AnLCBvcmRlckJ5OiAnY3JlYXRlZF9hdCcsIHNvcnRlZEJ5OiAnZGVzYycgfSwgcGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvZ2dsZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5wb3N0KEFQSV9FTkRQT0lOVFMuVVNFUlNfV0lTSExJU1RfVE9HR0xFLCBpbnB1dCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5kZWxldGUoXCJcIi5jb25jYXQoQVBJX0VORFBPSU5UUy5XSVNITElTVCwgXCIvXCIpLmNvbmNhdChpZCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjaGVja0lzSW5XaXNobGlzdDogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdF9pZCA9IF9hLnByb2R1Y3RfaWQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5nZXQoXCJcIi5jb25jYXQoQVBJX0VORFBPSU5UUy5XSVNITElTVCwgXCIvaW5fd2lzaGxpc3QvXCIpLmNvbmNhdChwcm9kdWN0X2lkKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm15UXVlc3Rpb25zID0ge1xyXG4gICAgICAgICAgICBhbGw6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LmdldChBUElfRU5EUE9JTlRTLk1ZX1FVRVNUSU9OUywgX19hc3NpZ24oeyB3aXRoOiAndXNlcicsIG9yZGVyQnk6ICdjcmVhdGVkX2F0Jywgc29ydGVkQnk6ICdkZXNjJyB9LCBwYXJhbXMpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubXlSZXBvcnRzID0ge1xyXG4gICAgICAgICAgICBhbGw6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LmdldChBUElfRU5EUE9JTlRTLk1ZX1JFUE9SVFMsIF9fYXNzaWduKHsgd2l0aDogJ3VzZXInLCBvcmRlckJ5OiAnY3JlYXRlZF9hdCcsIHNvcnRlZEJ5OiAnZGVzYycgfSwgcGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRpc3B1dGVzID0ge1xyXG4gICAgICAgICAgICBhbGw6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LmdldChBUElfRU5EUE9JTlRTLkRJU1BVVEVTLCBfX2Fzc2lnbih7IHdpdGg6ICd1c2VyJywgb3JkZXJCeTogJ2NyZWF0ZWRfYXQnLCBzb3J0ZWRCeTogJ2Rlc2MnIH0sIHBhcmFtcykpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQucG9zdChBUElfRU5EUE9JTlRTLkFERF9ESVNQVVRFLCBpbnB1dCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5wdXQoQVBJX0VORFBPSU5UUy5VUERBVEVfRElTUFVURSwgaW5wdXQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5taWxlc3RvbmUgPSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5wdXQoQVBJX0VORFBPSU5UUy5VUERBVEVfTUlMRVNUT05FLCBpbnB1dCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmZvbGxvdyA9IHtcclxuICAgICAgICAgICAgc2hvcHM6IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KEFQSV9FTkRQT0lOVFMuRk9MTE9XRURfU0hPUFMsIHF1ZXJ5KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXNTaG9wRm9sbG93ZWQ6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KEFQSV9FTkRQT0lOVFMuRk9MTE9XX1NIT1AsIGlucHV0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9nZ2xlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LnBvc3QoQVBJX0VORFBPSU5UUy5GT0xMT1dfU0hPUCwgaW5wdXQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmb2xsb3dlZFNob3BQcm9kdWN0czogZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LmdldChBUElfRU5EUE9JTlRTLkZPTExPV0VEX1NIT1BTX1BST0RVQ1RTLCBfX2Fzc2lnbih7fSwgcGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBhbGw6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LmdldChBUElfRU5EUE9JTlRTLlNFVFRJTkdTLCBfX2Fzc2lnbih7fSwgcGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRhY3RVczogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5wb3N0KEFQSV9FTkRQT0lOVFMuU0VUVElOR1NfQ09OVEFDVF9VUywgaW5wdXQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cGxvYWQ6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5mb3JFYWNoKGZ1bmN0aW9uIChhdHRhY2htZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhdHRhY2htZW50W10nLCBhdHRhY2htZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQucG9zdChBUElfRU5EUE9JTlRTLlVQTE9BRFMsIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2FtcGxlSW1hZ2VzID0ge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LmdldChBUElfRU5EUE9JTlRTLkdFVF9TQU1QTEVfSU1BR0VTLCBfX2Fzc2lnbih7fSwgcGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5wb3N0KEFQSV9FTkRQT0lOVFMuU0VUX1NBTVBMRV9JTUFHRVMsIGlucHV0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIENsaWVudDtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgbmV3IENsaWVudCgpO1xyXG4iLCJ2YXIgYXV0aFRva2VuO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0QXV0aFRva2VuKHRva2VuKSB7XHJcbiAgICBhdXRoVG9rZW4gPSB0b2tlbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXV0aFRva2VuKCkge1xyXG4gICAgcmV0dXJuIGF1dGhUb2tlbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQXV0aFRva2VuKCkge1xyXG4gICAgYXV0aFRva2VuID0gdW5kZWZpbmVkO1xyXG59XHJcbiIsInZhciBjcmVhdGVQcm92aWRlciA9IHJlcXVpcmUoJy4vY3JlYXRlUHJvdmlkZXInKTtcclxudmFyIHByb3ZpZGVyID0gY3JlYXRlUHJvdmlkZXIoKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGNvbm5lY3RNZXRhTWFzaygpIHtcclxuICAgIGlmIChwcm92aWRlcilcclxuICAgICAgICByZXR1cm4gcHJvdmlkZXI7XHJcbn1cclxuIiwiZXhwb3J0IHZhciBBdmF4VGVzdE5ldCA9ICdodHRwczovL2FwaS5hdmF4LXRlc3QubmV0d29yay9leHQvYmMvQy9ycGMnO1xyXG5leHBvcnQgdmFyIEF2YXhNYWluTmV0ID0gJ2h0dHBzOi8vYXBpLmF2YXgubmV0d29yay9leHQvYmMvQy9ycGMnO1xyXG5leHBvcnQgdmFyIEF2YXhUZXN0TmV0Q2hhaW5JZCA9IDQzMTEzO1xyXG5leHBvcnQgdmFyIFJlc3RFbmRwb2ludCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnO1xyXG5leHBvcnQgdmFyIFNlbmRNb25leVN2ZyA9ICc8c3ZnIHdpZHRoPVwiMTguNzVcIiBoZWlnaHQ9XCIxOC43NVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzaGFwZS1yZW5kZXJpbmc9XCJnZW9tZXRyaWNQcmVjaXNpb25cIiB0ZXh0LXJlbmRlcmluZz1cImdlb21ldHJpY1ByZWNpc2lvblwiIGltYWdlLXJlbmRlcmluZz1cIm9wdGltaXplUXVhbGl0eVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgdmlld0JveD1cIjAgMCA1MTIgNDg4Ljc4M1wiPjxwYXRoIGZpbGw9XCIjMkQyMjIyXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiIGQ9XCJNMTIwLjAwOSAyNzAuNDQ5bDEyLjA1MS0uMDE0YzYzLjczMS0uMjIgODAuMDg0LS4yNjYgMTQ0LjIwMiAzOS45NzVoNTIuODY1bC42MDcuMDM5YzguMTk5LjU1NyAxNS4zMDMgMy40NjUgMjAuNTM0IDcuNzY2IDQuMTIgMy4zODcgNy4xMTcgNy42NzEgOC42MjQgMTIuMzk1IDEuNTM5IDQuODI2IDEuNTMyIDEwLjA2NC0uMzY5IDE1LjIzOS0yLjAzOSA1LjU0My02LjI2MiAxMS0xMy4xIDE1LjcxMy0xMC4yNDUgNy41MDUtMjIuMDMgMTEuMDM3LTM0LjY1MSAxMi4zNzQtMTIuMTQzIDEuMjgzLTI1LjA0OS41MS0zOC4wODUtLjY1My00LjE0Ni0uMjAyLTYuODAyIDEuNDMzLTcuOTU0IDMuNjQ2YTYuNDk1IDYuNDk1IDAgMDAtLjcyNyAyLjg0NyA2LjY4IDYuNjggMCAwMC42MDYgMi45MzdjMS4wOTIgMi4zNjUgMy44MjMgNC4yMzEgOC4zMTMgNC4yNDlsLjMyOS4wMTRjMy4zNzcuMjQ4IDcuMDY1LS4xMTggMTAuNjU0LS40NjUgMi44NTEtLjI4IDUuNjYzLS41NTcgOC40OTQtLjU2IDE1LjUyMi0uMDExIDI5LjYyMi0xLjQ4MyA0MS42NTgtNS45NjUgMTEuNTkzLTQuMzE2IDIxLjM4NS0xMS41MDEgMjguODMyLTIzLjAybDcuOTgzLTE4LjYzNmE0LjY1OCA0LjY1OCAwIDAxMi4yMzUtMi4zNjJsODAuNTk4LTM5Ljk2LjYxLS4yNDhjMTMuODA5LTQuNTU3IDI2LjQ3My0zLjE2NCAzNi4zODIgMS44OTMgNi41IDMuMzEzIDExLjgyNCA4LjIyMSAxNS41MTkgMTQuMDc2IDMuNzA5IDUuODY2IDUuNzg0IDEyLjcxIDUuNzggMTkuODYtLjAwMyAxMC4xMTQtNC4xNDYgMjAuODA2LTEzLjY1MyAzMC4xOTdsLS41MzYuNDU0Yy0yOS4yNDMgMjEuMjg1LTU4Ljk0IDQwLjcyNi04OS4wNTIgNTguNDEyLTMwLjAyNCAxNy42NC02MC4zNzQgMzMuNDgxLTkxLjAwNyA0Ny42MS00NS45MzMgMjcuODI4LTkxLjg1MSAyNi44ODgtMTM3Ljc0NC4wMDdsLTU5Ljk5OC0zMC45MjhhMTYuNjc5IDE2LjY3OSAwIDAxLTQuOTA0IDExLjc5NWwtLjUyOS40NzljLTIuOTgyIDIuNzQxLTYuOTUxIDQuNDI2LTExLjI5MiA0LjQyNkgxNi43MjVjLTQuNTg1IDAtOC43Ni0xLjg4LTExLjc5Mi00LjkwNUExNi41ODggMTYuNTg4IDAgMDEwIDQzNy4zMlYyNjguNzM2YzAtNC41ODIgMS44ODMtOC43NjMgNC45MjItMTEuODAyYTE2LjU3NyAxNi41NzcgMCAwMTExLjgwMy00LjkxOWg4Ni41NTlhMTYuNjggMTYuNjggMCAwMTExLjgxNyA0LjkwNWwuNDc1LjUyNWMyLjc1MiAyLjk4OSA0LjQzMyA2Ljk2MSA0LjQzMyAxMS4yOTF2MS43MTN6XCIvPjxwYXRoIGZpbGw9XCIjRjZDRDQ1XCIgZD1cIk0zMTcuMTQ4IDBjNzUuMzUgMCAxMzYuNDMyIDYxLjA4MyAxMzYuNDMyIDEzNi40MzIgMCA3NS4zNS02MS4wODIgMTM2LjQzMi0xMzYuNDMyIDEzNi40MzJzLTEzNi40MzItNjEuMDgyLTEzNi40MzItMTM2LjQzMkMxODAuNzE2IDYxLjA4MyAyNDEuNzk4IDAgMzE3LjE0OCAwelwiLz48cGF0aCBmaWxsPVwiI0QxOTYzMlwiIGQ9XCJNMzE3LjE0OCAyMy44NjdjNjIuMTY4IDAgMTEyLjU2NSA1MC4zOTggMTEyLjU2NSAxMTIuNTY1IDAgNjIuMTY4LTUwLjM5NyAxMTIuNTY1LTExMi41NjUgMTEyLjU2NVMyMDQuNTgzIDE5OC42IDIwNC41ODMgMTM2LjQzMmMwLTYyLjE2NyA1MC4zOTctMTEyLjU2NSAxMTIuNTY1LTExMi41NjV6XCIvPjxwYXRoIGZpbGw9XCIjREJBNDdCXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiIGQ9XCJNMTIxLjE0OCAyNzkuODE5djE0Ny41NzhsNjMuMzY5IDMyLjY4YzQyLjg1OCAyNS4xODMgODUuNzEzIDI2LjA5NCAxMjguNTMxLjA5MmwuNTY4LS4zMTJhMTAyNy40MjUgMTAyNy40MjUgMCAwMDkwLjQxMS00Ny4yN2MyOS42MjktMTcuNDA1IDU4Ljk4My0zNi42MTkgODguMDItNTcuNzM4IDcuMzc3LTcuNDAxIDEwLjYwNC0xNS42MDggMTAuNjA0LTIzLjI2IDAtNS4zMzgtMS41Ni0xMC40NjItNC4zNDgtMTQuODc0LTIuNzk0LTQuNDI5LTYuODYyLTguMTYzLTExLjg1Mi0xMC43MDYtNy43NzMtMy45NjUtMTcuODI3LTUuMDMzLTI4Ljk2Ni0xLjQyOWwtNzguNjggMzkuMDA5LTcuNDQ0IDE3LjM3NC0uMzY1LjY3OGMtOC42ODIgMTMuNjA3LTIwLjExNSAyMi4wNTgtMzMuNjczIDI3LjEwNC0xMy4yMjQgNC45MjYtMjguMzgxIDYuNTQtNDQuOTIxIDYuNTU0LTIuMjcgMC00LjkwOS4yNjItNy41NzkuNTI1LTQuMDU3LjM5My04LjIwNi44MDEtMTIuMjY0LjQ4Ni04LjUyNS0uMTQ2LTEzLjk5LTQuMzQ4LTE2LjQ1MS05LjY3NWExNS45NDYgMTUuOTQ2IDAgMDEtMS40NS03LjA2IDE1Ljk0NiAxNS45NDYgMCAwMTEuNzktNi45NzNjMi43MS01LjE5NSA4LjM0NS05LjA3OCAxNi42NzktOC42NjdsLjE4NC4wMThjMTIuNTc5IDEuMTI3IDI1LjAwNiAxLjg4NiAzNi41MS42NyAxMS4wNzUtMS4xNzEgMjEuMzMxLTQuMjEzIDMwLjA4NC0xMC42MjVsLjEyOC0uMDg4YzUuMTY3LTMuNTQgOC4yODQtNy40NDggOS42OTUtMTEuMjg5IDEuMTU2LTMuMTQ5IDEuMTc0LTYuMzEyLjI1Ni05LjE4OC0uOTUxLTIuOTgzLTIuOTE5LTUuNzQ5LTUuNjUzLTcuOTk3LTMuNzgxLTMuMTA3LTkuMDMzLTUuMjIxLTE1LjIwNC01LjY0M2gtNTQuMTg4YTQuNzkyIDQuNzkyIDAgMDEtMi40OTMtLjczNGMtNjIuODEzLTM5LjU0Mi03OC40MjEtMzkuNDg1LTE0MC4zODYtMzkuMjc2bC0xMC45MTIuMDM2elwiLz48cGF0aCBmaWxsPVwiIzQzNDk0Q1wiIGQ9XCJNMTYuNzI1IDI1OS4xNDdoODYuNTU5YzUuMjc3IDAgOS41OTMgNC4zMTYgOS41OTMgOS41ODlWNDM3LjMyYzAgNS4yNzctNC4zMTYgOS41ODktOS41OTMgOS41ODlIMTYuNzI1Yy01LjI3NyAwLTkuNTkzLTQuMzEyLTkuNTkzLTkuNTg5VjI2OC43MzZjMC01LjI3MyA0LjMxNi05LjU4OSA5LjU5My05LjU4OXpcIi8+PHBhdGggZmlsbD1cIiMzNDM5M0VcIiBkPVwiTTExMi44NzcgMzMzLjc4NXYxMDMuNTM0YzAgNS4yNzgtNC4zMTYgOS41OTQtOS41OTQgOS41OTRIMTYuNzI2Yy01LjI3NyAwLTkuNTk0LTQuMzE2LTkuNTk0LTkuNTk0di0yMS41MzVsMTA1Ljc0NS04MS45OTl6XCIvPjxwYXRoIGZpbGw9XCIjQTg3OTI3XCIgZD1cIk0zMTMuMDQgMTUyLjYwOWMwIDQuMjctLjk3NiA4LjIxMS0yLjk0NSAxMS43Ni0xLjk2IDMuNTQ1LTQuODg5IDYuNDAyLTguNzMxIDguNTIzLTMuODQxIDIuMTE3LTguNjQzIDMuMTg1LTE0LjM1NyAzLjE4NS0yLjc1NiAwLTUuMjgyLS4xNTYtNy41NDYtLjQ0OGEzNi41NTEgMzYuNTUxIDAgMDEtNi41MjItMS40NjRjLTIuMDgxLS42NjktNC4yMzQtMS41ODUtNi40NTUtMi43Mzd2LTE3Ljc1MWMzLjQyNSAxLjk3NyA2LjkxNSAzLjUyNiAxMC40ODQgNC41OTggMy41NTMgMS4wNzYgNi43OTggMS42MTcgOS42OTEgMS42MTcgMS43MDUgMCAzLjEyNS0uMjUyIDQuMjA2LS43MjUgMS4wODgtLjQ3NiAxLjkwOC0xLjE0OCAyLjQ0MS0xLjk2LjU0LS44MjkuODA4LTEuNzkzLjgwOC0yLjg3NyAwLTEuMTg4LS4zMDgtMi4yNDktLjk0NC0zLjE0OS0uNjI1LS44OTMtMS43ODktMS44OTctMy4zOS0yLjk0NS0xLjYtMS4wNTMtMy45MDEtMi4zNjEtNi44MDItMy45MjZhNjguMTYzIDY4LjE2MyAwIDAxLTYuNjMtNC4wODFjLTEuOTY1LTEuMzY0LTMuNjU4LTIuOTA1LTUuMDQyLTQuNTk4LTEuMzg0LTEuNy0yLjQ4NS0zLjY5My0zLjIzNy01Ljk0Mi0uNzQ4LTIuMjQ0LTEuMTM2LTQuOTIxLTEuMTM2LTcuOTg2IDAtNC41OTggMS4wMTYtOC41MTkgMy4wNDUtMTEuNzI4IDIuMDI4LTMuMjE4IDQuOTQxLTUuNjkgOC42NzUtNy4zODcgNy4xMS0zLjIzMyAxNy4wMzgtMy4xODUgMjQuNTA0LTEuMDg0YTU0Ljk2IDU0Ljk2IDAgMDE5Ljg4MyAzLjg0MWwtNS40MDYgMTUuMzczYy0yLjg2LTEuNTQ4LTUuNTk4LTIuNzIxLTguMjE0LTMuNTI5LTIuNjE3LS44MDgtNS4wNjItMS4yMDQtNy4zMTktMS4yMDQtMS40OCAwLTIuNjkzLjIwOC0zLjYzMy42MzYtLjkyNC40MTYtMS42NDUgMS4wMDgtMi4wODUgMS43MDQtLjQ1Ni43MTctLjY4OCAxLjUzMy0uNjg4IDIuNDY2IDAgMS4yMDQuMzUyIDIuMjggMS4wMTYgMy4yLjY2OS45MjEgMS44NzcgMS45NDkgMy41OTcgMi45OTggMS43MjkgMS4wNTIgNC4xOTggMi40NzYgNy4zODcgNC4xNjUgMy4yODkgMS43MzYgNi4wODIgMy41NjEgOC4zNTEgNS40OTQgMi4yNTYgMS45MjggNC4wMjEgNC4xODkgNS4yMDIgNi43NSAxLjE4IDIuNTU3IDEuNzkyIDUuNjMgMS43OTIgOS4yMTF6bTI2LjI2MSAyMS40MzJsLS44NzYtLjA1M2E4Ni4zNjIgODYuMzYyIDAgMDEtNi4wMS0uNTggMTI4Ljc4NSAxMjguNzg1IDAgMDEtNS42NjYtLjg4IDcyLjggNzIuOCAwIDAxLTUuMjc0LTEuMTU3di0xNC45NGMyLjE5Ny4xOTYgNC41NzguMzU2IDcuMTI3LjQ4NCAyLjU0OC4xMzIgNS4xNDEuMjI4IDcuNzU4LjI5MiAyLjYxNy4wNiA1LjA1LjA5NiA3LjMxMS4wOTYuMTUyLS4wMDQuMzE2LjAwNC40NjguMDA0YTI0Ljg0IDI0Ljg0IDAgMDA0Ljg2NS0uNDg4IDYuNDg3IDYuNDg3IDAgMDAzLjE5LTEuNTczIDMuOTEyIDMuOTEyIDAgMDAxLjA2OC0yLjY4NWMwLS4wNzIgMC0uMTQ0LS4wMDQtLjIxMnYtMS4xMzZjLjAwNC0uMDc2LjAwNC0uMTU2LjAwNC0uMjMyIDAtMS4xNzctLjU2LTIuMjc3LTEuNTA5LTIuOTY1YTUuOTQ0IDUuOTQ0IDAgMDAtMy4zOTMtMS4wNjVIMzQzLjA4M2MtNy40OTkgMC0xMy4xODUtMS42NDgtMTcuMDU4LTQuOTQ2LTMuODctMy4zMDEtNS43OTgtOC44MjItNS43ODYtMTYuNTczdi0zLjE5N2MwLTcuMTA3IDIuMTI4LTEyLjQyIDYuMzk0LTE1Ljk0NSAzLjE2OS0yLjYzMyA3LjM5LTQuMjc4IDEyLjY2OC00Ljk0MnYtNy42MDdoMTAuNDY4djcuMzk5YzEuMzE2LjA2OCAyLjYzMi4xNzYgMy44MjkuMzA4IDIuNjM3LjI4OCA1LjIwMi42NDggNy41NTUgMS4wNiAyLjM1Ny40MTIgNC40ODUuODggNi4zNTQgMS4zMDl2MTQuOTM3YTI2NC40NjYgMjY0LjQ2NiAwIDAwLTEwLjAzMS0uNjMzYy0zLjcyMi0uMTY3LTcuMDk5LS4yNDgtMTAuMTM2LS4yMzVoLS4yOTJjLTEuNTI1IDAtMy4wNDUuMTMxLTQuNTQ2LjM4OGE1Ljk4IDUuOTggMCAwMC0zLjI5MyAxLjU0NCA0LjYwMiA0LjYwMiAwIDAwLTEuMTc2IDMuMDY5YzAgLjEwOC4wMDQuMjE2LjAxNi4zMnYuOTc2Yy0uMDA4LjEwNS0uMDE2LjIwOS0uMDE2LjMxMyAwIDEuMjkyLjU2IDIuNTE2IDEuNTM2IDMuMzY1YTcuNTE1IDcuNTE1IDAgMDA0LjE4MiAxLjI3NmMuMTkyIDAgLjM4NC0uMDEyLjU3Mi0uMDI0aDYuMzk0Yy4yNi0uMDA0LjUzMi0uMDEyLjc5My0uMDEyIDMuNjU3IDAgNy4yNjIuODg0IDEwLjQ5OSAyLjU3N2ExNi44MzggMTYuODM4IDAgMDE2Ljc4MiA3LjAzMSAyMS41NTggMjEuNTU4IDAgMDEyLjI3NyA5LjYzMXYzLjU5M2MwIDYuMTM4LTEuMDY4IDEwLjgyNC0zLjIwMSAxNC4wNjFhMTUuNjk2IDE1LjY5NiAwIDAxLTkuMTExIDYuNTM0IDQ1LjM2MyA0NS4zNjMgMCAwMS05LjAxNSAxLjUyNXY4LjMxOGgtMTAuNDR2LTguMzN6XCIvPjxwYXRoIGZpbGw9XCIjRkNENTUzXCIgZD1cIk0zMDkuNzgyIDE0OS4zNTljMCA0LjI3LS45NzYgOC4yMTEtMi45NDUgMTEuNzYtMS45NjEgMy41NDUtNC44ODkgNi40MDItOC43MzEgOC41MjMtMy44NDEgMi4xMTctOC42NDMgMy4xODUtMTQuMzU3IDMuMTg1LTIuNzU3IDAtNS4yODEtLjE1Ni03LjU0Ni0uNDQ4YTM2LjQ5NiAzNi40OTYgMCAwMS02LjUyMy0xLjQ2NWMtMi4wOC0uNjY4LTQuMjMzLTEuNTg0LTYuNDU0LTIuNzM3di0xNy43NWMzLjQyNiAxLjk3NyA2LjkxNSAzLjUyNiAxMC40ODQgNC41OTggMy41NTMgMS4wNzYgNi43OTggMS42MTYgOS42OTEgMS42MTYgMS43MDUgMCAzLjEyNS0uMjUyIDQuMjA1LS43MjQgMS4wODktLjQ3NiAxLjkwOS0xLjE0OCAyLjQ0MS0xLjk2LjU0MS0uODI5LjgwOS0xLjc5My44MDktMi44NzcgMC0xLjE4OS0uMzA4LTIuMjQ5LS45NDUtMy4xNDktLjYyNC0uODkzLTEuNzg4LTEuODk3LTMuMzg5LTIuOTQ1LTEuNi0xLjA1My0zLjkwMS0yLjM2MS02LjgwMi0zLjkyNmE2OC4xNjMgNjguMTYzIDAgMDEtNi42My00LjA4MWMtMS45NjUtMS4zNjUtMy42NTctMi45MDUtNS4wNDItNC41OTgtMS4zODQtMS43LTIuNDg1LTMuNjkzLTMuMjM3LTUuOTQyLS43NDgtMi4yNDUtMS4xMzctNC45MjEtMS4xMzctNy45ODcgMC00LjU5NyAxLjAxNy04LjUxOCAzLjA0Ni0xMS43MjcgMi4wMjgtMy4yMTggNC45NDEtNS42OSA4LjY3NC03LjM4NyAzLjc0Mi0xLjcwMSA4LjIxNS0yLjU0OSAxMy4zOTctMi41NDkgMy45NDEgMCA3LjY1NS40OTIgMTEuMTA4IDEuNDY1YTU0Ljk2IDU0Ljk2IDAgMDE5Ljg4MyAzLjg0MWwtNS40MDYgMTUuMzczYy0yLjg2MS0xLjU0OC01LjU5OC0yLjcyMS04LjIxNS0zLjUyOS0yLjYxNy0uODA4LTUuMDYxLTEuMjA0LTcuMzE4LTEuMjA0LTEuNDggMC0yLjY5My4yMDgtMy42MzMuNjM2LS45MjUuNDE2LTEuNjQ1IDEuMDA4LTIuMDg1IDEuNzA0LS40NTYuNzE3LS42ODggMS41MzMtLjY4OCAyLjQ2NSAwIDEuMjA1LjM1MiAyLjI4MSAxLjAxNiAzLjIwMS42NjguOTIxIDEuODc3IDEuOTQ5IDMuNTk3IDIuOTk4IDEuNzI5IDEuMDUyIDQuMTk4IDIuNDc2IDcuMzg3IDQuMTY1IDMuMjg5IDEuNzM2IDYuMDgyIDMuNTYxIDguMzUxIDUuNDk0IDIuMjU3IDEuOTI4IDQuMDIxIDQuMTg5IDUuMjAyIDYuNzUgMS4xOCAyLjU1NyAxLjc5MiA1LjYzIDEuNzkyIDkuMjExem0yNi4yNjkgMjEuNDMybC0uODc2LS4wNTNhODYuMzYyIDg2LjM2MiAwIDAxLTYuMDEtLjU4IDEyOC41NTIgMTI4LjU1MiAwIDAxLTUuNjY2LS44OCA3Mi44IDcyLjggMCAwMS01LjI3NC0xLjE1N1YxNTMuMThjMi4xOTcuMTk3IDQuNTc4LjM1NyA3LjEyNi40ODUgMi41NDkuMTMyIDUuMTQyLjIyOCA3Ljc1OS4yOTIgMi42MTcuMDYgNS4wNS4wOTYgNy4zMTEuMDk2LjE1Mi0uMDA0LjMxNi4wMDQuNDY4LjAwNGEyNC44NCAyNC44NCAwIDAwNC44NjUtLjQ4OCA2LjQ4NyA2LjQ4NyAwIDAwMy4xOS0xLjU3MyAzLjkxMiAzLjkxMiAwIDAwMS4wNjgtMi42ODVjMC0uMDcyIDAtLjE0NC0uMDA0LS4yMTJ2LTEuMTM3Yy4wMDQtLjA3Ni4wMDQtLjE1NS4wMDQtLjIzMiAwLTEuMTc2LS41Ni0yLjI3Ni0xLjUwOS0yLjk2NGE1Ljk0NCA1Ljk0NCAwIDAwLTMuMzkzLTEuMDY1aC01LjI3OGMtNy40OTggMC0xMy4xODQtMS42NDgtMTcuMDU4LTQuOTQ2LTMuODY5LTMuMzAxLTUuNzk3LTguODIzLTUuNzg1LTE2LjU3M3YtMy4xOTdjMC03LjEwNyAyLjEyOC0xMi40MiA2LjM5NC0xNS45NDYgMy4xNjktMi42MzMgNy4zOS00LjI3NyAxMi42NjgtNC45NDF2LTcuNjA3aDEwLjQ2OHY3LjM5OGE2Ny45NSA2Ny45NSAwIDAxMy44MjkuMzA5YzIuNjM3LjI4OCA1LjIwMi42NDggNy41NTUgMS4wNiAyLjM1Ni40MTIgNC40ODUuODggNi4zNTQgMS4zMDl2MTQuOTM3YTI2NC4zOTUgMjY0LjM5NSAwIDAwLTEwLjAzMi0uNjMzYy0zLjcyMS0uMTY4LTcuMDk4LS4yNDgtMTAuMTM1LS4yMzZoLS4yOTJjLTEuNTI1IDAtMy4wNDUuMTMyLTQuNTQ2LjM4OGE1Ljk4OSA1Ljk4OSAwIDAwLTMuMjkzIDEuNTQ1IDQuNjAyIDQuNjAyIDAgMDAtMS4xNzYgMy4wNjljMCAuMTA4LjAwNC4yMTYuMDE2LjMydi45NzZhNC4xIDQuMSAwIDAwLS4wMTYuMzEzYzAgMS4yOTIuNTYgMi41MTYgMS41MzYgMy4zNjVhNy41MTUgNy41MTUgMCAwMDQuMTgxIDEuMjc2Yy4xOTIgMCAuMzg1LS4wMTIuNTczLS4wMjRoNi4zOTRjLjI2LS4wMDQuNTMyLS4wMTIuNzkyLS4wMTIgMy42NTggMCA3LjI2Mi44ODQgMTAuNSAyLjU3N2ExNi44NDEgMTYuODQxIDAgMDE2Ljc4MiA3LjAzIDIxLjU2IDIxLjU2IDAgMDEyLjI3NyA5LjYzMnYzLjU5M2MwIDYuMTM4LTEuMDY5IDEwLjgyNC0zLjIwMSAxNC4wNmExNS42OTMgMTUuNjkzIDAgMDEtOS4xMTEgNi41MzUgNDUuMjg5IDQ1LjI4OSAwIDAxLTkuMDE1IDEuNTI0djguMzE5aC0xMC40NHYtOC4zM3pcIi8+PC9zdmc+JztcclxuIiwidmFyIE1ldGFNYXNrSW5wYWdlUHJvdmlkZXIgPSByZXF1aXJlKCdAbWV0YW1hc2svaW5wYWdlLXByb3ZpZGVyJykuTWV0YU1hc2tJbnBhZ2VQcm92aWRlcjtcclxudmFyIFBvcnRTdHJlYW0gPSByZXF1aXJlKCdleHRlbnNpb24tcG9ydC1zdHJlYW0nKTtcclxudmFyIGRldGVjdCA9IHJlcXVpcmUoJ2RldGVjdC1icm93c2VyJykuZGV0ZWN0O1xyXG52YXIgYnJvd3NlciA9IGRldGVjdCgpO1xyXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcuanNvbicpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZU1ldGFNYXNrUHJvdmlkZXIoKSB7XHJcbiAgICB2YXIgcHJvdmlkZXI7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBjdXJyZW50TWV0YU1hc2tJZCA9IGdldE1ldGFNYXNrSWQoKTtcclxuICAgICAgICB2YXIgbWV0YW1hc2tQb3J0ID0gY2hyb21lLnJ1bnRpbWUuY29ubmVjdChjdXJyZW50TWV0YU1hc2tJZCk7XHJcbiAgICAgICAgdmFyIHBsdWdpblN0cmVhbSA9IG5ldyBQb3J0U3RyZWFtKG1ldGFtYXNrUG9ydCk7XHJcbiAgICAgICAgcHJvdmlkZXIgPSBuZXcgTWV0YU1hc2tJbnBhZ2VQcm92aWRlcihwbHVnaW5TdHJlYW0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmRpcihcIk1ldGFtYXNrIGNvbm5lY3QgZXJyb3IgXCIsIGUpO1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJvdmlkZXI7XHJcbn07XHJcbmZ1bmN0aW9uIGdldE1ldGFNYXNrSWQoKSB7XHJcbiAgICBzd2l0Y2ggKGJyb3dzZXIgJiYgYnJvd3Nlci5uYW1lKSB7XHJcbiAgICAgICAgY2FzZSAnY2hyb21lJzpcclxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZy5DSFJPTUVfSUQ7XHJcbiAgICAgICAgY2FzZSAnZmlyZWZveCc6XHJcbiAgICAgICAgICAgIHJldHVybiBjb25maWcuRklSRUZPWF9JRDtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlnLkNIUk9NRV9JRDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xyXG52YXIgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5yb290LmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xyXG52YXIgcm9vdERpdiA9IFJlYWN0RE9NLmNyZWF0ZVJvb3Qocm9vdCk7XHJcbnJvb3REaXYucmVuZGVyKF9qc3goUmVhY3QuU3RyaWN0TW9kZSwgeyBjaGlsZHJlbjogX2pzeChBcHAsIHt9KSB9KSk7XHJcbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZE8gPSB7fTsiLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZShmdW5jdGlvbihpZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMDsgfSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdGhyaWZ0eW5mdF9leHRlbnNpb25cIl0gPSBzZWxmW1wid2VicGFja0NodW5rdGhyaWZ0eW5mdF9leHRlbnNpb25cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfZXRoZXJzcHJvamVjdF9wcm92aWRlcnNfbGliX2VzbV93ZWIzLXByb3ZpZGVyX2pzLW5vZGVfbW9kdWxlc19tZXRhbWFza19pLWNkODQzMFwiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHN4XCIpOyB9KVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==