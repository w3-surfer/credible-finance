import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FooterMobile } from '@/components/FooterMobile'
import PageTitle from '@/components/PageTitle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Credible UI',
  description: 'Credible UI - A Solana-based DeFi platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-black`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <div className="max-w-7xl mx-auto px-4">
                <PageTitle title="" subtitle="" />
                <div className="pb-4">
                  {children}
                </div>
              </div>
            </main>
            <Footer className="hidden md:block" />
            <FooterMobile className="md:hidden" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 