// 导入 express 模块
import express from 'express'
import { getAllUser } from '../controller/user_ctrl.js'

// 创建路由实例
const router = express.Router()

// 在这里挂载路由
router.get('/user', getAllUser)

export default router
