/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0F74BC',
        'light-blue': '#60a5fa',
        'dark-gray': '#232629',
        'light-gray': '#f8fafc',
        'hero': '#f8fdff',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      zIndex: {
        41: '41',
        42: '42',
        43: '43',
        44: '44',
        45: '45',
        60: '60',
        70: '70',
        80: '80',
        90: '90',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      }
      addUtilities(newUtilities)
    }
  ],
}
