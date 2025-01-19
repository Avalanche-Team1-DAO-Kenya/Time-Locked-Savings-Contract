import React from "react";

interface BalanceDisplayProps {
  balance: number;
}

export default function BalanceDisplay({ balance }: BalanceDisplayProps) {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/640223660/photo/office-desk-table-with-pc-notepad-glasses-coffee.jpg?s=612x612&w=0&k=20&c=OnNnV6oFWzkTu8714a-yd5W1CmZ0guiXDL6xmGV2htA=')`,
      }}
    >
      {/* Page Header */}
      <header className="bg-black text-white py-4 px-6 text-center">
        <h1 className="text-3xl font-bold">Current Balance In Your Piggzy Account</h1>
      </header>

      {/* Marquee Section */}
      <div className="py-2">
        <marquee behavior="scroll" direction="left" className="text-white">
          In piggzy we Secure your future with seamless transactions!
        </marquee>
      </div>

      {/* Main Content */}
      <div className="flex flex-grow items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg text-center w-80">
          {/* Form Header */}
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
                d="M17 9V7a4 4 0 10-8 0v2m9 4h.01M7 13h.01M5 21h14a2 2 0 002-2v-4a9 9 0 10-18 0v4a2 2 0 002 2z"
              />
            </svg>
            <h2 className="text-xl font-bold">Balance</h2>
          </header>

          {/* Balance Display */}
          <h2 className="text-2xl font-bold mb-4">Current Balance</h2>
          <p className="text-3xl text-gray-700 font-semibold">${balance.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
