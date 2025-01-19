import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SignupFormProps {
  onSignup: (username: string, email: string, password: string, confirmPassword: string) => void;
  error?: string;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignup, error }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup(username, email, password, confirmPassword);
  };

  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGlnZ3klMjBiYW5rfGVufDB8fDB8fHww')`,
      }}
    >
      {/* Animated Banner */}
      <div className="absolute top-0 w-full bg-black text-white text-center py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          Welcome to Piggzy Account - Create Your Account to Start Saving for Your Future Goals
        </div>
      </div>

      {/* Signup Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-11/12 max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Create Account</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="username" className="block text-gray-700 mb-2">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded px-3 py-2 w-full focus:ring focus:ring-blue-500 outline-none"
            placeholder="Choose a username"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded px-3 py-2 w-full focus:ring focus:ring-blue-500 outline-none"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded px-3 py-2 w-full focus:ring focus:ring-blue-500 outline-none"
            placeholder="Create a password"
            required
          />
          <p className="text-sm text-gray-500 mt-1">Must be at least 8 characters long</p>
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border rounded px-3 py-2 w-full focus:ring focus:ring-blue-500 outline-none"
            placeholder="Confirm your password"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white py-2 px-4 w-full rounded hover:bg-blue-600 transition duration-200"
        >
          Create Account
        </button>

        <div className="text-center text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-blue-500 hover:text-blue-600"
          >
            Login here
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm; 