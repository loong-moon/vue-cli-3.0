/****
 * 工具函数统一出口
****/
// import md5 from 'blueimp-md5'

/**
 * 添加cookie
 * @param {string} name<必须>  // cookie名
 * @param {string} value<必须>  // cookie值
 * @param {number} expiresHours<必须>  // 过期时间
 **/
export const addCookie = (name, value, expiresHours) => {
  let cookieString = name + '=' + escape(value) + '; path=/'
  // 判断是否设置过期时间
  if (expiresHours > 0) {
    const date = new Date()
    date.setTime(date.getTime + expiresHours * 3600 * 1000)
    cookieString = cookieString + '; expires=' + date.toUTCString()
  }
  document.cookie = cookieString
}

/**
 * 获取cookie
 * @param {string} name<必须>  // cookie名
 **/
export const getCookie = name => {
  const strCookie = document.cookie
  const arrCookie = strCookie.split(';')
  for (let i = 0; i < arrCookie.length; i++) {
    const arr = arrCookie[i].split('=')
    if (arr[0] === name) return unescape(arr[1])
  }
  return ''
}

/**
 * 删除cookie
 * @param {string} name<必须>  // cookie名
 **/
export const deleteCookie = name => {
  const date = new Date()
  date.setTime(date.getTime() - 10000)
  document.cookie = name + '=; path=/; expires=' + date.toUTCString()
}

/**
 * 事件绑定方法
 * @param {object} element<必须>  // dom对象
 * @param {string} type<必须>  // 事件类型
 * @param {function} handler<必须>  // 触发事件后的回调函数
 **/
export const bindEvent = (element, type, func) => {
  if (element.addEventListener) {
    element.addEventListener(type, func, false)
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, func)
  } else {
    element['on' + type] = func
  }
}

/**
 * 移除事件绑定
 * @param {object} element<必须>  // dom对象
 * @param {string} type<必须>  // 事件类型
 * @param {function} handler<必须>  // 触发事件后的回调函数
 **/
export const removeEvent = (element, type, handler) => {
  if (element.removeEventListener) {
    element.removeEventListener(type, handler, false)
  } else if (element.detachEvent) {
    element.detachEvent('on' + type, handler)
  } else {
    element['on' + type] = null
  }
}

/**
 * 深拷贝
 * @param {object} obj<必须>  // 被拷贝的对象
 * @returns {object} c // 拷贝后返回的对象
 **/
export const deepCopy = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj
  const clone = Array.isArray(obj) ? [] : {}
  for (const i in obj) {
    if (typeof obj[i] === 'object') {
      deepCopy(obj[i])
    } else {
      clone[i] = obj[i]
    }
  }
  return clone
}

// 转换字节尺寸
export const bytesToSize = (bytes, num) => {
  if (bytes === 0) return '0 B'
  if (!num) {
    num = 2
  }
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return (bytes / Math.pow(k, i)).toFixed(num) + ' ' + sizes[i]
}

// 格式化字符串时间
export const formatStringTime = str => {
  let time
  if (!str) return
  if (str.length === 14) {
    time =
            str.slice(0, 4) +
            '/' +
            str.slice(4, 6) +
            '/' +
            str.slice(6, 8) +
            ' ' +
            str.slice(8, 10) +
            ':' +
            str.slice(10, 12) +
            ':' +
            str.slice(12, 14)
  }
  return time
}

// 转换秒成为字符串
export const secondToString = second => {
  let sec = parseInt(second)
  let min = '00'
  let hour = '00'
  if (sec < 10) {
    sec = '0' + sec
  }
  let time = hour + ':' + min + ':' + sec
  if (sec >= 60) {
    sec = sec % 60
    min = parseInt(sec / 60)
    if (sec < 10) {
      sec = '0' + sec
    }
    if (min < 10) {
      min = '0' + min
    }
    time = hour + ':' + min + ':' + sec

    if (min >= 60) {
      min = min % 60
      hour = parseInt(min / 60)
      if (min < 10) {
        min = '0' + min
      }
      if (hour < 10) {
        hour = '0' + hour
      }
      time = hour + ':' + min + ':' + sec
    }
  }

  return time
}


// 计算字符串所占字节数
export const sizeof = (str, charset) => {
  let total = 0
  let charCode
  let i
  let len

  charset = charset ? charset.toLowerCase() : ''
  if (charset === 'utf-16' || charset === 'utf16') {
    for (i = 0, len = str.length; i < len; i++) {
      charCode = str.charCodeAt(i)
      if (charCode <= 0xffff) {
        total += 2
      } else {
        total += 4
      }
    }
  } else {
    for (i = 0, len = str.length; i < len; i++) {
      charCode = str.charCodeAt(i)
      if (charCode <= 0x007f) {
        total += 1
      } else if (charCode <= 0x07ff) {
        total += 2
      } else if (charCode <= 0xffff) {
        total += 3
      } else {
        total += 4
      }
    }
  }
  return total
}

// 生成唯一标识
export const guid = () => {
  return (
    Math.random()
      .toString()
      .substr(3, 4) + Date.now().toString(36)
  )
}

// 获取当前url的参数
export const GetQuery = name => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const r = window.location.search.substr(1).match(reg) // 获取url中"?"符后的字符串并正则匹配
  if (r != null) {
    return encodeURIComponent(r[2])
  }
  return null
}

// 获取给定文件url扩展名
export const getExtend = url => {
  const index = url.lastIndexOf('.')
  const extend = url.slice(index + 1) // 后缀名
  return extend
}
