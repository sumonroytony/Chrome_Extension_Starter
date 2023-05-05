import { SendMoneySvg } from '../helpers/const';
function addButton() {
  var buttonGroups = document.querySelectorAll(
    '.css-1dbjc4n.r-1ta3fxp.r-18u37iz.r-1wtj0ep.r-1s2bzr4.r-1mdbhws'
  );

  if (buttonGroups.length > 0) {
    for (let i = 0; i < buttonGroups.length; i++) {
      const existingButton = buttonGroups[i].querySelector(
        '.thriftyNft_send-money-button'
      );
      if (!existingButton) {
        const parent = buttonGroups[i].parentNode.parentNode;
        const div = document.createElement('div');
        div.classList.add('thriftyNft_send-money-button');
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.cursor = 'pointer';
        div.style.zIndex = '1000';
        div.innerHTML = SendMoneySvg;
        buttonGroups[i].appendChild(div);
        // eslint-disable-next-line no-loop-func
        div.addEventListener('click', (event) => {
          event.stopPropagation();
          event.preventDefault();
          const popup = document.createElement('div');
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

          const close = document.createElement('div');
          close.innerHTML = 'X';
          close.style.position = 'absolute';
          close.style.top = '0';
          close.style.right = '0';
          close.style.padding = '10px';
          close.style.cursor = 'pointer';
          close.style.color = 'black';
          close.style.fontSize = '20px';
          const twitterUserNameDiv = parent.querySelectorAll(
            '.css-901oao.css-1hf3ou5.r-14j79pv.r-18u37iz.r-37j5jr.r-1wvb978.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-qvutc0 > .css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0'
          );
          const _twitterUserName = twitterUserNameDiv[0].innerHTML;
          const index = _twitterUserName.indexOf('@');
          const twitterUserName = _twitterUserName.slice(index + 1);
          //create amount input and send button in popup
          //create a h1 with twitter user
          const h1 = document.createElement('h1');
          h1.innerHTML = 'Send Avax to ' + twitterUserName;
          h1.style.width = '100%';

          const amountInput = document.createElement('input');
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
          const sendButton = document.createElement('button');
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
          sendButton.addEventListener('click', () => {
            const amount = amountInput.value;
            // const port = chrome.runtime.connect({ name: 'content-script' });
            // console.log({ amount }, port);
            // console.log(provider, 'ddddddddd');
            // console.log({ _provider });
            // _provider.send('eth_requestAccounts').then((accounts: any) => {});
          });
          popup.appendChild(h1);
          popup.appendChild(amountInput);
          popup.appendChild(sendButton);

          close.addEventListener('click', () => {
            document.body.removeChild(popup);
          });
          popup.appendChild(close);

          document.body.appendChild(popup);
        });
      }
    }
  }
}

var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      mutation.addedNodes.forEach(function (node: any) {
        if (
          node.nodeType === Node.ELEMENT_NODE &&
          node.classList.contains('css-1dbjc4n')
        ) {
          addButton();
        }
      });
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });
