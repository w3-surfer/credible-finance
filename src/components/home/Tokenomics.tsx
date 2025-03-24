'use client';

import { motion } from 'framer-motion';
import { FiUsers, FiLock, FiTrendingUp, FiGift } from 'react-icons/fi';

export function Tokenomics() {
  const tokenomics = [
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Community",
      percentage: "40%",
      description: "Community rewards and ecosystem growth"
    },
    {
      icon: <FiLock className="w-8 h-8" />,
      title: "Treasury",
      percentage: "25%",
      description: "Protocol treasury for future development"
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Development",
      percentage: "20%",
      description: "Team and development costs"
    },
    {
      icon: <FiGift className="w-8 h-8" />,
      title: "Marketing",
      percentage: "15%",
      description: "Marketing and partnerships"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tokenomics
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Fair and transparent token distribution
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tokenomics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center"
            >
              <div className="text-[#B9E605] mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{item.percentage}</h3>
              <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</p>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 