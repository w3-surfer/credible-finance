'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiUser, FiCreditCard, FiUsers, FiGift, FiDollarSign, FiShare2 } from 'react-icons/fi';

const menuItems = [
  { href: '/account/profile', label: 'Profile', icon: FiUser },
  { href: '/account/wallets', label: 'Wallets', icon: FiDollarSign },
  { href: '/account/cards', label: 'Cards', icon: FiCreditCard },
  { href: '/account/beneficiaries', label: 'Beneficiaries', icon: FiUsers },
  { href: '/account/referral', label: 'Referral', icon: FiShare2 },
  { href: '/account/airdrop', label: 'Airdrop', icon: FiGift },
];

export function AccountMenu() {
  const pathname = usePathname();

  return (
    <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2A2A2A]">
      <h2 className="text-2xl font-bold text-white mb-6">Account Menu</h2>
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-[#B9E605] text-black'
                  : 'text-gray-400 hover:bg-[#2A2A2A] hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
} 