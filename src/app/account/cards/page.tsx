'use client';

import { Layout } from '@/components/Layout';
import { AccountMenu } from '@/components/AccountMenu';
import PageTitle from '@/components/PageTitle';
import { motion } from 'framer-motion';
import { FiPlusCircle, FiCreditCard, FiLock, FiUnlock } from 'react-icons/fi';
import { useState } from 'react';

export default function Cards() {
  const [cards, setCards] = useState([
    {
      id: 1,
      last4: '4242',
      expiry: '12/24',
      type: 'Visa',
      isLocked: false
    },
    {
      id: 2,
      last4: '8888',
      expiry: '06/25',
      type: 'Mastercard',
      isLocked: true
    }
  ]);

  return (
    <>
      <PageTitle
        title="Cards"
        subtitle="View and manage your credit cards and payment methods"
      />
      <Layout>
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
                  <h2 className="text-2xl font-bold">Your Cards</h2>
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#B9E605] text-black rounded-lg hover:bg-[#B9E605]/90 transition-colors">
                    <FiPlusCircle className="w-5 h-5" />
                    Add New Card
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {cards.map((card) => (
                    <div
                      key={card.id}
                      className="bg-black/30 border border-gray-800 rounded-lg p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <FiCreditCard className="w-8 h-8 text-[#B9E605]" />
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          {card.isLocked ? (
                            <FiLock className="w-5 h-5" />
                          ) : (
                            <FiUnlock className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm text-gray-400">Card Number</p>
                          <p className="font-medium">•••• •••• •••• {card.last4}</p>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <p className="text-sm text-gray-400">Expiry</p>
                            <p className="font-medium">{card.expiry}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Type</p>
                            <p className="font-medium">{card.type}</p>
                          </div>
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
    </>
  );
} 