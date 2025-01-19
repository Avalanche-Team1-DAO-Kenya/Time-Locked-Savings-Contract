import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { FaPiggyBank, FaChartLine, FaLock, FaUserShield } from 'react-icons/fa';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Navigation */}
      <nav className="bg-[#1A1B23] border-b border-gray-800/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaPiggyBank className="text-purple-400 text-2xl" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Pigzzy
              </span>
            </div>
            <Button 
              onClick={() => navigate('/login')}
              className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500"
            >
              Login
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-24">
        <div className="flex items-center justify-between">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Smart Savings with Time-Locked Security
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Lock your savings with blockchain technology. Set your goals, secure your future.
            </p>
            <Button 
              onClick={() => navigate('/login')}
              className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 px-8 py-6 text-lg"
            >
              Start Saving Today
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-12 mt-24">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-purple-400">$2M+</h3>
            <p className="text-gray-400 mt-2">Total Value Locked</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-purple-400">10K+</h3>
            <p className="text-gray-400 mt-2">Active Savers</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-purple-400">100%</h3>
            <p className="text-gray-400 mt-2">Secure</p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-4 gap-6 mt-24">
          <FeatureCard
            icon={<FaPiggyBank />}
            title="Smart Savings"
            description="Set your savings goals with blockchain-powered security"
          />
          <FeatureCard
            icon={<FaLock />}
            title="Time Lock"
            description="Lock your funds until your target date"
          />
          <FeatureCard
            icon={<FaChartLine />}
            title="Track Progress"
            description="Monitor your savings journey with detailed analytics"
          />
          <FeatureCard
            icon={<FaUserShield />}
            title="Secure Storage"
            description="Your funds are protected by smart contracts"
          />
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) => (
  <div className="bg-[#1A1B23] p-6 rounded-xl border border-gray-800/50 hover:border-purple-400/50 transition-all">
    <div className="flex flex-col items-center text-center">
      <div className="text-purple-400 text-3xl">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-gray-400 text-sm">{description}</p>
    </div>
  </div>
); 