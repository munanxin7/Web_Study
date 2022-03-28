// 导入 express 模块
const express = require('express');

// 创建 express 实例
const app = express();

// 定义路由
app.get('/', (req, res) => {
    // 制造错误
    throw new Error('服务器发生错误');
    res.send('Home page');
});
// 定义错误级别的中间件，捕整个项目的异常错误
app.use((err, req, res, next) => {
    console.log('发生了错误!' + err.message);
    res.send('Error：' + err.message);
    next();
});

// 调用 app.listen 方法，指定端口号并启动 web 服务器
app.listen(80, () => {
    console.log('express server running at http: //127.0.0.1');
});