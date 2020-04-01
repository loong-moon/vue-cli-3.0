import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import global from '@/assets/js/global'
import '@/assets/sass/app.scss'

Vue.use(global)

Vue.config.productionTip = false

new Vue({
    router,
    store,
  render: h => h(App)
}).$mount('#app')
