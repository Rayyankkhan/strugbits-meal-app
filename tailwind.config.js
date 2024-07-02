/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
       
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/hero.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      screens: {
        xs: "300px",
        sm: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
    },
  },
  plugins: [],
}

