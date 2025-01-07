import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store";
import VueGtag from "vue-gtag";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// Importar Bootstrap & Icons CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";

// Crea la instancia de la aplicación
const app = createApp(App);

// Configura VueGtag
app.use(VueGtag, {
  config: { id: import.meta.env.VITE_APP_GOOGLE_ANALITYCS } // Usa tu ID de Google Analytics
});

// Use VueToast
app.use(Toast, {
  position: "top",
  type: "default",
  duration: 2500
});

// Agrega el store si estás usando Vuex o Pinia
app.use(store);

// Monta la aplicación
app.mount("#app");
