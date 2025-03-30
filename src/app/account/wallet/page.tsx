'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWallet, FaPlus } from 'react-icons/fa';
import { Layout } from '@/components/Layout';
import { AccountMenu } from '@/components/dashboard';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu Lateral */}
          <div className="md:col-span-1">
            <AccountMenu />
          </div>
          {/* Conteúdo Principal */}
          <div className="md:col-span-3">
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
                  <div className="flex items-center space-x-3 mb-4">
                    <FaWallet className="w-6 h-6 text-[#B9E605]" />
                    <h3 className="text-lg font-bold text-white">{wallet.name}</h3>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Type</span>
                      <span className="text-white">{wallet.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Balance</span>
                      <span className="text-[#B9E605] font-bold">{wallet.balance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status</span>
                      <span className={`${
                        wallet.status === 'connected' ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {wallet.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 