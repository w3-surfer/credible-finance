'use client';

import { Layout } from '@/components/Layout';
import { Beneficiaries } from '@/components/dashboard/Beneficiaries';

export default function BeneficiariesPage() {
  return (
    <Layout
      title="Beneficiaries"
      subtitle="Manage your beneficiaries and their details"
    >
      <div className="container mx-auto px-4">
        <div className="mt-24">
          <Beneficiaries />
        </div>
      </div>
    </Layout>
  );
} 