/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        chronoBlue: "#47d1ff",
        chronoAccent: "#1fffe7"
      }
    }
  },
  plugins: []
};
