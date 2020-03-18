const axios = require('axios')

module.exports = {
  countryPages: async function(createPage) {
    const { data } = await axios.get('https://covid19.mathdro.id/api/countries')
    const countries = data.countries

    for(const country of Object.keys(countries)) {
      const path = country.replace(/\s+/g, '-').toLowerCase()

      createPage({
        path: `/country/${path}`,
        component: './src/templates/Country.vue',
        context: {
          title: country,
          code: countries[country]
        }
      })
    }
  }
}
