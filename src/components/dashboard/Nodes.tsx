'use client';

import { motion } from 'framer-motion';
import { FiServer, FiCpu, FiHardDrive } from 'react-icons/fi';

interface Node {
  id: string;
  type: string;
  status: string;
  rewards: string;
  apy: string;
  uptime: string;
  logo: string;
}

interface NodeStat {
  type: string;
  price: string;
  rewards: string;
  requirements: {
    cpu: string;
    ram: string;
    storage: string;
    bandwidth: string;
  };
}

const userNodes: Node[] = [
  {
    id: 'NODE-001',
    type: 'Validator',
    status: 'Active',
    rewards: '1,500 CRED',
    apy: '15.5%',
    uptime: '99.9%',
    logo: '/node-1.png'
  },
  {
    id: 'NODE-002',
    type: 'RPC',
    status: 'Active',
    rewards: '2,000 CRED',
    apy: '18.2%',
    uptime: '99.8%',
    logo: '/node-2.png'
  },
  {
    id: 'NODE-003',
    type: 'Storage',
    status: 'Pending',
    rewards: '0 CRED',
    apy: '12.5%',
    uptime: '0%',
    logo: '/node-3.png'
  }
];

const availableNodes: NodeStat[] = [
  {
    type: 'Validator',
    price: '5,000 CRED',
    rewards: '~450 CRED/month',
    requirements: {
      cpu: '8 cores',
      ram: '32 GB',
      storage: '2 TB',
      bandwidth: '1 Gbps'
    }
  },
  {
    type: 'Light',
    price: '1,000 CRED',
    rewards: '~150 CRED/month',
    requirements: {
      cpu: '4 cores',
      ram: '16 GB',
      storage: '1 TB',
      bandwidth: '500 Mbps'
    }
  }
];

export function Nodes() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Left Panel - Your Nodes */}
      <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
        <div className="space-y-4">
          {userNodes.map((node) => (
            <motion.div
              key={node.id}
              whileHover={{ scale: 1.01 }}
              className="bg-black/30 border border-gray-800 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <FiServer className="w-6 h-6 text-[#B9E605]" />
                  <div>
                    <h3 className="font-bold">{node.type} Node</h3>
                    <p className="text-sm text-gray-400">ID: {node.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    node.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {node.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400">Rewards</p>
                  <p className="text-lg font-semibold text-[#B9E605]">{node.rewards}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">APY</p>
                  <p className="text-lg font-semibold text-[#B9E605]">{node.apy}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Uptime</p>
                  <p className="text-lg font-semibold text-[#B9E605]">{node.uptime}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Type</p>
                  <p className="text-lg font-semibold text-[#B9E605]">{node.type}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Panel - Available Nodes */}
      <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#B9E605]">Available Nodes</h2>
        <div className="space-y-4">
          {availableNodes.map((node) => (
            <motion.div
              key={node.type}
              whileHover={{ scale: 1.01 }}
              className="bg-black/30 border border-gray-800 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <FiServer className="w-6 h-6 text-[#B9E605]" />
                  <div>
                    <h3 className="font-bold">{node.type} Node</h3>
                    <p className="text-sm text-gray-400">Price: {node.price}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Monthly Rewards</p>
                  <p className="text-lg font-semibold text-[#B9E605]">{node.rewards}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400">CPU</p>
                  <p className="text-lg font-semibold text-[#B9E605]">{node.requirements.cpu}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">RAM</p>
                  <p className="text-lg font-semibold text-[#B9E605]">{node.requirements.ram}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Storage</p>
                  <p className="text-lg font-semibold text-[#B9E605]">{node.requirements.storage}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Bandwidth</p>
                  <p className="text-lg font-semibold text-[#B9E605]">{node.requirements.bandwidth}</p>
                </div>
              </div>

              <button className="w-full mt-4 py-2 bg-[#B9E605] text-black rounded-lg hover:bg-[#B9E605]/90 transition-colors font-medium">
                Deploy Node
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 
} 