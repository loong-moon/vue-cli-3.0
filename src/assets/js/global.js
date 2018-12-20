import axios from './axios'

// 全局过滤器
import { formatDateTime, plusStar } from './utils'

const components = {}

const filters = {
    formatDateTime, // 格式化时间
    plusStar, // 加密证件
}


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
        Vue.config.productionTip = false
    }
}


