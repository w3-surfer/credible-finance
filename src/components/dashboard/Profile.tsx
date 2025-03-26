'use client';

import { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiMapPin, FiEdit2, FiSave } from 'react-icons/fi';

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, New York, NY 10001'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Aqui você pode adicionar a lógica para salvar os dados
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Profile Settings</h2>
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#B9E605] text-black font-bold rounded-lg hover:bg-[#B9E605]/90 transition-colors"
        >
          {isEditing ? (
            <>
              <FiSave />
              <span>Save Changes</span>
            </>
          ) : (
            <>
              <FiEdit2 />
              <span>Edit Profile</span>
            </>
          )}
        </button>
      </div>

      <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2A2A2A]">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#2A2A2A] rounded-full flex items-center justify-center">
              <FiUser className="w-8 h-8 text-gray-400" />
            </div>
            <div>
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                  className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#B9E605]"
                />
              ) : (
                <h3 className="text-xl font-bold text-white">{profileData.name}</h3>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FiMail className="w-5 h-5 text-gray-400" />
              {isEditing ? (
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  className="flex-1 bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#B9E605]"
                />
              ) : (
                <span className="text-gray-400">{profileData.email}</span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <FiPhone className="w-5 h-5 text-gray-400" />
              {isEditing ? (
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                  className="flex-1 bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#B9E605]"
                />
              ) : (
                <span className="text-gray-400">{profileData.phone}</span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <FiMapPin className="w-5 h-5 text-gray-400" />
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.address}
                  onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                  className="flex-1 bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#B9E605]"
                />
              ) : (
                <span className="text-gray-400">{profileData.address}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 