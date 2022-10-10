// home模块的小仓库

// 引入api
import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "../api";

const state = {
  // 应根据接口的返回值去初始化state中的数据
  // home仓库中的三级菜单数据
  categoryList: [],
  // 轮播图数据
  bannerList: [],
  floorList: [],
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    // 修改state中的数组
    state.categoryList = categoryList; // 这里的categoryList就是action提交过来的result.data
    state.categoryList.length = 16;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};
const actions = {
  // 通过API里的接口函数调用，向服务器发请求，获取服务器的数据
  // 结构出commit，提交mutations
  async categoryList({ commit }) {
    let result = await reqCategoryList(); // 拿到promise成功的结果（服务器返回的是一个数组）
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data);
    }
  },
  // 获取首页轮播图的数据
  async getBannerList({ commit }) {
    let result = await reqGetBannerList();
    if (result.code == 200) {
      commit("GETBANNERLIST", result.data);
    }
  },
  // 获取floor数据
  async getFloorList({ commit }) {
    let result = await reqGetFloorList();
    if (result.code == 200) {
      // 提交 mutation
      commit("GETFLOORLIST", result.data);
    }
  },
};
// 计算属性
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
