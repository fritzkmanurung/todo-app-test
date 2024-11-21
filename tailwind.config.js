/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-waves': "linear-gradient(45deg, #3b82f6 25%, #9333ea 50%, #facc15 75%)",
      },
      animation: {
        'gradient-move': 'gradientMove 6s ease-in-out infinite',
        'wave': 'wave 5s linear infinite',
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        wave: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(-10px) translateY(5px)' },
          '50%': { transform: 'translateX(10px) translateY(-5px)' },
          '75%': { transform: 'translateX(-10px) translateY(-10px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};