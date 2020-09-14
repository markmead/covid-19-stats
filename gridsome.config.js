const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const postcssPlugins = [tailwind()]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: 'COVID-19',
  siteUrl: 'https://www.covid-stats.co.uk/',
  plugins: [
    { use: '@gridsome/plugin-sitemap' },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-177960351-1',
      },
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
