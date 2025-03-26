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
          <AccountMenu />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
} 