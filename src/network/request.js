import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://leju.bufan.cloud/'
})
instance.interceptors.request.use(config => {
  return config
})
instance.interceptors.response.use(res => {
  return res.data
})
export default instance
