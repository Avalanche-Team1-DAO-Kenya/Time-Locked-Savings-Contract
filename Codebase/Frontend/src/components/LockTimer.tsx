'use client'

import React from 'react'
import { useState, useEffect } from 'react'

interface LockTimerProps {
  lockTime: number
}

export default function LockTimer({ lockTime }: LockTimerProps) {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now()
      const difference = lockTime - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`)
      } else {
        setTimeLeft('Unlocked')
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [lockTime])

  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold">Time Until Unlock</h2>
      <p className="text-2xl">{timeLeft}</p>
    </div>
  )
}