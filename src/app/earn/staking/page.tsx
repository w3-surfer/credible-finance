'use client';

import { Layout } from '@/components/Layout';
import { Staking } from '@/components/dashboard/Staking';

export default function StakingPage() {
  return (
    <Layout title="Staking" subtitle="Stake your tokens and earn rewards while securing the network">
      <Staking />
    </Layout>
  );
} 