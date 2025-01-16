import React from "react"

interface BalanceDisplayProps {
    balance: number
  }
  
  export default function BalanceDisplay({ balance }: BalanceDisplayProps) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold">Current Balance</h2>
        <p className="text-3xl">${balance.toFixed(2)}</p>
      </div>
    )
  }