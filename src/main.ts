import { createApp } from 'vue'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/main.css'
import App from './App.vue'
import { env } from './config/env'
import { i18n } from './i18n'
import { loadAnalytics } from './services/analytics.service'
import { pinia } from './stores'

createApp(App).use(pinia).use(i18n).mount('#app')

loadAnalytics(env.googleAnalyticsId)
