'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiDollarSign, FiLock, FiServer } from 'react-icons/fi';

const navigationItems = [
  {
    name: 'Lending',
    href: '/earn/lending',
    icon: FiDollarSign
  },
  {
    name: 'Staking',
    href: '/earn/staking',
    icon: FiLock
  },
  {
    name: 'Nodes',
    href: '/earn/nodes',
    icon: FiServer
  }
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <div className="flex space-x-4 mb-8">
      {navigationItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-[#B9E605] text-black'
                : 'text-gray-400 hover:text-white hover:bg-cyber-gray-100'
            }`}
          >
            <item.icon className="w-5 h-5 mr-2" />
            {item.name}
          </Link>
        );
      })}
    </div>
  );
} 