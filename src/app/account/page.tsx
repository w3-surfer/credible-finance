'use client';

import { Layout } from '@/components/Layout';
import { Account } from '@/components/dashboard';

export default function AccountPage() {
  return (
    <Layout title="Account" subtitle="Manage your profile, wallets and rewards">
      <Account />
    </Layout>
  );
} 