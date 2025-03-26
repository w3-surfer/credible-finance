'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaFilter, FaDownload, FaSearch } from 'react-icons/fa';

interface Transaction {
  id: string;
  type: 'deposit' | 'withdraw' | 'transfer' | 'payment' | 'refund';
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  description: string;
  reference: string;
}

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'deposit',
    amount: 1000,
    date: '2024-03-20',
    status: 'completed',
    description: 'Deposit from bank account',
    reference: 'REF123456',
  },
  {
    id: '2',
    type: 'withdraw',
    amount: 500,
    date: '2024-03-19',
    status: 'completed',
    description: 'Withdrawal to bank account',
    reference: 'REF123457',
  },
  {
    id: '3',
    type: 'transfer',
    amount: 200,
    date: '2024-03-18',
    status: 'pending',
    description: 'Transfer to user@example.com',
    reference: 'REF123458',
  },
  {
    id: '4',
    type: 'payment',
    amount: 150,
    date: '2024-03-17',
    status: 'completed',
    description: 'Payment for services',
    reference: 'REF123459',
  },
  {
    id: '5',
    type: 'refund',
    amount: 75,
    date: '2024-03-16',
    status: 'completed',
    description: 'Refund for cancelled order',
    reference: 'REF123460',
  },
];

export default function History() {
  const [transactions] = useState<Transaction[]>(mockTransactions);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.reference.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || transaction.type === filterType;
    const matchesStatus = filterStatus === 'all' || transaction.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

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

  const getTypeColor = (type: Transaction['type']) => {
    switch (type) {
      case 'deposit':
        return 'text-green-500';
      case 'withdraw':
        return 'text-red-500';
      case 'transfer':
        return 'text-blue-500';
      case 'payment':
        return 'text-purple-500';
      case 'refund':
        return 'text-orange-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Transaction History</h1>
        <button className="px-4 py-2 bg-[#B9E605] text-black rounded-lg hover:bg-[#B9E605]/90 transition-colors flex items-center space-x-2">
          <FaDownload className="w-4 h-4" />
          <span>Export</span>
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
      >
        <div className="flex items-center space-x-3 mb-6">
          <FaFilter className="w-6 h-6 text-[#B9E605]" />
          <h2 className="text-xl font-bold text-white">Filters</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 rounded-lg focus:outline-none focus:border-cyber-green"
            />
          </div>

          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 rounded-lg focus:outline-none focus:border-cyber-green"
          >
            <option value="all">All Types</option>
            <option value="deposit">Deposits</option>
            <option value="withdraw">Withdrawals</option>
            <option value="transfer">Transfers</option>
            <option value="payment">Payments</option>
            <option value="refund">Refunds</option>
          </select>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 rounded-lg focus:outline-none focus:border-cyber-green"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
      >
        <div className="flex items-center space-x-3 mb-6">
          <FaHistory className="w-6 h-6 text-[#B9E605]" />
          <h2 className="text-xl font-bold text-white">Transactions</h2>
        </div>

        <div className="space-y-4">
          {filteredTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getTypeColor(transaction.type)} bg-opacity-10`}>
                  {transaction.type.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="text-white font-medium">{transaction.description}</div>
                  <div className="text-sm text-gray-400">
                    {transaction.date} • {transaction.reference}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-medium ${getTypeColor(transaction.type)}`}>
                  {transaction.type === 'deposit' || transaction.type === 'refund' ? '+' : '-'}${transaction.amount.toFixed(2)}
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