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
      title: 'Dashboard'
    },
    data() {
      return {
        stats: '',
      }
    },
    components: {
      ShortStats
    },
    async mounted() {
      await axios
        .get('https://covid19.mathdro.id/api')
        .then(res => (this.stats = res.data))
        .catch(error => console.log(error))
    }
  }
</script>
