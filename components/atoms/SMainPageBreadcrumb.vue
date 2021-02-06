<template>
  <v-breadcrumbs
    class="tw-mt-8 tw-p-0"
    :items="items"
    divider="/"
  />
</template>

<script>
export default {
  name: 'SMainPageBreadcrumb',
  props: {
    link: {
      type: String
    }
  },
  computed: {
    items () {
      return [
        {
          text: '元老院派系',
          disabled: false,
          href: 'breadcrumbs_dashboard'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
