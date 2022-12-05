/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      dark: "#222831",
      gray: "#393E46",
      offwhite: "#EEEEEE",
      gold: "#FFD369",
    },
  },
  plugins: [],
};
