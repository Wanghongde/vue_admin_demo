import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login-box',
    component: () => import('../views/login')
  },
  {
    path: '/',
    component: () => import('../layout/index'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home-box',
        component: () => import('../views/home')
      },
      {
        path: 'user',
        name: 'user-box',
        component: () => import('../views/user')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
