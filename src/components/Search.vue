<template>
  <div>
    <label for="countrySearch" class="sr-only">Search for a country</label>
    <div class="relative rounded-md shadow-sm">
      <input
        @input="$emit('input', $event.target.value)"
        id="countrySearch"
        class="block w-full py-3 form-input sm:text-sm sm:leading-none dark:bg-indigo-600 dark:border-indigo-500 dark:text-gray-200"
        placeholder="Enter country name"
      />
    </div>
  </div>
</template>

<style media="screen">
.mode-dark .form-input::placeholder {
  @apply text-indigo-200;
}
</style>
