import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cyber-green': '#B9E605',
        'cyber-dark': '#0A0A0A',
        'cyber-gray': {
          100: '#1A1A1A',
          200: '#2A2A2A',
          300: '#3A3A3A',
        },
        'cyber-accent': '#00F5FF',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #B9E605, 0 0 10px #B9E605, 0 0 15px #B9E605' },
          '100%': { boxShadow: '0 0 10px #B9E605, 0 0 20px #B9E605, 0 0 30px #B9E605' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config 