import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '9xl': '96rem', // or any value you need
      },
      colors: {
        ...colors,
        // primary: "#1A202C",
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
