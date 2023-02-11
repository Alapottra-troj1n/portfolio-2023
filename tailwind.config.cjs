/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#CFED71',
        secondary: '#EDE6CD',
        dark: "#28291F",
        orange: '#E46A44',
        green: '#152A21'
  
      }
    },
    fontFamily: {
        'primary': 'Raleway',
        'display': 'Bebas Neue'
    },
  
  },
  plugins: [],
}
