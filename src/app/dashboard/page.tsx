'use client';

import { Layout } from '@/components/Layout';
import { CreditScore } from '@/components/dashboard/CreditScore';
import { CreditLimit } from '@/components/dashboard/CreditLimit';
import { DashboardStaking } from '@/components/dashboard/DashboardStaking';
import { Transactions } from '@/components/dashboard/Transactions';
import { Charts } from '@/components/dashboard/Charts';

export default function Dashboard() {
  return (
    <Layout title="Dashboard" subtitle="Monitor your portfolio performance and track your earnings">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CreditScore />
        <CreditLimit />
        <div className="p-6 rounded-lg border border-gray-800 bg-cyber-gray-100">
          <h3 className="text-sm font-medium text-gray-400">Total Balance</h3>
          <p className="text-2xl font-bold text-white mt-2">$25,000.00</p>
          <div className="flex items-center mt-2">
            <span className="text-sm text-green-500">+2.5%</span>
            <span className="text-sm text-gray-400 ml-2">vs last month</span>
          </div>
        </div>
        <div className="p-6 rounded-lg border border-gray-800 bg-cyber-gray-100">
          <h3 className="text-sm font-medium text-gray-400">Total Rewards</h3>
          <p className="text-2xl font-bold text-white mt-2">$1,250.00</p>
          <div className="flex items-center mt-2">
            <span className="text-sm text-green-500">+5.2%</span>
            <span className="text-sm text-gray-400 ml-2">vs last month</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Transactions />
      </div>

      <div className="mt-6">
        <Charts />
      </div>

      <div className="mt-6">
        <DashboardStaking />
      </div>
    </Layout>
  );
} 