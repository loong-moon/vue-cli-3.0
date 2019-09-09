/*
公共接口
包含接口：
1.登录系统
 */

import axios from '@axios'



/**
 * 上报数据
 * @param {object} data<必须>  // 请求传递的数据
 * @param {string} data.type<必须> // 密码
 * @returns {object} response
 response.code<number> = [200 | 403 | 500] 200-成功  403-权限不足  500-服务器报错
 response.data<object> = {  // 返回的数据
 }
 **/
export const reportData = async (data) => {
    const response = await axios.post(`/report`, data)
    return response || {}
}
