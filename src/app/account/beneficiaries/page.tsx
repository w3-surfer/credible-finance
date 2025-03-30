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
        <div className="mt-16">
          <Beneficiaries />
        </div>
      </div>
    </Layout>
  );
} 