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

      gridTemplateRows: {
        'numeros': '25vh 70vh auto',
        '33/auto': '33% auto'
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
