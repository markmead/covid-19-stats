<template>
  <tr
    class="odd:bg-white even:bg-gray-50 dark-even:bg-indigo-800 dark-odd:bg-indigo-900"
  >
    <td
      class="px-6 py-4 text-sm leading-none text-gray-500 capitalize whitespace-no-wrap dark:text-gray-200"
    >
      {{ item.provinceState || '---' }}
    </td>
    <td
      class="px-6 py-4 text-sm leading-none text-gray-500 capitalize whitespace-no-wrap dark:text-gray-200"
    >
      {{ item.countryRegion }}
    </td>
    <td
      class="px-6 py-4 text-sm leading-none text-gray-500 whitespace-no-wrap dark:text-gray-200"
    >
      {{ item.confirmed || 0 | formatNumber }}
    </td>
    <td
      class="px-6 py-4 text-sm leading-none text-gray-500 whitespace-no-wrap dark:text-gray-200"
    >
      {{ item.deaths || 0 | formatNumber }}
    </td>
  </tr>
</template>

<script>
export default {
  name: 'TableRowDaily',
  props: ['item'],
}
</script>
