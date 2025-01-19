'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { BarChart, Clock, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

interface DepositFormProps {
  onDeposit: (amount: number) => Promise<void>;
  balance: number;
  maturityDate: Date;
}

export default function DepositForm({ onDeposit, balance, maturityDate }: DepositFormProps) {
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
    <div className="container mx-auto p-6 space-y-6">
      {/* Savings Summary Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardContent className="p-6 space-y-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Current Balance</p>
                <p className="text-4xl font-bold text-primary">
                  ${balance.toLocaleString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-green-500" />
                <span className="text-sm text-green-500">Connected</span>
              </div>
            </div>
            
            {/* Maturity Timer */}
            <div className="flex items-center gap-4 pt-4 border-t">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Time to Maturity</p>
                <p className="font-medium">{maturityDate.toLocaleDateString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Deposit/Withdraw Tabs */}
      <Tabs defaultValue="deposit" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="deposit">Deposit</TabsTrigger>
          <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
        </TabsList>

        <TabsContent value="deposit">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Amount to Deposit</label>
                <Input
                  type="number"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="Enter amount"
                  className="w-full"
                />
              </div>

              {/* Target Amount with Simulation */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Target Amount</label>
                <Input
                  type="number"
                  value={targetAmount}
                  onChange={handleTargetAmountChange}
                  placeholder="Set your savings goal"
                  className="w-full"
                />
                {Number(targetAmount) > 0 && (
                  <div className="text-sm text-green-600">
                    Expected return: ${(Number(targetAmount) * 0.1).toFixed(2)}
                  </div>
                )}
              </div>

              {/* Savings Graph */}
              <div className="h-48 w-full bg-gray-50 rounded-lg flex items-center justify-center">
                <BarChart className="h-6 w-6 text-gray-400" />
                <span className="ml-2 text-sm text-gray-500">Savings projection graph</span>
              </div>

              <Button 
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Confirm Deposit'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Add WithdrawContent component here */}
      </Tabs>
    </div>
  );
}
