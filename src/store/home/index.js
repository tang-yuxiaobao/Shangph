// home模块的小仓库

// 引入api
import { reqCategoryList } from "../../api";

const state = {
  // 应根据接口的返回值去初始化state中的数据
  categoryList: [],
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    // 修改state中的数组
    state.categoryList = categoryList; // 这里的categoryList就是action提交过来的result.data
    state.categoryList.length = 16;
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
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
