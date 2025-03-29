'use client';

import { ReactNode } from 'react';
import { AccountMenu } from '@/components/dashboard/AccountMenu';

interface AccountLayoutProps {
  children: ReactNode;
}

export default function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <div className="min-h-screen bg-cyber-gray-100 dark:bg-cyber-gray-200">
      <div className="container mx-auto py-8">
        <div className="flex gap-4">
          <div className="flex-shrink-0 mt-8">
            <AccountMenu />
          </div>
          <div className="flex-grow">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 