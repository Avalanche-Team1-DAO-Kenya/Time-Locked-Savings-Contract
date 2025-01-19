import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function calculateTimeRemaining(lockTime: number): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  const now = Date.now()
  const timeRemaining = Math.max(0, lockTime - now)
  
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)
  
  return { days, hours, minutes, seconds }
}

export function calculatePenalty(amount: number, timeRemaining: number): number {
  const daysRemaining = timeRemaining / (1000 * 60 * 60 * 24)
  const penaltyRate = Math.min(0.5, daysRemaining * 0.01) // 1% per day up to 50%
  return amount * penaltyRate
}

