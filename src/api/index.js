import axios from 'axios'
import router from '../router'
//백엔드 api를 호출 url
const DOMAIN = 'http://localhost:3000'
const UNAUTHORIZED = 401
const onUnauthrized =()=> {
  router.push('/login')
}

//method: get,post / url: backend api utl / payload
const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data
  }).then(result => result.data)
    .catch(result => {
      const {status} = result.response
      if(status === UNAUTHORIZED) return onUnauthrized()
      throw Error(result)
    })
}

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}

export const board = {
  fetch() {
    return request('get', '/boards')
  },
  create(title) {
    return request('post', '/boards', {title})
  }
}

export const auth = {
  login(email, password) {
    return request('post', '/login', {email, password})
  }
}