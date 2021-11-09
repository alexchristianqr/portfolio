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
          state.language.selected = es
          break
        case 'en':
          localStorage.setItem('lang', 'en')
          state.language.selected = en
          break
      }
    },
    setLoadingPage(state, payload) {
      console.log('[Mutations.setLoadingPage]', payload)
      state.loading.page = payload
      window.location.reload(true)
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
