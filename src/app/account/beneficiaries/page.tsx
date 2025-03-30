'use client';

import { Layout } from '@/components/Layout';
import { AccountMenu } from '@/components/dashboard';
import { Beneficiaries } from '@/components/dashboard/Beneficiaries';
import { useReducer, useCallback } from 'react';

interface Beneficiary {
  id: string;
  name: string;
  relationship: string;
  percentage: number;
  order: number;
}

type BeneficiaryAction = 
  | { type: 'UPDATE_PERCENTAGE'; id: string; percentage: number }
  | { type: 'ADD_BENEFICIARY' }
  | { type: 'REMOVE_BENEFICIARY'; id: string }
  | { type: 'REORDER_BENEFICIARIES' };

function beneficiaryReducer(state: Beneficiary[], action: BeneficiaryAction): Beneficiary[] {
  switch (action.type) {
    case 'UPDATE_PERCENTAGE': {
      const { id, percentage } = action;
      const beneficiary = state.find(b => b.id === id);
      if (!beneficiary) return state;

      const oldPercentage = beneficiary.percentage;
      const difference = percentage - oldPercentage;
      const otherBeneficiaries = state.filter(b => b.id !== id);
      const totalOtherPercentage = otherBeneficiaries.reduce((sum, b) => sum + b.percentage, 0);

      if (totalOtherPercentage > 0) {
        const adjustedBeneficiaries = otherBeneficiaries.map(b => {
          const proportion = b.percentage / totalOtherPercentage;
          const adjustment = difference * proportion;
          return {
            ...b,
            percentage: Math.max(0, Math.min(100, Math.round(b.percentage - adjustment)))
          };
        });

        const total = percentage + adjustedBeneficiaries.reduce((sum, b) => sum + b.percentage, 0);
        const roundingError = 100 - total;
        
        if (roundingError !== 0) {
          adjustedBeneficiaries[adjustedBeneficiaries.length - 1].percentage += roundingError;
        }

        return [
          { ...beneficiary, percentage },
          ...adjustedBeneficiaries
        ];
      }

      return state.map(b => 
        b.id === id ? { ...b, percentage } : b
      );
    }

    case 'ADD_BENEFICIARY': {
      const newId = String(state.length + 1);
      const newBeneficiary: Beneficiary = {
        id: newId,
        name: 'New Beneficiary',
        relationship: 'Other',
        percentage: 0,
        order: state.length + 1
      };
      return [...state, newBeneficiary];
    }

    case 'REMOVE_BENEFICIARY': {
      const beneficiaryToRemove = state.find(b => b.id === action.id);
      if (!beneficiaryToRemove) return state;

      const remainingBeneficiaries = state.filter(b => b.id !== action.id);
      const percentageToDistribute = beneficiaryToRemove.percentage;

      const adjustedBeneficiaries = remainingBeneficiaries.map(b => {
        const proportion = b.percentage / (100 - percentageToDistribute);
        return {
          ...b,
          percentage: Math.max(0, Math.min(100, Math.round(b.percentage + (percentageToDistribute * proportion))))
        };
      });

      const total = adjustedBeneficiaries.reduce((sum, b) => sum + b.percentage, 0);
      if (total !== 100) {
        adjustedBeneficiaries[adjustedBeneficiaries.length - 1].percentage += (100 - total);
      }

      return adjustedBeneficiaries;
    }

    case 'REORDER_BENEFICIARIES': {
      return state.map((beneficiary, index) => ({
        ...beneficiary,
        order: index + 1
      }));
    }

    default:
      return state;
  }
}

export default function BeneficiariesPage() {
  const [beneficiaries, dispatch] = useReducer(beneficiaryReducer, [
    { id: '1', name: 'John Doe', relationship: 'Spouse', percentage: 50, order: 1 },
    { id: '2', name: 'Jane Doe', relationship: 'Child', percentage: 30, order: 2 },
    { id: '3', name: 'Bob Doe', relationship: 'Parent', percentage: 20, order: 3 }
  ]);

  const handlePercentageChange = useCallback((id: string, newPercentage: number) => {
    if (newPercentage < 0 || newPercentage > 100) return;
    dispatch({ type: 'UPDATE_PERCENTAGE', id, percentage: Math.round(newPercentage) });
  }, []);

  const handleAddBeneficiary = useCallback(() => {
    dispatch({ type: 'ADD_BENEFICIARY' });
  }, []);

  const handleRemoveBeneficiary = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_BENEFICIARY', id });
    dispatch({ type: 'REORDER_BENEFICIARIES' });
  }, []);

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