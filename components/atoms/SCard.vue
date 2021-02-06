<template>
  <v-card v-bind="$attrs" flat :class="noHover ? '' : 'hover:tw-shadow-lg'" class="tw-rounded-lg tw-relative">
    <slot />
  </v-card>
</template>

<script>
export default {
  name: 'SCard',
  props: {
    noHover: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
