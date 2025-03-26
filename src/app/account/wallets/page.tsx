'use client';

import { Layout } from '@/components/Layout';
import { Wallets } from '@/components/dashboard/Wallets';
import { AccountMenu } from '@/components/dashboard/AccountMenu';

export default function WalletsPage() {
  return (
    <Layout title="Wallets" subtitle="Manage your connected wallets and balances">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <AccountMenu />
        </div>
        <div className="md:col-span-3">
          <Wallets />
        </div>
      </div>
    </Layout>
  );
} 