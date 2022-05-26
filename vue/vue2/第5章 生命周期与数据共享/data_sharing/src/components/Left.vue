<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <p>msg 的值是：{{ msg }}</p>
    <p>user 的值是：{{ user }}</p>
    <hr />
    <button @click="send">发送给Right</button>
  </div>
</template>

<script>
// 导入 eventBus.js 模块
import bus from "./eventBus.js";
export default {
  props: ["msg", "user"],
  data() {
    return {
      str: "床前明月光",
    };
  },
  methods: {
    send() {
      // 通过 eventBus 发送数据
      bus.$emit("share", this.str);
    },
  },
};
</script>

<style lang="less" scoped>
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
