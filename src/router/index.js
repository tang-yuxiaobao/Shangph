// 配置路由的文件
import Vue from "vue";
import VueRouter from "vue-router";
// 引入路由组件
import Home from "@/views/Home";
import Search from "@/views/Search";
import Login from "@/views/Login";
import Register from "@/views/Register";

// 使用插件
Vue.use(VueRouter);

// 重写 push 与 replace 方法。1 先保存一份VueRouter原型对象的方法
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 2 重写
// 第一个参数：告诉原来的push方法要往哪里跳转
// 第二三个参数：成功、失败的回调
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

// 配置路由
export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      // 用于判断footer组件是否展示
      meta: { show: true },
    },
    {
      name: "search",
      path: "/search/:keyword?",
      component: Search,
      meta: { show: true },
    },
    {
      path: "/login",
      component: Login,
      meta: { show: false },
    },
    {
      path: "/register",
      component: Register,
      meta: { show: false },
    },
    {
      // 重定向到首页
      path: "*",
      redirect: "/home",
    },
  ],
});
