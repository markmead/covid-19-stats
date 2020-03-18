<template>
  <div class="bg-indigo-600 dark:bg-indigo-900 rounded">
    <div class="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
          {{ title || 'Global' }}
          stats for Coronavirus
          <span class="hidden lg:inline">
            (COVID-19)
          </span>
        </h2>
        <p class="mt-3 text-xl leading-7 text-indigo-200 sm:mt-4">
          Last Update: {{ stats.lastUpdate | formatDateTime }}
        </p>
      </div>
      <div class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
        <div class="mt-10 sm:mt-0">
          <p class="text-5xl leading-none font-extrabold text-white">
            {{ stats.confirmed.value | formatNumber }}
          </p>
          <p class="mt-2 text-lg leading-6 font-medium text-indigo-200">
            Confirmed
          </p>
        </div>
        <div class="mt-10 sm:mt-0">
          <p class="text-5xl leading-none font-extrabold text-white">
            {{ stats.recovered.value | formatNumber }}
          </p>
          <p class="mt-2 text-lg leading-6 font-medium text-indigo-200">
            Recovered
          </p>
        </div>
        <div class="mt-10 sm:mt-0">
          <p class="text-5xl leading-none font-extrabold text-white">
            {{ stats.deaths.value | formatNumber }}
          </p>
          <p class="mt-2 text-lg leading-6 font-medium text-indigo-200">
            Dead
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['stats', 'title']
  }
</script>
