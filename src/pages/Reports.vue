<template>
  <Layout title="Latest Reports">
    <div class="relative mb-8 bg-indigo-600 rounded">
      <div class="max-w-5xl p-4 mx-auto text-center">
        <p class="leading-tight text-white">
          Reports no longer have accurate data for total recovered, therefore
          it's been removed.
        </p>
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

import TableHeading from '@/components/table/Heading'

export default {
  metaInfo: {
    title: 'Daily Global Reports of Coronavirus',
  },
  components: {
    TableRow,
    TableHeading,
  },
}
</script>
