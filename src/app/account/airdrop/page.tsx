'use client';

import { Layout } from '@/components/Layout';
import { AccountMenu } from '@/components/dashboard/AccountMenu';
import { FiCopy, FiTwitter, FiMessageSquare, FiCreditCard, FiUsers, FiShield, FiDollarSign } from 'react-icons/fi';
import { useState } from 'react';
import Image from 'next/image';

export default function Airdrop() {
  const [copied, setCopied] = useState(false);
  const inviteLink = 'https://credible.finance/invite/h2k28v';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tasks = [
    {
      id: 1,
      title: 'Connect Wallet',
      moons: 200,
      status: 'Pending',
      description: 'Connect your wallet and earn 200 Moons!',
      buttonText: 'Connect Wallet',
      icon: FiCreditCard,
      action: () => console.log('Connect Wallet')
    },
    {
      id: 2,
      title: 'Earn Moons with Referrals',
      moons: 100,
      status: 'Pending',
      description: 'Invite your friends and earn +100 Moons for each successful referral.',
      buttonText: 'Invite Link',
      icon: FiUsers,
      action: copyToClipboard
    },
    {
      id: 3,
      title: 'Follow on Twitter',
      moons: 100,
      status: 'Pending',
      description: 'Stay updated with Credible news and earn 100 Moons for following us.',
      buttonText: 'Follow',
      icon: FiTwitter,
      action: () => console.log('Follow Twitter')
    },
    {
      id: 4,
      title: 'Share on Twitter',
      moons: 5,
      status: 'Pending',
      description: 'Share your invitation code on Twitter and earn 5 Moons.',
      buttonText: 'Share',
      icon: FiTwitter,
      action: () => console.log('Share Twitter')
    },
    {
      id: 5,
      title: 'Join Our Discord',
      moons: 100,
      status: 'Pending',
      description: 'Join our vibrant community to interact and claim 100 Moons.',
      buttonText: 'Join',
      icon: FiMessageSquare,
      action: () => console.log('Join Discord')
    },
    {
      id: 6,
      title: 'Join Our Telegram',
      moons: 100,
      status: 'Pending',
      description: 'Join our vibrant community to interact and claim 100 Moons.',
      buttonText: 'Join',
      icon: FiMessageSquare,
      action: () => console.log('Join Telegram')
    },
    {
      id: 7,
      title: 'Complete Your KYC',
      moons: 500,
      status: 'Pending',
      description: 'Verify your identity to secure your account and earn 500 Moons!',
      buttonText: 'Start KYC',
      icon: FiShield,
      action: () => console.log('Start KYC')
    },
    {
      id: 8,
      title: 'Lend on CREDIBLE',
      moons: 2000,
      status: 'Pending',
      description: 'Complete your first lending transaction on Credible\'s lending pools and earn 2000 Moons',
      buttonText: 'Lend Now',
      icon: FiDollarSign,
      action: () => console.log('Lend Now')
    }
  ];

  return (
    <Layout title="Airdrop" subtitle="Complete tasks to qualify for $CRED airdrops!">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu Lateral */}
          <div className="md:col-span-1">
            <AccountMenu />
          </div>

          {/* Conteúdo Principal */}
          <div className="md:col-span-3">
            {/* Status Box */}
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Image src="/moon.png" alt="Moon" width={24} height={24} />
                  <h2 className="text-2xl font-bold">Moons Earned</h2>
                </div>
                <div className="text-right">
                  <h2 className="text-2xl font-bold mb-2">Tasks Completed</h2>
                  <p className="text-4xl font-bold text-[#B9E605]">0/8</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-4xl font-bold text-[#B9E605]">1,234</p>
                </div>
              </div>
            </div>

            {/* Tasks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-black/30 border border-gray-800 rounded-lg p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <task.icon className="w-5 h-5 text-[#B9E605]" />
                      <h3 className="text-lg font-bold">{task.title}</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full border border-[#FF6B00] text-[#FF6B00] text-sm">
                      {task.status}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{task.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Moons</p>
                      <p className="text-xl font-bold text-[#B9E605]">+{task.moons}</p>
                    </div>
                    {task.id === 2 ? (
                      <div className="flex items-center gap-2">
                        <div className="bg-black/50 border border-gray-800 rounded-lg px-3 py-2 text-sm">
                          {inviteLink}
                        </div>
                        <button
                          onClick={copyToClipboard}
                          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                        >
                          <FiCopy className="w-5 h-5" />
                        </button>
                        {copied && (
                          <span className="text-sm text-[#B9E605]">Copied!</span>
                        )}
                      </div>
                    ) : (
                      <button
                        onClick={task.action}
                        className="px-4 py-2 bg-[#B9E605] text-black rounded-lg hover:bg-[#B9E605]/90 transition-colors"
                      >
                        {task.buttonText}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 