import request from '@/utils/request'

export const login = data => request({
  method: 'POST',
  url: '/login',
  data
})
