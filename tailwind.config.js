/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#161622',
        secondary: {
          DEFAULT: '#FF9C01',
          100: '#FF9001',
          200: '#FF8E01',
        },
      },
      fontFamily: {
        pregular: ['Poppins-Regular', 'sans-serif'],
        psemibold: ['Poppins-SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
