'use client';

import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaPercentage, FaCalendar } from 'react-icons/fa';

interface BeneficiaryDetailsProps {
  beneficiary?: {
    name: string;
    email: string;
    phone: string;
    allocation: number;
    dateAdded: string;
  };
}

export function BeneficiaryDetails({ beneficiary = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1 (555) 123-4567',
  allocation: 25,
  dateAdded: '2024-03-15'
} }: BeneficiaryDetailsProps) {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 border border-gray-800"
      >
        <div className="flex items-center mb-6">
          <FaUser className="w-6 h-6 text-[#B9E605] mr-2" />
          <h2 className="text-xl font-bold">Beneficiary Details</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <FaUser className="w-5 h-5 text-gray-400" />
            <div>
              <label className="block text-sm font-medium text-gray-400">Name</label>
              <p className="text-white">{beneficiary.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="w-5 h-5 text-gray-400" />
            <div>
              <label className="block text-sm font-medium text-gray-400">Email</label>
              <p className="text-white">{beneficiary.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="w-5 h-5 text-gray-400" />
            <div>
              <label className="block text-sm font-medium text-gray-400">Phone</label>
              <p className="text-white">{beneficiary.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaPercentage className="w-5 h-5 text-gray-400" />
            <div>
              <label className="block text-sm font-medium text-gray-400">Allocation</label>
              <p className="text-white">{beneficiary.allocation}%</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaCalendar className="w-5 h-5 text-gray-400" />
            <div>
              <label className="block text-sm font-medium text-gray-400">Date Added</label>
              <p className="text-white">{beneficiary.dateAdded}</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-end gap-4"
      >
        <button
          type="button"
          className="px-6 py-2 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors"
        >
          Edit
        </button>
        <button
          type="button"
          className="px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
        >
          Remove
        </button>
      </motion.div>
    </div>
  );
} 