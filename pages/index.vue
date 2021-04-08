<template>
  <v-container>
    <s-card class="tw-w-64">
      <s-card-title>名字缩写：</s-card-title>
      <v-container>
        <v-text-field v-model="name" />
        <v-btn block large label="Name Abbr" :to="`/bri/action-type/${name}`">
          Start
        </v-btn>
      </v-container>
    </s-card>
  </v-container>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      name: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
