<template>
  <div class="movie-container">
    <h3>Movie 组件 --- {{ $route.params.id }} ---- {{ id }}</h3>
    <button @click="showThis">打印</button>
    <button @click="goback">后退</button>
    <button @click="$router.back()">back</button>
    <button @click="$router.forward()">forward</button>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  // 接收 props 数组
  props: ['id'],
  methods: {
    showThis() {
      console.log(this)
    },
    goback() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: lightsalmon;
  padding: 15px;
}
</style>
