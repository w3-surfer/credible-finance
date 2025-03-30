'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { Layout } from '@/components/Layout';

interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal' | 'transfer';
  amount: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

export default function History() {
  const [transactions] = useState<Transaction[]>([
    {
      id: '1',
      type: 'deposit',
      amount: '+$1,500.00',
      date: '2024-03-15',
      status: 'completed'
    },
    {
      id: '2',
      type: 'withdrawal',
      amount: '-$750.00',
      date: '2024-03-14',
      status: 'completed'
    },
    {
      id: '3',
      type: 'transfer',
      amount: '-$250.00',
      date: '2024-03-13',
      status: 'pending'
    },
    {
      id: '4',
      type: 'deposit',
      amount: '+$2,000.00',
      date: '2024-03-12',
      status: 'completed'
    },
    {
      id: '5',
      type: 'withdrawal',
      amount: '-$500.00',
      date: '2024-03-11',
      status: 'failed'
    }
  ]);

  return (
    <Layout
      title="History"
      subtitle="View your transaction history and activity"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <FaHistory className="w-6 h-6 text-[#B9E605]" />
            <h2 className="text-xl font-bold text-white">Transaction History</h2>
          </div>

          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'deposit' ? 'bg-green-500/20' : 'bg-red-500/20'
                  }`}>
                    {transaction.type === 'deposit' ? (
                      <FaArrowUp className="w-5 h-5 text-green-500" />
                    ) : (
                      <FaArrowDown className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                  <div>
                    <div className="text-white font-medium capitalize">{transaction.type}</div>
                    <div className="text-sm text-gray-400">{transaction.date}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className={`font-medium ${
                      transaction.type === 'deposit' ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {transaction.amount}
                    </div>
                    <div className={`text-sm ${
                      transaction.status === 'completed' ? 'text-green-500' :
                      transaction.status === 'pending' ? 'text-yellow-500' :
                      'text-red-500'
                    }`}>
                      {transaction.status}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
} 