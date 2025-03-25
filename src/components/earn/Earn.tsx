'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiDollarSign, FiLock, FiServer } from 'react-icons/fi';

const earnOptions = [
  {
    id: 'lending',
    title: 'Lending',
    description: 'Lend your assets and earn competitive interest rates',
    icon: FiDollarSign,
    apy: '12.5%',
    tvl: '$5.2M',
    color: 'from-blue-500/20 to-blue-500/10',
    borderColor: 'border-blue-500/20',
    link: '/earn/lending'
  },
  {
    id: 'staking',
    title: 'Staking',
    description: 'Stake your tokens and earn rewards while securing the network',
    icon: FiLock,
    apy: '8.2%',
    tvl: '$3.1M',
    color: 'from-green-500/20 to-green-500/10',
    borderColor: 'border-green-500/20',
    link: '/earn/staking'
  },
  {
    id: 'nodes',
    title: 'Nodes',
    description: 'Run a node and earn rewards for providing network services',
    icon: FiServer,
    apy: '10.5%',
    tvl: '$2.8M',
    color: 'from-purple-500/20 to-purple-500/10',
    borderColor: 'border-purple-500/20',
    link: '/earn/nodes'
  }
];

export function Earn() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {earnOptions.map((option) => (
        <Link key={option.id} href={option.link}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-6 rounded-lg border ${option.borderColor} bg-gradient-to-br ${option.color} cursor-pointer`}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-lg bg-white/10">
                <option.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{option.title}</h3>
                <p className="text-sm text-gray-400">{option.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-white/5">
                <p className="text-sm text-gray-400">APY</p>
                <p className="text-lg font-semibold text-[#B9E605]">{option.apy}</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5">
                <p className="text-sm text-gray-400">TVL</p>
                <p className="text-lg font-semibold text-white">{option.tvl}</p>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
} 