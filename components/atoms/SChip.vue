<template>
  <v-chip
    dark
    small
    v-bind="$attrs"
    :class="colorClass"
    class="tw-mr-1"
    v-on="$listeners"
  >
    <template v-for="(_, slot) in $slots">
      <template :slot="slot">
        <slot :name="slot" />
      </template>
    </template>
  </v-chip>
</template>

<script>
export default {
  name: 'SChip',
  props: {
    color: {
      type: String,
      default: 'gray'
    }
  },
  computed: {
    colorClass () {
      return `tw-bg-${this.color}-100 tw-text-${this.color}-500`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
