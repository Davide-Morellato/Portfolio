
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  // { path: '/', component: AppHome },
  // { path: '/about', component: AppAbout },
  // { path: '/works', component: AppWorks },
  // { path: '/:pathMatch(.*)*', name:'not-found', component: AppNotFound},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router