/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        arrowHover: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-10px, -10px)" },
        },
      },
      animation: {
        hoverArrow: "arrowHover 0.5s forwards",
      },
    },
  },
  plugins: [],
}