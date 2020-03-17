// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import vSelect from 'vue-select'

import '~/main.css'
import 'flag-icon-css/css/flag-icon.css'

import moment from 'moment'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('v-select', vSelect)

  Vue.filter('formatDate', value => moment(new Date(value)).format('LL'))
  Vue.filter('formatDateTime', value => moment(new Date(value)).format('LLL'))
  Vue.filter('formatNumber', value => Number(value).toLocaleString())
}
