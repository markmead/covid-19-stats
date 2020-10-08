module.exports = {
  siteName: 'COVID Breakdown',
  siteUrl: 'https://covid-breakdown.vercel.app',
  plugins: [
    { use: '@gridsome/plugin-sitemap' },
    {
      use: 'gridsome-plugin-manifest',
      options: {
        background_color: '#FFF',
        icon_path: './src/favicon.png',
        name: 'COVID Breakdown',
        short_name: 'COVID Stats',
        theme_color: '#000',
        lang: 'en',
      },
    },
    {
      use: 'gridsome-plugin-service-worker',
      options: {
        networkFirst: {
          cacheName: 'nf-v1',
          routes: ['/', /\.(js|css|png)/],
        },
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
