import axios from '@axios'

// 全局过滤器
import filters from '@/utils/filters'
import components from '@/components'


export default {
  install (Vue) {
    // 注册全局过滤器
    for (const key of Object.keys(filters)) {
      Vue.filter(key, filters[key])
    }

    // 注册全局组件
    for (const key of Object.keys(components)) {
      Vue.component(components[key].name, components[key])
    }


    Vue.prototype.$http = axios
    Vue.prototype.$filters = filters
    Vue.config.productionTip = false
  }
}


