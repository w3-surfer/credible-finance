'use client';

import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

interface StakingPool {
  id: number;
  name: string;
  token: string;
  staked: string;
  rewards: string;
  apy: string;
  lockPeriod: string;
  icon: string;
}

export function DashboardStaking() {
  const [selectedPool, setSelectedPool] = useState<StakingPool | null>(null);

  const stakingPools: StakingPool[] = [
    {
      id: 1,
      name: 'CRED Staking',
      token: 'CRED',
      staked: '1,000',
      rewards: '150',
      apy: '15%',
      lockPeriod: '30 days',
      icon: '/icons/cred.svg'
    },
    {
      id: 2,
      name: 'SOL Staking',
      token: 'SOL',
      staked: '50',
      rewards: '5',
      apy: '10%',
      lockPeriod: '60 days',
      icon: '/icons/sol.svg'
    },
    {
      id: 3,
      name: 'USDC Staking',
      token: 'USDC',
      staked: '5,000',
      rewards: '400',
      apy: '8%',
      lockPeriod: '90 days',
      icon: '/icons/usdc.svg'
    }
  ];

  return (
    <div className="flex-1 min-w-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lista de Pools */}
        <div className="space-y-4">
          <div className="space-y-4">
            {stakingPools.map((pool) => (
              <div
                key={pool.token}
                className={`p-4 rounded-lg border ${
                  selectedPool?.token === pool.token
                    ? 'border-[#B9E605] bg-[#B9E605]/10'
                    : 'border-gray-800'
                } cursor-pointer`}
                onClick={() => setSelectedPool(pool)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={pool.icon} alt={pool.token} className="w-8 h-8 rounded-full" />
                    <div>
                      <h3 className="font-semibold text-white">{pool.token}</h3>
                      <p className="text-sm text-gray-400">Staked: {pool.staked}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-[#B9E605]">
                      APY: {pool.apy}
                    </p>
                    <p className="text-sm text-gray-400">
                      Lock: {pool.lockPeriod}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detalhes do Pool Selecionado */}
        <div className="space-y-4">
          {selectedPool ? (
            <div className="p-6 rounded-lg border border-gray-800">
              <div className="flex items-center space-x-3 mb-6">
                <img src={selectedPool.icon} alt={selectedPool.token} className="w-12 h-12 rounded-full" />
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedPool.token}</h3>
                  <p className="text-sm text-gray-400">Current APY: {selectedPool.apy}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Amount to Stake
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      className="w-full px-4 py-2 bg-cyber-gray-100 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-[#B9E605] focus:border-transparent"
                      placeholder="Enter amount"
                    />
                    <div className="absolute right-3 top-2 text-gray-400">
                      {selectedPool.token}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-cyber-gray-100">
                    <p className="text-sm text-gray-400">Lock Period</p>
                    <p className="text-lg font-semibold text-white">{selectedPool.lockPeriod}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-cyber-gray-100">
                    <p className="text-sm text-gray-400">APY</p>
                    <p className="text-lg font-semibold text-[#B9E605]">{selectedPool.apy}</p>
                  </div>
                </div>

                <button className="w-full py-3 bg-[#B9E605] text-black rounded-lg font-semibold hover:bg-[#a5cc05] transition-colors">
                  Stake {selectedPool.token}
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 rounded-lg border border-gray-800 text-center">
              <FiArrowRight className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-400">Select a staking pool to begin</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 