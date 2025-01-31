import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import TimeLockSavings from '../contracts/TimeLockSavings.json';
import { CONTRACT_ADDRESS } from '../utils/constants';

export const useContract = (signer) => {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (signer) {
      try {
        const instance = new ethers.Contract(
          CONTRACT_ADDRESS,
          TimeLockSavings.abi,
          signer
        );
        setContract(instance);
      } catch (error) {
        console.error("Contract initialization failed:", error);
      }
    }
  }, [signer]);

  return contract;
};