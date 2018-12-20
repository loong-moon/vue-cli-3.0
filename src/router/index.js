import Vue from 'vue'
import Router from 'vue-router'

import demo from './demo' // 样本

Vue.use(Router)

export default new Router({
    routes: [
        // 岗位管理
        ...demo,
        {
            path: '/',
            redirect: '/hello-world'
        }
    ]
})
