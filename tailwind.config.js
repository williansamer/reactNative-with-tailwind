import { colors } from './src/styles/colors.ts';
import { fontFamily } from './src/styles/font-family.ts';

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily
    },
  },
  plugins: [],
}