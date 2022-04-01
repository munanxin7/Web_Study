// 文章的路由
// 导入 express 模块
const express = require('express');

// 创建路由实例
const router = express.Router();

// 导入路由处理模块
const article_handler = require('../router_handler/article');

// 导入解析表单数据的中间件
const multer = require('multer');
const path = require('path');

// 创建 multer 的实例对象，并且通过 dest 属性指定文件的存放路径
const upload = multer({
    dest: path.join(__dirname, '../uploads')
});

// 导入验证规则对象的中间件
const expressJoi = require('@escook/express-joi');
const {
    add_article_schema
} = require('../schema/article');

// 在这里挂载路由
router.post('/add', upload.single('cover_img'), expressJoi(add_article_schema), article_handler.addArticle);

module.exports = router;