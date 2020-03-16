<template>
  <Layout title="Countries">
    <div class="bg-white shadow overflow-hidden sm:rounded-md">
      <ul class="md:grid md:grid-cols-2 lg:grid-cols-3">
        <CountryItem
          v-for="(key, value) in this.countries"
          :country="value"
          :code="key"
          :key="value" />
      </ul>
    </div>
  </Layout>
</template>

<script>
  import axios from 'axios'
  import CountryItem from '~/components/CountryItem'

  export default {
    data() {
      return {
        countries: ''
      }
    },
    components: {
      CountryItem
    },
    async mounted() {
      await axios
        .get('https://covid19.mathdro.id/api/countries')
        .then(res => this.countries = res.data.countries)
    }
  }
</script>
