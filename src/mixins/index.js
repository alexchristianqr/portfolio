import Vue from 'vue'
import { store } from '../store'
import en from '../store/languages/en'
import es from '../store/languages/es'

Vue.mixin({
  mounted() {
    if (localStorage.getItem('lang')) {
      switch (localStorage.getItem('lang')) {
        case 'es':
          store.state.language.selected = es
          break
        case 'en':
          store.state.language.selected = en
          break
      }
    } else {
      localStorage.setItem('lang', 'en')
      store.state.language.selected = en
    }
  },
  computed: {
    selectedLanguage() {
      return store.getters.selectedLanguage
    },
    loadingPage() {
      return store.getters.loadingPage
    },
  },
})
