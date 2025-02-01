import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// import api login google
import vue3GoogleLogin from 'vue3-google-login'

//import css tailwind
import "./assets/style.css"

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID
})

app.mount('#app')
