/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#1D9BF0',  
        'secondaryColor': '#393B41',
        'black': '#000000',
         },     
      '8xl': '96rem',
      '9xl': '128rem',
    },
  },
  plugins: [],
}
