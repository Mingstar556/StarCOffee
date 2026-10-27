/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#1b1412',
        coffee: '#2c221e',
        amber: '#c88a58',
        gold: '#e0b084',
        cream: '#fcf8f2',
        warmgray: '#a39690',
      },
      fontFamily: {
        sans: ['var(--font-sans)', '"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['var(--font-serif)', '"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
