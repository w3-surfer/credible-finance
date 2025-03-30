'use client';

import { Layout } from '@/components/Layout';
import { AccountMenu } from '@/components/AccountMenu';
import PageTitle from '@/components/PageTitle';
import { FiUsers, FiGift, FiCopy, FiCheck, FiX, FiFilter } from 'react-icons/fi';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserFriends, FaCopy, FaShare } from 'react-icons/fa';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Referral {
  id: string;
  name: string;
  date: string;
  reward: string;
  status: 'active' | 'pending';
}

export default function Referral() {
  const [timeRange, setTimeRange] = useState('1M');
  const [showFilters, setShowFilters] = useState(false);
  const [referrals] = useState<Referral[]>([
    {
      id: '1',
      name: 'John Doe',
      date: '2024-03-15',
      reward: '$50.00',
      status: 'active'
    },
    {
      id: '2',
      name: 'Jane Smith',
      date: '2024-03-14',
      reward: '$50.00',
      status: 'pending'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      date: '2024-03-13',
      reward: '$50.00',
      status: 'active'
    }
  ]);

  const referralCode = 'CRED123456';
  const referralLink = `https://credible.finance/ref/${referralCode}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Você pode adicionar uma notificação de sucesso aqui
  };

  // Dados dos gráficos
  const rewardsData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Rewards',
        data: [120, 190, 300, 450, 500, 600],
        borderColor: '#B9E605',
        backgroundColor: 'rgba(185, 230, 5, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const onboardingData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Onboarding',
        data: [5, 8, 12, 15, 18, 20],
        borderColor: '#B9E605',
        backgroundColor: 'rgba(185, 230, 5, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#9CA3AF'
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#9CA3AF'
        }
      }
    }
  };

  const timeRanges = [
    { label: '1D', value: '1D' },
    { label: '1W', value: '1W' },
    { label: '1M', value: '1M' },
    { label: '1Y', value: '1Y' },
    { label: 'All', value: 'ALL' }
  ];

  return (
    <>
      <PageTitle
        title="Referral"
        subtitle="Invite friends and earn rewards through our referral program"
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
              {/* Card Principal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
              >
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <FaUserFriends className="w-6 h-6 text-[#B9E605]" />
                  <h2 className="text-xl font-bold text-white">Your Referral Code</h2>
                </div>

                <div className="flex items-center justify-center space-x-4 mb-8">
                  <div className="px-4 py-2 bg-cyber-gray-100 dark:bg-cyber-gray-200 text-white border border-cyber-green/20 rounded-lg">
                    {referralCode}
                  </div>
                  <button
                    onClick={() => copyToClipboard(referralCode)}
                    className="p-2 text-[#B9E605] hover:bg-[#B9E605]/10 rounded-lg transition-colors"
                  >
                    <FaCopy className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => copyToClipboard(referralLink)}
                    className="p-2 text-[#B9E605] hover:bg-[#B9E605]/10 rounded-lg transition-colors"
                  >
                    <FaShare className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  {referrals.map((referral) => (
                    <div
                      key={referral.id}
                      className="flex items-center justify-between p-4 bg-cyber-gray-100 dark:bg-cyber-gray-200 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-cyber-gray-100 dark:bg-cyber-gray-200 flex items-center justify-center">
                          <FaUserFriends className="w-5 h-5 text-[#B9E605]" />
                        </div>
                        <div>
                          <div className="text-white font-medium">{referral.name}</div>
                          <div className="text-sm text-gray-400">{referral.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-[#B9E605] font-medium">{referral.reward}</div>
                          <div className={`text-sm ${
                            referral.status === 'active' ? 'text-green-500' : 'text-yellow-500'
                          }`}>
                            {referral.status}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Gráficos */}
              <div className="grid grid-cols-1 gap-8">
                <div className="bg-black/50 border border-gray-800 rounded-lg">
                  <div className="flex items-center justify-between p-6 pb-0">
                    <h3 className="text-lg font-bold">Rewards vs Date</h3>
                    <div className="flex items-center gap-2">
                      {timeRanges.map((range) => (
                        <button
                          key={range.value}
                          onClick={() => setTimeRange(range.value)}
                          className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                            timeRange === range.value
                              ? 'bg-[#B9E605] text-black'
                              : 'bg-black/30 text-gray-400 hover:text-white'
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="h-[300px] p-6 pt-4">
                    <Line options={chartOptions} data={rewardsData} />
                  </div>
                </div>
                <div className="bg-black/50 border border-gray-800 rounded-lg">
                  <div className="flex items-center justify-between p-6 pb-0">
                    <h3 className="text-lg font-bold">Onboarding vs Date</h3>
                    <div className="flex items-center gap-2">
                      {timeRanges.map((range) => (
                        <button
                          key={range.value}
                          onClick={() => setTimeRange(range.value)}
                          className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                            timeRange === range.value
                              ? 'bg-[#B9E605] text-black'
                              : 'bg-black/30 text-gray-400 hover:text-white'
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="h-[300px] p-6 pt-4">
                    <Line options={chartOptions} data={onboardingData} />
                  </div>
                </div>
              </div>

              {/* Tabela de Referidos */}
              <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">Your Referrals</h3>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-2 bg-black/30 text-gray-400 hover:text-white rounded-lg transition-colors"
                  >
                    <FiFilter className="w-4 h-4" />
                    Filter
                  </button>
                </div>
                {showFilters && (
                  <div className="mb-4 p-4 bg-black/30 rounded-lg">
                    {/* Adicione seus filtros aqui */}
                    <p className="text-gray-400">Filtros serão implementados aqui</p>
                  </div>
                )}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-sm text-gray-400 border-b border-gray-800">
                        <th className="pb-4">User Name</th>
                        <th className="pb-4">Address</th>
                        <th className="pb-4">KYC Status</th>
                        <th className="pb-4">Wallet Connected</th>
                        <th className="pb-4">Lend Status</th>
                        <th className="pb-4">Borrow Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {referrals.map((referral, index) => (
                        <tr key={index} className="text-sm border-b border-gray-800">
                          <td className="py-4">{referral.name}</td>
                          <td className="py-4">{referral.address}</td>
                          <td className="py-4">
                            {referral.kycStatus ? (
                              <FiCheck className="text-green-500" />
                            ) : (
                              <FiX className="text-red-500" />
                            )}
                          </td>
                          <td className="py-4">
                            {referral.walletConnected ? (
                              <FiCheck className="text-green-500" />
                            ) : (
                              <FiX className="text-red-500" />
                            )}
                          </td>
                          <td className="py-4">
                            {referral.lendStatus ? (
                              <FiCheck className="text-green-500" />
                            ) : (
                              <FiX className="text-red-500" />
                            )}
                          </td>
                          <td className="py-4">
                            {referral.borrowStatus ? (
                              <FiCheck className="text-green-500" />
                            ) : (
                              <FiX className="text-red-500" />
                            )}
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
      </Layout>
    </>
  );
} 