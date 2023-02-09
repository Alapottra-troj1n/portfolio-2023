/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    fontFamily: {
        'primary': 'Raleway',
        'display': 'Bebas Neue'
    },
    colors: {
      primary: '#CFED71',
      secondary: '#EDE6CD',
      dark: "#28291F"

    }
  },
  plugins: [],
}
