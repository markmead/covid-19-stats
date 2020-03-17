<template>
  <Layout :title="$context.dateTime | formatDate">
    <g-link to="/reports" class="mb-5 group inline-flex items-center text-sm leading-5 font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 mr-2 text-gray-400 transition ease-in-out duration-150 group-hover:text-gray-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
      Back to reports
    </g-link>
    <div v-if="loading">Loading</div>
    <NoData v-if="error" location="Reports" url="/reports" />
    <div class="flex flex-col">
      <div v-if="!loading && !error" class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  State
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Country
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Total Confirmed
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Total Deaths
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Total Recovered
                </th>
              </tr>
            </thead>
            <tbody>
              <TableRowDaily
                v-for="(stat, index) in stats"
                :item="stat"
                :key="index" />
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
          console.log(res.data)
        })
        .catch(error => {
          this.loading = false
          this.error = true
        })
    }
  }
</script>
