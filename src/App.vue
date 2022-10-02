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
