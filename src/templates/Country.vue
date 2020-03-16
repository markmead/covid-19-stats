<template>
  <Layout :title="$context.title">
    <div v-if="!stats">Loading</div>
    <ShortStats v-else :stats="stats" :title="$context.title" />
    {{ this.$context.query }}
  </Layout>
</template>

<script>
  import axios from 'axios'
  import ShortStats from '~/components/ShortStats'

  export default {
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
        .get(`https://covid19.mathdro.id/api/countries/${this.$context.query}`)
        .then(res => this.stats = res.data)
    }
  }
</script>
