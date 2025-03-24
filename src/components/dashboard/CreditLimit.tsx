import React from 'react'
import { FiCreditCard, FiTrendingUp, FiTrendingDown } from 'react-icons/fi'

export const CreditLimit = () => {
  return (
    <div className="bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-[#B9E605]">Credit Limit</h3>
        <FiCreditCard className="w-6 h-6 text-gray-900 dark:text-white" />
      </div>
      
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-2">$25,000</div>
          <div className="text-sm text-gray-400">Available Limit</div>
        </div>

        <div className="w-full bg-cyber-gray-100 rounded-full h-2">
          <div className="bg-[#B9E605] h-2 rounded-full" style={{ width: '75%' }}></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cyber-gray-100 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Used</span>
              <FiTrendingUp className="w-4 h-4 text-gray-900 dark:text-white" />
            </div>
            <div className="text-lg font-semibold text-white">$18,750</div>
            <div className="text-xs text-gray-400">75% of limit</div>
          </div>
          
          <div className="bg-cyber-gray-100 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Available</span>
              <FiTrendingDown className="w-4 h-4 text-gray-900 dark:text-white" />
            </div>
            <div className="text-lg font-semibold text-white">$6,250</div>
            <div className="text-xs text-gray-400">25% remaining</div>
          </div>
        </div>
      </div>
    </div>
  )
} 