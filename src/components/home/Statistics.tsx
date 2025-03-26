'use client';

import { motion } from 'framer-motion';
import { FaUsers, FaChartLine, FaLock, FaRocket } from 'react-icons/fa';

const stats = [
  {
    title: 'Active Users',
    value: '10K+',
    icon: FaUsers,
    description: 'Growing community of users'
  },
  {
    title: 'Total Volume',
    value: '$50M+',
    icon: FaChartLine,
    description: 'Transaction volume'
  },
  {
    title: 'Security',
    value: '99.9%',
    icon: FaLock,
    description: 'Guaranteed uptime'
  },
  {
    title: 'Average APY',
    value: '15%',
    icon: FaRocket,
    description: 'Annual average return'
  }
];

export function Statistics() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Numbers
          </h2>
          <p className="text-gray-400 text-lg">
            Impressive statistics showing our growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a] hover:border-[#B9E605] transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#2a2a2a] rounded-lg flex items-center justify-center mr-4">
                  <stat.icon className="w-6 h-6 text-[#B9E605]" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {stat.title}
                </h3>
              </div>
              <div className="text-3xl font-bold text-[#B9E605] mb-2">
                {stat.value}
              </div>
              <p className="text-gray-400">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 