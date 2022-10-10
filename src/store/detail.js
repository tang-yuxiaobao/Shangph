// detail模块的小仓库

// 引入api
import { reqGoodsInfo, reqAddOrUpdateShopCart } from "../api";

const state = {
  goodInfo: {},
};
const mutations = {
  GETGOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  },
};
const actions = {
  // 获取产品信息的action
  async getGoodInfo({ commit }, skuId) {
    let result = await reqGoodsInfo(skuId);
    if (result.code == 200) {
      // 结构出commit，提交mutations
      commit("GETGOODINFO", result.data);
    }
  },
  // 将产品添加至购物车 ||修改某个产品的个数
  // 使用了async，所以这里返回一个promise对象
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    // 加入购物车返回的结构result：{code: 200, message: '成功', data: null, ok: true}
    // 加入购物车以后（发请求），前台将参数带给服务器
    // 服务器写入数据成功，并没有返回其他的数据，只是返回code=200，代表这次操作成功
    // 因为服务器没有返回其余数据，因此咱们不需要三连环（存储数据）

    // await等待成功or失败的结果
    let result = await reqAddOrUpdateShopCart(skuId, skuNum);
    // 返回成功或失败的结果
    if (result.code == 200) {
      // 看到code=200即存储成功
      return "ok";
    } else {
      // 加入购物车失败
      return Promise.reject(new Error("faile"));
    }
  },
};
const getters = {
  // 路径导航简化数据
  categoryView(state) {
    // 初始state.goodInfo是一个空对象，没有categoryView属性
    return state.goodInfo.categoryView || {};
  },
  // 简化产品信息数据
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
  // 简化产品售卖属性
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || [];
  },
};
export default {
  state,
  actions,
  mutations,
  getters,
};
