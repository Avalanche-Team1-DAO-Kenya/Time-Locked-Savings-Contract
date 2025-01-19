'use client';

import React, { useState, useEffect } from 'react';

interface LockTimerProps {
  lockTime: number;
}

export default function LockTimer({ lockTime }: LockTimerProps) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const difference = lockTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeLeft('Unlocked');
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [lockTime]);

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col items-center justify-start"
      style={{
        backgroundImage: `url('https://c8.alamy.com/comp/R2C9HT/alarm-clock-and-portable-computer-put-on-the-desk-with-white-background-R2C9HT.jpg')`,
      }}
    >
      {/* Page Header */}
      <header className="bg-black text-white w-full py-4 px-6 text-center">
        <h1 className="text-3xl font-bold">Remaining Time</h1>
      </header>

      {/* Marquee */}
      <marquee className="bg-transparent text-white py-2 text-lg w-full" behavior="scroll" direction="left">
        Track your savings and manage your finances efficiently.
      </marquee>

      {/* Timer Section */}
      <div className="bg-white p-6 rounded shadow-lg text-center w-80 mt-10">
        <header className="flex items-center justify-center gap-2 mb-4 bg-black text-white py-2 px-4 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4m0 4h.01m-6.938 4h13.856C19.162 19.656 20 18.328 20 16.875V7.125C20 5.672 19.162 4.344 17.918 4H6.082C4.838 4 4 5.328 4 7.125v9.75C4 18.328 4.838 19.656 6.082 19z"
            />
          </svg>
          <h2 className="text-xl font-bold">Time Until Unlock</h2>
        </header>

        <p className="text-2xl font-semibold text-gray-800">{timeLeft}</p>
      </div>
    </div>
  );
}
