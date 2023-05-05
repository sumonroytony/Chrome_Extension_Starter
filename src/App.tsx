import React, { useEffect } from 'react';
import './assets/tailwind.css';
// import { ethers } from 'ethers';
import { AvaxTestNet, AvaxTestNetChainId } from './helpers/const';
import { connectMetaMask } from './helpers/connectMetamask';
import { ethers } from 'ethers';
import toast, { Toaster } from 'react-hot-toast';
import Web3Token from 'web3-token';
import { setAuthToken } from './client/token';
import client from './client';

function App() {
  const [account, setAccount] = React.useState('');
  const [token, setToken] = React.useState('');
  const [user, setUser] = React.useState({} as any);
  const [twitterId, setTwitterId] = React.useState('');

  // chrome.runtime.onConnect.addListener((port) => {
  //   port.onMessage.addListener((message) => {
  //     if (message.type === 'sendMoney') {
  //       handleConnectToMetamask();
  //     }
  //   });
  // });

  const handleConnectToMetamask = () => {
    const _provider = connectMetaMask();
    const chainId = Number(_provider.chainId);
    if (chainId !== AvaxTestNetChainId) {
      toast.error('Please connect to Avalanche Fuji Testnet');
      return;
    }
    // console.log(window.ethereum);
    const provider = new ethers.providers.Web3Provider(_provider);
    provider.send('eth_requestAccounts', []).then(async (accounts) => {
      try {
        const signer = provider.getSigner();
        const token = await Web3Token.sign(
          async (msg: any) => await signer.signMessage(msg),
          '1d'
        );
        setToken(token);
        setAuthToken(token);
        const user = await client.users.register();
        setUser(user);
        setAccount(accounts[0]);
        setTwitterId(user.socials.twitter);
        console.log(user);
      } catch (error) {
        toast.error('Please connect to Avalanche Fuji Testnet');
        setAccount('');
        setToken('');
      }
    });
  };

  const handleTwitterConnect = async () => {};
  return (
    <div className='flex flex-col justify-center h-[400px] w-[340px] bg-slate-50'>
      <button
        type='button'
        className='rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100'
        onClick={handleConnectToMetamask}
      >
        {account ? 'Connected' : 'Connect to Metamask'}
      </button>

      {account && (
        <button
          type='button'
          className='rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100'
          onClick={handleTwitterConnect}
        >
          {twitterId ? 'Connected to ' + twitterId : 'Connect to Twitter'}
        </button>
      )}
      <Toaster />
    </div>
  );
}

export default App;
