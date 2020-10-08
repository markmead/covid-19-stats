<template>
  <div
    class="px-4 pt-5 pb-4 overflow-hidden bg-white rounded-lg shadow-xl dark:bg-indigo-700 sm:max-w-sm sm:w-full sm:p-6"
  >
    <div>
      <div
        class="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full dark:bg-red-800"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6 text-red-600 dark:text-gray-200"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      <div class="mt-3 text-center sm:mt-5">
        <h3
          class="text-lg font-medium leading-none text-gray-900 dark:text-gray-200"
        >
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
          class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-none text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-none"
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
