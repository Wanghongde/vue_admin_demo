import { createStore } from 'vuex'
import login from './modules/login'
import getters from './getters'

export default createStore({
  modules: {
    app: login
  },
  getters
})
