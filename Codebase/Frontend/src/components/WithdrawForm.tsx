'use client';

import { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/button';
import React from 'react';
import 'es6-promise/auto';
import { FaMoneyBillWave } from 'react-icons/fa'; // Importing an icon from react-icons
import { Link } from 'react-router-dom'; // Add Link import to enable navigation

interface WithdrawFormProps {
  onWithdraw: (amount: number, pin: string) => Promise<void>;
  lockTime: number;
}

export default function WithdrawForm({ onWithdraw, lockTime }: WithdrawFormProps) {
  const [amount, setAmount] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [extendedLockTime, setExtendedLockTime] = useState(lockTime);

  const isLocked = Date.now() < extendedLockTime;

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) || value === '') {
      setAmount(value);
      setError(null); // Clear error on valid input
    } else {
      setError('Invalid input. Please enter a valid number.');
    }
  };

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPin(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!pin) {
      setError('Please enter your PIN.');
      return;
    }

    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setError('Please enter a valid withdrawal amount greater than 0.');
      return;
    }

    if (isLocked) {
      const penaltyDays = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
      setExtendedLockTime((prev) => prev + penaltyDays);
      setError(
        `You cannot withdraw before the savings period is over. Your lock period has been extended by 7 days.`
      );
      return;
    }

    try {
      setIsSubmitting(true);
      await onWithdraw(Number(amount), pin);
      setAmount(''); // Clear the input after successful submission
      setPin(''); // Clear the PIN field
      setError(null);
    } catch (err) {
      console.error('Withdrawal failed:', err);
      setError('An error occurred during withdrawal. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url(https://media.istockphoto.com/id/1143463980/photo/withdrawal-european-euro-from-the-atm.jpg?s=612x612&w=is&k=20&c=9dAiL6mXb_UDWmqWIhclyXIE3B0M3c2KqPKjPDq4OYg=)',
      }}
    >
      {/* Header Section */}
      <div className="fixed top-0 left-0 w-full bg-black py-4 opacity-90">
        <h1 className="text-4xl font-bold text-center text-white">Your Future Is Safe With Piggzy</h1>
      </div>

      {/* Marquee Section */}
      <div className="w-full overflow-hidden text-white mt-20">
        <marquee className="font-semibold">
          Thank you for your patience and perserverance during your saving journey,   Your savings, your future!
        </marquee>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mt-10 text-gray-800 opacity-90">
        {/* Icon Header */}
        <div className="flex items-center justify-center mb-4 bg-black py-2 rounded-md">
          <FaMoneyBillWave className="text-green-500 text-3xl mr-2" />
          <h2 className="text-2xl font-bold text-center text-white">Withdraw</h2>
        </div>

        {/* Link to locktimer page */}
        <p className="text-sm text-gray-500 mt-4">
          <button><Link to="/lock" className="text-blue-500 underline">Locktimer</Link></button> click here Check your remaining time before withdrawing to avoid penalties. If you withdraw before the allowed time, your withdrawal lock will be extended by 7 days.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <Input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter withdrawal amount"
            min="0"
            step="0.01"
            required
            disabled={isLocked || isSubmitting}
            className="w-full px-4 py-2 border rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Input
            type="password"
            value={pin}
            onChange={handlePinChange}
            placeholder="Enter your PIN"
            required
            disabled={isLocked || isSubmitting}
            className="w-full px-4 py-2 border rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button
            type="submit"
            className="w-full bg-black hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
            disabled={isLocked || isSubmitting}
          >
            {isLocked ? 'Locked' : isSubmitting ? 'Processing...' : 'Withdraw'}
          </Button>
          {isLocked && (
            <p className="text-gray-500 text-sm">
              Withdrawal is locked until {new Date(extendedLockTime).toLocaleString()}.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
