module.exports = {
  plugins: [require("tailwindcss")("tailwind.js"), require("autoprefixer")()],
  performance: {
    hints: false
  }
};
