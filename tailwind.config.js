/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#545f71",
        secondary: "#9ba5b7",
        tertiary: "#eef1f4",
        annotations: "#f6be2c",
        "cc-white": "#f6f7eb",
        "cc-gray": "#393e41",
        "cc-blue": "#3f88c5",
        "cc-green": "#44bba4",
        "cc-green-4": "#44bba323",
        "cc-red": "#e94f37", 
        "cc-yellow": "#ffd100",
        "dark-1": "#0a0a0a",
        "dark-2": "#141414",
        "dark-3": "#1f1f1f",
        "dark-4": "#292929",
        "dark-5": "#293244",
        "white-shades": "#f2f2f2"
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        "about-background": "url('/src/assets/background/about.jpg')",
      },
    },
  },
  plugins: [],
};