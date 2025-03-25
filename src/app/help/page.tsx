'use client';

import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { FiHelpCircle, FiBook, FiMessageSquare, FiMail, FiSearch } from 'react-icons/fi';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface HelpSection {
  title: string;
  icon: React.ElementType;
  description: string;
  items: {
    title: string;
    description: string;
    link: string;
  }[];
}

const faqs: FAQItem[] = [
  {
    question: 'Como faço para começar a usar a plataforma?',
    answer: 'Para começar, você precisa criar uma conta e conectar sua carteira Solana. Depois disso, você poderá navegar pelo dashboard e começar a usar todas as funcionalidades disponíveis.',
  },
  {
    question: 'Quais carteiras são suportadas?',
    answer: 'Atualmente, suportamos as carteiras Phantom e Solflare. Em breve, adicionaremos suporte para mais carteiras Solana.',
  },
  {
    question: 'Como faço para recuperar minha senha?',
    answer: 'Você pode recuperar sua senha clicando no link "Esqueceu sua senha?" na página de login. Um email será enviado com as instruções para redefinir sua senha.',
  },
  {
    question: 'Como funciona a segurança da plataforma?',
    answer: 'Utilizamos criptografia de ponta a ponta e autenticação de dois fatores para garantir a segurança dos seus dados. Todas as transações são assinadas digitalmente e verificadas na blockchain Solana.',
  },
  {
    question: 'Posso cancelar minha assinatura a qualquer momento?',
    answer: 'Sim, você pode cancelar sua assinatura a qualquer momento através das configurações da sua conta. O cancelamento será efetivo no final do período atual.',
  },
];

const helpSections: HelpSection[] = [
  {
    title: 'Documentação',
    icon: FiBook,
    description: 'Acesse nossa documentação completa para aprender mais sobre a plataforma',
    items: [
      {
        title: 'Guia de Início Rápido',
        description: 'Aprenda os conceitos básicos e comece a usar a plataforma',
        link: '/docs/quickstart',
      },
      {
        title: 'API Reference',
        description: 'Documentação detalhada da nossa API',
        link: '/docs/api',
      },
      {
        title: 'Tutoriais',
        description: 'Guias passo a passo para funcionalidades específicas',
        link: '/docs/tutorials',
      },
    ],
  },
  {
    title: 'Suporte',
    icon: FiMessageSquare,
    description: 'Entre em contato com nossa equipe de suporte',
    items: [
      {
        title: 'Chat ao Vivo',
        description: 'Converse com um agente de suporte em tempo real',
        link: '/support/chat',
      },
      {
        title: 'Base de Conhecimento',
        description: 'Encontre respostas para perguntas comuns',
        link: '/support/knowledge-base',
      },
      {
        title: 'Status do Sistema',
        description: 'Verifique o status atual dos nossos serviços',
        link: '/support/status',
      },
    ],
  },
  {
    title: 'Contato',
    icon: FiMail,
    description: 'Entre em contato conosco através de diferentes canais',
    items: [
      {
        title: 'Email',
        description: 'suporte@exemplo.com',
        link: 'mailto:suporte@exemplo.com',
      },
      {
        title: 'Discord',
        description: 'Junte-se à nossa comunidade no Discord',
        link: 'https://discord.gg/exemplo',
      },
      {
        title: 'Twitter',
        description: 'Siga-nos para atualizações e novidades',
        link: 'https://twitter.com/exemplo',
      },
    ],
  },
];

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout
      title="Ajuda"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative"
        >
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Pesquisar ajuda..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-[#B9E605]"
          />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 border border-gray-800"
        >
          <div className="flex items-center mb-6">
            <FiHelpCircle className="w-6 h-6 text-[#B9E605] mr-2" />
            <h2 className="text-xl font-bold">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-800 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors"
                >
                  <span className="font-medium">{faq.question}</span>
                  <span
                    className={`transform transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="px-4 py-3 bg-gray-800/30">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {helpSections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: sectionIndex * 0.1 + 0.2 }}
            className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <section.icon className="w-6 h-6 text-[#B9E605] mr-2" />
              <h2 className="text-xl font-bold">{section.title}</h2>
            </div>
            <p className="text-gray-400 mb-6">{section.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.items.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className="block p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors"
                >
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
} 