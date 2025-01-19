import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WalletConnect } from '../components/WalletConnect';
import { FaPiggyBank } from 'react-icons/fa';
import { useAccount } from 'wagmi';

export function ConnectWallet() {
  const navigate = useNavigate();
  const { isConnected } = useAccount();

  React.useEffect(() => {
    if (isConnected) {
      navigate('/dashboard');
    }
  }, [isConnected, navigate]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <FaPiggyBank className="text-purple-400 text-4xl" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Pigzzy
          </h1>
        </div>
        <p className="text-gray-400 text-lg mb-8">
          Connect your wallet to start saving
        </p>
        <WalletConnect />
      </div>
    </div>
  );
} 