'use client';

import { useState } from 'react';
import { FiPlusCircle, FiTrash2, FiCopy, FiCheck } from 'react-icons/fi';

interface Beneficiary {
  id: string;
  name: string;
  relationship: string;
  percentage: number;
}

interface BeneficiariesProps {
  beneficiaries: Beneficiary[];
  onPercentageChange: (id: string, percentage: number) => void;
  onAdd: () => void;
  onRemove: (id: string) => void;
}

export function Beneficiaries({ beneficiaries, onPercentageChange, onAdd, onRemove }: BeneficiariesProps) {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  const handleRangeChange = (id: string, value: string) => {
    const newPercentage = parseInt(value);
    if (!isNaN(newPercentage)) {
      onPercentageChange(id, newPercentage);
    }
  };

  return (
    <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Beneficiaries</h2>
        <button 
          onClick={onAdd}
          className="flex items-center gap-2 px-4 py-2 bg-[#B9E605] text-black rounded-lg hover:bg-[#B9E605]/90 transition-colors"
        >
          <FiPlusCircle className="w-5 h-5" />
          Add Beneficiary
        </button>
      </div>

      <div className="space-y-4">
        {beneficiaries.map((beneficiary) => (
          <div
            key={beneficiary.id}
            className="bg-black/30 border border-gray-800 rounded-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">{beneficiary.name}</h3>
                <p className="text-sm text-gray-400">
                  {beneficiary.relationship}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => onRemove(beneficiary.id)}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <FiTrash2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm text-gray-400">Percentage</label>
                <span className="text-sm font-medium">{beneficiary.percentage}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={beneficiary.percentage}
                onChange={(e) => handleRangeChange(beneficiary.id, e.target.value)}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#B9E605] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#B9E605] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 