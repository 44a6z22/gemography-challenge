import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueObserveVisibility from 'vue-observe-visibility'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


createApp(App).use(store).use(router).use(VueObserveVisibility).mount('#app')


// myApp.config.globalProperties.$http = axios
// myApp.config.globalProperties.ok= axios;