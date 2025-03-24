'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Build Your <span className="text-[#B9E605]">On-Chain Credit</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the future of decentralized credit and start building your on-chain credit score today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ecosystem"
              className="px-8 py-4 bg-[#B9E605] text-black font-bold rounded-lg hover:bg-[#B9E605]/90 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/infrastructure"
              className="px-8 py-4 border border-[#B9E605] text-[#B9E605] font-bold rounded-lg hover:bg-[#B9E605]/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 