const path = require("path");
const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

const TAILWIND_CONFIG = path.join(__dirname, "tailwind.config.js");

const purgecssConfig = {
  content: ["./**/*.html", "./**/*.md", "./assets/**/*.js"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
};

module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    tailwindcss(TAILWIND_CONFIG),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production"
      ? [purgecss(purgecssConfig)]
      : []),
  ],
};
