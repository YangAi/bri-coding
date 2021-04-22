// Provide nuxt-axios instance to use same configuration across the whole project
// I've used typical CRUD method names and actions here
export default $axios => resource => ({
  get (uri, query) {
    return $axios.$get(`${resource}/${uri}`, query)
  },

  index () {
    return $axios.$get(`${resource}`)
  },

  show (id, query) {
    return $axios.$get(`${resource}/${id}`, query)
  },

  create (payload) {
    return $axios.$post(`${resource}`, payload)
  },

  update (id, payload) {
    return $axios.$put(`${resource}/${id}`, payload)
  },

  delete (id) {
    return $axios.$delete(`${resource}/${id}`)
  }
})
