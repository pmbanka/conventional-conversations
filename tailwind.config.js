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
      fontFamily: {
        'sans': 'Roboto, Arial, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      }
    },
  },
  variants: {
    extend: {
      display: ['dark'],
    }
  },
  purge: {
    mode: 'all',
    content: ["./**/*.html", "./**/*.md", "./assets/**/*.js"],
    options: {
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }
  }
};
