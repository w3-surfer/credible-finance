'use client';

import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { FiDollarSign, FiLock, FiServer } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const earnOptions = [
  {
    id: 'lending',
    title: 'Lending',
    description: 'Lend your assets and earn competitive interest',
    icon: FiDollarSign,
    apy: '12.5%',
    tvl: '$5.2M',
    color: 'from-[#B9E605]/5 to-[#B9E605]/20',
    borderColor: 'border-[#B9E605]/20',
    link: '/earn/lending'
  },
  {
    id: 'staking',
    title: 'Staking',
    description: 'Stake CRED and participate in governance',
    icon: FiLock,
    apy: '15.2%',
    tvl: '$8.7M',
    color: 'from-[#B9E605]/10 to-[#B9E605]/30',
    borderColor: 'border-[#B9E605]/30',
    link: '/earn/staking'
  },
  {
    id: 'nodes',
    title: 'Nodes',
    description: 'Run a node and help maintain the network',
    icon: FiServer,
    apy: '18.7%',
    tvl: '$3.1M',
    color: 'from-[#B9E605]/20 to-[#B9E605]/40',
    borderColor: 'border-[#B9E605]/40',
    link: '/earn/nodes'
  }
];

export default function Earn() {
  const router = useRouter();

  return (
    <Layout
      title="Earn"
      subtitle="Maximize your earnings through lending, staking and our nodes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="max-w-7xl mx-auto">
            {/* Earn Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {earnOptions.map((option) => (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  className={`bg-gradient-to-br ${option.color} backdrop-blur-lg rounded-lg p-4 border ${option.borderColor}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gray-900/50 rounded-lg">
                      <option.icon className="w-6 h-6 text-[#B9E605]" />
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">APY</p>
                      <p className="text-2xl font-bold text-[#B9E605]">{option.apy}</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {option.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-400">TVL</p>
                      <p className="text-lg font-semibold text-white">{option.tvl}</p>
                    </div>
                    <button 
                      className="px-4 py-2 bg-[#B9E605] text-black rounded-lg hover:bg-[#B9E605]/90 transition-colors font-medium"
                      onClick={() => router.push(option.link)}
                    >
                      Start
                    </button>
                  </div>

                  {/* Stats Bar */}
                  <div className="w-full h-2 bg-gray-900/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#B9E605]" 
                      style={{ 
                        width: option.id === 'lending' ? '60%' : 
                               option.id === 'staking' ? '75%' : '45%' 
                      }} 
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-400">Utilization</span>
                    <span className="text-xs text-gray-400">
                      {option.id === 'lending' ? '60%' : 
                       option.id === 'staking' ? '75%' : '45%'}
                    </span>
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