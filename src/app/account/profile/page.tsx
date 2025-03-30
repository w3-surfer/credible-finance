'use client';

import { Layout } from '@/components/Layout';
import { AccountMenu } from '@/components/dashboard';
import { FaUser, FaCheckCircle, FaTimesCircle, FaClock } from 'react-icons/fa';
import { useState } from 'react';

interface Profile {
  name: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  kycStatus: 'pending' | 'verified' | 'rejected';
  kycDocuments: {
    idFront: 'completed' | 'pending' | 'rejected';
    idBack: 'completed' | 'pending' | 'rejected';
    selfie: 'completed' | 'pending' | 'rejected';
  };
}

export default function Profile() {
  const [profile, setProfile] = useState<Profile>({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 890',
    address: '123 Cyber Street, Digital City',
    country: 'United States',
    kycStatus: 'pending',
    kycDocuments: {
      idFront: 'pending',
      idBack: 'pending',
      selfie: 'pending'
    }
  });

  return (
    <Layout
      title="Profile"
      subtitle="Manage your personal information and account details"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu Lateral */}
          <div className="md:col-span-1">
            <AccountMenu />
          </div>
          {/* Conteúdo Principal */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Informações Pessoais */}
              <div
                className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <FaUser className="w-6 h-6 text-[#B9E605]" />
                  <h2 className="text-xl font-bold text-white">Personal Information</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="w-full px-4 py-2 bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 rounded-lg focus:outline-none focus:border-cyber-green"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full px-4 py-2 bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 rounded-lg focus:outline-none focus:border-cyber-green"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="w-full px-4 py-2 bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 rounded-lg focus:outline-none focus:border-cyber-green"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      value={profile.country}
                      onChange={(e) => setProfile({ ...profile, country: e.target.value })}
                      className="w-full px-4 py-2 bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 rounded-lg focus:outline-none focus:border-cyber-green"
                    />
                  </div>

                  <button className="w-full px-6 py-3 bg-[#B9E605] text-black font-bold rounded-lg hover:bg-[#B9E605]/90 transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>

              {/* KYC Verification */}
              <div
                className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <FaUser className="w-6 h-6 text-[#B9E605]" />
                  <h2 className="text-xl font-bold text-white">KYC Verification</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium">Verification Status</div>
                      <div className="text-sm text-gray-400">
                        {profile.kycStatus === 'verified' && 'Your account is verified'}
                        {profile.kycStatus === 'pending' && 'Your verification is pending review'}
                        {profile.kycStatus === 'rejected' && 'Your verification was rejected'}
                      </div>
                    </div>
                    <div>
                      {profile.kycStatus === 'verified' && (
                        <FaCheckCircle className="w-6 h-6 text-[#B9E605]" />
                      )}
                      {profile.kycStatus === 'rejected' && (
                        <FaTimesCircle className="w-6 h-6 text-red-500" />
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg border border-cyber-green/10">
                      <div className="flex items-center space-x-3">
                        <div className="text-white font-medium">ID Card Front</div>
                        {profile.kycDocuments.idFront === 'completed' && (
                          <FaCheckCircle className="w-4 h-4 text-[#B9E605]" />
                        )}
                        {profile.kycDocuments.idFront === 'pending' && (
                          <FaClock className="w-4 h-4 text-yellow-500" />
                        )}
                        {profile.kycDocuments.idFront === 'rejected' && (
                          <FaTimesCircle className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                      <div className="text-sm text-gray-400">
                        {profile.kycDocuments.idFront === 'completed' && 'Completed'}
                        {profile.kycDocuments.idFront === 'pending' && 'Pending'}
                        {profile.kycDocuments.idFront === 'rejected' && 'Rejected'}
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg border border-cyber-green/10">
                      <div className="flex items-center space-x-3">
                        <div className="text-white font-medium">ID Card Back</div>
                        {profile.kycDocuments.idBack === 'completed' && (
                          <FaCheckCircle className="w-4 h-4 text-[#B9E605]" />
                        )}
                        {profile.kycDocuments.idBack === 'pending' && (
                          <FaClock className="w-4 h-4 text-yellow-500" />
                        )}
                        {profile.kycDocuments.idBack === 'rejected' && (
                          <FaTimesCircle className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                      <div className="text-sm text-gray-400">
                        {profile.kycDocuments.idBack === 'completed' && 'Completed'}
                        {profile.kycDocuments.idBack === 'pending' && 'Pending'}
                        {profile.kycDocuments.idBack === 'rejected' && 'Rejected'}
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg border border-cyber-green/10">
                      <div className="flex items-center space-x-3">
                        <div className="text-white font-medium">Selfie with ID</div>
                        {profile.kycDocuments.selfie === 'completed' && (
                          <FaCheckCircle className="w-4 h-4 text-[#B9E605]" />
                        )}
                        {profile.kycDocuments.selfie === 'pending' && (
                          <FaClock className="w-4 h-4 text-yellow-500" />
                        )}
                        {profile.kycDocuments.selfie === 'rejected' && (
                          <FaTimesCircle className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                      <div className="text-sm text-gray-400">
                        {profile.kycDocuments.selfie === 'completed' && 'Completed'}
                        {profile.kycDocuments.selfie === 'pending' && 'Pending'}
                        {profile.kycDocuments.selfie === 'rejected' && 'Rejected'}
                      </div>
                    </div>
                  </div>

                  {profile.kycStatus === 'rejected' && (
                    <button className="w-full px-6 py-3 bg-[#B9E605] text-black font-bold rounded-lg hover:bg-[#B9E605]/90 transition-colors">
                      Resubmit Documents
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 