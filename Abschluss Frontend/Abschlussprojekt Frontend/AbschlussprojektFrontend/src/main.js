
import App from './App.vue'

import { createApp } from 'vue'

import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'
import {router} from './router'

import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

registerPlugins(app)

createApp(App)
.use(router)
.use(pinia)
.use(vuetify)
.mount('#app')