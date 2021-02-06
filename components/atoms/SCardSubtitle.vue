<template>
  <v-card-subtitle :class="classList" class="tw-text-xs">
    <slot />
  </v-card-subtitle>
</template>

<script>
export default {
  name: 'SCardSubtitle',
  props: {
    noMargin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList () {
      return this.noMargin ? 'tw-p-0' : ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
