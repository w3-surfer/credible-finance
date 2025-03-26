'use client';

import { Layout } from '@/components/Layout';
import { Cards } from '@/components/dashboard/Cards';
import { AccountMenu } from '@/components/dashboard/AccountMenu';

export default function CardsPage() {
  return (
    <Layout title="Cards" subtitle="Manage your credit and debit cards">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <AccountMenu />
        </div>
        <div className="md:col-span-3">
          <Cards />
        </div>
      </div>
    </Layout>
  );
} 