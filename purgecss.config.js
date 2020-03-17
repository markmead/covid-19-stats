module.exports = {
  content: [
    './src/**/*.js',
    './src/**/*.html',
  ],
  whitelist: [
    'body',
    'html',
    'img',
    'a',
    'g-image',
    'g-image--lazy',
    'g-image--loaded',
  ],
  extractors: [
    {
      extractor: content => content.match(/[\w-/.:]+(?<!:)/g),
      extensions: ['vue', 'js', 'jsx', 'md', 'html', 'pug'],
    }
  ]
}
