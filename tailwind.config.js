/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate_grey: "#757F8E",
        greyish_blue: "#899BB7",
        royal_blue: "#405FB1",
        deep_pink: "#CB50B0",
        light_blue: "#EAEBF3",
      },
      fontFamily: {
        bruno_ace: ["Bruno Ace", "cursive"],
        b612_mono: ["B612 Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
