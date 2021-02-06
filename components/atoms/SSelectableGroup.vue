<template>
  <v-chip-group v-model="innerValue" v-bind="$attrs">
    <s-selectable-item v-for="(item, index) of items" :key="index" :item="item" />
  </v-chip-group>
</template>

<script>
export default {
  name: 'SSelectableGroup',
  props: {
    value: {
      type: null,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    innerValue: {
      get () {
        return this.value
      },
      set (newValue) {
        this.$emit('input', newValue)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
