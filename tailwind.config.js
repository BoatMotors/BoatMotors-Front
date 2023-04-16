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
        NavBackground: 'rgba(80, 98, 108, 0.6)'
      },
      fontSize: {
        homeHead: ['100px', {
          fontWeight: '400',
          lineHeight: '60px',
        }],
        homeSubHead: ['50px', {
          fontWeight: '400',
        }],
        buttonText: ['15px', {
          fontWeight: '400',
        }],
      },
      fontFamily: {
        homeHeadText: ['Nordin Free', 'sans-serif'],
        homeSubHeadText: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

