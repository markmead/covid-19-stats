const collectionHelper = require('./src/utils/collectionHelper')
const createPagesHelper = require('./src/utils/createPagesHelper')
const createManagedPagesHelper = require('./src/utils/createManagedPagesHelper')

module.exports = function (api) {
  api.loadSource(async actions => {
    await collectionHelper.reportsCollection(actions)
    await collectionHelper.countriesCollection(actions)
  })

  api.createPages(async ({ graphql, createPage }) => {
    await createPagesHelper.reportPages(graphql, createPage)
  })

  api.createManagedPages(async ({ createPage }) => {
    await createManagedPagesHelper.countryPages(createPage)
  })
}
