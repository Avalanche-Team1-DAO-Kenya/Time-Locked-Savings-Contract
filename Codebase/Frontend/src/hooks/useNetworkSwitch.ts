import { useChainId, useSwitchChain } from 'wagmi';
import { avalancheFuji } from 'wagmi/chains';

export function useNetworkSwitch() {
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();

  const ensureCorrectNetwork = async () => {
    if (chainId !== avalancheFuji.id) {
      try {
        await switchChain({ chainId: avalancheFuji.id });
      } catch (error) {
        console.error('Failed to switch network:', error);
      }
    }
  };

  return { ensureCorrectNetwork, isCorrectNetwork: chainId === avalancheFuji.id };
} 