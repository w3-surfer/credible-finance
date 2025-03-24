'use client';

import { motion } from 'framer-motion';
import { FiUser, FiCreditCard, FiDollarSign, FiCheck } from 'react-icons/fi';

export function HowItWorks() {
  const steps = [
    {
      icon: <FiUser className="w-8 h-8" />,
      title: "Create Account",
      description: "Sign up and connect your wallet to get started"
    },
    {
      icon: <FiCreditCard className="w-8 h-8" />,
      title: "Build Credit Score",
      description: "Start building your on-chain credit score through various activities"
    },
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: "Get Access",
      description: "Access loans, credit cards, and other financial services"
    },
    {
      icon: <FiCheck className="w-8 h-8" />,
      title: "Grow & Scale",
      description: "Continue building your credit to access better rates and higher limits"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How it <span className="text-[#B9E605]">Works</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get started with Credible in four simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center relative"
            >
              <div className="text-[#B9E605] mb-4 flex justify-center">{step.icon}</div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#B9E605] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 mt-4">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 