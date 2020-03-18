<template>
  <div>
    <button type="button" name="button" class="flex items-center p-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 dark-hover:bg-indigo-700 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150 dark:text-gray-100 dark-focus:bg-indigo-800" @click="$emit('update-theme', toggleTheme())">
      <svg v-show="theme === 'light'" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
      <svg v-show="theme === 'dark'" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
      <span class="ml-2 capitalize font-medium leading-1 hidden sm:block">{{ theme }}</span>
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        theme: 'light'
      }
    },
    watch: {
      theme() {
        localStorage.setItem('theme', this.theme)
      }
    },
    methods: {
      toggleTheme() {
        return this.theme = this.theme === 'dark' ? 'light' : 'dark'
      }
    },
    mounted() {
      if(localStorage.getItem('theme')) this.theme = localStorage.theme
    }
  }
</script>
