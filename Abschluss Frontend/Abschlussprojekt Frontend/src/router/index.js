import { createRouter, createWebHistory } from 'vue-router'
import LoginPageView from '@/views/LoginPageView.vue'

const routes = [
  { path: '/', component: LoginPageView },
  { path: '/about', component: AboutView },
  ]
  const router = createRouter({
  routes,
  history: createWebHistory()
  })
  export {router}
