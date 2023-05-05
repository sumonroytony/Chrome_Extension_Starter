/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/const.ts":
/*!******************************!*\
  !*** ./src/helpers/const.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************************************!*\
  !*** ./src/contentScript/ContentScript.ts ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/const */ "./src/helpers/const.ts");

function addButton() {
    var buttonGroups = document.querySelectorAll('.css-1dbjc4n.r-1ta3fxp.r-18u37iz.r-1wtj0ep.r-1s2bzr4.r-1mdbhws');
    if (buttonGroups.length > 0) {
        var _loop_1 = function (i) {
            var existingButton = buttonGroups[i].querySelector('.thriftyNft_send-money-button');
            if (!existingButton) {
                var parent_1 = buttonGroups[i].parentNode.parentNode;
                var div = document.createElement('div');
                div.classList.add('thriftyNft_send-money-button');
                div.style.display = 'flex';
                div.style.alignItems = 'center';
                div.style.cursor = 'pointer';
                div.style.zIndex = '1000';
                div.innerHTML = _helpers_const__WEBPACK_IMPORTED_MODULE_0__.SendMoneySvg;
                buttonGroups[i].appendChild(div);
                // eslint-disable-next-line no-loop-func
                div.addEventListener('click', function (event) {
                    event.stopPropagation();
                    event.preventDefault();
                    var popup = document.createElement('div');
                    popup.style.display = 'flex';
                    popup.style.flexDirection = 'column';
                    popup.style.justifyContent = 'center';
                    popup.style.alignItems = 'center';
                    popup.style.position = 'fixed';
                    popup.style.top = '0';
                    popup.style.left = '0';
                    popup.style.transform = 'translate(50%, 50%)';
                    popup.style.width = '50%';
                    popup.style.height = '50%';
                    popup.style.backgroundColor = 'white';
                    popup.style.zIndex = '1000';
                    popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
                    popup.style.color = 'black';
                    var close = document.createElement('div');
                    close.innerHTML = 'X';
                    close.style.position = 'absolute';
                    close.style.top = '0';
                    close.style.right = '0';
                    close.style.padding = '10px';
                    close.style.cursor = 'pointer';
                    close.style.color = 'black';
                    close.style.fontSize = '20px';
                    var twitterUserNameDiv = parent_1.querySelectorAll('.css-901oao.css-1hf3ou5.r-14j79pv.r-18u37iz.r-37j5jr.r-1wvb978.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-qvutc0 > .css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0');
                    var _twitterUserName = twitterUserNameDiv[0].innerHTML;
                    var index = _twitterUserName.indexOf('@');
                    var twitterUserName = _twitterUserName.slice(index + 1);
                    //create amount input and send button in popup
                    //create a h1 with twitter user
                    var h1 = document.createElement('h1');
                    h1.innerHTML = 'Send Avax to ' + twitterUserName;
                    h1.style.width = '100%';
                    var amountInput = document.createElement('input');
                    amountInput.type = 'number';
                    amountInput.value = '0.0005';
                    amountInput.placeholder = 'Amount';
                    amountInput.style.width = '100%';
                    amountInput.style.height = '50px';
                    amountInput.style.margin = '10px';
                    amountInput.style.borderRadius = '10px';
                    amountInput.style.border = '1px solid #ccc';
                    amountInput.style.padding = '10px';
                    amountInput.style.fontSize = '20px';
                    amountInput.style.boxSizing = 'border-box';
                    amountInput.style.outline = 'none';
                    amountInput.style.color = 'black';
                    amountInput.style.fontWeight = 'bold';
                    amountInput.style.textAlign = 'center';
                    amountInput.style.fontFamily = 'sans-serif';
                    amountInput.style.backgroundColor = '#fff';
                    amountInput.style.border = '1px solid #ccc';
                    amountInput.style.borderRadius = '4px';
                    amountInput.style.boxShadow = 'inset 0 1px 1px rgba(0,0,0,.075)';
                    amountInput.style.transition =
                        'border-color ease-in-out .15s,box-shadow ease-in-out .15s';
                    var sendButton = document.createElement('button');
                    sendButton.innerHTML = 'Send';
                    sendButton.style.width = '100%';
                    sendButton.style.height = '50px';
                    sendButton.style.margin = '10px';
                    sendButton.style.borderRadius = '10px';
                    sendButton.style.border = '1px solid #ccc';
                    sendButton.style.padding = '10px';
                    sendButton.style.fontSize = '20px';
                    sendButton.style.boxSizing = 'border-box';
                    sendButton.style.outline = 'none';
                    sendButton.style.color = 'black';
                    sendButton.style.fontWeight = 'bold';
                    sendButton.style.textAlign = 'center';
                    sendButton.style.fontFamily = 'sans-serif';
                    sendButton.style.backgroundColor = '#fff';
                    sendButton.style.border = '1px solid #ccc';
                    sendButton.style.borderRadius = '4px';
                    sendButton.style.boxShadow = 'inset 0 1px 1px rgba(0,0,0,.075)';
                    sendButton.style.transition =
                        'border-color ease-in-out .15s,box-shadow ease-in-out .15s';
                    sendButton.addEventListener('click', function () {
                        var amount = amountInput.value;
                        // const port = chrome.runtime.connect({ name: 'content-script' });
                        // console.log({ amount }, port);
                        // console.log(provider, 'ddddddddd');
                        // console.log({ _provider });
                        // _provider.send('eth_requestAccounts').then((accounts: any) => {});
                    });
                    popup.appendChild(h1);
                    popup.appendChild(amountInput);
                    popup.appendChild(sendButton);
                    close.addEventListener('click', function () {
                        document.body.removeChild(popup);
                    });
                    popup.appendChild(close);
                    document.body.appendChild(popup);
                });
            }
        };
        for (var i = 0; i < buttonGroups.length; i++) {
            _loop_1(i);
        }
    }
}
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach(function (node) {
                if (node.nodeType === Node.ELEMENT_NODE &&
                    node.classList.contains('css-1dbjc4n')) {
                    addButton();
                }
            });
        }
    });
});
observer.observe(document.body, { childList: true, subtree: true });

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudFNjcmlwdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDSlA7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHdEQUFZO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSx3QkFBd0I7QUFDekYseUNBQXlDLFFBQVE7QUFDakQ7QUFDQSx5Q0FBeUMsV0FBVztBQUNwRCwyRkFBMkY7QUFDM0YscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esd0JBQXdCLHlCQUF5QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNELGtDQUFrQyxnQ0FBZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi8uL3NyYy9oZWxwZXJzL2NvbnN0LnRzIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGhyaWZ0eW5mdF9leHRlbnNpb24vLi9zcmMvY29udGVudFNjcmlwdC9Db250ZW50U2NyaXB0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgQXZheFRlc3ROZXQgPSAnaHR0cHM6Ly9hcGkuYXZheC10ZXN0Lm5ldHdvcmsvZXh0L2JjL0MvcnBjJztcclxuZXhwb3J0IHZhciBBdmF4TWFpbk5ldCA9ICdodHRwczovL2FwaS5hdmF4Lm5ldHdvcmsvZXh0L2JjL0MvcnBjJztcclxuZXhwb3J0IHZhciBBdmF4VGVzdE5ldENoYWluSWQgPSA0MzExMztcclxuZXhwb3J0IHZhciBSZXN0RW5kcG9pbnQgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJztcclxuZXhwb3J0IHZhciBTZW5kTW9uZXlTdmcgPSAnPHN2ZyB3aWR0aD1cIjE4Ljc1XCIgaGVpZ2h0PVwiMTguNzVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc2hhcGUtcmVuZGVyaW5nPVwiZ2VvbWV0cmljUHJlY2lzaW9uXCIgdGV4dC1yZW5kZXJpbmc9XCJnZW9tZXRyaWNQcmVjaXNpb25cIiBpbWFnZS1yZW5kZXJpbmc9XCJvcHRpbWl6ZVF1YWxpdHlcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIHZpZXdCb3g9XCIwIDAgNTEyIDQ4OC43ODNcIj48cGF0aCBmaWxsPVwiIzJEMjIyMlwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIiBkPVwiTTEyMC4wMDkgMjcwLjQ0OWwxMi4wNTEtLjAxNGM2My43MzEtLjIyIDgwLjA4NC0uMjY2IDE0NC4yMDIgMzkuOTc1aDUyLjg2NWwuNjA3LjAzOWM4LjE5OS41NTcgMTUuMzAzIDMuNDY1IDIwLjUzNCA3Ljc2NiA0LjEyIDMuMzg3IDcuMTE3IDcuNjcxIDguNjI0IDEyLjM5NSAxLjUzOSA0LjgyNiAxLjUzMiAxMC4wNjQtLjM2OSAxNS4yMzktMi4wMzkgNS41NDMtNi4yNjIgMTEtMTMuMSAxNS43MTMtMTAuMjQ1IDcuNTA1LTIyLjAzIDExLjAzNy0zNC42NTEgMTIuMzc0LTEyLjE0MyAxLjI4My0yNS4wNDkuNTEtMzguMDg1LS42NTMtNC4xNDYtLjIwMi02LjgwMiAxLjQzMy03Ljk1NCAzLjY0NmE2LjQ5NSA2LjQ5NSAwIDAwLS43MjcgMi44NDcgNi42OCA2LjY4IDAgMDAuNjA2IDIuOTM3YzEuMDkyIDIuMzY1IDMuODIzIDQuMjMxIDguMzEzIDQuMjQ5bC4zMjkuMDE0YzMuMzc3LjI0OCA3LjA2NS0uMTE4IDEwLjY1NC0uNDY1IDIuODUxLS4yOCA1LjY2My0uNTU3IDguNDk0LS41NiAxNS41MjItLjAxMSAyOS42MjItMS40ODMgNDEuNjU4LTUuOTY1IDExLjU5My00LjMxNiAyMS4zODUtMTEuNTAxIDI4LjgzMi0yMy4wMmw3Ljk4My0xOC42MzZhNC42NTggNC42NTggMCAwMTIuMjM1LTIuMzYybDgwLjU5OC0zOS45Ni42MS0uMjQ4YzEzLjgwOS00LjU1NyAyNi40NzMtMy4xNjQgMzYuMzgyIDEuODkzIDYuNSAzLjMxMyAxMS44MjQgOC4yMjEgMTUuNTE5IDE0LjA3NiAzLjcwOSA1Ljg2NiA1Ljc4NCAxMi43MSA1Ljc4IDE5Ljg2LS4wMDMgMTAuMTE0LTQuMTQ2IDIwLjgwNi0xMy42NTMgMzAuMTk3bC0uNTM2LjQ1NGMtMjkuMjQzIDIxLjI4NS01OC45NCA0MC43MjYtODkuMDUyIDU4LjQxMi0zMC4wMjQgMTcuNjQtNjAuMzc0IDMzLjQ4MS05MS4wMDcgNDcuNjEtNDUuOTMzIDI3LjgyOC05MS44NTEgMjYuODg4LTEzNy43NDQuMDA3bC01OS45OTgtMzAuOTI4YTE2LjY3OSAxNi42NzkgMCAwMS00LjkwNCAxMS43OTVsLS41MjkuNDc5Yy0yLjk4MiAyLjc0MS02Ljk1MSA0LjQyNi0xMS4yOTIgNC40MjZIMTYuNzI1Yy00LjU4NSAwLTguNzYtMS44OC0xMS43OTItNC45MDVBMTYuNTg4IDE2LjU4OCAwIDAxMCA0MzcuMzJWMjY4LjczNmMwLTQuNTgyIDEuODgzLTguNzYzIDQuOTIyLTExLjgwMmExNi41NzcgMTYuNTc3IDAgMDExMS44MDMtNC45MTloODYuNTU5YTE2LjY4IDE2LjY4IDAgMDExMS44MTcgNC45MDVsLjQ3NS41MjVjMi43NTIgMi45ODkgNC40MzMgNi45NjEgNC40MzMgMTEuMjkxdjEuNzEzelwiLz48cGF0aCBmaWxsPVwiI0Y2Q0Q0NVwiIGQ9XCJNMzE3LjE0OCAwYzc1LjM1IDAgMTM2LjQzMiA2MS4wODMgMTM2LjQzMiAxMzYuNDMyIDAgNzUuMzUtNjEuMDgyIDEzNi40MzItMTM2LjQzMiAxMzYuNDMycy0xMzYuNDMyLTYxLjA4Mi0xMzYuNDMyLTEzNi40MzJDMTgwLjcxNiA2MS4wODMgMjQxLjc5OCAwIDMxNy4xNDggMHpcIi8+PHBhdGggZmlsbD1cIiNEMTk2MzJcIiBkPVwiTTMxNy4xNDggMjMuODY3YzYyLjE2OCAwIDExMi41NjUgNTAuMzk4IDExMi41NjUgMTEyLjU2NSAwIDYyLjE2OC01MC4zOTcgMTEyLjU2NS0xMTIuNTY1IDExMi41NjVTMjA0LjU4MyAxOTguNiAyMDQuNTgzIDEzNi40MzJjMC02Mi4xNjcgNTAuMzk3LTExMi41NjUgMTEyLjU2NS0xMTIuNTY1elwiLz48cGF0aCBmaWxsPVwiI0RCQTQ3QlwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIiBkPVwiTTEyMS4xNDggMjc5LjgxOXYxNDcuNTc4bDYzLjM2OSAzMi42OGM0Mi44NTggMjUuMTgzIDg1LjcxMyAyNi4wOTQgMTI4LjUzMS4wOTJsLjU2OC0uMzEyYTEwMjcuNDI1IDEwMjcuNDI1IDAgMDA5MC40MTEtNDcuMjdjMjkuNjI5LTE3LjQwNSA1OC45ODMtMzYuNjE5IDg4LjAyLTU3LjczOCA3LjM3Ny03LjQwMSAxMC42MDQtMTUuNjA4IDEwLjYwNC0yMy4yNiAwLTUuMzM4LTEuNTYtMTAuNDYyLTQuMzQ4LTE0Ljg3NC0yLjc5NC00LjQyOS02Ljg2Mi04LjE2My0xMS44NTItMTAuNzA2LTcuNzczLTMuOTY1LTE3LjgyNy01LjAzMy0yOC45NjYtMS40MjlsLTc4LjY4IDM5LjAwOS03LjQ0NCAxNy4zNzQtLjM2NS42NzhjLTguNjgyIDEzLjYwNy0yMC4xMTUgMjIuMDU4LTMzLjY3MyAyNy4xMDQtMTMuMjI0IDQuOTI2LTI4LjM4MSA2LjU0LTQ0LjkyMSA2LjU1NC0yLjI3IDAtNC45MDkuMjYyLTcuNTc5LjUyNS00LjA1Ny4zOTMtOC4yMDYuODAxLTEyLjI2NC40ODYtOC41MjUtLjE0Ni0xMy45OS00LjM0OC0xNi40NTEtOS42NzVhMTUuOTQ2IDE1Ljk0NiAwIDAxLTEuNDUtNy4wNiAxNS45NDYgMTUuOTQ2IDAgMDExLjc5LTYuOTczYzIuNzEtNS4xOTUgOC4zNDUtOS4wNzggMTYuNjc5LTguNjY3bC4xODQuMDE4YzEyLjU3OSAxLjEyNyAyNS4wMDYgMS44ODYgMzYuNTEuNjcgMTEuMDc1LTEuMTcxIDIxLjMzMS00LjIxMyAzMC4wODQtMTAuNjI1bC4xMjgtLjA4OGM1LjE2Ny0zLjU0IDguMjg0LTcuNDQ4IDkuNjk1LTExLjI4OSAxLjE1Ni0zLjE0OSAxLjE3NC02LjMxMi4yNTYtOS4xODgtLjk1MS0yLjk4My0yLjkxOS01Ljc0OS01LjY1My03Ljk5Ny0zLjc4MS0zLjEwNy05LjAzMy01LjIyMS0xNS4yMDQtNS42NDNoLTU0LjE4OGE0Ljc5MiA0Ljc5MiAwIDAxLTIuNDkzLS43MzRjLTYyLjgxMy0zOS41NDItNzguNDIxLTM5LjQ4NS0xNDAuMzg2LTM5LjI3NmwtMTAuOTEyLjAzNnpcIi8+PHBhdGggZmlsbD1cIiM0MzQ5NENcIiBkPVwiTTE2LjcyNSAyNTkuMTQ3aDg2LjU1OWM1LjI3NyAwIDkuNTkzIDQuMzE2IDkuNTkzIDkuNTg5VjQzNy4zMmMwIDUuMjc3LTQuMzE2IDkuNTg5LTkuNTkzIDkuNTg5SDE2LjcyNWMtNS4yNzcgMC05LjU5My00LjMxMi05LjU5My05LjU4OVYyNjguNzM2YzAtNS4yNzMgNC4zMTYtOS41ODkgOS41OTMtOS41ODl6XCIvPjxwYXRoIGZpbGw9XCIjMzQzOTNFXCIgZD1cIk0xMTIuODc3IDMzMy43ODV2MTAzLjUzNGMwIDUuMjc4LTQuMzE2IDkuNTk0LTkuNTk0IDkuNTk0SDE2LjcyNmMtNS4yNzcgMC05LjU5NC00LjMxNi05LjU5NC05LjU5NHYtMjEuNTM1bDEwNS43NDUtODEuOTk5elwiLz48cGF0aCBmaWxsPVwiI0E4NzkyN1wiIGQ9XCJNMzEzLjA0IDE1Mi42MDljMCA0LjI3LS45NzYgOC4yMTEtMi45NDUgMTEuNzYtMS45NiAzLjU0NS00Ljg4OSA2LjQwMi04LjczMSA4LjUyMy0zLjg0MSAyLjExNy04LjY0MyAzLjE4NS0xNC4zNTcgMy4xODUtMi43NTYgMC01LjI4Mi0uMTU2LTcuNTQ2LS40NDhhMzYuNTUxIDM2LjU1MSAwIDAxLTYuNTIyLTEuNDY0Yy0yLjA4MS0uNjY5LTQuMjM0LTEuNTg1LTYuNDU1LTIuNzM3di0xNy43NTFjMy40MjUgMS45NzcgNi45MTUgMy41MjYgMTAuNDg0IDQuNTk4IDMuNTUzIDEuMDc2IDYuNzk4IDEuNjE3IDkuNjkxIDEuNjE3IDEuNzA1IDAgMy4xMjUtLjI1MiA0LjIwNi0uNzI1IDEuMDg4LS40NzYgMS45MDgtMS4xNDggMi40NDEtMS45Ni41NC0uODI5LjgwOC0xLjc5My44MDgtMi44NzcgMC0xLjE4OC0uMzA4LTIuMjQ5LS45NDQtMy4xNDktLjYyNS0uODkzLTEuNzg5LTEuODk3LTMuMzktMi45NDUtMS42LTEuMDUzLTMuOTAxLTIuMzYxLTYuODAyLTMuOTI2YTY4LjE2MyA2OC4xNjMgMCAwMS02LjYzLTQuMDgxYy0xLjk2NS0xLjM2NC0zLjY1OC0yLjkwNS01LjA0Mi00LjU5OC0xLjM4NC0xLjctMi40ODUtMy42OTMtMy4yMzctNS45NDItLjc0OC0yLjI0NC0xLjEzNi00LjkyMS0xLjEzNi03Ljk4NiAwLTQuNTk4IDEuMDE2LTguNTE5IDMuMDQ1LTExLjcyOCAyLjAyOC0zLjIxOCA0Ljk0MS01LjY5IDguNjc1LTcuMzg3IDcuMTEtMy4yMzMgMTcuMDM4LTMuMTg1IDI0LjUwNC0xLjA4NGE1NC45NiA1NC45NiAwIDAxOS44ODMgMy44NDFsLTUuNDA2IDE1LjM3M2MtMi44Ni0xLjU0OC01LjU5OC0yLjcyMS04LjIxNC0zLjUyOS0yLjYxNy0uODA4LTUuMDYyLTEuMjA0LTcuMzE5LTEuMjA0LTEuNDggMC0yLjY5My4yMDgtMy42MzMuNjM2LS45MjQuNDE2LTEuNjQ1IDEuMDA4LTIuMDg1IDEuNzA0LS40NTYuNzE3LS42ODggMS41MzMtLjY4OCAyLjQ2NiAwIDEuMjA0LjM1MiAyLjI4IDEuMDE2IDMuMi42NjkuOTIxIDEuODc3IDEuOTQ5IDMuNTk3IDIuOTk4IDEuNzI5IDEuMDUyIDQuMTk4IDIuNDc2IDcuMzg3IDQuMTY1IDMuMjg5IDEuNzM2IDYuMDgyIDMuNTYxIDguMzUxIDUuNDk0IDIuMjU2IDEuOTI4IDQuMDIxIDQuMTg5IDUuMjAyIDYuNzUgMS4xOCAyLjU1NyAxLjc5MiA1LjYzIDEuNzkyIDkuMjExem0yNi4yNjEgMjEuNDMybC0uODc2LS4wNTNhODYuMzYyIDg2LjM2MiAwIDAxLTYuMDEtLjU4IDEyOC43ODUgMTI4Ljc4NSAwIDAxLTUuNjY2LS44OCA3Mi44IDcyLjggMCAwMS01LjI3NC0xLjE1N3YtMTQuOTRjMi4xOTcuMTk2IDQuNTc4LjM1NiA3LjEyNy40ODQgMi41NDguMTMyIDUuMTQxLjIyOCA3Ljc1OC4yOTIgMi42MTcuMDYgNS4wNS4wOTYgNy4zMTEuMDk2LjE1Mi0uMDA0LjMxNi4wMDQuNDY4LjAwNGEyNC44NCAyNC44NCAwIDAwNC44NjUtLjQ4OCA2LjQ4NyA2LjQ4NyAwIDAwMy4xOS0xLjU3MyAzLjkxMiAzLjkxMiAwIDAwMS4wNjgtMi42ODVjMC0uMDcyIDAtLjE0NC0uMDA0LS4yMTJ2LTEuMTM2Yy4wMDQtLjA3Ni4wMDQtLjE1Ni4wMDQtLjIzMiAwLTEuMTc3LS41Ni0yLjI3Ny0xLjUwOS0yLjk2NWE1Ljk0NCA1Ljk0NCAwIDAwLTMuMzkzLTEuMDY1SDM0My4wODNjLTcuNDk5IDAtMTMuMTg1LTEuNjQ4LTE3LjA1OC00Ljk0Ni0zLjg3LTMuMzAxLTUuNzk4LTguODIyLTUuNzg2LTE2LjU3M3YtMy4xOTdjMC03LjEwNyAyLjEyOC0xMi40MiA2LjM5NC0xNS45NDUgMy4xNjktMi42MzMgNy4zOS00LjI3OCAxMi42NjgtNC45NDJ2LTcuNjA3aDEwLjQ2OHY3LjM5OWMxLjMxNi4wNjggMi42MzIuMTc2IDMuODI5LjMwOCAyLjYzNy4yODggNS4yMDIuNjQ4IDcuNTU1IDEuMDYgMi4zNTcuNDEyIDQuNDg1Ljg4IDYuMzU0IDEuMzA5djE0LjkzN2EyNjQuNDY2IDI2NC40NjYgMCAwMC0xMC4wMzEtLjYzM2MtMy43MjItLjE2Ny03LjA5OS0uMjQ4LTEwLjEzNi0uMjM1aC0uMjkyYy0xLjUyNSAwLTMuMDQ1LjEzMS00LjU0Ni4zODhhNS45OCA1Ljk4IDAgMDAtMy4yOTMgMS41NDQgNC42MDIgNC42MDIgMCAwMC0xLjE3NiAzLjA2OWMwIC4xMDguMDA0LjIxNi4wMTYuMzJ2Ljk3NmMtLjAwOC4xMDUtLjAxNi4yMDktLjAxNi4zMTMgMCAxLjI5Mi41NiAyLjUxNiAxLjUzNiAzLjM2NWE3LjUxNSA3LjUxNSAwIDAwNC4xODIgMS4yNzZjLjE5MiAwIC4zODQtLjAxMi41NzItLjAyNGg2LjM5NGMuMjYtLjAwNC41MzItLjAxMi43OTMtLjAxMiAzLjY1NyAwIDcuMjYyLjg4NCAxMC40OTkgMi41NzdhMTYuODM4IDE2LjgzOCAwIDAxNi43ODIgNy4wMzEgMjEuNTU4IDIxLjU1OCAwIDAxMi4yNzcgOS42MzF2My41OTNjMCA2LjEzOC0xLjA2OCAxMC44MjQtMy4yMDEgMTQuMDYxYTE1LjY5NiAxNS42OTYgMCAwMS05LjExMSA2LjUzNCA0NS4zNjMgNDUuMzYzIDAgMDEtOS4wMTUgMS41MjV2OC4zMThoLTEwLjQ0di04LjMzelwiLz48cGF0aCBmaWxsPVwiI0ZDRDU1M1wiIGQ9XCJNMzA5Ljc4MiAxNDkuMzU5YzAgNC4yNy0uOTc2IDguMjExLTIuOTQ1IDExLjc2LTEuOTYxIDMuNTQ1LTQuODg5IDYuNDAyLTguNzMxIDguNTIzLTMuODQxIDIuMTE3LTguNjQzIDMuMTg1LTE0LjM1NyAzLjE4NS0yLjc1NyAwLTUuMjgxLS4xNTYtNy41NDYtLjQ0OGEzNi40OTYgMzYuNDk2IDAgMDEtNi41MjMtMS40NjVjLTIuMDgtLjY2OC00LjIzMy0xLjU4NC02LjQ1NC0yLjczN3YtMTcuNzVjMy40MjYgMS45NzcgNi45MTUgMy41MjYgMTAuNDg0IDQuNTk4IDMuNTUzIDEuMDc2IDYuNzk4IDEuNjE2IDkuNjkxIDEuNjE2IDEuNzA1IDAgMy4xMjUtLjI1MiA0LjIwNS0uNzI0IDEuMDg5LS40NzYgMS45MDktMS4xNDggMi40NDEtMS45Ni41NDEtLjgyOS44MDktMS43OTMuODA5LTIuODc3IDAtMS4xODktLjMwOC0yLjI0OS0uOTQ1LTMuMTQ5LS42MjQtLjg5My0xLjc4OC0xLjg5Ny0zLjM4OS0yLjk0NS0xLjYtMS4wNTMtMy45MDEtMi4zNjEtNi44MDItMy45MjZhNjguMTYzIDY4LjE2MyAwIDAxLTYuNjMtNC4wODFjLTEuOTY1LTEuMzY1LTMuNjU3LTIuOTA1LTUuMDQyLTQuNTk4LTEuMzg0LTEuNy0yLjQ4NS0zLjY5My0zLjIzNy01Ljk0Mi0uNzQ4LTIuMjQ1LTEuMTM3LTQuOTIxLTEuMTM3LTcuOTg3IDAtNC41OTcgMS4wMTctOC41MTggMy4wNDYtMTEuNzI3IDIuMDI4LTMuMjE4IDQuOTQxLTUuNjkgOC42NzQtNy4zODcgMy43NDItMS43MDEgOC4yMTUtMi41NDkgMTMuMzk3LTIuNTQ5IDMuOTQxIDAgNy42NTUuNDkyIDExLjEwOCAxLjQ2NWE1NC45NiA1NC45NiAwIDAxOS44ODMgMy44NDFsLTUuNDA2IDE1LjM3M2MtMi44NjEtMS41NDgtNS41OTgtMi43MjEtOC4yMTUtMy41MjktMi42MTctLjgwOC01LjA2MS0xLjIwNC03LjMxOC0xLjIwNC0xLjQ4IDAtMi42OTMuMjA4LTMuNjMzLjYzNi0uOTI1LjQxNi0xLjY0NSAxLjAwOC0yLjA4NSAxLjcwNC0uNDU2LjcxNy0uNjg4IDEuNTMzLS42ODggMi40NjUgMCAxLjIwNS4zNTIgMi4yODEgMS4wMTYgMy4yMDEuNjY4LjkyMSAxLjg3NyAxLjk0OSAzLjU5NyAyLjk5OCAxLjcyOSAxLjA1MiA0LjE5OCAyLjQ3NiA3LjM4NyA0LjE2NSAzLjI4OSAxLjczNiA2LjA4MiAzLjU2MSA4LjM1MSA1LjQ5NCAyLjI1NyAxLjkyOCA0LjAyMSA0LjE4OSA1LjIwMiA2Ljc1IDEuMTggMi41NTcgMS43OTIgNS42MyAxLjc5MiA5LjIxMXptMjYuMjY5IDIxLjQzMmwtLjg3Ni0uMDUzYTg2LjM2MiA4Ni4zNjIgMCAwMS02LjAxLS41OCAxMjguNTUyIDEyOC41NTIgMCAwMS01LjY2Ni0uODggNzIuOCA3Mi44IDAgMDEtNS4yNzQtMS4xNTdWMTUzLjE4YzIuMTk3LjE5NyA0LjU3OC4zNTcgNy4xMjYuNDg1IDIuNTQ5LjEzMiA1LjE0Mi4yMjggNy43NTkuMjkyIDIuNjE3LjA2IDUuMDUuMDk2IDcuMzExLjA5Ni4xNTItLjAwNC4zMTYuMDA0LjQ2OC4wMDRhMjQuODQgMjQuODQgMCAwMDQuODY1LS40ODggNi40ODcgNi40ODcgMCAwMDMuMTktMS41NzMgMy45MTIgMy45MTIgMCAwMDEuMDY4LTIuNjg1YzAtLjA3MiAwLS4xNDQtLjAwNC0uMjEydi0xLjEzN2MuMDA0LS4wNzYuMDA0LS4xNTUuMDA0LS4yMzIgMC0xLjE3Ni0uNTYtMi4yNzYtMS41MDktMi45NjRhNS45NDQgNS45NDQgMCAwMC0zLjM5My0xLjA2NWgtNS4yNzhjLTcuNDk4IDAtMTMuMTg0LTEuNjQ4LTE3LjA1OC00Ljk0Ni0zLjg2OS0zLjMwMS01Ljc5Ny04LjgyMy01Ljc4NS0xNi41NzN2LTMuMTk3YzAtNy4xMDcgMi4xMjgtMTIuNDIgNi4zOTQtMTUuOTQ2IDMuMTY5LTIuNjMzIDcuMzktNC4yNzcgMTIuNjY4LTQuOTQxdi03LjYwN2gxMC40Njh2Ny4zOThhNjcuOTUgNjcuOTUgMCAwMTMuODI5LjMwOWMyLjYzNy4yODggNS4yMDIuNjQ4IDcuNTU1IDEuMDYgMi4zNTYuNDEyIDQuNDg1Ljg4IDYuMzU0IDEuMzA5djE0LjkzN2EyNjQuMzk1IDI2NC4zOTUgMCAwMC0xMC4wMzItLjYzM2MtMy43MjEtLjE2OC03LjA5OC0uMjQ4LTEwLjEzNS0uMjM2aC0uMjkyYy0xLjUyNSAwLTMuMDQ1LjEzMi00LjU0Ni4zODhhNS45ODkgNS45ODkgMCAwMC0zLjI5MyAxLjU0NSA0LjYwMiA0LjYwMiAwIDAwLTEuMTc2IDMuMDY5YzAgLjEwOC4wMDQuMjE2LjAxNi4zMnYuOTc2YTQuMSA0LjEgMCAwMC0uMDE2LjMxM2MwIDEuMjkyLjU2IDIuNTE2IDEuNTM2IDMuMzY1YTcuNTE1IDcuNTE1IDAgMDA0LjE4MSAxLjI3NmMuMTkyIDAgLjM4NS0uMDEyLjU3My0uMDI0aDYuMzk0Yy4yNi0uMDA0LjUzMi0uMDEyLjc5Mi0uMDEyIDMuNjU4IDAgNy4yNjIuODg0IDEwLjUgMi41NzdhMTYuODQxIDE2Ljg0MSAwIDAxNi43ODIgNy4wMyAyMS41NiAyMS41NiAwIDAxMi4yNzcgOS42MzJ2My41OTNjMCA2LjEzOC0xLjA2OSAxMC44MjQtMy4yMDEgMTQuMDZhMTUuNjkzIDE1LjY5MyAwIDAxLTkuMTExIDYuNTM1IDQ1LjI4OSA0NS4yODkgMCAwMS05LjAxNSAxLjUyNHY4LjMxOWgtMTAuNDR2LTguMzN6XCIvPjwvc3ZnPic7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFNlbmRNb25leVN2ZyB9IGZyb20gJy4uL2hlbHBlcnMvY29uc3QnO1xyXG5mdW5jdGlvbiBhZGRCdXR0b24oKSB7XHJcbiAgICB2YXIgYnV0dG9uR3JvdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNzcy0xZGJqYzRuLnItMXRhM2Z4cC5yLTE4dTM3aXouci0xd3RqMGVwLnItMXMyYnpyNC5yLTFtZGJod3MnKTtcclxuICAgIGlmIChidXR0b25Hcm91cHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgdmFyIGV4aXN0aW5nQnV0dG9uID0gYnV0dG9uR3JvdXBzW2ldLnF1ZXJ5U2VsZWN0b3IoJy50aHJpZnR5TmZ0X3NlbmQtbW9uZXktYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGlmICghZXhpc3RpbmdCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRfMSA9IGJ1dHRvbkdyb3Vwc1tpXS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGhyaWZ0eU5mdF9zZW5kLW1vbmV5LWJ1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xyXG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS56SW5kZXggPSAnMTAwMCc7XHJcbiAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gU2VuZE1vbmV5U3ZnO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uR3JvdXBzW2ldLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXHJcbiAgICAgICAgICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cC5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAuc3R5bGUubGVmdCA9ICcwJztcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKDUwJSwgNTAlKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAuc3R5bGUud2lkdGggPSAnNTAlJztcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cC5zdHlsZS5oZWlnaHQgPSAnNTAlJztcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwLnN0eWxlLnpJbmRleCA9ICcxMDAwJztcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cC5zdHlsZS5ib3hTaGFkb3cgPSAnMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpJztcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cC5zdHlsZS5jb2xvciA9ICdibGFjayc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UuaW5uZXJIVE1MID0gJ1gnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2Uuc3R5bGUucmlnaHQgPSAnMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2Uuc3R5bGUucGFkZGluZyA9ICcxMHB4JztcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2Uuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlLnN0eWxlLmZvbnRTaXplID0gJzIwcHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0d2l0dGVyVXNlck5hbWVEaXYgPSBwYXJlbnRfMS5xdWVyeVNlbGVjdG9yQWxsKCcuY3NzLTkwMW9hby5jc3MtMWhmM291NS5yLTE0ajc5cHYuci0xOHUzN2l6LnItMzdqNWpyLnItMXd2Yjk3OC5yLWEwMjNlNi5yLTE2ZGJhNDEuci1yaml4cWUuci1iY3FlZW8uci1xdnV0YzAgPiAuY3NzLTkwMW9hby5jc3MtMTZteTQwNi5yLXBvaWxuMy5yLWJjcWVlby5yLXF2dXRjMCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfdHdpdHRlclVzZXJOYW1lID0gdHdpdHRlclVzZXJOYW1lRGl2WzBdLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBfdHdpdHRlclVzZXJOYW1lLmluZGV4T2YoJ0AnKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdHdpdHRlclVzZXJOYW1lID0gX3R3aXR0ZXJVc2VyTmFtZS5zbGljZShpbmRleCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY3JlYXRlIGFtb3VudCBpbnB1dCBhbmQgc2VuZCBidXR0b24gaW4gcG9wdXBcclxuICAgICAgICAgICAgICAgICAgICAvL2NyZWF0ZSBhIGgxIHdpdGggdHdpdHRlciB1c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICAgICAgICAgICAgICBoMS5pbm5lckhUTUwgPSAnU2VuZCBBdmF4IHRvICcgKyB0d2l0dGVyVXNlck5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaDEuc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFtb3VudElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnRJbnB1dC50eXBlID0gJ251bWJlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50SW5wdXQudmFsdWUgPSAnMC4wMDA1JztcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnRJbnB1dC5wbGFjZWhvbGRlciA9ICdBbW91bnQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudElucHV0LnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudElucHV0LnN0eWxlLmhlaWdodCA9ICc1MHB4JztcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnRJbnB1dC5zdHlsZS5tYXJnaW4gPSAnMTBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50SW5wdXQuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzEwcHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudElucHV0LnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgI2NjYyc7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50SW5wdXQuc3R5bGUucGFkZGluZyA9ICcxMHB4JztcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnRJbnB1dC5zdHlsZS5mb250U2l6ZSA9ICcyMHB4JztcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnRJbnB1dC5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50SW5wdXQuc3R5bGUub3V0bGluZSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnRJbnB1dC5zdHlsZS5jb2xvciA9ICdibGFjayc7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50SW5wdXQuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnRJbnB1dC5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnRJbnB1dC5zdHlsZS5mb250RmFtaWx5ID0gJ3NhbnMtc2VyaWYnO1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudElucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnRJbnB1dC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkICNjY2MnO1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudElucHV0LnN0eWxlLmJvcmRlclJhZGl1cyA9ICc0cHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudElucHV0LnN0eWxlLmJveFNoYWRvdyA9ICdpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50SW5wdXQuc3R5bGUudHJhbnNpdGlvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cyxib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZEJ1dHRvbi5pbm5lckhUTUwgPSAnU2VuZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZEJ1dHRvbi5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgICAgICAgICAgICAgICBzZW5kQnV0dG9uLnN0eWxlLmhlaWdodCA9ICc1MHB4JztcclxuICAgICAgICAgICAgICAgICAgICBzZW5kQnV0dG9uLnN0eWxlLm1hcmdpbiA9ICcxMHB4JztcclxuICAgICAgICAgICAgICAgICAgICBzZW5kQnV0dG9uLnN0eWxlLmJvcmRlclJhZGl1cyA9ICcxMHB4JztcclxuICAgICAgICAgICAgICAgICAgICBzZW5kQnV0dG9uLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgI2NjYyc7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZEJ1dHRvbi5zdHlsZS5wYWRkaW5nID0gJzEwcHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRCdXR0b24uc3R5bGUuZm9udFNpemUgPSAnMjBweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZEJ1dHRvbi5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZEJ1dHRvbi5zdHlsZS5vdXRsaW5lID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRCdXR0b24uc3R5bGUuY29sb3IgPSAnYmxhY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRCdXR0b24uc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcclxuICAgICAgICAgICAgICAgICAgICBzZW5kQnV0dG9uLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRCdXR0b24uc3R5bGUuZm9udEZhbWlseSA9ICdzYW5zLXNlcmlmJztcclxuICAgICAgICAgICAgICAgICAgICBzZW5kQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcclxuICAgICAgICAgICAgICAgICAgICBzZW5kQnV0dG9uLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgI2NjYyc7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZEJ1dHRvbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNHB4JztcclxuICAgICAgICAgICAgICAgICAgICBzZW5kQnV0dG9uLnN0eWxlLmJveFNoYWRvdyA9ICdpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSc7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZEJ1dHRvbi5zdHlsZS50cmFuc2l0aW9uID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cyc7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFtb3VudCA9IGFtb3VudElucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBwb3J0ID0gY2hyb21lLnJ1bnRpbWUuY29ubmVjdCh7IG5hbWU6ICdjb250ZW50LXNjcmlwdCcgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHsgYW1vdW50IH0sIHBvcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm92aWRlciwgJ2RkZGRkZGRkZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7IF9wcm92aWRlciB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gX3Byb3ZpZGVyLnNlbmQoJ2V0aF9yZXF1ZXN0QWNjb3VudHMnKS50aGVuKChhY2NvdW50czogYW55KSA9PiB7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoaDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKGFtb3VudElucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChzZW5kQnV0dG9uKTtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwb3B1cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAuYXBwZW5kQ2hpbGQoY2xvc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnV0dG9uR3JvdXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbnZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcclxuICAgIG11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvbikge1xyXG4gICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnY2hpbGRMaXN0JyAmJiBtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbXV0YXRpb24uYWRkZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiZcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5jb250YWlucygnY3NzLTFkYmpjNG4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEJ1dHRvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==