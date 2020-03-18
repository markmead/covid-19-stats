<template>
  <Layout title="Dashboard">
    <div v-if="!stats">Loading</div>
    <ShortStats v-else :stats="stats" />

    <div class="flex flex-col mt-5">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200 dark:border-indigo-700">
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="px-6 py-3 border-b border-gray-200 dark:border-indigo-700 bg-gray-50 dark:bg-indigo-700 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                  Date
                </th>
                <th class="px-6 py-3 border-b border-gray-200 dark:border-indigo-700 bg-gray-50 dark:bg-indigo-700 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                  China
                </th>
                <th class="px-6 py-3 border-b border-gray-200 dark:border-indigo-700 bg-gray-50 dark:bg-indigo-700 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                  Worldwide
                </th>
                <th class="px-6 py-3 border-b border-gray-200 dark:border-indigo-700 bg-gray-50 dark:bg-indigo-700 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                  Confirmed
                </th>
                <th class="px-6 py-3 border-b border-gray-200 dark:border-indigo-700 bg-gray-50 dark:bg-indigo-700 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                  Recovered
                </th>
                <th class="px-6 py-3 border-b border-gray-200 dark:border-indigo-700 bg-gray-50 dark:bg-indigo-700"></th>
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
  {
    reports: allReports(sortBy: "reportDate", limit: 3) {
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
  import axios from 'axios'
  import ShortStats from '~/components/ShortStats'
  import TableRow from '~/components/TableRow'

  export default {
    metaInfo: {
      title: 'Dashboard'
    },
    data() {
      return {
        stats: '',
      }
    },
    components: {
      ShortStats,
      TableRow
    },
    async mounted() {
      await axios
        .get('https://covid19.mathdro.id/api')
        .then(res => (this.stats = res.data))
        .catch(error => console.log(error))
    }
  }
</script>
