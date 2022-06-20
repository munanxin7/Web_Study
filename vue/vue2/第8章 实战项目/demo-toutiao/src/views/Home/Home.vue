<template>
  <div>
    <!-- 头部区域 -->
    <van-nav-bar title="黑马头条" fixed placeholder />
    <!-- 导入，注册，并使用 ArticleInfo 组件 -->
    <!-- 在使用组件的时候，如果某个属性名是“小驼峰”形式，则绑定属性的时候，建议改成“连字符”格式 -->
    <van-pull-refresh
      v-model="isLoading"
      :disabled="finished"
      @refresh="onRefresh"
    >
      <van-list
        :loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <ActicleInfo
          v-for="item in artlist"
          :key="item.id"
          :title="item.title"
          :author="item.aut_name"
          :cmt-count="item.comm_count"
          :pubdate="item.pubdate"
          :cover="item.cover"
        ></ActicleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// 按需导入 API 接口
import { getArticleListAPI } from '@/api/articleAPI.js'

// 导入需要的组件
import ActicleInfo from '@/components/Article/ArticleInfo.vue'

export default {
  name: 'Home',
  data() {
    return {
      // 页码值
      page: 1,
      // 每页显示多少条数据
      limit: 10,
      // 文章的数组
      artlist: [],
      // 是否正在加载下一页数据
      loading: true,
      // 所有数据是否加载完毕了
      finished: false,
      // 是否正在下拉刷新
      isLoading: false
    }
  },
  created() {
    this.initArticleList()
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList(isRefresh) {
      // 发起 GET 请求获取文章的列表数据
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      if (isRefresh) {
        // 如果是下拉刷新，则新数据在前，旧数据在后
        this.artlist = [...res, ...this.artlist]
        this.isLoading = false
      } else {
        // 如果是上拉加载更多，则旧数据在前，新数据在后
        this.artlist = [...this.artlist, ...res]
        this.loading = false
      }
      // 如果没有下一页数据则将 finished 改为 true
      if (res.length === 0) {
        this.finished = true
      }
    },
    // 只要 onload 被调用，就请求下一页数据
    onLoad() {
      // 1.让页码值 +1
      this.page++
      // 2. 重新请求接口获取数据
      this.initArticleList()
    },
    // 下拉刷新
    onRefresh() {
      // 1.让页码值 +1
      this.page++
      // 2.重新请求接口获取数据
      this.initArticleList(true)
    }
  },
  components: {
    ActicleInfo
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar {
  background-color: #007bff;
}
/deep/ .van-nav-bar__title {
  color: white;
}
</style>
