import React from 'react'
import { FiActivity, FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi'

export const Transactions = () => {
  return (
    <div className="bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-[#B9E605]">Transactions</h3>
        <FiActivity className="w-6 h-6 text-[#B9E605]" />
      </div>

      <div className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">$12,500</div>
          <div className="text-sm text-gray-400">Last 24h</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cyber-gray-100 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Income</span>
              <FiArrowUpRight className="w-4 h-4 text-[#B9E605]" />
            </div>
            <div className="text-lg font-semibold text-white">$8,250</div>
            <div className="text-xs text-gray-400">+12% vs last 24h</div>
          </div>
          
          <div className="bg-cyber-gray-100 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Expenses</span>
              <FiArrowDownRight className="w-4 h-4 text-[#B9E605]" />
            </div>
            <div className="text-lg font-semibold text-white">$4,250</div>
            <div className="text-xs text-gray-400">-5% vs last 24h</div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-400">Net Flow</span>
            <span className="text-[#B9E605]">+$4,000</span>
          </div>
          <div className="w-full bg-cyber-gray-100 rounded-full h-2">
            <div className="bg-[#B9E605] h-2 rounded-full" style={{ width: '66%' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
} 