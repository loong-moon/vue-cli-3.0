/****
 * 获取本地服务地址
****/
const os = require('os')
const network = os.networkInterfaces()

module.exports = {
  ipv6: network.WLAN[0],
  ipv4: network.WLAN[1],
  port: 3100,
  staticPort: 3200,
}