<template>
  <div class="right-container">
    <h3>Right 组件</h3>
    <button @click="postInfo">发起 POST 请求</button>
  </div>
</template>

<script>

export default {
  methods: {
    async postInfo () {
      const { data: res } = await this.$http.post('/api/post', { name: 'privet', age: 20 })
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.right-container {
  background-color: skyblue;
  min-height: 200px;
  flex: 1;
}
</style>
