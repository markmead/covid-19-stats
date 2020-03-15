<template>
  <g-link
    :to="url"
    class="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
    exact-active-class="text-gray-900 rounded-md bg-gray-100 app-link-exact-active">
    <slot/>
    {{ title }}
  </g-link>
</template>

<script>
  export default {
    name: 'NavigationLink',
    props: ['url', 'title']
  }
</script>


<style media="screen">
  .app-link-exact-active > svg {
    @apply text-gray-500
  }
</style>
