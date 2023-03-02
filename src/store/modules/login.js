import { login as loginApi } from '@/api/login'
import router from '@/router'

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      localStorage.setItem('token', token)
    }
  },
  actions: {
    login ({ commit }, data) {
      return new Promise((resolve, reject) => {
        loginApi(data).then(result => {
          commit('setToken', result.data)
          router.replace('/index')
          resolve(result)
        })
      })
    }
  }
}
