/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black": "#000000",
        "primary_color": "#0F1624",
        "secondary-color": "#FFFFFF",
        "linear-gradient": "bg-gradient-to-r from-[#945DD6] via-[#6978D1] to-[#13ADC7]"
      },
      backgroundImage: {
        'hero': "url('/Images/drawing.png')",
      }
    },
  },
  plugins: [],
}

