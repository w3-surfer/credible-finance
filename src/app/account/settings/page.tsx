'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserShield, FaBell, FaCog, FaVolumeUp } from 'react-icons/fa';
import { Layout } from '@/components/Layout';

interface Settings {
  privacy: {
    profileVisibility: boolean;
    activityStatus: boolean;
    transactionHistory: boolean;
  };
  notifications: {
    emailNotifications: boolean;
    pushNotifications: boolean;
    transactionAlerts: boolean;
  };
  preferences: {
    theme: 'light' | 'dark' | 'system';
    language: string;
    defaultCurrency: string;
  };
  sound: {
    soundEffects: boolean;
    hapticFeedback: boolean;
    volumeLevel: number;
  };
}

export default function Settings() {
  const [settings, setSettings] = useState<Settings>({
    privacy: {
      profileVisibility: true,
      activityStatus: true,
      transactionHistory: false,
    },
    notifications: {
      emailNotifications: true,
      pushNotifications: true,
      transactionAlerts: true,
    },
    preferences: {
      theme: 'dark',
      language: 'English',
      defaultCurrency: 'USD',
    },
    sound: {
      soundEffects: true,
      hapticFeedback: true,
      volumeLevel: 75,
    },
  });

  const handleToggle = (section: keyof Settings, setting: string) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [setting]: !prev[section][setting as keyof typeof prev[typeof section]],
      },
    }));
  };

  const handleSelect = (section: keyof Settings, setting: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [setting]: value,
      },
    }));
  };

  const handleSlider = (section: keyof Settings, setting: string, value: number) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [setting]: value,
      },
    }));
  };

  return (
    <Layout
      title="Settings"
      subtitle="Customize your account preferences and security settings"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6">
          {/* Privacy Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <FaUserShield className="w-6 h-6 text-[#B9E605]" />
              <h2 className="text-xl font-bold text-white">Privacy</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Profile Visibility</h3>
                  <p className="text-sm text-gray-400">Show your profile to other users</p>
                </div>
                <button
                  onClick={() => handleToggle('privacy', 'profileVisibility')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.privacy.profileVisibility ? 'bg-[#B9E605]' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.privacy.profileVisibility ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Activity Status</h3>
                  <p className="text-sm text-gray-400">Show when you're online</p>
                </div>
                <button
                  onClick={() => handleToggle('privacy', 'activityStatus')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.privacy.activityStatus ? 'bg-[#B9E605]' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.privacy.activityStatus ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Transaction History</h3>
                  <p className="text-sm text-gray-400">Show your transaction history</p>
                </div>
                <button
                  onClick={() => handleToggle('privacy', 'transactionHistory')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.privacy.transactionHistory ? 'bg-[#B9E605]' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.privacy.transactionHistory ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Notification Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <FaBell className="w-6 h-6 text-[#B9E605]" />
              <h2 className="text-xl font-bold text-white">Notifications</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Email Notifications</h3>
                  <p className="text-sm text-gray-400">Receive updates via email</p>
                </div>
                <button
                  onClick={() => handleToggle('notifications', 'emailNotifications')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.notifications.emailNotifications ? 'bg-[#B9E605]' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.notifications.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Push Notifications</h3>
                  <p className="text-sm text-gray-400">Receive push notifications</p>
                </div>
                <button
                  onClick={() => handleToggle('notifications', 'pushNotifications')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.notifications.pushNotifications ? 'bg-[#B9E605]' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.notifications.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Transaction Alerts</h3>
                  <p className="text-sm text-gray-400">Get notified about transactions</p>
                </div>
                <button
                  onClick={() => handleToggle('notifications', 'transactionAlerts')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.notifications.transactionAlerts ? 'bg-[#B9E605]' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.notifications.transactionAlerts ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Preferences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <FaCog className="w-6 h-6 text-[#B9E605]" />
              <h2 className="text-xl font-bold text-white">Preferences</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Theme</label>
                <select
                  value={settings.preferences.theme}
                  onChange={(e) => handleSelect('preferences', 'theme', e.target.value)}
                  className="w-full px-4 py-2 bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 rounded-lg focus:outline-none focus:border-cyber-green"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Language</label>
                <select
                  value={settings.preferences.language}
                  onChange={(e) => handleSelect('preferences', 'language', e.target.value)}
                  className="w-full px-4 py-2 bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 rounded-lg focus:outline-none focus:border-cyber-green"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Portuguese">Portuguese</option>
                  <option value="French">French</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Default Currency</label>
                <select
                  value={settings.preferences.defaultCurrency}
                  onChange={(e) => handleSelect('preferences', 'defaultCurrency', e.target.value)}
                  className="w-full px-4 py-2 bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 rounded-lg focus:outline-none focus:border-cyber-green"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="JPY">JPY</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Sound & Haptics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <FaVolumeUp className="w-6 h-6 text-[#B9E605]" />
              <h2 className="text-xl font-bold text-white">Sound & Haptics</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Sound Effects</h3>
                  <p className="text-sm text-gray-400">Play sound effects for actions</p>
                </div>
                <button
                  onClick={() => handleToggle('sound', 'soundEffects')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.sound.soundEffects ? 'bg-[#B9E605]' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.sound.soundEffects ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Haptic Feedback</h3>
                  <p className="text-sm text-gray-400">Vibrate on interactions</p>
                </div>
                <button
                  onClick={() => handleToggle('sound', 'hapticFeedback')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.sound.hapticFeedback ? 'bg-[#B9E605]' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.sound.hapticFeedback ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-medium">Volume Level</h3>
                  <span className="text-sm text-gray-400">{settings.sound.volumeLevel}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={settings.sound.volumeLevel}
                  onChange={(e) => handleSlider('sound', 'volumeLevel', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="px-6 py-2 bg-[#B9E605] text-black rounded-lg hover:bg-[#B9E605]/90 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </Layout>
  );
} 