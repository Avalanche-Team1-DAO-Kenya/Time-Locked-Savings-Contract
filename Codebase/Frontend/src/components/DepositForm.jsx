import { useState } from 'react';
import { useContract } from '../hooks/useContract';
import { ethers } from 'ethers';
import PropTypes from 'prop-types';

export default function DepositForm({ refresh }) {
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const [maturityDate, setMaturityDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const contract = useContract();

  const handleDeposit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validate inputs
      if (!contract) throw new Error("Contract not connected");
      if (!amount || Number(amount) <= 0) throw new Error("Invalid amount");
      if (!maturityDate) throw new Error("Select maturity date");
      if (!reason.trim()) throw new Error("Reason cannot be empty");

      const maturityTimestamp = Math.floor(new Date(maturityDate).getTime() / 1000);

      // Send transaction with ETH value
      const tx = await contract.deposit(reason, maturityTimestamp, {
        value: ethers.parseEther(amount)
      });

      await tx.wait();
      refresh();
      setAmount('');
      setReason('');
      setMaturityDate('');
    } catch (error) {
      console.error("Deposit failed:", error);
      setError(error.reason || error.message || "Deposit failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">New Deposit</h3>
      {error && <div className="mb-4 text-red-600">{error}</div>}
      <form onSubmit={handleDeposit} className="space-y-4">
        <input
          type="number"
          step="0.0001"
          placeholder="Amount (ETH)"
          className="w-full p-2 border rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          disabled={loading}
        />
        <input
          type="text"
          placeholder="Reason"
          className="w-full p-2 border rounded"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          disabled={loading}
        />
        <input
          type="date"
          className="w-full p-2 border rounded"
          value={maturityDate}
          onChange={(e) => setMaturityDate(e.target.value)}
          disabled={loading}
          min={new Date().toISOString().split('T')[0]}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Deposit'}
        </button>
      </form>
    </div>
  );
}

DepositForm.propTypes = {
  refresh: PropTypes.func.isRequired,
};