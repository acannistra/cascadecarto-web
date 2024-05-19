/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral,  // Used mainly for text color
      pine_green: { DEFAULT: '#187767', 100: '#051815', 200: '#0a2f29', 300: '#0f473e', 400: '#135f52', 500: '#187767', 600: '#25b39c', 700: '#48dac1', 800: '#85e6d6', 900: '#c2f3ea' },
      sage: { DEFAULT: '#b5b682', 100: '#272717', 200: '#4e4e2e', 300: '#757645', 400: '#9c9d5c', 500: '#b5b682', 600: '#c3c49b', 700: '#d2d3b4', 800: '#e1e2cd', 900: '#f0f0e6' },
      peach_yellow: { DEFAULT: '#fedc97', 100: '#503501', 200: '#a06b02', 300: '#efa002', 400: '#fdc045', 500: '#fedc97', 600: '#fee2aa', 700: '#fee9bf', 800: '#fff1d5', 900: '#fff8ea' },
      space_cadet: { DEFAULT: '#392f5a', 100: '#0b0a12', 200: '#171324', 300: '#221d36', 400: '#2e2648', 500: '#392f5a', 600: '#59498b', 700: '#7d6db2', 800: '#a89dcc', 900: '#d4cee5' },
      federal_blue: { DEFAULT: '#090446', 100: '#02010e', 200: '#04021d', 300: '#06032b', 400: '#08033a', 500: '#090446', 600: '#15099a', 700: '#200eec', 800: '#685bf5', 900: '#b3adfa' },
      orange: { DEFAULT: '#fda403', 100: '#322101', 200: '#654201', 300: '#976302', 400: '#ca8402', 500: '#fda403', 600: '#fdb735', 700: '#fdc968', 800: '#fedb9a', 900: '#feedcd' },
      safety_orange: { DEFAULT: '#e8751a', 100: '#2f1805', 200: '#5f3009', 300: '#8e480e', 400: '#bd6013', 500: '#e8751a', 600: '#ed9349', 700: '#f2ae77', 800: '#f6c9a4', 900: '#fbe4d2' },
      olive: { DEFAULT: '#898121', 100: '#1b1907', 200: '#36330d', 300: '#514c14', 400: '#6c661a', 500: '#898121', 600: '#beb22e', 700: '#d7cd5a', 800: '#e4dd91', 900: '#f2eec8' },
      ecru: { DEFAULT: '#e5c287', 100: '#3b2a0d', 200: '#77551a', 300: '#b27f27', 400: '#d7a44a', 500: '#e5c287', 600: '#eace9e', 700: '#efdab6', 800: '#f4e6ce', 900: '#faf3e7' },
      davys_gray: { DEFAULT: '#474350', 100: '#0e0d10', 200: '#1d1b20', 300: '#2b2830', 400: '#393640', 500: '#474350', 600: '#6a6478', 700: '#8e899c', 800: '#b4b0bd', 900: '#d9d8de' },
      'tea_green': { DEFAULT: '#deefb7', 100: '#35450f', 200: '#6a8b1e', 300: '#9fd02e', 400: '#bfe072', 500: '#deefb7', 600: '#e5f3c6', 700: '#ecf6d4', 800: '#f2f9e3', 900: '#f9fcf1' }, 
      'celadon': { DEFAULT: '#98dfaf', 100: '#123a1e', 200: '#23733d', 300: '#35ad5b', 400: '#60ce83', 500: '#98dfaf', 600: '#aee6c0', 700: '#c2eccf', 800: '#d6f3df', 900: '#ebf9ef' },
      'keppel': { DEFAULT: '#5fb49c', 100: '#122520', 200: '#234b40', 300: '#357060', 400: '#47967f', 500: '#5fb49c', 600: '#7fc3b0', 700: '#9fd2c4', 800: '#bfe1d7', 900: '#dff0eb' }, 
      'marian_blue': { DEFAULT: '#414288', 100: '#0d0d1b', 200: '#1a1a36', 300: '#272751', 400: '#34356b', 500: '#414288', 600: '#5758ae', 700: '#8182c2', 800: '#abacd7', 900: '#d5d5eb' }, 
      'palatinate': { DEFAULT: '#682d63', 100: '#150914', 200: '#291227', 300: '#3e1b3b', 400: '#53234f', 500: '#682d63', 600: '#9a4293', 700: '#be67b7', 800: '#d49acf', 900: '#e9cce7' },


      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        400: "#facc15",
        500: "#eab308",
      }, // Accent colors, used mainly for star color, heading and buttons
      // orange: {
      //   100: "#ffedd5",
      //   200: "#fed7aa",
      //   300: "#fb713b",
      //   400: "#fa5a15",
      //   500: "#e14d0b",
      //   600: "#ea580c",
      // }, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
