/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'darkblue': '#2E4450',
      'lightblue': '#89DEE2',
      'beige': '#D7BAAD',
      'lightgrey': '#e0e3e5',
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}