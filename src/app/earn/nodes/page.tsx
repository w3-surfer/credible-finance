'use client';

import { Layout } from '@/components/Layout';
import { Nodes } from '@/components/dashboard/Nodes';

export default function NodesPage() {
  return (
    <Layout title="Nodes" subtitle="Run a node and earn rewards for providing network services">
      <Nodes />
    </Layout>
  );
} 