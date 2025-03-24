'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiUser, FiCreditCard, FiDollarSign, FiUsers, FiGift, FiAirplay } from 'react-icons/fi';

const menuItems = [
  {
    name: 'Profile',
    href: '/account',
    icon: FiUser,
  },
  {
    name: 'Wallets',
    href: '/account/wallets',
    icon: FiDollarSign,
  },
  {
    name: 'Cards',
    href: '/account/cards',
    icon: FiCreditCard,
  },
  {
    name: 'Beneficiary',
    href: '/account/beneficiary',
    icon: FiUsers,
  },
  {
    name: 'Referral',
    href: '/account/referral',
    icon: FiAirplay,
  },
  {
    name: 'Airdrop',
    href: '/account/airdrop',
    icon: FiGift,
  },
];

export function AccountMenu() {
  const pathname = usePathname();

  return (
    <div className="bg-black/50 border border-gray-800 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4 px-4">User Management</h2>
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? 'bg-[#B9E605] text-black'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-black' : 'text-[#B9E605]'}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
} 