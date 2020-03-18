<template>
  <Layout :title="$context.title" :countryCode="$context.code">
    <g-link to="/countries" class="mb-5 group inline-flex items-center text-sm leading-5 font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150 dark:text-gray-200 dark-hover:text-white">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 mr-2 text-gray-400 dark:text-gray-300 transition ease-in-out duration-150 group-hover:text-gray-500 dark-group-hover:text-gray-200"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
      Back to countries
    </g-link>
    <div v-if="loading" class="dark:text-gray-200">Loading</div>
    <NoData v-if="error" location="Countries" url="/countries" />
    <ShortStats v-if="!loading && !error" :stats="stats" :title="$context.title" />
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
        .get(`https://covid19.mathdro.id/api/countries/${this.$context.code}`)
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
