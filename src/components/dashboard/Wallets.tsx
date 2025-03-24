import React from 'react'

export const Wallets = () => {
  return (
    <div className="bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-cyber-green">Wallets</h2>
        <div className="text-sm text-gray-400">3 Connected</div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-cyber-gray-100 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-cyber-green/20 flex items-center justify-center">
              <span className="text-cyber-green">👛</span>
            </div>
            <div>
              <div className="text-sm font-medium text-white">Phantom</div>
              <div className="text-xs text-gray-400">Main Wallet</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-cyber-green">$12,500</div>
            <div className="text-xs text-gray-400">SOL: 25.5</div>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-cyber-gray-100 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-cyber-green/20 flex items-center justify-center">
              <span className="text-cyber-green">🔒</span>
            </div>
            <div>
              <div className="text-sm font-medium text-white">Solflare</div>
              <div className="text-xs text-gray-400">Staking Wallet</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-cyber-green">$8,250</div>
            <div className="text-xs text-gray-400">SOL: 16.5</div>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-cyber-gray-100 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-cyber-green/20 flex items-center justify-center">
              <span className="text-cyber-green">💎</span>
            </div>
            <div>
              <div className="text-sm font-medium text-white">Backpack</div>
              <div className="text-xs text-gray-400">Trading Wallet</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-cyber-green">$5,750</div>
            <div className="text-xs text-gray-400">SOL: 11.5</div>
          </div>
        </div>
      </div>

      <button className="w-full mt-6 bg-cyber-gray-100 text-cyber-green font-bold py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300">
        Connect New Wallet
      </button>
    </div>
  )
} 