/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#242DFE",
        secondary: {
          DEFAULT: "#595959",
          light: "#9FA5B6"
        }
      }
    },
  },
  plugins: [],
}

