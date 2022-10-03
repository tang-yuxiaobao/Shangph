// 对 axios 进行二次封装
import axios from "axios";
// 引入进度条
import nprogress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";

// 利用axios对象的方法create创建一个axios实例，再稍微配置一下
const requests = axios.create({
  // 配置对象
  // 基础路径：发送请求的时候路径中会出现api
  baseURL: "/mock",
  // 请求超时的时间
  timeout: 5000,
});

// 请求拦截器：在请求发出前做一些事
requests.interceptors.request.use((config) => {
  // config：配置对象，对象里有个 header 请求头
  // 进度条开始动
  nprogress.start();
  return config;
});
// 响应拦截器
requests.interceptors.response.use(
  (res) => {
    // 成功的回调：服务器响应数据回来后，拦截器可以检测到，可以做一些事
    // 进度条结束
    nprogress.done();
    return res.data;
  },
  (error) => {
    // 响应失败的回调函数
    return Promise.reject(new Error("failed"));
  }
);

export default requests;
