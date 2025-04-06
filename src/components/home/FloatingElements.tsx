'use client';

import { useEffect, useRef } from 'react';

const AlienSymbols = [
  'Ͽ', 'Ͼ', 'Ξ', 'Δ', 'Ω', 'Ψ', 'Φ', '⌬', '⎔', '◈',
  '⟡', '⟢', '⟣', '⟤', '⟥', '⧫', '⧊', '⬡', '⬢', '⬣'
];

export function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Criar elementos flutuantes
    const createFloatingElement = (type: 'symbol' | 'hologram' | 'hexagon') => {
      const element = document.createElement('div');
      element.className = `absolute ${type} opacity-0`;
      
      // Posição aleatória
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      element.style.left = `${x}%`;
      element.style.top = `${y}%`;

      // Conteúdo baseado no tipo
      if (type === 'symbol') {
        const symbol = AlienSymbols[Math.floor(Math.random() * AlienSymbols.length)];
        element.innerHTML = symbol;
        element.className += ' text-[#B9E605] text-3xl font-alien';
      } else if (type === 'hologram') {
        element.className += ' w-16 h-16 rounded-full border-2 border-[#B9E605] hologram-circle';
        const innerCircle = document.createElement('div');
        innerCircle.className = 'absolute inset-1 rounded-full border border-[#B9E605]/50';
        element.appendChild(innerCircle);
      } else {
        element.className += ' w-8 h-8 hexagon border-[#B9E605]';
      }

      // Animação de fade in
      requestAnimationFrame(() => {
        element.style.transition = 'all 1s ease-out';
        element.style.opacity = '0.15';
        element.style.transform = `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px)`;
      });

      // Remover após a animação
      setTimeout(() => {
        element.style.opacity = '0';
        setTimeout(() => element.remove(), 1000);
      }, 5000);

      return element;
    };

    // Adicionar elementos periodicamente
    const intervals = [
      setInterval(() => {
        if (containerRef.current) {
          containerRef.current.appendChild(createFloatingElement('symbol'));
        }
      }, 2000),
      setInterval(() => {
        if (containerRef.current) {
          containerRef.current.appendChild(createFloatingElement('hologram'));
        }
      }, 3000),
      setInterval(() => {
        if (containerRef.current) {
          containerRef.current.appendChild(createFloatingElement('hexagon'));
        }
      }, 4000)
    ];

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      <style jsx global>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .hologram-circle::before {
          content: '';
          position: absolute;
          inset: -2px;
          border: 2px solid #B9E605;
          border-radius: 50%;
          animation: rotate 4s linear infinite;
        }

        .hexagon {
          position: relative;
          background: transparent;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          border: 1px solid #B9E605;
        }

        .hexagon::before {
          content: '';
          position: absolute;
          inset: 1px;
          background: #B9E605;
          opacity: 0.1;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        .font-alien {
          font-family: 'Arial', sans-serif;
          font-weight: bold;
          letter-spacing: 0.1em;
          text-shadow: 0 0 5px #B9E605, 0 0 10px #B9E605;
        }
      `}</style>
    </div>
  );
} 