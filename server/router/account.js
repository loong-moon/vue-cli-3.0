/**
 * 账户功能-路由
 */

// import mockData from '../mock-data/system-other'

const router = require('koa-router')()
const mockData = require('../mock-data/account')


// 登录系统路由
router.post('/login', ctx => {
  ctx.body = mockData.loginMockData
  // console.log(ctx.query, ctx.params, ctx.request.body, '/login')
})

// 获取菜单路由
router.get('/sys/basic/menu', ctx => {
  ctx.body = mockData.menuMockData
  // console.log(ctx.url, ctx.status, ctx.body, '/login')
})

module.exports = router
