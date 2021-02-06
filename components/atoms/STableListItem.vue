<template>
  <tr>
    <td class="label tw-text-left tw-text-gray-700">
      <slot name="text">
        {{ text }}
      </slot>
    </td>
    <td class="value tw-text-right">
      <slot>
        <v-checkbox
          v-if="typeof value === 'boolean'"
          readonly
          dense
          hide-details
          :value="value"
          class="tw-inline-block tw-mt-0 tw--mr-2 tw-ml-auto tw-w-auto"
        />
        <span v-else :class="{ 'tw-text-secondary': highlight }">
          {{ value ? value.toLocaleString() : value }}
          <span v-if="unit" class=""> {{ unit }}</span>
        </span>
      </slot>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'STableListItem',
  props: {
    value: {
      type: [String, Number, Boolean],
      default: '-'
    },
    text: {
      type: [String],
      default: '-'
    },
    unit: {
      type: [String],
      default: ''
    },
    highlight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  td {
    border-bottom: none!important;
    font-size: 0.75em
  }
</style>
