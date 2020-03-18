module.exports = {
  theme: {
    extend: {
      colors: {
        'black-muted': '#0f1117'
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'group-hover', 'even', 'odd', 'focus', 'dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
    textColor: ['responsive', 'hover', 'group-hover', 'even', 'odd', 'focus', 'group-focus', 'dark']
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('tailwindcss-dark-mode')()
  ]
}
