/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["GothamMedium", "sans-serif"],
      },
      colors: {
        "custom-red": "#b3282d",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
