/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BoatBlack: '#363636',
        BoatGray: '#CCCCCC',
      },
      fontSize: {
        homeHead: ['200px', {
          fontWeight: '400',
          lineHeight: '23px',
        }],
      },
      fontFamily: {
        homeHeadText: ['Nordin Free', 'sans-serif'],
        homeSubHeadText: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

