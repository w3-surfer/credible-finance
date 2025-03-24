import React from 'react'
import Link from 'next/link'

export default function ConsumerApp() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-cyber-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-cyber-green mb-6">Consumer App</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Access credit and manage your real-world assets with our intuitive and secure platform.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-cyber-green mb-16 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-cyber-gray-200 rounded-lg border border-cyber-green/20 hover:border-cyber-green transition-all duration-300"
              >
                <div className="text-cyber-green text-2xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-cyber-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-cyber-green mb-16 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyber-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-cyber-green">{step.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-cyber-green mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their assets on our platform.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/dashboard" 
              className="px-8 py-3 bg-cyber-green text-cyber-dark font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300"
            >
              Launch App
            </Link>
            <Link 
              href="/register" 
              className="px-8 py-3 border-2 border-cyber-green text-cyber-green font-bold rounded-lg hover:bg-cyber-green hover:text-cyber-dark transition-all duration-300"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

const features = [
  {
    icon: "💳",
    title: "Digital Cards",
    description: "Virtual and physical cards for seamless spending"
  },
  {
    icon: "📊",
    title: "Credit Score",
    description: "AI-powered credit scoring based on on-chain activity"
  },
  {
    icon: "🔒",
    title: "Secure Access",
    description: "Multi-factor authentication and biometric security"
  },
  {
    icon: "💸",
    title: "Quick Loans",
    description: "Instant access to credit with no collateral"
  },
  {
    icon: "📱",
    title: "Mobile App",
    description: "Manage your assets on the go"
  },
  {
    icon: "🎯",
    title: "Rewards",
    description: "Earn points for using the platform"
  }
]

const steps = [
  {
    icon: "1️⃣",
    title: "Connect Wallet",
    description: "Link your Solana wallet to get started"
  },
  {
    icon: "2️⃣",
    title: "Get Scored",
    description: "Our AI analyzes your on-chain activity"
  },
  {
    icon: "3️⃣",
    title: "Access Credit",
    description: "Receive your credit limit instantly"
  },
  {
    icon: "4️⃣",
    title: "Start Using",
    description: "Use your credit for any purpose"
  }
] 