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
        RegisterGray: '#50626C',
        RegisterGrayBody: '#606060',
        NavBackground: 'rgba(80, 98, 108, 0.6)',
        BorderInput: '#E4E5E4',
      },
      backgroundColor: {
        LineBackground: '#A4A4A4',
        FooterBackground: '#001420'
      },
      fontSize: {
        homeHead: ['100px', {
          fontWeight: '400',
          lineHeight: '60px',
        }],
        homeSubHead: ['50px', {
          fontWeight: '400',
        }],
        registerHead: ['25px', {
          fontWeight: '600',
        }],
        registerBody: ['18px', {
          fontWeight: '400',
        }],
        registiration: ['40px', {
          fontWeight: '600',
        }],
        buttonText: ['15px', {
          fontWeight: '400',
        }],
        footerText: ['22px', {
          fontWeight: '600'
        }],
        footerSubText: ['20px', {
          fontWeight: '500'
        }],
      },
      fontFamily: {
        homeHeadText: ['Nordin Free', 'sans-serif'],
        homeSubHeadText: ['Montserrat', 'sans-serif'],
      },
      width: {
        registerInput: '485px',
        registerContainerInput: '884px',
        registerContainer: '1150px'
      },
      height: {
        registerHeight: '50px'
      }
    },
  },
  plugins: [],
}

