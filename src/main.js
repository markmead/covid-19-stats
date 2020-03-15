// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/main.css'

import moment from 'moment'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)

  Vue.filter('formatDate', value => moment(String(value)).format('LL'))
  Vue.filter('formatNumber', value => Number(value).toLocaleString())
}
