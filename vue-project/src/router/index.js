import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import NestedComponent from '../views/NestedComponent.vue'
import bodView from '../views/bodView.vue'
import bodChart from '../views/bodChart.vue'
import bodChart2 from '../views/bodChart2.vue'
import infiniteList from '../views/infiniteList.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/DataBinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/NestedComponent',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/bodView',
    name: 'bodView',
    component: bodView
  },
  {
    path: '/bodChart',
    name: 'bodChart',
    component: bodChart
  },
  {
    path: '/bodChart2',
    name: 'bodChart2',
    component: bodChart2
  }
  ,
  {
    path: '/infiniteList',
    name: 'infiniteList',
    component: infiniteList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

