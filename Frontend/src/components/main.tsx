'use client'
import 'es6-promise/auto';
import { useState, useEffect } from 'react'
import { Card, CardContent } from "./ui/card"
import LockTimer from './LockTimer'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { MoonIcon, SunIcon, BellIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { motion } from "framer-motion"
import { authService } from '../services/auth'

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

const Home: React.FC<HomeProps> = ({ onLogout }) => {
  const [balance, setBalance] = useState(6000)
  const [depositDate, setDepositDate] = useState(new Date())
  const [depositIndex, setDepositIndex] = useState(1)
  const [maturityDate, setMaturityDate] = useState(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000))
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [user, setUser] = useState(authService.getCurrentUser())

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
    <div className={`min-h-screen bg-gradient-to-br from-background to-background/95 ${isDarkMode ? 'dark' : ''}`}>
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-between items-center bg-card/50 backdrop-blur-sm rounded-2xl p-4 shadow-sm"
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            Home Page
          </h1>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-primary/10"
            >
              <BellIcon className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="hover:bg-primary/10"
            >
              {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Button>
            <Avatar className="h-10 w-10 ring-2 ring-primary/20 transition-all hover:ring-primary/40">
              <AvatarImage src={`https://avatar.vercel.sh/${user.username}.png`} />
              <AvatarFallback>{user.username[0]}</AvatarFallback>
            </Avatar>
          </div>
        </motion.div>

        {/* Welcome Section */}
        <motion.h2 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-2xl font-medium text-foreground/80"
        >
          Hello {user.username}
        </motion.h2>

        {/* Current Savings Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6 space-y-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Current Saving Balance</p>
                  <p className="text-4xl font-bold text-primary">
                    ${balance.toLocaleString()}
                  </p>
                </div>
                <div className="space-y-2 text-right">
                  <p className="text-sm font-medium text-muted-foreground">Time to Maturity</p>
                  <p className="text-lg font-medium text-foreground">
                    {maturityDate.toLocaleDateString()} 
                    <span className="text-foreground/60 text-sm ml-2">
                      {maturityDate.toLocaleTimeString()}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-border/50">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Deposit Date</p>
                  <p className="font-medium">{depositDate.toLocaleDateString()}</p>
                </div>
                <div className="space-y-1 text-right">
                  <p className="text-sm font-medium text-muted-foreground">Deposit Index</p>
                  <p className="font-medium">{depositIndex}</p>
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
        >
          <Tabs defaultValue="deposit" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="deposit">Deposit</TabsTrigger>
              <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
            </TabsList>

            <TabsContent value="deposit">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Amount</label>
                    <input 
                      type="number" 
                      className="w-full p-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                      placeholder="Enter amount"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Reason</label>
                    <input 
                      type="text" 
                      className="w-full p-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                      placeholder="Purpose of deposit"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Maturity Date</label>
                    <input 
                      type="date" 
                      className="w-full p-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                    />
                  </div>
                  <Button className="w-full py-6 text-lg font-medium hover:scale-[1.02] transition-transform">
                    Deposit
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="withdraw">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 space-y-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ 
                      backgroundImage: `url('/clock-background.jpg')`,
                      opacity: 0.1 
                    }} />
                    
                    <div className="relative z-10 space-y-4">
                      <h3 className="text-2xl font-bold text-center">Remaining Time</h3>
                      <div className="bg-background/50 rounded-lg p-6">
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
                      className="w-full p-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                      placeholder="Enter amount to withdraw"
                    />
                  </div>

                  <Button 
                    variant="destructive" 
                    className="w-full py-6 text-lg font-medium hover:scale-[1.02] transition-transform"
                  >
                    Withdraw
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}

export default Home