'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaUserPlus, FaUserEdit, FaUserMinus } from 'react-icons/fa';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  status: 'active' | 'inactive';
}

const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    status: 'active',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user',
    status: 'active',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'user',
    status: 'inactive',
  },
];

export default function UserManagement() {
  const [users] = useState<User[]>(mockUsers);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-2">User Management</h1>
        <p className="text-gray-400">Manage user accounts and permissions</p>
      </div>

      <div className="flex justify-end">
        <button className="px-4 py-2 bg-[#B9E605] text-black rounded-lg hover:bg-[#B9E605]/90 transition-colors flex items-center space-x-2">
          <FaUserPlus className="w-4 h-4" />
          <span>Add User</span>
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
      >
        <div className="flex items-center justify-center space-x-3 mb-6">
          <FaUsers className="w-6 h-6 text-[#B9E605]" />
          <h2 className="text-xl font-bold text-white">Users</h2>
        </div>

        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-4 bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-cyber-gray-100 dark:bg-cyber-gray-200 flex items-center justify-center">
                  <FaUsers className="w-5 h-5 text-[#B9E605]" />
                </div>
                <div>
                  <div className="text-white font-medium">{user.name}</div>
                  <div className="text-sm text-gray-400">{user.email}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-white font-medium capitalize">{user.role}</div>
                  <div className={`text-sm ${user.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-blue-500 hover:bg-blue-500/10 rounded-lg transition-colors">
                    <FaUserEdit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                    <FaUserMinus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 