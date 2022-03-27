// 导入express
const express = require('express');
// 创建 web 服务器
const app = express();

// 监听 GET 请求
app.get('/user', (req, res) => {
    // 向客户端响应
    res.send({
        name: 'privet',
        age: 18,
        gender: 'male'
    });
});

// 监听 POST 请求
app.post('/user', (req, res) => {
    res.send('请求成功！')
});

app.get('/', (req, res) => {
    // 获取客户端发送的查询参数
    // 注：默认是一个空对象
    console.log(req.query);
    res.send(req.query)
});

// 注： :id 是一个动态参数
app.get('/user/:id', (req, res) => {
    // 动态匹配的URL参数，默认是一个空对象
    console.log(req.params);
    res.send(req.params);
});

// 启动 web 服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
});