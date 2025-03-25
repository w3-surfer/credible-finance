'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiShield, FiUsers, FiCopy, FiCheck, FiSettings, FiBell, FiHelpCircle } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

const menuItems = [
  {
    name: 'Profile',
    href: '/account',
    icon: FiUser
  },
  {
    name: 'Notifications',
    href: '/account/notifications',
    icon: FiBell
  },
  {
    name: 'Settings',
    href: '/account/settings',
    icon: FiSettings
  },
  {
    name: 'Help & Support',
    href: '/account/help',
    icon: FiHelpCircle
  }
];

export function Account() {
  const [copied, setCopied] = useState(false);
  const referralCode = 'CRED-123456';
  const pathname = usePathname();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex gap-6">
      {/* Menu Lateral */}
      <div className="w-64 space-y-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-[#B9E605] text-black'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-1 space-y-6">
        {/* Profile Section */}
        <div className="p-6 rounded-lg border border-gray-800">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
              <FiUser className="w-8 h-8 text-gray-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">John Doe</h2>
              <p className="text-gray-400">john.doe@example.com</p>
            </div>
          </div>
        </div>

        {/* KYC Verification */}
        <div className="p-6 rounded-lg border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">KYC Verification</h3>
            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-sm">
              Verified
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FiShield className="w-5 h-5 text-green-500" />
              <span className="text-gray-400">Identity verified</span>
            </div>
            <div className="flex items-center space-x-3">
              <FiShield className="w-5 h-5 text-green-500" />
              <span className="text-gray-400">Address verified</span>
            </div>
          </div>
        </div>

        {/* Referral Program */}
        <div className="p-6 rounded-lg border border-gray-800">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Referral Program</h3>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Your Code:</span>
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-lg">
                <span className="text-white">{referralCode}</span>
                <button
                  onClick={copyToClipboard}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {copied ? <FiCheck className="w-4 h-4" /> : <FiCopy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-3">
                <FiUsers className="w-5 h-5 text-[#B9E605]" />
                <div>
                  <p className="text-sm text-gray-400">Total Referrals</p>
                  <p className="text-lg font-semibold text-white">2</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">Total Rewards</p>
                <p className="text-lg font-semibold text-[#B9E605]">200 CRED</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-400">Recent Referrals</h4>
              <div className="space-y-2">
                {referrals.map((referral) => (
                  <motion.div
                    key={referral.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-between p-3 bg-gray-800 rounded-lg"
                  >
                    <div>
                      <p className="text-white">{referral.address}</p>
                      <p className="text-sm text-gray-400">{referral.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#B9E605]">{referral.reward}</p>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          referral.status === 'completed'
                            ? 'bg-green-500/20 text-green-500'
                            : 'bg-yellow-500/20 text-yellow-500'
                        }`}
                      >
                        {referral.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 