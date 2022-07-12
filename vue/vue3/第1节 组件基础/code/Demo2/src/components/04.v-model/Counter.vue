<template>
  <div>
    <p>count 的值是：{{ number }}</p>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  name: 'MyCounter',
  props: ['number'],
  emits: ['update:number'],
  methods: {
    add() {
      this.$emit('update:number', this.number + 1)
    }
  }
}
</script>

<style></style>
