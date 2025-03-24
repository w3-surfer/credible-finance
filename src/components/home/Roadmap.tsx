'use client';

import { motion } from 'framer-motion';
import { FiCheck, FiClock } from 'react-icons/fi';

export function Roadmap() {
  const phases = [
    {
      title: "Phase 1",
      status: "completed",
      items: [
        "Launch of Credible Protocol",
        "Basic credit scoring system",
        "Initial token distribution",
        "Community building"
      ]
    },
    {
      title: "Phase 2",
      status: "current",
      items: [
        "Advanced credit scoring",
        "Lending platform launch",
        "Mobile app development",
        "Partnership expansion"
      ]
    },
    {
      title: "Phase 3",
      status: "upcoming",
      items: [
        "Cross-chain integration",
        "DeFi product suite",
        "Institutional partnerships",
        "Global expansion"
      ]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Roadmap
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our journey to revolutionize decentralized credit
          </p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-black/50 backdrop-blur-sm border border-[#B9E605]/20 rounded-xl p-6 hover:border-[#B9E605]/40 transition-colors"
              >
                <h3 className="text-[#B9E605] text-xl font-bold mb-4">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-gray-300">
                      <span className="text-[#B9E605]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 