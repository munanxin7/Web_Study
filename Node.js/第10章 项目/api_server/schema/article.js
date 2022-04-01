// 文章的验证规则
const joi = require('joi');

// 定义标题、分类Id、内容、发布状态 的验证规则
const title = joi.string().required();
const content = joi.string().required().allow('');
const cate_id = joi.number().integer().min(1).required();
const state = joi.string().valid('已发布', '草稿').required();

// 向外暴露验证规则对象
exports.add_article_schema = {
    body: {
        title,
        content,
        cate_id,
        state
    }
}