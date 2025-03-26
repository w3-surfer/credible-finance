'use client';

import { useState } from 'react';
import { FiPlusCircle, FiTrash2, FiCheck, FiCopy } from 'react-icons/fi';

interface Wallet {
  id: number;
  name: string;
  address: string;
  type: 'Solana' | 'Ethereum' | 'Bitcoin';
  isPrimary: boolean;
}

export function Wallets() {
  const [connectedWallets, setConnectedWallets] = useState<Wallet[]>([
    {
      id: 1,
      name: 'Phantom Wallet',
      address: '8xJ4v...9Ykm2',
      type: 'Solana',
      isPrimary: true
    },
    {
      id: 2,
      name: 'Backpack',
      address: '3mN7x...2Pqr5',
      type: 'Solana',
      isPrimary: false
    },
    {
      id: 3,
      name: 'Solflare',
      address: '5kL9p...7Wvn4',
      type: 'Solana',
      isPrimary: false
    }
  ]);

  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  // Função para adicionar uma nova carteira
  const addWallet = () => {
    const newWallet: Wallet = {
      id: connectedWallets.length + 1,
      name: 'New Wallet',
      address: '0x0000...0000',
      type: 'Solana',
      isPrimary: false
    };
    setConnectedWallets([...connectedWallets, newWallet]);
  };

  // Função para remover uma carteira
  const removeWallet = (id: number) => {
    setConnectedWallets(connectedWallets.filter(wallet => wallet.id !== id));
  };

  // Função para definir uma carteira como primária
  const setPrimaryWallet = (id: number) => {
    setConnectedWallets(connectedWallets.map(wallet => ({
      ...wallet,
      isPrimary: wallet.id === id
    })));
  };

  return (
    <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Connected Wallets</h2>
        <button 
          onClick={addWallet}
          className="flex items-center gap-2 px-4 py-2 bg-[#B9E605] text-black rounded-lg hover:bg-[#B9E605]/90 transition-colors"
        >
          <FiPlusCircle className="w-5 h-5" />
          Connect Wallet
        </button>
      </div>

      <div className="space-y-4">
        {connectedWallets.map((wallet) => (
          <div
            key={wallet.id}
            className="bg-black/30 border border-gray-800 rounded-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">{wallet.name}</h3>
                <p className="text-sm text-gray-400">
                  {wallet.type} • {wallet.address}
                </p>
              </div>
              <div className="flex items-center gap-4">
                {wallet.isPrimary ? (
                  <span className="flex items-center gap-1 text-sm text-[#B9E605]">
                    <FiCheck className="w-4 h-4" />
                    Primary
                  </span>
                ) : (
                  <button 
                    onClick={() => setPrimaryWallet(wallet.id)}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Set as Primary
                  </button>
                )}
                <button 
                  className="p-2 text-gray-400 hover:text-gray-300 transition-colors"
                  onClick={() => handleCopyAddress(wallet.address)}
                >
                  {copiedAddress === wallet.address ? (
                    <FiCheck className="w-5 h-5 text-[#B9E605]" />
                  ) : (
                    <FiCopy className="w-5 h-5" />
                  )}
                </button>
                <button 
                  onClick={() => removeWallet(wallet.id)}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <FiTrash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 