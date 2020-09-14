const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: ['./src/**/*.vue'],
    whitelist: ['body', 'html', 'img', 'a', 'g-image', 'g-image--lazy', 'g-image--loaded', 'mode-dark'],
    whitelistPatterns: [/flag-.*/],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    backgroundColor: [
      'responsive',
      'hover',
      'group-hover',
      'even',
      'odd',
      'focus',
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'dark-focus',
    ],
    textColor: [
      'responsive',
      'hover',
      'group-hover',
      'even',
      'odd',
      'focus',
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'dark-focus',
    ],
    borderColor: [
      'responsive',
      'hover',
      'group-hover',
      'even',
      'odd',
      'focus',
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'dark-focus',
    ],
  },
  plugins: [
    require('@tailwindcss/ui')({
      layout: 'sidebar',
    }),
    require('tailwindcss-dark-mode')(),
  ],
}
