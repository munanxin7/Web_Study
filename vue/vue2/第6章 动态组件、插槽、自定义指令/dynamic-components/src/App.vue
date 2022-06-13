<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <hr />

    <button @click="comName = 'Left'">展示Left</button>
    <button @click="comName = 'Right'">展示Right</button>
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- keep-alive 可以把内部的组件进行缓存，而不是销毁组件 -->
      <!-- include 属性用来指定：只有名称匹配的组件会被缓存，多个组件名之间用 , 分隔 -->
      <keep-alive include="MyLeft">
        <!-- 1. components 标签是 vue 内置的，作用：组件的占位符 -->
        <!-- 2. is 属性的值，表示要渲染的组件的名字 -->
        <components :is="comName"></components>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
export default {
  data() {
    return {
      comName: "Left",
    };
  },
  components: {
    // 如果在“声明组件”的时候，没有为组件指定 name 名称，则组件默认为注册时的名称
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
