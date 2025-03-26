'use client';

import { Layout } from '@/components/Layout';
import { Referral } from '@/components/dashboard/Referral';
import { AccountMenu } from '@/components/dashboard/AccountMenu';

export default function ReferralPage() {
  return (
    <Layout title="Referral" subtitle="Invite friends and earn rewards">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <AccountMenu />
        </div>
        <div className="md:col-span-3">
          <Referral />
        </div>
      </div>
    </Layout>
  );
} 