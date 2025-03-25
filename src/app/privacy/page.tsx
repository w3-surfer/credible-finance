'use client';

import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information that you provide directly to us, including but not limited to your name, email address, and blockchain wallet addresses. We also collect usage data and technical information about your interactions with our service.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the collected information to provide, maintain, and improve our services, to process your transactions, to communicate with you, and to comply with legal obligations. We may also use this information to personalize your experience and to develop new features.`,
  },
  {
    title: '3. Data Security',
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.`,
  },
  {
    title: '4. Data Sharing',
    content: `We do not sell your personal information. We may share your information with service providers who assist in operating our service, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.`,
  },
  {
    title: '5. Your Rights',
    content: `You have the right to access, correct, or delete your personal information. You may also request a copy of your data or withdraw your consent for certain data processing activities.`,
  },
  {
    title: '6. Cookies and Tracking',
    content: `We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.`,
  },
];

export default function Privacy() {
  return (
    <Layout
      title="Privacy Policy"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-8 border border-gray-800"
        >
          <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
          
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