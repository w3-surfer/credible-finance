'use client';

import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        {children}
      </div>
    </ThemeProvider>
  );
} 