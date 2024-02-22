/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./**/*.php', './src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Wpstorm', ...defaultTheme.fontFamily.sans],
        mono: ['Wpstorm', ...defaultTheme.fontFamily.mono],
        serif: ['Wpstorm', ...defaultTheme.fontFamily.serif],
      },
      zIndex: {
        100: '100',
        1000: '1000',
        10000: '10000',
        100000: '100000',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  important: '.wpstorm-chat-tailwind-class',
}
