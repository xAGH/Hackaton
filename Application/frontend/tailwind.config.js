module.exports = {
  purge: [{
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  }],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'fondo': '#444546',
        'letra': '#E6EFE9',
      },

      spacing: {
        '85%': '85%',
      },
      
      gridTemplateRows: {
        'numeros': '25vh 70vh auto',
        'home': '25vh 55vh 15vh auto',
        '33/auto': '33% auto'
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
