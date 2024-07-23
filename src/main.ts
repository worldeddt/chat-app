import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import AppBackUp from './AppBackUp.vue'
import router from './router'

const app = createApp(AppBackUp)

app.use(createPinia())
app.use(router)

app.mount('#app')
