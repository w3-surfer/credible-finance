'use client';

import { useState } from 'react';
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

export function StakingPage() {
  const [selectedTab, setSelectedTab] = useState('supply');
  const [amount, setAmount] = useState('');

  return (
    <div className="flex-1 min-w-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Your Staking Box */}
        <div className="bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300">
          <div className="flex items-center justify-center mb-6">
            <h3 className="text-xl font-bold text-[#B9E605]">Your Staking</h3>
            <FiTrendingUp className="w-6 h-6 text-gray-900 dark:text-white ml-2" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-cyber-gray-100 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-2">Total Staked</div>
              <div className="text-2xl font-bold text-white">$61,000</div>
              <div className="flex items-center mt-2 text-sm text-[#B9E605]">
                <FiTrendingUp className="w-4 h-4 mr-1 text-gray-900 dark:text-white" />
                <span>+15.3%</span>
              </div>
            </div>
            
            <div className="bg-cyber-gray-100 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-2">Total Rewards</div>
              <div className="text-2xl font-bold text-white">$3,050</div>
              <div className="flex items-center mt-2 text-sm text-[#B9E605]">
                <FiTrendingUp className="w-4 h-4 mr-1 text-gray-900 dark:text-white" />
                <span>+8.7%</span>
              </div>
            </div>
            
            <div className="bg-cyber-gray-100 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-2">Average APY</div>
              <div className="text-2xl font-bold text-white">10.4%</div>
              <div className="flex items-center mt-2 text-sm text-[#B9E605]">
                <FiTrendingUp className="w-4 h-4 mr-1 text-gray-900 dark:text-white" />
                <span>+2.1%</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="w-full max-w-md py-3 bg-[#B9E605] text-black rounded-lg font-semibold hover:bg-[#a5cc05] transition-colors flex items-center justify-center">
              <FiGift className="w-5 h-5 mr-2" />
              Claim Rewards
            </button>
          </div>
        </div>

        {/* Supply/Withdraw Box */}
        <div className="bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300">
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => setSelectedTab('supply')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                selectedTab === 'supply'
                  ? 'bg-[#B9E605] text-black'
                  : 'bg-cyber-gray-100 text-gray-400 hover:text-white'
              }`}
            >
              <FiArrowUpCircle className={`w-4 h-4 mr-2 ${
                selectedTab === 'supply' ? 'text-black' : 'text-gray-900 dark:text-white'
              }`} />
              Supply
            </button>
            <button
              onClick={() => setSelectedTab('withdraw')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                selectedTab === 'withdraw'
                  ? 'bg-[#B9E605] text-black'
                  : 'bg-cyber-gray-100 text-gray-400 hover:text-white'
              }`}
            >
              <FiArrowDownCircle className={`w-4 h-4 mr-2 ${
                selectedTab === 'withdraw' ? 'text-black' : 'text-gray-900 dark:text-white'
              }`} />
              Withdraw
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-cyber-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-400">Amount</div>
                <div className="text-sm text-gray-400">Balance: 15,000 CRED</div>
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="flex-1 bg-cyber-gray-200 border border-cyber-green/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#B9E605]"
                />
                <button className="px-4 py-2 bg-cyber-gray-200 text-gray-400 rounded-lg hover:text-white">
                  MAX
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="w-full max-w-md py-3 bg-[#B9E605] text-black rounded-lg font-semibold hover:bg-[#a5cc05] transition-colors">
                {selectedTab === 'supply' ? 'Supply CRED' : 'Withdraw CRED'}
              </button>
            </div>

            <div className="bg-cyber-gray-100 rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Lock Period</span>
                <span className="text-white flex items-center">
                  <FiLock className="w-4 h-4 mr-1 text-gray-900 dark:text-white" />
                  30 Days
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">APY</span>
                <span className="text-[#B9E605]">12.5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 