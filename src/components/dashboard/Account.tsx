'use client';

import { useState } from 'react';
import { FiUser, FiShield, FiUsers, FiCopy, FiCheck } from 'react-icons/fi';

interface Referral {
  id: string;
  address: string;
  date: string;
  reward: string;
  status: 'pending' | 'completed';
}

const referrals: Referral[] = [
  {
    id: '1',
    address: '0x1234...5678',
    date: '2024-03-15',
    reward: '100 CRED',
    status: 'completed'
  },
  {
    id: '2',
    address: '0x8765...4321',
    date: '2024-03-14',
    reward: '100 CRED',
    status: 'pending'
  }
];

export function Account() {
  const [copied, setCopied] = useState(false);
  const referralCode = 'CRED-123456';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-[#B9E605]">Profile Information</h3>
          <FiUser className="w-6 h-6 text-gray-600 dark:text-white" />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-gray-600 dark:text-gray-400">Full Name</div>
            <div className="text-white font-medium">John Doe</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-gray-600 dark:text-gray-400">Email</div>
            <div className="text-white font-medium">john.doe@example.com</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-gray-600 dark:text-gray-400">Phone</div>
            <div className="text-white font-medium">+1 (555) 123-4567</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-gray-600 dark:text-gray-400">Country</div>
            <div className="text-white font-medium">United States</div>
          </div>
        </div>
      </div>

      <div className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-[#B9E605]">KYC Verification</h3>
          <FiShield className="w-6 h-6 text-gray-600 dark:text-white" />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-gray-600 dark:text-gray-400">Status</div>
            <div className="text-[#B9E605] font-medium">Verified</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-gray-600 dark:text-gray-400">Level</div>
            <div className="text-white font-medium">Level 2</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-gray-600 dark:text-gray-400">Last Updated</div>
            <div className="text-white font-medium">2024-03-15</div>
          </div>
        </div>
      </div>

      <div className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-[#B9E605]">Referrals</h3>
          <FiUsers className="w-6 h-6 text-gray-600 dark:text-white" />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-gray-600 dark:text-gray-400">Your Referral Code</div>
            <div className="flex items-center gap-2">
              <div className="text-white font-medium">{referralCode}</div>
              <button
                onClick={copyToClipboard}
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {copied ? (
                  <FiCheck className="w-5 h-5 text-[#B9E605]" />
                ) : (
                  <FiCopy className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-medium text-white mb-4">Recent Referrals</h4>
            <div className="space-y-4">
              {referrals.map((referral) => (
                <div
                  key={referral.id}
                  className="flex items-center justify-between p-4 bg-cyber-gray-200 dark:bg-cyber-gray-300 rounded-lg"
                >
                  <div>
                    <div className="text-white font-medium">{referral.address}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{referral.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#B9E605] font-medium">{referral.reward}</div>
                    <div className={`text-sm ${
                      referral.status === 'completed' ? 'text-[#B9E605]' : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {referral.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 