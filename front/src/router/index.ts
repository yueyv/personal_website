import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: { title: "首页" },
    component: HomeView,
    children: [
      {
        path: '/',
        name: 'home',
        meta: { title: "首页" },
        component: () => import("../pages/yuegao/yuegao.vue")
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
