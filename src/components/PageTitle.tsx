'use client';

import { IconType } from 'react-icons';
import { FiDollarSign, FiLock, FiServer, FiUser, FiLayout, FiTrendingUp, FiChevronDown } from 'react-icons/fi';
import { FaWallet, FaCreditCard, FaUsers, FaHistory, FaUserPlus, FaGift, FaCog } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface PageTitleProps {
  title: string;
  subtitle: string;
  icon?: IconType;
}

interface PageTitleData {
  title: string;
  subtitle: string;
  icon?: IconType;
}

const titles: Record<string, PageTitleData> = {
  '/account': {
    title: 'Account',
    subtitle: 'Manage your account settings and preferences',
    icon: FiUser
  },
  '/account/profile': {
    title: 'Profile',
    subtitle: 'Manage your personal information and account details',
    icon: FiUser
  },
  '/account/wallet': {
    title: 'Wallet',
    subtitle: 'Manage your wallets and view balances',
    icon: FaWallet
  },
  '/account/cards': {
    title: 'Cards',
    subtitle: 'Manage your payment cards and transactions',
    icon: FaCreditCard
  },
  '/account/beneficiaries': {
    title: 'Beneficiaries',
    subtitle: 'Manage your beneficiaries and transfer settings',
    icon: FaUsers
  },
  '/account/history': {
    title: 'History',
    subtitle: 'View your transaction history and activity',
    icon: FaHistory
  },
  '/account/referral': {
    title: 'Referral',
    subtitle: 'Invite friends and earn rewards',
    icon: FaUserPlus
  },
  '/account/airdrop': {
    title: 'Airdrop',
    subtitle: 'Participate in token airdrops and earn rewards',
    icon: FaGift
  },
  '/account/settings': {
    title: 'Settings',
    subtitle: 'Customize your account preferences and security settings',
    icon: FaCog
  },
  '/dashboard': {
    title: 'Dashboard',
    subtitle: 'View your portfolio and overall performance',
    icon: FiLayout
  },
  '/earn': {
    title: 'Earn',
    subtitle: 'Maximize your earnings through lending, staking and our nodes',
    icon: FiTrendingUp
  },
  '/earn/lending': {
    title: 'Lending',
    subtitle: 'Lend your assets to earn passive income',
    icon: FiDollarSign
  },
  '/earn/staking': {
    title: 'Staking',
    subtitle: 'Stake your $CRED to earn rewards',
    icon: FiLock
  },
  '/earn/nodes': {
    title: 'Nodes',
    subtitle: 'Run a node to earn rewards and participate in network governance',
    icon: FiServer
  }
};

export default function PageTitle({ title, subtitle, icon: Icon }: PageTitleProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const pageTitle = titles[pathname as keyof typeof titles] || { title, subtitle };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && buttonRef.current) {
        if (!menuRef.current.contains(event.target as Node) && !buttonRef.current.contains(event.target as Node)) {
          setIsMenuOpen(false);
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const PageIcon = 'icon' in pageTitle ? pageTitle.icon : Icon;

  if (!mounted) {
    return null;
  }

  return (
    <div className={`relative ${isHomePage ? 'pb-16' : 'pb-16'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center justify-center text-center pt-32">
          <div className="relative flex items-center gap-3">
            {PageIcon && <PageIcon className={`w-8 h-8 ${resolvedTheme === 'dark' ? 'text-white' : 'text-black'}`} />}
            <h1 className="text-4xl font-bold text-[#B9E605]">
              {pageTitle.title}
            </h1>
            {!isHomePage && (
              <div className="relative">
                <button
                  ref={buttonRef}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center gap-1 text-gray-900 dark:text-white hover:text-[#B9E605] transition-colors"
                >
                  <FiChevronDown className={`w-5 h-5 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMenuOpen && (
                  <div
                    ref={menuRef}
                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 py-2 z-50"
                  >
                    <Link
                      href="/account"
                      className="flex items-center gap-2 px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FiUser className="w-5 h-5" />
                      <span>Account</span>
                    </Link>
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-2 px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FiLayout className="w-5 h-5" />
                      <span>Dashboard</span>
                    </Link>
                    <Link
                      href="/earn"
                      className="flex items-center gap-2 px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FiTrendingUp className="w-5 h-5" />
                      <span>Earn</span>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            {pageTitle.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
} 