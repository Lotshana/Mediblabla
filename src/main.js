import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import('preline')
import AuthWrapper from './components/AuthWrapper.vue'

createApp(App).mount('#app')

new Vue ({
    render: h => h(AuthWrapper)
}).$mount("./components/Login.vue/");