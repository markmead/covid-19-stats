<template>
  <g-link
    :to="url"
    class="flex items-center p-2 mt-1 text-sm font-medium leading-none text-gray-600 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 dark-focus:bg-indigo-800 dark:text-gray-100 dark-hover:text-white dark-hover:bg-indigo-700"
    exact-active-class="text-gray-900 bg-gray-100 rounded-md dark:text-white dark:bg-indigo-700 app-link-exact-active"
  >
    <slot />
    {{ title }}
  </g-link>
</template>

<script>
export default {
  name: 'NavigationLink',
  props: ['url', 'title'],
}
</script>

<style media="screen">
.app-link-exact-active > svg {
  @apply text-gray-500;
}

.mode-dark .app-link-exact-active > svg {
  @apply text-gray-300;
}
</style>
