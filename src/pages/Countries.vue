<template>
  <Layout title="Countries">
    <div class="mb-5">
      <Search v-model="search" />
    </div>
    <div class="bg-white shadow dark:bg-indigo-700 sm:rounded-md">
      <ul
        v-if="filteredCountries"
        class="md:grid md:grid-cols-2 lg:grid-cols-3"
      >
        <CountryItem
          v-for="country in this.filteredCountries"
          :key="country.iso3"
          :country="country"
        />
      </ul>
    </div>
  </Layout>
</template>

<script>
import axios from 'axios'
import CountryItem from '~/components/CountryItem'
import Search from '~/components/Search'

export default {
  metaInfo: {
    title: 'Countries Affected by Coronavirus',
  },
  data() {
    return {
      countries: '',
      search: '',
    }
  },
  components: {
    CountryItem,
    Search,
  },
  computed: {
    filteredCountries() {
      if (!this.countries) return
      Object.filter = (obj, predicate) =>
        Object.fromEntries(Object.entries(obj).filter(predicate))

      return Object.filter(this.countries, ([country, code]) => {
        return code.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
  },
  async mounted() {
    await axios
      .get('https://covid19.mathdro.id/api/countries')
      .then((res) => (this.countries = res.data.countries))
  },
}
</script>
