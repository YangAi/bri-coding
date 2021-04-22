<template>
  <v-app dark>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      version: 'v1.0.4',
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '一带一路'
    }
  },
  async mounted () {
    const res = await this.$api.bri.show('version')
    if (this.version !== res.value) {
      this.$nuxt.error({ statusCode: 400, message: res.value + '版本需要更新，麻烦Github重新Pull一下' })
    }
  }
}
</script>
