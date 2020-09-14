<template>
  <div>
    <div class="flex h-screen overflow-hidden bg-gray-100 dark:bg-indigo-800">
      <div v-show="sidebarOpen" class="lg:hidden">
        <div class="fixed inset-0 z-30 transition-opacity duration-300 ease-linear">
          <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>
        <div class="fixed inset-0 z-40 flex">
          <div
            v-click-outside="sidebarClose"
            class="flex flex-col flex-1 w-full max-w-xs duration-300 ease-in-out transform bg-white dark:bg-indigo-900 "
          >
            <div class="absolute top-0 right-0 p-1 -mr-14">
              <button
                @click="sidebarOpen = false"
                class="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-gray-600 dark:text-gray-300 dark-hover:text-white focus:bg-indigo-700"
              >
                <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div class="flex items-center flex-shrink-0 px-4">
                <g-image class="w-auto h-10" src="~/cough.svg" alt="Cough" immediate="true" />
                <span class="ml-2 text-lg font-medium dark:text-white">Coronavirus</span>
              </div>
              <nav class="px-2 mt-5">
                <NavigationLink url="/" title="Dashboard">
                  <svg
                    class="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 dark-group-hover:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                </NavigationLink>
                <NavigationLink url="/reports" title="Reports">
                  <svg
                    class="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 dark-group-hover:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    ></path>
                  </svg>
                </NavigationLink>
                <NavigationLink url="/countries" title="Countries">
                  <svg
                    class="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 dark-group-hover:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    ></path>
                  </svg>
                </NavigationLink>
              </nav>
            </div>
            <div class="flex flex-shrink-0 p-4 border-t border-gray-200 dark:border-indigo-700">
              <div class="block group focus:outline-none">
                <div class="flex items-center">
                  <div>
                    <div class="text-xs font-medium leading-none text-gray-500 dark:text-gray-300">
                      COVID-19 API from
                      <a
                        href="https://github.com/mathdroid/covid-19-api"
                        target="_blank"
                        class="transition duration-150 ease-in hover:text-gray-900 dark-hover:text-gray-100"
                      >
                        mathdroid
                      </a>
                    </div>
                    <div class="mt-1 text-xs font-medium leading-none text-gray-500 dark:text-gray-300">
                      Cough icon made by
                      <a
                        href="https://www.flaticon.com/authors/freepik"
                        title="Freepik"
                        target="_blank"
                        class="transition duration-150 ease-in hover:text-gray-900 dark-hover:text-gray-100"
                        >Freepik</a
                      >
                      from
                      <a
                        href="https://www.flaticon.com/"
                        title="Flaticon"
                        target="_blank"
                        class="transition duration-150 ease-in hover:text-gray-900 dark-hover:text-gray-100"
                        >www.flaticon.com</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-shrink-0 w-14"></div>
        </div>
      </div>

      <div class="hidden lg:flex lg:flex-shrink-0">
        <div class="flex flex-col w-64 bg-white border-r border-gray-200 dark:border-indigo-700 dark:bg-indigo-900">
          <div class="flex flex-col flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div class="flex items-center flex-shrink-0 px-4">
              <g-image class="w-auto h-10" src="~/cough.svg" alt="Cough" immediate="true" />
              <span class="ml-2 text-lg font-medium dark:text-white">Coronavirus</span>
            </div>
            <div class="px-2 mt-4">
              <span
                class="mb-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-none bg-orange-100 text-orange-800 dark:bg-indigo-700 dark:text-gray-300"
              >
                Still in development
              </span>
              <ThemeToggle v-on:update-theme="theme = $event" />
            </div>
            <nav class="flex-1 px-2 mt-4 bg-white dark:bg-indigo-900">
              <NavigationLink url="/" title="Dashboard">
                <svg
                  class="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 dark-group-hover:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </NavigationLink>
              <NavigationLink url="/reports" title="Reports">
                <svg
                  class="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 dark-group-hover:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  ></path>
                </svg>
              </NavigationLink>
              <NavigationLink url="/countries" title="Countries">
                <svg
                  class="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 dark-group-hover:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  ></path>
                </svg>
              </NavigationLink>
            </nav>
          </div>
          <div class="flex flex-shrink-0 p-4 border-t border-gray-200 dark:border-indigo-700">
            <div class="block group focus:outline-none">
              <div class="flex items-center">
                <div>
                  <div class="text-xs font-medium leading-none text-gray-500 dark:text-gray-300">
                    COVID-19 API from
                    <a
                      href="https://github.com/mathdroid/covid-19-api"
                      target="_blank"
                      class="transition duration-150 ease-in hover:text-gray-900 dark-hover:text-gray-100"
                    >
                      mathdroid
                    </a>
                  </div>
                  <div class="mt-1 text-xs font-medium leading-none text-gray-500 dark:text-gray-300">
                    Cough icon made by
                    <a
                      href="https://www.flaticon.com/authors/freepik"
                      title="Freepik"
                      target="_blank"
                      class="transition duration-150 ease-in hover:text-gray-900 dark-hover:text-gray-100"
                      >Freepik</a
                    >
                    from
                    <a
                      href="https://www.flaticon.com/"
                      title="Flaticon"
                      target="_blank"
                      class="transition duration-150 ease-in hover:text-gray-900 dark-hover:text-gray-100"
                      >www.flaticon.com</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col flex-1 w-0 overflow-hidden">
        <div class="pt-1 pl-1 lg:hidden sm:pl-3 sm:pt-3">
          <button
            @click.stop="sidebarOpen = true"
            class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150 dark:text-gray-300 dark-hover:text-white focus:bg-indigo-700"
          >
            <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <main class="relative z-0 flex-1 pt-2 pb-6 overflow-y-auto focus:outline-none md:py-6">
          <div class="flex items-center px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <span v-if="countryCode" class="mr-4 text-2xl flag-icon" :class="flagClass" :title="title"></span>
            <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">{{ title }}</h1>
          </div>

          <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <div class="py-4">
              <slot />
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import axios from 'axios'
import NavigationLink from '~/components/NavigationLink'
import ThemeToggle from '~/components/ThemeToggle'

export default {
  metaInfo() {
    return {
      htmlAttrs: {
        class: `mode-${this.theme}`,
      },
    }
  },
  data() {
    return {
      flagClass: '',
      theme: 'light',
      sidebarOpen: false,
    }
  },
  props: ['title', 'countryCode'],
  components: {
    NavigationLink,
    ThemeToggle,
  },
  methods: {
    sidebarClose() {
      if (this.sidebarOpen) {
        this.sidebarOpen = false
      }
    },
  },
  mounted() {
    if (this.countryCode) this.flagClass = `flag-icon-${this.countryCode.toLowerCase()}`

    if (localStorage.getItem('theme')) {
      this.theme = localStorage.theme
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.theme = 'dark'
        localStorage.setItem('theme', 'dark')
      } else {
        this.theme = 'light'
        localStorage.setItem('theme', 'light')
      }
    }
  },
  directives: { ClickOutside },
}
</script>
