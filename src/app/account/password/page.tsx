'use client';

import React from 'react';
import { AccountMenu } from '@/components/AccountMenu';

export default function PasswordPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <AccountMenu />
        </div>
        <div className="md:col-span-2">
          <div className="bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20">
            <h2 className="text-2xl font-bold text-cyber-green mb-6">Change Password</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Current Password</label>
                <input
                  type="password"
                  className="w-full bg-cyber-gray-100 border border-cyber-green/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyber-green"
                  placeholder="Enter your current password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">New Password</label>
                <input
                  type="password"
                  className="w-full bg-cyber-gray-100 border border-cyber-green/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyber-green"
                  placeholder="Enter your new password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Confirm New Password</label>
                <input
                  type="password"
                  className="w-full bg-cyber-gray-100 border border-cyber-green/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyber-green"
                  placeholder="Confirm your new password"
                />
              </div>
              <div className="text-sm text-gray-400">
                <p>Password requirements:</p>
                <ul className="list-disc list-inside mt-1">
                  <li>At least 8 characters long</li>
                  <li>Contains at least one uppercase letter</li>
                  <li>Contains at least one number</li>
                  <li>Contains at least one special character</li>
                </ul>
              </div>
              <button
                type="submit"
                className="w-full bg-cyber-green text-black font-bold py-2 px-4 rounded-lg hover:bg-cyber-green/90 transition-colors"
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 