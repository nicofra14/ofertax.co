/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        "principal": [ '"Bebas Neue"', 'sans-serif']
      },

      colors: {
        "morado": "hsl(260, 100%, 66%)",
        "azul": "hsl(180, 100%, 50%)",
        "rosado": "hsl(300, 100%, 50%)"   

      }
    },
  },
  plugins: [],
}

