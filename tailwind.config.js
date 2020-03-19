const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'group-hover', 'even', 'odd', 'focus', 'dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'dark-focus'],
    textColor: ['responsive', 'hover', 'group-hover', 'even', 'odd', 'focus', 'dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'dark-focus'],
    borderColor: ['responsive', 'hover', 'group-hover', 'even', 'odd', 'focus', 'dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'dark-focus'],
  },
  plugins: [
    require('@tailwindcss/ui')({
      layout: 'sidebar'
    }),
    require('tailwindcss-dark-mode')()
  ]
}
