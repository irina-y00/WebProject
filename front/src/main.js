import Vue from 'vue'
import App from './App.vue'
import router from './router'
import DefaultLayout from '@/layouts/default-layout'

Vue.config.productionTip = false

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('default-layout', DefaultLayout);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')