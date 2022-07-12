<template>
  <div>
    <p>count 的值是：{{ count }}</p>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  name: 'MyCounter',
  emits: ['countChange'],
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      this.count++
      // this.$emit() 触发自定义事件
      this.$emit('countChange', this.count)
    }
  }
}
</script>

<style></style>
