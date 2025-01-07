import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import VueGtag from 'vue-gtag'
import ToastPlugin  from 'vue-toast-notification'
import {globalMixin} from  './mixins'

// Importar Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


// Crea la instancia de la aplicación
const app = createApp(App)

// Configura VueGtag
app.use(VueGtag, {
    config: { id: import.meta.env.VITE_APP_GOOGLE_ANALITYCS }, // Usa tu ID de Google Analytics
})

// Use VueToast
app.use(ToastPlugin, {
  position: 'top',
  type: 'default',
  duration: 2500,
})

// Agrega el store si estás usando Vuex o Pinia
app.use(store)

// Registra el mixin global
app.mixin(globalMixin)

// Monta la aplicación
app.mount('#app')
