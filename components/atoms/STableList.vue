<template>
  <v-simple-table ref="list" v-resize="resizeHandle" dense :class="{'small-text': small}" class="tw-bg-transparent">
    <tbody :class="{'two-columns': twoColumns && largeContainer }">
      <slot />
    </tbody>
  </v-simple-table>
</template>

<script>
export default {
  name: 'STableList',
  props: {
    twoColumns: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      largeContainer: true
    }
  },
  mounted () {
    this.resizeHandle()
  },
  methods: {
    resizeHandle () {
      this.largeContainer = this.$refs.list.$el.clientWidth > 600
    }
  }
}
</script>

<style lang="scss" scoped>
.two-columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ::v-deep tr {
    flex: 0 0 50%;
    display: table;
  }
  ::v-deep .v-divider {
    flex: 0 0 100%;
  }
}
</style>
