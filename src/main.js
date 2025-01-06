import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import api login google
import vue3GoogleLogin from 'vue3-google-login'

//import css tailwind
import "./assets/style.css"

const app = createApp(App)

app.use(router)

app.use(vue3GoogleLogin, {
    clientId: '974883783456-t59kniqebdsckb3urv52p5p6umjddb7f.apps.googleusercontent.com'
})

app.mount('#app')
