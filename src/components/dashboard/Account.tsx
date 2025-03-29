'use client';

import { useState } from 'react';
import { FiUser, FiShield, FiUsers, FiCopy, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

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

export default function Account() {
  const [copied, setCopied] = useState(false);
  const referralCode = 'CRED-123456';
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 890',
    address: '123 Cyber Street, Digital City',
  });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-2">Account</h1>
        <p className="text-gray-400">Manage your account information</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
      >
        <div className="flex items-center justify-center space-x-3 mb-6">
          <FaUser className="w-6 h-6 text-[#B9E605]" />
          <h2 className="text-xl font-bold text-white">Profile Information</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-cyber-gray-100 dark:bg-cyber-gray-200 flex items-center justify-center">
              <FaUser className="w-5 h-5 text-[#B9E605]" />
            </div>
            <div className="flex-grow">
              <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full px-4 py-2 bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 rounded-lg focus:outline-none focus:border-cyber-green"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-cyber-gray-100 dark:bg-cyber-gray-200 flex items-center justify-center">
              <FaEnvelope className="w-5 h-5 text-[#B9E605]" />
            </div>
            <div className="flex-grow">
              <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full px-4 py-2 bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 rounded-lg focus:outline-none focus:border-cyber-green"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-cyber-gray-100 dark:bg-cyber-gray-200 flex items-center justify-center">
              <FaPhone className="w-5 h-5 text-[#B9E605]" />
            </div>
            <div className="flex-grow">
              <label className="block text-sm font-medium text-gray-400 mb-1">Phone</label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="w-full px-4 py-2 bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 rounded-lg focus:outline-none focus:border-cyber-green"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-cyber-gray-100 dark:bg-cyber-gray-200 flex items-center justify-center">
              <FaMapMarkerAlt className="w-5 h-5 text-[#B9E605]" />
            </div>
            <div className="flex-grow">
              <label className="block text-sm font-medium text-gray-400 mb-1">Address</label>
              <input
                type="text"
                value={profile.address}
                onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                className="w-full px-4 py-2 bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 rounded-lg focus:outline-none focus:border-cyber-green"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button className="px-6 py-2 bg-[#B9E605] text-black rounded-lg hover:bg-[#B9E605]/90 transition-colors">
            Save Changes
          </button>
        </div>
      </motion.div>

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