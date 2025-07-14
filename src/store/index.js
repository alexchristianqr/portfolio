import { createStore } from "vuex";
import { environment } from "./../env";
import es from "../locale/es.json.js";
import en from "../locale/en.json.js";
import modules from "./modules";

// Crear el store con Vuex
export const store = createStore({
  modules,
  state: {
    prefixLanguage: localStorage.getItem("lang") || "es", // Idioma por defecto
    loading: {
      page: false
    },
    alerts: [
      { label: "error", content: null },
      { label: "success", content: null },
      { label: "warning", content: null },
      { label: "info", content: null }
    ],
    env: environment
  },
  mutations: {
    setLanguage(state, payload) {
      console.log("[Mutations.setLanguage]", payload);
      state.prefixLanguage = payload;
      localStorage.setItem("lang", payload); // Guardar preferencia en localStorage
    },
    setLoadingPage(state, payload) {
      console.log("[Mutations.setLoadingPage]", payload);
      state.loading.page = payload;
    },
    async setError(state, e) {
      console.error("[Mutations.setError]", { error: e });

      const modals = window.document.getElementsByClassName("modal");
      for (let i = 0; i < modals.length; i++) {
        modals[i].scrollTop = 0;
      }

      if (typeof e.response === "object") {
        const statusCode = e.response.status;
        switch (statusCode) {
          case 402: // Require payment
            state.alerts[0].content = e.response.data.message;
            break;
          case 403: // Require Authorization
            state.alerts[0].content = e.response.data.message;
            break;
          case 422: // Unprocessable entity
            state.alerts[0].content = e.response.data.errors;
            break;
          case 500: // Server error
            state.alerts[0].content = "Internal server error";
            break;
          default:
            state.alerts[0].content = e.response.data.message;
            break;
        }
      } else if (e.message === "Network Error") {
        state.alerts[0].content = e.message;
      } else {
        state.alerts[0].content = e;
      }
    }
  },
  getters: {
    currentLanguage(state) {
      console.log("[Getters.currentLanguage]");
      const languages = { es, en };
      return languages[state.prefixLanguage] || languages["es"]; // Retorna el idioma correspondiente
    },
    selectedPrefixLanguage: (state) => {
      console.log("[Getters.selectedPrefixLanguage]");
      return state.prefixLanguage;
    },
    loadingPage: (state) => {
      return state.loading.page;
    },
    env: (state) => state.env
  },
  actions: {
    changeLanguage({ commit }, payload) {
      console.log("[Actions.changeLanguage]", payload);
      commit("setLanguage", payload);
    }
  }
});
