import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import VueGtag from 'vue-gtag'
import VueToast from 'vue-toast-notification'

// Set mixins global
import './mixins'

// Configuration VueAnalytics
Vue.use(VueGtag, {
  config: { id: process.env.VUE_APP_GOOGLE_ANALITYCS },
})

// Use VueToast
Vue.use(VueToast, {
  position: 'top',
  type: 'default',
  duration: 2500,
})

Vue.config.productionTip = false

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')
