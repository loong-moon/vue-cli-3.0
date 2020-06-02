/**
 * 代理http请求配置
 */

module.exports = {
  '/api': {
    target: 'http://localhost:3100',
    changeOrigin: true
  }
}
