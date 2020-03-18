<template>
  <li>
    <g-link
      :to="/country/ + country.replace(/\s+/g, '-').toLowerCase()"
      class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out dark-hover:bg-indigo-600 dark-focus:bg-indigo-600"
      tabindex="0">
      <div class="px-4 py-4 sm:px-6">
        <div class="flex items-center">
          <span class="flag-icon" :class="className" :title="country"></span>
          <div class="text-sm leading-5 font-medium ml-2">
            <span class="text-indigo-600 dark:text-gray-200 mr-2">{{ country }}</span>
            <sup class="text-gray-400 dark:text-gray-300">{{ code }}</sup>
          </div>
        </div>
      </div>
    </g-link>
  </li>
</template>

<script>
  export default {
    name: 'CountryItem',
    props: ['country', 'code'],
    data() {
      return {
        className: ''
      }
    },
    mounted() {
      this.className = `flag-icon-${this.code.toLowerCase()}`
    }
  }
</script>
