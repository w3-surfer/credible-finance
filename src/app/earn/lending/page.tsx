'use client';

import { Layout } from '@/components/Layout';
import { Lending } from '@/components/dashboard';

export default function LendingPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mt-4">
          <Lending />
        </div>
      </div>
    </Layout>
  );
} 