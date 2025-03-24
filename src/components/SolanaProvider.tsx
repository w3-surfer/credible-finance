'use client'

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import { useMemo } from 'react'

// Import wallet adapter styles
require('@solana/wallet-adapter-react-ui/styles.css')

export function SolanaProvider({ children }: { children: React.ReactNode }) {
  const network = clusterApiUrl('devnet')
  const endpoint = useMemo(() => network, [network])
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    []
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider className="font-space">
          <style jsx global>{`
            .wallet-adapter-button {
              background-color: #B9E605 !important;
              color: black !important;
              font-family: var(--font-space) !important;
              border-radius: 0.5rem !important;
              padding: 0.5rem 1rem !important;
              transition: all 0.2s ease-in-out !important;
            }
            .wallet-adapter-button:hover {
              background-color: rgba(185, 230, 5, 0.9) !important;
            }
            .wallet-adapter-modal-wrapper {
              background-color: #0A0A0A !important;
              border: 1px solid #B9E605 !important;
              border-radius: 0.5rem !important;
            }
            .wallet-adapter-modal-title {
              color: #B9E605 !important;
              font-family: var(--font-orbitron) !important;
            }
            .wallet-adapter-modal-list {
              background-color: #1A1A1A !important;
            }
            .wallet-adapter-modal-list-item {
              color: #FFFFFF !important;
              font-family: var(--font-space) !important;
            }
            .wallet-adapter-modal-list-item:hover {
              background-color: #2A2A2A !important;
            }
          `}</style>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
} 