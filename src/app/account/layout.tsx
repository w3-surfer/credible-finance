'use client';

import { ReactNode } from 'react';

interface AccountLayoutProps {
  children: ReactNode;
}

export default function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <div className="min-h-screen bg-cyber-gray-100 dark:bg-cyber-gray-200">
      <div className="container mx-auto py-8">
        {children}
      </div>
    </div>
  );
} 