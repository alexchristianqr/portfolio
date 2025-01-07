import { createStore } from 'vuex'
import Enviroment from './../env'
import es from '../locale/es.json.js'
import en from '../locale/en.json.js'
import modules from './modules'

// Crear el store con Vuex
export const store = createStore({
  modules,
  state: {
    language: {
      selected: es,
    },
    loading: {
      page: false,
    },
    alerts: [
      { label: 'error', content: null },
      { label: 'success', content: null },
      { label: 'warning', content: null },
      { label: 'info', content: null },
    ],
    env: Enviroment,
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
    },
    async setError(state, e) {
      console.error('[Mutations.setError]', { error: e })

      const modals = window.document.getElementsByClassName('modal')
      for (let i = 0; i < modals.length; i++) {
        modals[i].scrollTop = 0
      }

      if (typeof e.response === 'object') {
        const statusCode = e.response.status
        switch (statusCode) {
          case 402: // Require payment
            state.alerts[0].content = e.response.data.message
            break
          case 403: // Require Authorization
            state.alerts[0].content = e.response.data.message
            break
          case 422: // Unprocessable entity
            state.alerts[0].content = e.response.data.errors
            break
          case 500: // Server error
            state.alerts[0].content = 'Internal server error'
            break
          default:
            state.alerts[0].content = e.response.data.message
            break
        }
      } else if (e.message === 'Network Error') {
        state.alerts[0].content = e.message
      } else {
        state.alerts[0].content = e
      }
    },
  },
  getters: {
    selectedLanguage: (state) => {
      return state.language.selected
    },
    loadingPage: (state) => {
      return state.loading.page
    },
    env: (state) => state.env,
  },
})
