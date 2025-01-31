import { useState } from 'react';
import { useContract } from '../hooks/useContract';
import PropTypes from 'prop-types';
import { ethers } from 'ethers';

export default function WithdrawForm({ deposits, refresh }) {
  const [selectedDeposit, setSelectedDeposit] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const contract = useContract();

  const handleWithdraw = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validate inputs
      if (!contract) throw new Error("Contract not connected");
      if (selectedDeposit === '') throw new Error("Select a deposit to withdraw");
      if (!deposits[selectedDeposit]) throw new Error("Invalid deposit selected");

      // Call the withdraw function
      const tx = await contract.withdraw(selectedDeposit);
      await tx.wait();

      // Refresh data after successful withdrawal
      refresh();
      setSelectedDeposit('');
    } catch (error) {
      console.error("Withdrawal failed:", error);
      setError(error.reason || error.message || "Withdrawal failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Withdraw Deposit</h3>
      {error && <div className="mb-4 text-red-600">{error}</div>}
      <form onSubmit={handleWithdraw} className="space-y-4">
        <select
          className="w-full p-2 border rounded"
          value={selectedDeposit}
          onChange={(e) => setSelectedDeposit(e.target.value)}
          disabled={loading || deposits.length === 0}
        >
          <option value="">Select Deposit</option>
          {deposits.map((deposit, index) => (
            <option key={index} value={index}>
              Deposit #{index} - {ethers.formatEther(deposit.amount)} ETH
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 disabled:bg-gray-400"
          disabled={loading || selectedDeposit === ''}
        >
          {loading ? 'Processing...' : 'Withdraw'}
        </button>
      </form>
    </div>
  );
}

WithdrawForm.propTypes = {
  deposits: PropTypes.array.isRequired,
  refresh: PropTypes.func.isRequired,
};