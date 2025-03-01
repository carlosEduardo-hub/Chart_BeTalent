/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'blue-primary': '#0500FF',
        'blue-10': '#EDEFFB',
        'black-neutral': '#1C1C1C',
        'gray-20': '#9E9E9E',
        'gray-10': '#DFDFDF',
        'gray-05': '#F5F5F5',
        'gray-00': '#F0F0F0',
      },
      spacing: {
        '80': '80px',
        '60': '60px',
        '40': '40px',
        '32': '32px',
        '28': '28px',
        '20': '20px',
        '16': '16px',
        '8': '8px',
        '4': '4px',
      },
      boxShadow: {
        'shadow1': '0px 1px 2px 0px #00000033',
        'shadow2': '0px 2px 4px 0px #00000033',
        'shadow-small': '0px 2px 8px 0px #00000033',
      },
    },
  },
  plugins: [],
}

