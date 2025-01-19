'use client'
import 'es6-promise/auto';
import { useState, useEffect } from 'react'
import { Card, CardContent } from "../components/ui/card"
import LockTimer from '../components/LockTimer'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { MoonIcon, SunIcon, BellIcon } from "@radix-ui/react-icons"
import { Button } from "../components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { motion } from "framer-motion"
import { authService } from '../services/auth'
import { TransactionHistory } from '../components/TransactionHistory';
import { SavingsGraph } from '../components/SavingsGraph';
import { PenaltySimulator } from '../components/PenaltySimulator';
import { WalletConnect } from '../components/WalletConnect';
import { useAccount } from 'wagmi';
import { Clock, Lock, Shield, Sparkles } from 'lucide-react';
import { FaPiggyBank, FaChartLine, FaLock, FaUserShield } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

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

interface HomeProps {
  onLogout: () => void;
}

export const Dashboard: React.FC<HomeProps> = ({ onLogout }) => {
  const { theme, setTheme } = useTheme();
  const [balance, setBalance] = useState(6000)
  const [depositDate, setDepositDate] = useState(new Date())
  const [depositIndex, setDepositIndex] = useState(1)
  const [maturityDate, setMaturityDate] = useState(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000))
  const [user, setUser] = useState(authService.getCurrentUser())
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [savingsData, setSavingsData] = useState<Array<{
    date: string;
    amount: number;
    target: number;
  }>>([])
  const { isConnected } = useAccount();

  useEffect(() => {
    const currentUser = authService.getCurrentUser()
    if (currentUser) {
      setUser(currentUser)
    }
  }, [])

  if (!user) {
    onLogout()
    return null
  }

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Navigation Bar */}
      <nav className="bg-[#1A1B23] border-b border-gray-800/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold flex items-center gap-2">
                <FaPiggyBank className="text-purple-400" />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Pigzzy
                </span>
              </h1>
              <div className="flex gap-6">
                <a href="#" className="text-purple-400 hover:text-purple-300">Home</a>
                <a href="#" className="text-gray-400 hover:text-purple-300">Services</a>
                <a href="#" className="text-gray-400 hover:text-purple-300">About</a>
                <a href="#" className="text-gray-400 hover:text-purple-300">Prices</a>
              </div>
            </div>
            <WalletConnect />
          </div>
        </div>
      </nav>

      {!isConnected ? (
        <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center">
          <div className="text-center max-w-lg">
            <FaPiggyBank className="text-purple-400 text-6xl mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Connect Your Wallet</h2>
            <p className="text-gray-400 mb-8">
              Connect your wallet to start managing your time-locked savings
            </p>
            <WalletConnect />
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex justify-between items-center bg-[#1A1B23] rounded-2xl p-6 border border-gray-800/50"
          >
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <div className="flex items-center gap-4">
              <WalletConnect />
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-purple-400/10 text-purple-400"
              >
                <BellIcon className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-purple-400 rounded-full" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hover:bg-purple-400/10 text-purple-400"
              >
                {theme === 'dark' ? 
                  <SunIcon className="h-5 w-5" /> : 
                  <MoonIcon className="h-5 w-5" />
                }
              </Button>
              <Avatar className="h-10 w-10 ring-2 ring-purple-400/20 transition-all hover:ring-purple-400/40">
                <AvatarImage src={`https://avatar.vercel.sh/${user.username}.png`} />
                <AvatarFallback>{user.username[0]}</AvatarFallback>
              </Avatar>
            </div>
          </motion.div>

          {/* Welcome Section */}
          <motion.h2 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-2xl font-medium text-foreground/80 mt-8"
          >
            Hello {user.username}
          </motion.h2>

          {/* Current Savings Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-8"
          >
            <Card className="overflow-hidden bg-[#1A1B23] border border-gray-800/50">
              <CardContent className="p-6 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <p className="text-gray-400">Current Saving Balance</p>
                    <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      ${balance.toLocaleString()}
                    </p>
                  </div>
                  <div className="space-y-2 text-right">
                    <p className="text-gray-400">Time to Maturity</p>
                    <p className="text-lg font-medium text-white">
                      {maturityDate.toLocaleDateString()} 
                      <span className="text-gray-400 text-sm ml-2">
                        {maturityDate.toLocaleTimeString()}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-800/50">
                  <div className="space-y-1">
                    <p className="text-gray-400">Deposit Date</p>
                    <p className="text-white">{depositDate.toLocaleDateString()}</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-gray-400">Deposit Index</p>
                    <p className="text-white">{depositIndex}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tabs for Deposit/Withdraw */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-8"
          >
            <Tabs defaultValue="deposit" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4 bg-[#1A1B23] border border-gray-800/50">
                <TabsTrigger 
                  value="deposit" 
                  className="data-[state=active]:bg-purple-400/10 data-[state=active]:text-purple-400"
                >
                  Deposit
                </TabsTrigger>
                <TabsTrigger 
                  value="withdraw"
                  className="data-[state=active]:bg-purple-400/10 data-[state=active]:text-purple-400"
                >
                  Withdraw
                </TabsTrigger>
              </TabsList>

              <TabsContent value="deposit">
                <Card className="bg-[#1A1B23] border border-gray-800/50">
                  <CardContent className="p-6 space-y-4">
                    <input 
                      type="number" 
                      className="w-full p-3 rounded-lg bg-[#1E1F25] border border-gray-800/50 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all text-white placeholder-gray-500" 
                      placeholder="Enter amount"
                    />
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/80">Reason</label>
                      <input 
                        type="text" 
                        className="w-full p-3 rounded-lg bg-[#1E1F25] border border-gray-800/50 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all text-white placeholder-gray-500" 
                        placeholder="Purpose of deposit"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/80">Maturity Date</label>
                      <input 
                        type="date" 
                        className="w-full p-3 rounded-lg bg-[#1E1F25] border border-gray-800/50 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all text-white placeholder-gray-500" 
                      />
                    </div>
                    <Button className="w-full py-6 text-lg font-medium bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 text-white">
                      Deposit
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="withdraw">
                <Card className="bg-[#1A1B23] border border-gray-800/50">
                  <CardContent className="p-6 space-y-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-cover bg-center" style={{ 
                        backgroundImage: `url('/clock-background.jpg')`,
                        opacity: 0.1 
                      }} />
                      
                      <div className="relative z-10 space-y-4">
                        <h3 className="text-2xl font-bold text-center">Remaining Time</h3>
                        <div className="bg-[#1E1F25] rounded-lg p-6">
                          <div className="text-center">
                            <div className="text-xl font-medium mb-2">Time Until Unlock</div>
                            <LockTimer lockTime={maturityDate.getTime()} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/80">Amount</label>
                      <input 
                        type="number" 
                        className="w-full p-3 rounded-lg bg-[#1E1F25] border border-gray-800/50 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all text-white placeholder-gray-500" 
                        placeholder="Enter amount to withdraw"
                      />
                    </div>

                    <PenaltySimulator 
                      balance={balance}
                      maturityDate={maturityDate}
                      onAmountChange={(amount) => {
                        // Handle amount change
                      }}
                    />

                    <Button 
                      variant="destructive" 
                      className="w-full py-6 text-lg font-medium bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 text-white"
                    >
                      Withdraw
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <SavingsGraph data={savingsData} />
            <TransactionHistory transactions={transactions} />
          </div>
        </div>
      )}
    </div>
  )
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description
}) => (
  <div className="bg-[#1A1B23] p-6 rounded-xl border border-gray-800/50 hover:border-purple-400/50 transition-all">
    <div className="flex flex-col items-center text-center">
      {icon}
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);