<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(carousel, index) in list"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    list: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          var mySwiper = new Swiper(
            // $nextTick：在下次更新 DOM 和循环结束之后执行延迟回调（获取更新后的 DOM）
            // 使用ref方式获取DOM
            this.$refs.cur,
            {
              loop: true,
              // 如果需要分页器
              pagination: {
                el: ".swiper-pagination",
                // 点击小球可切换图片
                clickable: true,
              },
              // 如果需要前进、后退按钮
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            }
          );
        });
      },
    },
  },
};
</script>

<style scoped></style>
