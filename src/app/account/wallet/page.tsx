'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWallet, FaPlus, FaTrash } from 'react-icons/fa';

interface Wallet {
  id: string;
  name: string;
  type: 'backpack' | 'phantom' | 'solana';
  address: string;
  balance: number;
  isConnected: boolean;
}

const mockWallets: Wallet[] = [
  {
    id: '1',
    name: 'Backpack Wallet',
    type: 'backpack',
    address: '0x1234...5678',
    balance: 1000,
    isConnected: true,
  },
  {
    id: '2',
    name: 'Phantom Wallet',
    type: 'phantom',
    address: '0x8765...4321',
    balance: 500,
    isConnected: true,
  },
  {
    id: '3',
    name: 'Solana Wallet',
    type: 'solana',
    address: '0x9876...5432',
    balance: 750,
    isConnected: false,
  },
];

export default function Wallet() {
  const [wallets] = useState<Wallet[]>(mockWallets);

  const getWalletIcon = (type: Wallet['type']) => {
    switch (type) {
      case 'backpack':
        return '🎒';
      case 'phantom':
        return '👻';
      case 'solana':
        return '☀️';
      default:
        return '💳';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-2">Wallet</h1>
        <p className="text-gray-400">Manage your connected wallets</p>
      </div>

      <div className="flex justify-end">
        <button className="px-4 py-2 bg-[#B9E605] text-black rounded-lg hover:bg-[#B9E605]/90 transition-colors flex items-center space-x-2">
          <FaPlus className="w-4 h-4" />
          <span>Add Wallet</span>
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
      >
        <div className="flex items-center justify-center space-x-3 mb-6">
          <FaWallet className="w-6 h-6 text-[#B9E605]" />
          <h2 className="text-xl font-bold text-white">Connected Wallets</h2>
        </div>

        <div className="space-y-4">
          {wallets.map((wallet) => (
            <div
              key={wallet.id}
              className="flex items-center justify-between p-4 bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-cyber-gray-100 dark:bg-cyber-gray-200 flex items-center justify-center text-2xl">
                  {getWalletIcon(wallet.type)}
                </div>
                <div>
                  <div className="text-white font-medium">{wallet.name}</div>
                  <div className="text-sm text-gray-400">{wallet.address}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-white font-medium">${wallet.balance.toFixed(2)}</div>
                  <div className={`text-sm ${wallet.isConnected ? 'text-green-500' : 'text-red-500'}`}>
                    {wallet.isConnected ? 'Connected' : 'Disconnected'}
                  </div>
                </div>
                <button className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                  <FaTrash className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 