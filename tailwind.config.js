/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  /* theme: {
    themes: ["corporate", "business", "aqua"],
    darkTheme: "business",
    extend: {},
  }, */
  daisyui: {
    themes: ["corporate", "business", "aqua"],
    darkTheme: "business",
  },
  plugins: [require("daisyui")],
}