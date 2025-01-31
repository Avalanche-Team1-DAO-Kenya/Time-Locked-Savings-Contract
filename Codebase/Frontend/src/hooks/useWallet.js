import { useState } from 'react';
import { ethers } from 'ethers';

export const useWallet = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [address, setAddress] = useState('');

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("To use Piggzy, Please install MetaMask!");
        return;
      }

      // Check if the user is on Fuji Testnet
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      const fujiChainId = '0xA869'; // Fuji Testnet chainId in hex (43113)

      if (chainId !== fujiChainId) {
        // Prompt the user to switch to Fuji Testnet
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: fujiChainId,
            chainName: 'Avalanche Fuji C-Chain',
            nativeCurrency: {
              name: 'AVAX',
              symbol: 'AVAX',
              decimals: 18,
            },
            rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
            blockExplorerUrls: ['https://testnet.snowtrace.io/'],
          }],
        });

        // After switching, reconnect the wallet
        await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: fujiChainId }] });
      }

      // Connect to the wallet
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();

      setProvider(provider);
      setSigner(signer);
      setAddress(accounts[0]);
    } catch (error) {
      console.error("Wallet connection failed:", error);
      alert("Failed to connect wallet. Please ensure you're on the Fuji Testnet.");
    }
  };

  return { provider, signer, address, connectWallet };
};