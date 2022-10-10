// 对所有API进行统一管理
import requests from "./request";
import mockRequests from "./mockRequest";

// 三级联动接口
// /api/product/getBaseCategoryList get请求 无参数

// reqCategoryList即为封装的API
export const reqCategoryList = () =>
  requests.get(`/product/getBaseCategoryList`);

// 获取banner轮播图接口（不用传参）
export const reqGetBannerList = () => mockRequests.get("/banner");
// 获取floor数据
export const reqGetFloorList = () => mockRequests.get("/floor");
// 获取搜索模块数据（需要传参） 地址：/api/list 请求方式post 需要带参数
// 当前接口给服务器传递一个默认参数（至少是一个空对象）
export const reqGetSearchInfo = (params) =>
  requests({ url: "/list", method: "post", data: params });
// 获取产品详情信息的接口 url：/api/item/{ skuId } GET
export const reqGoodsInfo = (skuId) =>
  requests({ url: `/item/${skuId}`, method: "get" });
// 将产品添加到购物车中（获取更新某个产品的个数） /api/cart/addToCart/{ skuId }/{ skuNum } POST
export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
  requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: "post",
  });
