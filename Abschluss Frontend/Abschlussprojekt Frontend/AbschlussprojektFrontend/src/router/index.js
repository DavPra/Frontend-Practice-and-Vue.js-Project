import { createRouter, createWebHistory } from 'vue-router'
import StartPageView from '@/views/StartPageView.vue'
import LoginPageView from '@/views/LoginPageView.vue'
import TestView from '@/views/TestView.vue'

const routes = [
{ path: '/', component: StartPageView },
{ path: '/login', name: 'login', component: LoginPageView},
{ path: '/test' , component: TestView}
]

const router = createRouter({
routes,
history: createWebHistory()
})
export {router}