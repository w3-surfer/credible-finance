'use client';

import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { FiMail, FiMessageSquare, FiBookOpen, FiGithub } from 'react-icons/fi';

const supportOptions = [
  {
    title: 'Email Support',
    description: 'Get help from our support team via email',
    icon: FiMail,
    link: 'mailto:support@credible.com',
  },
  {
    title: 'Community Forum',
    description: 'Connect with other developers and share knowledge',
    icon: FiMessageSquare,
    link: '/community',
  },
  {
    title: 'Documentation',
    description: 'Browse our comprehensive documentation',
    icon: FiBookOpen,
    link: '/docs',
  },
  {
    title: 'GitHub',
    description: 'Check our open source repositories and issues',
    icon: FiGithub,
    link: 'https://github.com/credible',
  },
];

export default function Support() {
  return (
    <Layout
      title="Support"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {supportOptions.map((option, index) => (
          <motion.a
            key={option.title}
            href={option.link}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="group bg-gray-900/50 backdrop-blur-lg rounded-lg p-8 border border-gray-800 hover:border-[#B9E605]/50 transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <option.icon className="w-8 h-8 text-[#B9E605] group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#B9E605] transition-colors">
                  {option.title}
                </h3>
                <p className="text-gray-400">{option.description}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 border border-gray-800">
          <div className="space-y-4 text-left">
            <div>
              <h3 className="font-bold mb-2">How do I get started?</h3>
              <p className="text-gray-400">
                Check out our getting started guide in the documentation section for a quick setup.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-400">
                We accept all major credit cards and cryptocurrency payments through our platform.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Is there a free trial?</h3>
              <p className="text-gray-400">
                Yes, we offer a 14-day free trial for all new users. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
} 