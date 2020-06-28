const axios = require('axios')

module.exports = {
  reportPages: async function(graphql, createPage) {
    const { data } = await graphql(`
      {
        allReports {
          edges {
            node {
              reportDate
            }
          }
        }
      }
    `)

    data.allReports.edges.forEach(({ node }) => {
      createPage({
        path: `/report/${node.reportDate}`,
        component: './src/templates/Report.vue',
        context: {
          date: node.reportDate,
        },
      })
    })
  },
}
