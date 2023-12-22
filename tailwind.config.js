/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'photo': "url('@/assets/img/21.Dereck Pavez.jpg')",
        'fondo': "url('@/assets/img/fondo.png')",
        'robotica': "url('@/assets/img/robotica.png')",
        'feria-cientifica': "url('@/assets/img/feria-cientifica.png')",
        'ekos': "url('@/assets/img/ekos.jpeg')",
        'graph-kigdom': "url('@/assets/img/graph-kingdom.png')"
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
