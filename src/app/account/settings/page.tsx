'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserShield, FaBell, FaCog, FaVolumeUp } from 'react-icons/fa';
import { Layout } from '@/components/Layout';
import { AccountMenu } from '@/components/dashboard';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu Lateral */}
          <div className="md:col-span-1">
            <AccountMenu />
          </div>
          {/* Conteúdo Principal */}
          <div className="md:col-span-3">
            <div className="space-y-6">
              {/* Privacy Settings */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <FaUserShield className="w-6 h-6 text-[#B9E605]" />
                  <h2 className="text-xl font-bold text-white">Privacy Settings</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Profile Visibility</div>
                      <div className="text-sm text-gray-400">Control who can see your profile</div>
                    </div>
                    <button
                      onClick={() => handleToggle('privacy', 'profileVisibility')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.privacy.profileVisibility
                          ? 'bg-[#B9E605]'
                          : 'bg-gray-600'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full transition-transform ${
                          settings.privacy.profileVisibility
                            ? 'translate-x-7'
                            : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Activity Status</div>
                      <div className="text-sm text-gray-400">Show when you're online</div>
                    </div>
                    <button
                      onClick={() => handleToggle('privacy', 'activityStatus')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.privacy.activityStatus
                          ? 'bg-[#B9E605]'
                          : 'bg-gray-600'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full transition-transform ${
                          settings.privacy.activityStatus
                            ? 'translate-x-7'
                            : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Transaction History</div>
                      <div className="text-sm text-gray-400">Share your transaction history</div>
                    </div>
                    <button
                      onClick={() => handleToggle('privacy', 'transactionHistory')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.privacy.transactionHistory
                          ? 'bg-[#B9E605]'
                          : 'bg-gray-600'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full transition-transform ${
                          settings.privacy.transactionHistory
                            ? 'translate-x-7'
                            : 'translate-x-0'
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
                  <h2 className="text-xl font-bold text-white">Notification Settings</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Email Notifications</div>
                      <div className="text-sm text-gray-400">Receive updates via email</div>
                    </div>
                    <button
                      onClick={() => handleToggle('notifications', 'emailNotifications')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.notifications.emailNotifications
                          ? 'bg-[#B9E605]'
                          : 'bg-gray-600'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full transition-transform ${
                          settings.notifications.emailNotifications
                            ? 'translate-x-7'
                            : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Push Notifications</div>
                      <div className="text-sm text-gray-400">Receive push notifications</div>
                    </div>
                    <button
                      onClick={() => handleToggle('notifications', 'pushNotifications')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.notifications.pushNotifications
                          ? 'bg-[#B9E605]'
                          : 'bg-gray-600'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full transition-transform ${
                          settings.notifications.pushNotifications
                            ? 'translate-x-7'
                            : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Transaction Alerts</div>
                      <div className="text-sm text-gray-400">Get notified about transactions</div>
                    </div>
                    <button
                      onClick={() => handleToggle('notifications', 'transactionAlerts')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.notifications.transactionAlerts
                          ? 'bg-[#B9E605]'
                          : 'bg-gray-600'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full transition-transform ${
                          settings.notifications.transactionAlerts
                            ? 'translate-x-7'
                            : 'translate-x-0'
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
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Theme
                    </label>
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
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Language
                    </label>
                    <select
                      value={settings.preferences.language}
                      onChange={(e) => handleSelect('preferences', 'language', e.target.value)}
                      className="w-full px-4 py-2 bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 rounded-lg focus:outline-none focus:border-cyber-green"
                    >
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="Portuguese">Portuguese</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Default Currency
                    </label>
                    <select
                      value={settings.preferences.defaultCurrency}
                      onChange={(e) => handleSelect('preferences', 'defaultCurrency', e.target.value)}
                      className="w-full px-4 py-2 bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 rounded-lg focus:outline-none focus:border-cyber-green"
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                    </select>
                  </div>
                </div>
              </motion.div>

              {/* Sound Settings */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <FaVolumeUp className="w-6 h-6 text-[#B9E605]" />
                  <h2 className="text-xl font-bold text-white">Sound Settings</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Sound Effects</div>
                      <div className="text-sm text-gray-400">Play sound effects</div>
                    </div>
                    <button
                      onClick={() => handleToggle('sound', 'soundEffects')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.sound.soundEffects
                          ? 'bg-[#B9E605]'
                          : 'bg-gray-600'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full transition-transform ${
                          settings.sound.soundEffects
                            ? 'translate-x-7'
                            : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Haptic Feedback</div>
                      <div className="text-sm text-gray-400">Enable haptic feedback</div>
                    </div>
                    <button
                      onClick={() => handleToggle('sound', 'hapticFeedback')}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings.sound.hapticFeedback
                          ? 'bg-[#B9E605]'
                          : 'bg-gray-600'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full transition-transform ${
                          settings.sound.hapticFeedback
                            ? 'translate-x-7'
                            : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Volume Level
                    </label>
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
          </div>
        </div>
      </div>
    </Layout>
  );
} 