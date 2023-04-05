import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias:'/home',
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
  {
    path:'/login',
    name:'登录',
    meta:{
        title:'登录'
    },
    component:()=>import('../components/login/main.vue')
},
{
    path:'/loading',
    name:'loading',
    meta:{
        title:'验证中',
    },
    component:()=>import('../components/loading/main.vue')
},
{
    path:'/register',
    name:'注册',
    meta:{
        title:'注册'
    },
    component:()=>import('../components/register/main.vue')
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
  history: createWebHistory(),
  routes
})

export default router
