<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <!-- Off-canvas menu for mobile -->
    <div v-show="sidebarOpen" class="md:hidden">
      <div @click="sidebarOpen = false">
        <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
      </div>
      <div class="fixed inset-0 flex z-40">
        <div v-show="sidebarOpen">
          <div class="absolute top-0 right-0 -mr-14 p-1">
            <button v-show="sidebarOpen" @click="sidebarOpen = false" class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600">
              <svg class="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex-shrink-0 flex items-center px-4">
            <g-image class="h-8 w-auto" src="~/workflow-logo-on-white.svg" alt="Workflow" />
          </div>
          <div class="mt-5 flex-1 h-0 overflow-y-auto">
            <nav class="px-2">
              <NavigationLink url="/" title="Dashboard">
                <svg class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              </NavigationLink>
              <NavigationLink url="/reports" title="Reports">
                <svg class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </NavigationLink>
            </nav>
          </div>
        </div>
        <div class="flex-shrink-0 w-14">
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-white">
        <div class="flex items-center flex-shrink-0 px-4">
          <g-image class="h-8 w-auto" src="~/workflow-logo-on-white.svg" alt="Workflow" />
        </div>
        <div class="mt-5 h-0 flex-1 flex flex-col overflow-y-auto">
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <nav class="flex-1 px-2 bg-white">
            <NavigationLink url="/" title="Dashboard">
              <svg class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </NavigationLink>
            <NavigationLink url="/reports" title="Reports">
              <svg class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </NavigationLink>
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
        <button @click.stop="sidebarOpen = true" class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden">
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
        <div class="flex-1 px-4 flex justify-between">
          <div class="flex-1 flex">
            <div class="w-full flex md:ml-0">
              <label for="search_field" class="sr-only">Search</label>
              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                  </svg>
                </div>
                <input id="search_field" class="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm" placeholder="Search" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <main class="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none" tabindex="0">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 class="text-2xl font-semibold text-gray-900">{{ title }}</h1>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div class="py-4 mx-w-screen-xl">
            <slot/>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import NavigationLink from '~/components/NavigationLink'

  export default {
    data() {
      return {
        sidebarOpen: false
      }
    },
    props: ['title'],
    components: {
      NavigationLink
    }
  }
</script>
