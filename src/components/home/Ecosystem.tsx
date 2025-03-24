'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Ecosystem() {
  const ecosystemItems = [
    { image: '/OutlierVentures1.png', title: "Outlier Ventures" },
    { image: '/Bitswiss1.png', title: "Bitswiss" },
    { image: '/Credora1.png', title: "Credora" },
    { image: '/Superteam1.png', title: "Superteam" },
    { image: '/Solana.png', title: "Solana" },
    { image: '/SolanaID1.png', title: "Solana ID" },
    { image: '/Solayer1.png', title: "Solayer" },
    { image: '/Webacy1.png', title: "Webacy" },
    { image: '/Plume1.png', title: "Plume" },
    { image: '/Kima1.png', title: "Kima" },
    { image: '/Fuze1.png', title: "Fuze" },
    { image: '/Circle1.png', title: "Circle" },
    { image: '/etherfuse1.png', title: "Etherfuse" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-[#B9E605]">Ecosystem</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Backed by industry leaders and strategic partners
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-fast">
            {[...ecosystemItems, ...ecosystemItems].map((item, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 mx-4 bg-white dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center w-64 hover:border-[#B9E605]/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-32 flex justify-center items-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={360}
                    height={192}
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-fast {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll-fast:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
} 