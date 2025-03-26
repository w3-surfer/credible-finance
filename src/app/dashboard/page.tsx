'use client';

import { Layout } from '@/components/Layout';
import { CreditScore } from '@/components/dashboard/CreditScore';
import { CreditLimit } from '@/components/dashboard/CreditLimit';
import { Transactions } from '@/components/dashboard/Transactions';
import { Charts } from '@/components/dashboard/Charts';
import { FiTrendingUp } from 'react-icons/fi';

export default function Dashboard() {
  return (
    <Layout
      title="Dashboard"
      subtitle="Monitor your portfolio performance and track your earnings"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <CreditScore />
          <CreditLimit />
          {/* Total Balance Card */}
          <div className="bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#B9E605]">Total Balance</h3>
              <FiTrendingUp className="w-6 h-6 text-gray-900 dark:text-white" />
            </div>
            <div className="text-4xl font-bold text-white">$125,000</div>
            <div className="flex items-center mt-2 text-sm text-[#B9E605]">
              <FiTrendingUp className="w-4 h-4 mr-1" />
              <span>+12.5% from last month</span>
            </div>
          </div>
          <Transactions />
        </div>

        <Charts />
      </div>
    </Layout>
  );
} 