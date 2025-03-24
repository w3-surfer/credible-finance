import React from 'react'

export const Cards = () => {
  return (
    <div className="bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-cyber-green">Cards</h2>
        <div className="text-sm text-gray-400">2 Active</div>
      </div>
      
      <div className="space-y-4">
        <div className="relative p-4 bg-gradient-to-r from-cyber-gray-100 to-cyber-gray-200 rounded-lg border border-cyber-green/20">
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 rounded-full bg-cyber-green/20 flex items-center justify-center">
              <span className="text-cyber-green">💳</span>
            </div>
          </div>
          <div className="text-sm text-gray-400 mb-2">Primary Card</div>
          <div className="text-xl font-bold text-white mb-4">**** **** **** 4242</div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Expires</span>
            <span className="text-white">12/25</span>
          </div>
        </div>

        <div className="relative p-4 bg-gradient-to-r from-cyber-gray-100 to-cyber-gray-200 rounded-lg border border-cyber-green/20">
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 rounded-full bg-cyber-green/20 flex items-center justify-center">
              <span className="text-cyber-green">💳</span>
            </div>
          </div>
          <div className="text-sm text-gray-400 mb-2">Backup Card</div>
          <div className="text-xl font-bold text-white mb-4">**** **** **** 8888</div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Expires</span>
            <span className="text-white">06/26</span>
          </div>
        </div>
      </div>

      <button className="w-full mt-6 bg-cyber-green text-cyber-dark font-bold py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300">
        Add New Card
      </button>
    </div>
  )
} 