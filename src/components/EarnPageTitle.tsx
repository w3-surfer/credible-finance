'use client';

import { IconType } from 'react-icons';
import { FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';
import Link from 'next/link';

interface EarnPageTitleProps {
  title: string;
  subtitle: string;
  icon: IconType;
}

const navItems = [
  { href: '/account', label: 'Account', subtitle: 'Manage your account settings and preferences' },
  { href: '/dashboard', label: 'Dashboard', subtitle: 'View your portfolio and overall performance' },
  { href: '/earn', label: 'Earn', subtitle: 'Earn passive income through various strategies' },
];

export function EarnPageTitle({ title, subtitle, icon: Icon }: EarnPageTitleProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center text-center pt-32 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <Icon className="w-8 h-8 text-[#B9E605]" />
            <h1 className="text-4xl font-bold text-[#B9E605]">
              {title}
            </h1>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-black/30 rounded-lg transition-colors"
          >
            <FiChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-md">
          {subtitle}
        </p>

        {isMenuOpen && (
          <div className="absolute mt-2 w-64 bg-black/90 border border-gray-800 rounded-lg shadow-lg overflow-hidden">
            <nav className="py-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col px-4 py-3 hover:bg-black/50 transition-colors"
                >
                  <span className="font-medium text-white">{item.label}</span>
                  <span className="text-sm text-gray-400">{item.subtitle}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
} 