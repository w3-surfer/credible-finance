'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiUser, FiCreditCard, FiUsers, FiGift, FiLink, FiAirplay } from 'react-icons/fi';

const menuItems = [
  { href: '/account', label: 'Profile', icon: FiUser },
  { href: '/account/wallets', label: 'Wallets', icon: FiCreditCard },
  { href: '/account/cards', label: 'Cards', icon: FiCreditCard },
  { href: '/account/beneficiary', label: 'Beneficiaries', icon: FiUsers },
  { href: '/account/referral', label: 'Referral', icon: FiLink },
  { href: '/account/airdrop', label: 'Airdrop', icon: FiAirplay }
];

export function AccountMenu() {
  const pathname = usePathname();

  return (
    <nav className="space-y-1">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
              isActive
                ? 'bg-[#B9E605]/10 text-[#B9E605] border border-[#B9E605]/20'
                : 'text-gray-400 hover:text-white hover:bg-black/30'
            }`}
          >
            <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-[#B9E605]' : ''}`} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
} 