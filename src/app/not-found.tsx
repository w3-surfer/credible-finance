'use client';

import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { FiHome } from 'react-icons/fi';

export default function NotFound() {
  return (
    <Layout
      title="404 - Page Not Found"
      description="The page you're looking for doesn't exist"
    >
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-8 border border-gray-800"
        >
          <h1 className="text-6xl font-bold text-[#B9E605] mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-6 py-2 bg-[#B9E605] text-black font-bold rounded-lg hover:bg-opacity-90 transition-colors"
          >
            <FiHome className="mr-2" />
            Back to Home
          </a>
        </motion.div>
      </div>
    </Layout>
  );
} 