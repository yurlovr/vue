import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import i18next from 'i18next'
import VueI18Next from '@panter/vue-i18next'
import { LOCALES_FOR_I18N } from '@/locales/locales'

Vue.config.productionTip = false

Vue.use(VueI18Next)

i18next.init({
  lng: 'rus',
  fallbackLng: 'rus',
  resources: LOCALES_FOR_I18N
})

const i18n = new VueI18Next(i18next)

new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
