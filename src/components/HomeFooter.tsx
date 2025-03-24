'use client';

import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

export function HomeFooter() {
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Credible</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Building the future of decentralized credit on Solana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-[#B9E605] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-600 dark:text-gray-400 hover:text-[#B9E605] transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-[#B9E605] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-[#B9E605] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-600 dark:text-gray-400 hover:text-[#B9E605] transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 dark:text-gray-400 hover:text-[#B9E605] transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@credible.com" className="text-gray-600 dark:text-gray-400 hover:text-[#B9E605] transition-colors flex items-center gap-2">
                  <FiMail className="w-4 h-4" />
                  contact@credible.com
                </a>
              </li>
              <li className="flex space-x-4">
                <a href="https://twitter.com/credible" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[#B9E605] transition-colors">
                  <FiTwitter className="w-5 h-5" />
                </a>
                <a href="https://github.com/credible" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[#B9E605] transition-colors">
                  <FiGithub className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/company/credible" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[#B9E605] transition-colors">
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Credible. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 