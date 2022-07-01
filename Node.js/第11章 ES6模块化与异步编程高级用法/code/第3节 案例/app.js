// 导入 express 模块
import express from 'express'
import userRouter from './router/user_router.js'

// 创建 express 实例
const app = express()

app.use('/api', userRouter)

// 调用 app.listen 方法，指定端口号并启动 web 服务器
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})
