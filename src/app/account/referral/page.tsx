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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Referral() {
  const [timeRange, setTimeRange] = useState('1M');
  const [showFilters, setShowFilters] = useState(false);

  const referralCode = 'CRED123XYZ';
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

  // Dados da tabela
  const referrals = [
    {
      name: 'John Doe',
      address: '0x1234...5678',
      kycStatus: true,
      walletConnected: true,
      lendStatus: true,
      borrowStatus: false
    },
    {
      name: 'Jane Smith',
      address: '0x8765...4321',
      kycStatus: true,
      walletConnected: true,
      lendStatus: false,
      borrowStatus: true
    },
    {
      name: 'Mike Johnson',
      address: '0x2468...1357',
      kycStatus: false,
      walletConnected: true,
      lendStatus: false,
      borrowStatus: false
    }
  ];

  const timeRanges = [
    { label: '1D', value: '1D' },
    { label: '1W', value: '1W' },
    { label: '1M', value: '1M' },
    { label: '1Y', value: '1Y' },
    { label: 'All', value: 'ALL' }
  ];

  return (
    <Layout
      title="Referral"
      subtitle="Invite friends and earn rewards through our referral program"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu Lateral */}
          <div className="md:col-span-1">
            <AccountMenu />
          </div>

          {/* Conteúdo Principal */}
          <div className="md:col-span-3 space-y-8">
            {/* Card Principal */}
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#B9E605]/10 rounded-lg">
                  <FiUsers className="w-6 h-6 text-[#B9E605]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Referral Program</h2>
                  <p className="text-gray-400">Invite friends and earn rewards together</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Your Referral Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-400">Total Referrals</p>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Total Earnings</p>
                      <p className="text-2xl font-bold text-[#B9E605]">500 CRED</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Rewards Structure</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <FiGift className="text-[#B9E605]" />
                      <p className="text-sm">You get: 50 CRED per referral</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiGift className="text-[#B9E605]" />
                      <p className="text-sm">Friend gets: 25 CRED on signup</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Your Referral Code
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={referralCode}
                      readOnly
                      className="flex-1 bg-black/30 border border-gray-800 rounded-lg px-4 py-2 text-white"
                    />
                    <button
                      onClick={() => copyToClipboard(referralCode)}
                      className="p-2 bg-[#B9E605] text-black rounded-lg hover:bg-[#B9E605]/90 transition-colors"
                    >
                      <FiCopy className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Your Referral Link
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={referralLink}
                      readOnly
                      className="flex-1 bg-black/30 border border-gray-800 rounded-lg px-4 py-2 text-white"
                    />
                    <button
                      onClick={() => copyToClipboard(referralLink)}
                      className="p-2 bg-[#B9E605] text-black rounded-lg hover:bg-[#B9E605]/90 transition-colors"
                    >
                      <FiCopy className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

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
  );
} 