'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../src/components/ui/card"
import DepositForm from './components/DepositForm'
import WithdrawForm from './components/WithdrawForm'
import BalanceDisplay from './components/BalanceDisplay'
import LockTimer from './components/LockTimer'
import React from 'react'

// Mock functions to simulate blockchain interactions
const mockDeposit = async (amount: number) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  return true
}

const mockWithdraw = async (amount: number) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  return true
}

const mockGetBalance = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  return 1000 // Mock balance
}

const mockGetLockTime = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  return Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 days from now
}

export default function Home() {
  const [balance, setBalance] = useState(0)
  const [lockTime, setLockTime] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const [fetchedBalance, fetchedLockTime] = await Promise.all([
        mockGetBalance(),
        mockGetLockTime()
      ])
      setBalance(fetchedBalance)
      setLockTime(fetchedLockTime)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const handleDeposit = async (amount: number) => {
    setIsLoading(true)
    await mockDeposit(amount)
    const newBalance = await mockGetBalance()
    setBalance(newBalance)
    setIsLoading(false)
  }

  const handleWithdraw = async (amount: number) => {
    setIsLoading(true)
    await mockWithdraw(amount)
    const newBalance = await mockGetBalance()
    setBalance(newBalance)
    setIsLoading(false)
  }

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Time-Locked Savings Account</CardTitle>
          <CardDescription>Deposit funds and withdraw after the lock period</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <BalanceDisplay balance={balance} />
          <LockTimer lockTime={lockTime} />
          <DepositForm onDeposit={handleDeposit} />
          <WithdrawForm onWithdraw={handleWithdraw} lockTime={lockTime} />
        </CardContent>
      </Card>
    </div>
  )
}

