'use client';

import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { FiGlobe, FiMoon, FiBell, FiShield, FiDatabase } from 'react-icons/fi';

interface SettingSection {
  title: string;
  icon: React.ElementType;
  description: string;
  settings: {
    label: string;
    description: string;
    type: 'toggle' | 'select' | 'radio';
    options?: string[];
    default: boolean | string;
  }[];
}

const settingsSections: SettingSection[] = [
  {
    title: 'Language & Region',
    icon: FiGlobe,
    description: 'Customize your language and regional preferences',
    settings: [
      {
        label: 'Language',
        description: 'Select your preferred language',
        type: 'select',
        options: ['English', 'Spanish', 'French', 'German', 'Portuguese'],
        default: 'English',
      },
      {
        label: 'Time Zone',
        description: 'Set your local time zone',
        type: 'select',
        options: ['UTC', 'EST', 'PST', 'GMT'],
        default: 'UTC',
      },
    ],
  },
  {
    title: 'Appearance',
    icon: FiMoon,
    description: 'Customize the look and feel of the application',
    settings: [
      {
        label: 'Dark Mode',
        description: 'Enable dark mode for better visibility',
        type: 'toggle',
        default: true,
      },
      {
        label: 'Theme Color',
        description: 'Choose your preferred theme color',
        type: 'radio',
        options: ['Green', 'Blue', 'Purple', 'Red'],
        default: 'Green',
      },
    ],
  },
  {
    title: 'Notifications',
    icon: FiBell,
    description: 'Manage your notification preferences',
    settings: [
      {
        label: 'Email Notifications',
        description: 'Receive notifications via email',
        type: 'toggle',
        default: true,
      },
      {
        label: 'Push Notifications',
        description: 'Receive push notifications',
        type: 'toggle',
        default: true,
      },
      {
        label: 'Notification Frequency',
        description: 'How often would you like to receive notifications?',
        type: 'select',
        options: ['Real-time', 'Daily', 'Weekly'],
        default: 'Real-time',
      },
    ],
  },
  {
    title: 'Privacy & Security',
    icon: FiShield,
    description: 'Manage your privacy and security settings',
    settings: [
      {
        label: 'Two-Factor Authentication',
        description: 'Enable two-factor authentication for additional security',
        type: 'toggle',
        default: false,
      },
      {
        label: 'Activity Log',
        description: 'Keep track of your account activity',
        type: 'toggle',
        default: true,
      },
    ],
  },
  {
    title: 'Data Management',
    icon: FiDatabase,
    description: 'Manage your data and storage preferences',
    settings: [
      {
        label: 'Auto-Save',
        description: 'Automatically save your changes',
        type: 'toggle',
        default: true,
      },
      {
        label: 'Data Retention',
        description: 'How long should we keep your data?',
        type: 'select',
        options: ['30 days', '90 days', '1 year', 'Indefinitely'],
        default: '90 days',
      },
    ],
  },
];

export default function Settings() {
  return (
    <Layout
      title="Settings"
      description="Customize your application preferences"
    >
      <div className="max-w-3xl mx-auto space-y-8">
        {settingsSections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: sectionIndex * 0.1 }}
            className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <section.icon className="w-6 h-6 text-[#B9E605] mr-2" />
              <h2 className="text-xl font-bold">{section.title}</h2>
            </div>
            <p className="text-gray-400 mb-6">{section.description}</p>
            <div className="space-y-6">
              {section.settings.map((setting) => (
                <div key={setting.label} className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">{setting.label}</h3>
                    <p className="text-sm text-gray-400">{setting.description}</p>
                  </div>
                  <div className="ml-4">
                    {setting.type === 'toggle' && (
                      <button
                        type="button"
                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#B9E605] focus:ring-offset-2 ${
                          setting.default ? 'bg-[#B9E605]' : 'bg-gray-700'
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                            setting.default ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    )}
                    {setting.type === 'select' && (
                      <select
                        defaultValue={setting.default as string}
                        className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-[#B9E605]"
                      >
                        {setting.options?.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}
                    {setting.type === 'radio' && (
                      <div className="flex space-x-4">
                        {setting.options?.map((option) => (
                          <label key={option} className="flex items-center">
                            <input
                              type="radio"
                              name={setting.label}
                              value={option}
                              defaultChecked={option === setting.default}
                              className="h-4 w-4 text-[#B9E605] focus:ring-[#B9E605] border-gray-700"
                            />
                            <span className="ml-2 text-sm">{option}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
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
    </Layout>
  );
} 