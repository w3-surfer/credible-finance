'use client';

interface StakingPool {
  token: string;
  staked: string;
  rewards: string;
  apy: string;
  lockPeriod: string;
  icon: string;
}

const stakingPools: StakingPool[] = [
  {
    token: 'CRED',
    staked: '10,000 CRED',
    rewards: '500 CRED',
    apy: '12.5%',
    lockPeriod: '30 Days',
    icon: '/cred logo.png'
  },
  {
    token: 'SOL',
    staked: '1,000 SOL',
    rewards: '50 SOL',
    apy: '8.2%',
    lockPeriod: '90 Days',
    icon: '/sol-logo.png'
  },
  {
    token: 'USDC',
    staked: '50,000 USDC',
    rewards: '2,500 USDC',
    apy: '10.5%',
    lockPeriod: '180 Days',
    icon: '/usdc-logo.png'
  }
];

export function Staking() {
  return (
    <div className="flex-1 min-w-0">
      {/* Conteúdo será adicionado posteriormente */}
    </div>
  );
} 