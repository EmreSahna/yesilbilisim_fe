/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'arrow': ['arrow_font'],
      'noto': ['noto_serif_ahom']
    },
    extend: {
      screens: {
        'small': '574px',
        'med': '852px',
      },
      boxShadow: {
        'card': '0px 0px 5px rgba(0, 0, 0, 0.25)',
        'product': '0 0 30px rgba(0, 0, 0, .04)',
        'card-hover':'0px 4px 8px rgba(38, 38, 38, 0.2);'
      },
      colors: {
        'main-blue': '#0870B0',
        'main-gray': '#E8E8E8',
        'main-gray-2': '#BFBFBF',
        'main-black': '#242429',
        'main-gray-3': '#606060'
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
