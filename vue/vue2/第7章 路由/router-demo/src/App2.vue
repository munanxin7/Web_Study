<template>
  <div class="app-container">
    <h1>App2 组件</h1>

    <!-- 当安装和配置了 vue-router 后，就可以使用 router-link 来替代普通的 a 链接 -->
    <router-link to="/home">首页</router-link>
    <!-- 注：在 hash 地址中，/ 后面的参数项，叫做 路径参数 -->
    <!-- 在 路由参数 对象中，需要使用 this.$route.params 来访问路径参数 -->

    <!-- 注：在 hash 地址中，? 后面的参数项，叫做 查询参数 -->
    <!-- 在 路由参数 对象中，需要使用 this.$route.query 来访问查询参数 -->

    <!-- 注：在 this.$route中，path 只是路径部分，fullpath 是完整的地址 -->
    <router-link to="/movie/1">洛基</router-link>
    <router-link to="/movie/2?name=ls">雷神</router-link>
    <router-link to="/movie/3">复联</router-link>
    <router-link to="/about">关于</router-link>
    <hr />
    <!-- 只要在项目中安装和配置了 vue-router，就可以使用 -->
    <!-- 作用：占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
