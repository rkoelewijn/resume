import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/llm-thesis',
      name: 'llm-thesis',
      // This lazy-loads the page only when the user clicks it, saving load time
      component: () => import('../views/LlmThesisView.vue')
    },
    {
      path: '/grondg-kpi',
      name: 'grondg-kpi',
      component: () => import('../views/GrondgView.vue')
    }
  ]
})

export default router