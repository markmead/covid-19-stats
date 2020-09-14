<template>
  <g-link
    :to="url"
    class="mt-1 group flex items-center p-2 text-sm leading-none font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 dark-focus:bg-indigo-800 transition ease-in-out duration-150 dark:text-gray-100 dark-hover:text-white dark-hover:bg-indigo-700"
    exact-active-class="text-gray-900 dark:text-white rounded-md bg-gray-100 dark:bg-indigo-700 app-link-exact-active"
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
