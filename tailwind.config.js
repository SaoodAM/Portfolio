/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],   // optional default
        nav: ["Manrope", "system-ui", "sans-serif"],    // for navbar/sidebar
      },
    },
  },
  plugins: [],
};
