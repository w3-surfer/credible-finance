'use client';

import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Profile } from '@/components/dashboard/Profile';
import { AccountMenu } from '@/components/dashboard/AccountMenu';

export default function ProfilePage() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <AccountMenu />
        </div>
        <div className="md:col-span-3">
          <Profile />
        </div>
      </div>
    </Layout>
  );
} 