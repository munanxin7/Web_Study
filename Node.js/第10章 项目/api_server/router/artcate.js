// 文章分类的路由模块

// 导入 express 模块
const express = require('express');

// 创建路由实例
const router = express.Router();

// 导入文章分类处理对应的模块
const artcate_handler = require('../router_handler/artcate');

// 导入验证规则的中间件
const expressJoi = require('@escook/express-joi');
const {
    add_cates_schema,
    delete_cate_schema,
    get_cate_schema,
    update_cate_schema
} = require('../schema/artcate');

// 在这里挂载路由
// 获取文章分类列表数据的路由
router.get('/cates', artcate_handler.getArtCates);

// 新增文章分类的路由
router.post('/addcates', expressJoi(add_cates_schema), artcate_handler.addArtCates);

// 删除文章分类列表数据的路由
router.get('/deletecate/:id', expressJoi(delete_cate_schema), artcate_handler.deleteCateByID);

// 根据 id 获取文章分类
router.get('/cates/:id', expressJoi(get_cate_schema), artcate_handler.getArtCateById);

// 根据 id 更新文章分类
router.post('/updatecate', expressJoi(update_cate_schema), artcate_handler.updateCateByID);

module.exports = router;