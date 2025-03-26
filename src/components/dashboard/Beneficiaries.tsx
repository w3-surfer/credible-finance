'use client';

import { useState } from 'react';
import { FiPlusCircle, FiTrash2, FiCopy, FiCheck } from 'react-icons/fi';

interface Beneficiary {
  id: number;
  name: string;
  address: string;
  percentage: number;
  type: 'family' | 'friend' | 'charity';
}

export function Beneficiaries() {
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([
    {
      id: 1,
      name: 'John Doe',
      address: '0x1234...5678',
      percentage: 50,
      type: 'family'
    },
    {
      id: 2,
      name: 'Jane Smith',
      address: '0x8765...4321',
      percentage: 30,
      type: 'friend'
    },
    {
      id: 3,
      name: 'Charity Fund',
      address: '0x2468...1357',
      percentage: 20,
      type: 'charity'
    }
  ]);

  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  // Função para adicionar um novo beneficiário
  const addBeneficiary = () => {
    const newBeneficiary: Beneficiary = {
      id: beneficiaries.length + 1,
      name: 'New Beneficiary',
      address: '0x0000...0000',
      percentage: 0,
      type: 'family'
    };
    setBeneficiaries([...beneficiaries, newBeneficiary]);
  };

  // Função para remover um beneficiário
  const removeBeneficiary = (id: number) => {
    setBeneficiaries(beneficiaries.filter(beneficiary => beneficiary.id !== id));
  };

  // Função para atualizar a porcentagem de um beneficiário
  const updatePercentage = (id: number, newPercentage: number) => {
    setBeneficiaries(beneficiaries.map(beneficiary => 
      beneficiary.id === id ? { ...beneficiary, percentage: newPercentage } : beneficiary
    ));
  };

  return (
    <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Beneficiaries</h2>
        <button 
          onClick={addBeneficiary}
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
                  {beneficiary.type.charAt(0).toUpperCase() + beneficiary.type.slice(1)} • {beneficiary.address}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  className="p-2 text-gray-400 hover:text-gray-300 transition-colors"
                  onClick={() => handleCopyAddress(beneficiary.address)}
                >
                  {copiedAddress === beneficiary.address ? (
                    <FiCheck className="w-5 h-5 text-[#B9E605]" />
                  ) : (
                    <FiCopy className="w-5 h-5" />
                  )}
                </button>
                <button 
                  onClick={() => removeBeneficiary(beneficiary.id)}
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
                onChange={(e) => updatePercentage(beneficiary.id, parseInt(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 