'use client';

import { useState } from 'react';
import { FiCopy, FiCheck, FiMoon } from 'react-icons/fi';

interface Task {
  id: string;
  title: string;
  points: number;
  status: 'pending' | 'completed';
  description: string;
  action: string;
  link?: string;
}

const tasks: Task[] = [
  {
    id: 'connect-wallet',
    title: 'Connect Wallet',
    points: 200,
    status: 'pending',
    description: 'Connect your wallet and earn 200 Moons!',
    action: 'Connect Wallet'
  },
  {
    id: 'referrals',
    title: 'Earn Moons with Referrals',
    points: 100,
    status: 'pending',
    description: 'Invite your friends and earn +100 Moons for each successful referral.',
    action: 'Invite Link',
    link: 'https://credible.finance/invite/h2k28v'
  },
  {
    id: 'follow-twitter',
    title: 'Follow on Twitter',
    points: 100,
    status: 'pending',
    description: 'Stay updated with Credible news and earn 100 Moons for following us.',
    action: 'Follow'
  },
  {
    id: 'share-twitter',
    title: 'Share on Twitter',
    points: 5,
    status: 'pending',
    description: 'Share your invitation code on Twitter and earn 5 Moons.',
    action: 'Share'
  },
  {
    id: 'join-discord',
    title: 'Join Our Discord',
    points: 100,
    status: 'pending',
    description: 'Join our vibrant community to interact and claim 100 Moons.',
    action: 'Join'
  },
  {
    id: 'join-telegram',
    title: 'Join Our Telegram',
    points: 100,
    status: 'pending',
    description: 'Join our vibrant community to interact and claim 100 Moons.',
    action: 'Join'
  },
  {
    id: 'complete-kyc',
    title: 'Complete Your KYC',
    points: 500,
    status: 'pending',
    description: 'Verify your identity to secure your account and earn 500 Moons!',
    action: 'Start KYC'
  },
  {
    id: 'lend',
    title: 'Lend on CREDIBLE',
    points: 2000,
    status: 'pending',
    description: 'Complete your first lending transaction on Credible\'s lending pools and earn 2000 Moons',
    action: 'Lend Now'
  }
];

export function Airdrop() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Status Box */}
      <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <FiMoon className="w-6 h-6 text-[#B9E605]" />
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

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Earn Moons</h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2A2A2A] hover:border-[#B9E605] transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">{task.title}</h3>
              <span className="text-[#B9E605] font-bold">+{task.points} Moons</span>
            </div>
            <p className="text-gray-400 mb-4">{task.description}</p>
            <div className="flex items-center justify-between">
              <span className={`px-3 py-1 rounded-full text-sm ${
                task.status === 'completed' 
                  ? 'bg-green-500/20 text-green-500' 
                  : 'bg-yellow-500/20 text-yellow-500'
              }`}>
                {task.status === 'completed' ? 'Completed' : 'Pending'}
              </span>
              {task.link ? (
                <button
                  onClick={() => copyToClipboard(task.link!)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#2A2A2A] rounded-lg hover:bg-[#3A3A3A] transition-colors"
                >
                  {copied === task.link ? (
                    <>
                      <FiCheck className="text-green-500" />
                      <span className="text-green-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FiCopy />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              ) : (
                <button className="px-4 py-2 bg-[#B9E605] text-black font-bold rounded-lg hover:bg-[#B9E605]/90 transition-colors">
                  {task.action}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 