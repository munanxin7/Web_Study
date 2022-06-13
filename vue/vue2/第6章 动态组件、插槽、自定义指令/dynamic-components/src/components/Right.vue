<template>
  <div class="right-container">
    <h3>Right 组件</h3>
  </div>
</template>

<script>
export default {
  // 当提供了 name 之后，组件的名称就是 name 属性的值
  name: "MyRight",
};
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
