import Vue from "vue";
import { store } from "@/store";
import en from "../locale/en.json.js";
import es from "../locale/es.json.js";

Vue.mixin({
  mounted() {
    if (localStorage.getItem("lang")) {
      switch (localStorage.getItem("lang")) {
        case "es":
          store.state.language.selected = es;
          break;
        case "en":
          store.state.language.selected = en;
          break;
      }
    } else {
      localStorage.setItem("lang", "es");
      store.state.language.selected = es;
    }
  },
  computed: {
    urlFileCV() {
      return `/portfolio/files/${store.getters.env.filenameCV}`;
    },
    selectedLanguage() {
      return store.getters.selectedLanguage;
    },
    loadingPage() {
      return store.getters.loadingPage;
    }
  },
  methods: {
    trackEvent(action) {
      this.$gtag.event(action, {
        event_category: "not set",
        event_label: "not set",
        value: 1
      });
    }
  }
});
