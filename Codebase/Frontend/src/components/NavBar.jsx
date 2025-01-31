import { useWallet } from '../hooks/useWallet';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  const { address, connectWallet } = useWallet();
  const shortenedAddress = address 
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : '';

  return (
    <nav className="bg-white dark:bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">TimeLock Savings</h1>
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          {address ? (
            <span className="bg-gray-800 text-white px-4 py-2 rounded">
              {shortenedAddress}
            </span>
          ) : (
            <button
              onClick={connectWallet}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}