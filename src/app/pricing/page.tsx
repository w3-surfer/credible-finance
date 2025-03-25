'use client';

import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    description: 'Perfect for small projects and startups',
    features: [
      'Up to 10,000 API calls/month',
      'Basic support',
      'Standard SLA',
      'Community access',
    ],
    cta: 'Get Started',
    link: '/signup',
  },
  {
    name: 'Professional',
    price: '$149',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 100,000 API calls/month',
      'Priority support',
      '24/7 SLA',
      'Advanced analytics',
      'Custom integrations',
    ],
    cta: 'Get Started',
    link: '/signup',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited API calls',
      'Dedicated support',
      'Custom SLA',
      'Advanced analytics',
      'Custom integrations',
      'On-premise deployment',
      'SLA guarantees',
    ],
    cta: 'Contact Sales',
    link: '/contact',
  },
];

export default function Pricing() {
  return (
    <Layout
      title="Pricing"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className={`relative bg-gray-900/50 backdrop-blur-lg rounded-lg p-8 border ${
              plan.popular
                ? 'border-[#B9E605]'
                : 'border-gray-800 hover:border-[#B9E605]/50'
            } transition-all duration-300`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#B9E605] text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-4">{plan.price}</div>
              <p className="text-gray-400">{plan.description}</p>
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center space-x-2">
                  <FiCheck className="text-[#B9E605]" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={plan.link}
              className={`block w-full text-center py-3 px-6 rounded-lg font-bold transition-colors ${
                plan.popular
                  ? 'bg-[#B9E605] text-black hover:bg-opacity-90'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {plan.cta}
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Need a Custom Plan?</h2>
        <div className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 border border-gray-800">
          <p className="text-gray-400 mb-4">
            We offer custom plans for organizations with specific requirements.
            Contact our sales team to discuss your needs.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-2 bg-[#B9E605] text-black font-bold rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Contact Sales
          </a>
        </div>
      </motion.div>
    </Layout>
  );
} 