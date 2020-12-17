import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from "axios"



const myApp = createApp(App).use(store).use(router).mount('#app')


// myApp.config.globalProperties.$http = axios
// myApp.config.globalProperties.ok= axios;