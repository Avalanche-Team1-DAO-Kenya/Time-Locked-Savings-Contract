import React from 'react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Timer } from 'lucide-react';

interface WithdrawContentProps {
  maturityDate: Date;
  balance: number;
}

export function WithdrawContent({ maturityDate, balance }: WithdrawContentProps) {
  const calculatePenalty = (amount: number) => {
    const today = new Date();
    if (today < maturityDate) {
      return amount * 0.1; // 10% penalty for early withdrawal
    }
    return 0;
  };

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        {/* Maturity Timer */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Timer className="h-5 w-5 text-primary" />
            <h3 className="font-medium">Time Until Maturity</h3>
          </div>
          <div className="text-2xl font-bold text-center py-4">
            {/* Add countdown timer component here */}
            {maturityDate.toLocaleDateString()}
          </div>
        </div>

        {/* Withdrawal Amount */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Amount to Withdraw</label>
          <Input
            type="number"
            placeholder="Enter amount"
            max={balance}
            className="w-full"
          />
          <div className="text-sm text-red-500">
            Early withdrawal penalty: ${calculatePenalty(1000).toFixed(2)}
          </div>
        </div>

        <Button 
          variant="destructive"
          className="w-full"
        >
          Withdraw
        </Button>
      </CardContent>
    </Card>
  );
} 