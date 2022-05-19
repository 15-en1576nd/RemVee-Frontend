const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      ...colors,
      'primary': '#41B883',
      'secondary': '#34495E',
  },
  },
  plugins: [],
};
