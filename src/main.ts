import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Add this line to import the flags globally:
import 'flag-icons/css/flag-icons.min.css'

const app = createApp(App)

app.use(router)
app.mount('#app')