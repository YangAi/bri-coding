<template>
  <v-tabs v-model="innerValue" v-bind="$attrs">
    <v-tab v-for="tab in tabs" :key="tab">
      {{ tab }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: 'STabs',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    tabs: {
      type: Array,
      default: () => {}
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
