const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        courgette: ['Courgette', 'cursive'],
      },
      colors: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
