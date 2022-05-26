<template>
  <div class="app-container">
    <h1>APP根组件 --- {{ countFromSon }}</h1>
    <hr />
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left :msg="message" :user="userinfo"></Left>
      <Right @numchange="getNewCount"></Right>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";

export default {
  data() {
    return {
      message: "hello vue",
      userinfo: {
        name: "privet",
        age: 18,
      },
      // 定义接收来自子组件传递的数据
      countFromSon: 0,
    };
  },
  methods: {
    getNewCount(val) {
      this.countFromSon = val;
    },
  },
  components: {
    Left,
    Right,
  },
};
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
