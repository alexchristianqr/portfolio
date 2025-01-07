import { useStore } from "vuex";
import { computed } from "vue";

export function globalMixin() {
  const store = useStore();

  // Obtener el contenido del idioma actual desde el getter
  const selectedLanguage = computed(() => store.getters.currentLanguage);

  return {
    selectedLanguage,
    loadingPage: store.getters.loadingPage,
    trackEvent(action) {
      if (window.gtag) {
        alert("lanzando evento gtag:  " + action);
        window.gtag("event", action, {
          event_category: "not set",
          event_label: "not set",
          value: 1
        });
      } else {
        console.warn("Google Analytics is not initialized.");
      }
    }
  };
}
