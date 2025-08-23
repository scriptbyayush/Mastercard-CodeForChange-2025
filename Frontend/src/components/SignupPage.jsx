import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'volunteer',
    agreeToTerms: false,
    subscribeToUpdates: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
              <path d="M12 16C12 18.21 10.21 20 8 20C5.79 20 4 18.21 4 16H12Z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-green-800 mb-2">Join GreenEarth</h1>
          <p className="text-green-600 text-sm">
            Be part of our mission to create a greener planet
          </p>
        </div>

        {/* Signup Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-green-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                  placeholder=" "
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-green-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                  placeholder=" "
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-green-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-green-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                placeholder="+91  74123-45567"
                required
              />
            </div>

            {/* Role Selection */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-green-700 mb-2">
                How would you like to contribute?
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors bg-white"
                required
              >
                <option value="volunteer">🌱 Volunteer (Tree Planting)</option>
                <option value="donor">💚 Donor (Financial Support)</option>
                <option value="educator">🎓 Environmental Educator</option>
                <option value="coordinator">📋 Event Coordinator</option>
                <option value="other">🤝 Other</option>
              </select>
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-green-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                  placeholder="Create a strong password"
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-green-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <label className="flex items-start text-sm text-green-700">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="w-4 h-4 text-green-600 border-green-300 rounded focus:ring-green-500 mr-3 mt-0.5"
                  required
                />
                <span>
                  I agree to the{' '}
                  <a href="#" className="text-green-600 hover:text-green-700 underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-green-600 hover:text-green-700 underline">
                    Privacy Policy
                  </a>
                </span>
              </label>
              
              <label className="flex items-start text-sm text-green-700">
                <input
                  type="checkbox"
                  name="subscribeToUpdates"
                  checked={formData.subscribeToUpdates}
                  onChange={handleChange}
                  className="w-4 h-4 text-green-600 border-green-300 rounded focus:ring-green-500 mr-3 mt-0.5"
                />
                <span>
                  Subscribe to our newsletter for tree planting events and environmental updates
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              🌳 Plant Your First Seed - Join Us!
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-green-200"></div>
            <span className="px-4 text-sm text-green-500">or</span>
            <div className="flex-1 border-t border-green-200"></div>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-green-600 text-sm">
              Already part of our green family?{' '}
              <Link to="/login" className="font-medium text-green-700 hover:text-green-800 transition-colors">
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-8">
          <p className="text-green-600 text-xs">
            🌍 Every member brings us closer to a sustainable future
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;