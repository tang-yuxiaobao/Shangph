// 对所有API进行统一管理
import requests from "./request";

// 三级联动接口
// /api/product/getBaseCategoryList get请求 无参数

// reqCategoryList即为封装的API
export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" });
