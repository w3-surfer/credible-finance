'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiHardDrive, FiWifi, FiDownload } from 'react-icons/fi';
import { Navigation } from './Navigation';

interface Node {
  id: string;
  type: string;
  status: 'active' | 'inactive';
  rewards: string;
  apy: string;
  uptime: string;
  logo: string;
}

interface NodeStat {
  cpu: string;
  ram: string;
  storage: string;
  bandwidth: string;
}

const userNodes: Node[] = [
  {
    id: '1',
    type: 'Validator Node',
    status: 'active',
    rewards: '500 CRED',
    apy: '12.5%',
    uptime: '99.9%',
    logo: '/cred logo.png'
  },
  {
    id: '2',
    type: 'Storage Node',
    status: 'active',
    rewards: '300 CRED',
    apy: '8.2%',
    uptime: '99.8%',
    logo: '/cred logo.png'
  },
  {
    id: '3',
    type: 'Compute Node',
    status: 'inactive',
    rewards: '0 CRED',
    apy: '10.5%',
    uptime: '0%',
    logo: '/cred logo.png'
  }
];

const availableNodes: { type: string; price: string; rewards: string; requirements: NodeStat }[] = [
  {
    type: 'Validator Node',
    price: '10,000 CRED',
    rewards: '500 CRED/month',
    requirements: {
      cpu: '8 cores',
      ram: '16GB',
      storage: '1TB SSD',
      bandwidth: '1Gbps'
    }
  },
  {
    type: 'Storage Node',
    price: '5,000 CRED',
    rewards: '300 CRED/month',
    requirements: {
      cpu: '4 cores',
      ram: '8GB',
      storage: '5TB SSD',
      bandwidth: '500Mbps'
    }
  }
];

export function Nodes() {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  return (
    <div className="flex-1 min-w-0">
      <Navigation />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lista de Nodes do Usuário */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white mb-4">Your Nodes</h2>
          <div className="space-y-4">
            {userNodes.map((node) => (
              <motion.div
                key={node.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-lg border ${
                  selectedNode?.id === node.id
                    ? 'border-[#B9E605] bg-[#B9E605]/10'
                    : 'border-gray-800'
                } cursor-pointer`}
                onClick={() => setSelectedNode(node)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={node.logo} alt={node.type} className="w-8 h-8 rounded-full" />
                    <div>
                      <h3 className="font-semibold text-white">{node.type}</h3>
                      <p className="text-sm text-gray-400">Status: {node.status}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-[#B9E605]">
                      APY: {node.apy}
                    </p>
                    <p className="text-sm text-gray-400">
                      Uptime: {node.uptime}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Nodes Disponíveis */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white mb-4">Available Nodes</h2>
          <div className="space-y-4">
            {availableNodes.map((node) => (
              <motion.div
                key={node.type}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 rounded-lg border border-gray-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-white">{node.type}</h3>
                    <p className="text-sm text-gray-400">Price: {node.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-[#B9E605]">
                      Rewards: {node.rewards}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-cyber-gray-100">
                    <div className="flex items-center space-x-2">
                      <FiCpu className="text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-400">CPU</p>
                        <p className="text-sm font-medium text-white">{node.requirements.cpu}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-cyber-gray-100">
                    <div className="flex items-center space-x-2">
                      <FiHardDrive className="text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-400">Storage</p>
                        <p className="text-sm font-medium text-white">{node.requirements.storage}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-cyber-gray-100">
                    <div className="flex items-center space-x-2">
                      <FiWifi className="text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-400">Bandwidth</p>
                        <p className="text-sm font-medium text-white">{node.requirements.bandwidth}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-cyber-gray-100">
                    <div className="flex items-center space-x-2">
                      <FiDownload className="text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-400">RAM</p>
                        <p className="text-sm font-medium text-white">{node.requirements.ram}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-4 py-3 bg-[#B9E605] text-black rounded-lg font-semibold hover:bg-[#a5cc05] transition-colors">
                  Deploy Node
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 