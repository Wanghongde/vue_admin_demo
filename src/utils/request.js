import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

request.interceptors.request.use(config => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = token
  }

  return config
})

request.interceptors.response.use(response => {
  if (response.data.meta.status === 200 || response.data.meta.status === 201) {
    ElMessage.success(response.data.meta.msg)
    return response.data
  } else {
    ElMessage.error(response.data.meta.msg)

    return Promise.reject(new Error(response.data.meta.msg))
  }
}, err => Promise.reject(new Error(err)))

export default request
