import axios from 'axios'
import configApi from '../../config/config.api'
const env = ENV;
const replaceUrl = REPLACEURL
//请求前拦截器
axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断localStorage中是否存在登录的用户信息
        // 如果存在，则统一在http请求的header都加上用户信息，这样后台根据用户信息判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        // config.headers.Authorization = localStorage.getItem('Authorization');
        if (replaceUrl) {
            if (env == 'development') {
                config.url = config.url.replace("/api", configApi.testApi.apiUrl)
            }
            if (env == 'production') {
                config.url = config.url.replace("/api", configApi.prodApi.apiUrl)
            }
        }
        return config;
    },
    error => {
        return Promise.error(error);
    }
)

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    console.log(error)
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default axios;