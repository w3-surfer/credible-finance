'use client';

import { Layout } from '@/components/Layout';
import { FiUsers, FiMessageSquare, FiTrendingUp } from 'react-icons/fi';

export default function CommunityPage() {
  return (
    <Layout 
      title="Community" 
      subtitle="Connect with other traders, share insights, and grow together"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Community Stats Card */}
        <div className="bg-black/50 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <FiUsers className="w-5 h-5 text-[#B9E605]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Community Size</h3>
                <p className="text-sm text-gray-400">Active Members</p>
              </div>
            </div>
          </div>
          <div className="text-2xl font-bold text-white">10,234</div>
          <div className="flex items-center gap-2 text-sm text-[#B9E605] mt-2">
            <FiTrendingUp className="w-4 h-4" />
            <span>+12.34%</span>
          </div>
        </div>

        {/* Discussions Card */}
        <div className="bg-black/50 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <FiMessageSquare className="w-5 h-5 text-[#B9E605]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Discussions</h3>
                <p className="text-sm text-gray-400">Active Topics</p>
              </div>
            </div>
          </div>
          <div className="text-2xl font-bold text-white">1,234</div>
          <div className="flex items-center gap-2 text-sm text-[#B9E605] mt-2">
            <FiTrendingUp className="w-4 h-4" />
            <span>+5.67%</span>
          </div>
        </div>

        {/* Growth Card */}
        <div className="bg-black/50 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <FiTrendingUp className="w-5 h-5 text-[#B9E605]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Growth</h3>
                <p className="text-sm text-gray-400">Monthly Growth</p>
              </div>
            </div>
          </div>
          <div className="text-2xl font-bold text-white">8.90%</div>
          <div className="flex items-center gap-2 text-sm text-[#B9E605] mt-2">
            <FiTrendingUp className="w-4 h-4" />
            <span>+2.90%</span>
          </div>
        </div>
      </div>
    </Layout>
  );
} 