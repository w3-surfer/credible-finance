'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="cursor-image"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          zIndex: 2147483647
        }}
      >
        <Image
          src="/airdrop.gif"
          alt="cursor"
          width={24}
          height={24}
          priority
          style={{
            zIndex: 2147483647,
            pointerEvents: 'none',
            userSelect: 'none',
            position: 'relative'
          }}
        />
      </div>
      <style jsx global>{`
        * {
          cursor: none !important;
        }

        .cursor-image {
          position: fixed;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
        }

        .cursor-image img {
          width: 24px;
          height: 24px;
          pointer-events: none;
          user-select: none;
          -webkit-user-select: none;
          -webkit-user-drag: none;
        }
      `}</style>
    </>
  );
}