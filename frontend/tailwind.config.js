import colors, { gray } from 'tailwindcss/colors';
/** @type {import('tailwindcss').Config} */
// tailwind.config.js

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.gray, DEFAULT: gray[200]},
        'text-primary': {
          DEFAULT: '#03045E',
        },
        'second-primary' : {
          DEFAULT: '#e5e7eb',
        },
        'detail': {
          DEFAULT: '#474306',
        }
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
    fontFamily: {
      // 'forNumbers': ['Special Elite', 'sans-serif'],
      'forNumbers': ['Graduate', 'sans-serif'],
    }
  },
  plugins: [
  ],
}
