'use client';

import { Layout } from '@/components/Layout';
import { Nodes } from '@/components/dashboard';

export default function NodesPage() {
  return (
    <Layout
      title="Nodes"
      subtitle="Run a node to earn rewards and participate in network governance"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mt-4">
          <Nodes />
        </div>
      </div>
    </Layout>
  );
} 