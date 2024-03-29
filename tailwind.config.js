/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#242DFE",
        secondary: {
          DEFAULT: "#595959",
          light: "#9FA5B6",
        },
      },
      fontFamily: {
        primary: ["Merriweather", "serif"],
        secondary: ["Bitter", "serif"],
      },
      gridTemplateColumns: {
        "60-1": "65% repeat(1, 1fr)",
        "40-1": "40% repeat(1, 1fr)"
      }
    },
  },
  plugins: [],
};
