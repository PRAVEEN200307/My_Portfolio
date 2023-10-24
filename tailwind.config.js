/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./About.html",
    "./Skills.html",
    "./Education.html",
    "./Project.html",
    "./Contact.html",
    "./Extra.html",
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

