<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <hr />
    <Article>
      <template #title>
        <h3>静夜思</h3>
      </template>

      <template #content="{ msg, user }">
        <div>
          <p>床前明月光，</p>
          <p>疑是地上霜。</p>
          <p>举头望明月，</p>
          <p>低头思故乡。</p>
          <p>{{ msg }}</p>
          <p>{{ user.name }}</p>
        </div>
      </template>

      <template #author>
        <div>作者：李白</div>
      </template>
    </Article>

    <hr />

    <div class="box" style="display: none">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left>
        <!-- 默认在使用组件的时候，提供的内容都会被填充到名字为 default 的插槽中 -->
        <!-- 如果要把内容填充到指定的插槽中，需要使用 v-slot 简写为 # -->
        <!-- 注：v-slot 必须用在 template 标签上 -->
        <!-- 注：template 标签是一个虚拟的标签，不被渲染 -->
        <template #default>
          <p>这是在 Left 组件的内容区域，声明的 p 标签</p>
        </template>
      </Left>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Article from "@/components/Article.vue";
export default {
  components: {
    Left,
    Article,
  },
};
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
