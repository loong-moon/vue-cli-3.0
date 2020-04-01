/****
 * 公共过滤器出口
****/

/**
 * 格式化日期
 * @param {any} date<必须>  // 日期，可以是日期对象，时间戳，字符串等
 * @param {string} fmt<可选>  // 格式
 * @returns {string} // 格式化后的字符串
 **/
export const formatDate = (date, fmt) => {
  if (!date) {
    return date
  } else {

    if (!fmt) {
      fmt = 'YYYY-MM-DD hh:mm:ss'
    }

    const isString = typeof date === 'string'
    const isFloatNUmber = /^[0-9]+.?[0-9]*/.test(date)
    const isHasSeparator = /[-:/]/.test(date)
    const time = isString && isFloatNUmber && !isHasSeparator ? new Date(parseFloat(date)) : new Date(date)

    const o = {
      'M+': time.getMonth() + 1, // 月份
      'D+': time.getDate(), // 日
      'h+': time.getHours(), // 小时
      'm+': time.getMinutes(), // 分
      's+': time.getSeconds(), // 秒
      'q+': Math.floor((time.getMonth() + 3) / 3), // 季度
      S: time.getMilliseconds() // 毫秒
    }
    if (/(Y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
      }
    }
    return fmt
  }
}

/**
 * 格式化金额
 * @param {number} number<必须>  // 需要格式化金额
 * @returns {string} fmtNumber // 格式化后的字符串
 **/
export const formatMoney = function (number) {
  if (!number) return 0
  try {
    return parseFloat(number).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  } catch (error) {
    return '-'
  }
}

/**
 * 用星号加密证件
 * @param {string} str<必须>  // 需要加密的字符串
 * @param {number} frontLen<必须>  // 前面保留的字符串长度
 * @param {number} endLen<必须>  // 后面保留的字符串长度
 * @returns {string} // 加密后的字符串
 **/
export const addStar = function (str, frontLen, endLen) {
  if (!str) {
    return str
  }

  const len = str.length - frontLen - endLen
  let starStr = ''
  for (var i = 0; i < len; i++) {
    starStr += '*'
  }
  starStr = str.substr(0, frontLen) + starStr + str.substr(str.length - endLen)
  return starStr
}

export default {
  formatDate,
  formatMoney,
  addStar
}
