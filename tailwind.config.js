/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5722', // Deep Orange
        dark: '#121212',
        'dark-light': '#1E1E1E',
      },
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
