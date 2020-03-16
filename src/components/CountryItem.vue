<template>
  <li>
    <g-link
      :to="/country/ + country.replace(/\s+/g, '-').toLowerCase()"
      class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
      <div class="px-4 py-4 sm:px-6">
        <div class="flex items-center">
          <flag :iso="code.toLowerCase()" />
          <div class="text-sm leading-5 font-medium ml-2">
            <span class="text-indigo-600 mr-2">{{ country }}</span>
            <sup class="text-gray-400">{{ code }}</sup>
          </div>
        </div>
      </div>
    </g-link>
  </li>
</template>

<script>
  export default {
    name: 'CountryItem',
    props: ['country', 'code']
  }
</script>
