'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLock, FiArrowDownCircle, FiArrowUpCircle, FiTrendingUp, FiGift } from 'react-icons/fi';

interface StakingPool {
  token: string;
  staked: string;
  rewards: string;
  apy: string;
  lockPeriod: string;
  icon: string;
}

const stakingPools: StakingPool[] = [
  {
    token: 'CRED',
    staked: '10,000 CRED',
    rewards: '500 CRED',
    apy: '12.5%',
    lockPeriod: '30 Days',
    icon: '/cred logo.png'
  },
  {
    token: 'SOL',
    staked: '1,000 SOL',
    rewards: '50 SOL',
    apy: '8.2%',
    lockPeriod: '90 Days',
    icon: '/sol-logo.png'
  },
  {
    token: 'USDC',
    staked: '50,000 USDC',
    rewards: '2,500 USDC',
    apy: '10.5%',
    lockPeriod: '180 Days',
    icon: '/usdc-logo.png'
  }
];

export function Staking() {
  const [selectedPool, setSelectedPool] = useState<StakingPool | null>(null);
  const [amount, setAmount] = useState<string>('');

  return (
    <div className="flex-1 min-w-0 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lista de Pools */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Staking Pools</h2>
          <div className="space-y-4">
            {stakingPools.map((pool) => (
              <motion.div
                key={pool.token}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-lg border ${
                  selectedPool?.token === pool.token
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700'
                } cursor-pointer`}
                onClick={() => setSelectedPool(pool)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={pool.icon} alt={pool.token} className="w-8 h-8 rounded-full" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{pool.token}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Staked: {pool.staked}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">
                      APY: {pool.apy}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Lock: {pool.lockPeriod}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detalhes do Pool Selecionado */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Stake Tokens</h2>
          {selectedPool ? (
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-6">
                <img src={selectedPool.icon} alt={selectedPool.token} className="w-12 h-12 rounded-full" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedPool.token}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Current APY: {selectedPool.apy}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Amount to Stake
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter amount"
                    />
                    <div className="absolute right-3 top-2 text-gray-500 dark:text-gray-400">
                      {selectedPool.token}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Lock Period</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{selectedPool.lockPeriod}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <p className="text-sm text-gray-500 dark:text-gray-400">APY</p>
                    <p className="text-lg font-semibold text-green-600 dark:text-green-400">{selectedPool.apy}</p>
                  </div>
                </div>

                <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                  Stake {selectedPool.token}
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
              <FiLock className="w-12 h-12 mx-auto text-gray-400 dark:text-gray-500 mb-4" />
              <p className="text-gray-500 dark:text-gray-400">Select a staking pool to begin</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 