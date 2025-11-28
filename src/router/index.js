import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import HowStart from '../pages/HowStart.vue'
import DetailsComesLater from '../pages/DetailsComesLater.vue'
import WorkInCycles from '../pages/WorkInCycles.vue'

const routes = [
  { 
    path: '/', 
    component: HomePage 
    },
  { 
    path: '/HowStart', 
    component: HowStart 
    },
      { 
    path: '/DetailsComesLater', 
    component: DetailsComesLater 
    },
          { 
    path: '/WorkInCycles', 
    component: WorkInCycles 
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
