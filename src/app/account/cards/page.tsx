'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCreditCard, FaPlus } from 'react-icons/fa';
import { Layout } from '@/components/Layout';

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
      <div className="container mx-auto px-4">
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
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-cyber-gray-100 dark:bg-cyber-gray-200 flex items-center justify-center">
                    <FaCreditCard className="w-5 h-5 text-[#B9E605]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{card.type}</h3>
                    <p className="text-sm text-gray-400">{card.number}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  card.status === 'active' 
                    ? 'bg-green-500/20 text-green-500' 
                    : 'bg-red-500/20 text-red-500'
                }`}>
                  {card.status}
                </span>
              </div>
              <div className="text-sm text-gray-400 mb-4">Expires: {card.expiry}</div>
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