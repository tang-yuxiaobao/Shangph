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
