/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'baby-blue': {
          light: '#D3EAF2',
          DEFAULT: '#ADD8E6',
          dark: '#7DAEC5',
        },
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 20s ease-in-out infinite',
        'wave-slow': 'wave 12s linear infinite',
        'gradient-slow': 'gradient 8s ease infinite',
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'blink': 'blink 1s step-end infinite',
      }
    },
  },
  plugins: [],
};