'use client';

import { Layout } from '@/components/Layout';
import PageTitle from '@/components/PageTitle';
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
    description: 'Entre em contato via email',
    value: 'contato@exemplo.com',
    link: 'mailto:contato@exemplo.com',
  },
  {
    icon: FiPhone,
    title: 'Telefone',
    description: 'Ligue para nós',
    value: '+55 (11) 9999-9999',
    link: 'tel:+5511999999999',
  },
  {
    icon: FiMapPin,
    title: 'Endereço',
    description: 'Nossa localização',
    value: 'Av. Paulista, 1000 - São Paulo, SP',
    link: 'https://maps.google.com',
  },
  {
    icon: FiMessageSquare,
    title: 'Chat',
    description: 'Suporte em tempo real',
    value: 'Disponível 24/7',
    link: '/chat',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de envio do formulário
    console.log('Form data:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <PageTitle
        title="Contato"
        subtitle="Entre em contato conosco"
      />
      <Layout>
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

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 border border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#B9E605]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#B9E605]"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#B9E605]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#B9E605]"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex items-center px-6 py-2 bg-[#B9E605] text-black font-bold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  <FiSend className="mr-2" />
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </Layout>
    </>
  );
} 