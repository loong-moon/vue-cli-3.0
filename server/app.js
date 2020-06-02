/****
 * 服务启动文件，请求由路由处理
****/

const Koa = require('koa')

const app = new Koa()

// 配置端口
const local = require('./conf/local')
const host = local.ipv4.address
const port = local.port

// // 跨域处理，当前端请求使用反向代理时不需要
// const corsHandle = require('./middleware/cors-handle')
// app.use(corsHandle())

// 请求body解析插件
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

// 初始化路由中间件
const router = require('./router/index')
app.use(router.routes()).use(router.allowedMethods())

app.listen(port)
console.log(`mock-server:\nhttp://localhost:${port}\nhttp://${host}:${port}`)
