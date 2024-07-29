/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00BFFF",
        secondary: "#EAEAEA",
        terciary: "#ED0707",
        error: "#F63131",
        background: "#0F0E0E",
        accent: "#87CEEB",
        accent2: "#B91A1A",
        green: "#07B908",
        black: "#0C0B0B",
        white: "#F7F7F7",
      },
    },
  },
  plugins: [],
}