import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _43be63bd = () => interopDefault(import('../pages/bri/action-type/_name.vue' /* webpackChunkName: "pages/bri/action-type/_name" */))
const _2161d15b = () => interopDefault(import('../pages/bri/_name.vue' /* webpackChunkName: "pages/bri/_name" */))
const _c6708654 = () => interopDefault(import('../pages/test/_name.vue' /* webpackChunkName: "pages/test/_name" */))
const _151b5ab9 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/bri/action-type/:name?",
    component: _43be63bd,
    name: "bri-action-type-name"
  }, {
    path: "/bri/:name?",
    component: _2161d15b,
    name: "bri-name"
  }, {
    path: "/test/:name?",
    component: _c6708654,
    name: "test-name"
  }, {
    path: "/",
    component: _151b5ab9,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
