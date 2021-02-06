<template>
  <v-card-title :class="classList" class="tw-whitespace-nowrap tw-overflow-ellipsis tw-tracking-wider tw-font-bold tw-items-baseline">
    <slot>
      {{ title }}
      <v-spacer />
      <v-btn icon small @click="$emit('iconCLick')">
        <v-icon small>
          {{ icon }}
        </v-icon>
      </v-btn>
    </slot>
  </v-card-title>
</template>

<script>
export default {
  name: 'SCardTitle',
  props: {
    title: {
      type: String,
      default: ''
    },
    large: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    xSmall: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    noMargin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList () {
      if (this.xSmall) { return `tw-text-xs ${this.noMargin ? 'tw-p-0' : 'tw-py-2'}` }
      if (this.small) { return `tw-text-sm ${this.noMargin ? 'tw-p-0' : 'tw-py-3'}` }
      if (this.large) { return `tw-text-xl ${this.noMargin ? 'tw-p-0' : 'tw-py-4'}` }
      return `tw-text-base ${this.noMargin ? 'tw-p-0' : ''}`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
