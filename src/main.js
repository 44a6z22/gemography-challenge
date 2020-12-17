import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from "axios"

import infiniteScroll from 'vue-infinite-scroll'
// Vue.use(infiniteScroll)
// import "./node_modules/bower_components/aos/dist/aos.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


createApp(App).use(store).use(router).use(infiniteScroll).mount('#app')


// myApp.config.globalProperties.$http = axios
// myApp.config.globalProperties.ok= axios;