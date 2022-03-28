// 导入 express 模块
const express = require('express');

// 创建路由实例
const router = express.Router();

// 在这里挂载路由
router.get('/get', (req, res) => {
    // 通过 req.query 获取客户端通过查询字符串发送到服务器的数据
    const query = req.query;
    // 向客户端响应处理的结果
    res.send({
        status: 0, // 0 表示处理成功，1 表示处理失败
        msg: 'GET 请求成功', // 状态的描述
        data: query // 响应的数据

    });
});

router.post('/post', (req, res) => {
    // 通过 req.body 获取请求体中包含 url-encoded 格式的数据
    const body = req.body;
    // 向客户端响应处理的结果
    res.send({
        status: 0,
        msg: 'POST 请求成功',
        data: body
    })
})

module.exports = router;