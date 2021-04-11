// eslint-disable-next-line nuxt/no-cjs-in-config
const colors = require('tailwindcss/colors')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - bri-coding',
    title: 'bri-coding',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/plugins',
    '~/plugins/axios',
    '~/plugins/api'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-toastification/nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: '/api'
  },

  /*
  ** Server Middleware
  */
  serverMiddleware: {
    '/api': '~/server'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/css/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: colors.blue['500'],
          accent: colors.indigo['500'],
          secondary: colors.rose['500'],
          info: colors.teal['400'],
          warning: colors.amber['400'],
          error: colors.red['500'],
          success: colors.green['500']
        }
      }
    }
  },
  eslint: {
    cache: false
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
