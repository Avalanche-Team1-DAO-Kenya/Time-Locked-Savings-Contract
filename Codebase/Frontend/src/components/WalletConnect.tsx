import React from 'react';
import { useAccount, useDisconnect, useChainId } from 'wagmi';
import { Button } from './ui/button';
import { Wallet, LogOut } from 'lucide-react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { avalancheFuji } from 'wagmi/chains';

export function WalletConnect() {
  const { address, isConnected } = useAccount();
//   const { disconnect } = useDisconnect();
  const { open } = useWeb3Modal();
  const chainId = useChainId();

  const handleConnect = async () => {
    if (isConnected) {
      disconnect();
    } else {
      open();
    }
  };

  return (
    <Button
      onClick={handleConnect}
      className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-6 py-2 rounded-full"
    >
      {isConnected ? (
        <div className="flex items-center gap-2">
          <span>{address?.slice(0, 6)}...{address?.slice(-4)}</span>
          <LogOut className="h-4 w-4" />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Wallet className="h-4 w-4" />
          Connect Wallet
        </div>
      )}
    </Button>
  );
} 