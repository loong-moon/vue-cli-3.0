import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import global from '@/assets/js/global'
// import statistic from '@/assets/js/statistic'
import stater from 'vue-stater'
import '@/assets/js/rem-mobile'
import '@/assets/sass/_app.scss'
import { reportData } from '@/api/common.js'

console.log(stater, 'aaaa')
Vue.use(stater, {
    report: async function (data) {
        const result = await reportData(data)
        console.log(result)
    },
    debug: true
})

Vue.use(global)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
