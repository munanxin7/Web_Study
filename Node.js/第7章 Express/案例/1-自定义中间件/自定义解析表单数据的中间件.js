// 导入 express 模块
const express = require('express');
const customBodyParser = require('./custom-body-parser');

// 创建 express 实例
const app = express();

// 解析表单数据的中间件
app.use(customBodyParser);
app.post('/user', (req, res) => {
    res.send(req.body);
});

// 调用 app.listen 方法，指定端口号并启动 web 服务器
app.listen(80, () => {
    console.log('express server running at http: //127.0.0.1');
});