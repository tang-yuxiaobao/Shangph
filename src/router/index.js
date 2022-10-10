// 配置路由的文件
import Vue from "vue";
import VueRouter from "vue-router";
// 将路由配置封装为一个模块
import routes from "./routes";

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
  routes,
  // 滚动行为
  scrollBehavior(to, from, savePosition) {
    // y代表滚动条在最上方
    return { y: 0 };
  },
});
