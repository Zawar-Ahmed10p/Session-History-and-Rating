import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'history',
      component: () => import('../views/SessionHistory.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/SessionHistory.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/Signup.vue')
    },
    {
      path: '/sessiondetail/:sessionid',
      name: 'sessiondetail',
      props: true,
      component: () => import('../views/SessionDetail.vue')
    },
    {
      path: '/rating/:sessionid',
      name: 'rating',
      props: true,
      component: () => import('../views/Rating.vue')
    }
  ]
})

export default router
