'use client';

import { FiPlusCircle, FiTrash2, FiCopy, FiCheck } from 'react-icons/fi';
import { useState, useEffect, useMemo } from 'react';

interface Beneficiary {
  id: string;
  name: string;
  relationship: string;
  percentage: number;
  order: number;
}

interface BeneficiariesProps {
  beneficiaries: Beneficiary[];
  onPercentageChange: (id: string, percentage: number) => void;
  onAdd: () => void;
  onRemove: (id: string) => void;
}

export function Beneficiaries({ beneficiaries, onPercentageChange, onAdd, onRemove }: BeneficiariesProps) {
  const [localPercentages, setLocalPercentages] = useState<{ [key: string]: number }>({});
  const [isUpdating, setIsUpdating] = useState<{ [key: string]: boolean }>({});

  // Inicializa as porcentagens locais quando os beneficiários mudam
  useEffect(() => {
    const initialPercentages = beneficiaries.reduce((acc, beneficiary) => {
      acc[beneficiary.id] = beneficiary.percentage;
      return acc;
    }, {} as { [key: string]: number });
    setLocalPercentages(initialPercentages);
  }, [beneficiaries]);

  const handlePercentageChange = (id: string, newPercentage: number) => {
    // Validação de entrada
    if (newPercentage < 0 || newPercentage > 100) return;

    // Atualiza a porcentagem local imediatamente para feedback visual
    setLocalPercentages(prev => ({
      ...prev,
      [id]: newPercentage
    }));

    // Indica que está atualizando
    setIsUpdating(prev => ({
      ...prev,
      [id]: true
    }));
    
    // Chama a função do pai para atualizar o estado global
    onPercentageChange(id, newPercentage);

    // Remove o indicador de atualização após um delay
    setTimeout(() => {
      setIsUpdating(prev => ({
        ...prev,
        [id]: false
      }));
    }, 500);
  };

  // Ordena os beneficiários pela ordem usando useMemo para melhor performance
  const sortedBeneficiaries = useMemo(() => 
    [...beneficiaries].sort((a, b) => a.order - b.order),
    [beneficiaries]
  );

  return (
    <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Beneficiaries</h2>
        <button 
          onClick={onAdd}
          className="flex items-center gap-2 px-4 py-2 bg-[#B9E605] text-black rounded-lg hover:bg-[#B9E605]/90 transition-colors"
          aria-label="Add new beneficiary"
        >
          <FiPlusCircle className="w-5 h-5" />
          Add Beneficiary
        </button>
      </div>

      <div className="space-y-4">
        {sortedBeneficiaries.map((beneficiary) => (
          <div
            key={`${beneficiary.id}-${beneficiary.order}`}
            className="bg-black/30 border border-gray-800 rounded-lg p-6 transition-all duration-300"
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
                  aria-label={`Remove ${beneficiary.name}`}
                >
                  <FiTrash2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <label 
                  htmlFor={`percentage-${beneficiary.id}`}
                  className="text-sm text-gray-400"
                >
                  Percentage
                </label>
                <span 
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isUpdating[beneficiary.id] ? 'text-[#B9E605]' : ''
                  }`}
                >
                  {beneficiary.percentage}%
                </span>
              </div>
              <input
                id={`percentage-${beneficiary.id}`}
                type="range"
                min="0"
                max="100"
                value={localPercentages[beneficiary.id] || beneficiary.percentage}
                onChange={(e) => handlePercentageChange(beneficiary.id, parseInt(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer transition-all duration-300
                  [&::-webkit-slider-thumb]:appearance-none 
                  [&::-webkit-slider-thumb]:w-4 
                  [&::-webkit-slider-thumb]:h-4 
                  [&::-webkit-slider-thumb]:rounded-full 
                  [&::-webkit-slider-thumb]:bg-[#B9E605] 
                  [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-moz-range-thumb]:w-4 
                  [&::-moz-range-thumb]:h-4 
                  [&::-moz-range-thumb]:rounded-full 
                  [&::-moz-range-thumb]:bg-[#B9E605] 
                  [&::-moz-range-thumb]:border-0 
                  [&::-moz-range-thumb]:cursor-pointer"
                aria-label={`Adjust percentage for ${beneficiary.name}`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={beneficiary.percentage}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 