'use client';

import { Layout } from '@/components/Layout';
import { Lending } from '@/components/dashboard/Lending';

export default function LendingPage() {
  return (
    <Layout title="Lending" subtitle="Lend your assets and earn competitive interest">
      <Lending />
    </Layout>
  );
} 