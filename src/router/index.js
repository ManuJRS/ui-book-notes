import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import HowStart from '../pages/HowStart.vue'

const routes = [
  { 
    path: '/', 
    component: HomePage 
    },
  { 
    path: '/HowStart', 
    component: HowStart 
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
