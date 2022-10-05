import Vue from "vue";
import App from "./App.vue";
// 引入路由
import router from "./router/index";
// 引入仓库
import store from "./store";
// 注册全局组件(全局组件名字，哪个组件)
// 三级联动组件(全局)
import TypeNav from "./components/TypeNav";
import Carousel from "./components/Carousel";
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
// 引入mock数据
import "@/mock/mockServe";
// 引入swiper样式
import "swiper/css/swiper.css";

new Vue({
  render: (h) => h(App),
  // 全局事件总线$bus配置
  beforeCreate() {
    // 这里的this是VM
    Vue.prototype.$bus = this;
  },
  // 注册路由
  router,
  // 注册仓库：组件实例上会多一个$store属性
  store,
}).$mount("#app");
