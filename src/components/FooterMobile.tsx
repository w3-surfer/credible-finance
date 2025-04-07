'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FiUser, 
  FiHome, 
  FiTrendingUp, 
  FiSettings
} from 'react-icons/fi';

interface FooterMobileProps {
  className?: string;
}

const navItems = [
  { href: '/account', label: 'Account', icon: FiUser },
  { href: '/dashboard', label: 'Dashboard', icon: FiHome },
  { href: '/earn', label: 'Earn', icon: FiTrendingUp },
  { href: '/settings', label: 'Settings', icon: FiSettings }
];

export function FooterMobile({ className = '' }: FooterMobileProps) {
  const pathname = usePathname() || '';

  return (
    <footer className={`fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#B9E605]/30 via-[#B9E605]/10 to-transparent md:hidden ${className}`}>
      <div className="flex justify-around items-center h-14">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 text-xs ${
                isActive 
                  ? 'text-[#B9E605]' 
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </footer>
  );
} 