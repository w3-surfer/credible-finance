'use client';

import { Layout } from '@/components/Layout';
import { AccountMenu } from '@/components/AccountMenu';
import PageTitle from '@/components/PageTitle';
import { FiUser, FiShield, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import Image from 'next/image';

export default function Account() {
  const kycStatus = {
    basic: 'completed',
    advanced: 'pending',
    professional: 'not_started'
  };

  const getKYCStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <FiCheckCircle className="w-5 h-5 text-green-500" />;
      case 'pending':
        return <FiAlertCircle className="w-5 h-5 text-yellow-500" />;
      default:
        return <FiAlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const referrals = [
    {
      address: '0x1234567890123456789012345678901234567890',
      rewards: '100',
      status: 'Active',
      date: '2024-04-01'
    },
    {
      address: '0x2345678901234567890123456789012345678901',
      rewards: '75',
      status: 'Pending',
      date: '2024-03-31'
    },
    {
      address: '0x3456789012345678901234567890123456789012',
      rewards: '50',
      status: 'Inactive',
      date: '2024-03-30'
    }
  ];

  return (
    <>
      <PageTitle
        title="Account"
        subtitle="View and update your account settings"
      />
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Menu Lateral */}
            <div className="md:col-span-1">
              <AccountMenu />
            </div>

            {/* Conteúdo Principal */}
            <div className="md:col-span-3 space-y-8">
              {/* Profile Box */}
              <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#B9E605]/10 rounded-lg">
                    <FiUser className="w-6 h-6 text-[#B9E605]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Profile</h2>
                    <p className="text-gray-400">Manage your personal information</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold mb-4">Personal Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full bg-black/30 border border-gray-800 rounded-lg px-4 py-2"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          className="w-full bg-black/30 border border-gray-800 rounded-lg px-4 py-2"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-4">Security</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full bg-black/30 border border-gray-800 rounded-lg px-4 py-2"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          2FA Status
                        </label>
                        <div className="flex items-center justify-between bg-black/30 border border-gray-800 rounded-lg px-4 py-2">
                          <span>Enabled</span>
                          <button className="text-[#B9E605]">Configure</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* KYC Box */}
              <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#B9E605]/10 rounded-lg">
                    <FiShield className="w-6 h-6 text-[#B9E605]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">KYC Verification</h2>
                    <p className="text-gray-400">Complete verification to unlock features</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-black/30 border border-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Basic Verification</h3>
                        <p className="text-sm text-gray-400">Email and phone verification</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {getKYCStatusIcon(kycStatus.basic)}
                        <span className="text-sm capitalize">{kycStatus.basic}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/30 border border-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Advanced Verification</h3>
                        <p className="text-sm text-gray-400">ID verification and proof of address</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {getKYCStatusIcon(kycStatus.advanced)}
                        <span className="text-sm capitalize">{kycStatus.advanced}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/30 border border-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Professional Verification</h3>
                        <p className="text-sm text-gray-400">Business and institutional verification</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {getKYCStatusIcon(kycStatus.professional)}
                        <span className="text-sm capitalize">{kycStatus.professional.replace('_', ' ')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabela de Referidos */}
              <div className="bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Your Referrals</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-800">
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Address</th>
                          <th className="text-center py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Rewards</th>
                          <th className="text-center py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                          <th className="text-center py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {referrals.map((referral) => (
                          <tr key={referral.address} className="border-b border-gray-200 dark:border-gray-800 last:border-0">
                            <td className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-[#B9E605]/10 flex items-center justify-center">
                                  <FiUser className="w-4 h-4 text-[#B9E605]" />
                                </div>
                                <span className="font-medium">{referral.address}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <div className="flex items-center justify-center gap-2">
                                <span className="text-sm font-medium text-[#B9E605]">{referral.rewards}</span>
                                <Image src="/moon.png" alt="Moon" width={16} height={16} />
                              </div>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                referral.status === 'Active' 
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                              }`}>
                                {referral.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-center text-sm text-gray-500 dark:text-gray-400">
                              {referral.date}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
} 