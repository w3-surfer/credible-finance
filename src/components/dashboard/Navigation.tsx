'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navigationItems = [
  {
    name: 'Lending',
    href: '/earn/lending'
  },
  {
    name: 'Staking',
    href: '/earn/staking'
  },
  {
    name: 'Nodes',
    href: '/earn/nodes'
  }
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center mb-8">
      <div className="flex space-x-4">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium transition-colors"
            >
              <span className={`relative z-10 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                {item.name}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#B9E605] rounded-lg"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
} 