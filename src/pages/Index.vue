<template>
  <Layout title="Home">
    <ShortStats :stats="stats" v-if="stats" />

    <div class="flex flex-col mt-5">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg dark:border-indigo-700"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <TableHeading text="Date" />
                <TableHeading text="China" />
                <TableHeading text="Worldwide" />
                <TableHeading text="Confirmed" />
                <TableHeading text />
              </tr>
            </thead>
            <tbody>
              <TableRow
                v-for="edge in $page.reports.edges"
                :item="edge"
                :key="edge.node.id"
              />
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
          totalConfirmed
          mainlandChina
          otherLocations
        }
      }
    }
  }
</page-query>

<script>
import axios from 'axios'

import ShortStats from '~/components/ShortStats'
import TableRow from '~/components/TableRow'
import TableHeading from '@/components/table/Heading'

export default {
  metaInfo: {
    title: 'Global Coronavirus Cases',
  },
  data() {
    return {
      stats: null,
    }
  },
  components: {
    ShortStats,
    TableRow,
    TableHeading,
  },
  async mounted() {
    await axios
      .get('https://covid19.mathdro.id/api')
      .then((res) => (this.stats = res.data))
  },
}
</script>
