import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: "goods",
        name: "goods",
        component: () => import(/* webpackChunkName: "goods" */ '../views/GoodsView.vue'),
        meta: {
          isShow: true,
          title: '商品列表'
        }
      },
      {
        path: "user",
        name: "user",
        component: () => import(/* webpackChunkName: "user" */ '../views/UserView.vue'),
        meta: {
          isShow: true,
          title: '用户列表'
        }
      },
      {
        path: "role",
        name: "role",
        component: () => import(/* webpackChunkName: "role" */ '../views/RoleView.vue'),
        meta: {
          isShow: true,
          title: '角色列表'
        }
      },
      {
        path: "authority",
        name: "authority",
        component: () => import(/* webpackChunkName: "authority" */ '../views/AuthorityView.vue'),
        meta: {
          isShow: false,
          title: '权限列表'
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
