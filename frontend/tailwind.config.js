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
        error: "#F63131",
        background: "#0C0B0B",
        accent: "#ADD8E6",
        black: "#000000",
        white: "#F7F7F7",
      },
    },
  },
  plugins: [],
}