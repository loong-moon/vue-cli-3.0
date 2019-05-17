/*
账户接口

包含接口：
1.添加英雄
2.获取英雄列表
 */

import axios from '@axios'



/**
 * 添加英雄
 * @param {object} data<必须>  // 请求传递的数据
 * @param {string} data.class<必须>  // 用户名
 * @param {string} data.name<必须> // 名字
 * @param {string} data.sex<必须> // 性别
 * @param {string} data.skill<必须> // 技能
 * @param {object} config<可选>  // 请求配置
 * @returns {object} response
 response.status<number> = [201 | 401] 201-成功  403-权限不足
 response.data<object> = {  // 返回的数据
    createAt: string, // 创建时间
    objectId: string,  // 英雄id
 }
 **/
export const addHero = async (data, config) => {
    const response = await axios.post(`/classes/hero`, data, config)
    return response || {}
}



/**
 * 获取英雄列表
 * @param {object} config<可选>  // 请求配置
 * @returns {object} response
 response.status<number> = [200 | 401] 200-成功  403-权限不足
 response.data<object> = {  // 返回的数据
    createAt: string, // 创建时间
    objectId: string,  // 英雄id
 }
 **/
export const fetchHeroList = async (config) => {
    const response = await axios.get(`/classes/hero`, config)
    return response || {}
}



export default {
    addHero,
    fetchHeroList,
}


