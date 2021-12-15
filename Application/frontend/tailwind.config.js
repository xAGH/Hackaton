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
        'aaa': '#aaa'
      },
      height: {
        '30vh': '30vh',
        '50vh': '50vh'
      },
      backgroundImage: {
        "flecha": 'https://images.emojiterra.com/twitter/v13.1/128px/1f1fb-1f1ea.png'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
