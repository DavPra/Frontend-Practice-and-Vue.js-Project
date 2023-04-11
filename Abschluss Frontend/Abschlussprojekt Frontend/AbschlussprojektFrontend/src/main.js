
import App from './App.vue'

import { createApp } from 'vue'

import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'
import {router} from './router'

const app = createApp(App)

registerPlugins(app)

createApp(App)
.use(router)
.use(vuetify)
app.mount('#app')
