<template>
  <div class="article-container">
    <!-- 文章的标题 -->
    <div class="header-box">
      <slot name="title"></slot>
    </div>
    <!-- 文章的内容 -->
    <div class="content-box">
      <slot name="content" msg="hello vue" :user="userinfo"></slot>
    </div>
    <!-- 文章的作者 -->
    <div class="footer-box">
      <slot name="author"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      userinfo: {
        name: "privet",
        age: 18,
      },
    };
  },
};
</script>

<style lang="less" scoped>
.article-container {
  > div {
    min-height: 150px;
  }
  .header-box {
    background-color: pink;
  }
  .content-box {
    background-color: lightblue;
  }
  .footer-box {
    background-color: lightsalmon;
  }
}
</style>