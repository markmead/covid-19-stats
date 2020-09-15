<template>
  <Layout :title="$context.date | formatDate">
    <NavigationBack to="/reports" text="Back to reports" />
    <NoData v-if="error" location="Reports" url="/reports" />

    <div class="flex flex-col">
      <div
        v-if="!error && stats"
        class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
      >
        <div
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <TableHeading text="State" />
                <TableHeading text="Country" />
                <TableHeading text="Confirmed" />
                <TableHeading text="Deaths" />
                <TableHeading text="Deaths" />
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

import TableHeading from '@/components/table/Heading'
import NavigationBack from '@/components/navigation/Back'

export default {
  data() {
    return {
      error: false,
      stats: false,
    }
  },
  components: {
    TableRowDaily,
    NoData,
    TableHeading,
    NavigationBack,
  },
  async mounted() {
    await axios
      .get(`https://covid19.mathdro.id/api/daily/${this.$context.date}`)
      .then((res) => {
        this.stats = res.data
      })
      .catch(() => {
        this.error = true
      })
  },
}
</script>
