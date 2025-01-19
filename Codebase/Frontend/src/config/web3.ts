import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { avalancheFuji } from 'wagmi/chains';

// Get projectId at https://cloud.walletconnect.com
export const projectId = 'YOUR_PROJECT_ID';

if (!projectId) throw new Error('Project ID is not defined');

const metadata = {
  name: 'Pigzzy',
  description: 'Smart savings with time-locked security',
  url: window.location.origin,
  icons: ['https://avatars.githubusercontent.com/u/37784886'] // Add your app icon
};

// Custom RPC URLs for Avalanche networks
const avalancheRpcUrls = {
  [avalancheFuji.id]: 'https://api.avax-test.network/ext/bc/C/rpc'
};

export const config = defaultWagmiConfig({
  chains: [avalancheFuji], // Add more chains as needed
  projectId,
  metadata,
  enableCoreWallet: true, // Enable Core Wallet specifically
  includeWalletIds: [
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', // Core
    '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0', // MetaMask
    'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa', // Coinbase Wallet
  ],
}); 