/**
 * http代理请求
 */
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (config) {
  return async function (ctx, next) {
    let options
    // 测试是否有匹配的url
    const isMatch = Object.keys(config).some(path => {
      if (ctx.url.startsWith(path)) {
        options = config[path]
        return true
      } else {
        return false
      }
    })

    if (isMatch) { // 匹配开头为'/api'的请求
      ctx.respond = false // 绕过koa内置对象response ，写入原始res对象，而不是koa处理过的response      
      const res = createProxyMiddleware(options)(ctx.req, ctx.res, next) // ctx.req, ctx.res 为原始的node对象
      return res // 返回一个promise对象
    } else {
      next() // 如果不匹配就继续后续处理
    }
    
  }
}