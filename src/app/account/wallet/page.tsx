'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWallet, FaPlus } from 'react-icons/fa';
import { Layout } from '@/components/Layout';

interface Wallet {
  id: string;
  name: string;
  type: string;
  balance: string;
  status: 'connected' | 'disconnected';
}

export default function Wallet() {
  const [wallets] = useState<Wallet[]>([
    {
      id: '1',
      name: 'Backpack',
      type: 'Solana',
      balance: '$12,500.00',
      status: 'connected'
    },
    {
      id: '2',
      name: 'Phantom',
      type: 'Solana',
      balance: '$8,750.00',
      status: 'connected'
    },
    {
      id: '3',
      name: 'Solana',
      type: 'Native',
      balance: '$5,250.00',
      status: 'connected'
    }
  ]);

  return (
    <Layout
      title="Wallet"
      subtitle="Connect and manage your cryptocurrency wallets"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-end mb-6">
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#B9E605] text-black rounded-lg hover:bg-[#B9E605]/90 transition-colors">
            <FaPlus className="w-4 h-4" />
            <span>Add Wallet</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wallets.map((wallet) => (
            <motion.div
              key={wallet.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-cyber-gray-100 dark:bg-cyber-gray-200 flex items-center justify-center">
                    <FaWallet className="w-5 h-5 text-[#B9E605]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{wallet.name}</h3>
                    <p className="text-sm text-gray-400">{wallet.type}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  wallet.status === 'connected' 
                    ? 'bg-green-500/20 text-green-500' 
                    : 'bg-red-500/20 text-red-500'
                }`}>
                  {wallet.status}
                </span>
              </div>
              <div className="text-2xl font-bold text-white mb-4">{wallet.balance}</div>
              <button className="w-full px-4 py-2 bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 rounded-lg hover:bg-cyber-gray-200 dark:hover:bg-cyber-gray-300 transition-colors">
                Manage
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 