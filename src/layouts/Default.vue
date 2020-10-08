<template>
  <div>
    <div class="flex h-screen overflow-hidden bg-gray-100 dark:bg-indigo-800">
      <div v-show="sidebarOpen" class="lg:hidden">
        <div
          class="fixed inset-0 z-30 transition-opacity duration-300 ease-linear"
        >
          <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>
        <div class="fixed inset-0 z-40 flex">
          <div
            v-click-outside="sidebarClose"
            class="flex flex-col flex-1 w-full max-w-xs duration-300 ease-in-out transform bg-white dark:bg-indigo-900"
          >
            <div class="absolute top-0 right-0 p-1 -mr-14">
              <button
                aria-label="Toggle sidebar close"
                @click="sidebarOpen = false"
                class="flex items-center justify-center w-12 h-12 text-gray-200 rounded-full focus:outline-none focus:bg-gray-600 hover:text-white dark-focus:bg-indigo-700"
              >
                <SidebarCloseIcon />
              </button>
            </div>
            <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <SidebarLogo />
              <div class="px-2 mt-4">
                <ThemeToggle v-on:update-theme="theme = $event" />
              </div>
              <nav class="px-2 mt-4">
                <NavigationLink url="/" title="Home">
                  <SidebarHomeIcon />
                </NavigationLink>
                <NavigationLink url="/reports" title="Reports">
                  <SidebarTrendsIcon />
                </NavigationLink>
                <NavigationLink url="/countries" title="Countries">
                  <SidebarGlobeIcon />
                </NavigationLink>
              </nav>
            </div>
            <SidebarCredits />
          </div>
          <div class="flex-shrink-0 w-14"></div>
        </div>
      </div>

      <div class="hidden lg:flex lg:flex-shrink-0">
        <div
          class="flex flex-col w-64 bg-white border-r border-gray-200 dark:border-indigo-700 dark:bg-indigo-900"
        >
          <div class="flex flex-col flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <SidebarLogo />
            <div class="px-2 mt-4">
              <ThemeToggle v-on:update-theme="theme = $event" />
            </div>
            <nav class="flex-1 px-2 mt-4 bg-white dark:bg-indigo-900">
              <NavigationLink url="/" title="Home">
                <SidebarHomeIcon />
              </NavigationLink>
              <NavigationLink url="/reports" title="Reports">
                <SidebarTrendsIcon />
              </NavigationLink>
              <NavigationLink url="/countries" title="Countries">
                <SidebarGlobeIcon />
              </NavigationLink>
            </nav>
          </div>
          <SidebarCredits />
        </div>
      </div>
      <div class="flex flex-col flex-1 w-0 overflow-hidden">
        <div class="pt-1 pl-1 lg:hidden sm:pl-3 sm:pt-3">
          <button
            aria-label="Toggle sidebar open"
            @click.stop="sidebarOpen = true"
            class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150 dark:text-gray-300 dark-hover:text-white dark-focus:bg-indigo-700"
          >
            <SidebarHamburgerIcon />
          </button>
        </div>
        <main
          class="relative z-0 flex-1 pt-2 pb-6 overflow-y-auto focus:outline-none md:py-6"
        >
          <div class="flex items-center px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <span
              v-if="countryCode"
              class="mr-4 text-2xl flag-icon"
              :class="flagClass"
              :title="title"
            ></span>
            <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">
              {{ title }}
            </h1>
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
import axios from 'axios'
import ClickOutside from 'vue-click-outside'

import NavigationLink from '~/components/NavigationLink'
import ThemeToggle from '~/components/ThemeToggle'

import SidebarHomeIcon from '@/components/sidebar/HomeIcon'
import SidebarGlobeIcon from '@/components/sidebar/GlobeIcon'
import SidebarTrendsIcon from '@/components/sidebar/TrendsIcon'
import SidebarHamburgerIcon from '@/components/sidebar/HamburgerIcon'
import SidebarCloseIcon from '@/components/sidebar/CloseIcon'
import SidebarCredits from '@/components/sidebar/Credits'
import SidebarLogo from '@/components/sidebar/Logo'

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
    SidebarHomeIcon,
    SidebarGlobeIcon,
    SidebarTrendsIcon,
    SidebarHamburgerIcon,
    SidebarCloseIcon,
    SidebarCredits,
    SidebarLogo,
  },
  methods: {
    sidebarClose() {
      if (this.sidebarOpen) {
        this.sidebarOpen = false
      }
    },
  },
  mounted() {
    if (this.countryCode)
      this.flagClass = `flag-icon-${this.countryCode.toLowerCase()}`

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
