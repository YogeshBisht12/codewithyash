/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        burn: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        colorChange: {
          "0%, 100%": { color: "white" },
          "50%": { color: "#2563eb" }, 
        },
      },
      animation: {
        burn: "burn 4s ease infinite",
        colorChange: "colorChange 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
