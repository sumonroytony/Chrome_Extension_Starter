/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/ConnectMetamask.ts":
/*!****************************************!*\
  !*** ./src/helpers/ConnectMetamask.ts ***!
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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"connectMetamask": 0
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_metamask_inpage-provider_dist_index_js-node_modules_detect-browser_index_js"], function() { return __webpack_require__("./src/helpers/ConnectMetamask.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdE1ldGFtYXNrLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQXFCLG1CQUFPLENBQUMseURBQWtCO0FBQy9DO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEEsNkJBQTZCLHVJQUEyRDtBQUN4RixpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBdUI7QUFDaEQsYUFBYSw0RkFBZ0M7QUFDN0M7QUFDQSxhQUFhLG1CQUFPLENBQUMsZ0RBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVCQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDLG9IQUFvSCxpREFBaUQ7V0FDcks7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzdCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BELDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQSw4Q0FBOEM7O1dBRTlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsbUNBQW1DO1dBQ3BFO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVsREE7VUFDQTtVQUNBO1VBQ0EsOEtBQThLLGlFQUFpRTtVQUMvTyIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uLy4vc3JjL2hlbHBlcnMvQ29ubmVjdE1ldGFtYXNrLnRzIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uLy4vc3JjL2hlbHBlcnMvY3JlYXRlUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vaWdub3JlZHxDOlxcVXNlcnNcXHN1bW9uXFxPbmVEcml2ZVxcRGVza3RvcFxcd29ya3NwYWNlXFx0aHJpZnR5bmZ0X2V4dGVuc2lvblxcbm9kZV9tb2R1bGVzXFxAbWV0YW1hc2tcXG9iamVjdC1tdWx0aXBsZXhcXG5vZGVfbW9kdWxlc1xccmVhZGFibGUtc3RyZWFtXFxsaWJcXGludGVybmFsXFxzdHJlYW1zfHV0aWwiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vaWdub3JlZHxDOlxcVXNlcnNcXHN1bW9uXFxPbmVEcml2ZVxcRGVza3RvcFxcd29ya3NwYWNlXFx0aHJpZnR5bmZ0X2V4dGVuc2lvblxcbm9kZV9tb2R1bGVzXFxAbWV0YW1hc2tcXG9iamVjdC1tdWx0aXBsZXhcXG5vZGVfbW9kdWxlc1xccmVhZGFibGUtc3RyZWFtXFxsaWJ8dXRpbCIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi9pZ25vcmVkfEM6XFxVc2Vyc1xcc3Vtb25cXE9uZURyaXZlXFxEZXNrdG9wXFx3b3Jrc3BhY2VcXHRocmlmdHluZnRfZXh0ZW5zaW9uXFxub2RlX21vZHVsZXNcXGpzb24tcnBjLW1pZGRsZXdhcmUtc3RyZWFtXFxub2RlX21vZHVsZXNcXHJlYWRhYmxlLXN0cmVhbVxcbGliXFxpbnRlcm5hbFxcc3RyZWFtc3x1dGlsIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL2lnbm9yZWR8QzpcXFVzZXJzXFxzdW1vblxcT25lRHJpdmVcXERlc2t0b3BcXHdvcmtzcGFjZVxcdGhyaWZ0eW5mdF9leHRlbnNpb25cXG5vZGVfbW9kdWxlc1xcanNvbi1ycGMtbWlkZGxld2FyZS1zdHJlYW1cXG5vZGVfbW9kdWxlc1xccmVhZGFibGUtc3RyZWFtXFxsaWJ8dXRpbCIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi9pZ25vcmVkfEM6XFxVc2Vyc1xcc3Vtb25cXE9uZURyaXZlXFxEZXNrdG9wXFx3b3Jrc3BhY2VcXHRocmlmdHluZnRfZXh0ZW5zaW9uXFxub2RlX21vZHVsZXNcXHB1bXB8ZnMiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vaWdub3JlZHxDOlxcVXNlcnNcXHN1bW9uXFxPbmVEcml2ZVxcRGVza3RvcFxcd29ya3NwYWNlXFx0aHJpZnR5bmZ0X2V4dGVuc2lvblxcbm9kZV9tb2R1bGVzXFxyZWFkYWJsZS1zdHJlYW1cXGxpYlxcaW50ZXJuYWxcXHN0cmVhbXN8dXRpbCIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi9pZ25vcmVkfEM6XFxVc2Vyc1xcc3Vtb25cXE9uZURyaXZlXFxEZXNrdG9wXFx3b3Jrc3BhY2VcXHRocmlmdHluZnRfZXh0ZW5zaW9uXFxub2RlX21vZHVsZXNcXHJlYWRhYmxlLXN0cmVhbVxcbGlifHV0aWwiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjcmVhdGVQcm92aWRlciA9IHJlcXVpcmUoJy4vY3JlYXRlUHJvdmlkZXInKTtcclxudmFyIHByb3ZpZGVyID0gY3JlYXRlUHJvdmlkZXIoKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGNvbm5lY3RNZXRhTWFzaygpIHtcclxuICAgIGlmIChwcm92aWRlcilcclxuICAgICAgICByZXR1cm4gcHJvdmlkZXI7XHJcbn1cclxuIiwidmFyIE1ldGFNYXNrSW5wYWdlUHJvdmlkZXIgPSByZXF1aXJlKCdAbWV0YW1hc2svaW5wYWdlLXByb3ZpZGVyJykuTWV0YU1hc2tJbnBhZ2VQcm92aWRlcjtcclxudmFyIFBvcnRTdHJlYW0gPSByZXF1aXJlKCdleHRlbnNpb24tcG9ydC1zdHJlYW0nKTtcclxudmFyIGRldGVjdCA9IHJlcXVpcmUoJ2RldGVjdC1icm93c2VyJykuZGV0ZWN0O1xyXG52YXIgYnJvd3NlciA9IGRldGVjdCgpO1xyXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcuanNvbicpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZU1ldGFNYXNrUHJvdmlkZXIoKSB7XHJcbiAgICB2YXIgcHJvdmlkZXI7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBjdXJyZW50TWV0YU1hc2tJZCA9IGdldE1ldGFNYXNrSWQoKTtcclxuICAgICAgICB2YXIgbWV0YW1hc2tQb3J0ID0gY2hyb21lLnJ1bnRpbWUuY29ubmVjdChjdXJyZW50TWV0YU1hc2tJZCk7XHJcbiAgICAgICAgdmFyIHBsdWdpblN0cmVhbSA9IG5ldyBQb3J0U3RyZWFtKG1ldGFtYXNrUG9ydCk7XHJcbiAgICAgICAgcHJvdmlkZXIgPSBuZXcgTWV0YU1hc2tJbnBhZ2VQcm92aWRlcihwbHVnaW5TdHJlYW0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmRpcihcIk1ldGFtYXNrIGNvbm5lY3QgZXJyb3IgXCIsIGUpO1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJvdmlkZXI7XHJcbn07XHJcbmZ1bmN0aW9uIGdldE1ldGFNYXNrSWQoKSB7XHJcbiAgICBzd2l0Y2ggKGJyb3dzZXIgJiYgYnJvd3Nlci5uYW1lKSB7XHJcbiAgICAgICAgY2FzZSAnY2hyb21lJzpcclxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZy5DSFJPTUVfSUQ7XHJcbiAgICAgICAgY2FzZSAnZmlyZWZveCc6XHJcbiAgICAgICAgICAgIHJldHVybiBjb25maWcuRklSRUZPWF9JRDtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlnLkNIUk9NRV9JRDtcclxuICAgIH1cclxufVxyXG4iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gZnVuY3Rpb24ocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeShmdW5jdGlvbihrZXkpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKTsgfSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiY29ubmVjdE1ldGFtYXNrXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gZnVuY3Rpb24oY2h1bmtJZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwOyB9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKGZ1bmN0aW9uKGlkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwOyB9KSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0aHJpZnR5bmZ0X2V4dGVuc2lvblwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0aHJpZnR5bmZ0X2V4dGVuc2lvblwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfbWV0YW1hc2tfaW5wYWdlLXByb3ZpZGVyX2Rpc3RfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2RldGVjdC1icm93c2VyX2luZGV4X2pzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9oZWxwZXJzL0Nvbm5lY3RNZXRhbWFzay50c1wiKTsgfSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=