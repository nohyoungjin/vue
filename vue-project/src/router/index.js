import {
  createRouter,
  createWebHistory
} from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DataBinding from '../views/DataBinding.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
  {
    path: '/DataBinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/NestedComponent',
    name: 'NestedComponent',
    component: () => import('../views/NestedComponent.vue')
  },
  {
    path: '/bodView',
    name: 'bodView',
    component: () => import('../views/bodView.vue')
  },
  {
    path: '/bodChart',
    name: 'bodChart',
    component: () => import('../views/bodChart.vue')
  },
  {
    path: '/bodChart2',
    name: 'bodChart2',
    component: () => import('../views/bodChart2.vue')
  },
  {
    path: '/infiniteList',
    name: 'infiniteList',
    component: () => import('../views/infiniteList.vue')
  },
  {
    path: '/tabList',
    name: 'tabList',
    component: () => import('../views/tabList.vue')
  },
  {
    path: '/IndexPage',
    name: 'IndexPage',
    component: () => import('../views/IndexPage.vue')
  },
  {
    path: '/DataDb',
    name: 'DataDb',
    component: () => import('../views/DataDb.vue')
  },
  {
    path: '/bodLogin',
    name: 'bodLogin',
    component: () => import('../views/bodLogin.vue')
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import('../views/signUp.vue')
  },
  {
    path: '/SwiperSlide',
    name: 'SwiperSlide',
    component: () => import('../views/SwiperSlide.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router