<template>
  <div class="tw-flex tw-items-center tw-border-none tw-group" :class="logoOnRight ? 'tw-flex-row-reverse' : ''">
    <v-avatar v-bind="$attrs">
      <v-img :src="require(`../../assets/logo/${platform}.png`)" />
    </v-avatar>
    <span class="tw-mx-2 tw-text-xs tw-opacity-0 group-hover:tw-opacity-100">{{ platform }}</span>
  </div>
</template>

<script>
export default {
  name: 'SPlatformLogo',
  props: {
    platform: {
      type: String,
      validator (val) {
        return ['链家', '贝壳', '我爱我家'].includes(val)
      }
    },
    persistent: {
      type: Boolean,
      default: false
    },
    logoOnRight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
