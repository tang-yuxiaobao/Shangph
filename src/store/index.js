import Vue from "vue";
import Vuex from "vuex";
// Vuex是一个对象，里面有一个store方法（构造函数），可以初始化vue仓库
Vue.use(Vuex);
// 引入小仓库
import home from "./home";
import search from "./search";

// 对外暴露一个store类的实例
export default new Vuex.Store({
  // 实现vuex仓库模块式开发存储数据
  modules: {
    home,
    search,
  },
});
