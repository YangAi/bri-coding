import createRepository from '@/service/api'
import _ from 'lodash'
export default (ctx, inject) => {
  // inject the repository in the context (ctx.app.$repository)
  // And in the Vue instances (this.$repository in your components)
  const repositoryWithAxios = createRepository(ctx.$axios)
  inject('api', {
    bri: repositoryWithAxios('/bri')
  })
  inject('_', _)
  // You can reuse the repositoryWithAxios object:
  // inject("userRepository", repositoryWithAxios('/users'));
}
