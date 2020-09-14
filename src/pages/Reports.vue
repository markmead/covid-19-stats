<template>
  <Layout title="Latest Reports">
    <div class="relative mb-8 bg-indigo-600 rounded">
      <div class="max-w-5xl p-4 mx-auto text-center">
        <p
          class="leading-tight text-white"
        >Reports no longer have accurate data for total recovered, therefore it's been removed.</p>
      </div>
    </div>

    <div class="flex flex-col">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg dark:border-indigo-700"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 dark:border-indigo-700 bg-gray-50 dark:bg-indigo-700 dark:text-gray-200"
                >Date</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 dark:border-indigo-700 bg-gray-50 dark:bg-indigo-700 dark:text-gray-200"
                >China</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 dark:border-indigo-700 bg-gray-50 dark:bg-indigo-700 dark:text-gray-200"
                >Worldwide</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 dark:border-indigo-700 bg-gray-50 dark:bg-indigo-700 dark:text-gray-200"
                >Confirmed</th>
                <th
                  class="px-6 py-3 border-b border-gray-200 dark:border-indigo-700 bg-gray-50 dark:bg-indigo-700"
                ></th>
              </tr>
            </thead>
            <tbody>
              <TableRow v-for="edge in $page.reports.edges" :item="edge" :key="edge.node.id" />
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
          totalConfirmed
          mainlandChina
          otherLocations
        }
      }
    }
  }
</page-query>

<script>
import TableRow from '~/components/TableRow'

export default {
  metaInfo: {
    title: 'Latest Reports',
  },
  components: {
    TableRow,
  },
}
</script>
