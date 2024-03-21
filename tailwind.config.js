/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#242DFE",
        secondary: {
          DEFAULT: "#595959",
          light: "#9FA5B6",
        },
      },
    },
  },
  plugins: [],
};
