'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCamera, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Layout } from '@/components/Layout';
import { AccountMenu } from '@/components/dashboard';

interface Profile {
  name: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  kycStatus: 'pending' | 'verified' | 'rejected';
  kycDocuments: {
    idFront: string | null;
    idBack: string | null;
    selfie: string | null;
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
      idFront: null,
      idBack: null,
      selfie: null
    }
  });

  const handleImageUpload = (type: keyof Profile['kycDocuments']) => {
    // Implementar lógica de upload
    console.log('Uploading:', type);
  };

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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
              </motion.div>

              {/* KYC Verification */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
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
                      {profile.kycStatus === 'pending' && (
                        <div className="w-6 h-6 border-2 border-[#B9E605] rounded-full animate-spin border-t-transparent" />
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        ID Card Front
                      </label>
                      <div className="relative">
                        <div className="w-full h-32 bg-cyber-gray-100 dark:bg-cyber-gray-200 border border-cyber-green/20 rounded-lg flex items-center justify-center">
                          {profile.kycDocuments.idFront ? (
                            <img
                              src={profile.kycDocuments.idFront}
                              alt="ID Front"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          ) : (
                            <FaCamera className="w-8 h-8 text-gray-400" />
                          )}
                        </div>
                        <button
                          onClick={() => handleImageUpload('idFront')}
                          className="absolute bottom-2 right-2 bg-[#B9E605] text-black p-2 rounded-full hover:bg-[#B9E605]/90 transition-colors"
                        >
                          <FaCamera className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        ID Card Back
                      </label>
                      <div className="relative">
                        <div className="w-full h-32 bg-cyber-gray-100 dark:bg-cyber-gray-200 border border-cyber-green/20 rounded-lg flex items-center justify-center">
                          {profile.kycDocuments.idBack ? (
                            <img
                              src={profile.kycDocuments.idBack}
                              alt="ID Back"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          ) : (
                            <FaCamera className="w-8 h-8 text-gray-400" />
                          )}
                        </div>
                        <button
                          onClick={() => handleImageUpload('idBack')}
                          className="absolute bottom-2 right-2 bg-[#B9E605] text-black p-2 rounded-full hover:bg-[#B9E605]/90 transition-colors"
                        >
                          <FaCamera className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Selfie with ID
                      </label>
                      <div className="relative">
                        <div className="w-full h-32 bg-cyber-gray-100 dark:bg-cyber-gray-200 border border-cyber-green/20 rounded-lg flex items-center justify-center">
                          {profile.kycDocuments.selfie ? (
                            <img
                              src={profile.kycDocuments.selfie}
                              alt="Selfie"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          ) : (
                            <FaCamera className="w-8 h-8 text-gray-400" />
                          )}
                        </div>
                        <button
                          onClick={() => handleImageUpload('selfie')}
                          className="absolute bottom-2 right-2 bg-[#B9E605] text-black p-2 rounded-full hover:bg-[#B9E605]/90 transition-colors"
                        >
                          <FaCamera className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {profile.kycStatus === 'rejected' && (
                    <button className="w-full px-6 py-3 bg-[#B9E605] text-black font-bold rounded-lg hover:bg-[#B9E605]/90 transition-colors">
                      Resubmit Documents
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 