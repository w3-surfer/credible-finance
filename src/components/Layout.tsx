'use client';

import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        {children}
      </div>
    </ThemeProvider>
  );
} 