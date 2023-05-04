chrome.runtime.onConnect.addListener((port) => {
  console.log('connected ', port);

  if (port.name === 'popup') {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.type === 'connect_metamask') {
        // console.log(provider, 'dddddd');
        // sendResponse(provider);
        console.log('connect_metamask');
        sendResponse('connect_metamask2');
      }
    });
  }
});
