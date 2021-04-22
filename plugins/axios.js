import { isEmpty } from 'lodash'

export default function ({ $axios, $toast, error: nuxtError }) {
  $axios.onError((error) => {
    nuxtError({
      statusCode: error.response.status,
      message: error.message
    })
    return Promise.resolve(false)
  })
  $axios.onResponse((response) => {
    if (!response.data.success) {
      $toast.error(response.data.message)
    }
    return isEmpty(response.data) ? true : response.data
  })
}
