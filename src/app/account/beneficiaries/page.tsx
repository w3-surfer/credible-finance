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
}

export default function BeneficiariesPage() {
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([
    { id: '1', name: 'John Doe', relationship: 'Spouse', percentage: 50 },
    { id: '2', name: 'Jane Doe', relationship: 'Child', percentage: 30 },
    { id: '3', name: 'Bob Doe', relationship: 'Parent', percentage: 20 }
  ]);

  const handlePercentageChange = (id: string, newPercentage: number) => {
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
          percentage: Math.max(0, Math.min(100, beneficiary.percentage - adjustment))
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
            <Beneficiaries />
          </div>
        </div>
      </div>
    </Layout>
  );
} 