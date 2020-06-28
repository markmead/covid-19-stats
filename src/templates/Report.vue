<template>
  <Layout :title="$context.date | formatDate">
    <g-link
      to="/reports"
      class="inline-flex items-center mb-5 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out group hover:text-gray-900 focus:outline-none focus:text-gray-900 dark:text-gray-200 dark-hover:text-white"
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6 mr-2 text-gray-400 transition duration-150 ease-in-out dark:text-gray-300 group-hover:text-gray-500 dark-group-hover:text-gray-200"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 16l-4-4m0 0l4-4m-4 4h18"
        />
      </svg>
      Back to reports
    </g-link>
    <div v-if="loading" class="dark:text-gray-200">Loading</div>
    <NoData v-if="error" location="Reports" url="/reports" />
    <div class="flex flex-col">
      <div
        v-if="!loading && !error"
        class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
      >
        <div
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 dark:border-indigo-700 bg-gray-50 dark:bg-indigo-700 dark:text-gray-200"
                >State</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 dark:border-indigo-700 bg-gray-50 dark:bg-indigo-700 dark:text-gray-200"
                >Country</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 dark:border-indigo-700 bg-gray-50 dark:bg-indigo-700 dark:text-gray-200"
                >Confirmed</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 dark:border-indigo-700 bg-gray-50 dark:bg-indigo-700 dark:text-gray-200"
                >Recovered</th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 dark:border-indigo-700 bg-gray-50 dark:bg-indigo-700 dark:text-gray-200"
                >Deaths</th>
              </tr>
            </thead>
            <tbody>
              <TableRowDaily v-for="(stat, index) in stats" :item="stat" :key="index" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import axios from 'axios'
import TableRowDaily from '~/components/TableRowDaily'
import NoData from '~/components/NoData'

export default {
  data() {
    return {
      stats: '',
      loading: true,
      error: false
    }
  },
  components: {
    TableRowDaily,
    NoData
  },
  async mounted() {
    await axios
      .get(`https://covid19.mathdro.id/api/daily/${this.$context.date}`)
      .then(res => {
        this.loading = false
        this.stats = res.data
      })
      .catch(error => {
        this.loading = false
        this.error = true
      })
  }
}
</script>
