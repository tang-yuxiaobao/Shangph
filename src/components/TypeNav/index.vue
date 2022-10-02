<template>
  <!-- 三级联动 -->
  <div class="type-nav">
    <div class="container">
      <!-- 事件的委派 -->
      <div @mouseleave="leaveIndex" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <!-- 三级联动 -->
        <transition name="sort">
          <div class="sort" v-show="show">
            <!-- 编程式导航 + 事件的委派 实现路由的跳转与传递参数 -->
            <div class="all-sort-list2" @click="goSearch">
              <!-- 遍历一级标题，:key需要去仓库中查看 -->
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ cur: currentIndex == index }"
              >
                <h3 @mouseenter="changeIndex(index)">
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <!-- 二、三级分类 -->
                <div class="item-list clearfix" v-show="currentIndex == index">
                  <div
                    class="subitem"
                    v-for="(c2, index) in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <!-- 三级标记使用em去做 -->
                        <em
                          v-for="(c3, index) in c2.categoryChild"
                          :key="c3.categoryId"
                        >
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
// 获取仓库中的数据
import { mapState } from "vuex";
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      // 存储用户鼠标移到了哪个一级分类上
      currentIndex: -1,
      show: true,
    };
  },
  // 组件挂载完毕：向发出请求、展示数据
  mounted() {
    // 通知Vuex发请求，获取数据，存储到仓库中
    this.$store.dispatch("categoryList"); // 派发一个action
    // 组件挂在完毕，使show为false
    if (this.$route.path != "/home") {
      this.show = false;
    }
  },
  computed: {
    // 映射为组件中的属性
    ...mapState({
      // 右侧需要要一个函数，当使用这个计算属性的时候右侧函数会立即执行一次
      // 参数state，即大仓库中的数据
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    // 鼠标进入则修改响应式数据的currentIndex属性
    changeIndex: throttle(function (index) {
      // 节流（ES5写法）

      // 鼠标所指一级分类的索引值
      this.currentIndex = index;
    }, 50),

    // 进行路由跳转的方法
    goSearch(event) {
      let element = event.target;
      // 获取当前触发事件的节点（可能是h3、a、dt、dl），需要的是 带有data-categoryName的节点（一定是a标签）
      let { categoryname, category1id, category2id, category3id } =
        element.dataset;
      // 有categoryname一定是a标签
      if (categoryname) {
        // 整理路由跳转的参数
        let location = { name: "search" }; // 往哪跳转
        let query = { categoryName: categoryname }; // query携带参数
        // 一二三级分类的a标签
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        // 把query添加到location上
        location.query = query;
        // 路由跳转
        this.$router.push(location);
      }
    },
    // 鼠标移入的时候，展示商品分类列表
    enterShow() {
      if (this.$route.path != "/home") {
        this.show = true;
      }
    },
    // 鼠标移出的事件回调
    leaveIndex() {
      //鼠标移出，currentIndex变为-1
      this.currentIndex = -1;
      // 判断：只有search路由组件的才会执行
      if (this.$route.path != "/home") {
        this.show = false;
      }
    },
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            // line-height: 30px;
            line-height: 28px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            // display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }

    // 过渡动画的样式
    // 动画开始状态（进入）
    .sort-enter {
      height: 0px;
    }
    // 动画结束状态
    .sort-enter-to {
      height: 461px;
    }
    // 动画的时间、速率
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>
