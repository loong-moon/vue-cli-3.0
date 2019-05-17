import Vue from 'vue'
import router from './router'
import store from './store'
import global from '@/assets/js/global'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import '@/assets/sass/_app.scss'


Vue.use(global)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    router,
    store,
  render: h => h(App)
}).$mount('#app')
