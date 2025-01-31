import { useState, useEffect } from 'react';
import { useContract } from '../hooks/useContract';
import { useWallet } from '../hooks/useWallet';
import SavingsSummary from '../components/SavingsSummary';
import DepositForm from '../components/DepositForm';
import WithdrawForm from '../components/WithdrawForm';
import TransactionHistory from '../components/TransactionHistory';
import SavingsGraph from '../components/SavingsGraph';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Dashboard() {
  const { address, signer, connectWallet } = useWallet();
  const contract = useContract(signer);
  const [deposits, setDeposits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savingsBalance, setSavingsBalance] = useState(0n);
  const [totalPenalties, setTotalPenalties] = useState(0n);


  const refreshData = async () => {
    try {
      setLoading(true);
      if (contract && address) {
        const [userDeposits, balance, penalties] = await Promise.all([
          contract.getUserDeposits(address),
          contract.savingsBalance(address),
          contract.getTotalPenalties()
        ]);
        
        setDeposits(userDeposits);
        setSavingsBalance(balance || 0n);
        setTotalPenalties(penalties || 0n);
      }
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    if (address) refreshData();
  }, [contract, address]);

  if (!address) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <button
          onClick={connectWallet}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Connect Wallet to Continue
        </button>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <SavingsSummary balance={savingsBalance} penalties={totalPenalties} />
            <div className="grid md:grid-cols-2 gap-6">
              <DepositForm refresh={refreshData} />
              <WithdrawForm deposits={deposits} refresh={refreshData} />
            </div>
            <SavingsGraph deposits={deposits} />
            <TransactionHistory deposits={deposits} />
          </>
        )}
      </div>
    </div>
  );
}