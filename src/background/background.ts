chrome.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener((message) => {
    if (message.type === 'connect_metamask') {
      // console.log(provider, 'dddddd');
      // sendResponse(provider);
      console.log('connect_metamask');
    }

    if (message.type === 'sendMoney') {
      console.log({ port });
      // var popups = chrome.extension.getViews();
      // console.log({ popups });
    }
  });
});
