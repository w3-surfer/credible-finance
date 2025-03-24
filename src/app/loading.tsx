'use client';

import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <Layout
      title="Loading"
      description="Please wait while we load your content"
    >
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-8 border border-gray-800"
        >
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-12 h-12 border-4 border-gray-700 rounded-full animate-spin border-t-[#B9E605]" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Loading</h2>
          <p className="text-gray-400">
            Please wait while we load your content...
          </p>
        </motion.div>
      </div>
    </Layout>
  );
} 