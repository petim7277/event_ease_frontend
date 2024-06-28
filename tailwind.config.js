/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1DA1F2',
        customGreen: '#17BF63',
        customRed: '#E0245E',
        customGrey: '#1D1D1D',
      },
    },
  },
  plugins: [],
}