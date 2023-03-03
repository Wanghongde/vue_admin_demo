import router from '@/router/index'
import store from '@/store/index'
import { ElMessage } from 'element-plus'
import checktime from '@/utils/checktime'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  console.log(888, to.path)
  if (store.getters.token) {
    if (checktime()) {
      store.dispatch('app/logout')
      ElMessage.error('登陆超时,请重新登录')
    }

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
      if(to.path !== '/login') {
        console.log(11, to.path, from.path)
        ElMessage.error('您还未登录, 请重新登录')
      }

      next('/login')
    }
  }
})
