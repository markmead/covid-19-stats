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
      const path = node.reportDate.replace(/\//g, '-')

      createPage({
        path: `/report/${path}`,
        component: './src/templates/Report.vue',
        context: {
          date: path,
          dateTime: node.reportDate,
        },
      })
    })
  },
}
