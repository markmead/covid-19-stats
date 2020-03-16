<template>
  <Layout :title="$context.title">
    <div v-if="loading">Loading</div>
    <NoData v-if="error" />
    <ShortStats v-else :stats="stats" :title="$context.title" />
  </Layout>
</template>

<script>
  import axios from 'axios'
  import ShortStats from '~/components/ShortStats'
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
      ShortStats,
      NoData
    },
    async mounted() {
      await axios
        .get(`https://covid19.mathdro.id/api/countries/${this.$context.query}`)
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
