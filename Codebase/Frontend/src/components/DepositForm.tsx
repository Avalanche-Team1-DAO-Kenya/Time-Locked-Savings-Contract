'use client';

import { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/button';
import React from 'react';


interface DepositFormProps {
  onDeposit: (amount: number) => Promise<void>;
}

export default function DepositForm({ onDeposit }: DepositFormProps) {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      setError('Please enter a valid deposit amount greater than 0.');
      return;
    }

    try {
      setIsSubmitting(true);
      await onDeposit(Number(amount));
      setAmount(''); // Clear the input after successful submission
    } catch (err) {
      console.error('Deposit failed:', err);
      setError('An error occurred during deposit. Please try again.');
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
        placeholder="Enter deposit amount"
        min="0"
        step="0.01"
        required
        disabled={isSubmitting}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Processing...' : 'Deposit'}
      </Button>
    </form>
  );
}
