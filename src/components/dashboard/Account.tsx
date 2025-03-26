'use client';

import { useState } from 'react';
import { FiUser, FiShield, FiUsers, FiCopy, FiCheck, FiCreditCard, FiUserPlus, FiGift } from 'react-icons/fi';
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
    name: 'Wallets',
    href: '/account/wallets',
    icon: FiCreditCard
  },
  {
    name: 'Cards',
    href: '/account/cards',
    icon: FiCreditCard
  },
  {
    name: 'Beneficiaries',
    href: '/account/beneficiaries',
    icon: FiUserPlus
  },
  {
    name: 'Referral',
    href: '/account/referral',
    icon: FiUsers
  },
  {
    name: 'Airdrop',
    href: '/account/airdrop',
    icon: FiGift
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
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#B9E605] dark:hover:text-white'
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-black' : 'text-gray-600 dark:text-gray-400'}`} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-1">
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

        <div className="mt-6 bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300">
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

        <div className="mt-6 bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300">
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
    </div>
  );
} 