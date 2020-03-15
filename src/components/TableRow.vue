<template>
  <tr class="odd:bg-white even:bg-gray-50">
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
      {{ item.reportDateString | formatDate }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
      {{ item.mainlandChina }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
      {{ item.otherLocations }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
      {{ item.totalConfirmed }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
      {{ item.totalRecovered }}
    </td>
  </tr>
</template>

<script>
  export default {
    name: 'TableRow',
    props: ['item']
  }
</script>
