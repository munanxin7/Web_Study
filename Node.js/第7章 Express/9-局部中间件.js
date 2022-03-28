// 导入 express 模块
const express = require('express');

// 创建 express 实例
const app = express();

// 定义中间件函数
const mw1 = (req, res, next) => {
    console.log('调用了局部生效的中间件');
    next();
}

// 创建路由
app.get('/', mw1, (req, res) => {
    res.send('Home page');
});
app.get('/user', (req, res) => {
    res.send('User page');
});

// 调用 app.listen 方法，指定端口号并启动 web 服务器
app.listen(80, () => {
    console.log('express server running at http: //127.0.0.1');
});