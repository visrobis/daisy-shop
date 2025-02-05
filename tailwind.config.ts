import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "media-240": "250px",
        "media-350": "350px",
        "media-476": "455px",
        "media-576": "576px",
        "media-676": "676px",
        "media-776": "776px",
        "media-996": "996px",
        "media-1096": "1096px",
        "media-1276": "1276px",
        "media-1440": "1440px",
      },

      padding: {
        "padding-10": "2px",
        "padding-50": ".5rem",
        "padding-100": "1rem",
        "padding-200": "2rem",
        "padding-250": "3rem",
        "padding-300": "5rem",
        "padding-400": "10rem",
        "padding-500": "20rem",
      },
      colors: {
        colorLogo: "blue", // Blue logo
        "color-100": "#FFFFFF", // white color
        "color-200": "#F47067", // Fail red color
        "color-300": "#d1b9a8",
        "color-400": "#161617", // Body color
        "color-500": "rgb(24, 24, 24)", // Timeline scroll color
        "color-600": "#96D0FF", // Demo link color
        "color-700": "#fed7aa",
        "color-800": "#4b4a52",
        "color-900": "#161617", // Navbar and footer color
        "color-1000": "#fb923c", // Link color
      },
      borderRadius: {},
      boxShadow: {
        "box-shadow-dark": "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        "box-shadow-light": "0px 0.1px 4px #F3F5F7",
        "box-shadow-top": "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
        "box-shadow-darker":
          "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
      },

      fontSize: {
        sizeHero: "calc(.85rem + 3vw)",
        sizeTitle: "calc(1.5rem + 2.2vw)",
        sizeSubtitle: "calc(1rem + 1.5vw)",
        sizeParagraphBase: ".95rem",
        sizeParagraphSm: "0.9rem",
        sizeLogo: "calc(.45rem + 1.2vw)",
        sizeFooter: "calc(.45rem + 2vw)",
        sizeBig: "calc(2.5rem + 4vw)",
      },
      height: {
        socialHight: "calc(3rem + 3vw)",
      },
      width: {
        socialWidth: "calc(3rem + 3vw)",
      },
      fontWeight: {
        // General
        "bold-100": "500",
        // Paragraph
        "bold-200": "600",
        // Sub title
        "bold-300": "800",
        // title
        "bold-400": "900",
      },
      fontFamily: {
        "family-100": "Courier Prime, monospace",
      },
    },
  },
  plugins: [],
} satisfies Config;
