/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-blue': '#0870B0',
        'main-gray': '#E8E8E8',
        'main-gray-2': '#BFBFBF'
      },
    },
  },
  plugins: [],
}
