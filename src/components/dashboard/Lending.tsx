'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiArrowUpCircle, FiArrowDownCircle, FiGift } from 'react-icons/fi';

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
    'all',
    'Private Credit',
    'Partner Protocol',
    'Vault'
  ];

  const filteredCompanies = selectedCategory === 'all' 
    ? privateCreditCompanies 
    : privateCreditCompanies.filter(company => company.type === selectedCategory);

  return (
    <div className="flex-1 min-w-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Your Lending Box */}
        <div className="bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300">
          <div className="flex items-center justify-center mb-6">
            <h3 className="text-xl font-bold text-[#B9E605]">Your Lending</h3>
            <FiTrendingUp className="w-6 h-6 text-gray-900 dark:text-white ml-2" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-cyber-gray-100 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-2">Total Supplied</div>
              <div className="text-2xl font-bold text-white">$45,000</div>
              <div className="flex items-center mt-2 text-sm text-[#B9E605]">
                <FiTrendingUp className="w-4 h-4 mr-1 text-gray-900 dark:text-white" />
                <span>+12.3%</span>
              </div>
            </div>
            
            <div className="bg-cyber-gray-100 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-2">Total Borrowed</div>
              <div className="text-2xl font-bold text-white">$12,500</div>
              <div className="flex items-center mt-2 text-sm text-[#B9E605]">
                <FiTrendingUp className="w-4 h-4 mr-1 text-gray-900 dark:text-white" />
                <span>+8.7%</span>
              </div>
            </div>
            
            <div className="bg-cyber-gray-100 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-2">Total Rewards</div>
              <div className="text-2xl font-bold text-white">$2,250</div>
              <div className="flex items-center mt-2 text-sm text-[#B9E605]">
                <FiTrendingUp className="w-4 h-4 mr-1 text-gray-900 dark:text-white" />
                <span>+5.2%</span>
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
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <FiArrowUpCircle className="w-5 h-5 mr-2" />
              Supply
            </button>
            <button
              onClick={() => setSelectedTab('withdraw')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                selectedTab === 'withdraw'
                  ? 'bg-[#B9E605] text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <FiArrowDownCircle className="w-5 h-5 mr-2" />
              Withdraw
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Amount
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-2 bg-cyber-gray-100 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-[#B9E605] focus:border-transparent"
                  placeholder="Enter amount"
                />
                <div className="absolute right-3 top-2 text-gray-400">
                  USDC
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cyber-gray-100 rounded-lg p-4">
                <p className="text-sm text-gray-400">APY</p>
                <p className="text-lg font-semibold text-[#B9E605]">12.5%</p>
              </div>
              <div className="bg-cyber-gray-100 rounded-lg p-4">
                <p className="text-sm text-gray-400">Available</p>
                <p className="text-lg font-semibold text-[#B9E605]">50,000 USDC</p>
              </div>
            </div>

            <button className="w-full py-3 bg-[#B9E605] text-black rounded-lg font-semibold hover:bg-[#a5cc05] transition-colors">
              {selectedTab === 'supply' ? 'Supply USDC' : 'Withdraw USDC'}
            </button>
          </div>
        </div>
      </div>

      {/* Private Credit Companies Table */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg ${
                  selectedCategory === category
                    ? 'bg-[#B9E605] text-black'
                    : 'bg-cyber-gray-100 text-gray-400 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-cyber-gray-200 rounded-lg border border-cyber-green/20 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Company</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Type</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">TVL</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">APY</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Rating</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Verifier</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Tenor</th>
              </tr>
            </thead>
            <tbody>
              {filteredCompanies.map((company) => (
                <tr key={company.name} className="border-b border-gray-700 last:border-0">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img src={company.logo} alt={company.name} className="w-8 h-8 rounded-full mr-3" />
                      <span className="text-white">{company.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-400">{company.type}</td>
                  <td className="px-6 py-4 text-gray-400">{company.tvl}</td>
                  <td className="px-6 py-4 text-[#B9E605]">{company.apy}</td>
                  <td className="px-6 py-4 text-gray-400">{company.rating}</td>
                  <td className="px-6 py-4 text-gray-400">{company.verifier}</td>
                  <td className="px-6 py-4 text-gray-400">{company.tenor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 