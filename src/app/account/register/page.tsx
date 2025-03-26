'use client';

import React from 'react';

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <div className="bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20">
          <h2 className="text-2xl font-bold text-cyber-green mb-6">Create Account</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full bg-cyber-gray-100 border border-cyber-green/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyber-green"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                className="w-full bg-cyber-gray-100 border border-cyber-green/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyber-green"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <input
                type="password"
                className="w-full bg-cyber-gray-100 border border-cyber-green/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyber-green"
                placeholder="Create a password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
              <input
                type="password"
                className="w-full bg-cyber-gray-100 border border-cyber-green/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyber-green"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyber-green text-black font-bold py-2 px-4 rounded-lg hover:bg-cyber-green/90 transition-colors"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 