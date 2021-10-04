const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // false 'media' or 'class'
  theme: {
    fill: (theme) => ({
      red: theme('colors.red.500'),
      green: theme('colors.green.400'),
      blue: theme('colors.blue.500'),
      white: theme('colors.white'),
      dark: theme('colors.indigo.400'),
      yellow: theme('colors.yellow.400'),
    }),
    stroke: (theme) => ({
      red: theme('colors.red.500'),
      green: theme('colors.green.500'),
      blue: theme('colors.blue.500'),
      black: theme('colors.black'),
      yellow: theme('colors.yellow.300'),
    }),
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        courgette: ['Courgette', 'cursive'],
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
