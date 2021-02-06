<template>
  <s-card-title v-bind="$attrs" :class="classList" class="main-page-title tw-flex tw-text-3xl tw-font-bold">
    <slot>
      {{ title }}
    </slot>
    <template v-if="$slots.actions">
      <v-spacer />
      <slot name="actions" />
    </template>
  </s-card-title>
</template>

<script>
export default {
  name: 'SMainPageTitle',
  props: {
    title: {
      type: String,
      default: ''
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList () {
      return this.dark ? 'tw-text-white' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.v-breadcrumbs + .main-page-title{
  margin-top: 8px!important;
}
</style>
