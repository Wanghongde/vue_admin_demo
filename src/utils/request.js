import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

request.interceptors.response.use(response => {
  if (response.data.success) {
    ElMessage.success(response.data.message)
    return response.data
  } else {
    ElMessage.error(response.data.message)

    return Promise.reject(new Error(response.data.message))
  }
}, err => Promise.reject(new Error(err)))

export default request
