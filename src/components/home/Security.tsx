'use client';

import { motion } from 'framer-motion';
import { FiShield, FiEye } from 'react-icons/fi';
import Image from 'next/image';

export function Security() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Protocol Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#B9E605]/10 rounded-lg">
                <FiShield className="w-6 h-6 text-[#B9E605]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Protocol Security</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Image src="/sec3.png" alt="SEC3" width={40} height={40} />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">SEC3</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Smart Contract Auditing</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image src="/credora.png" alt="Credora" width={40} height={40} />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Credora</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Credit Risk Assessment</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Transparent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#B9E605]/10 rounded-lg">
                <FiEye className="w-6 h-6 text-[#B9E605]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Transparent</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              All transactions and credit scores are publicly verifiable on the blockchain, ensuring complete transparency and trust in our system.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#B9E605] rounded-full" />
                <span className="text-gray-600 dark:text-gray-400">Publicly verifiable transactions</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#B9E605] rounded-full" />
                <span className="text-gray-600 dark:text-gray-400">On-chain credit scoring</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#B9E605] rounded-full" />
                <span className="text-gray-600 dark:text-gray-400">Real-time updates</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 