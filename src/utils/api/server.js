import axios from 'axios';
import {apiUrl, isTest} from "../../assets/common/config";


const service = axios.create({
  timeout: 20000
});
// 请求拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((response) => {
    return response
  },
  error => {
    // 失败响应
    return Promise.reject(error.response)
  }
);

service.apiUrl = apiUrl;
service.isTest = isTest;

export default service
