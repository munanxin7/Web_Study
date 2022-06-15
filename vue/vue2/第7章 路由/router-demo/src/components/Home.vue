<template>
  <div class="home-container">
    <h3>Home 组件</h3>

    <hr />

    <button @click="gotoLoki">通过push跳转到“洛基”页面</button>
    <button @click="gotoLoki2">通过replace跳转到“洛基”页面</button>
    <router-link to="/main">访问后台主页</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    gotoLoki() {
      // 通过编程式导航API，导航跳转到指定地址
      this.$router.push('/movie/1')
    },
    gotoLoki2() {
      this.$router.replace('/movie/1')
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  min-height: 200px;
  background-color: pink;
  padding: 15px;
}
</style>
