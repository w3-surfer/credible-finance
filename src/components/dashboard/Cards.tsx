'use client';

import { useState } from 'react';
import { FiPlusCircle, FiCreditCard, FiLock, FiUnlock, FiTrash2 } from 'react-icons/fi';

interface Card {
  id: number;
  last4: string;
  expiry: string;
  type: 'Visa' | 'Mastercard';
  isLocked: boolean;
}

export function Cards() {
  const [cards, setCards] = useState<Card[]>([
    {
      id: 1,
      last4: '4242',
      expiry: '12/24',
      type: 'Visa',
      isLocked: false
    },
    {
      id: 2,
      last4: '8888',
      expiry: '06/25',
      type: 'Mastercard',
      isLocked: true
    }
  ]);

  // Função para adicionar um novo cartão
  const addCard = () => {
    const newCard: Card = {
      id: cards.length + 1,
      last4: '0000',
      expiry: 'MM/YY',
      type: 'Visa',
      isLocked: false
    };
    setCards([...cards, newCard]);
  };

  // Função para remover um cartão
  const removeCard = (id: number) => {
    setCards(cards.filter(card => card.id !== id));
  };

  // Função para alternar o estado de bloqueio do cartão
  const toggleCardLock = (id: number) => {
    setCards(cards.map(card => 
      card.id === id ? { ...card, isLocked: !card.isLocked } : card
    ));
  };

  return (
    <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Cards</h2>
        <button 
          onClick={addCard}
          className="flex items-center gap-2 px-4 py-2 bg-[#B9E605] text-black rounded-lg hover:bg-[#B9E605]/90 transition-colors"
        >
          <FiPlusCircle className="w-5 h-5" />
          Add New Card
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-black/30 border border-gray-800 rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <FiCreditCard className="w-8 h-8 text-[#B9E605]" />
              <div className="flex gap-2">
                <button 
                  onClick={() => toggleCardLock(card.id)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  {card.isLocked ? (
                    <FiLock className="w-5 h-5" />
                  ) : (
                    <FiUnlock className="w-5 h-5" />
                  )}
                </button>
                <button 
                  onClick={() => removeCard(card.id)}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <FiTrash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-gray-400">Card Number</p>
                <p className="font-medium">•••• •••• •••• {card.last4}</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-400">Expiry</p>
                  <p className="font-medium">{card.expiry}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Type</p>
                  <p className="font-medium">{card.type}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 