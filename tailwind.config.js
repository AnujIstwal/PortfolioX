/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        fill: "-webkit-fill-available",
      },
      width: {
        fill: "-webkit-fill-available",
      },
      fontFamily: {
        rage: ['"Rage Italic"', "cursive"], // Add your custom font
      },
    },
  },
  plugins: [],
};
