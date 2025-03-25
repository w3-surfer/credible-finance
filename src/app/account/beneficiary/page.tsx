'use client';

import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { AccountMenu } from '@/components/dashboard/AccountMenu';
import { FiUsers, FiPlus } from 'react-icons/fi';

interface Beneficiary {
  id: string;
  name: string;
  email: string;
  relationship: string;
  percentage: number;
}

export default function Beneficiary() {
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      relationship: 'Spouse',
      percentage: 50
    },
    {
      id: '2',
      name: 'Jane Doe',
      email: 'jane@example.com',
      relationship: 'Child',
      percentage: 50
    }
  ]);

  const addBeneficiary = () => {
    // Implementar lógica de adicionar beneficiário
  };

  return (
    <Layout title="Beneficiary" subtitle="Add and manage beneficiaries for your account">
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
                  <div key={beneficiary.id} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div>
                      <h3 className="font-semibold">{beneficiary.name}</h3>
                      <p className="text-sm text-gray-400">{beneficiary.email}</p>
                      <p className="text-sm text-gray-400">{beneficiary.relationship}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-[#B9E605]">{beneficiary.percentage}%</p>
                      <p className="text-sm text-gray-400">Allocation</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 