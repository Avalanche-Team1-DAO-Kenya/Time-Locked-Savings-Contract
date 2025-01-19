// src/Router.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import BalanceDisplay from './components/BalanceDisplay';
import DepositForm from './components/DepositForm';
import WithdrawForm from './components/WithdrawForm';
import LockForm from './components/LockTimer';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginForm onLogin={function (username: string, password: string): void {
          throw new Error('Function not implemented.');
        } } />} />
        <Route path="/balance" element={<BalanceDisplay balance={0} />} />
        <Route path="/deposit" element={<DepositForm onDeposit={function (amount: number): Promise<void> {
          throw new Error('Function not implemented.');
        } } />} />
        <Route path="/withdraw" element={<WithdrawForm onWithdraw={function (amount: number): Promise<void> {
          throw new Error('Function not implemented.');
        } } lockTime={0} />} />
        <Route path="/lock" element={<LockForm lockTime={0} />} />
        {/* Add a fallback route for 404 */}
        <Route path="*" element={<div>404: Page not found</div>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
