'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGift, FaCheck, FaTimes } from 'react-icons/fa';
import { Layout } from '@/components/Layout';
import { AccountMenu } from '@/components/dashboard';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu Lateral */}
          <div className="md:col-span-1">
            <AccountMenu />
          </div>
          {/* Conteúdo Principal */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {airdrops.map((airdrop) => (
                <motion.div
                  key={airdrop.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <FaGift className="w-6 h-6 text-[#B9E605]" />
                    <h3 className="text-lg font-bold text-white">{airdrop.name}</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Reward</div>
                      <div className="text-xl font-bold text-[#B9E605]">{airdrop.reward}</div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-400 mb-2">Requirements</div>
                      <ul className="space-y-2">
                        {airdrop.requirements.map((req, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm">
                            <FaCheck className="w-4 h-4 text-green-500" />
                            <span className="text-white">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-400">End Date</div>
                        <div className="text-white">{airdrop.endDate}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Status</div>
                        <div className={`${
                          airdrop.status === 'available' ? 'text-green-500' :
                          airdrop.status === 'claimed' ? 'text-blue-500' : 'text-red-500'
                        }`}>
                          {airdrop.status}
                        </div>
                      </div>
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