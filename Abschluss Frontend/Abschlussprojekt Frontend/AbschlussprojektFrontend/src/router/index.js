import { createRouter, createWebHistory } from 'vue-router'
import StartPageView from '@/views/StartPageView.vue'
import LoginPageView from '@/views/LoginPageView.vue'
const routes = [
{ path: '/', component: StartPageView },
{ path: '/about', component: AboutView },
{ path: '/login', component: LoginPageView}
]
const router = createRouter({
routes,
history: createWebHistory()
})
export {router}