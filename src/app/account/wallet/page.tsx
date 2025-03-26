'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWallet, FaArrowUp, FaArrowDown, FaExchangeAlt, FaHistory } from 'react-icons/fa';

interface Transaction {
  id: string;
  type: 'deposit' | 'withdraw' | 'transfer';
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  description: string;
}

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'deposit',
    amount: 1000,
    date: '2024-03-20',
    status: 'completed',
    description: 'Deposit from bank account',
  },
  {
    id: '2',
    type: 'withdraw',
    amount: 500,
    date: '2024-03-19',
    status: 'completed',
    description: 'Withdrawal to bank account',
  },
  {
    id: '3',
    type: 'transfer',
    amount: 200,
    date: '2024-03-18',
    status: 'pending',
    description: 'Transfer to user@example.com',
  },
];

export default function Wallet() {
  const [balance] = useState(5000);
  const [transactions] = useState<Transaction[]>(mockTransactions);

  const getStatusColor = (status: Transaction['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-500';
      case 'pending':
        return 'text-yellow-500';
      case 'failed':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getTransactionIcon = (type: Transaction['type']) => {
    switch (type) {
      case 'deposit':
        return <FaArrowDown className="w-5 h-5 text-green-500" />;
      case 'withdraw':
        return <FaArrowUp className="w-5 h-5 text-red-500" />;
      case 'transfer':
        return <FaExchangeAlt className="w-5 h-5 text-blue-500" />;
      default:
        return <FaHistory className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Wallet</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-[#B9E605] text-black rounded-lg hover:bg-[#B9E605]/90 transition-colors">
            Deposit
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
            Withdraw
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
      >
        <div className="flex items-center space-x-3 mb-6">
          <FaWallet className="w-6 h-6 text-[#B9E605]" />
          <h2 className="text-xl font-bold text-white">Balance</h2>
        </div>

        <div className="text-4xl font-bold text-white mb-2">${balance.toFixed(2)}</div>
        <p className="text-gray-400">Available balance</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
      >
        <div className="flex items-center space-x-3 mb-6">
          <FaHistory className="w-6 h-6 text-[#B9E605]" />
          <h2 className="text-xl font-bold text-white">Recent Transactions</h2>
        </div>

        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                {getTransactionIcon(transaction.type)}
                <div>
                  <div className="text-white font-medium">{transaction.description}</div>
                  <div className="text-sm text-gray-400">{transaction.date}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-medium ${transaction.type === 'deposit' ? 'text-green-500' : 'text-red-500'}`}>
                  {transaction.type === 'deposit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                </div>
                <div className={`text-sm ${getStatusColor(transaction.status)}`}>
                  {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 