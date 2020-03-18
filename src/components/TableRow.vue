<template>
  <tr class="odd:bg-white even:bg-gray-50 dark-even:bg-indigo-800 dark-odd:bg-indigo-900">
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-400 dark:text-gray-200">
      {{ item.node.reportDate | formatDate }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 dark:text-gray-200">
      {{ item.node.mainlandChina || 0 | formatNumber }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 dark:text-gray-200">
      {{ item.node.otherLocations || 0 | formatNumber }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 dark:text-gray-200">
      {{ item.node.totalConfirmed || 0 | formatNumber }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 dark:text-gray-200">
      {{ item.node.totalRecovered || 0 | formatNumber }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 dark:text-gray-200 transition duration ease-in-out hover:text-indigo-600 dark-hover:text-white">
      <g-link :to="`/report/${item.node.reportDateString.replace(new RegExp('/', 'g'), '-')}`">View Report</g-link>
    </td>
  </tr>
</template>

<script>
  export default {
    name: 'TableRow',
    props: ['item']
  }
</script>
