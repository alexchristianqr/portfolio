import Vue from 'vue'
import Vuex from 'vuex'
import es from './languages/es'
import en from './languages/en'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    language: {
      selected: en,
    },
    loading: {
      page: false,
    },
  },
  mutations: {
    setLanguage(state, payload) {
      console.log('[Mutations.setLanguage]', payload)
      switch (payload) {
        case 'es':
          localStorage.setItem('lang', 'es')
          localStorage.setItem('language', JSON.stringify(es))
          break
        case 'en':
          localStorage.setItem('lang', 'en')
          localStorage.setItem('language', JSON.stringify(en))
          break
      }
    },
    setLoadingPage(state, payload) {
      console.log('[Mutations.setLoadingPage]', payload)
      state.loading.page = payload
      setTimeout(() => {
        window.location.reload()
      }, 1500)
    },
  },
  getters: {
    selectedLanguage: (state) => {
      return state.language.selected
    },
    loadingPage: (state) => {
      return state.loading.page
    },
  },
})
