<template>
  <div class="app-container">
    <h1>App 根组件</h1>

    <a href="#/home">首页</a>
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a>
    <hr />
    <components :is="comName"></components>
  </div>
</template>

<script>
// 导入组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'

export default {
  name: 'App',
  // 注册组件
  data() {
    return {
      comName: 'Home'
    }
  },
  created() {
    // 只要当前 App 组件一被创建，就立即监听 window 对象的 onhashchange 事件
    window.onhashchange = () => {
      switch (location.hash) {
        case '#/home':
          this.comName = 'Home'
          break
        case '#/movie':
          this.comName = 'Movie'
          break
        case '#/about':
          this.comName = 'About'
          break
      }
    }
  },
  components: {
    Home,
    Movie,
    About
  }
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
