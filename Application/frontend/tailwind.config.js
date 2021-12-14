module.exports = {
  purge: [{
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  }],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'fondo': '#444546'
      },
      height: {
        '25vh': '30vh'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
