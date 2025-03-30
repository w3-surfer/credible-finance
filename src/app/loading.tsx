'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-8 border border-gray-800"
      >
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-[#B9E605] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </motion.div>
    </div>
  );
} 