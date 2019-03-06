const path = require("path");
const tailwindcss = require("tailwindcss");

const TAILWIND_CONFIG = path.join(__dirname, "tailwind.config.js");

module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    tailwindcss(TAILWIND_CONFIG),
    require("autoprefixer")
  ]
};
