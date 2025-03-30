'use client';

import { IconType } from 'react-icons';
import { FiDollarSign, FiLock, FiServer, FiUser, FiLayout, FiTrendingUp } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

interface PageTitleProps {
  title: string;
  subtitle: string;
  icon?: IconType;
}

const titles = {
  '/account': {
    title: 'Account',
    subtitle: 'Manage your account settings and preferences',
    icon: FiUser
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
  const PageIcon = pageTitle.icon || Icon;

  return (
    <div className={`relative ${isHomePage ? 'pb-16' : 'pb-16'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center justify-center text-center pt-32">
          <div className="relative flex items-center gap-3">
            {PageIcon && <PageIcon className="w-8 h-8 text-gray-900 dark:text-white" />}
            <h1 className="text-4xl font-bold text-[#B9E605]">
              {pageTitle.title}
            </h1>
          </div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            {pageTitle.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
} 