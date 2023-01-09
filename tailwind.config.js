/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'arrow': ['arrow_font'],
    },
    extend: {
      colors: {
        'main-blue': '#0870B0',
        'main-gray': '#E8E8E8',
        'main-gray-2': '#BFBFBF',
        'main-black': '#242429',
        'main-gray-3': '#606060'
      },
    },
  },
  plugins: [],
}
