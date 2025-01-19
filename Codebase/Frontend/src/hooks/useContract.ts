import { useContractWrite, useContractRead, useWalletClient } from 'wagmi';
import { CONTRACT_ABI } from '../AddressABI/contractABI';
import { CONTRACT_ADDRESS } from '../config/constants';

export function useTimeLockContract() {
  const { data: walletClient } = useWalletClient();

  const { writeAsync: deposit } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'deposit',
  });

  const { writeAsync: withdraw } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'withdraw',
  });

  const depositFunds = async (amount: string, reason: string, maturityDate: number) => {
    if (!walletClient) return;
    const tx = await deposit({
      args: [reason, maturityDate],
      value: amount,
    });
    await tx.wait();
  };

  const withdrawFunds = async (depositIndex: number) => {
    if (!walletClient) return;
    const tx = await withdraw({
      args: [depositIndex],
    });
    await tx.wait();
  };

  return {
    deposit: depositFunds,
    withdraw: withdrawFunds,
  };
} 