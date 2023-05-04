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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  -webkit-font-feature-settings: normal;\n          font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.static {\n  position: static;\n}\n.flex {\n  display: flex;\n}\n.h-\\[400px\\] {\n  height: 400px;\n}\n.w-\\[340px\\] {\n  width: 340px;\n}\n.justify-center {\n  justify-content: center;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.bg-indigo-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(238 242 255 / var(--tw-bg-opacity));\n}\n.bg-slate-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 250 252 / var(--tw-bg-opacity));\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.align-middle {\n  vertical-align: middle;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.text-indigo-600 {\n  --tw-text-opacity: 1;\n  color: rgb(79 70 229 / var(--tw-text-opacity));\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.filter {\n  -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.hover\\:bg-indigo-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(224 231 255 / var(--tw-bg-opacity));\n}\n", "",{"version":3,"sources":["webpack://./src/assets/tailwind.css","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n",null],"sourceRoot":""}]);
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
    chrome.runtime.connect({ name: 'popup' });
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
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: 'flex justify-center align-middle h-[400px] w-[340px] bg-slate-50' }, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", __assign({ type: 'button', className: 'rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100', onClick: handleConnectToMetamask }, { children: account ? 'Connected' : 'Connect to Metamask' })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.Toaster, {})] })));
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
var Eth = __webpack_require__(/*! ethjs */ "./node_modules/ethjs/lib/index.js");
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
/* harmony export */   "RestEndpoint": function() { return /* binding */ RestEndpoint; }
/* harmony export */ });
var AvaxTestNet = 'https://api.avax-test.network/ext/bc/C/rpc';
var AvaxMainNet = 'https://api.avax.network/ext/bc/C/rpc';
var AvaxTestNetChainId = 43113;
var RestEndpoint = 'http://localhost:5000';


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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_ethersproject_providers_lib_esm_web3-provider_js-node_modules_metamask_i-25c78e"], function() { return __webpack_require__("./src/index.tsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixxQkFBcUIsTUFBTSxNQUFNLFdBQVcsTUFBTSxXQUFXLE1BQU0sS0FBSyxxQkFBcUIsK0JBQStCLG9CQUFvQixxQkFBcUIsV0FBVyxxQkFBcUIscUJBQXFCLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sUUFBUSxNQUFNLFNBQVMscUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLFlBQVksb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdB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QUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRCw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQSw4Q0FBOEM7O1dBRTlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsbUNBQW1DO1dBQ3BFO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NsREE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0Esa0xBQWtMLGdEQUFnRDtVQUNsTyIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uLy4vc3JjL2Fzc2V0cy90YWlsd2luZC5jc3MiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vLi9zcmMvYXNzZXRzL3RhaWx3aW5kLmNzcz83NTVhIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vLi9zcmMvY2xpZW50L2VuZHBvaW50cy50cyIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi8uL3NyYy9jbGllbnQvaHR0cC1jbGllbnQudHMiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vLi9zcmMvY2xpZW50L2luZGV4LnRzIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uLy4vc3JjL2NsaWVudC90b2tlbi50cyIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi8uL3NyYy9oZWxwZXJzL2Nvbm5lY3RNZXRhbWFzay50cyIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi8uL3NyYy9oZWxwZXJzL2NvbnN0LnRzIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uLy4vc3JjL2hlbHBlcnMvY3JlYXRlUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL2lnbm9yZWR8QzpcXFVzZXJzXFxzdW1vblxcT25lRHJpdmVcXERlc2t0b3BcXHdvcmtzcGFjZVxcdGhyaWZ0eW5mdF9leHRlbnNpb25cXG5vZGVfbW9kdWxlc1xcQG1ldGFtYXNrXFxvYmplY3QtbXVsdGlwbGV4XFxub2RlX21vZHVsZXNcXHJlYWRhYmxlLXN0cmVhbVxcbGliXFxpbnRlcm5hbFxcc3RyZWFtc3x1dGlsIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL2lnbm9yZWR8QzpcXFVzZXJzXFxzdW1vblxcT25lRHJpdmVcXERlc2t0b3BcXHdvcmtzcGFjZVxcdGhyaWZ0eW5mdF9leHRlbnNpb25cXG5vZGVfbW9kdWxlc1xcQG1ldGFtYXNrXFxvYmplY3QtbXVsdGlwbGV4XFxub2RlX21vZHVsZXNcXHJlYWRhYmxlLXN0cmVhbVxcbGlifHV0aWwiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vaWdub3JlZHxDOlxcVXNlcnNcXHN1bW9uXFxPbmVEcml2ZVxcRGVza3RvcFxcd29ya3NwYWNlXFx0aHJpZnR5bmZ0X2V4dGVuc2lvblxcbm9kZV9tb2R1bGVzXFxibi5qc1xcbGlifGJ1ZmZlciIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi9pZ25vcmVkfEM6XFxVc2Vyc1xcc3Vtb25cXE9uZURyaXZlXFxEZXNrdG9wXFx3b3Jrc3BhY2VcXHRocmlmdHluZnRfZXh0ZW5zaW9uXFxub2RlX21vZHVsZXNcXGpzb24tcnBjLW1pZGRsZXdhcmUtc3RyZWFtXFxub2RlX21vZHVsZXNcXHJlYWRhYmxlLXN0cmVhbVxcbGliXFxpbnRlcm5hbFxcc3RyZWFtc3x1dGlsIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL2lnbm9yZWR8QzpcXFVzZXJzXFxzdW1vblxcT25lRHJpdmVcXERlc2t0b3BcXHdvcmtzcGFjZVxcdGhyaWZ0eW5mdF9leHRlbnNpb25cXG5vZGVfbW9kdWxlc1xcanNvbi1ycGMtbWlkZGxld2FyZS1zdHJlYW1cXG5vZGVfbW9kdWxlc1xccmVhZGFibGUtc3RyZWFtXFxsaWJ8dXRpbCIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi9pZ25vcmVkfEM6XFxVc2Vyc1xcc3Vtb25cXE9uZURyaXZlXFxEZXNrdG9wXFx3b3Jrc3BhY2VcXHRocmlmdHluZnRfZXh0ZW5zaW9uXFxub2RlX21vZHVsZXNcXHB1bXB8ZnMiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vaWdub3JlZHxDOlxcVXNlcnNcXHN1bW9uXFxPbmVEcml2ZVxcRGVza3RvcFxcd29ya3NwYWNlXFx0aHJpZnR5bmZ0X2V4dGVuc2lvblxcbm9kZV9tb2R1bGVzXFxyZWFkYWJsZS1zdHJlYW1cXGxpYlxcaW50ZXJuYWxcXHN0cmVhbXN8dXRpbCIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi9pZ25vcmVkfEM6XFxVc2Vyc1xcc3Vtb25cXE9uZURyaXZlXFxEZXNrdG9wXFx3b3Jrc3BhY2VcXHRocmlmdHluZnRfZXh0ZW5zaW9uXFxub2RlX21vZHVsZXNcXHJlYWRhYmxlLXN0cmVhbVxcbGlifHV0aWwiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2FtZCBvcHRpb25zIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuISB0YWlsd2luZGNzcyB2My4zLjIgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXFxuKi8vKlxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cXG59XFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cXG42LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi8gLyogMyAqL1xcbiAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7IC8qIDQgKi9cXG4gIC13ZWJraXQtZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7XFxuICAgICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiA1ICovXFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiA2ICovXFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxcbiovXFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cXG4qL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qXFxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgbW9ub2AgZm9udCBmYW1pbHkgYnkgZGVmYXVsdC5cXG4yLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLypcXG5QcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50YWJsZSB7XFxuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXFxufVxcblxcbi8qXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBmb250LXdlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMiAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXFxuKi9cXG5cXG46LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogYXV0bztcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgYDppbnZhbGlkYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxcbiovXFxuXFxuOi1tb3otdWktaW52YWxpZCB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcbiovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKlxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4qL1xcblxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLypcXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXFxuKi9cXG5cXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmhyLFxcbmZpZ3VyZSxcXG5wLFxcbnByZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmxlZ2VuZCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5vbCxcXG51bCxcXG5tZW51IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxcbiovXFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLypcXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXFxuKi9cXG5cXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLypcXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxcbiovXFxuOmRpc2FibGVkIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLypcXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuMi4gQWRkIGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXFxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxcbiovXFxuXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyxcXG5jYW52YXMsXFxuYXVkaW8sXFxuaWZyYW1lLFxcbmVtYmVkLFxcbm9iamVjdCB7XFxuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4qL1xcblxcbmltZyxcXG52aWRlbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgZWxlbWVudHMgd2l0aCB0aGUgSFRNTCBoaWRkZW4gYXR0cmlidXRlIHN0YXkgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctcGFuLXg6ICA7XFxuICAtLXR3LXBhbi15OiAgO1xcbiAgLS10dy1waW5jaC16b29tOiAgO1xcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxuICAtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb246ICA7XFxuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcXG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XFxuICAtLXR3LW9yZGluYWw6ICA7XFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xcbiAgLS10dy1ibHVyOiAgO1xcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1jb250cmFzdDogIDtcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1pbnZlcnQ6ICA7XFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcbiAgLS10dy1zZXBpYTogIDtcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcbn1cXG5cXG46Oi13ZWJraXQtYmFja2Ryb3Age1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XFxuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxuXFxuOjpiYWNrZHJvcCB7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XFxuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctcGFuLXg6ICA7XFxuICAtLXR3LXBhbi15OiAgO1xcbiAgLS10dy1waW5jaC16b29tOiAgO1xcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxuICAtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb246ICA7XFxuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcXG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XFxuICAtLXR3LW9yZGluYWw6ICA7XFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xcbiAgLS10dy1ibHVyOiAgO1xcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1jb250cmFzdDogIDtcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1pbnZlcnQ6ICA7XFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcbiAgLS10dy1zZXBpYTogIDtcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDY0MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEyODBweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE1MzZweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTUzNnB4O1xcbiAgfVxcbn1cXG4uc3RhdGljIHtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxufVxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5oLVxcXFxbNDAwcHhcXFxcXSB7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG4udy1cXFxcWzM0MHB4XFxcXF0ge1xcbiAgd2lkdGg6IDM0MHB4O1xcbn1cXG4uanVzdGlmeS1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5yb3VuZGVkLW1kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcbn1cXG4uYmctaW5kaWdvLTUwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzggMjQyIDI1NSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXNsYXRlLTUwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDggMjUwIDI1MiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLnB4LTMge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcXG59XFxuLnB5LTIge1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcbi5hbGlnbi1taWRkbGUge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLnRleHQtc20ge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4uZm9udC1zZW1pYm9sZCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4udGV4dC1pbmRpZ28tNjAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYig3OSA3MCAyMjkgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnNoYWRvdy1zbSB7XFxuICAtLXR3LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiKDAgMCAwIC8gMC4wNSk7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDFweCAycHggMCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuLmZpbHRlciB7XFxuICAtd2Via2l0LWZpbHRlcjogdmFyKC0tdHctYmx1cikgdmFyKC0tdHctYnJpZ2h0bmVzcykgdmFyKC0tdHctY29udHJhc3QpIHZhcigtLXR3LWdyYXlzY2FsZSkgdmFyKC0tdHctaHVlLXJvdGF0ZSkgdmFyKC0tdHctaW52ZXJ0KSB2YXIoLS10dy1zYXR1cmF0ZSkgdmFyKC0tdHctc2VwaWEpIHZhcigtLXR3LWRyb3Atc2hhZG93KTtcXG4gICAgICAgICAgZmlsdGVyOiB2YXIoLS10dy1ibHVyKSB2YXIoLS10dy1icmlnaHRuZXNzKSB2YXIoLS10dy1jb250cmFzdCkgdmFyKC0tdHctZ3JheXNjYWxlKSB2YXIoLS10dy1odWUtcm90YXRlKSB2YXIoLS10dy1pbnZlcnQpIHZhcigtLXR3LXNhdHVyYXRlKSB2YXIoLS10dy1zZXBpYSkgdmFyKC0tdHctZHJvcC1zaGFkb3cpO1xcbn1cXG4uaG92ZXJcXFxcOmJnLWluZGlnby0xMDA6aG92ZXIge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCAyMzEgMjU1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3RhaWx3aW5kLmNzc1wiLFwiPG5vIHNvdXJjZT5cIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQWMsQ0FBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLHNCQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsbUJBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Ozs7OztDQUFjOztBQUFkO0VBQUEsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjLEVBQWQsTUFBYztFQUFkLFdBQWMsRUFBZCxNQUFjO0VBQWQsNE5BQWMsRUFBZCxNQUFjO0VBQWQscUNBQWM7VUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx5Q0FBYztVQUFkLGlDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG1CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsK0dBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7QUFBQTs7QUFB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QUFkLGlCQUFjO0VBQWQsa0JBQWM7RUFBZCxjQUFjO0VBQWQsZ0JBQWM7RUFBZCxhQUFjO0VBQWQsbUJBQWM7RUFBZCxxQkFBYztFQUFkLDJCQUFjO0VBQWQseUJBQWM7RUFBZCwwQkFBYztFQUFkLDJCQUFjO0VBQWQsdUJBQWM7RUFBZCx3QkFBYztFQUFkLHlCQUFjO0VBQWQ7QUFBYztBQUNkO0VBQUE7QUFBb0I7QUFBcEI7O0VBQUE7SUFBQTtFQUFvQjtBQUFBO0FBQXBCOztFQUFBO0lBQUE7RUFBb0I7QUFBQTtBQUFwQjs7RUFBQTtJQUFBO0VBQW9CO0FBQUE7QUFBcEI7O0VBQUE7SUFBQTtFQUFvQjtBQUFBO0FBQXBCOztFQUFBO0lBQUE7RUFBb0I7QUFBQTtBQUNwQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSwwQ0FBbUI7RUFBbkIsdURBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEseUxBQW1CO1VBQW5CO0FBQW1CO0FBRm5CO0VBQUEsbUJDQUE7RURBQTtDQ0FBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXCIsbnVsbF0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vdGFpbHdpbmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL3RhaWx3aW5kLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL2Fzc2V0cy90YWlsd2luZC5jc3MnO1xyXG4vLyBpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xyXG5pbXBvcnQgeyBBdmF4VGVzdE5ldENoYWluSWQgfSBmcm9tICcuL2hlbHBlcnMvY29uc3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0TWV0YU1hc2sgfSBmcm9tICcuL2hlbHBlcnMvY29ubmVjdE1ldGFtYXNrJztcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcclxuaW1wb3J0IHRvYXN0LCB7IFRvYXN0ZXIgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xyXG5pbXBvcnQgV2ViM1Rva2VuIGZyb20gJ3dlYjMtdG9rZW4nO1xyXG5pbXBvcnQgeyBzZXRBdXRoVG9rZW4gfSBmcm9tICcuL2NsaWVudC90b2tlbic7XHJcbmltcG9ydCBjbGllbnQgZnJvbSAnLi9jbGllbnQnO1xyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIF9hID0gUmVhY3QudXNlU3RhdGUoJycpLCBhY2NvdW50ID0gX2FbMF0sIHNldEFjY291bnQgPSBfYVsxXTtcclxuICAgIHZhciBfYiA9IFJlYWN0LnVzZVN0YXRlKCcnKSwgdG9rZW4gPSBfYlswXSwgc2V0VG9rZW4gPSBfYlsxXTtcclxuICAgIHZhciBfYyA9IFJlYWN0LnVzZVN0YXRlKHt9KSwgdXNlciA9IF9jWzBdLCBzZXRVc2VyID0gX2NbMV07XHJcbiAgICBjaHJvbWUucnVudGltZS5jb25uZWN0KHsgbmFtZTogJ3BvcHVwJyB9KTtcclxuICAgIHZhciBoYW5kbGVDb25uZWN0VG9NZXRhbWFzayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3Byb3ZpZGVyID0gY29ubmVjdE1ldGFNYXNrKCk7XHJcbiAgICAgICAgdmFyIGNoYWluSWQgPSBOdW1iZXIoX3Byb3ZpZGVyLmNoYWluSWQpO1xyXG4gICAgICAgIGlmIChjaGFpbklkICE9PSBBdmF4VGVzdE5ldENoYWluSWQpIHtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoJ1BsZWFzZSBjb25uZWN0IHRvIEF2YWxhbmNoZSBGdWppIFRlc3RuZXQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICAgIHZhciBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihfcHJvdmlkZXIpO1xyXG4gICAgICAgIHByb3ZpZGVyLnNlbmQoJ2V0aF9yZXF1ZXN0QWNjb3VudHMnLCBbXSkudGhlbihmdW5jdGlvbiAoYWNjb3VudHMpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHNpZ25lcl8xLCB0b2tlbl8xLCB1c2VyXzEsIGVycm9yXzE7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25lcl8xID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFdlYjNUb2tlbi5zaWduKGZ1bmN0aW9uIChtc2cpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBzaWduZXJfMS5zaWduTWVzc2FnZShtc2cpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTsgfSk7IH0sICcxZCcpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRva2VuKHRva2VuXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBdXRoVG9rZW4odG9rZW5fMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNsaWVudC51c2Vycy5yZWdpc3RlcigpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlcih1c2VyXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBY2NvdW50KGFjY291bnRzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlcl8xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcignUGxlYXNlIGNvbm5lY3QgdG8gQXZhbGFuY2hlIEZ1amkgVGVzdG5ldCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBY2NvdW50KCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG9rZW4oJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6ICdmbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLW1pZGRsZSBoLVs0MDBweF0gdy1bMzQwcHhdIGJnLXNsYXRlLTUwJyB9LCB7IGNoaWxkcmVuOiBbX2pzeChcImJ1dHRvblwiLCBfX2Fzc2lnbih7IHR5cGU6ICdidXR0b24nLCBjbGFzc05hbWU6ICdyb3VuZGVkLW1kIGJnLWluZGlnby01MCBweC0zIHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtaW5kaWdvLTYwMCBzaGFkb3ctc20gaG92ZXI6YmctaW5kaWdvLTEwMCcsIG9uQ2xpY2s6IGhhbmRsZUNvbm5lY3RUb01ldGFtYXNrIH0sIHsgY2hpbGRyZW46IGFjY291bnQgPyAnQ29ubmVjdGVkJyA6ICdDb25uZWN0IHRvIE1ldGFtYXNrJyB9KSksIF9qc3goVG9hc3Rlciwge30pXSB9KSkpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiZXhwb3J0IHZhciBBUElfRU5EUE9JTlRTID0ge1xyXG4gICAgUFJPRFVDVFNfQUxMOiAnL2dldHB1dG9uc2FsZScsXHJcbiAgICBQUk9EVUNUUzogJy9nZXRQdXRvbnNhbGVQZXJQYWdlJyxcclxuICAgIFBST0RVQ1RTX0RFVEFJTDogJy9nZXRQdXRvbmxpc3RBbmRBdWN0aW9ubGlzdCcsXHJcbiAgICBQUk9EVUNUU19QT1BVTEFSOiAnL3BvcHVsYXItcHJvZHVjdHMnLFxyXG4gICAgUFJPRFVDVFNfRlJFRV9ET1dOTE9BRDogJy9mcmVlLWRvd25sb2Fkcy9kaWdpdGFsLWZpbGUnLFxyXG4gICAgUFJPRFVDVFNfUkVWSUVXUzogJy9yZXZpZXdzJyxcclxuICAgIFBST0RVQ1RTX0FERF9SRVZJRVdTOiAnL2FkZFJldmlldycsXHJcbiAgICBQUk9EVUNUU19NRVNTQUdFUzogJy9tZXNzYWdlcycsXHJcbiAgICBQUk9EVUNUU19BRERfTUVTU0FHRVM6ICdhZGRNZXNzYWdlJyxcclxuICAgIFBST0RVQ1RTX1JFVklFV1NfQUJVU0VfUkVQT1JUOiAnL2FidXNpdmVfcmVwb3J0cycsXHJcbiAgICBQUk9EVUNUU19RVUVTVElPTlM6ICcvcXVlc3Rpb25zJyxcclxuICAgIFBST0RVQ1RTX0FERF9RVUVTVElPTlM6ICcvYWRkX3F1ZXN0aW9ucycsXHJcbiAgICBQUk9EVUNUU19VUERBVEU6ICcvdXBkYXRlcHV0b25zYWxlJyxcclxuICAgIFBST0RVQ1RTX0ZFRURCQUNLOiAnL2ZlZWRiYWNrcycsXHJcbiAgICBMT0dfQUREOiAnL2FkZExvZycsXHJcbiAgICBDQVRFR09SSUVTOiAnL2NhdGVnb3JpZXMnLFxyXG4gICAgVEFHUzogJy90YWdzJyxcclxuICAgIFRZUEVTOiAnL3R5cGVzJyxcclxuICAgIFNIT1BTOiAnL3Nob3BzJyxcclxuICAgIFRPUF9TSE9QUzogJy90b3Atc2hvcHMnLFxyXG4gICAgT1JERVJTOiAnL29yZGVycycsXHJcbiAgICBPUkRFUlNfQ0hFQ0tPVVRfVkVSSUZZOiAnb3JkZXJzL2NoZWNrb3V0L3ZlcmlmeScsXHJcbiAgICBPUkRFUlNfRE9XTkxPQURTOiAnL2Rvd25sb2FkcycsXHJcbiAgICBHRU5FUkFURV9ET1dOTE9BREFCTEVfUFJPRFVDVF9MSU5LOiAnL2Rvd25sb2Fkcy9kaWdpdGFsLWZpbGUnLFxyXG4gICAgVVNFUlM6ICcvdXNlcnMnLFxyXG4gICAgVVNFUlNfTUU6ICcvdXNlckluZm8nLFxyXG4gICAgVVNFUlNfTE9HSU46ICcvdXNlckluZm8nLFxyXG4gICAgVVNFUlNfUkVHSVNURVI6ICcvcmVnaXN0ZXInLFxyXG4gICAgVVNFUlNfRk9SR09UX1BBU1NXT1JEOiAnL2ZvcmdldC1wYXNzd29yZCcsXHJcbiAgICBVU0VSU19WRVJJRllfRk9SR09UX1BBU1NXT1JEX1RPS0VOOiAnL3ZlcmlmeS1mb3JnZXQtcGFzc3dvcmQtdG9rZW4nLFxyXG4gICAgVVNFUlNfUkVTRVRfUEFTU1dPUkQ6ICcvcmVzZXQtcGFzc3dvcmQnLFxyXG4gICAgVVNFUlNfQ0hBTkdFX1BBU1NXT1JEOiAnL2NoYW5nZS1wYXNzd29yZCcsXHJcbiAgICBVU0VSU19MT0dPVVQ6ICcvbG9nb3V0JyxcclxuICAgIFVTRVJTX1dJU0hMSVNUOiAnL215LXdpc2hsaXN0cycsXHJcbiAgICBXSVNITElTVDogJy93aXNobGlzdHMnLFxyXG4gICAgVVNFUlNfV0lTSExJU1RfVE9HR0xFOiAnL3dpc2hsaXN0cy90b2dnbGUnLFxyXG4gICAgTVlfUkVQT1JUUzogJy9teS1yZXBvcnRzJyxcclxuICAgIE1ZX1FVRVNUSU9OUzogJy9teS1xdWVzdGlvbnMnLFxyXG4gICAgU0VUVElOR1M6ICcvc2V0dGluZ3MnLFxyXG4gICAgU0VUVElOR1NfQ09OVEFDVF9VUzogJy9jb250YWN0LXVzJyxcclxuICAgIFVQTE9BRFM6ICcvYXR0YWNobWVudHMnLFxyXG4gICAgRk9MTE9XX1NIT1A6ICdmb2xsb3ctc2hvcCcsXHJcbiAgICBGT0xMT1dFRF9TSE9QUzogJ2ZvbGxvd2VkLXNob3BzJyxcclxuICAgIEZPTExPV0VEX1NIT1BTX1BST0RVQ1RTOiAnZm9sbG93ZWQtc2hvcHMtcG9wdWxhci1wcm9kdWN0cycsXHJcbiAgICBESVNQVVRFUzogJy9kaXNwdXRlcycsXHJcbiAgICBBRERfRElTUFVURTogJy9hZGREaXNwdXRlJyxcclxuICAgIFVQREFURV9ESVNQVVRFOiAnL3VwZGF0ZURpc3B1dGUnLFxyXG4gICAgVVBEQVRFX01JTEVTVE9ORTogJy91cGRhdGVNaWxlc3RvbmUnLFxyXG4gICAgR0VUX1NBTVBMRV9JTUFHRVM6ICcvc2FtcGxlLWltYWdlcycsXHJcbiAgICBTRVRfU0FNUExFX0lNQUdFUzogJy9zZXQtc2FtcGxlLWltYWdlcycsXHJcbn07XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgZ2V0QXV0aFRva2VuLCByZW1vdmVBdXRoVG9rZW4gfSBmcm9tICcuL3Rva2VuJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZXN0RW5kcG9pbnQgfSBmcm9tICcuLi9oZWxwZXJzL2NvbnN0JztcclxuLy8gVE9ETzogRHVlIHRvIHdpbmRvd3MgdGltZW91dCB3YXMgc2V0IHRvIDE1MDAwXHJcbnZhciBBeGlvcyA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBSZXN0RW5kcG9pbnQsXHJcbiAgICAvLyB0aW1lb3V0OiAxNTAwMDAwMDAsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbn0pO1xyXG5heGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgLy8gc3R1ZmZcclxuICAgIGlmICghKChfYSA9IGNvbmZpZy51cmwpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pbmNsdWRlcygnbmZ0c3RvcmFnZS5saW5rJykpKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gZ2V0QXV0aFRva2VuKCk7XHJcbiAgICAgICAgY29uZmlnLmhlYWRlcnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY29uZmlnLmhlYWRlcnMpLCB7IEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiLmNvbmNhdCh0b2tlbiA/IHRva2VuIDogJycpIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxufSk7XHJcbi8vIENoYW5nZSByZXF1ZXN0IGRhdGEvZXJyb3IgaGVyZVxyXG5BeGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgaWYgKCEoKF9hID0gY29uZmlnLnVybCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluY2x1ZGVzKCduZnRzdG9yYWdlLmxpbmsnKSkpIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSBnZXRBdXRoVG9rZW4oKTtcclxuICAgICAgICBjb25maWcuaGVhZGVycyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjb25maWcuaGVhZGVycyksIHsgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIuY29uY2F0KHRva2VuID8gdG9rZW4gOiAnJykgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG59LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbn0pO1xyXG5BeGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2U7IH0sIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgaWYgKChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkgfHxcclxuICAgICAgICAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDMpIHx8XHJcbiAgICAgICAgKGVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSA9PT0gJ1BJWEVSX0VSUk9SLk5PVF9BVVRIT1JJWkVEJykpIHtcclxuICAgICAgICByZW1vdmVBdXRoVG9rZW4oKTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbn0pO1xyXG52YXIgSHR0cENsaWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEh0dHBDbGllbnQoKSB7XHJcbiAgICB9XHJcbiAgICBIdHRwQ2xpZW50LmdldCA9IGZ1bmN0aW9uICh1cmwsIHBhcmFtcykge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBBeGlvcy5nZXQodXJsLCB7IHBhcmFtczogcGFyYW1zIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2UuZGF0YV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEh0dHBDbGllbnQucG9zdCA9IGZ1bmN0aW9uICh1cmwsIGRhdGEsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgQXhpb3MucG9zdCh1cmwsIGRhdGEsIG9wdGlvbnMpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2UuZGF0YV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEh0dHBDbGllbnQucHV0ID0gZnVuY3Rpb24gKHVybCwgZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBBeGlvcy5wdXQodXJsLCBkYXRhKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlLmRhdGFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBIdHRwQ2xpZW50LmRlbGV0ZSA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgQXhpb3MuZGVsZXRlKHVybCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZS5kYXRhXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgSHR0cENsaWVudC5mb3JtYXRTZWFyY2hQYXJhbXMgPSBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHBhcmFtcylcclxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gX2FbMV07XHJcbiAgICAgICAgICAgIHJldHVybiBCb29sZWFuKHZhbHVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICB2YXIgayA9IF9hWzBdLCB2ID0gX2FbMV07XHJcbiAgICAgICAgICAgIHJldHVybiBbJ3R5cGUnLCAnY2F0ZWdvcmllcycsICd0YWdzJywgJ2F1dGhvcicsICdtYW51ZmFjdHVyZXInXS5pbmNsdWRlcyhrKVxyXG4gICAgICAgICAgICAgICAgPyBcIlwiLmNvbmNhdChrLCBcIi5zbHVnOlwiKS5jb25jYXQodilcclxuICAgICAgICAgICAgICAgIDogXCJcIi5jb25jYXQoaywgXCI6XCIpLmNvbmNhdCh2KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuam9pbignOycpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBIdHRwQ2xpZW50O1xyXG59KCkpO1xyXG5leHBvcnQgeyBIdHRwQ2xpZW50IH07XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VIVFRQUmVxKCkge1xyXG4gICAgdmFyIF9hID0gdXNlU3RhdGUoZmFsc2UpLCBpc0xvYWRpbmcgPSBfYVswXSwgc2V0SXNMb2FkaW5nID0gX2FbMV07XHJcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShudWxsKSwgZXJyb3IgPSBfYlswXSwgc2V0RXJyb3IgPSBfYlsxXTtcclxuICAgIHZhciBzZW5kUmVxdWVzdCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChyZXFDb25maWcsIGV4ZWN1dGVGbikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBlcnJfMTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcmVxQ29uZmlnLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IHJlcUNvbmZpZy5tZXRob2QgPyByZXFDb25maWcubWV0aG9kIDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVxQ29uZmlnLmRhdGEgPyByZXFDb25maWcuZGF0YSA6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWN1dGVGbihyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycl8xLnJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25zZSB3YXMgcmVjZWl2ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBlcnJvci5yZXF1ZXN0YCBpcyBhbiBpbnN0YW5jZSBvZiBYTUxIdHRwUmVxdWVzdCBpbiB0aGUgYnJvd3NlciBhbmQgYW4gaW5zdGFuY2Ugb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHAuQ2xpZW50UmVxdWVzdCBpbiBub2RlLmpzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJfMS5tZXNzYWdlIHx8ICdSZXF1ZXN0IGZhaWxlZCEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJfMS5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd2VudCB3cm9uZyEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzTG9hZGluZzogaXNMb2FkaW5nLFxyXG4gICAgICAgIGVycm9yOiBlcnJvcixcclxuICAgICAgICBzZW5kUmVxdWVzdDogc2VuZFJlcXVlc3QsXHJcbiAgICB9O1xyXG59XHJcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn07XHJcbmltcG9ydCB7IEFQSV9FTkRQT0lOVFMgfSBmcm9tICcuL2VuZHBvaW50cyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICcuL2h0dHAtY2xpZW50JztcclxudmFyIENsaWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENsaWVudCgpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0ge1xyXG4gICAgICAgICAgICBhbGw6IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9hID09PSB2b2lkIDApIHsgX2EgPSB7fTsgfVxyXG4gICAgICAgICAgICAgICAgdmFyIFxyXG4gICAgICAgICAgICAgICAgLy8gY2F0ZWdvcmllcyxcclxuICAgICAgICAgICAgICAgIC8vIHRhZ3MsXHJcbiAgICAgICAgICAgICAgICAvLyBuYW1lLFxyXG4gICAgICAgICAgICAgICAgLy8gc2hvcF9pZCxcclxuICAgICAgICAgICAgICAgIC8vIHByaWNlLFxyXG4gICAgICAgICAgICAgICAgcGFnZSA9IF9hLnBhZ2UsIHF1ZXJ5ID0gX19yZXN0KF9hLCBbXCJwYWdlXCJdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LmdldChBUElfRU5EUE9JTlRTLlBST0RVQ1RTLCBfX2Fzc2lnbih7IHBhZ2U6IHBhZ2UgfSwgcXVlcnkpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9wdWxhcjogZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KEFQSV9FTkRQT0lOVFMuUFJPRFVDVFNfUE9QVUxBUiwgX19hc3NpZ24oeyB3aXRoOiAnc2hvcCcsIHdpdGhDb3VudDogJ29yZGVycycgfSwgcGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2x1ZyA9IF9hLnNsdWcsIGxhbmd1YWdlID0gX2EubGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5nZXQoXCJcIi5jb25jYXQoQVBJX0VORFBPSU5UUy5QUk9EVUNUUywgXCIvXCIpLmNvbmNhdChzbHVnKSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZSxcclxuICAgICAgICAgICAgICAgICAgICB3aXRoOiAnc2hvcDt0YWdzO3R5cGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhDb3VudDogJ29yZGVycycsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0UHV0b25saXN0QW5kQXVjdGlvbmxpc3Q6IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb25JZCA9IF9hLmNvbGxlY3Rpb25JZCwgdG9rZW5JZCA9IF9hLnRva2VuSWQsIG1ha2VyID0gX2EubWFrZXIsIGtleSA9IF9hLmtleSwgY2hhaW5JZCA9IF9hLmNoYWluSWQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5nZXQoXCJcIi5jb25jYXQoQVBJX0VORFBPSU5UUy5QUk9EVUNUU19ERVRBSUwpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbklkOiBjb2xsZWN0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5JZDogdG9rZW5JZCxcclxuICAgICAgICAgICAgICAgICAgICBtYWtlcjogbWFrZXIsXHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhaW5JZDogY2hhaW5JZCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkb3dubG9hZDogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5wb3N0KEFQSV9FTkRQT0lOVFMuUFJPRFVDVFNfRlJFRV9ET1dOTE9BRCwgaW5wdXQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0ge1xyXG4gICAgICAgICAgICBhbGw6IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KEFQSV9FTkRQT0lOVFMuQ0FURUdPUklFUywgX19hc3NpZ24oe30sIHF1ZXJ5KSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRhZ3MgPSB7XHJcbiAgICAgICAgICAgIGFsbDogZnVuY3Rpb24gKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5nZXQoQVBJX0VORFBPSU5UUy5UQUdTLCBxdWVyeSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2x1ZyA9IF9hLnNsdWcsIGxhbmd1YWdlID0gX2EubGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5nZXQoXCJcIi5jb25jYXQoQVBJX0VORFBPSU5UUy5UQUdTLCBcIi9cIikuY29uY2F0KHNsdWcpLCB7IGxhbmd1YWdlOiBsYW5ndWFnZSB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudHlwZXMgPSB7XHJcbiAgICAgICAgICAgIGFsbDogZnVuY3Rpb24gKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5nZXQoQVBJX0VORFBPSU5UUy5UWVBFUywgX19hc3NpZ24oe30sIHF1ZXJ5KSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNob3BzID0ge1xyXG4gICAgICAgICAgICBhbGw6IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KEFQSV9FTkRQT0lOVFMuU0hPUFMsIHF1ZXJ5KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9wOiBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfYSA9PT0gdm9pZCAwKSB7IF9hID0ge307IH1cclxuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gX2EubmFtZSwgcXVlcnkgPSBfX3Jlc3QoX2EsIFtcIm5hbWVcIl0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KEFQSV9FTkRQT0lOVFMuVE9QX1NIT1BTLCBfX2Fzc2lnbihfX2Fzc2lnbih7IHNlYXJjaEpvaW46ICdhbmQnIH0sIHF1ZXJ5KSwgeyBzZWFyY2g6IEh0dHBDbGllbnQuZm9ybWF0U2VhcmNoUGFyYW1zKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNfYWN0aXZlOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pIH0pKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoc2x1Zykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KFwiXCIuY29uY2F0KEFQSV9FTkRQT0lOVFMuU0hPUFMsIFwiL1wiKS5jb25jYXQoc2x1ZykpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vcmRlcnMgPSB7XHJcbiAgICAgICAgICAgIGFsbDogZnVuY3Rpb24gKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5nZXQoQVBJX0VORFBPSU5UUy5PUkRFUlMsIHF1ZXJ5KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAodHJhY2tpbmdfbnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5nZXQoXCJcIi5jb25jYXQoQVBJX0VORFBPSU5UUy5PUkRFUlMsIFwiL1wiKS5jb25jYXQodHJhY2tpbmdfbnVtYmVyKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvd25sb2FkYWJsZTogZnVuY3Rpb24gKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5nZXQoQVBJX0VORFBPSU5UUy5PUkRFUlNfRE9XTkxPQURTLCBxdWVyeSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdlbmVyYXRlRG93bmxvYWRMaW5rOiBmdW5jdGlvbiAoZGlnaXRhbF9maWxlX2lkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5wb3N0KEFQSV9FTkRQT0lOVFMuR0VORVJBVEVfRE9XTkxPQURBQkxFX1BST0RVQ1RfTElOSywge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpZ2l0YWxfZmlsZV9pZDogZGlnaXRhbF9maWxlX2lkLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZlcmlmeTogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LnBvc3QoQVBJX0VORFBPSU5UUy5PUkRFUlNfQ0hFQ0tPVVRfVkVSSUZZLCBkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQucG9zdChBUElfRU5EUE9JTlRTLk9SREVSUywgZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnVzZXJzID0ge1xyXG4gICAgICAgICAgICBtZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gSHR0cENsaWVudC5nZXQoQVBJX0VORFBPSU5UUy5VU0VSU19MT0dJTik7IH0sXHJcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LnB1dChcIlwiLmNvbmNhdChBUElfRU5EUE9JTlRTLlVTRVJTX1JFR0lTVEVSKSwgdXNlcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvZ2luOiBmdW5jdGlvbiAoKSB7IHJldHVybiBIdHRwQ2xpZW50LmdldChBUElfRU5EUE9JTlRTLlVTRVJTX0xPR0lOKTsgfSxcclxuICAgICAgICAgICAgcmVnaXN0ZXI6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQucG9zdChBUElfRU5EUE9JTlRTLlVTRVJTX1JFR0lTVEVSLCBpbnB1dCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIGZvcmdvdFBhc3N3b3JkOiAoaW5wdXQ6IEZvcmdldFBhc3N3b3JkSW5wdXQpID0+XHJcbiAgICAgICAgICAgIC8vICAgSHR0cENsaWVudC5wb3N0PFBhc3N3b3JkQ2hhbmdlUmVzcG9uc2U+KFxyXG4gICAgICAgICAgICAvLyAgICAgQVBJX0VORFBPSU5UUy5VU0VSU19GT1JHT1RfUEFTU1dPUkQsXHJcbiAgICAgICAgICAgIC8vICAgICBpbnB1dFxyXG4gICAgICAgICAgICAvLyAgICksXHJcbiAgICAgICAgICAgIC8vIHZlcmlmeUZvcmdvdFBhc3N3b3JkVG9rZW46IChpbnB1dDogVmVyaWZ5Rm9yZ2V0UGFzc3dvcmRUb2tlbklucHV0KSA9PlxyXG4gICAgICAgICAgICAvLyAgIEh0dHBDbGllbnQucG9zdDxQYXNzd29yZENoYW5nZVJlc3BvbnNlPihcclxuICAgICAgICAgICAgLy8gICAgIEFQSV9FTkRQT0lOVFMuVVNFUlNfVkVSSUZZX0ZPUkdPVF9QQVNTV09SRF9UT0tFTixcclxuICAgICAgICAgICAgLy8gICAgIGlucHV0XHJcbiAgICAgICAgICAgIC8vICAgKSxcclxuICAgICAgICAgICAgLy8gcmVzZXRQYXNzd29yZDogKGlucHV0OiBSZXNldFBhc3N3b3JkSW5wdXQpID0+XHJcbiAgICAgICAgICAgIC8vICAgSHR0cENsaWVudC5wb3N0PFBhc3N3b3JkQ2hhbmdlUmVzcG9uc2U+KFxyXG4gICAgICAgICAgICAvLyAgICAgQVBJX0VORFBPSU5UUy5VU0VSU19SRVNFVF9QQVNTV09SRCxcclxuICAgICAgICAgICAgLy8gICAgIGlucHV0XHJcbiAgICAgICAgICAgIC8vICAgKSxcclxuICAgICAgICAgICAgLy8gY2hhbmdlUGFzc3dvcmQ6IChpbnB1dDogQ2hhbmdlUGFzc3dvcmRJbnB1dCkgPT5cclxuICAgICAgICAgICAgLy8gICBIdHRwQ2xpZW50LnBvc3Q8UGFzc3dvcmRDaGFuZ2VSZXNwb25zZT4oXHJcbiAgICAgICAgICAgIC8vICAgICBBUElfRU5EUE9JTlRTLlVTRVJTX0NIQU5HRV9QQVNTV09SRCxcclxuICAgICAgICAgICAgLy8gICAgIGlucHV0XHJcbiAgICAgICAgICAgIC8vICAgKSxcclxuICAgICAgICAgICAgbG9nb3V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBIdHRwQ2xpZW50LnBvc3QoQVBJX0VORFBPSU5UUy5VU0VSU19MT0dPVVQsIHt9KTsgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25zID0ge1xyXG4gICAgICAgICAgICBhbGw6IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHF1ZXN0aW9uID0gX2EucXVlc3Rpb24sIHBhcmFtcyA9IF9fcmVzdChfYSwgW1wicXVlc3Rpb25cIl0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KEFQSV9FTkRQT0lOVFMuUFJPRFVDVFNfUVVFU1RJT05TLCBfX2Fzc2lnbihfX2Fzc2lnbih7IHNlYXJjaEpvaW46ICdhbmQnIH0sIHBhcmFtcyksIHsgc2VhcmNoOiBIdHRwQ2xpZW50LmZvcm1hdFNlYXJjaFBhcmFtcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBxdWVzdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB9KSB9KSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5wb3N0KEFQSV9FTkRQT0lOVFMuUFJPRFVDVFNfQUREX1FVRVNUSU9OUywgaW5wdXQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5mZWVkYmFjayA9IHtcclxuICAgICAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LnBvc3QoQVBJX0VORFBPSU5UUy5QUk9EVUNUU19GRUVEQkFDSywgaW5wdXQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hYnVzZSA9IHtcclxuICAgICAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LnBvc3QoQVBJX0VORFBPSU5UUy5QUk9EVUNUU19SRVZJRVdTX0FCVVNFX1JFUE9SVCwgaW5wdXQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZXZpZXdzID0ge1xyXG4gICAgICAgICAgICBhbGw6IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJhdGluZyA9IF9hLnJhdGluZywgcGFyYW1zID0gX19yZXN0KF9hLCBbXCJyYXRpbmdcIl0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KEFQSV9FTkRQT0lOVFMuUFJPRFVDVFNfUkVWSUVXUywgX19hc3NpZ24oX19hc3NpZ24oeyBzZWFyY2hKb2luOiAnYW5kJywgd2l0aDogJ3VzZXInIH0sIHBhcmFtcyksIHsgc2VhcmNoOiBIdHRwQ2xpZW50LmZvcm1hdFNlYXJjaFBhcmFtcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZzogcmF0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pIH0pKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpZCA9IF9hLmlkO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KFwiXCIuY29uY2F0KEFQSV9FTkRQT0lOVFMuUFJPRFVDVFNfUkVWSUVXUywgXCIvXCIpLmNvbmNhdChpZCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQucG9zdChBUElfRU5EUE9JTlRTLlBST0RVQ1RTX0FERF9SRVZJRVdTLCBpbnB1dCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5wdXQoXCJcIi5jb25jYXQoQVBJX0VORFBPSU5UUy5QUk9EVUNUU19SRVZJRVdTLCBcIi9cIikuY29uY2F0KGlucHV0LmlkKSwgaW5wdXQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IHtcclxuICAgICAgICAgICAgYWxsOiBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSBfX3Jlc3QoX2EsIFtdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LmdldChBUElfRU5EUE9JTlRTLlBST0RVQ1RTX01FU1NBR0VTLCBfX2Fzc2lnbih7fSwgcGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBfYS5pZDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LmdldChcIlwiLmNvbmNhdChBUElfRU5EUE9JTlRTLlBST0RVQ1RTX1JFVklFV1MsIFwiL1wiKS5jb25jYXQoaWQpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LnBvc3QoQVBJX0VORFBPSU5UUy5QUk9EVUNUU19BRERfTUVTU0FHRVMsIGlucHV0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMud2lzaGxpc3QgPSB7XHJcbiAgICAgICAgICAgIGFsbDogZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KEFQSV9FTkRQT0lOVFMuVVNFUlNfV0lTSExJU1QsIF9fYXNzaWduKHsgd2l0aDogJ3Nob3AnLCBvcmRlckJ5OiAnY3JlYXRlZF9hdCcsIHNvcnRlZEJ5OiAnZGVzYycgfSwgcGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvZ2dsZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5wb3N0KEFQSV9FTkRQT0lOVFMuVVNFUlNfV0lTSExJU1RfVE9HR0xFLCBpbnB1dCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5kZWxldGUoXCJcIi5jb25jYXQoQVBJX0VORFBPSU5UUy5XSVNITElTVCwgXCIvXCIpLmNvbmNhdChpZCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjaGVja0lzSW5XaXNobGlzdDogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdF9pZCA9IF9hLnByb2R1Y3RfaWQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5nZXQoXCJcIi5jb25jYXQoQVBJX0VORFBPSU5UUy5XSVNITElTVCwgXCIvaW5fd2lzaGxpc3QvXCIpLmNvbmNhdChwcm9kdWN0X2lkKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm15UXVlc3Rpb25zID0ge1xyXG4gICAgICAgICAgICBhbGw6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LmdldChBUElfRU5EUE9JTlRTLk1ZX1FVRVNUSU9OUywgX19hc3NpZ24oeyB3aXRoOiAndXNlcicsIG9yZGVyQnk6ICdjcmVhdGVkX2F0Jywgc29ydGVkQnk6ICdkZXNjJyB9LCBwYXJhbXMpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubXlSZXBvcnRzID0ge1xyXG4gICAgICAgICAgICBhbGw6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LmdldChBUElfRU5EUE9JTlRTLk1ZX1JFUE9SVFMsIF9fYXNzaWduKHsgd2l0aDogJ3VzZXInLCBvcmRlckJ5OiAnY3JlYXRlZF9hdCcsIHNvcnRlZEJ5OiAnZGVzYycgfSwgcGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRpc3B1dGVzID0ge1xyXG4gICAgICAgICAgICBhbGw6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LmdldChBUElfRU5EUE9JTlRTLkRJU1BVVEVTLCBfX2Fzc2lnbih7IHdpdGg6ICd1c2VyJywgb3JkZXJCeTogJ2NyZWF0ZWRfYXQnLCBzb3J0ZWRCeTogJ2Rlc2MnIH0sIHBhcmFtcykpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQucG9zdChBUElfRU5EUE9JTlRTLkFERF9ESVNQVVRFLCBpbnB1dCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5wdXQoQVBJX0VORFBPSU5UUy5VUERBVEVfRElTUFVURSwgaW5wdXQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5taWxlc3RvbmUgPSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5wdXQoQVBJX0VORFBPSU5UUy5VUERBVEVfTUlMRVNUT05FLCBpbnB1dCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmZvbGxvdyA9IHtcclxuICAgICAgICAgICAgc2hvcHM6IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KEFQSV9FTkRQT0lOVFMuRk9MTE9XRURfU0hPUFMsIHF1ZXJ5KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXNTaG9wRm9sbG93ZWQ6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQuZ2V0KEFQSV9FTkRQT0lOVFMuRk9MTE9XX1NIT1AsIGlucHV0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9nZ2xlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LnBvc3QoQVBJX0VORFBPSU5UUy5GT0xMT1dfU0hPUCwgaW5wdXQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmb2xsb3dlZFNob3BQcm9kdWN0czogZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LmdldChBUElfRU5EUE9JTlRTLkZPTExPV0VEX1NIT1BTX1BST0RVQ1RTLCBfX2Fzc2lnbih7fSwgcGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBhbGw6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LmdldChBUElfRU5EUE9JTlRTLlNFVFRJTkdTLCBfX2Fzc2lnbih7fSwgcGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRhY3RVczogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5wb3N0KEFQSV9FTkRQT0lOVFMuU0VUVElOR1NfQ09OVEFDVF9VUywgaW5wdXQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cGxvYWQ6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5mb3JFYWNoKGZ1bmN0aW9uIChhdHRhY2htZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhdHRhY2htZW50W10nLCBhdHRhY2htZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEh0dHBDbGllbnQucG9zdChBUElfRU5EUE9JTlRTLlVQTE9BRFMsIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2FtcGxlSW1hZ2VzID0ge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIdHRwQ2xpZW50LmdldChBUElfRU5EUE9JTlRTLkdFVF9TQU1QTEVfSU1BR0VTLCBfX2Fzc2lnbih7fSwgcGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSHR0cENsaWVudC5wb3N0KEFQSV9FTkRQT0lOVFMuU0VUX1NBTVBMRV9JTUFHRVMsIGlucHV0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIENsaWVudDtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgbmV3IENsaWVudCgpO1xyXG4iLCJ2YXIgYXV0aFRva2VuO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0QXV0aFRva2VuKHRva2VuKSB7XHJcbiAgICBhdXRoVG9rZW4gPSB0b2tlbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXV0aFRva2VuKCkge1xyXG4gICAgcmV0dXJuIGF1dGhUb2tlbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQXV0aFRva2VuKCkge1xyXG4gICAgYXV0aFRva2VuID0gdW5kZWZpbmVkO1xyXG59XHJcbiIsInZhciBjcmVhdGVQcm92aWRlciA9IHJlcXVpcmUoJy4vY3JlYXRlUHJvdmlkZXInKTtcclxudmFyIEV0aCA9IHJlcXVpcmUoJ2V0aGpzJyk7XHJcbnZhciBwcm92aWRlciA9IGNyZWF0ZVByb3ZpZGVyKCk7XHJcbmV4cG9ydCBmdW5jdGlvbiBjb25uZWN0TWV0YU1hc2soKSB7XHJcbiAgICBpZiAocHJvdmlkZXIpXHJcbiAgICAgICAgcmV0dXJuIHByb3ZpZGVyO1xyXG59XHJcbiIsImV4cG9ydCB2YXIgQXZheFRlc3ROZXQgPSAnaHR0cHM6Ly9hcGkuYXZheC10ZXN0Lm5ldHdvcmsvZXh0L2JjL0MvcnBjJztcclxuZXhwb3J0IHZhciBBdmF4TWFpbk5ldCA9ICdodHRwczovL2FwaS5hdmF4Lm5ldHdvcmsvZXh0L2JjL0MvcnBjJztcclxuZXhwb3J0IHZhciBBdmF4VGVzdE5ldENoYWluSWQgPSA0MzExMztcclxuZXhwb3J0IHZhciBSZXN0RW5kcG9pbnQgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJztcclxuIiwidmFyIE1ldGFNYXNrSW5wYWdlUHJvdmlkZXIgPSByZXF1aXJlKCdAbWV0YW1hc2svaW5wYWdlLXByb3ZpZGVyJykuTWV0YU1hc2tJbnBhZ2VQcm92aWRlcjtcclxudmFyIFBvcnRTdHJlYW0gPSByZXF1aXJlKCdleHRlbnNpb24tcG9ydC1zdHJlYW0nKTtcclxudmFyIGRldGVjdCA9IHJlcXVpcmUoJ2RldGVjdC1icm93c2VyJykuZGV0ZWN0O1xyXG52YXIgYnJvd3NlciA9IGRldGVjdCgpO1xyXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcuanNvbicpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZU1ldGFNYXNrUHJvdmlkZXIoKSB7XHJcbiAgICB2YXIgcHJvdmlkZXI7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBjdXJyZW50TWV0YU1hc2tJZCA9IGdldE1ldGFNYXNrSWQoKTtcclxuICAgICAgICB2YXIgbWV0YW1hc2tQb3J0ID0gY2hyb21lLnJ1bnRpbWUuY29ubmVjdChjdXJyZW50TWV0YU1hc2tJZCk7XHJcbiAgICAgICAgdmFyIHBsdWdpblN0cmVhbSA9IG5ldyBQb3J0U3RyZWFtKG1ldGFtYXNrUG9ydCk7XHJcbiAgICAgICAgcHJvdmlkZXIgPSBuZXcgTWV0YU1hc2tJbnBhZ2VQcm92aWRlcihwbHVnaW5TdHJlYW0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmRpcihcIk1ldGFtYXNrIGNvbm5lY3QgZXJyb3IgXCIsIGUpO1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJvdmlkZXI7XHJcbn07XHJcbmZ1bmN0aW9uIGdldE1ldGFNYXNrSWQoKSB7XHJcbiAgICBzd2l0Y2ggKGJyb3dzZXIgJiYgYnJvd3Nlci5uYW1lKSB7XHJcbiAgICAgICAgY2FzZSAnY2hyb21lJzpcclxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZy5DSFJPTUVfSUQ7XHJcbiAgICAgICAgY2FzZSAnZmlyZWZveCc6XHJcbiAgICAgICAgICAgIHJldHVybiBjb25maWcuRklSRUZPWF9JRDtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlnLkNIUk9NRV9JRDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xyXG52YXIgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5yb290LmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xyXG52YXIgcm9vdERpdiA9IFJlYWN0RE9NLmNyZWF0ZVJvb3Qocm9vdCk7XHJcbnJvb3REaXYucmVuZGVyKF9qc3goUmVhY3QuU3RyaWN0TW9kZSwgeyBjaGlsZHJlbjogX2pzeChBcHAsIHt9KSB9KSk7XHJcbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZE8gPSB7fTsiLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZShmdW5jdGlvbihpZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMDsgfSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdGhyaWZ0eW5mdF9leHRlbnNpb25cIl0gPSBzZWxmW1wid2VicGFja0NodW5rdGhyaWZ0eW5mdF9leHRlbnNpb25cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfZXRoZXJzcHJvamVjdF9wcm92aWRlcnNfbGliX2VzbV93ZWIzLXByb3ZpZGVyX2pzLW5vZGVfbW9kdWxlc19tZXRhbWFza19pLTI1Yzc4ZVwiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHN4XCIpOyB9KVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==