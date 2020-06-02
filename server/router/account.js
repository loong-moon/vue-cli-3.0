/**
 * 账户功能-路由
 */

const router = require('koa-router')()
const account = require('../controller/account')


// 登录系统路由
router.post('/api/login', account.login)

// 获取菜单路由
router.get('/api/menu', account.login)

module.exports = router
