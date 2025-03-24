'use client';

import { Layout } from '@/components/Layout';
import { Nodes } from '@/components/dashboard';

export default function NodesPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mt-4">
          <Nodes />
        </div>
      </div>
    </Layout>
  );
} 