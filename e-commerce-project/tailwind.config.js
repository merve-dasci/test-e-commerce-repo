/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-green': '#0f766e',
        'theme-green-light': '#14b8a6',
        'theme-green-dark': '#134e4a',
      },
      maxWidth: {
        '1440': '90rem', 
      },
      screens: {
        '1440': '1440px',
      }
    },
  },
  plugins: [],
}
