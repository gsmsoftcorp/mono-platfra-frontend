/**
 * axios.js
 * axios 세팅
 */

let actionFlag = false
let actionUrl = ''

export default function ({ $axios }) {
  $axios.defaults.timeout = 3000 // timeout 시간 설정

  /* 중복 호출 제어 */
  $axios.interceptors.request.use((config) => {
    config.headers.get.Pragma = 'no-cache'
    config.headers.get['Cache-Control'] = 'no-cache, no-store'

    if (config.method === 'post') {
      if (actionFlag) {
        return
      }
      actionFlag = true
      actionUrl = config.url
    }
    return config
  })

  $axios.interceptors.response.use((config) => {
    if (config.config.url === actionUrl) {
      actionFlag = false
      actionUrl = ''
    }
    return config
  })
}
