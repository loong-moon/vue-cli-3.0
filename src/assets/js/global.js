import axios from './axios'

// 全局过滤器
import filters from './filters'
import components from '@/components'
import api from '@/api'


export default {
    install (Vue) {
        // 注册全局过滤器
        for (let key of Object.keys(filters)) {
            Vue.filter(key, filters[key])
        }

        // 注册全局组件
        for (let key of Object.keys(components)) {
            Vue.component(components[key].name, components[key])
        }


        Vue.prototype.$http = axios
        Vue.prototype.$filters = filters
        Vue.prototype.$api = api
        Vue.config.productionTip = false
    }
}


