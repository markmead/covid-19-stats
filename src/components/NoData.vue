<template>
  <div
    class="bg-white dark:bg-indigo-700 rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl sm:max-w-sm sm:w-full sm:p-6"
  >
    <div>
      <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-800">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-red-600 dark:text-gray-200">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      <div class="mt-3 text-center sm:mt-5">
        <h3 class="text-lg leading-none font-medium text-gray-900 dark:text-gray-200">
          Sorry, we are still gathering data!
        </h3>
        <div class="mt-2">
          <p class="text-sm leading-none text-gray-500 dark:text-gray-100">
            This does not mean there's no cases of COVID-19
          </p>
        </div>
      </div>
    </div>
    <div class="mt-5 sm:mt-6">
      <span class="flex w-full rounded-md shadow-sm">
        <g-link
          :to="url"
          class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-none font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-none"
        >
          Back to {{ location }}
        </g-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['location', 'url'],
}
</script>
