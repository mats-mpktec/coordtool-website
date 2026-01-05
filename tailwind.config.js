/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./sv/**/*.html",
    "./en/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
