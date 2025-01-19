'use client';

import React, { useState, useEffect } from 'react';

interface LockTimerProps {
  lockTime: number;
}

const LockTimer: React.FC<LockTimerProps> = ({ lockTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = lockTime - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [lockTime]);

  return (
    <div className="flex justify-center items-center gap-4">
      <TimeUnit value={timeLeft.days} label="d" />
      <TimeUnit value={timeLeft.hours} label="h" />
      <TimeUnit value={timeLeft.minutes} label="m" />
      <TimeUnit value={timeLeft.seconds} label="s" />
    </div>
  );
};

const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl font-bold mb-1">
      {value.toString().padStart(2, '0')}
    </div>
    <div className="text-sm text-muted-foreground font-medium">
      {label}
    </div>
  </div>
);

export default LockTimer;
