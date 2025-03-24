'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiTwitter, FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi';

interface FooterProps {
  className?: string;
}

const footerLinks = {
  product: [
    { href: '/infrastructure', label: 'Infrastructure' },
    { href: '/ecosystem', label: 'Ecosystem' },
    { href: '/community', label: 'Community' },
    { href: '/earn', label: 'Earn' }
  ],
  resources: [
    { href: '/docs', label: 'Documentation' },
    { href: '/blog', label: 'Blog' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' }
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/security', label: 'Security' },
    { href: '/compliance', label: 'Compliance' }
  ]
};

const socialLinks = [
  { href: 'https://twitter.com/credible', icon: FiTwitter, label: 'Twitter' },
  { href: 'https://github.com/credible', icon: FiGithub, label: 'GitHub' },
  { href: 'https://linkedin.com/company/credible', icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'https://credible.com', icon: FiGlobe, label: 'Website' }
];

export function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`bg-gradient-to-t from-[#B9E605]/30 via-[#B9E605]/10 to-transparent ${className}`}>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/CredibleWhitelogo1.png" 
                alt="Credible" 
                width={200} 
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-600 dark:text-white text-sm mb-6">
              Credible is building the future of decentralized finance on Solana. 
              Join us in creating a more accessible and efficient financial system.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#B9E605] dark:text-white dark:hover:text-[#B9E605] transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links do Footer */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-white hover:text-[#B9E605] dark:hover:text-[#B9E605] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-white hover:text-[#B9E605] dark:hover:text-[#B9E605] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-white">
              © {new Date().getFullYear()} Credible. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 dark:text-white hover:text-[#B9E605] dark:hover:text-[#B9E605] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 