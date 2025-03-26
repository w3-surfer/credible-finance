'use client';

import { motion } from 'framer-motion';
import { FiUser, FiLock, FiCreditCard, FiBell } from 'react-icons/fi';

interface Field {
  label: string;
  value: string | boolean;
  type: 'text' | 'email' | 'tel' | 'password' | 'checkbox';
}

interface Section {
  title: string;
  icon: React.ElementType;
  fields: Field[];
}

const profileSections: Section[] = [
  {
    title: 'Personal Information',
    icon: FiUser,
    fields: [
      { label: 'Full Name', value: 'John Doe', type: 'text' },
      { label: 'Email', value: 'john@example.com', type: 'email' },
      { label: 'Phone', value: '+1 (555) 123-4567', type: 'tel' },
    ],
  },
  {
    title: 'Security',
    icon: FiLock,
    fields: [
      { label: 'Current Password', value: '', type: 'password' },
      { label: 'New Password', value: '', type: 'password' },
      { label: 'Confirm New Password', value: '', type: 'password' },
    ],
  },
  {
    title: 'Payment Methods',
    icon: FiCreditCard,
    fields: [
      { label: 'Card Number', value: '**** **** **** 1234', type: 'text' },
      { label: 'Expiry Date', value: '12/25', type: 'text' },
      { label: 'CVV', value: '***', type: 'password' },
    ],
  },
  {
    title: 'Notifications',
    icon: FiBell,
    fields: [
      { label: 'Email Notifications', value: true, type: 'checkbox' },
      { label: 'Push Notifications', value: true, type: 'checkbox' },
      { label: 'SMS Notifications', value: false, type: 'checkbox' },
    ],
  },
];

export default function Profile() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {profileSections.map((section, sectionIndex) => (
        <motion.div
          key={section.title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: sectionIndex * 0.1 }}
          className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 border border-gray-800"
        >
          <div className="flex items-center mb-6">
            <section.icon className="w-6 h-6 text-[#B9E605] mr-2" />
            <h2 className="text-xl font-bold">{section.title}</h2>
          </div>
          <div className="space-y-4">
            {section.fields.map((field) => (
              <div key={field.label}>
                <label className="block text-sm font-medium mb-1">
                  {field.label}
                </label>
                {field.type === 'checkbox' ? (
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      defaultChecked={field.value as boolean}
                      className="h-4 w-4 text-[#B9E605] focus:ring-[#B9E605] border-gray-700 rounded bg-gray-800"
                    />
                    <span className="ml-2 text-sm text-gray-400">
                      Enable {field.label}
                    </span>
                  </div>
                ) : (
                  <input
                    type={field.type}
                    defaultValue={field.value as string}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#B9E605]"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex justify-end"
      >
        <button
          type="submit"
          className="px-6 py-2 bg-[#B9E605] text-black font-bold rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Save Changes
        </button>
      </motion.div>
    </div>
  );
} 