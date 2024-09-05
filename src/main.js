import { createApp } from 'vue'
import './style/general.scss'
import App from './App.vue'
import AppHome from './pages/AppHome.vue'
import AppAbout from './pages/AppAbout.vue'
import AppWorks from './pages/AppWorks.vue'
import router from './router'

createApp(App).use(router).mount('#app')
