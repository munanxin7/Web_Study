<template>
  <div class="test-box">
    <h3>用户自定义的 Test.vue --- {{ username }}</h3>
    <button @click="changeName">修改用户名 </button>
  </div>

</template>

<script>
export default {
  // data 数据源
  // 注：vue 组件中的 data 不能指向对象，必须是一个函数
  data(){
    // return 中可以定义数据
    return {
      username:'privet'
    }
  },
  methods: {
    changeName(){
      // 在组件中，this 就表示当前组件的实例对象
      console.log(this);
      this.username='mumu'
    }
  },
}
</script>

<style lang="less">
  .test-box {
    background-color: pink;
    h3 {
      color: red;
    }
  }
</style>