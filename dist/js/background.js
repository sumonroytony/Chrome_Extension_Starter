/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
chrome.runtime.onConnect.addListener(function (port) {
    console.log('connected ', port);
    if (port.name === 'popup') {
        chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
            if (message.type === 'connect_metamask') {
                // console.log(provider, 'dddddd');
                // sendResponse(provider);
                console.log('connect_metamask');
                sendResponse('connect_metamask2');
            }
        });
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmlmdHluZnRfZXh0ZW5zaW9uLy4vc3JjL2JhY2tncm91bmQvYmFja2dyb3VuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjaHJvbWUucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKHBvcnQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjb25uZWN0ZWQgJywgcG9ydCk7XHJcbiAgICBpZiAocG9ydC5uYW1lID09PSAncG9wdXAnKSB7XHJcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xyXG4gICAgICAgICAgICBpZiAobWVzc2FnZS50eXBlID09PSAnY29ubmVjdF9tZXRhbWFzaycpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb3ZpZGVyLCAnZGRkZGRkJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBzZW5kUmVzcG9uc2UocHJvdmlkZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RfbWV0YW1hc2snKTtcclxuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSgnY29ubmVjdF9tZXRhbWFzazInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9