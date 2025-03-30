'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { AccountMenu } from '@/components/dashboard';
import { FiLock, FiUnlock, FiArrowUp, FiArrowDown } from 'react-icons/fi';

interface Staking {
  id: string;
  amount: number;
  reward: number;
  lockPeriod: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'pending';
}

export default function Staking() {
  const [stakings, setStakings] = useState<Staking[]>([
    {
      id: '1',
      amount: 1000,
      reward: 50,
      lockPeriod: 30,
      startDate: '2024-03-01',
      endDate: '2024-03-31',
      status: 'active'
    },
    {
      id: '2',
      amount: 500,
      reward: 25,
      lockPeriod: 60,
      startDate: '2024-02-15',
      endDate: '2024-04-15',
      status: 'active'
    }
  ]);

  const [amount, setAmount] = useState('');
  const [lockPeriod, setLockPeriod] = useState('30');

  const handleStake = () => {
    // Implementar lógica de stake
    console.log('Staking:', { amount, lockPeriod });
  };

  const handleUnstake = (id: string) => {
    // Implementar lógica de unstake
    console.log('Unstaking:', id);
  };

  return (
    <Layout
      title="Staking"
      subtitle="Stake your $CRED to earn rewards"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu Lateral */}
          <div className="md:col-span-1">
            <AccountMenu />
          </div>
          {/* Conteúdo Principal */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Your Stakings */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <FiLock className="w-6 h-6 text-[#B9E605]" />
                  <h2 className="text-xl font-bold text-white">Your Stakings</h2>
                </div>

                <div className="space-y-4">
                  {stakings.map((staking) => (
                    <div
                      key={staking.id}
                      className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-4 border border-cyber-green/10"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="text-white font-medium">{staking.amount} $CRED</div>
                          <div className="text-sm text-gray-400">Lock Period: {staking.lockPeriod} days</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[#B9E605] font-medium">+{staking.reward} $CRED</div>
                          <div className="text-sm text-gray-400">Reward</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-400">
                        <div>
                          <div>Start: {staking.startDate}</div>
                          <div>End: {staking.endDate}</div>
                        </div>
                        <button
                          onClick={() => handleUnstake(staking.id)}
                          className="flex items-center space-x-2 text-red-500 hover:text-red-400 transition-colors"
                        >
                          <FiUnlock className="w-4 h-4" />
                          <span>Unstake</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Supply & Withdraw */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <FiArrowUp className="w-6 h-6 text-[#B9E605]" />
                  <h2 className="text-xl font-bold text-white">Supply & Withdraw</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Amount to Stake
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full px-4 py-2 bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 rounded-lg focus:outline-none focus:border-cyber-green"
                      />
                      <div className="absolute right-3 top-2 text-gray-400">$CRED</div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Lock Period
                    </label>
                    <select
                      value={lockPeriod}
                      onChange={(e) => setLockPeriod(e.target.value)}
                      className="w-full px-4 py-2 bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 rounded-lg focus:outline-none focus:border-cyber-green"
                    >
                      <option value="30">30 days</option>
                      <option value="60">60 days</option>
                      <option value="90">90 days</option>
                      <option value="180">180 days</option>
                      <option value="365">365 days</option>
                    </select>
                  </div>

                  <div className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-4 border border-cyber-green/10">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-gray-400">APY</div>
                      <div className="text-[#B9E605] font-medium">12.5%</div>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-gray-400">Lock Period</div>
                      <div className="text-white">{lockPeriod} days</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-gray-400">Estimated Reward</div>
                      <div className="text-white">
                        {amount ? (parseFloat(amount) * 0.125 * (parseInt(lockPeriod) / 365)).toFixed(2) : '0'} $CRED
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleStake}
                    className="w-full px-6 py-3 bg-[#B9E605] text-black font-bold rounded-lg hover:bg-[#B9E605]/90 transition-colors"
                  >
                    Stake Now
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 