/**
 * 账户接口
 */

// const Mock = require('mockjs')

module.exports = {

  // 登录返回数据
  loginMockData: {
    code: 200,
    data: {
      englishName: 'admin', // 英文名
      userName: '管理员', // 用户名
    },
    message: null,
  },

  // 菜单返回数据
  menuMockData: {
    code: 200,
    data: [],
    message: null,
  }
}
