'use client';

import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { Ecosystem } from '@/components/home/Ecosystem';
import { Roadmap } from '@/components/home/Roadmap';
import { FAQ } from '@/components/home/FAQ';
import { CTA } from '@/components/home/CTA';
import { Security } from '@/components/home/Security';
import { InteractiveBackground } from '@/components/home/InteractiveBackground';
import { Statistics } from '@/components/home/Statistics';

export default function HomePage() {
  return (
    <main className="relative">
      <InteractiveBackground />
      <Hero />
      <Features />
      <Statistics />
      <Security />
      <Ecosystem />
      <Roadmap />
      <FAQ />
      <CTA />
    </main>
  );
} 