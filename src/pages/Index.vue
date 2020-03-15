<template>
  <Layout title="Dashboard">
    <ShortStats/>
  </Layout>
</template>

<script>
  import ShortStats from '~/components/ShortStats'

  export default {
    metaInfo: {
      title: 'Hello, world!'
    },
    components: {
      ShortStats
    }
  }
</script>
