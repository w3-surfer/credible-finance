'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUser, FaWallet, FaHistory, FaGift, FaCog, FaSignOutAlt, FaUsers, FaShareAlt, FaCreditCard } from 'react-icons/fa';

const menuItems = [
  { href: '/account/profile', label: 'Profile', icon: FaUser },
  { href: '/account/wallet', label: 'Wallet', icon: FaWallet },
  { href: '/account/cards', label: 'Cards', icon: FaCreditCard },
  { href: '/account/beneficiaries', label: 'Beneficiaries', icon: FaUsers },
  { href: '/account/history', label: 'History', icon: FaHistory },
  { href: '/account/referral', label: 'Referral', icon: FaShareAlt },
  { href: '/account/airdrop', label: 'Airdrop', icon: FaGift },
  { href: '/account/settings', label: 'Settings', icon: FaCog },
];

export function AccountMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-64 bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300">
      <h2 className="text-xl font-bold text-[#B9E605] mb-6">User Management</h2>
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-[#B9E605] text-black'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-[#B9E605] dark:hover:text-white'
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-black' : 'text-gray-600 dark:text-gray-400'}`} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full mt-6 flex items-center space-x-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors"
      >
        <FaSignOutAlt className="w-5 h-5" />
        <span className="font-medium">Sign Out</span>
      </button>
    </div>
  );
} 