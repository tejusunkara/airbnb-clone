/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'KatieZaferes': "url('/assets/KatieZaferes.png')",
        'wedding': "url('/assets/wedding-photography')",
        'mountainBike': "url('/assets/mountain-bike')"
      },
      colors: {
        'light-grey': '#918E9B',
        'light-black': '#222222'
      }
    },
  },
  plugins: [],
}
