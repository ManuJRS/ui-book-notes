import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import HowStart from '../pages/HowStart.vue'
import DetailsComesLater from '../pages/DetailsComesLater.vue'
import WorkInCycles from '../pages/WorkInCycles.vue'
import ChoosePersonality from '../pages/ChoosePersonality.vue'
import LimitYourChoices from '../pages/LimitYourChoices.vue'
import NotAllTheSame from '../pages/NotAllTheSame.vue'
import SizeIsntEverything from '../pages/SizeIsntEverything.vue'

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
    },
    { 
    path: '/ChoosePersonality', 
    component: ChoosePersonality 
    },
    { 
    path: '/LimitYourChoices', 
    component: LimitYourChoices 
    },
    { 
    path: '/NotAllTheSame', 
    component: NotAllTheSame 
    },
    { 
    path: '/SizeIsntEverything', 
    component: SizeIsntEverything 
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
