import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    path: '/education',
    name:'education',
    component: () => import(/* webpackChunkName: "about" */ '../views/EducationView.vue')
  },
  {
    path:'/projects',
    name:'projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProjectView.vue')
  },
  {
    path:'/contact',
    name:'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
