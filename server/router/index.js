/**
 * 整合所有子路由
 */

const router = require('koa-router')()

const account = require('./account')

router.use('/v1', account.routes(), account.allowedMethods())

module.exports = router



