import { createApp } from 'vue'
import router from '@/routes'
import { pinia } from '@/store'
import App from '@/App.vue'
import '@/assets/style/index.scss'

const app = createApp(App)

app.config.errorHandler = (err) => {
  console.error(err)
}

app.use(router)
app.use(pinia)

app.mount('#app')
