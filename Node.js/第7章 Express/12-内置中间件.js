// 导入 express 模块
const express = require('express');

// 创建 express 实例
const app = express();

// 注：除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
// 通过 express.json() 来解析表单中 JSON 格式的数据
app.use(express.json());
// 通过 express.urlencoded() 这个中间件。来解析表单中的 url-encoded 格式的数据
app.use(express.urlencoded({
    extended: false
}));

app.post('/user', (req, res) => {
    // 在服务器可以使用 req.body 属性接收客户端发送的请求体数据
    // 默认情况下。如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined
    console.log(req.body);
    res.send('ok');
});

app.post('/book', (req, res) => {
    console.log(req.body);
    res.send('ok');
});

// 调用 app.listen 方法，指定端口号并启动 web 服务器
app.listen(80, () => {
    console.log('express server running at http: //127.0.0.1');
});