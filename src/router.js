
import { createWebHistory, createRouter } from 'vue-router'
import AppHome from './pages/AppHome.vue'
import AppAbout from './pages/AppAbout.vue'
import AppWorks from './pages/AppWorks.vue'

//creazione rotte (array di oggetti)
const routes = [
  { path: '/', component: AppHome },
  { path: '/about', component: AppAbout },
  { path: '/works', component: AppWorks },
  // { path: '/:pathMatch(.*)*', name:'not-found', component: AppNotFound},
]

//invoco il createRouter (funzione a cui passo un oggetto con la proprietà history & le rotte di navigazione)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router