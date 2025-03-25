'use client';

import { Layout } from '@/components/Layout';
import PageTitle from '@/components/PageTitle';
import { motion } from 'framer-motion';
import { FiBook, FiCode, FiGitBranch, FiTerminal } from 'react-icons/fi';

const docSections = [
  {
    title: 'Getting Started',
    description: 'Quick start guide and basic concepts',
    icon: FiBook,
    link: '/docs/getting-started',
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation and examples',
    icon: FiCode,
    link: '/docs/api',
  },
  {
    title: 'Architecture',
    description: 'System architecture and design principles',
    icon: FiGitBranch,
    link: '/docs/architecture',
  },
  {
    title: 'CLI Tools',
    description: 'Command-line interface documentation',
    icon: FiTerminal,
    link: '/docs/cli',
  },
];

export default function Documentation() {
  return (
    <>
      <PageTitle
        title="Documentation"
        subtitle="Comprehensive guides and API documentation"
      />
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {docSections.map((section, index) => (
            <motion.a
              key={section.title}
              href={section.link}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="group bg-gray-900/50 backdrop-blur-lg rounded-lg p-8 border border-gray-800 hover:border-[#B9E605]/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <section.icon className="w-8 h-8 text-[#B9E605] group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#B9E605] transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-gray-400">{section.description}</p>
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
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 border border-gray-800">
            <p className="text-gray-400 mb-4">
              Our documentation is constantly updated with the latest features and best practices.
              If you need additional help, check out our community resources or contact support.
            </p>
            <a
              href="/support"
              className="inline-block px-6 py-2 bg-[#B9E605] text-black font-bold rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Get Support
            </a>
          </div>
        </motion.div>
      </Layout>
    </>
  );
} 