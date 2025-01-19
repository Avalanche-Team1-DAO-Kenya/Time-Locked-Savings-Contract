// src/Router.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import BalanceDisplay from './components/BalanceDisplay';
import DepositForm from './components/DepositForm';
import WithdrawForm from './components/WithdrawForm';
import LockForm from './components/LockTimer';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { authService } from './services/auth';

const AppRoutes: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(authService.isAuthenticated());
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setIsAuthenticated(authService.isAuthenticated());
  }, []);

  const handleLogin = async (username: string, password: string) => {
    try {
      const response = await authService.login(username, password);
      if (response.success) {
        setIsAuthenticated(true);
        setError('');
        return <Navigate to="/dashboard" />;
      } else {
        setError(response.error || 'Login failed');
      }
    } catch (error) {
      setError('Login failed. Please try again.');
    }
  };

  const handleSignup = async (username: string, email: string, password: string, confirmPassword: string) => {
    try {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      const response = await authService.signup(username, email, password);
      if (response.success) {
        setIsAuthenticated(true);
        setError('');
        return <Navigate to="/dashboard" />;
      } else {
        setError(response.error || 'Signup failed');
      }
    } catch (error) {
      setError('Signup failed. Please try again.');
    }
  };

  const handleLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
    return <Navigate to="/login" />;
  };

  // Protected Route component
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return <>{children}</>;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={
          isAuthenticated ? 
            <Navigate to="/dashboard" /> : 
            <LoginForm onLogin={handleLogin} error={error} />
        } />
        <Route path="/signup" element={
          isAuthenticated ? 
            <Navigate to="/dashboard" /> : 
            <SignupForm onSignup={handleSignup} error={error} />
        } />
        
        {/* Protected Routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard onLogout={handleLogout} />
            </ProtectedRoute>
          } 
        />
        <Route
          path="/balance"
          element={
            <ProtectedRoute>
              <BalanceDisplay balance={0} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/deposit"
          element={
            <ProtectedRoute>
              <DepositForm onDeposit={async (amount: number) => {
                console.log('Deposit:', amount);
              }} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/withdraw"
          element={
            <ProtectedRoute>
              <WithdrawForm
                onWithdraw={async (amount: number) => {
                  console.log('Withdraw:', amount);
                }}
                lockTime={0}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lock"
          element={
            <ProtectedRoute>
              <LockForm lockTime={0} />
            </ProtectedRoute>
          }
        />
        
        {/* Add a fallback route for 404 */}
        <Route path="*" element={<div>404: Page not found</div>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
