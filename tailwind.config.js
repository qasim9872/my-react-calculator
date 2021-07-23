const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.tsx', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ui: {
          primary: colors.black,
          secondary: colors.gray,
        },
      },
    },
  },
  plugins: [],
};
