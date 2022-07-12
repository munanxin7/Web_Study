<template>
  <h1>这是<i>App.vue</i>根组件</h1>
  <hr />
  <my-swiper></my-swiper>
  <my-test></my-test>
  <hr />
  <my-search></my-search>
</template>

<script>
import Search from './components/02.privetReg/Search.vue'

export default {
  name: 'MyApp',
  data() {
    return {
      username: 'zs',
      count: 0
    }
  },
  methods: {},
  components: {
    'my-search': Search
  }
}
</script>

<style lang="less">
h1 {
  color: red;
  i {
    color: blue;
  }
}
</style>
