import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import axios from 'axios'
import '@/assets/css/app.scss'
import vuetify from './plugins/vuetify';
import store from './store';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

axios.defaults.withCredentials = true
window.axios = axios
Vue.config.productionTip = false
Vue.use(VueToast, {
  // One of the options
  position: 'top-right'
})

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
