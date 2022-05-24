<template>
  <div class="test-container">
    <h3 id="myh3">Test.vue 组件</h3>
    <p id="pp">message 的值是：{{ message }}</p>
    <button @click="message += '~'">修改message的值</button>
  </div>
</template>

<script>
export default {
  props:['info'],
  data(){
    return {
      message:'hello vue'
    }
  },
  methods: {
    show(){
      console.log('调用了 Test 组件的 show 方法！');
    }
  },
  // 创建阶段的第一个生命周期函数
  beforeCreate() {
    // console.log(this.info);
    // console.log(this.message);
    // this.show();
  },
  // 
  created() {
    // console.log(this.info);
    // console.log(this.message);
    // this.show();
    // const dom=document.querySelector('#myh3');
    // console.log(dom);
  },
  beforeMount() {
    // const dom=document.querySelector('#myh3');
    // console.log(dom);
  },
  mounted() {
    // const dom=document.querySelector('#myh3');
    // console.log(dom);
  },
  beforeUpdate() {
    // console.log('beforeUpdate');
    // const dom=document.querySelector('#pp');
    // console.log(dom.innerHTML);
  },
  updated() {
    // console.log('updated');
    // const dom=document.querySelector('#pp');
    // console.log(dom.innerHTML);
  },
  beforeDestroy() {
    console.log('beforeDestroy');
    console.log(this.message);
  },
}
</script>

<style lang="less">
.test-container {
  background-color: pink;
  height: 200px;
}

</style>