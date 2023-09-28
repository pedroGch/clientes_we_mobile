/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'negro': "#141414",
        'verde': "#64ffda",
        'violeta': "#9455be",
        'principal': "#4a2980"
      },
      fontFamily: {
        'tipografiaTitulares': ['Catamaran', 'sans-serif'],
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}


