const axios = require('axios')

module.exports = {
  reportsCollection: async function(actions) {
    const reports = await axios.get('https://covid19.mathdro.id/api/daily')
    const collection = actions.addCollection('Reports')

    for (const report of reports.data) {
      collection.addNode({
        reportDate: report.reportDate,
        totalConfirmed: report.totalConfirmed,
        mainlandChina: report.mainlandChina,
        otherLocations: report.otherLocations,
      })
    }
  },
  countriesCollection: async function(actions) {
    const { data } = await axios.get('https://covid19.mathdro.id/api/countries')
    const countries = data.countries
    const collection = actions.addCollection('Countries')

    for (const country of countries) {
      collection.addNode({
        countryName: country.name,
        countryCode: country.iso3,
      })
    }
  },
}
