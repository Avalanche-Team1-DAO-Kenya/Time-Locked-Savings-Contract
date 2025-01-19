import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";

interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal';
  amount: number;
  date: Date;
  status: 'completed' | 'pending' | 'failed';
}

interface TransactionHistoryProps {
  transactions: Transaction[];
}

export function TransactionHistory({ transactions }: TransactionHistoryProps) {
  return (
    <Card className="bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Transaction History</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${
                  transaction.type === 'deposit' ? 'bg-green-500/10' : 'bg-red-500/10'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    transaction.type === 'deposit' ? 'bg-green-500' : 'bg-red-500'
                  }`} />
                </div>
                <div>
                  <p className="font-medium capitalize">{transaction.type}</p>
                  <p className="text-sm text-muted-foreground">
                    {transaction.date.toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-medium ${
                  transaction.type === 'deposit' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {transaction.type === 'deposit' ? '+' : '-'}${transaction.amount}
                </p>
                <p className="text-sm text-muted-foreground capitalize">
                  {transaction.status}
                </p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
} 