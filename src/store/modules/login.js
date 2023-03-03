import { login as loginApi } from '@/api/login'
import router from '@/router'
import { ElMessage } from 'element-plus'

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      localStorage.setItem('token-start-time', Date.now())
      localStorage.setItem('token', token)
    },
    logout (state) {
      state.token = ''
      localStorage.clear()
      router.replace('/login')

      ElMessage.success('成功退出')
    }
  },
  actions: {
    login ({ commit }, data) {
      return new Promise((resolve, reject) => {
        loginApi(data).then(result => {
          commit('setToken', result.data)
          router.replace('/home')
          resolve(result)
        })
      })
    },
    logout ({ commit }) {
      commit('logout')
    }
  }
}
