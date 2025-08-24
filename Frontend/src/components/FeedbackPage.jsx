import React from "react";
import { Link } from "react-router-dom";
import FeedbackForm from "./FeedbackForm";

const FeedbackPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                  <path d="M12 16C12 18.21 10.21 20 8 20C5.79 20 4 18.21 4 16H12Z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-green-800">GreenEarth</span>
            </div>
            <div className="flex space-x-4">
              <Link 
                to="/" 
                className="text-green-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                ← Back to Home
              </Link>
              <Link 
                to="/login" 
                className="text-green-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Join Us
              </Link>
              <Link 
                to="/dashboard" 
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Share Your Experience</h1>
          <p className="text-xl text-green-600 max-w-2xl mx-auto">
            Help us improve our tree plantation initiatives by sharing your valuable feedback and experiences.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <FeedbackForm />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                <path d="M12 16C12 18.21 10.21 20 8 20C5.79 20 4 18.21 4 16H12Z" />
              </svg>
            </div>
            <span className="text-xl font-bold">GreenEarth</span>
          </div>
          <p className="text-green-200">
            &copy; 2025 GreenEarth NGO. All rights reserved. 🌱 Making the world greener, together.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FeedbackPage;
