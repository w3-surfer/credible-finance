'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGift, FaCheck, FaTimes } from 'react-icons/fa';
import { Layout } from '@/components/Layout';

interface Airdrop {
  id: string;
  name: string;
  reward: string;
  requirements: string[];
  status: 'available' | 'claimed' | 'ended';
  endDate: string;
}

export default function Airdrop() {
  const [airdrops] = useState<Airdrop[]>([
    {
      id: '1',
      name: 'CRED Token Launch',
      reward: '100 CRED',
      requirements: [
        'Hold minimum 1000 USDC',
        'Complete KYC verification',
        'Connect Solana wallet'
      ],
      status: 'available',
      endDate: '2024-04-15'
    },
    {
      id: '2',
      name: 'Early Adopter Bonus',
      reward: '50 CRED',
      requirements: [
        'Be among first 1000 users',
        'Complete profile setup',
        'Make first deposit'
      ],
      status: 'claimed',
      endDate: '2024-03-01'
    },
    {
      id: '3',
      name: 'Community Rewards',
      reward: '25 CRED',
      requirements: [
        'Join Discord community',
        'Follow on Twitter',
        'Share referral link'
      ],
      status: 'ended',
      endDate: '2024-02-15'
    }
  ]);

  return (
    <Layout
      title="Airdrop"
      subtitle="Participate in token airdrops and earn rewards"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {airdrops.map((airdrop) => (
            <motion.div
              key={airdrop.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-cyber-gray-100 dark:bg-cyber-gray-200 flex items-center justify-center">
                    <FaGift className="w-5 h-5 text-[#B9E605]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{airdrop.name}</h3>
                    <p className="text-sm text-gray-400">Ends: {airdrop.endDate}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  airdrop.status === 'available' ? 'bg-green-500/20 text-green-500' :
                  airdrop.status === 'claimed' ? 'bg-blue-500/20 text-blue-500' :
                  'bg-red-500/20 text-red-500'
                }`}>
                  {airdrop.status}
                </span>
              </div>

              <div className="text-2xl font-bold text-[#B9E605] mb-4">{airdrop.reward}</div>

              <div className="space-y-2 mb-6">
                {airdrop.requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    {airdrop.status === 'available' ? (
                      <FaCheck className="w-4 h-4 text-green-500" />
                    ) : (
                      <FaTimes className="w-4 h-4 text-red-500" />
                    )}
                    <span className="text-sm text-gray-400">{requirement}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full px-4 py-2 rounded-lg transition-colors ${
                  airdrop.status === 'available'
                    ? 'bg-[#B9E605] text-black hover:bg-[#B9E605]/90'
                    : 'bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 hover:bg-cyber-gray-200 dark:hover:bg-cyber-gray-300'
                }`}
              >
                {airdrop.status === 'available' ? 'Claim Now' : 'View Details'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 