/**
 * 账户功能-接口
 */

// const Mock = require('mockjs')

module.exports = {

  // 登录返回数据
  loginMockData: {
    statusCode: 500,
    data: {
      englishName: 'admin', // 英文名
      userName: '管理员', // 用户名
    },
    message: '服务器错误',
  },

  // 菜单返回数据
  menuMockData: {
    statusCode: 200,
    data: [],
    message: null,
  }
}
