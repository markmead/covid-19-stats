<template>
  <tr class="odd:bg-white even:bg-gray-50">
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
      {{ item.node.reportDate | formatDate }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
      {{ item.node.mainlandChina || 0 | formatNumber }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
      {{ item.node.otherLocations || 0 | formatNumber }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
      {{ item.node.totalConfirmed || 0 | formatNumber }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
      {{ item.node.totalRecovered || 0 | formatNumber }}
    </td>
  </tr>
</template>

<script>
  export default {
    name: 'TableRow',
    props: ['item']
  }
</script>
