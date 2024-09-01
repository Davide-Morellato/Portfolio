
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  // { path: '/', component: AppHome },
//   { path: '/:pathMatch(.*)*', name:'not-found', component: AppNotFound},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router