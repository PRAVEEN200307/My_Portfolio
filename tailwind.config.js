/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./About.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
         'light-blue':'#2c98f0',
      },
      fontFamily: {
        'play': ['Playfair Display'],
      }
    },
  },
  plugins: [],
}

