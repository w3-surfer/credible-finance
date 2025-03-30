'use client';

import { Layout } from '@/components/Layout';
import { AccountMenu } from '@/components/dashboard';
import { Beneficiaries } from '@/components/dashboard/Beneficiaries';

export default function BeneficiariesPage() {
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