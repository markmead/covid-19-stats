import DefaultLayout from '~/layouts/Default.vue'
import '~/main.css'

import moment from 'moment'
import 'flag-icon-css/css/flag-icon.css'

require('typeface-inter')

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)

  Vue.filter('formatDate', value => moment(new Date(value)).format('LL'))
  Vue.filter('formatDateTime', value => moment(new Date(value)).format('LLL'))
  Vue.filter('formatNumber', value => Number(value).toLocaleString())
}
