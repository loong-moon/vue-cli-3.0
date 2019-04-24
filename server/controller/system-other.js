/**
 * 系统管理-其他功能控制器
 */

import mockData from '../mock-data/account'

export default {

    // 登录路由控制器
    login (ctx) {
        ctx.body = mockData.loginMockData
        console.log(ctx.url, ctx.status, '/v1/login')
    },

}
