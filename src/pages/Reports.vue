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
                  Other Countries
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Total Confirmed
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Total Recovered
                </th>
              </tr>
            </thead>
            <tbody>
              <TableRow v-for="item in reports.data" :item="item" :key="item.objectid" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
  import axios from 'axios'
  import TableRow from '~/components/TableRow'

  export default {
    metaInfo: {
      title: 'Latest Reports'
    },
    data() {
      return {
        reports: null
      }
    },
    components: {
      TableRow
    },
    async mounted() {
      const reportsData =
        await axios
          .get('https://covid19.mathdro.id/api/daily')
          .then(res => this.reports = res)

    }
  }
</script>
