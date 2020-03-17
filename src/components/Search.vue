<template>
  <div>
    <label for="countrySearch" class="sr-only">Search for a country</label>
    <div class="relative rounded-md shadow-sm">
      <input
        @input="$emit('input', $event.target.value)"
        id="countrySearch"
        class="form-input block w-full sm:text-sm sm:leading-5"
        placeholder="Enter country name" />
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>
