'use client';

import { AccountMenu } from '@/components/dashboard/AccountMenu';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto py-8">
        <div className="flex gap-4">
          <div className="flex-shrink-0 mt-16">
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