import axios from 'axios'
import { createSign } from './utils'


axios.defaults.timeout = 30000
// axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-LC-Id'] = 'gpUYlmosJCiTaqFwC2STRzMn-9Nh9j0Va'
axios.defaults.headers.common['X-LC-Sign'] = createSign('HWL95hKzCoXL9TRIT1LFrxIz')
// axios.defaults.headers.common['X-LC-Key'] = 'HWL95hKzCoXL9TRIT1LFrxIz'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.baseURL = '/1.1'
// 添加一个响应拦截器
axios.interceptors.response.use(
    function (res) {
        // 在这里对返回的数据进行处理
        // console.log(res)
        if (res.data.code === 'IAM_FAILED') {
            location.href = 'login.html'
        }
        return res
    },
    function (err) {
        // 处理请求错误
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '请求错误'
                    break

                case 401:
                    err.message = '未授权，请登录'
                    // location.href = ''
                    break

                case 403:
                    err.message = '拒绝访问'
                    break

                case 404:
                    err.message = `请求地址出错: ${err.response.config.url}`
                    break

                case 408:
                    err.message = '请求超时'
                    break

                case 500:
                    err.message = '服务器内部错误'
                    break

                case 501:
                    err.message = '服务未实现'
                    break

                case 502:
                    err.message = '网关错误'
                    break

                case 503:
                    err.message = '服务不可用'
                    break

                case 504:
                    err.message = '网关超时'
                    break

                case 505:
                    err.message = 'HTTP版本不受支持'
                    break

                default:
            }
        }

        return Promise.reject(err)
    }
)

export default axios
