import axios from 'axios';

//创建axios实例
const request = axios.create({
  //代理，填写后端统一的前缀
  baseURL: '/api',
  timeout: 15000,
  withCredentials: true, //异步请求携带cookie
  // headers: {
  // 设置后端需要的传参类型
  // 'Content-Type': 'application/json',
  // 'token': x-auth-token',//一开始就要token
  // 'X-Requested-With': 'XMLHttpRequest',
  // },
});

//请求拦截器
request.interceptors.request.use(
  (config) => {
    // 如果去localStorage获取token
    // let token = localStorage.getItem("x-auth-token");
    // if (token) {
    //     config.headers = {"x-auth-token": token}
    // }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

//响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default request;
