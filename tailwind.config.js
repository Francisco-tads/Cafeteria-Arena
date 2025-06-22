/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#FAF8F6',
          100: '#F0E9E3',
          200: '#E1D3C7',
          300: '#D2BDAB',
          400: '#C3A78F',
          500: '#B49173',
          600: '#96775C',
          700: '#785E49',
          800: '#5A4536',
          900: '#0d0a11',
        },
        cream: {
          50: '#FFFDF8',
          100: '#FFF8E7',
          200: '#FFF0D0',
          300: '#FFE8B8',
          400: '#FFE0A1',
          500: '#FFD88A',
          600: '#DBAD6E',
          700: '#B78253',
          800: '#936538',
          900: '#704C1F',
        },
        orange: {
          50: '#FFF8F0',
          100: '#FFECD8',
          200: '#FFD9B2',
          300: '#FFC78C',
          400: '#FFB566',
          500: '#FFA340',
          600: '#DB8330',
          700: '#B76421',
          800: '#934614',
          900: '#702C09',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};