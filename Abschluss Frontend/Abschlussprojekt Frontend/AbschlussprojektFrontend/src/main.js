
import App from './App.vue'

import { createApp } from 'vue'

import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'

const app = createApp(App)

registerPlugins(app)

createApp(App)
.use(vuetify)
app.mount('#app')
