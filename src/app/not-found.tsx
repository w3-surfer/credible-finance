'use client';

import { motion } from 'framer-motion';
import { FiHome } from 'react-icons/fi';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-8 border border-gray-800 text-center"
      >
        <h1 className="text-6xl font-bold text-[#B9E605] mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-2 bg-[#B9E605] text-black font-bold rounded-lg hover:bg-opacity-90 transition-colors"
        >
          <FiHome className="mr-2" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
} 