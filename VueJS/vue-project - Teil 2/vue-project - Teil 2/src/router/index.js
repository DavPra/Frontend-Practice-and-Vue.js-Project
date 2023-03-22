import { createRouter, createWebHistory } from 'vue-router';
import homeView from '@/views/homeView.vue';
import createPersonView from '@/views/createPersonView.vue';
 
const routes = [
    {path:'/', component: homeView},
    {path: '/createPerson', component: createPersonView},
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export {router}