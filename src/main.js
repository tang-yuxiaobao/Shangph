import Vue from "vue";
import App from "./App.vue";
// 引入路由
import router from "./router/index";
// 引入仓库
import store from "./store";
// 三级联动组件(全局)
import TypeNav from "./components/TypeNav";
// 注册全局组件(全局组件名字，哪个组件)
Vue.component(TypeNav.name, TypeNav);

new Vue({
  render: (h) => h(App),
  // 注册路由
  router,
  // 注册仓库：组件实例上会多一个$store属性
  store,
}).$mount("#app");
