import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    // The `:id` syntax tells Vue Router to capture whatever is in the URL 
    // and pass it to the component as route.params.id
    {
      path: '/:id',
      name: 'project-detail',
      component: () => import('../views/ProjectDetailView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // If the user clicks the browser's Back/Forward button, remember where they were
    if (savedPosition) {
      return savedPosition
    } 
    // Otherwise, always scroll to the very top of the new page
    else {
      return { top: 0 }
    }
  }
})

export default router