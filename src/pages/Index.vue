<template>
  <Layout title="Dashboard">
    <div v-if="!stats">Loading</div>
    <ShortStats v-else :stats="stats" />
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
      }
    },
    components: {
      ShortStats
    },
    methods: {
      getStats() {
        axios
          .get('https://covid19.mathdro.id/api')
          .then(res => (this.stats = res.data))
          .catch(error => console.log(error))
      }
    },
    mounted() {
      this.getStats()
    }
  }
</script>
