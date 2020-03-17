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
        reportDateString: reportData.reportDateString,
        totalConfirmed: reportData.totalConfirmed,
        mainlandChina: reportData.mainlandChina,
        otherLocations: reportData.otherLocations,
        totalRecovered: reportData.totalRecovered,
      })
    }
  })

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allReports {
        edges {
          node {
            id
            reportDate
            reportDateString
          }
        }
      }
    }`)

    data.allReports.edges.forEach(({ node }) => {
      const path = node.reportDateString.replace(new RegExp('/', 'g'), '-')

      createPage({
        path: `/report/${path}`,
        component: './src/templates/Report.vue',
        context: {
          dateTime: node.reportDate,
          date: path
        }
      })
    })
  })

  api.createManagedPages(async ({ createPage }) => {
    const { data } = await axios.get('https://covid19.mathdro.id/api/countries')
    for(const country of Object.keys(data.countries)) {
      const path = country.replace(/\s+/g, '-').toLowerCase()
      const code = data.countries[country]
      const title = country

      createPage({
        path: `/country/${path}`,
        component: './src/templates/Country.vue',
        context: {
          title: title,
          code: code
        }
      })
    }
  })
}
