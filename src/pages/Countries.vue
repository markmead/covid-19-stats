<template>
  <Layout title="Countries">
    <div class="mb-5">
      <label for="countrySearch" class="sr-only">Search for a country</label>
      <div class="relative rounded-md shadow-sm">
        <input
          v-model="search"
          id="countrySearch"
          class="form-input block w-full sm:text-sm sm:leading-5"
          placeholder="Enter country name" />
      </div>
    </div>
    <div class="bg-white shadow overflow-hidden sm:rounded-md">
      <ul v-if="filteredCountries" class="md:grid md:grid-cols-2 lg:grid-cols-3">
        <CountryItem
          v-for="(key, value) in this.filteredCountries"
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
        countries: '',
        search: ''
      }
    },
    components: {
      CountryItem
    },
    computed: {
      filteredCountries() {
        if(!this.countries) return
        Object.filter = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(predicate))
        return Object.filter(this.countries, ([country, code]) => country.toLowerCase().includes(this.search.toLowerCase()))
      }
    },
    mounted() {
      axios
        .get('https://covid19.mathdro.id/api/countries')
        .then(res => this.countries = res.data.countries)
    }
  }
</script>
