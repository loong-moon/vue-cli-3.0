/****
 * 静态服务启动文件，请求会被代理到相应的服务器，路由请求会直接返回首页
****/

const Koa = require('koa')
const fs = require('fs')
const path = require('path')

const app = new Koa()

// 配置端口
const local = require('./conf/local')
const host = local.ipv4.address
const port = local.staticPort

// 静态服务
const staticServer = require('koa-static')
const staticPath = path.join(__dirname, '../build')
app.use(staticServer(staticPath))

// 代理请求, 需放在body解析之前
const proxyConfig = require('./conf/proxy-config')
const httpProxy = require('./middleware/http-proxy')
app.use(httpProxy(proxyConfig))

// 始终返回首页，用于处理浏览器中直接输入的路由请求
app.use((ctx, next) => {
  if (ctx.method === 'GET') {
    ctx.body = fs.readFileSync('./build/index.html', 'utf8')
  } else {
    next()
  }
})

app.listen(port)
console.log(`static-server:\nhttp://localhost:${port}\nhttp://${host}:${port}`)
