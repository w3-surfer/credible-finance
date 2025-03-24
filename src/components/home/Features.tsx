'use client';

import { motion } from 'framer-motion';
import { FiUser, FiLayout, FiTrendingUp } from 'react-icons/fi';
import Link from 'next/link';

export function Features() {
  const features = [
    {
      icon: FiUser,
      title: 'Account',
      description: 'Manage your personal information, connected wallets, beneficiaries, and participate in the referral program. Track your progress in the airdrop program and accumulate Moons.',
      href: '/account'
    },
    {
      icon: FiLayout,
      title: 'Dashboard',
      description: 'View your complete portfolio, track your performance, monitor your assets, and see your real-time statistics. Get a comprehensive overview of all your activities on the platform.',
      href: '/dashboard'
    },
    {
      icon: FiTrendingUp,
      title: 'Earn',
      description: 'Maximize your earnings through lending, staking, and node operations. Participate in the Credible ecosystem and receive rewards for your contribution to the network.',
      href: '/earn'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-[#B9E605]">Platform</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore the main features of the Credible platform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center hover:border-[#B9E605]/50 transition-colors"
              >
                <div className="text-[#B9E605] mb-4 flex justify-center">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {feature.description}
                </p>
                <Link
                  href={feature.href}
                  className="inline-block px-6 py-2 bg-[#B9E605] text-black font-semibold rounded-lg hover:bg-[#B9E605]/90 transition-colors"
                >
                  Access {feature.title}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 