<template>
  <ul>
    <li v-for="item in report">
      {{ item }}
    </li>
  </ul>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        report: ''
      }
    },
    async mounted() {
      await axios
        .get('https://covid19.mathdro.id/api/daily/2-14-2020')
        .then(res => (this.report = res.data))
        .catch(error => console.log(error))
    }
  }
</script>
