'use client';

import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiMessageSquare, FiSend } from 'react-icons/fi';
import { useState } from 'react';

interface ContactInfo {
  icon: React.ElementType;
  title: string;
  description: string;
  value: string;
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: FiMail,
    title: 'Email',
    description: 'Send us an email',
    value: 'contact@credible.finance',
    link: 'mailto:contact@credible.finance'
  },
  {
    icon: FiPhone,
    title: 'Phone',
    description: 'Call our support team',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: FiMessageSquare,
    title: 'Discord',
    description: 'Join our community',
    value: 'discord.gg/credible',
    link: 'https://discord.gg/credible'
  },
  {
    icon: FiMapPin,
    title: 'Location',
    description: 'Visit our office',
    value: 'San Francisco, CA'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de envio
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Layout title="Contact" subtitle="Get in touch with our team">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 border border-gray-800 hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-center mb-4">
                <info.icon className="w-6 h-6 text-[#B9E605] mr-2" />
                <h3 className="text-lg font-bold">{info.title}</h3>
              </div>
              <p className="text-gray-400 mb-2">{info.description}</p>
              <p className="text-white">{info.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          onSubmit={handleSubmit}
          className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-8 border border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black/30 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-[#B9E605] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black/30 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-[#B9E605] focus:border-transparent"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black/30 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-[#B9E605] focus:border-transparent"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 bg-black/30 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-[#B9E605] focus:border-transparent resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#B9E605] text-black rounded-lg font-semibold hover:bg-[#B9E605]/90 transition-colors"
          >
            <FiSend className="w-5 h-5" />
            Send Message
          </button>
        </motion.form>
      </div>
    </Layout>
  );
} 