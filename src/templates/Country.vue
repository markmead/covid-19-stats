<template>
  <Layout :title="$context.title" :countryCode="$context.icon">
    <NavigationBack to="/countries" text="Back to countries" />
    <NoData v-if="error" location="Countries" url="/countries" />
    <ShortStats v-if="!error && stats" :stats="stats" :title="$context.title" />
  </Layout>
</template>

<script>
import axios from 'axios'

import ShortStats from '~/components/ShortStats'
import NoData from '~/components/NoData'
import NavigationBack from '@/components/navigation/Back'

export default {
  data() {
    return {
      stats: null,
      error: false,
    }
  },
  components: {
    ShortStats,
    NoData,
    NavigationBack,
  },
  async mounted() {
    await axios
      .get(`https://covid19.mathdro.id/api/countries/${this.$context.code}`)
      .then((res) => {
        this.stats = res.data
      })
      .catch(() => {
        this.error = true
      })
  },
}
</script>
