<template>
  <div>
    <h5>Count 组件</h5>
    <p>count 的值是 {{ count }}</p>
    <button @click="count += 1">+1</button>
  </div>
</template>

<script>
export default {
  // props 是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值
  // props 中的数据可以直接在模板结构中使用
  // 注：只读
  // props:['init'],
  props: {
    init: {
      // 设置默认值为0
      default:0,
      // 设置格式为数字
      type:Number,
      // 必填项校验
      required:true
    }
  },
  data(){
    return {
      count:this.init
    }
  }
}
</script>

<style lang="less">

</style>