<template>
  <div id="app">
    <button @click="flag=!flag">Toggle Flag</button>
    <Test info="你好" v-if="flag"></Test>
  </div>
</template>

<script>
import Test from '@/components/Test.vue';

export default {
  data() {
    return {
      flag:true
    }
  },
  components: {
    Test
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
