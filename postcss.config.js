const path = require("path");
const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

const TAILWIND_CONFIG = path.join(__dirname, "tailwind.config.js");

const purgecssConfig = {
  content: ["./**/*.html", "./**/*.md"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
};

module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    tailwindcss(TAILWIND_CONFIG),
    require("autoprefixer"),
    purgecss(purgecssConfig),
  ],
};
