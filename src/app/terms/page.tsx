'use client';

import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing and using Credible, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our service.`,
  },
  {
    title: '2. Description of Service',
    content: `Credible provides a platform for real-world asset tokenization and credit scoring on the Solana blockchain. Our service includes but is not limited to smart contract deployment, asset management, and credit assessment tools.`,
  },
  {
    title: '3. User Responsibilities',
    content: `Users are responsible for maintaining the security of their accounts and for all activities that occur under their accounts. You must not use the service for any illegal or unauthorized purpose.`,
  },
  {
    title: '4. Intellectual Property',
    content: `All content, features, and functionality of Credible, including but not limited to text, graphics, logos, and software, are the exclusive property of Credible and are protected by international copyright, trademark, and other intellectual property laws.`,
  },
  {
    title: '5. Limitation of Liability',
    content: `Credible shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.`,
  },
  {
    title: '6. Changes to Terms',
    content: `We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the platform.`,
  },
];

export default function Terms() {
  return (
    <Layout
      title="Terms of Service"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-8 border border-gray-800"
        >
          <h1 className="text-3xl font-bold mb-8 text-center">Terms of Service</h1>
          
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <h2 className="text-xl font-bold text-[#B9E605]">{section.title}</h2>
                <p className="text-gray-400">{section.content}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-2 bg-[#B9E605] text-black font-bold rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
} 