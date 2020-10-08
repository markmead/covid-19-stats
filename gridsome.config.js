module.exports = {
  siteName: 'COVID Breakdown',
  siteUrl: 'https://covid-breakdown.vercel.app',
  plugins: [{ use: '@gridsome/plugin-sitemap' }],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('tailwindcss')],
      },
    },
  },
}
