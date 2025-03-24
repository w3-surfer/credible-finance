'use client';

import { motion } from 'framer-motion';
import { FiUsers, FiDollarSign, FiTrendingUp, FiGlobe } from 'react-icons/fi';

export function Stats() {
  const stats = [
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Active Users",
      value: "10K+",
      change: "+15%"
    },
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: "Total Value Locked",
      value: "$50M+",
      change: "+25%"
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Total Transactions",
      value: "1M+",
      change: "+40%"
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "Countries",
      value: "50+",
      change: "+5"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center"
            >
              <div className="text-[#B9E605] mb-4 flex justify-center">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">{stat.title}</p>
              <div className="flex items-center justify-center text-sm text-[#B9E605]">
                <FiTrendingUp className="w-4 h-4 mr-1" />
                <span>{stat.change}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 