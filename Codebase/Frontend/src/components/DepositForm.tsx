'use client';

import { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/button';
import React from 'react';
import { FaPiggyBank } from 'react-icons/fa';

interface DepositFormProps {
  onDeposit: (amount: number) => Promise<void>;
}

export default function DepositForm({ onDeposit }: DepositFormProps) {
  const [amount, setAmount] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [reason, setReason] = useState('');
  const [duration, setDuration] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) || value === '') {
      setAmount(value);
      setError(null);
    } else {
      setError('Invalid input. Please enter a valid number.');
    }
  };

  const handleTargetAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) || value === '') {
      setTargetAmount(value);
    } else {
      setError('Invalid input for target amount.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const deposit = Number(amount);
    const target = Number(targetAmount);

    if (!deposit || isNaN(deposit) || deposit <= 0) {
      setError('Please enter a valid deposit amount greater than 0.');
      return;
    }

    if (!target || isNaN(target) || target <= deposit) {
      setError('Target amount must be greater than the deposit amount.');
      return;
    }

    if (pin !== confirmPin) {
      setError('PINs do not match. Please try again.');
      return;
    }

    try {
      setIsSubmitting(true);
      await onDeposit(deposit);
      setAmount('');
      setTargetAmount('');
      setReason('');
      setDuration('');
      setPin('');
      setConfirmPin('');
      setError(null); // Clear error after successful submission
    } catch (err) {
      console.error('Deposit failed:', err);
      setError('An error occurred during deposit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen w-screen text-white"
      style={{
        backgroundImage: 'url(https://www.shutterstock.com/image-photo/bag-money-word-deposit-near-260nw-1276347811.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Main Page Header */}
      <div className="text-center mb-4 w-full bg-black py-4 opacity-80">
        <h1 className="text-4xl font-bold text-white">
          Deposit for Future
        </h1>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden whitespace-nowrap mb-4 w-full">
        <marquee className="text-white font-semibold">
          Welcome to Piggzy Account - Your savings, your future!
        </marquee>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-gray-800 opacity-90">
        {/* Deposit Header in the Form */}
        <div className="flex items-center justify-start mb-4">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaPiggyBank className="text-green-500" />
            Deposit for Future
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Deposit Amount */}
          <Input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter deposit amount"
            min="0"
            step="0.01"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-2 border rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Target Amount */}
          <Input
            type="number"
            value={targetAmount}
            onChange={handleTargetAmountChange}
            placeholder="Enter target amount (must be greater than deposit)"
            min="0"
            step="0.01"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-2 border rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Reason for Saving */}
          <select
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="" disabled>
              Why are you saving?
            </option>
            <option value="schoolfees">School Fees</option>
            <option value="business">Business</option>
            <option value="others">Others</option>
          </select>

          {/* Saving Duration with Date and Time */}
          <Input
            type="datetime-local"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Enter PIN */}
          <Input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Enter your PIN"
            required
            className="w-full px-4 py-2 border rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Confirm PIN */}
          <Input
            type="password"
            value={confirmPin}
            onChange={(e) => setConfirmPin(e.target.value)}
            placeholder="Confirm your PIN"
            required
            className="w-full px-4 py-2 border rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-black hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Deposit'}
          </Button>
        </form>

        {/* Footer */}
        <footer className="mt-6 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Piggzy Account. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
