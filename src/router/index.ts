import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/home.vue')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
