'use client';

import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export function Layout({ children, title, subtitle }: LayoutProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        {children}
      </div>
    </ThemeProvider>
  );
} 