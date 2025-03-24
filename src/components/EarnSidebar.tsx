'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiDollarSign, FiLock, FiServer } from 'react-icons/fi';

export function EarnSidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      title: 'Lending',
      icon: <FiDollarSign className="w-5 h-5" />,
      href: '/earn/lending',
    },
    {
      title: 'Staking',
      icon: <FiLock className="w-5 h-5" />,
      href: '/earn/staking',
    },
    {
      title: 'Nodes',
      icon: <FiServer className="w-5 h-5" />,
      href: '/earn/nodes',
    },
  ];

  return (
    <div className="bg-black/50 border border-gray-800 rounded-lg p-4 w-56">
      <h2 className="text-xl font-bold mb-4 text-[#B9E605] text-center">Earn</h2>
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-[#B9E605] text-black'
                  : 'text-gray-400 hover:text-white hover:bg-black/30'
              }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
} 