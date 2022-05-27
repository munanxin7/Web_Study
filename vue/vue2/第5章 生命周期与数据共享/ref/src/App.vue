<template>
  <div class="app-container">
    <h1 ref="myh1">App 根组件</h1>
    <button @click="showThis">打印 this</button>
    <button @click="onReset">重置 Left 组件的 count 值为0</button>
    <hr />

    <input ref="iptRef" v-if="inputVisable" @blur="showButton" type="text" />
    <button v-else @click="showInput">展示输入框</button>
    <hr />

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left ref="comLeft"></Left>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
export default {
  data() {
    return {
      // 控制输入框和按钮的按需切换，默认值为 false，表示默认展示按钮，隐藏输入框
      inputVisable: false,
    };
  },
  methods: {
    showThis() {
      // console.log(this);
      this.$refs.myh1.style.color = "red";
    },
    onReset() {
      // this.$refs.comLeft.resetCount();
      this.$refs.comLeft.count = 0;
    },
    showInput() {
      this.inputVisable = true;
      this.$nextTick(() => {
        this.$refs.iptRef.focus();
      });
    },
    showButton() {
      this.inputVisable = false;
    },
  },
  components: {
    Left,
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
