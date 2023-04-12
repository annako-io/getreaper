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
        brightRed: '#0d8aba',
        brightRedLight: '#61D9FB',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        aLightGrey: '#DCDCDC',
        reactBlue: '#61D9FB',
        beigeForTeam: '#E9DAC4',
        greyy: '#686868',
        lightBlue: '#cbf2fb',
      }
    },
  },
  plugins: [],
}

