/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        background: '#1A1A1A'
      },
      backgroundImage: {
        "desktop-dark": "url(/bg-python-dark-desktop.png)"
      }
    },
  },
  plugins: [],
}

