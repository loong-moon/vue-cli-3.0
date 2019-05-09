/*
账户接口

包含接口：
1.登录系统
2.退出系统
3.获取菜单
4.修改密码
 */

import axios from '@axios'



/**
 * 登录系统
 * @param {object} data<必须>  // 请求传递的数据
 * @param {string} data.username<必须>  // 用户名
 * @param {string} data.password<必须> // 密码
 * @param {object} config<可选>  // 请求配置
 * @returns {object} response
 response.code<number> = [200 | 403 | 500] 200-成功  403-权限不足  500-服务器报错
 response.data<object> = {  // 返回的数据
    englishName: string, // 英文名
    userName: string,  // 用户名
 }
 **/
export const login = async (data, config) => {
    const response = await axios.post(`/login`, data, config)
    return response || {}
}



/**
 * 退出系统
 * @param {object} config<可选>  // 请求配置
 * @returns {object} response
 response.code<number> = [200 | 403 | 500] 200-成功  403-权限不足  500-服务器报错
 response.data null
 **/
export const logout = async (config) => {
    const response = await axios.post(`/logout`, null, config)
    return response || {}
}


/**
 * 获取菜单
 * @param {object} config<可选>  // 请求配置
 * @returns {object} response
 response.code<number> = [200 | 403 | 500] 200-成功  403-权限不足  500-服务器报错
 response.data<array>
 **/
export const fetchMenu = async (config) => {
    const response = await axios.get(`/basic/menu`, config)
    return response || {}
}


/**
 * 修改密码
 * @param {object} data<必须>  // 请求传递的数据
 * @param {string} data.newPwd<必须>  // 新密码
 * @param {object} config<可选>  // 请求配置
 * @returns {object} response
 response.code<number> = [200 | 403 | 500] 200-成功  403-权限不足  500-服务器报错
 response.data<null>
 **/
export const updatePassword = async (data, config) => {
    const response = await axios.put(`/basic/pwd`, data, config)
    return response || {}
}


