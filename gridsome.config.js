const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const postcssPlugins = [tailwind()]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: 'COVID-19',
  siteUrl: 'https://covid-19-stats.netlify.com',
  plugins: [
    { use: '@gridsome/plugin-sitemap' },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'UA-177960351-1',
        enabled: true,
        debug: true,
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
