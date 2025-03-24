'use client';

import { IconType } from 'react-icons';
import { FiDollarSign, FiLock, FiServer, FiUser, FiLayout, FiTrendingUp, FiChevronDown } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

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

const earnMenuItems = [
  {
    path: '/earn/lending',
    name: 'Lending',
    icon: FiDollarSign
  },
  {
    path: '/earn/staking',
    name: 'Staking',
    icon: FiLock
  },
  {
    path: '/earn/nodes',
    name: 'Nodes',
    icon: FiServer
  }
];

export default function PageTitle({ title, subtitle, icon: Icon }: PageTitleProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isEarnPage = pathname.startsWith('/earn/');
  const pageTitle = titles[pathname as keyof typeof titles] || { title, subtitle };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleMouseLeave(event: MouseEvent) {
      if (menuRef.current && buttonRef.current) {
        const menuRect = menuRef.current.getBoundingClientRect();
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const isOutsideMenu = mouseX < menuRect.left || mouseX > menuRect.right || mouseY < buttonRect.top || mouseY > menuRect.bottom;
        
        if (isOutsideMenu && !buttonRef.current.contains(event.target as Node)) {
          setIsMenuOpen(false);
        }
      }
    }

    document.addEventListener('mousemove', handleMouseLeave);
    return () => document.removeEventListener('mousemove', handleMouseLeave);
  }, []);

  const PageIcon = pageTitle.icon || Icon;

  // Se for a homepage, não renderiza nada
  if (!mounted) {
    return null;
  }

  return (
    <div className={`relative ${isHomePage ? 'pb-16' : isEarnPage ? 'pb-8' : 'pb-16'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center justify-center text-center pt-32">
          <div className="relative flex items-center gap-3">
            {PageIcon && <PageIcon className="w-8 h-8 text-gray-900 dark:text-white" />}
            <h1 className="text-4xl font-bold text-[#B9E605]">
              {pageTitle.title}
            </h1>
            {!isHomePage && (
              <>
                <button
                  ref={buttonRef}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 hover:bg-black/30 rounded-lg transition-colors"
                >
                  <FiChevronDown className={`w-5 h-5 text-gray-900 dark:text-white transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMenuOpen && (
                  <div 
                    ref={menuRef}
                    className="absolute right-0 mt-2 w-64 bg-black/90 border border-gray-800 rounded-lg shadow-lg overflow-hidden z-50"
                  >
                    <nav className="py-2">
                      {Object.entries(titles).map(([path, item]) => {
                        const ItemIcon = item.icon;
                        return (
                          <Link
                            key={path}
                            href={path}
                            className="flex items-start gap-3 px-4 py-3 hover:bg-black/50 transition-colors group"
                          >
                            {ItemIcon && <ItemIcon className="w-5 h-5 mt-0.5 text-gray-400 group-hover:text-[#B9E605]" />}
                            <div className="flex flex-col">
                              <span className="font-medium text-white group-hover:text-[#B9E605]">{item.title}</span>
                              <span className="text-sm text-gray-400">{item.subtitle}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </nav>
                  </div>
                )}
              </>
            )}
          </div>
          <p className={`mt-4 text-lg text-gray-600 dark:text-gray-400 ${isHomePage ? 'max-w-2xl' : ''}`}>
            {pageTitle.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
} 