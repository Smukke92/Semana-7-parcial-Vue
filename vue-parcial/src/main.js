import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles.css'

const app = createApp(App)
app.use(router)   // <-- usar el router
app.mount('#app')
