<template>
  <tr class="odd:bg-white even:bg-gray-50">
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 capitalize">
      {{ item.provinceState || '---' }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 capitalize">
      {{ item.countryRegion }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
      {{ item.confirmed || 0 | formatNumber }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
      {{ item.recovered || 0 | formatNumber }}
    </td>
    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
      {{ item.deaths || 0 | formatNumber }}
    </td>
  </tr>
</template>

<script>
  export default {
    name: 'TableRowDaily',
    props: ['item']
  }
</script>
