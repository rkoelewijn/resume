import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue' // <-- Import the new dynamic view

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // The `:id` syntax tells Vue Router to capture whatever is in the URL 
    // and pass it to the component as route.params.id
    {
      path: '/:id',
      name: 'project-detail',
      component: ProjectDetailView
    }
  ]
})

export default router