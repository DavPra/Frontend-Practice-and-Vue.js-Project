import { createRouter, createWebHistory } from 'vue-router'
import StartPageView from '@/views/StartPageView.vue'
import TestView from '@/views/TestView.vue'
import RegisterPageView from '@/views/RegisterPageView.vue'
import LoginPageView from '@/views/LoginPageView.vue'
import CardsView from '@/views/CardsView.vue'

const routes = [
{ path: '/', component: StartPageView },
{ path: '/register', name: 'register', component: RegisterPageView},
{ path: '/test' , component: TestView},
{ path: '/login', component: LoginPageView},
{ path: '/skip', component: CardsView}
]

const router = createRouter({
routes,
history: createWebHistory()
})
export {router}