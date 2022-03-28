const express = require('express');

const app = express();

// 定义中间件函数
const mw = function (req, res, next) {
    console.log('这是一个中间件函数');
    // 把流转关系转交给下一个中间件或路由
    next();
}

// 全局生效的中间件
app.use(mw);

app.get('/', (req, res) => {
    res.send('Home');
});
app.get('/user', (req, res) => {
    res.send('user');
});

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
});