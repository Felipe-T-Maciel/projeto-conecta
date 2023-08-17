/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend:{
      colors: {
        'sidebar':'#220424',
        'white': '#FFFFFF'
      },
    }
  },
  plugins: [],
}

