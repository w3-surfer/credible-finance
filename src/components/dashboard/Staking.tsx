'use client';

import { FiLock } from 'react-icons/fi';

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
  return (
    <div className="flex-1 min-w-0 p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Staking Pools</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Stake your tokens to earn rewards and participate in governance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stakingPools.map((pool) => (
          <div
            key={pool.token}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img src={pool.icon} alt={pool.token} className="w-8 h-8" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{pool.token}</h3>
              </div>
              <FiLock className="text-gray-400" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">Staked</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">{pool.staked}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">Rewards</span>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">{pool.rewards}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">APY</span>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{pool.apy}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">Lock Period</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">{pool.lockPeriod}</span>
              </div>
            </div>

            <div className="mt-6 flex space-x-3">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Stake
              </button>
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Unstake
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 