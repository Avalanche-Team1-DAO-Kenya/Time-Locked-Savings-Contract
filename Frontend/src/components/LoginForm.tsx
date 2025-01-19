import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
  error?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, error }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
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
          Welcome to Piggzy Account Where You Save Money for Future use And Goal Accomplishment
        </div>
      </div>

      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-11/12 max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        
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
            placeholder="Enter your username"
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
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white py-2 px-4 w-full rounded hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>

        <div className="text-center text-gray-600">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="text-blue-500 hover:text-blue-600"
          >
            Sign up here
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
