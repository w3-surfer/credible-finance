'use client';

import React from 'react';
import { Layout } from '@/components/Layout';
import { CreditScore } from '@/components/dashboard/CreditScore';
import { CreditLimit } from '@/components/dashboard/CreditLimit';
import { Staking } from '@/components/dashboard/Staking';
import { Transactions } from '@/components/dashboard/Transactions';
import { Charts } from '@/components/dashboard/Charts';
import { FiTrendingUp, FiDollarSign, FiActivity } from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

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
              <FiDollarSign className="w-6 h-6 text-gray-900 dark:text-white" />
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$12,345.67</div>
              <div className="text-sm text-gray-400">All Wallets</div>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-[#B9E605] mt-4">
              <FiTrendingUp className="w-4 h-4 text-gray-900 dark:text-white" />
              <span>+12.34%</span>
            </div>
          </div>
          <Transactions />
        </div>

        <Charts />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mt-6">
          <Staking />
        </div>
      </div>
    </Layout>
  );
} 