/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: "#A41045",
        vividViolet: "#892066",
        tertiaryPink: "#E52996",
        tertiaryBlue: "#18457C",
        primaryDark: "#0A0C10",
        lightDark: "#424345",
        darkGrey: "#7D7E80",
        blueGrey: "#95A1AD",
        pinkGrey: "#9B8595",
        grey: "#B9B9B9",
        lightGrey: "#D8D8D8",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
}