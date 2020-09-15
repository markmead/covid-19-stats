<template>
  <th
    class="px-6 py-3 text-xs font-medium leading-none tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 dark:border-indigo-700 bg-gray-50 dark:bg-indigo-700 dark:text-gray-200"
  >{{ text }}</th>
</template>

<script>
export default {
  props: {
    text: String,
  },
}
</script>