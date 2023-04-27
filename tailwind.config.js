/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{ 
        'primary-gray':'#495e57',
        'primary-yellow' : '#f4ce14',
        'secondary-dark' : '#EE9972',
        'secondary-light' : '#FBDABB',
        'highlight-light' : '#EDEFEE',
        'highlight-dark' : '#333333'
    }
    },
  },
  plugins: [],
}

