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
        <h2 className="text-2xl font-bold mb-6 text-center text-[#B9E605]">Your Nodes</h2>
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
                    <p className="text-sm text-gray-400">ID: #{node.id}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  node.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {node.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400">Uptime</p>
                  <p className="font-bold">{node.uptime}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total Rewards</p>
                  <p className="font-bold">{node.rewards}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Next Reward</p>
                  <p className="font-bold">{node.apy}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Panel - Available Nodes */}
      <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#B9E605]">Available Nodes</h2>
        <div className="space-y-6">
          {availableNodes.map((node) => (
            <div key={node.type} className="bg-black/30 border border-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <FiServer className="w-6 h-6 text-[#B9E605]" />
                  <h3 className="font-bold">{node.type} Node</h3>
                </div>
                <div className="text-right">
                  <p className="text-[#B9E605] font-bold">{node.price}</p>
                  <p className="text-sm text-gray-400">{node.rewards}</p>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="font-bold mb-2">Requirements</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <FiCpu className="text-gray-400" />
                    <span>{node.requirements.cpu}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiHardDrive className="text-gray-400" />
                    <span>{node.requirements.ram}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiHardDrive className="text-gray-400" />
                    <span>{node.requirements.storage}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiServer className="text-gray-400" />
                    <span>{node.requirements.bandwidth}</span>
                  </div>
                </div>
              </div>
              <button className="w-full px-4 py-2 bg-[#B9E605] text-black font-bold rounded-lg hover:bg-[#B9E605]/90 transition-colors">
                Purchase Node
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 