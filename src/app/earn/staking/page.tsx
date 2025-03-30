'use client';

import { Layout } from '@/components/Layout';
import { StakingPage } from '@/components/earn/StakingPage';

export default function StakingPageRoute() {
  return (
    <Layout
      title="Staking"
      subtitle="Stake your $CRED to earn rewards"
    >
      <div className="container mx-auto">
        <StakingPage />
      </div>
    </Layout>
  );
} 