/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main : '#0E2007',
        first : '#73955F',
        second : '#AA8B56',
        third : '#F0EBCE',
        fourth : '#3D5045',
      }
    },

  },
  plugins: [
  ]
};
