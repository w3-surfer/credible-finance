'use client';

import { Layout } from '@/components/Layout';
import { AccountMenu } from '@/components/AccountMenu';
import { motion } from 'framer-motion';
import { FiPlusCircle, FiTrash2, FiCheck, FiCopy } from 'react-icons/fi';
import { useState } from 'react';

export default function Wallets() {
  const [connectedWallets, setConnectedWallets] = useState([
    {
      id: 1,
      name: 'Phantom Wallet',
      address: '8xJ4v...9Ykm2',
      type: 'Solana',
      isPrimary: true
    },
    {
      id: 2,
      name: 'Backpack',
      address: '3mN7x...2Pqr5',
      type: 'Solana',
      isPrimary: false
    },
    {
      id: 3,
      name: 'Solflare',
      address: '5kL9p...7Wvn4',
      type: 'Solana',
      isPrimary: false
    }
  ]);

  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  return (
    <Layout 
      title="Wallets" 
      description="Manage your connected wallets"
      subtitle="Connect and manage your wallets for seamless transactions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu Lateral */}
          <div className="md:col-span-1">
            <AccountMenu />
          </div>

          {/* Conteúdo Principal */}
          <div className="md:col-span-3">
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Connected Wallets</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#B9E605] text-black rounded-lg hover:bg-[#B9E605]/90 transition-colors">
                  <FiPlusCircle className="w-5 h-5" />
                  Connect Wallet
                </button>
              </div>

              <div className="space-y-4">
                {connectedWallets.map((wallet) => (
                  <div
                    key={wallet.id}
                    className="bg-black/30 border border-gray-800 rounded-lg p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold">{wallet.name}</h3>
                        <p className="text-sm text-gray-400">
                          {wallet.type} • {wallet.address}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        {wallet.isPrimary ? (
                          <span className="flex items-center gap-1 text-sm text-[#B9E605]">
                            <FiCheck className="w-4 h-4" />
                            Primary
                          </span>
                        ) : (
                          <button className="text-sm text-gray-400 hover:text-white">
                            Set as Primary
                          </button>
                        )}
                        <button 
                          className="p-2 text-gray-400 hover:text-gray-300 transition-colors"
                          onClick={() => handleCopyAddress(wallet.address)}
                        >
                          {copiedAddress === wallet.address ? (
                            <FiCheck className="w-5 h-5 text-[#B9E605]" />
                          ) : (
                            <FiCopy className="w-5 h-5" />
                          )}
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                          <FiTrash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 