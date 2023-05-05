/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
chrome.runtime.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (message) {
        if (message.type === 'connect_metamask') {
            // console.log(provider, 'dddddd');
            // sendResponse(provider);
            console.log('connect_metamask');
        }
        if (message.type === 'sendMoney') {
            console.log({ port: port });
            // var popups = chrome.extension.getViews();
            // console.log({ popups });
        }
    });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsWUFBWTtBQUN0QztBQUNBLDZCQUE2QixRQUFRO0FBQ3JDO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJpZnR5bmZ0X2V4dGVuc2lvbi8uL3NyYy9iYWNrZ3JvdW5kL2JhY2tncm91bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY2hyb21lLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKGZ1bmN0aW9uIChwb3J0KSB7XHJcbiAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjb25uZWN0X21ldGFtYXNrJykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm92aWRlciwgJ2RkZGRkZCcpO1xyXG4gICAgICAgICAgICAvLyBzZW5kUmVzcG9uc2UocHJvdmlkZXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdF9tZXRhbWFzaycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZS50eXBlID09PSAnc2VuZE1vbmV5Jykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7IHBvcnQ6IHBvcnQgfSk7XHJcbiAgICAgICAgICAgIC8vIHZhciBwb3B1cHMgPSBjaHJvbWUuZXh0ZW5zaW9uLmdldFZpZXdzKCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHsgcG9wdXBzIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9