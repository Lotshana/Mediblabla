/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'darkblue': '#2E4450',
      'lightblue': '#89DEE2',
      'beige': '#D7BAAD',
    },
  },
  plugins: [],
}