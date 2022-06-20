// 文章相关的 API 接口

// 导入 request.js
import request from '@/utils/request.js'

export const getArticleListAPI = (_page, _limit) => {
  return request.get('/articles', {
    // 请求参数
    params: {
      _page,
      _limit
    }
  })
}
