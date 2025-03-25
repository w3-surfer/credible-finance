'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { 
  FiUser, 
  FiLayout, 
  FiTrendingUp, 
  FiBell,
  FiSettings,
  FiDollarSign,
  FiLock,
  FiServer,
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiChevronDown
} from 'react-icons/fi';

const navItems = [
  { href: '/account', label: 'Account', icon: FiUser },
  { href: '/dashboard', label: 'Dashboard', icon: FiLayout },
];

const earnMenuItems = [
  { href: '/earn', label: 'Overview', icon: FiTrendingUp },
  { href: '/earn/lending', label: 'Lending', icon: FiDollarSign },
  { href: '/earn/staking', label: 'Staking', icon: FiLock },
  { href: '/earn/nodes', label: 'Nodes', icon: FiServer }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const isHomePage = pathname === '/';
  const [isEarnMenuOpen, setIsEarnMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const earnMenuRef = useRef<HTMLDivElement>(null);
  const earnButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (earnMenuRef.current && earnButtonRef.current) {
        const isClickInsideMenu = earnMenuRef.current.contains(event.target as Node);
        const isClickOnButton = earnButtonRef.current.contains(event.target as Node);
        
        if (!isClickInsideMenu && !isClickOnButton) {
          setIsEarnMenuOpen(false);
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/earn', label: 'Earn' },
    { href: '/community', label: 'Community' },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  if (!mounted) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/CredibleWhitelogo1.png" 
            alt="Credible" 
            width={200} 
            height={48}
            className="h-12 w-auto"
          />
        </Link>

        {/* Links de Navegação Centralizados */}
        {!isHomePage && (
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-[#B9E605]' 
                      : 'text-gray-900 dark:text-white hover:text-[#B9E605] dark:hover:text-[#B9E605]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}

            {/* Earn Menu */}
            <div className="relative" ref={earnButtonRef}>
              <div 
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setIsEarnMenuOpen(!isEarnMenuOpen)}
              >
                <Link
                  href="/earn"
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    pathname.startsWith('/earn')
                      ? 'text-[#B9E605]' 
                      : 'text-gray-900 dark:text-white hover:text-[#B9E605] dark:hover:text-[#B9E605]'
                  }`}
                >
                  <FiTrendingUp className="w-4 h-4" />
                  Earn
                </Link>
                <FiChevronDown className={`w-4 h-4 transition-transform ${isEarnMenuOpen ? 'rotate-180' : ''}`} />
              </div>
               
              {isEarnMenuOpen && (
                <div 
                  ref={earnMenuRef}
                  className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg py-2"
                >
                  {earnMenuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
                          pathname === item.href
                            ? 'text-[#B9E605] bg-gray-100 dark:bg-gray-800'
                            : 'text-gray-900 dark:text-white hover:text-[#B9E605] hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                        onClick={() => setIsEarnMenuOpen(false)}
                      >
                        <Icon className="w-4 h-4" />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>
        )}

        {/* Elementos da Direita */}
        <div className="flex items-center gap-2">
          {!isHomePage && (
            <>
              <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                <span className="font-medium">
                  <span className="text-[#B9E605]">1,234</span>
                  <span className="text-gray-900 dark:text-white"> Moons</span>
                </span>
                <Image src="/moon.png" alt="Moon" width={16} height={16} />
              </div>
              
              <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {resolvedTheme === 'dark' ? (
                  <FiSun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                ) : (
                  <FiMoon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                )}
              </button>

              <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                <FiBell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                <FiSettings className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </>
          )}
          
          {isHomePage ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {resolvedTheme === 'dark' ? (
                  <FiSun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                ) : (
                  <FiMoon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                )}
              </button>
              <Link
                href="/dashboard"
                className="px-6 py-2 bg-[#B9E605] text-black font-bold rounded-lg hover:bg-[#B9E605]/90 transition-colors"
              >
                Launch App
              </Link>
            </div>
          ) : null}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-[#B9E605]'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {resolvedTheme === 'dark' ? (
                <>
                  <FiSun className="w-5 h-5 mr-2" />
                  Light Mode
                </>
              ) : (
                <>
                  <FiMoon className="w-5 h-5 mr-2" />
                  Dark Mode
                </>
              )}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
} 