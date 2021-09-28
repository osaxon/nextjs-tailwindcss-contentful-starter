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
      colors: {
        primary: {
          50: '#DDE1F5',
          100: '#D4D5F6',
          200: '#CCCAF7',
          300: '#C3BEF7',
          400: '#B5A3F9',
          500: '#A787FB',
          600: '#A079FC',
          700: '#996BFD',
          800: '#925DFE',
          900: '#8A4FFF',
        },
        textDark: '#7462E0',
        textLight: '#E4F1FE',
        dark: '#CDB4DB',
        pink: '#ffafcc',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
