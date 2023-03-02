import router from '@/router/index'
import store from '@/store/index'
import { ElMessage } from 'element-plus'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    if (to.path === '/login') {
      ElMessage.success('已登录, 自动跳转到首页')
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      ElMessage.error('您还未登录, 请重新登录')
      next('/login')
    }
  }
})
