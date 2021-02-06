<template>
  <v-chip outlined small :value="item.value || item" active-class="tw-bg-blue-100 tw-text-primary tw-border-blue-100">
    {{ item.text || item }}
  </v-chip>
</template>

<script>
export default {
  name: 'SSelectableItem',
  props: {
    item: {
      type: [String, Object],
      default: '加载中'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
