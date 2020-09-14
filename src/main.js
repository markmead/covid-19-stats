import DefaultLayout from '~/layouts/Default.vue'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

import 'typeface-inter'
import 'flag-icon-css/css/flag-icon.css'

import '~/main.css'

dayjs.extend(LocalizedFormat)

export default function(Vue) {
  Vue.component('Layout', DefaultLayout)

  Vue.filter('formatDate', (value) => dayjs(new Date(value)).format('LL'))
  Vue.filter('formatDateTime', (value) => dayjs(new Date(value)).format('LLL'))
  Vue.filter('formatNumber', (value) => Number(value).toLocaleString())
}
