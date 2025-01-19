// src/App.tsx
import React from 'react';
import { WagmiConfig } from 'wagmi';
import { config } from './config/web3';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { ThemeProvider } from './contexts/ThemeContext';
import AppRoutes from './Router';
import { avalancheFuji } from 'wagmi/chains';

// Initialize Web3Modal with Core Wallet support
createWeb3Modal({
  wagmiConfig: config,
  projectId: 'YOUR_PROJECT_ID',
  chains: config.chains,
  themeMode: 'dark',
  defaultChain: avalancheFuji,
  featuredWalletIds: [
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', // Core
  ],
  termsOfServiceUrl: 'https://your-terms.com',
  privacyPolicyUrl: 'https://your-privacy.com',
});

const App: React.FC = () => {
  return (
    <WagmiConfig config={config}>
      <ThemeProvider>
        <div className="min-h-screen bg-[#1a1b23]">
          <AppRoutes />
        </div>
      </ThemeProvider>
    </WagmiConfig>
  );
};

export default App;
