/****
 * 账户接口
****/

import axios from '@axios'

/**
 * 登录系统
 * @param {object} data<必须>  // 请求传递的数据
 * @param {string} data.username<必须>  // 用户名
 * @param {string} data.password<必须> // 密码
 * @returns {promise} 
 **/
export function login (data) {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}

/**
 * 退出系统
 * @returns {promise} 
 **/
export const logout = () => {
  return axios({
    method: 'post',
    url: '/login',
  })
}

