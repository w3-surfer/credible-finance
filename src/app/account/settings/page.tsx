'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBell, FaLock, FaLanguage, FaPalette, FaVolumeUp } from 'react-icons/fa';

interface SettingSection {
  title: string;
  icon: any;
  settings: {
    label: string;
    description: string;
    type: 'toggle' | 'select' | 'slider';
    options?: string[];
  }[];
}

const settingSections: SettingSection[] = [
  {
    title: 'Privacy',
    icon: FaLock,
    settings: [
      {
        label: 'Profile Visibility',
        description: 'Control who can see your profile information',
        type: 'select',
        options: ['Public', 'Private', 'Friends Only'],
      },
      {
        label: 'Activity Status',
        description: 'Show when you are online',
        type: 'toggle',
      },
      {
        label: 'Transaction History',
        description: 'Allow others to view your transaction history',
        type: 'toggle',
      },
    ],
  },
  {
    title: 'Notifications',
    icon: FaBell,
    settings: [
      {
        label: 'Email Notifications',
        description: 'Receive notifications via email',
        type: 'toggle',
      },
      {
        label: 'Push Notifications',
        description: 'Receive push notifications on your device',
        type: 'toggle',
      },
      {
        label: 'Transaction Alerts',
        description: 'Get notified about your transactions',
        type: 'toggle',
      },
    ],
  },
  {
    title: 'Preferences',
    icon: FaPalette,
    settings: [
      {
        label: 'Theme',
        description: 'Choose your preferred theme',
        type: 'select',
        options: ['Light', 'Dark', 'System'],
      },
      {
        label: 'Language',
        description: 'Select your preferred language',
        type: 'select',
        options: ['English', 'Spanish', 'Portuguese'],
      },
      {
        label: 'Currency',
        description: 'Set your default currency',
        type: 'select',
        options: ['USD', 'EUR', 'GBP'],
      },
    ],
  },
  {
    title: 'Sound & Haptics',
    icon: FaVolumeUp,
    settings: [
      {
        label: 'Sound Effects',
        description: 'Play sound effects for actions',
        type: 'toggle',
      },
      {
        label: 'Haptic Feedback',
        description: 'Enable haptic feedback on interactions',
        type: 'toggle',
      },
      {
        label: 'Volume Level',
        description: 'Adjust the volume of sound effects',
        type: 'slider',
      },
    ],
  },
];

export default function Settings() {
  const [settings, setSettings] = useState<Record<string, any>>({});

  const handleToggle = (label: string) => {
    setSettings((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleSelect = (label: string, value: string) => {
    setSettings((prev) => ({
      ...prev,
      [label]: value,
    }));
  };

  const handleSlider = (label: string, value: number) => {
    setSettings((prev) => ({
      ...prev,
      [label]: value,
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <button className="px-4 py-2 bg-[#B9E605] text-black rounded-lg hover:bg-[#B9E605]/90 transition-colors">
          Save Changes
        </button>
      </div>

      <div className="grid gap-6">
        {settingSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <section.icon className="w-6 h-6 text-[#B9E605]" />
              <h2 className="text-xl font-bold text-white">{section.title}</h2>
            </div>

            <div className="space-y-6">
              {section.settings.map((setting) => (
                <div key={setting.label} className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">{setting.label}</h3>
                    <p className="text-gray-400 text-sm">{setting.description}</p>
                  </div>

                  {setting.type === 'toggle' && (
                    <button
                      onClick={() => handleToggle(setting.label)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings[setting.label] ? 'bg-[#B9E605]' : 'bg-gray-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings[setting.label] ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  )}

                  {setting.type === 'select' && (
                    <select
                      value={settings[setting.label] || ''}
                      onChange={(e) => handleSelect(setting.label, e.target.value)}
                      className="bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 rounded-lg px-3 py-2 focus:outline-none focus:border-cyber-green"
                    >
                      <option value="">Select</option>
                      {setting.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  )}

                  {setting.type === 'slider' && (
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={settings[setting.label] || 50}
                      onChange={(e) => handleSlider(setting.label, parseInt(e.target.value))}
                      className="w-32 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#B9E605]"
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 