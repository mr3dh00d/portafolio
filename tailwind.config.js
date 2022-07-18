/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'photo': "url('@/assets/img/21.Dereck Pavez.jpg')",
        'fondo': "url('@/assets/img/fondo.png')"
      },
      colors:{
        'primary': '#102040',
        'secondary': '#6f8dca',
        'tertiary': '#305fbf',
        'quaternary': '#232d40',
        'quinary': '#23468c',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'Open sans'],
        'righteous': ['Righteous', 'Open sans']
      }
    },
  },
  plugins: [],
}
