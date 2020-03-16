// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const reportsCollection = actions.addCollection('Reports')
    const reportsData = await axios.get('https://covid19.mathdro.id/api/daily')

    for(const reportData of reportsData.data) {
      reportsCollection.addNode({
        reportDate: reportData.reportDate,
        totalConfirmed: reportData.totalConfirmed,
        mainlandChina: reportData.mainlandChina,
        otherLocations: reportData.otherLocations,
        totalRecovered: reportData.totalRecovered,
      })
    }
  })

  api.createManagedPages(async ({ createPage }) => {
    const { data } = await axios.get('https://covid19.mathdro.id/api/countries')
    for(const item of Object.keys(data.countries)) {
      createPage({
        path: `/country/${item.replace(/\s+/g, '-').toLowerCase()}`,
        component: './src/templates/Country.vue',
        context: {
          title: item,
          query: item.replace(/\s+/g, '-').toLowerCase()
        }
      })
    }
  })
}
