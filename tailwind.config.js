/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#705043',
          600: '#583D34',
          700: '#4A332C',
          800: '#3C2A24',
          900: '#2E201C',
        },
        background: '#FFF8E7',
      },
      fontFamily: {
        brand: ['var(--font-playfair-display)'],
      },
    },
  },
  plugins: [],
} 