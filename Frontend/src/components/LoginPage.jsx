import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
              <path d="M12 16C12 18.21 10.21 20 8 20C5.79 20 4 18.21 4 16H12Z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-green-800 mb-2">GreenEarth</h1>
          <p className="text-green-600 text-sm">
            Growing a greener tomorrow, one tree at a time
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-green-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-green-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-green-700">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-green-600 border-green-300 rounded focus:ring-green-500 mr-2"
                />
                Remember me
              </label>
              <a href="#" className="text-green-600 hover:text-green-700 transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-green-200"></div>
            <span className="px-4 text-sm text-green-500">or</span>
            <div className="flex-1 border-t border-green-200"></div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-green-600 text-sm">
              New to our mission?{' '}
              <Link to="/signup" className="font-medium text-green-700 hover:text-green-800 transition-colors">
                Join us today
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-8">
          <p className="text-green-600 text-xs">
            🌱 Together, we're planting seeds for a sustainable future
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;