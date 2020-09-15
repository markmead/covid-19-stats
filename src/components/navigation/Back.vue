<template>
  <g-link
    :to="to"
    class="inline-flex items-center mb-5 text-sm font-medium leading-none text-gray-600 transition duration-150 ease-in-out group hover:text-gray-900 focus:outline-none focus:text-gray-900 dark:text-gray-200 dark-hover:text-white"
  >
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class="w-6 h-6 mr-2 text-gray-400 transition duration-150 ease-in-out dark:text-gray-300 group-hover:text-gray-500 dark-group-hover:text-gray-200"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M7 16l-4-4m0 0l4-4m-4 4h18"
      />
    </svg>
    {{ text }}
  </g-link>
</template>

<script>
export default {
  props: {
    to: String,
    text: String,
  },
}
</script>