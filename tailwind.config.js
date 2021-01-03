const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: false,
  darkMode: false,
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      'serif': ['Michroma', ...defaultTheme.fontFamily.serif],
      
    },
    minHeight: {
      ...defaultTheme.minHeight,
      'screen': 'calc(100vh - theme("height.8"))',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
