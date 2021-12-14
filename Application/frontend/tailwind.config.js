module.exports = {
  purge: [{
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  }],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'nav': '#444546'
      },
      height: {
        '25vh': '25vh'
      },
      gridTemplateColumns: {
        '58/auto': '58% auto'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
