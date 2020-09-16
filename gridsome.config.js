module.exports = {
  siteName: 'COVID Cases',
  siteUrl: 'https://www.covid-cases.co.uk/',
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
        plugins: [require('tailwindcss')],
      },
    },
  },
}
