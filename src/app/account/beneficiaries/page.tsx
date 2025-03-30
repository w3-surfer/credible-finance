'use client';

import { Layout } from '@/components/Layout';
import { AccountMenu } from '@/components/dashboard';
import { Beneficiaries } from '@/components/dashboard/Beneficiaries';
import { useState } from 'react';

interface Beneficiary {
  id: string;
  name: string;
  relationship: string;
  percentage: number;
  order: number;
}

export default function BeneficiariesPage() {
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([
    { id: '1', name: 'John Doe', relationship: 'Spouse', percentage: 50, order: 1 },
    { id: '2', name: 'Jane Doe', relationship: 'Child', percentage: 30, order: 2 },
    { id: '3', name: 'Bob Doe', relationship: 'Parent', percentage: 20, order: 3 }
  ]);

  const handlePercentageChange = (id: string, newPercentage: number) => {
    // Garante que a nova porcentagem seja um número inteiro
    newPercentage = Math.round(newPercentage);

    const updatedBeneficiaries = beneficiaries.map((beneficiary: Beneficiary) => {
      if (beneficiary.id === id) {
        return { ...beneficiary, percentage: newPercentage };
      }
      return beneficiary;
    });

    // Calcula a diferença entre a nova porcentagem e a antiga
    const oldPercentage = beneficiaries.find((b: Beneficiary) => b.id === id)?.percentage || 0;
    const difference = newPercentage - oldPercentage;

    // Ajusta as outras porcentagens proporcionalmente
    const otherBeneficiaries = updatedBeneficiaries.filter((b: Beneficiary) => b.id !== id);
    const totalOtherPercentage = otherBeneficiaries.reduce((sum: number, b: Beneficiary) => sum + b.percentage, 0);

    if (totalOtherPercentage > 0) {
      const adjustedBeneficiaries = otherBeneficiaries.map((beneficiary: Beneficiary) => {
        const proportion = beneficiary.percentage / totalOtherPercentage;
        const adjustment = difference * proportion;
        return {
          ...beneficiary,
          percentage: Math.round(Math.max(0, Math.min(100, beneficiary.percentage - adjustment)))
        };
      });

      // Garante que a soma seja exatamente 100%
      const total = newPercentage + adjustedBeneficiaries.reduce((sum: number, b: Beneficiary) => sum + b.percentage, 0);
      const roundingError = 100 - total;
      
      if (roundingError !== 0) {
        // Ajusta o último beneficiário para compensar erros de arredondamento
        adjustedBeneficiaries[adjustedBeneficiaries.length - 1].percentage += roundingError;
      }

      setBeneficiaries([
        ...updatedBeneficiaries.filter((b: Beneficiary) => b.id === id),
        ...adjustedBeneficiaries
      ]);
    } else {
      // Se não houver outros beneficiários, apenas atualiza o atual
      setBeneficiaries(updatedBeneficiaries);
    }
  };

  const handleAddBeneficiary = () => {
    const newId = String(beneficiaries.length + 1);
    const newBeneficiary: Beneficiary = {
      id: newId,
      name: 'New Beneficiary',
      relationship: 'Other',
      percentage: 0,
      order: beneficiaries.length + 1
    };
    setBeneficiaries([...beneficiaries, newBeneficiary]);
  };

  const handleRemoveBeneficiary = (id: string) => {
    const beneficiaryToRemove = beneficiaries.find(b => b.id === id);
    if (!beneficiaryToRemove) return;

    const remainingBeneficiaries = beneficiaries.filter(b => b.id !== id);
    const percentageToDistribute = beneficiaryToRemove.percentage;

    // Distribui a porcentagem do beneficiário removido entre os restantes
    const adjustedBeneficiaries = remainingBeneficiaries.map(beneficiary => {
      const proportion = beneficiary.percentage / (100 - percentageToDistribute);
      return {
        ...beneficiary,
        percentage: Math.round(beneficiary.percentage + (percentageToDistribute * proportion))
      };
    });

    // Ajusta o último beneficiário para garantir que a soma seja 100%
    const total = adjustedBeneficiaries.reduce((sum, b) => sum + b.percentage, 0);
    if (total !== 100) {
      adjustedBeneficiaries[adjustedBeneficiaries.length - 1].percentage += (100 - total);
    }

    setBeneficiaries(adjustedBeneficiaries);
  };

  return (
    <Layout
      title="Beneficiaries"
      subtitle="Manage your beneficiaries and their details"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu Lateral */}
          <div className="md:col-span-1">
            <AccountMenu />
          </div>
          {/* Conteúdo Principal */}
          <div className="md:col-span-3">
            <Beneficiaries 
              beneficiaries={beneficiaries}
              onPercentageChange={handlePercentageChange}
              onAdd={handleAddBeneficiary}
              onRemove={handleRemoveBeneficiary}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
} 