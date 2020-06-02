/**
 * 跨域处理和options请求处理
 */

module.exports = function () {
  return async function (ctx, next) {
    // 处理cors
    if (ctx.header['sec-fetch-mode'] === 'cors') {
      const origin = ctx.header.origin
      const headers = ctx.header['access-control-request-headers']
      const method = ctx.header['access-control-request-method']

      ctx.set('Access-Control-Allow-Credentials', 'true') // 设置为true时，Access-Control-Allow-Origin不能为 *
      ctx.set('Access-Control-Allow-Origin', origin)

      if (headers) {
        ctx.set('Access-Control-Allow-Headers', headers)
      }
      if (method) {
        ctx.set('Access-Control-Allow-Methods', method)
      }
    }
        
    // 处理options请求
    if (ctx.method === 'OPTIONS') {
      ctx.status = 200 // 直接返回
    } else {
      await next() // 继续执行后面的处理
    }
        
    // console.log(ctx.header, ctx.url, ctx.status, 'ssss')
  }
}