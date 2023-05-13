/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        BoatBlack: "#363636",
        BoatGray: "#CCCCCC",
        RegisterGray: "#50626C",
        RegisterGrayBody: "#606060",
        NavBackground: "rgba(80, 98, 108, 0.6)",
        BorderInput: "#E4E5E4",
      },
      backgroundColor: {
        LineBackground: "#A4A4A4",
        FooterBackground: "#001420",
        ProductBackground: "#50626C",
        SideBackground: "rgba(255, 255, 255, 0.92)",
      },
      fontSize: {
        homeHead: [
          "100px",
          {
            fontWeight: "400",
            lineHeight: "60px",
          },
        ],
        SidebarTitle: [
          "20px",
          {
            fontWeight: "600",
            lineHeight: "23px",
          },
        ],
        homeSubHead: [
          "50px",
          {
            fontWeight: "400",
          },
        ],
        registerHead: [
          "25px",
          {
            fontWeight: "600",
          },
        ],
        registerBody: [
          "18px",
          {
            fontWeight: "400",
            lineHeight: "25px",
          },
        ],
        registiration: [
          "40px",
          {
            fontWeight: "600",
          },
        ],
        buttonText: [
          "15px",
          {
            fontWeight: "400",
          },
        ],
        footerText: [
          "22px",
          {
            fontWeight: "600",
          },
        ],
        footerSubText: [
          "20px",
          {
            fontWeight: "500",
          },
        ],
        ProductMenu: [
          "30px",
          {
            fontWeight: "600",
          },
        ],
        ProductSubInfo: [
          "20px",
          {
            fontWeight: "400",
            lineHeight: "23px",
          },
        ],
        ProductInfo: [
          "30px",
          {
            fontWeight: "700",
            lineHeight: "36px",
          },
        ],
        ReviewsTitle: [
          "20px",
          {
            fontWeight: "700",
            lineHeight: "23px",
          },
        ],
        ProductButton: [
          "15px",
          {
            fontWeight: "400",
            lineHeight: "34px",
          },
        ],
      },
      fontFamily: {
        homeHeadText: ["Nordin Free", "sans-serif"],
        homeSubHeadText: ["Montserrat", "sans-serif"],
      },
      width: {
        registerInput: "485px",
        registerContainerInput: "884px",
        registerContainer: "1150px",
      },
      height: {
        registerHeight: "50px",
      },
      borderRadius: {
        29: "29px",
      },
      dropShadow: {
        BoatInfoBorder: "0px 0px 10px rgba(0, 0, 0, 0.25)",
        ReviewsBorder: "0px 0px 20px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
