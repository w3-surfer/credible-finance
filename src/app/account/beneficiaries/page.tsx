'use client';

import { Layout } from '@/components/Layout';
import { Beneficiaries } from '@/components/dashboard/Beneficiaries';

export default function BeneficiariesPage() {
  return (
    <Layout
      title="Beneficiaries"
      subtitle="Manage your beneficiaries and their details"
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Beneficiaries</h1>
            <p className="text-gray-400">Manage your beneficiaries and their details</p>
          </div>
          <Beneficiaries />
        </div>
      </div>
    </Layout>
  );
} 