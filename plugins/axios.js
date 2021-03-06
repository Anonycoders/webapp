export default function({ app: { $axios, $cookies } }) {
  $axios.setHeader('Content-Type', 'application/json')
  const authorization = $cookies.get('authorization')

  if (authorization) {
    $axios.setHeader('authorization', authorization)
  }
  $axios.onRequest(async config => {
    return config
  })
}
