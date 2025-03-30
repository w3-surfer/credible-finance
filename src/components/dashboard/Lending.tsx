'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const privateCreditCompanies = [
  {
    name: 'Growth Catalyst',
    type: 'Private Credit',
    tvl: '4,534,914 USD',
    apy: '16%',
    rating: 'BB',
    verifier: 'Credora',
    tenor: 'Flexible',
    logo: '/Growth Catalyst.png'
  },
  {
    name: 'Damia Capital',
    type: 'Private Credit',
    tvl: '3,864,927 USD',
    apy: '16%',
    rating: 'BB',
    verifier: 'Credora',
    tenor: 'Flexible',
    logo: '/Damia capital.png'
  },
  {
    name: 'Impact Fund',
    type: 'Private Credit',
    tvl: '1,614,969 USD',
    apy: '16%',
    rating: 'BB',
    verifier: 'Credora',
    tenor: 'Flexible',
    logo: '/ImpactFund.png'
  },
  {
    name: 'DeCharge - Yolo Bikes',
    type: 'Private Credit',
    tvl: '638,688 USD',
    apy: '20%',
    rating: 'Unrated',
    verifier: 'Unrated',
    tenor: '1080 Days',
    logo: '/dashboard-pool-img.png'
  },
  {
    name: 'PayFi Vault',
    type: 'Vault',
    tvl: '178,577 USD',
    apy: '20%',
    rating: 'Unrated',
    verifier: 'Unrated',
    tenor: 'Flexible',
    logo: '/usdc-logo.png'
  },
  {
    name: 'GelCredit Healthcare',
    type: 'Private Credit',
    tvl: '57,935 USD',
    apy: '20%',
    rating: 'Unrated',
    verifier: 'Unrated',
    tenor: 'Flexible',
    logo: '/gelcredit.png'
  },
  {
    name: 'Etherfuse Cetes',
    type: 'Partner Protocol',
    tvl: '10,963 USD',
    apy: '12%',
    rating: 'BBB-',
    verifier: 'Fitch',
    tenor: '30 Days',
    logo: '/etherfuse.png'
  },
  {
    name: 'Plume Pool',
    type: 'Private Credit',
    tvl: '0 USD',
    apy: '16%',
    rating: 'Unrated',
    verifier: 'Unrated',
    tenor: 'Flexible',
    logo: '/plume.png'
  }
];

const pools = [
  {
    token: 'USDC',
    apy: '12.5%',
    tvl: '$5.2M',
    available: '2,500 USDC',
    icon: '/usdc-logo.png'
  },
  {
    token: 'SOL',
    apy: '8.2%',
    tvl: '$3.1M',
    available: '150 SOL',
    icon: '/sol-logo.png'
  },
  {
    token: 'CRED',
    apy: '15.8%',
    tvl: '$2.8M',
    available: '50,000 CRED',
    icon: '/cred logo.png'
  }
];

export function Lending() {
  const [selectedTab, setSelectedTab] = useState('supply');
  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'Private Credit', name: 'Private Credit' },
    { id: 'Partner Protocol', name: 'Partner Protocol' },
    { id: 'Vault', name: 'Vault' }
  ];

  const filteredCompanies = selectedCategory === 'all' 
    ? privateCreditCompanies 
    : privateCreditCompanies.filter(company => company.type === selectedCategory);

  return (
    <div className="flex-1 min-w-0">
      {/* Private Credit Box */}
      <div className="bg-black/50 border border-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-2 text-center text-[#B9E605]">Private Credit</h2>
        <p className="text-gray-400 text-center mb-6">NBFIs, Bonds and T-Bills</p>
        
        {/* Category Menu */}
        <div className="mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#B9E605] text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Private Credit Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-center text-gray-400 border-b border-gray-800">
                <th className="pb-4 w-[20%]">Company</th>
                <th className="pb-4 w-[12%]">Type</th>
                <th className="pb-4 w-[15%]">TVL</th>
                <th className="pb-4 w-[10%]">APY</th>
                <th className="pb-4 w-[10%]">Rating</th>
                <th className="pb-4 w-[15%]">Verifier</th>
                <th className="pb-4 w-[18%]">Tenor</th>
              </tr>
            </thead>
            <tbody>
              {filteredCompanies.map((company) => (
                <tr key={company.name} className="border-b border-gray-800">
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="w-6 h-6 rounded-full"
                        />
                      </div>
                      <span className="font-medium text-sm">{company.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-center text-sm">{company.type}</td>
                  <td className="py-4 text-center text-sm">{company.tvl}</td>
                  <td className="py-4 text-center text-sm">{company.apy}</td>
                  <td className="py-4 text-center text-sm">{company.rating}</td>
                  <td className="py-4 text-center text-sm">{company.verifier}</td>
                  <td className="py-4 text-center text-sm">{company.tenor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lending Pools */}
      <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#B9E605]">Lending Pools</h2>
        
        {/* Tabs */}
        <div className="flex gap-2 mb-6 justify-center">
          <button
            onClick={() => setSelectedTab('supply')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedTab === 'supply'
                ? 'bg-[#B9E605] text-black'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Supply
          </button>
          <button
            onClick={() => setSelectedTab('withdraw')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedTab === 'withdraw'
                ? 'bg-[#B9E605] text-black'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Withdraw
          </button>
        </div>

        <div className="grid gap-4">
          {pools.map((pool) => (
            <motion.div
              key={pool.token}
              whileHover={{ scale: 1.01 }}
              className="bg-black/30 border border-gray-800 rounded-lg p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={pool.icon}
                    alt={pool.token}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">{pool.token}</h3>
                    <p className="text-sm text-gray-400">Available: {pool.available}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#B9E605] font-bold">{pool.apy} APY</p>
                  <p className="text-sm text-gray-400">TVL: {pool.tvl}</p>
                </div>
              </div>
              {/* Input field based on selected tab */}
              <div className="mt-4">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder={`Enter amount to ${selectedTab}`}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#B9E605]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 