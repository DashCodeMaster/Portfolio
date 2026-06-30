import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#05060c',
        surface: '#11131c',
        surface2: '#141728',
        primary: '#7c3aed',
        accent: '#57ddff',
        border: 'rgba(255,255,255,0.08)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.05), 0 20px 120px rgba(124,58,237,0.12)',
      },
      backgroundImage: {
        radial: 'radial-gradient(circle at top, rgba(124,58,237,0.22), transparent 45%), radial-gradient(circle at bottom right, rgba(87,221,255,0.14), transparent 25%)',
      },
    },
  },
  plugins: [],
};

export default config;
