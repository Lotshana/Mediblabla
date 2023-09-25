import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import('preline')
import AuthWrapper from './components/AuthWrapper.vue'
import router from './router' 


const app = createApp(App);
app.use(router);
app.mount('#app')



//new Vue ({
 //render: h => h(AuthWrapper)
//}).$mount("./components/Login.vue/");

