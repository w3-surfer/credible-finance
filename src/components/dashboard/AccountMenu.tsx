'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUser, FaWallet, FaCreditCard, FaUsers, FaHistory, FaUserPlus, FaGift, FaCog, FaSignOutAlt } from 'react-icons/fa';

const menuItems = [
  { href: '/account/profile', label: 'Profile', icon: FaUser },
  { href: '/account/wallet', label: 'Wallet', icon: FaWallet },
  { href: '/account/cards', label: 'Cards', icon: FaCreditCard },
  { href: '/account/beneficiaries', label: 'Beneficiaries', icon: FaUsers },
  { href: '/account/history', label: 'History', icon: FaHistory },
  { href: '/account/referral', label: 'Referral', icon: FaUserPlus },
  { href: '/account/airdrop', label: 'Airdrop', icon: FaGift },
  { href: '/account/settings', label: 'Settings', icon: FaCog },
];

export function AccountMenu() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300">
      <div className="flex items-center space-x-3 mb-6">
        <FaUser className="w-6 h-6 text-[#B9E605]" />
        <h2 className="text-xl font-bold text-white">Account</h2>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-[#B9E605] text-black'
                  : 'text-gray-400 hover:text-white hover:bg-cyber-gray-100 dark:hover:bg-cyber-gray-200'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <button className="w-full mt-6 flex items-center space-x-3 px-4 py-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
        <FaSignOutAlt className="w-5 h-5" />
        <span>Sign Out</span>
      </button>
    </div>
  );
} 