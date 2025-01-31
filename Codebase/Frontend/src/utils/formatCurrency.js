import { ethers } from 'ethers';

export function formatCurrency(value) {
  if (!value && value !== 0n) return '0.0000'; // Handle null/undefined
  return Number(ethers.formatEther(value || 0n)).toLocaleString(undefined, {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4
  });
}