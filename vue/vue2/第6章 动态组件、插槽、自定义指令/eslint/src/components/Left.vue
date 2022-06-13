<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <button @click="getInfo">发起 GET 请求</button>
  </div>
</template>

<script>
export default {
  methods: {
    async getInfo () {
      const { data: res } = await this.$http.get('/api/get')
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.left-container {
  background-color: orange;
  min-height: 200px;
  flex: 1;
}
</style>
