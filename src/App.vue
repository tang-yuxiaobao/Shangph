<template>
  <div>
    <myHeader></myHeader>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- App.vue -->
    <myFooter v-show="$route.meta.show"></myFooter>
  </div>
</template>

<script>
import myHeader from "./components/Header";
import myFooter from "./components/Footer";
export default {
  name: "",
  components: {
    myHeader,
    myFooter,
  },
  mounted() {
    // 通知Vuex发请求，获取数据，存储到仓库中
    this.$store.dispatch("categoryList"); // 派发一个action，获取三级列表的数据
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
