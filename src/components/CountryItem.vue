<template>
  <li>
    <g-link
      :to="`/country/${country.name.replace(/\W/g, '').toLowerCase()}`"
      class="block transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:shadow-outline focus:border-blue-300 dark-hover:bg-indigo-600 dark-focus:bg-indigo-600"
      tabindex="0"
    >
      <div class="px-4 py-4 sm:px-6">
        <div class="flex items-center">
          <span class="flag-icon" :class="className" :title="country.name"></span>
          <div class="ml-2 text-sm font-medium leading-5">
            <span class="mr-2 text-indigo-600 dark:text-gray-200">{{ country.name }}</span>
            <sup class="text-gray-400 dark:text-gray-300">{{ country.iso3 }}</sup>
          </div>
        </div>
      </div>
    </g-link>
  </li>
</template>

<script>
export default {
  name: 'CountryItem',
  props: ['country'],
  data() {
    return {
      className: ''
    }
  },
  mounted() {
    if (this.country.iso3) {
      this.className = `flag-icon-${this.country.iso2.toLowerCase()}`
    }
  }
}
</script>
