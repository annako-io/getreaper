/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        lightRed: 'hsl(12, 88%, 95%)',
        lightGrey: '#DCDCDC',
        beige: '#E9DAC4',
        darkerGrey: '#686868',
        lightBlue: '#61D9FB',
        blueish: '#0d8aba',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
      }
    },
  },
  plugins: [],
}

