'use client';

import { Layout } from '@/components/Layout';
import { AccountMenu } from '@/components/AccountMenu';
import PageTitle from '@/components/PageTitle';
import { FiUsers, FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { useState } from 'react';

interface Beneficiary {
  id: number;
  name: string;
  wallet: string;
  relationship: string;
  percentage: number;
}

export default function Beneficiary() {
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([
    {
      id: 1,
      name: 'John Doe',
      wallet: '8xJ4v...9Ykm2',
      relationship: 'Family',
      percentage: 50
    },
    {
      id: 2,
      name: 'Jane Smith',
      wallet: '3mN7x...2Pqr5',
      relationship: 'Friend',
      percentage: 50
    }
  ]);

  // Função para adicionar um novo beneficiário
  const addBeneficiary = () => {
    const newBeneficiary: Beneficiary = {
      id: beneficiaries.length + 1,
      name: '',
      wallet: '',
      relationship: '',
      percentage: 0
    };
    setBeneficiaries([...beneficiaries, newBeneficiary]);
  };

  // Função para remover um beneficiário
  const removeBeneficiary = (id: number) => {
    setBeneficiaries(beneficiaries.filter(b => b.id !== id));
  };

  // Função para editar um beneficiário
  const editBeneficiary = (id: number, updatedData: Partial<Beneficiary>) => {
    setBeneficiaries(beneficiaries.map(b => 
      b.id === id ? { ...b, ...updatedData } : b
    ));
  };

  return (
    <>
      <PageTitle
        title="Beneficiary"
        subtitle="Add and manage beneficiaries for your account"
      />
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Menu Lateral */}
            <div className="md:col-span-1">
              <AccountMenu />
            </div>

            {/* Conteúdo Principal */}
            <div className="md:col-span-3">
              <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#B9E605]/10 rounded-lg">
                      <FiUsers className="w-6 h-6 text-[#B9E605]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Beneficiaries</h2>
                      <p className="text-gray-400">Manage your account beneficiaries</p>
                    </div>
                  </div>
                  <button 
                    onClick={addBeneficiary}
                    className="flex items-center gap-2 px-4 py-2 bg-[#B9E605] text-black rounded-lg hover:bg-[#B9E605]/90 transition-colors"
                  >
                    <FiPlus className="w-5 h-5" />
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
                          <p className="text-sm text-gray-400">Wallet: {beneficiary.wallet}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => editBeneficiary(beneficiary.id, { name: 'Updated Name' })}
                            className="p-2 text-gray-400 hover:text-white transition-colors"
                          >
                            <FiEdit2 className="w-5 h-5" />
                          </button>
                          <button 
                            onClick={() => removeBeneficiary(beneficiary.id)}
                            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <FiTrash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-400">Relationship</p>
                          <p className="font-medium">{beneficiary.relationship}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Percentage</p>
                          <p className="font-medium text-[#B9E605]">{beneficiary.percentage}%</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
} 