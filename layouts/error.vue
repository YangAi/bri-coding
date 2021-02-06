<template>
  <v-app dark>
    <v-container class="fillheight tw-bg-gray-800 p-12">
      <s-card max-width="600" class="tw-m-auto">
        <s-card-title v-if="error.statusCode === 404">
          {{ pageNotFound }}
        </s-card-title>
        <s-card-title v-else>
          {{ error.message ||otherError }}
        </s-card-title>
        <v-container>
          <NuxtLink to="/">
            Home page
          </NuxtLink>
        </v-container>
      </s-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
