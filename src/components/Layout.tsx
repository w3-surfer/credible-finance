'use client';

import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import PageTitle from '@/components/PageTitle';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  description?: string;
}

export function Layout({ children, title, subtitle, description }: LayoutProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        {title && <PageTitle title={title} subtitle={subtitle || ''} />}
        {children}
      </div>
    </ThemeProvider>
  );
} 