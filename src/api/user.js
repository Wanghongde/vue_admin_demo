import request from '@/utils/request.js'

export const getUser = data => {
  return request({
    url: '/users',
    method: 'GET',
    params: data
  })
}

export const delUser = data => {
  return request({
    url: `/users/${data}`,
    method: 'DELETE'
  })
}

export const putUser = data => {
  return request({
    url: `/users/${data.id}`,
    method: 'PUT',
    data: data
  })
}

export const addUser = data => {
  return request({
    url: `/users`,
    method: 'POST',
    data
  })
}

export const putUserState = data => {
  return request({
    url: `/users/${data.id}/state/${data.bool}`,
    method: 'PUT'
  })
}
