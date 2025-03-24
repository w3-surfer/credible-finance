'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10" />
      
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            The First Decentralized<br />
            <span className="text-[#B9E605]">AI Credit System</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Build your on-chain credit score and unlock the future of decentralized finance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-[#B9E605] text-black font-bold rounded-lg hover:bg-[#B9E605]/90 transition-colors"
            >
              Try Beta
            </Link>
            <Link
              href="#features"
              className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none w-full h-[800px] flex items-end justify-center">
        <Image
          src="/alien.png"
          alt="Alien Background"
          width={900}
          height={900}
          className="opacity-40 dark:opacity-30 object-contain"
          priority
        />
      </div>
    </section>
  );
} 