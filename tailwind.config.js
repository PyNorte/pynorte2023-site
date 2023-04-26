/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: '#1A1A1A',
        footer_background: '#282828',
      },
      backgroundImage: {
        'desktop-dark': 'url(/bg-dark-desktop.png)',
        'desktop-presentation': 'url(/bg-presentation-desktop.png)',
        'mobile-presentation': 'url(/bg-presentation-mobile.png)',
      },
    },
  },
  plugins: [],
}
