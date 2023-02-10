/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      blue: "#181b3a",
      mainBlue: "#0a0e29",
      orange: "#f0621b",
      rose: "#e43c55",
      lightGreen: "#00da98",
      lightGreen2: "#03C288",
      grey: "#bfdceb",
      purple: "#5720b6",
      tOrange: colors.orange,
      tRed: colors.red,
      white: colors.white
    },
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        hind: ['Hind Siliguri', 'sans-serif'],
      },
      boxShadow: {
        card: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
        cardhover: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)',
      },
    },
  },
  plugins: [],
}
