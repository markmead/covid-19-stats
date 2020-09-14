<template>
  <tr class="odd:bg-white even:bg-gray-50 dark-even:bg-indigo-800 dark-odd:bg-indigo-900">
    <td class="px-6 py-4 text-sm font-medium leading-none text-gray-400 whitespace-no-wrap dark:text-gray-200">
      {{ item.node.reportDate | formatDate }}
    </td>
    <td class="px-6 py-4 text-sm leading-none text-gray-500 whitespace-no-wrap dark:text-gray-200">
      {{ item.node.mainlandChina || 0 | formatNumber }}
    </td>
    <td class="px-6 py-4 text-sm leading-none text-gray-500 whitespace-no-wrap dark:text-gray-200">
      {{ item.node.otherLocations || 0 | formatNumber }}
    </td>
    <td class="px-6 py-4 text-sm leading-none text-gray-500 whitespace-no-wrap dark:text-gray-200">
      {{ item.node.totalConfirmed || 0 | formatNumber }}
    </td>
    <td
      class="px-6 py-4 text-sm leading-none text-gray-500 whitespace-no-wrap transition ease-in-out dark:text-gray-200 duration hover:text-indigo-600 dark-hover:text-white"
    >
      <g-link :to="`/report/${item.node.reportDate}`">View Report</g-link>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'TableRow',
  props: ['item'],
}
</script>
