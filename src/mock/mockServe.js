// 引入mockjs模块
import Mock from "mockjs";
// 引入JSON数据格式
// webpack默认对外暴露的有：图片、JSON数据格式
import banner from "./banner.json";
import floor from "./floor.json";

// mock数据。参数(请求地址,请求数据)
Mock.mock("/mock/banner", { code: 200, data: banner }); // 模拟轮播图
Mock.mock("/mock/floor", { code: 200, data: floor }); // 模拟Floor组件的数据
