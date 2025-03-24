import React from 'react'
import { FiTrendingUp, FiStar } from 'react-icons/fi'

export const CreditScore = () => {
  return (
    <div className="bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-[#B9E605]">Credit Score</h3>
        <FiStar className="w-6 h-6 text-gray-900 dark:text-white" />
      </div>
      
      <div className="flex items-center justify-center mb-6">
        <div className="relative">
          <div className="w-32 h-32 rounded-full border-4 border-[#B9E605]/20 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#B9E605]">750</div>
              <div className="text-sm text-gray-400">Score</div>
            </div>
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#B9E605] text-black px-3 py-1 rounded-full text-sm font-semibold">
            Excellent
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FiTrendingUp className="w-5 h-5 text-gray-900 dark:text-white mr-2" />
            <span className="text-gray-400">On-chain Activity</span>
          </div>
          <span className="text-white font-semibold">+50 points</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FiTrendingUp className="w-5 h-5 text-gray-900 dark:text-white mr-2" />
            <span className="text-gray-400">ZK Proofs</span>
          </div>
          <span className="text-white font-semibold">+30 points</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FiTrendingUp className="w-5 h-5 text-gray-900 dark:text-white mr-2" />
            <span className="text-gray-400">Financial Suite</span>
          </div>
          <span className="text-white font-semibold">+20 points</span>
        </div>
      </div>
    </div>
  )
} 