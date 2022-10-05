// 对所有API进行统一管理
import requests from "./request";
import mockRequests from "./mockRequest";

// 三级联动接口
// /api/product/getBaseCategoryList get请求 无参数

// reqCategoryList即为封装的API
export const reqCategoryList = () =>
  requests.get(`/product/getBaseCategoryList`);

// 获取banner轮播图接口
export const reqGetBannerList = () => mockRequests.get("/banner");
// 获取floor数据
export const reqGetFloorList = () => mockRequests.get("/floor");
// 获取搜索模块数据 地址：/api/list 请求方式post 需要带参数
// 当前接口给服务器传递一个默认参数（至少是一个空对象）
export const reqGetSearchInfo = (params) =>
  requests({ url: "/list", method: "post", data: params });
