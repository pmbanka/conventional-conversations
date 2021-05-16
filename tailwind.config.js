const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        pink: {
          600: "#ce017b",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
