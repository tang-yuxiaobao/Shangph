// 引入路由组件
import Home from "@/views/Home";
import Search from "@/views/Search";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Detail from "@/views/Detail";
import AddCartSuccess from "@/views/AddCartSuccess";

// 配置路由信息
export default [
  {
    // 路由的路径都是小写的
    path: "/addcartsuccess",
    name: "addcartsuccess",
    component: AddCartSuccess,
    meta: { isshow: true }, // footer
  },
  {
    // 路由跳转到详情页时要传参（产品的ID），因此这里需要地址占位
    path: "/detail/:skuid",
    component: Detail,
    meta: { isshow: true },
  },
  {
    path: "/home",
    component: Home,
    // 用于判断footer组件是否展示
    meta: { isshow: true },
  },
  {
    name: "search",
    path: "/search/:keyword?",
    component: Search,
    meta: { isshow: true },
  },
  {
    path: "/login",
    component: Login,
    meta: { isshow: false },
  },
  {
    path: "/register",
    component: Register,
    meta: { isshow: false },
  },
  {
    // 重定向到首页
    path: "*",
    redirect: "/home",
  },
];
