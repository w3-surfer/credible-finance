'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCreditCard, FaPlus } from 'react-icons/fa';
import { Layout } from '@/components/Layout';
import { AccountMenu } from '@/components/dashboard';

interface Card {
  id: string;
  type: string;
  number: string;
  expiry: string;
  status: 'active' | 'inactive';
}

export default function Cards() {
  const [cards] = useState<Card[]>([
    {
      id: '1',
      type: 'Visa',
      number: '**** **** **** 1234',
      expiry: '12/25',
      status: 'active'
    },
    {
      id: '2',
      type: 'Mastercard',
      number: '**** **** **** 5678',
      expiry: '09/24',
      status: 'active'
    },
    {
      id: '3',
      type: 'Visa',
      number: '**** **** **** 9012',
      expiry: '03/26',
      status: 'inactive'
    }
  ]);

  return (
    <Layout
      title="Cards"
      subtitle="Manage your payment cards and transactions"
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
                <span>Add Card</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((card) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <FaCreditCard className="w-6 h-6 text-[#B9E605]" />
                    <h3 className="text-lg font-bold text-white">{card.type}</h3>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Card Number</span>
                      <span className="text-white">{card.number}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Expiry</span>
                      <span className="text-white">{card.expiry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status</span>
                      <span className={`${
                        card.status === 'active' ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {card.status}
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