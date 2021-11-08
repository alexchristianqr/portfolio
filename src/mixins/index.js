import Vue from 'vue'
import { store } from '../store'
import en from '../store/languages/en'
// import es from '../store/languages/es'

Vue.mixin({
  mounted(){
    if(localStorage.getItem('lang')){
      store.state.language.selected = JSON.parse(localStorage.getItem('language'))
    }else{
      localStorage.setItem('lang', 'en')
      localStorage.setItem('language', JSON.stringify(en))
      store.state.language.selected = en
    }
  },
  computed: {
    selectedLanguage(){
      return store.getters.selectedLanguage
    },
    loadingPage(){
      return store.getters.loadingPage
    },
  }
})
