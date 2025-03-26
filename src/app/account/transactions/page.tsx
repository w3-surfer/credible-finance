'use client';

import { Transactions } from '@/components/dashboard/Transactions';
import { AccountMenu } from '@/components/dashboard/AccountMenu';

export default function TransactionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <AccountMenu />
        </div>
        <div className="md:col-span-2">
          <Transactions />
        </div>
      </div>
    </div>
  );
} 