'use client';

import { Layout } from '@/components/Layout';
import { Beneficiaries } from '@/components/dashboard/Beneficiaries';
import { AccountMenu } from '@/components/dashboard/AccountMenu';

export default function BeneficiariesPage() {
  return (
    <Layout title="Beneficiaries" subtitle="Manage your beneficiaries and inheritance settings">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <AccountMenu />
        </div>
        <div className="md:col-span-3">
          <Beneficiaries />
        </div>
      </div>
    </Layout>
  );
} 