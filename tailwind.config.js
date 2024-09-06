/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#1A1A1A",
        lightText: "#F3F3F3",
        accentColor: "#FFC857", // you can customize this color as needed
        darkbrown: {
          50: '#f4f1ee',
          100: '#e2dcd3',
          200: '#c1b1a4',
          300: '#9f856f',
          400: '#7d5a42',
          500: '#5f422c', // Dark brown base
          600: '#4c3422',
          700: '#39271a',
          800: '#271a12',
          900: '#140e0a',
        },
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        slideInFromLeft: 'slideInFromLeft 1s ease-out',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        move: 'move 10s linear infinite',
      },
    },
  },
  plugins: [],
};
