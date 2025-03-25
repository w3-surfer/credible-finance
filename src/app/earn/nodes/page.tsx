'use client';

import { Layout } from '@/components/Layout';
import { Nodes } from '@/components/dashboard/Nodes';

export default function NodesPage() {
  return (
    <Layout title="Nodes" subtitle="Run a node to earn rewards and participate in network governance">
      <Nodes />
    </Layout>
  );
} 