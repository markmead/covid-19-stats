<template>
  <Layout title="Latest Reports">
    <div class="flex flex-col">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  China
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Worldwide
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Confirmed
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Recovered
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody>
              <TableRow
                v-for="edge in $page.reports.edges"
                :item="edge"
                :key="edge.node.id" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    reports: allReports(sortBy: "reportDate") {
      edges {
        node {
          id
          reportDate
          reportDateString
          totalConfirmed
          mainlandChina
          otherLocations
          totalRecovered
        }
      }
    }
  }
</page-query>

<script>
  import TableRow from '~/components/TableRow'

  export default {
    metaInfo: {
      title: 'Latest Reports'
    },
    components: {
      TableRow
    }
  }
</script>
