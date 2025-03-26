'use client';

import React from 'react';

export default function SecurityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <div className="bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20">
          <h2 className="text-2xl font-bold text-cyber-green mb-6">Security Settings</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-cyber-gray-100 rounded-lg">
              <div>
                <h3 className="text-lg font-medium text-white">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-400">Add an extra layer of security to your account</p>
              </div>
              <button className="bg-cyber-green text-black font-bold py-2 px-4 rounded-lg hover:bg-cyber-green/90 transition-colors">
                Enable
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-cyber-gray-100 rounded-lg">
              <div>
                <h3 className="text-lg font-medium text-white">Login Notifications</h3>
                <p className="text-sm text-gray-400">Get notified when someone logs into your account</p>
              </div>
              <button className="bg-cyber-green text-black font-bold py-2 px-4 rounded-lg hover:bg-cyber-green/90 transition-colors">
                Enable
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-cyber-gray-100 rounded-lg">
              <div>
                <h3 className="text-lg font-medium text-white">Device Management</h3>
                <p className="text-sm text-gray-400">Manage devices that have access to your account</p>
              </div>
              <button className="bg-cyber-green text-black font-bold py-2 px-4 rounded-lg hover:bg-cyber-green/90 transition-colors">
                Manage
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-cyber-gray-100 rounded-lg">
              <div>
                <h3 className="text-lg font-medium text-white">API Keys</h3>
                <p className="text-sm text-gray-400">Manage your API keys for third-party integrations</p>
              </div>
              <button className="bg-cyber-green text-black font-bold py-2 px-4 rounded-lg hover:bg-cyber-green/90 transition-colors">
                Manage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 