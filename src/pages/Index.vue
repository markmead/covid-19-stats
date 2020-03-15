<template>
  <Layout title="Dashboard">
    <ShortStats :stats="stats"/>
  </Layout>
</template>

<script>
import axios from 'axios'
  import ShortStats from '~/components/ShortStats'

  export default {
    metaInfo: {
      title: 'Hello, world!'
    },
    data() {
      return {
        stats: '',
        loading: false
      }
    },
    components: {
      ShortStats
    },
    methods: {
      getStats() {
        this.loading = true
        axios
          .get('https://covid19.mathdro.id/api')
          .then(res => {
            this.loading = false
            this.stats = res.data
          })
          .catch(error => {
            this.loading = false
            console.log(error)
          })
      }
    },
    mounted() {
      this.getStats()
    }
  }
</script>
