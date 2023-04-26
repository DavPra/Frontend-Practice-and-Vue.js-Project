import { createRouter, createWebHistory } from 'vue-router'
import StartPageView from '@/views/StartPageView.vue'
//import TestView from '@/views/TestView.vue'
import RegisterPageView from '@/views/RegisterPageView.vue'
import LoginPageView from '@/views/LoginPageView.vue'
//import CardsView from '@/views/CardsView.vue'
//import APITestView from '@/views/APITestView'
import ListView from '@/views/ListView.vue'

const routes = [
{ path: '/', component: StartPageView },
{ path: '/register', name: 'register', component: RegisterPageView},
//{ path: '/test' , component: TestView},
{ path: '/login', component: LoginPageView},
//{ path: '/skip', component: CardsView},
//{ path: '/ApiTest', component: APITestView},
{path: '/list', component: ListView}
]

const router = createRouter({
routes,
history: createWebHistory()
})
export {router}