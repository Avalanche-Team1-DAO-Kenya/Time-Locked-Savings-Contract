import React from 'react';
import { Card, CardContent } from "./ui/card";
import { Slider } from "./ui/slider";

interface PenaltySimulatorProps {
  balance: number;
  maturityDate: Date;
  onAmountChange: (amount: number) => void;
}

export function PenaltySimulator({ balance, maturityDate, onAmountChange }: PenaltySimulatorProps) {
  const calculatePenalty = (amount: number) => {
    const today = new Date();
    const daysUntilMaturity = Math.ceil((maturityDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    if (daysUntilMaturity > 0) {
      const penaltyRate = Math.min(0.1 + (daysUntilMaturity / 365) * 0.05, 0.2);
      return amount * penaltyRate;
    }
    return 0;
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm p-4">
      <CardContent className="space-y-4">
        <h3 className="font-medium">Penalty Simulation</h3>
        <Slider
          defaultValue={[0]}
          max={balance}
          step={100}
          onValueChange={([value]) => onAmountChange(value)}
        />
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Withdrawal Amount</p>
            <p className="font-medium">${balance}</p>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground">Estimated Penalty</p>
            <p className="font-medium text-red-500">
              ${calculatePenalty(balance).toFixed(2)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 