const Koa = require('koa')

const app = new Koa()

// 请求body解析插件
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

// app.use((ctx, next) => {
//     next()
//     console.log(ctx.method, ctx.url, ctx.status, 'ssss')
// })

// 初始化路由中间件
const router = require('./router/index')
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
console.log('mock-server: http://localhost:3000')
