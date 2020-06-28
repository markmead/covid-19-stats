const axios = require('axios')

module.exports = {
  countryPages: async function(createPage) {
    const { data } = await axios.get('https://covid19.mathdro.id/api/countries')
    const countries = data.countries

    for (const country of countries) {
      const path = country.name.replace(/\W/g, '').toLowerCase()

      createPage({
        path: `/country/${path}`,
        component: './src/templates/Country.vue',
        context: {
          title: country.name,
          code: country.iso3,
          icon: country.iso2,
        },
      })
    }
  },
}
