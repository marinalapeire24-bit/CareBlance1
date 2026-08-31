/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#effcf6',
          100: '#d3f5e6',
          200: '#aae9d1',
          300: '#72d7b6',
          400: '#3dbf98',
          500: '#1ea47e',
          600: '#118466',
          700: '#0f6a54',
          800: '#105444',
          900: '#0e453a',
        },
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5d9e2',
          300: '#b0b8c8',
          400: '#8590a6',
          500: '#66718a',
          600: '#515a71',
          700: '#43495c',
          800: '#3a3f4e',
          900: '#0f1420',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        warn: {
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        info: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      lineHeight: {
        body: '1.5',
      },
    },
  },
  plugins: [],
};
