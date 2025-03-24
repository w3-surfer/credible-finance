'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Credible?",
      answer: "Credible is a decentralized credit system built on Solana that allows users to build their on-chain credit score and access various financial services."
    },
    {
      question: "How does the credit scoring system work?",
      answer: "Our credit scoring system analyzes various on-chain activities, including transaction history, asset holdings, and DeFi interactions to calculate a user's creditworthiness."
    },
    {
      question: "What services can I access with my credit score?",
      answer: "With your credit score, you can access loans, credit cards, and other financial services. The higher your score, the better rates and higher limits you can get."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, all data is stored on-chain and protected by Solana's robust security infrastructure. We never store sensitive information off-chain."
    },
    {
      question: "How do I get started?",
      answer: "Simply connect your wallet, create an account, and start building your credit score through various activities on the platform."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-black/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about Credible
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                {openIndex === index ? (
                  <FiChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <FiChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 