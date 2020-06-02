/**
 * 整合所有子路由
 */

const router = require('koa-router')()

const account = require('./account')

router.use('', account.routes(), account.allowedMethods())

module.exports = router



