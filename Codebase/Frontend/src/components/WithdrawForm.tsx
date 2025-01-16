'use client';

import { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/button';
import React from 'react';
import 'es6-promise/auto';

interface WithdrawFormProps {
  onWithdraw: (amount: number) => Promise<void>;
  lockTime: number;
}

export default function WithdrawForm({ onWithdraw, lockTime }: WithdrawFormProps) {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isLocked = Date.now() < lockTime;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow valid numbers or an empty string
    if (!isNaN(Number(value)) || value === '') {
      setAmount(value);
      setError(null); // Clear error on valid input
    } else {
      setError('Invalid input. Please enter a valid number.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the amount
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setError('Please enter a valid withdrawal amount greater than 0.');
      return;
    }

    try {
      setIsSubmitting(true);
      await onWithdraw(Number(amount));
      setAmount(''); // Clear the input after successful submission
    } catch (err) {
      console.error('Withdrawal failed:', err);
      setError('An error occurred during withdrawal. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="number"
        value={amount}
        onChange={handleChange}
        placeholder="Enter withdrawal amount"
        min="0"
        step="0.01"
        required
        disabled={isLocked || isSubmitting}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit" className="w-full" disabled={isLocked || isSubmitting}>
        {isLocked ? 'Locked' : isSubmitting ? 'Processing...' : 'Withdraw'}
      </Button>
      {isLocked && <p className="text-gray-500 text-sm">Withdrawal is locked until the specified time.</p>}
    </form>
  );
}
